// Ekspor halaman lampiran menjadi PDF A4 memakai Chrome/Edge headless.
// Jalankan: npm run export:pdf
import { spawn, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { setTimeout as wait } from 'node:timers/promises';

const PORT = 5199;
const OUT_DIR = resolve('export');
const OUT = resolve(OUT_DIR, 'DRIVERA-Lampiran-UIUX.pdf');

const KANDIDAT = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
];

const browser = KANDIDAT.find((p) => existsSync(p));
if (!browser) {
  console.error('Chrome/Edge tidak ditemukan. Buka aplikasi lalu gunakan Ctrl+P → Save as PDF.');
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });

console.log('› membangun...');
if (spawnSync('npm', ['run', 'build'], { stdio: 'inherit', shell: true }).status !== 0) process.exit(1);

console.log('› menjalankan pratinjau...');
const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
  stdio: 'ignore',
  shell: true
});

const siap = async () => {
  for (let i = 0; i < 30; i++) {
    try {
      const r = await fetch(`http://localhost:${PORT}/`);
      if (r.ok) return true;
    } catch {}
    await wait(400);
  }
  return false;
};

try {
  if (!(await siap())) throw new Error('server pratinjau tidak merespons');

  console.log('› mencetak PDF...');
  const cetak = spawnSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--virtual-time-budget=12000',
    `--print-to-pdf=${OUT}`,
    `http://localhost:${PORT}/`
  ]);
  if (cetak.status !== 0) throw new Error('proses cetak gagal');

  console.log(`✓ ${OUT}`);
} catch (e) {
  console.error('✗', e.message);
  process.exitCode = 1;
} finally {
  server.kill();
}
