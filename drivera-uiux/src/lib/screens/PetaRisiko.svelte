<script>
  import Icon from '../Icon.svelte';
  import MapCanvas from '../MapCanvas.svelte';
  import TabBar from '../TabBar.svelte';
  import { TITIK, RISIKO } from '../data.js';

  let { onnav = null } = $props();
  let aktif = $state('R-204');
  const t = $derived(TITIK.find((x) => x.id === aktif) ?? TITIK[0]);
  const r = $derived(RISIKO[t.rk]);
</script>

<div class="s-root">
  <div class="mapwrap">
    <MapCanvas mode="heat" active={aktif} onpick={(p) => (aktif = p.id)} />

    <div class="top">
      <div class="search">
        <Icon name="search" size={16} />
        <span>Cari ruas jalan atau kawasan…</span>
      </div>
      <button class="s-icobtn" aria-label="Lapisan peta"><Icon name="layers" size={16} /></button>
    </div>

    <div class="chips">
      <span class="chip on">Semua</span>
      <span class="chip">Rawan laka</span>
      <span class="chip">Zona sekolah</span>
      <span class="chip">Malam</span>
    </div>

    <div class="legend">
      <b>Tingkat risiko ruas</b>
      <div class="lv">
        {#each [1, 2, 3, 4] as k}
          <span><i style="background:{RISIKO[k].warna}"></i>{RISIKO[k].label}</span>
        {/each}
      </div>
      <div class="lg">
        <span>8 ruas dipantau di koridor ini</span>
        <span><Icon name="clock" size={10} /> Risiko dihitung per jam</span>
      </div>
    </div>
  </div>

  <div class="sheet">
    <div class="grab"></div>

    <div class="row">
      <span class="s-tag" style="color:{r.warna};background:{r.bg}">
        Risiko {r.label}
      </span>
      <span class="s-meta">{t.jarak} di depan</span>
    </div>

    <div class="s-title" style="margin-top:7px">{t.jalan}</div>
    <div class="s-meta">{t.id} · {t.laka} kecelakaan tercatat · puncak {t.jam}</div>

    <div class="sebab">
      <Icon name="alert" size={12} />
      <span>{t.sebab}</span>
    </div>

    <div class="acts">
      <button class="s-btn ghost" onclick={() => onnav?.('titik')}>
        <Icon name="chart" size={16} /> Detail ruas
      </button>
      <button class="s-btn" onclick={() => onnav?.('kemudi')}>
        <Icon name="route" size={16} /> Rute lebih aman
      </button>
    </div>
  </div>

  <TabBar aktif="peta" {onnav} />
</div>

<style>
  .mapwrap { position: relative; flex: 1; min-height: 0; }

  .top { position: absolute; top: 60px; left: 18px; right: 18px; display: flex; gap: 8px; z-index: 3; }
  .search {
    flex: 1; height: 34px; border-radius: 11px; display: flex; align-items: center; gap: 8px;
    padding: 0 12px; font-size: 12.5px; color: #9DB3C7;
    background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.18);
    backdrop-filter: blur(12px);
  }

  .chips { position: absolute; top: 106px; left: 18px; right: 18px; overflow: hidden; display: flex; gap: 6px; z-index: 3; }
  .chip {
    padding: 5px 11px; border-radius: 999px; font-size: 10.5px; font-weight: 700;
    background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.16); color: #C3D6E7;
    backdrop-filter: blur(10px); white-space: nowrap;
  }
  .chip.on { background: var(--tl-500); color: #04221F; border-color: var(--tl-500); }

  .legend {
    position: absolute; left: 18px; right: 18px; bottom: 18px; z-index: 3;
    padding: 10px 12px; border-radius: 15px;
    background: rgba(9,18,30,.68); border: 1px solid rgba(255,255,255,.14);
    backdrop-filter: blur(14px); color: var(--ink-50);
  }
  .legend b { font-size: 11px; letter-spacing: .01em; }
  .lv { display: flex; flex-wrap: wrap; gap: 4px 11px; margin: 7px 0 6px; }
  .lv span { display: inline-flex; align-items: center; gap: 5px; font-size: 9.5px; color: #C3D6E7; font-weight: 600; }
  .lv i { width: 7px; height: 7px; border-radius: 50%; display: block; }
  .lg { display: flex; justify-content: space-between; gap: 8px; font-size: 9.5px; color: #7F95AB; }
  .lg span { display: inline-flex; align-items: center; gap: 4px; }

  .sheet {
    flex: none; background: #101C2B; border-radius: 26px 26px 0 0;
    padding: 10px 20px 15px; margin-top: -16px; position: relative; z-index: 4;
    border-top: 1px solid rgba(255,255,255,.09);
  }
  .grab { width: 36px; height: 4px; border-radius: 999px; background: rgba(255,255,255,.18); margin: 0 auto 10px; }
  .row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }

  .sebab {
    display: flex; gap: 7px; align-items: flex-start; margin: 11px 0;
    padding: 9px 11px; border-radius: 12px;
    background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
    font-size: 11px; color: #A8BED2; line-height: 1.5;
  }

  .acts { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .acts .s-btn { font-size: 12.5px; min-height: 44px; }
</style>
