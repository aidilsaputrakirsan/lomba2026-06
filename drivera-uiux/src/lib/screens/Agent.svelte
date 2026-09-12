<script>
  import Icon from '../Icon.svelte';
  import TabBar from '../TabBar.svelte';
  import { PERCAKAPAN, AGENT_JAWAB } from '../data.js';

  let { onnav = null } = $props();

  const saran = ['Tips berkendara saat hujan', 'Buka peta risiko'];
  // Tinggi batang visualiser suara — statis, sekadar penanda kanal aktif.
  const wave = [6, 13, 21, 16, 27, 19, 11, 22, 15, 8, 18, 25, 14, 9, 17, 12];
</script>

<div class="s-root">
  <div class="s-bar">
    <button class="s-icobtn" aria-label="Kembali" onclick={() => onnav?.('kemudi')}>
      <Icon name="back" size={16} />
    </button>
    <div style="flex:1">
      <h3>DRIVERA Agent</h3>
      <div class="sub">Mendengarkan · kata bangun "DRIVERA"</div>
    </div>
    <span class="av s-live"><Icon name="mic" size={16} /></span>
  </div>

  <div class="konteks">
    <Icon name="pin" size={12} />
    Konteks aktif: <b>R-204 · 700 m · Caution</b>
  </div>

  <div class="s-body chat">
    {#each PERCAKAPAN as m}
      {#if m.dari === 'user'}
        <div class="bub me">
          {#if m.suara}<span class="vz" aria-hidden="true"><Icon name="wave" size={11} /></span>{/if}
          {m.teks}
        </div>
      {:else}
        <div class="ai">
          <span class="ic"><Icon name="sparkle" size={13} /></span>
          <div class="bub">
            <p>{m.teks}</p>
            <div class="aks"><Icon name="gauge" size={11} /> {m.aksi}</div>
            <div class="src"><Icon name="map" size={10} /> {m.sumber}</div>
          </div>
        </div>
      {/if}
    {/each}

    <!-- Keluaran terstruktur: rekomendasi tindakan, bukan paragraf panjang.
         Pengemudi tidak membaca — ia mendengar dan sesekali melirik. -->
    <div class="ai">
      <span class="ic"><Icon name="sparkle" size={13} /></span>
      <div class="bub">
        <div class="rk">
          <div class="rh">
            <b>{AGENT_JAWAB.judul}</b>
            <span class="s-tag" style="color:var(--st-caution);background:var(--st-caution-bg)">Intervensi</span>
          </div>
          <p class="rs">{AGENT_JAWAB.ringkas}</p>
          <ol>
            {#each AGENT_JAWAB.langkah as l}<li>{l}</li>{/each}
          </ol>
          <div class="cat"><Icon name="clock" size={11} /> {AGENT_JAWAB.catatan}</div>
          <div class="ract">
            <button class="db">Nanti saja</button>
            <button class="db pri"><Icon name="route" size={12} stroke={2.4} /> Arahkan ke sana</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="foot">
    <p class="disc">
      <Icon name="alert" size={11} />
      Jawaban disusun dari peta risiko dan indikator perangkat — bukan pengganti kewaspadaan Anda.
    </p>
    <div class="saran">
      {#each saran as s}<span>{s}</span>{/each}
    </div>

    <div class="listen">
      <span class="wv" aria-hidden="true">
        {#each wave as h}<i style="height:{h}px"></i>{/each}
      </span>
      <div class="lt">
        <b>Bicara saja</b>
        <em>Tidak perlu menyentuh layar</em>
      </div>
      <button class="kb" aria-label="Ketik pertanyaan"><Icon name="book" size={15} /></button>
    </div>
  </div>

  <TabBar aktif="agent" {onnav} />
</div>

<style>
  .av {
    width: 34px; height: 34px; flex: none; border-radius: 11px; display: grid; place-items: center;
    background: var(--grad-brand); color: #04221F;
  }

  .konteks {
    flex: none; margin: 0 20px 10px; padding: 7px 11px; border-radius: 10px;
    display: flex; align-items: center; gap: 6px;
    background: rgba(255,182,39,.1); border: 1px solid rgba(255,182,39,.28);
    font-size: 11px; color: #C6D7E6;
  }
  .konteks b { color: var(--am-300); }

  .chat { overflow: hidden; gap: 8px; }

  .bub {
    border-radius: 15px; padding: 10px 12px; font-size: 12.5px; line-height: 1.5;
    background: rgba(255,255,255,.055); border: 1px solid rgba(255,255,255,.11); color: #C6D7E6;
  }
  .bub.me {
    align-self: flex-end; max-width: 82%;
    background: var(--grad-brand); color: #04221F; border: 0;
    border-bottom-right-radius: 5px; font-weight: 700;
    display: flex; gap: 6px; align-items: flex-start;
  }
  .vz { flex: none; margin-top: 2px; opacity: .7; }

  .ai { display: flex; gap: 8px; align-items: flex-start; }
  .ai .ic {
    width: 26px; height: 26px; flex: none; border-radius: 9px; display: grid; place-items: center;
    background: var(--grad-brand); color: #04221F; margin-top: 2px;
  }
  .ai .bub { flex: 1; min-width: 0; border-bottom-left-radius: 5px; }

  .aks {
    display: inline-flex; align-items: center; gap: 5px; margin-top: 8px;
    padding: 4px 9px; border-radius: 8px;
    background: var(--st-caution-bg); color: var(--st-caution);
    font-size: 10.5px; font-weight: 800;
  }
  .src {
    display: flex; align-items: center; gap: 5px; margin-top: 7px;
    font-size: 9.5px; color: #7F95AB; font-weight: 600;
  }

  .rk { margin: -2px 0; }
  .rh { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  .rh b { font-size: 12.5px; color: var(--ink-50); }
  .rs { font-size: 12px; font-weight: 800; color: var(--ink-50); line-height: 1.45; margin: 7px 0 0; }
  .rk ol { margin: 8px 0 0; padding-left: 16px; }
  .rk li { font-size: 11px; color: #9DB3C7; line-height: 1.5; margin-bottom: 3px; }
  .cat {
    display: flex; align-items: center; gap: 5px; margin-top: 8px;
    font-size: 10px; color: #7F95AB; font-weight: 600;
  }
  .ract { display: flex; gap: 7px; margin-top: 9px; }
  .db {
    flex: 1; min-height: 34px; border-radius: 10px; font-size: 11.5px; font-weight: 800;
    border: 1px solid rgba(255,255,255,.16); background: rgba(255,255,255,.05); color: #A8BED2;
    display: flex; align-items: center; justify-content: center; gap: 5px;
  }
  .db.pri { border: 0; background: var(--grad-brand); color: #04221F; }

  .disc {
    display: flex; gap: 6px; align-items: center;
    font-size: 9.5px; color: #7A8FA6; line-height: 1.4; margin-bottom: 8px;
  }

  .foot { flex: none; padding: 0 20px 10px; }
  .saran { display: flex; gap: 6px; margin-bottom: 9px; overflow: hidden; }
  .saran span {
    padding: 6px 11px; border-radius: 999px; white-space: nowrap;
    border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.05);
    font-size: 10.5px; font-weight: 700; color: #A8BED2;
  }

  /* Kanal utama adalah suara, maka yang ditawarkan di bawah bukan
     kolom ketik melainkan status "sedang mendengarkan". Papan ketik
     tetap tersedia sebagai alternatif, bukan sebagai jalur utama. */
  .listen {
    display: flex; align-items: center; gap: 11px; padding: 9px 10px 9px 13px;
    border-radius: 16px; background: rgba(23,196,184,.1); border: 1px solid rgba(23,196,184,.3);
  }
  .wv { display: flex; align-items: center; gap: 2px; height: 28px; flex: none; }
  .wv i { display: block; width: 2.5px; border-radius: 999px; background: var(--tl-400); opacity: .85; }
  .lt { flex: 1; min-width: 0; }
  .lt b { display: block; font-size: 12.5px; color: var(--ink-50); }
  .lt em { font-style: normal; font-size: 10px; color: #8FA6BC; }
  .kb {
    width: 36px; height: 36px; flex: none; border-radius: 11px;
    border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.06); color: #A8BED2;
    display: grid; place-items: center;
  }
</style>
