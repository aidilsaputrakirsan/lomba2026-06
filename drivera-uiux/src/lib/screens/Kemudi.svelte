<script>
  import Icon from '../Icon.svelte';
  import MapCanvas from '../MapCanvas.svelte';
  import TabBar from '../TabBar.svelte';
  import { SKOR_KOMPONEN, SKOR_SEKARANG, PERINGATAN, STATUS } from '../data.js';

  let { onnav = null } = $props();
  const st = STATUS[SKOR_SEKARANG.st];
  const pr = STATUS[PERINGATAN.st];
</script>

<div class="s-root">
  <div class="mapwrap">
    <MapCanvas mode="drive" />

    <!-- Smart Road Warning: satu-satunya elemen yang boleh menguasai layar.
         Diletakkan di atas, besar, dan dibacakan lewat suara secara bersamaan. -->
    <div class="warn" style="--w:{pr.warna};--bg:{pr.bg}" role="alert">
      <div class="wh">
        <span class="wi"><Icon name="alert" size={18} /></span>
        <div style="flex:1">
          <b>{PERINGATAN.judul}</b>
          <em>{PERINGATAN.titik}</em>
        </div>
        <span class="wj">{PERINGATAN.jarak}</span>
      </div>
      <p class="wt">{PERINGATAN.teks}</p>
      <div class="ws"><Icon name="volume" size={11} /> Dibacakan otomatis · {PERINGATAN.sebab}</div>
    </div>

    <div class="hud">
      <div class="spd"><b>68</b><em>km/jam</em></div>
      <div class="sug"><Icon name="gauge" size={12} /> Saran 40</div>
    </div>
  </div>

  <div class="sheet">
    <div class="grab"></div>

    <div class="dsr" style="--w:{st.warna};--bg:{st.bg}">
      <div class="dl">
        <span class="s-meta">Dynamic Risk Score</span>
        <div class="dv">
          <b>{SKOR_SEKARANG.nilai}</b>
          <span class="s-tag" style="color:{st.warna};background:{st.bg}">{st.label}</span>
        </div>
        <em><Icon name="chart" size={10} /> {SKOR_SEKARANG.tren}</em>
      </div>
      <div class="komp">
        {#each SKOR_KOMPONEN as k}
          <div class="kr">
            <span class="kn">{k.nama}<i>{k.bobot}</i></span>
            <span class="kb"><i style="width:{k.nilai}%"></i></span>
            <b>{k.nilai}</b>
          </div>
        {/each}
      </div>
    </div>

    <div class="acts">
      <button class="s-btn ghost" onclick={() => onnav?.('peta')}>
        <Icon name="map" size={16} /> Peta risiko
      </button>
      <button class="s-btn danger" onclick={() => onnav?.('agent')}>
        <Icon name="coffee" size={16} /> Cari tempat berhenti
      </button>
    </div>
  </div>

  <TabBar aktif="kemudi" {onnav} />
</div>

<style>
  .mapwrap { position: relative; flex: 1; min-height: 0; }

  .warn {
    position: absolute; top: 58px; left: 16px; right: 16px; z-index: 4;
    padding: 12px 13px; border-radius: 17px;
    background: rgba(9,18,30,.84); border: 1.5px solid var(--w);
    backdrop-filter: blur(16px);
    box-shadow: 0 14px 34px rgba(0,0,0,.5);
  }
  .wh { display: flex; align-items: center; gap: 9px; }
  .wi {
    width: 32px; height: 32px; flex: none; border-radius: 11px; display: grid; place-items: center;
    background: var(--bg); color: var(--w);
  }
  .wh b { display: block; font-size: 13px; color: var(--ink-50); font-weight: 800; line-height: 1.25; }
  .wh em { font-style: normal; font-size: 10px; color: #8FA6BC; }
  .wj {
    font-size: 16px; font-weight: 800; color: var(--w); letter-spacing: -.03em; flex: none;
  }
  .wt { font-size: 11.5px; color: #CBDCEB; line-height: 1.5; margin-top: 9px; }
  .ws {
    display: flex; align-items: center; gap: 5px; margin-top: 8px; padding-top: 8px;
    border-top: 1px solid rgba(255,255,255,.1);
    font-size: 9.5px; color: #7F95AB; font-weight: 600;
  }

  .hud {
    position: absolute; left: 16px; bottom: 16px; z-index: 3;
    display: flex; align-items: center; gap: 8px;
  }
  .spd {
    padding: 7px 13px; border-radius: 14px; display: flex; align-items: baseline; gap: 5px;
    background: rgba(9,18,30,.7); border: 1px solid rgba(255,255,255,.16); backdrop-filter: blur(12px);
  }
  .spd b { font-size: 22px; font-weight: 800; color: var(--ink-50); letter-spacing: -.03em; line-height: 1; }
  .spd em { font-style: normal; font-size: 9.5px; color: #8FA6BC; font-weight: 700; }
  .sug {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 6px 11px; border-radius: 999px; font-size: 10.5px; font-weight: 800;
    background: var(--st-caution-bg); border: 1px solid rgba(255,182,39,.45); color: var(--st-caution);
    backdrop-filter: blur(10px);
  }

  .sheet {
    flex: none; background: #101C2B; border-radius: 26px 26px 0 0;
    padding: 10px 20px 14px; margin-top: -16px; position: relative; z-index: 5;
    border-top: 1px solid rgba(255,255,255,.09);
  }
  .grab { width: 36px; height: 4px; border-radius: 999px; background: rgba(255,255,255,.18); margin: 0 auto 11px; }

  .dsr {
    display: grid; grid-template-columns: 104px 1fr; gap: 13px; align-items: center;
    padding: 12px 13px; border-radius: 16px;
    background: var(--bg); border: 1px solid color-mix(in srgb, var(--w) 32%, transparent);
  }
  .dv { display: flex; align-items: center; gap: 7px; margin: 2px 0 3px; }
  .dv b { font-size: 34px; font-weight: 800; color: var(--ink-50); letter-spacing: -.04em; line-height: 1; }
  .dl em {
    font-style: normal; display: flex; align-items: center; gap: 4px;
    font-size: 9.5px; color: var(--w); font-weight: 700;
  }

  .komp { display: flex; flex-direction: column; gap: 5px; }
  .kr { display: grid; grid-template-columns: 1fr 46px 22px; gap: 7px; align-items: center; }
  .kn { font-size: 10px; color: #A8BED2; font-weight: 600; display: flex; gap: 5px; }
  .kn i { font-style: normal; color: #6F869C; font-weight: 700; }
  .kb { height: 4px; border-radius: 999px; background: rgba(255,255,255,.13); overflow: hidden; display: block; }
  .kb i { display: block; height: 100%; border-radius: 999px; background: var(--w); }
  .kr b { font-size: 10px; color: var(--ink-50); text-align: right; font-weight: 800; }

  .acts { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 10px; }
  .acts .s-btn { font-size: 12.5px; min-height: 44px; }
</style>
