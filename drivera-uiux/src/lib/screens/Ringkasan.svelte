<script>
  import Icon from '../Icon.svelte';
  import TabBar from '../TabBar.svelte';
  import { PERJALANAN, STATUS, INTERVENSI } from '../data.js';

  let { onnav = null } = $props();
  const st = STATUS[PERJALANAN.st];
</script>

<div class="s-root">
  <div class="s-bar">
    <div style="flex:1">
      <h3>Ringkasan Perjalanan</h3>
      <div class="sub">{PERJALANAN.rute} · {PERJALANAN.jarak} · {PERJALANAN.durasi}</div>
    </div>
    <button class="s-icobtn" aria-label="Bagikan"><Icon name="upload" size={16} /></button>
  </div>

  <div class="s-body">
    <div class="hdr" style="--w:{st.warna};--bg:{st.bg}">
      <div>
        <span class="s-meta">Skor keselamatan perjalanan</span>
        <div class="hv">
          <b>{PERJALANAN.skor}</b>
          <span class="s-tag" style="color:{st.warna};background:{st.bg}">{st.label}</span>
        </div>
      </div>
      <div class="hr">
        {#each PERJALANAN.rinci as r}
          <div><b>{r.v}</b><em>{r.l}</em></div>
        {/each}
      </div>
    </div>

    <b class="jt">Linimasa keputusan</b>
    <div class="tl">
      {#each PERJALANAN.linimasa as l}
        {@const s = STATUS[l.st]}
        <div class="ti">
          <span class="td" style="background:{s.warna}"></span>
          <span class="tj">{l.jam}</span>
          <span class="tt">{l.teks}</span>
        </div>
      {/each}
    </div>

    <b class="jt">Intervensi yang tersedia</b>
    <div class="iv">
      {#each INTERVENSI as i}
        <span class="ic"><Icon name={i.ikon} size={12} /> {i.nama}</span>
      {/each}
    </div>

    <div class="nilai">
      <span class="ni"><Icon name="shield" size={14} /></span>
      <p>
        Yang dicatat bukan seberapa cepat Anda tiba, melainkan berapa kali risiko sempat naik dan
        apa yang dilakukan terhadapnya. Perjalanan ini berakhir tanpa insiden karena satu jeda
        18 menit diambil pada saat yang tepat.
      </p>
    </div>
  </div>

  <TabBar aktif="profil" {onnav} />
</div>

<style>
  .s-body { gap: 10px; }

  .hdr {
    display: grid; grid-template-columns: 104px 1fr; gap: 11px; align-items: center;
    padding: 13px; border-radius: 17px;
    background: var(--bg); border: 1px solid color-mix(in srgb, var(--w) 32%, transparent);
  }
  .hv { display: flex; align-items: center; gap: 6px; margin-top: 3px; flex-wrap: wrap; }
  .hv b { font-size: 34px; font-weight: 800; color: var(--ink-50); letter-spacing: -.04em; line-height: 1; }
  .hr { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px 10px; }
  .hr b { font-size: 14px; color: var(--ink-50); font-weight: 800; letter-spacing: -.02em; }
  .hr em { font-style: normal; font-size: 9px; color: #8FA6BC; display: block; line-height: 1.3; }

  .jt { display: block; font-size: 12.5px; font-weight: 800; color: var(--ink-50); margin-top: 3px; }

  .tl { display: flex; flex-direction: column; gap: 0; position: relative; padding-left: 3px; }
  .ti {
    display: grid; grid-template-columns: 14px 38px 1fr; gap: 7px; align-items: baseline;
    padding: 6px 0; position: relative;
  }
  .ti::before {
    content: ''; position: absolute; left: 6.5px; top: 14px; bottom: -6px;
    width: 1px; background: rgba(255,255,255,.14);
  }
  .ti:last-child::before { display: none; }
  .td { width: 8px; height: 8px; border-radius: 50%; margin-left: 3px; align-self: center; }
  .tj { font-size: 10px; font-weight: 800; color: #7F95AB; }
  .tt { font-size: 11px; color: #C6D7E6; line-height: 1.45; }

  .iv { display: flex; flex-wrap: wrap; gap: 5px; }
  .ic {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 5px 10px; border-radius: 999px; font-size: 10px; font-weight: 700;
    background: rgba(255,255,255,.055); border: 1px solid rgba(255,255,255,.11); color: #A8BED2;
  }

  .nilai {
    display: flex; gap: 9px; align-items: flex-start; margin-top: 2px;
    padding: 11px 12px; border-radius: 14px;
    background: rgba(23,196,184,.09); border: 1px solid rgba(23,196,184,.26);
  }
  .ni {
    width: 28px; height: 28px; flex: none; border-radius: 10px; display: grid; place-items: center;
    background: var(--grad-brand); color: #04221F;
  }
  .nilai p { font-size: 10.5px; color: #A8BED2; line-height: 1.6; }
</style>
