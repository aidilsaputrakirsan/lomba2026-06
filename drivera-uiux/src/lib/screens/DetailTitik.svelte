<script>
  import Icon from '../Icon.svelte';
  import TabBar from '../TabBar.svelte';
  import { BASE, TITIK, RISIKO } from '../data.js';

  let { onnav = null } = $props();
  const t = TITIK[0];
  const r = RISIKO[t.rk];

  // Distribusi risiko per jam (simulasi) — dasar fitur "waktu tertentu
  // ketika risiko meningkat" pada Traffic Risk Map.
  const jam = [
    { j: '00', v: 34 }, { j: '03', v: 22 }, { j: '06', v: 46 }, { j: '09', v: 31 },
    { j: '12', v: 38 }, { j: '15', v: 52 }, { j: '18', v: 71 }, { j: '21', v: 94 }
  ];
</script>

<div class="s-root">
  <div class="foto">
    <img src="{BASE}img/blackspot.jpg" alt="Rambu penanda lokasi rawan kecelakaan" />
    <div class="veil"></div>
    <button class="s-icobtn back" aria-label="Kembali" onclick={() => onnav?.('peta')}>
      <Icon name="back" size={16} />
    </button>
    <div class="fh">
      <span class="s-tag" style="color:{r.warna};background:{r.bg}">Risiko {r.label}</span>
      <b>{t.jalan}</b>
      <em>{t.id} · {t.jarak} di depan Anda</em>
    </div>
  </div>

  <div class="s-body">
    <div class="stat">
      <div><b>{t.laka}</b><em>Kecelakaan tercatat</em></div>
      <div><b>9</b><em>Terjadi malam hari</em></div>
      <div><b>{t.jam}</b><em>Jam puncak risiko</em></div>
    </div>

    <div class="s-card">
      <div class="ch">
        <b class="s-title">Risiko menurut jam</b>
        <span class="s-meta">Rata-rata 12 bulan</span>
      </div>
      <svg viewBox="0 0 240 74" role="img" aria-label="Grafik batang tingkat risiko ruas menurut jam">
        <defs>
          <linearGradient id="jg" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#17C4B8" /><stop offset="60%" stop-color="#FFB627" />
            <stop offset="100%" stop-color="#FF4D5E" />
          </linearGradient>
        </defs>
        {#each jam as h, i}
          {@const x = 8 + i * 29}
          <rect x={x} y={64 - (h.v / 100) * 56} width="18" height={(h.v / 100) * 56} rx="4"
                fill="url(#jg)" opacity={h.v > 65 ? 1 : 0.42} />
          <text x={x + 9} y="72" font-size="7" fill="#7F95AB" text-anchor="middle">{h.j}</text>
        {/each}
      </svg>
      <p class="note">
        Ruas ini bukan berbahaya sepanjang hari. Risikonya melonjak setelah gelap — itulah jendela
        waktu ketika peringatan DRIVERA paling berarti.
      </p>
    </div>

    <div class="s-card">
      <b class="s-title">Karakteristik ruas</b>
      <div class="kar">
        <span><Icon name="route" size={12} /> Tikungan radius kecil</span>
        <span><Icon name="eyeoff" size={12} /> Penerangan minim</span>
        <span><Icon name="rain" size={12} /> Genangan saat hujan</span>
        <span><Icon name="gauge" size={12} /> Kecepatan rata-rata 74 km/jam</span>
      </div>
    </div>

    <div class="aksi">
      <span class="ai"><Icon name="sparkle" size={14} /></span>
      <div>
        <b>Yang akan DRIVERA lakukan di sini</b>
        <p>
          Peringatan suara 700 m sebelum tikungan, saran kecepatan 40 km/jam, dan — bila indikator
          kelelahan Anda sedang naik — tawaran berhenti di rest area sebelum ruas ini dimasuki.
        </p>
      </div>
    </div>
  </div>

  <TabBar aktif="peta" {onnav} />
</div>

<style>
  .foto { position: relative; height: 208px; flex: none; }
  .foto img { width: 100%; height: 100%; object-fit: cover; }
  .veil {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(5,10,18,.66) 0%, rgba(5,10,18,.2) 40%, rgba(11,21,34,.97) 100%);
  }
  .back { position: absolute; top: 60px; left: 18px; }
  .fh { position: absolute; left: 20px; right: 20px; bottom: 12px; }
  .fh b { display: block; font-size: 17px; color: #fff; font-weight: 800; margin: 7px 0 2px; letter-spacing: -.02em; }
  .fh em { font-style: normal; font-size: 11px; color: #B6CBDD; }

  .s-body { gap: 10px; padding-top: 4px; }

  .stat { display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; }
  .stat div {
    padding: 10px 11px; border-radius: 13px;
    background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
  }
  .stat b { display: block; font-size: 17px; color: var(--ink-50); letter-spacing: -.03em; line-height: 1.15; }
  .stat em { font-style: normal; font-size: 9px; color: #7F95AB; line-height: 1.35; display: block; margin-top: 2px; }

  .ch { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 4px; }
  .s-card svg { width: 100%; display: block; }
  .note { font-size: 10px; color: #7F95AB; line-height: 1.5; margin-top: 5px; }

  .kar { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 9px; }
  .kar span {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 4px 9px; border-radius: 999px; font-size: 10px; font-weight: 700;
    background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.11); color: #A8BED2;
  }

  .aksi {
    display: flex; gap: 9px; align-items: flex-start;
    padding: 11px 12px; border-radius: 14px;
    background: rgba(23,196,184,.09); border: 1px solid rgba(23,196,184,.26);
  }
  .ai {
    width: 28px; height: 28px; flex: none; border-radius: 10px; display: grid; place-items: center;
    background: var(--grad-brand); color: #04221F;
  }
  .aksi b { display: block; font-size: 11.5px; color: var(--ink-50); margin-bottom: 3px; }
  .aksi p { font-size: 10.5px; color: #A8BED2; line-height: 1.55; }
</style>
