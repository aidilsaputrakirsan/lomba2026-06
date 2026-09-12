<script>
  import Icon from '../Icon.svelte';
  import { INDIKATOR, STATUS, BATAS_CV } from '../data.js';

  let { onnext = null, onback = null } = $props();

  /* Wajah digambar sebagai abstraksi landmark, bukan foto orang.
     Ini keputusan sadar: layar yang menampilkan wajah asli akan
     bertentangan dengan janji privasi yang dipasang fitur ini. */
  const mata = [
    [34, 47], [40, 44], [46, 47], [40, 50],
    [54, 47], [60, 44], [66, 47], [60, 50]
  ];
</script>

<div class="s-root">
  <div class="cam">
    <svg viewBox="0 0 100 130" preserveAspectRatio="xMidYMid slice" aria-label="Pratinjau kamera kabin dengan titik landmark wajah" role="img">
      <defs>
        <linearGradient id="camg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#12202F" /><stop offset="100%" stop-color="#0A1522" />
        </linearGradient>
      </defs>
      <rect width="100" height="130" fill="url(#camg)" />

      <!-- siluet kepala & bahu -->
      <g stroke="#3ED6CB" fill="none" stroke-opacity=".5" stroke-width=".7">
        <ellipse cx="50" cy="50" rx="25" ry="31" />
        <path d="M22 96 Q50 76 78 96 L78 130 L22 130 Z" stroke-opacity=".25" />
        <path d="M30 40 Q40 34 48 40" /><path d="M52 40 Q60 34 70 40" />
        <path d="M50 52 v10 M44 66 Q50 70 56 66" stroke-opacity=".32" />
      </g>

      <!-- jaring landmark tipis -->
      <g stroke="#3ED6CB" stroke-opacity=".16" stroke-width=".35" fill="none">
        <path d="M28 44 H72 M28 56 H72 M28 68 H72 M38 26 V80 M50 22 V82 M62 26 V80" />
      </g>

      <!-- titik landmark mata -->
      <g fill="#6FE3DA">
        {#each mata as [x, y]}<circle cx={x} cy={y} r="1.1" />{/each}
      </g>

      <!-- kotak wilayah mata yang diukur -->
      <g fill="none" stroke="#FFB627" stroke-width=".8">
        <rect x="31" y="40.5" width="18" height="13" rx="2" />
        <rect x="51" y="40.5" width="18" height="13" rx="2" />
      </g>
      <!-- wilayah mulut (deteksi menguap) -->
      <rect x="40" y="60.5" width="20" height="13" rx="2" fill="none" stroke="#FF6A52" stroke-width=".8" />
    </svg>

    <div class="ctop">
      <span class="rec"><i class="s-live"></i> AI Driver Monitoring</span>
      <button class="s-icobtn" aria-label="Matikan kamera" onclick={() => onback?.()}>
        <Icon name="eyeoff" size={15} />
      </button>
    </div>

    <div class="clabel l1">EAR kiri 0,27</div>
    <div class="clabel l2">EAR kanan 0,26</div>
    <div class="clabel l3 warn">Menguap terdeteksi</div>

    <div class="cbawah">
      <div class="ci">
        <em>PERCLOS</em>
        <b style="color:var(--st-ready)">11%</b>
      </div>
      <div class="ci">
        <em>Kedipan/mnt</em>
        <b style="color:var(--st-caution)">19</b>
      </div>
      <div class="ci">
        <em>Menguap/10mnt</em>
        <b style="color:var(--st-risk)">3</b>
      </div>
      <div class="ci">
        <em>Yaw kepala</em>
        <b style="color:var(--st-ready)">6°</b>
      </div>
    </div>
  </div>

  <div class="sheet">
    <div class="sh">
      <b class="s-title">Indikator yang dianalisis</b>
      <span class="s-meta">Diperbarui 4×/detik</span>
    </div>

    <div class="ind">
      {#each INDIKATOR as i}
        {@const st = STATUS[i.st]}
        <div class="ir">
          <span class="ik" style="color:{st.warna};background:{st.bg}">{i.kode}</span>
          <div>
            <b>{i.nama}</b>
            <em>{i.ukur}</em>
          </div>
          <span class="idot" style="background:{st.warna}" aria-label={st.label}></span>
        </div>
      {/each}
    </div>

    <div class="batas">
      <Icon name="shield" size={12} />
      <p>{BATAS_CV}</p>
    </div>

    <button class="s-btn" onclick={() => onnext?.()}>
      <Icon name="gauge" size={16} /> Lihat Dynamic Risk Score
    </button>
  </div>
</div>

<style>
  .cam { position: relative; flex: 1; min-height: 0; overflow: hidden; }
  .cam svg { width: 100%; height: 100%; display: block; }

  .ctop { position: absolute; top: 60px; left: 18px; right: 18px; display: flex; align-items: center; gap: 8px; }
  .rec {
    flex: 1; display: inline-flex; align-items: center; gap: 7px;
    padding: 6px 12px; border-radius: 999px; font-size: 11px; font-weight: 800;
    background: rgba(9,18,30,.68); border: 1px solid rgba(255,255,255,.16); color: var(--ink-50);
    backdrop-filter: blur(12px); align-self: flex-start;
  }
  .rec i { width: 7px; height: 7px; border-radius: 50%; background: var(--st-risk); display: block; flex: none; }

  .clabel {
    position: absolute; padding: 3px 8px; border-radius: 7px; font-size: 9px; font-weight: 800;
    background: rgba(9,18,30,.72); border: 1px solid rgba(255,182,39,.5); color: var(--am-300);
    backdrop-filter: blur(8px); white-space: nowrap;
  }
  .l1 { top: 36%; left: 5%; }
  .l2 { top: 30%; right: 5%; }
  .l3 { top: 55%; right: 6%; border-color: rgba(255,106,82,.55); color: var(--st-risk); }

  .cbawah {
    position: absolute; left: 16px; right: 16px; bottom: 14px;
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;
    padding: 9px 10px; border-radius: 14px;
    background: rgba(9,18,30,.7); border: 1px solid rgba(255,255,255,.14); backdrop-filter: blur(14px);
  }
  .ci { text-align: center; }
  .ci em { font-style: normal; display: block; font-size: 8.5px; color: #8FA6BC; font-weight: 700; }
  .ci b { font-size: 15px; letter-spacing: -.02em; }

  .sheet {
    flex: none; background: #101C2B; border-radius: 24px 24px 0 0;
    padding: 14px 20px 18px; margin-top: -18px; position: relative; z-index: 4;
    border-top: 1px solid rgba(255,255,255,.09);
  }
  .sh { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 9px; }

  .ind { display: flex; flex-direction: column; gap: 5px; }
  .ir { display: flex; gap: 9px; align-items: center; }
  .ik {
    font-size: 9.5px; font-weight: 800; padding: 3px 7px; border-radius: 7px; flex: none;
    letter-spacing: .02em;
  }
  .ir > div { flex: 1; min-width: 0; }
  .ir b { display: block; font-size: 11.5px; color: var(--ink-50); font-weight: 700; line-height: 1.3; }
  .ir em { font-style: normal; font-size: 10px; color: #7F95AB; }
  .idot { width: 8px; height: 8px; border-radius: 50%; flex: none; }

  .batas {
    display: flex; gap: 7px; align-items: flex-start; margin: 11px 0 12px;
    padding: 9px 11px; border-radius: 12px;
    background: var(--st-ready-bg); border: 1px solid rgba(34,212,138,.28); color: var(--st-ready);
  }
  .batas p { font-size: 10px; color: #A8BED2; line-height: 1.5; }
</style>
