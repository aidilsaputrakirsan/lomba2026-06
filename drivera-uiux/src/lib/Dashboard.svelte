<script>
  import Icon from './Icon.svelte';
  import MapCanvas from './MapCanvas.svelte';
  import { BASE, PRIORITAS, TANYA_ANALIS, RISIKO } from './data.js';

  // Kecelakaan tercatat vs ruas selesai ditangani (data simulasi)
  const laka = [46, 51, 44, 58, 62, 55, 71, 68];
  const tangani = [2, 3, 3, 5, 4, 7, 9, 11];
  const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu'];
  const maks = 80;

  const kpi = [
    { l: 'Ruas dipantau', v: '318', d: '+24 koridor baru', ic: 'map' },
    { l: 'Blackspot aktif', v: '27', d: '11 masuk DED 2027', ic: 'alert' },
    { l: 'Peringatan terkirim', v: '94.7 rb', d: 'bulan ini', ic: 'bell' },
    { l: 'Pengemudi aktif', v: '12.480', d: '38% jarak jauh', ic: 'user' }
  ];
</script>

<div class="dash glass">
  <header>
    <div class="brand">
      <img class="lg" src="{BASE}img/logo-mark.png" alt="Logo DRIVERA" />
      <div>
        <b>DRIVERA Kota — Konsol Dishub & Korlantas</b>
        <em>Peta prioritas penanganan blackspot · Semester II 2026</em>
      </div>
    </div>
    <div class="tools">
      <span class="pill"><span class="dot"></span> Telemetri anonim</span>
      <span class="pill">Agu 2026</span>
    </div>
  </header>

  <div class="kpis">
    {#each kpi as k}
      <div class="kpi glass-soft">
        <span class="ic"><Icon name={k.ic} size={16} /></span>
        <div>
          <em>{k.l}</em>
          <b>{k.v}</b>
          <span>{k.d}</span>
        </div>
      </div>
    {/each}
  </div>

  <div class="main">
    <div class="mapbox">
      <MapCanvas mode="heat" />
      <div class="mlabel">Sebaran risiko ruas · koridor arteri utama</div>
      <div class="mlegend">
        {#each [1, 2, 3, 4] as k}
          <span><i style="background:{RISIKO[k].warna}"></i>{RISIKO[k].label}</span>
        {/each}
      </div>
    </div>

    <div class="chart glass-soft">
      <b>Kecelakaan tercatat vs ruas ditangani</b>
      <svg viewBox="0 0 240 96" role="img" aria-label="Grafik batang kecelakaan tercatat dan ruas ditangani per bulan">
        {#each laka as m, i}
          {@const x = 6 + i * 29}
          <rect x={x} y={86 - (m / maks) * 74} width="11" height={(m / maks) * 74} rx="3" fill="#7E4550" />
          <rect x={x + 12} y={86 - (tangani[i] / maks) * 74} width="11" height={(tangani[i] / maks) * 74} rx="3" fill="url(#dgb)" />
          <text x={x + 11} y="94" font-size="6.5" fill="#7A8FA6" text-anchor="middle">{bulan[i]}</text>
        {/each}
        <defs>
          <linearGradient id="dgb" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#0EA5A0" /><stop offset="100%" stop-color="#3ED6CB" />
          </linearGradient>
        </defs>
      </svg>
      <div class="lgd">
        <span><i style="background:#7E4550"></i>Kecelakaan tercatat</span>
        <span><i style="background:var(--tl-500)"></i>Ruas ditangani</span>
      </div>
      <p>
        Selisih inilah yang selama ini tidak terbaca: kejadian tercatat setelah terjadi, sementara
        ruas penyebabnya tidak pernah masuk daftar prioritas.
      </p>
    </div>
  </div>

  <div class="asisten glass-soft">
    <div class="ah">
      <span class="aic"><Icon name="sparkle" size={16} /></span>
      <div>
        <b>Asisten Analis DRIVERA</b>
        <em>Menjawab di atas data kejadian dan telemetri — bukan asumsi</em>
      </div>
    </div>

    <div class="ab">
      <div class="q">
        <span class="ql">Pertanyaan instansi</span>
        <p>{TANYA_ANALIS.tanya}</p>
      </div>

      <div class="a">
        <span class="ql">Rekomendasi</span>
        <p class="jw">{TANYA_ANALIS.jawab}</p>
        <ul>
          {#each TANYA_ANALIS.alasan as al}<li>{al}</li>{/each}
        </ul>
        <div class="cat"><Icon name="alert" size={11} /> {TANYA_ANALIS.catatan}</div>
      </div>
    </div>
  </div>

  <div class="tablebox glass-soft">
    <div class="th">
      <b>Antrean prioritas penanganan blackspot</b>
      <span class="pill"><Icon name="filter" size={12} /> Skor gabungan</span>
    </div>
    <table>
      <thead>
        <tr>
          <th>#</th><th>Ruas jalan</th><th>Skor</th><th>Laka</th>
          <th>Korban</th><th>Sebab dominan</th><th>Usulan aksi</th>
        </tr>
      </thead>
      <tbody>
        {#each PRIORITAS as p}
          <tr>
            <td class="rk">{p.rank}</td>
            <td class="nm">{p.ruas}</td>
            <td>
              <div class="sk">
                <span class="skb"><i style="width:{p.skor}%"></i></span>
                <b>{p.skor}</b>
              </div>
            </td>
            <td>{p.laka}</td>
            <td>{p.korban}</td>
            <td>{p.sebab}</td>
            <td><span class="st">{p.aksi}</span></td>
          </tr>
        {/each}
      </tbody>
    </table>
    <p class="note">
      Skor gabungan = 0,40 × keparahan kejadian + 0,25 × frekuensi + 0,20 × volume lalu lintas
      + 0,15 × kedekatan fasilitas publik. Bobot dapat disetel tiap daerah, dan rumusnya terbuka
      agar keputusan penanganan bisa diperiksa publik.
    </p>
  </div>
</div>

<style>
  .dash { padding: 22px; display: flex; flex-direction: column; gap: 16px; }

  header { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
  .brand { display: flex; align-items: center; gap: 11px; }
  .lg { width: 40px; height: 40px; object-fit: contain; flex: none; }
  .brand b { display: block; font-size: 15.5px; color: var(--ink-50); font-weight: 800; }
  .brand em { font-style: normal; font-size: 12px; color: var(--ink-400); }
  .tools { display: flex; gap: 8px; }

  .kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  .kpi { padding: 12px 13px; display: flex; gap: 10px; align-items: center; }
  .kpi .ic {
    width: 34px; height: 34px; flex: none; border-radius: 11px; display: grid; place-items: center;
    background: var(--grad-brand); color: #04221F;
  }
  .kpi em { font-style: normal; display: block; font-size: 11px; color: var(--ink-400); }
  .kpi b { font-size: 22px; color: var(--ink-50); line-height: 1.1; display: block; letter-spacing: -.02em; }
  .kpi > div > span { font-size: 10.5px; color: var(--tl-400); font-weight: 700; }

  .main { display: grid; grid-template-columns: 1.15fr 1fr; gap: 12px; }
  .mapbox { position: relative; height: 250px; border-radius: var(--r-md); overflow: hidden; }
  .mlabel {
    position: absolute; top: 12px; left: 12px; z-index: 3; padding: 5px 11px; border-radius: 9px;
    font-size: 11px; font-weight: 700; color: #EDF4FA;
    background: rgba(9,18,30,.66); border: 1px solid rgba(255,255,255,.16); backdrop-filter: blur(10px);
  }
  .mlegend {
    position: absolute; bottom: 12px; left: 12px; right: 12px; z-index: 3;
    display: flex; gap: 12px; flex-wrap: wrap; padding: 7px 11px; border-radius: 10px;
    background: rgba(9,18,30,.66); border: 1px solid rgba(255,255,255,.16); backdrop-filter: blur(10px);
    font-size: 10.5px; color: #C3D6E7; font-weight: 600;
  }
  .mlegend span, .lgd span { display: inline-flex; align-items: center; gap: 5px; }
  .mlegend i, .lgd i { width: 8px; height: 8px; border-radius: 50%; display: block; }

  .chart { padding: 14px; display: flex; flex-direction: column; }
  .chart > b { font-size: 13px; color: var(--ink-50); }
  .chart svg { width: 100%; margin: 10px 0 4px; }
  .lgd { display: flex; gap: 14px; font-size: 10.5px; color: var(--ink-300); font-weight: 600; }
  .chart p { font-size: 11px; color: var(--ink-400); line-height: 1.5; margin-top: 8px; }

  .asisten { padding: 16px; }
  .ah { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
  .aic {
    width: 34px; height: 34px; flex: none; border-radius: 11px; display: grid; place-items: center;
    background: var(--grad-brand); color: #04221F;
  }
  .ah b { display: block; font-size: 13px; color: var(--ink-50); }
  .ah em { font-style: normal; font-size: 11px; color: var(--ink-400); }

  .ab { display: grid; grid-template-columns: .85fr 1.15fr; gap: 12px; align-items: start; }
  .ql {
    display: block; font-size: 9.5px; font-weight: 800; letter-spacing: .12em;
    text-transform: uppercase; color: var(--ink-400); margin-bottom: 6px;
  }
  .q, .a { padding: 13px 15px; border-radius: 14px; }
  .q { background: rgba(255,255,255,.05); border: 1px solid var(--glass-brd-soft); }
  .q p { font-size: 13px; color: var(--ink-100); line-height: 1.55; font-weight: 600; }
  .a { background: rgba(23,196,184,.1); border: 1px solid rgba(23,196,184,.28); }
  .jw { font-size: 13.5px; font-weight: 800; color: var(--ink-50); line-height: 1.5; }
  .a ul { margin: 9px 0 0; padding-left: 16px; }
  .a li { font-size: 11.5px; color: var(--ink-300); line-height: 1.6; margin-bottom: 3px; }
  .cat {
    display: flex; align-items: center; gap: 5px; margin-top: 10px;
    font-size: 10.5px; color: var(--ink-400); font-weight: 600;
  }

  .tablebox { padding: 14px; }
  .th { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
  .th b { font-size: 13px; color: var(--ink-50); }
  table { width: 100%; border-collapse: collapse; font-size: 12px; }
  th {
    text-align: left; font-size: 10px; letter-spacing: .08em; text-transform: uppercase;
    color: var(--ink-400); font-weight: 800; padding: 0 8px 7px; border-bottom: 1px solid var(--glass-brd);
  }
  td { padding: 8px; border-bottom: 1px solid var(--glass-brd-soft); color: var(--ink-300); }
  tr:last-child td { border-bottom: 0; }
  .rk { font-weight: 800; color: var(--tl-400); width: 26px; }
  .nm { color: var(--ink-50); font-weight: 700; }
  .sk { display: flex; align-items: center; gap: 7px; }
  .skb { width: 54px; height: 5px; border-radius: 999px; background: rgba(255,255,255,.13); overflow: hidden; display: block; }
  .skb i { display: block; height: 100%; border-radius: 999px; background: var(--grad-warn); }
  .st {
    padding: 3px 9px; border-radius: 999px; font-size: 10px; font-weight: 800;
    background: var(--st-ready-bg); color: var(--st-ready); white-space: nowrap;
  }
  .note { font-size: 11px; color: var(--ink-400); line-height: 1.55; margin-top: 10px; }

  @media (max-width: 900px) {
    .kpis { grid-template-columns: repeat(2, 1fr); }
    .main { grid-template-columns: 1fr; }
    .ab { grid-template-columns: 1fr; }
    .tablebox { overflow-x: auto; }
    table { min-width: 680px; }
  }
</style>
