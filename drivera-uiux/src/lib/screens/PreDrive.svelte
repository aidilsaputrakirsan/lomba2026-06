<script>
  import Icon from '../Icon.svelte';
  import { PRECHECK, PRECHECK_HASIL, STATUS } from '../data.js';

  let { onnext = null, onback = null } = $props();
  const h = STATUS[PRECHECK_HASIL.st];

  // Busur skor: setengah lingkaran, 0–100 dipetakan ke panjang stroke.
  const R = 52, KELILING = Math.PI * R;
</script>

<div class="s-root">
  <div class="s-bar">
    <button class="s-icobtn" aria-label="Kembali" onclick={() => onback?.()}>
      <Icon name="back" size={16} />
    </button>
    <div style="flex:1">
      <h3>Pre-Drive Safety Check</h3>
      <div class="sub">Bekasi → Cirebon · 184 km · mulai 21.40</div>
    </div>
  </div>

  <div class="s-body">
    <div class="skor" style="--w:{h.warna};--bg:{h.bg}">
      <svg viewBox="0 0 120 70" aria-hidden="true">
        <path d="M8 62 A52 52 0 0 1 112 62" fill="none" stroke="rgba(255,255,255,.12)"
              stroke-width="9" stroke-linecap="round" />
        <path d="M8 62 A52 52 0 0 1 112 62" fill="none" stroke={h.warna}
              stroke-width="9" stroke-linecap="round"
              stroke-dasharray="{(PRECHECK_HASIL.skor / 100) * KELILING} {KELILING}" />
      </svg>
      <div class="sv">
        <b>{PRECHECK_HASIL.skor}</b>
        <span class="s-tag" style="color:{h.warna};background:{h.bg}">{h.label}</span>
      </div>
      <p class="sr">{PRECHECK_HASIL.ringkas}</p>
    </div>

    <div class="list">
      {#each PRECHECK as p}
        {@const st = STATUS[p.st]}
        <div class="row">
          <span class="ri" style="color:{st.warna};background:{st.bg}"><Icon name={p.ikon} size={15} /></span>
          <div class="rt">
            <div class="rh">
              <b>{p.nama}</b>
              <span style="color:{st.warna}">{p.nilai}</span>
            </div>
            <div class="bar"><i style="width:{p.skor}%;background:{st.warna}"></i></div>
            <em>{p.ket}</em>
          </div>
        </div>
      {/each}
    </div>

    <div class="saran">
      <b><Icon name="shield" size={12} /> Sebelum berangkat</b>
      <ul>
        {#each PRECHECK_HASIL.saran as s}<li>{s}</li>{/each}
      </ul>
    </div>
  </div>

  <div class="foot">
    <button class="s-btn" onclick={() => onnext?.()}>
      <Icon name="car" size={17} /> Mulai perjalanan
    </button>
    <p class="fine">Caution tidak mengunci keberangkatan — DRIVERA memberi informasi.</p>
  </div>
</div>

<style>
  .s-body { gap: 10px; }

  .skor {
    flex: none; padding: 12px 16px 13px; border-radius: 18px; text-align: center;
    background: var(--bg); border: 1px solid color-mix(in srgb, var(--w) 34%, transparent);
    position: relative;
  }
  .skor svg { width: 132px; margin: 0 auto; display: block; }
  .sv { margin-top: -23px; display: flex; flex-direction: column; align-items: center; gap: 5px; }
  .sv b { font-size: 30px; font-weight: 800; color: var(--ink-50); letter-spacing: -.04em; line-height: 1; }
  .sr { font-size: 11px; color: #A8BED2; line-height: 1.45; margin-top: 8px; }

  .list { display: flex; flex-direction: column; gap: 6px; }
  .row { display: flex; gap: 10px; align-items: flex-start; }
  .ri { width: 30px; height: 30px; flex: none; border-radius: 10px; display: grid; place-items: center; }
  .rt { flex: 1; min-width: 0; }
  .rh { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
  .rh b { font-size: 12.5px; color: var(--ink-50); font-weight: 700; }
  .rh span { font-size: 11px; font-weight: 800; }
  .bar { height: 4px; border-radius: 999px; background: rgba(255,255,255,.1); margin: 5px 0 4px; overflow: hidden; }
  .bar i { display: block; height: 100%; border-radius: 999px; }
  .rt em { font-style: normal; font-size: 10.5px; color: #7F95AB; line-height: 1.4; display: block; }

  .saran {
    padding: 11px 13px; border-radius: 14px;
    background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
  }
  .saran b {
    display: flex; align-items: center; gap: 6px;
    font-size: 11px; color: var(--tl-300); letter-spacing: .04em; text-transform: uppercase;
  }
  .saran ul { margin: 7px 0 0; padding-left: 16px; }
  .saran li { font-size: 11px; color: #9DB3C7; line-height: 1.55; margin-bottom: 3px; }

  .foot { flex: none; padding: 0 20px 18px; }
  .fine { font-size: 9.5px; color: #7A8FA6; text-align: center; margin-top: 9px; line-height: 1.5; }
</style>
