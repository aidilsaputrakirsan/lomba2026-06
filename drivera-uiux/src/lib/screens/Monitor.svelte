<script>
  import Icon from '../Icon.svelte';
  import { BASE, INDIKATOR, DRIVER_STATUS, STATUS, BATAS_CV } from '../data.js';

  let { onnext = null, onback = null, onalert = null } = $props();
  const s = STATUS[DRIVER_STATUS.st];
</script>

<div class="s-root">
  <div class="cam">
    <!-- Pratinjau kamera perangkat. Wajah pengemudi tampil apa adanya;
         kotak analisis diletakkan di atasnya sebagai lapisan terpisah
         supaya jelas bahwa yang diukur adalah kondisi visual, bukan
         identitas orang di dalam bingkai. -->
    <div class="frame">
      <img class="feed" src="{BASE}img/pengemudi.jpg" alt="Pratinjau kamera kabin menampilkan pengemudi di balik kemudi" />
      <!-- Kotak analisis: wilayah kepala, mata, dan mulut.
           Diposisikan dalam persen terhadap FOTO, bukan terhadap kotak
           kamera, supaya tetap pas walau tinggi kotak kamera berubah. -->
      <div class="box bKepala" aria-hidden="true"><span>Head Pose · 6°</span></div>
      <div class="box bMata" aria-hidden="true"><span>Eye Closure · 0,11</span></div>
      <div class="box bMulut" aria-hidden="true"><span>Drowsiness</span></div>
    </div>
    <div class="scrim"></div>

    <div class="ctop">
      <span class="rec"><i class="s-live"></i> CAMERA ACTIVE</span>
      <button class="s-icobtn" aria-label="Matikan kamera" onclick={() => onback?.()}>
        <Icon name="eyeoff" size={15} />
      </button>
    </div>

    <div class="gaze" aria-hidden="true"><span><Icon name="eye" size={10} /> Gaze: ke jalan</span></div>

    <div class="cfoot">
      <span class="fp"><Icon name="check" size={11} stroke={3} /> Face Presence 100%</span>
      <span class="fps">Analisis 4×/detik · di perangkat</span>
    </div>
  </div>

  <div class="sheet">
    <div class="sh">
      <div>
        <b class="s-title">Driver Vision Monitoring</b>
        <div class="s-meta">Menganalisis kondisi visual, bukan identitas</div>
      </div>
      <span class="s-tag" style="color:{s.warna};background:{s.bg}">{DRIVER_STATUS.risk}</span>
    </div>

    <!-- DRIVER STATUS: hasil analisis, bukan sekadar tampilan wajah -->
    <div class="status" style="--w:{s.warna};--bg:{s.bg}">
      <div class="stt"><Icon name="shield" size={12} /> DRIVER STATUS</div>
      <div class="sgrid">
        {#each DRIVER_STATUS.baris as b}
          {@const bs = STATUS[b.st]}
          <div class="sitem">
            <em>{b.l}</em>
            <b style="color:{bs.warna}">
              {#if b.cek}<Icon name="check" size={12} stroke={3} />{/if}{b.v}
            </b>
          </div>
        {/each}
      </div>
      <div class="srisk">
        <span>Risk Level</span>
        <b style="color:{s.warna}">{DRIVER_STATUS.risk}</b>
      </div>
    </div>

    <div class="ind">
      {#each INDIKATOR as i}
        {@const st = STATUS[i.st]}
        <div class="ir">
          <span class="idot" style="background:{st.warna}" aria-label={st.label}></span>
          <div>
            <b>{i.kode}</b>
            <em>{i.ukur}</em>
          </div>
        </div>
      {/each}
    </div>

    <div class="batas">
      <Icon name="shield" size={12} />
      <p>{BATAS_CV}</p>
    </div>

    <div class="acts">
      <button class="s-btn ghost" onclick={() => onalert?.()}>
        <Icon name="moon" size={15} /> Simulasi kantuk
      </button>
      <button class="s-btn" onclick={() => onnext?.()}>
        <Icon name="gauge" size={15} /> Risk Score
      </button>
    </div>
  </div>
</div>

<style>
  /* Foto 896x1195 pada lebar 390 -> tinggi tayang 520px.
     Lapisan .frame digeser ke atas sebesar (520 - tinggi kamera) x 0.38,
     meniru object-position 62% 38% tetapi dengan koordinat yang terkunci. */
  .cam { position: relative; flex: none; height: 430px; overflow: hidden; background: #0A1522; }
  .frame { position: absolute; left: 0; width: 100%; height: 520px; top: -34px; }
  .feed { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
  /* Bagian atas dan bawah digelapkan agar label tetap terbaca
     tanpa menutupi wajah yang sedang dianalisis. */
  .scrim {
    position: absolute; inset: 0;
    background:
      linear-gradient(180deg, rgba(6,12,20,.82) 0%, rgba(6,12,20,.12) 22%, rgba(6,12,20,0) 45%),
      linear-gradient(0deg, rgba(6,12,20,.88) 0%, rgba(6,12,20,0) 26%);
  }

  .ctop { position: absolute; top: 60px; left: 18px; right: 18px; display: flex; align-items: flex-start; gap: 8px; }
  .rec {
    flex: 1; display: inline-flex; align-items: center; gap: 7px;
    padding: 6px 12px; border-radius: 999px;
    font-size: 10.5px; font-weight: 800; letter-spacing: .1em;
    background: rgba(9,18,30,.7); border: 1px solid rgba(255,106,82,.5); color: #fff;
    backdrop-filter: blur(12px); align-self: flex-start;
  }
  .rec i { width: 7px; height: 7px; border-radius: 50%; background: var(--st-risk); display: block; flex: none; }

  /* Kotak deteksi — diposisikan mengikuti letak wajah pada foto */
  .box {
    position: absolute; border: 1.5px solid var(--tl-400); border-radius: 6px;
    box-shadow: 0 0 0 1px rgba(6,12,20,.5);
  }
  .box span {
    position: absolute; top: -9px; left: -1px; white-space: nowrap;
    z-index: 2;
    padding: 2px 6px; border-radius: 5px;
    background: var(--tl-400); color: #04221F;
    font-size: 8px; font-weight: 800; letter-spacing: .02em;
  }
  .bMata { top: 35.8%; left: 56.5%; width: 15%; height: 2.6%; }
  /* Label diletakkan di samping kanan kotak, bukan di atasnya, agar
     mata dan mulut yang sedang dianalisis tetap terlihat. */
  .bMata span, .bMulut span { top: 50%; left: 100%; transform: translate(6px, -50%); }
  .bKepala {
    top: 26%; left: 50%; width: 31%; height: 22%;
    border-color: rgba(111,227,218,.45); border-style: dashed;
  }
  .bKepala span { background: rgba(111,227,218,.85); }
  .bMulut {
    top: 43.3%; left: 59%; width: 11%; height: 2.6%;
    border-color: var(--st-caution);
  }
  .bMulut span { background: var(--st-caution); color: #2A1502; }

  .gaze {
    position: absolute; top: 66%; left: 18px;
    padding: 4px 9px; border-radius: 8px;
    background: rgba(9,18,30,.74); border: 1px solid rgba(23,196,184,.45);
    backdrop-filter: blur(8px);
  }
  .gaze span {
    display: flex; align-items: center; gap: 5px;
    font-size: 9.5px; font-weight: 800; color: var(--tl-300);
  }

  .cfoot {
    position: absolute; left: 18px; right: 18px; bottom: 14px;
    display: flex; align-items: center; justify-content: space-between; gap: 8px;
  }
  .fp {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 5px 10px; border-radius: 999px;
    background: var(--st-ready-bg); border: 1px solid rgba(34,212,138,.4); color: var(--st-ready);
    font-size: 9.5px; font-weight: 800; backdrop-filter: blur(8px);
  }
  .fps { font-size: 9px; color: #9DB3C7; font-weight: 600; }

  .sheet {
    flex: 1; min-height: 0; background: #101C2B; border-radius: 24px 24px 0 0;
    padding: 13px 20px 16px; margin-top: -18px; position: relative; z-index: 4;
    border-top: 1px solid rgba(255,255,255,.09);
  }
  .sh { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 10px; }

  .status {
    padding: 10px 12px; border-radius: 14px; margin-bottom: 10px;
    background: var(--bg); border: 1px solid color-mix(in srgb, var(--w) 34%, transparent);
  }
  .stt {
    display: flex; align-items: center; gap: 5px; margin-bottom: 8px;
    font-size: 9px; font-weight: 800; letter-spacing: .14em; color: var(--w);
  }
  .sgrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px 12px; }
  .sitem { display: flex; align-items: baseline; justify-content: space-between; gap: 6px; }
  .sitem em { font-style: normal; font-size: 10.5px; color: #A8BED2; }
  .sitem b { display: flex; align-items: center; gap: 3px; font-size: 11.5px; font-weight: 800; }
  .srisk {
    display: flex; align-items: center; justify-content: space-between;
    margin-top: 9px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,.12);
  }
  .srisk span { font-size: 10.5px; color: #A8BED2; font-weight: 600; }
  .srisk b { font-size: 14px; font-weight: 800; letter-spacing: .06em; }

  .ind { display: grid; grid-template-columns: repeat(2, 1fr); gap: 5px 10px; }
  .ir { display: flex; gap: 7px; align-items: flex-start; }
  .idot { width: 7px; height: 7px; border-radius: 50%; flex: none; margin-top: 5px; }
  .ir > div { flex: 1; min-width: 0; }
  .ir b { display: block; font-size: 10.5px; color: var(--ink-50); font-weight: 800; line-height: 1.3; }
  .ir em { font-style: normal; font-size: 9px; color: #7F95AB; line-height: 1.35; display: block; }

  .batas {
    display: flex; gap: 7px; align-items: flex-start; margin: 10px 0 10px;
    padding: 8px 10px; border-radius: 11px;
    background: var(--st-ready-bg); border: 1px solid rgba(34,212,138,.26); color: var(--st-ready);
  }
  .batas p { font-size: 9px; color: #A8BED2; line-height: 1.45; }

  .acts { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
  .acts .s-btn { font-size: 12.5px; min-height: 42px; }
</style>
