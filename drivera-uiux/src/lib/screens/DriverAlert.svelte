<script>
  import Icon from '../Icon.svelte';
  import { BASE, DRIVER_ALERT, STATUS } from '../data.js';

  let { onnext = null, onback = null } = $props();
  const s = STATUS[DRIVER_ALERT.st];
  const r = DRIVER_ALERT.restArea;
</script>

<div class="s-root alert">
  <div class="cam">
    <div class="frame">
      <img class="feed" src="{BASE}img/pengemudi-ngantuk.jpg" alt="Pratinjau kamera kabin: pengemudi menguap dengan mata terpejam" />
      <div class="box bMata" aria-hidden="true"><span>Eye Closure · 1,8 dtk</span></div>
      <div class="box bMulut" aria-hidden="true"><span>Yawn detected</span></div>
    </div>
    <!-- Saat risiko naik, pratinjau sengaja diredam: yang harus dibaca
         pengemudi adalah peringatannya, bukan wajahnya sendiri. -->
    <div class="scrim"></div>

    <div class="ctop">
      <span class="rec"><i class="s-live"></i> CAMERA ACTIVE</span>
      <button class="s-icobtn" aria-label="Kembali" onclick={() => onback?.()}>
        <Icon name="back" size={15} />
      </button>
    </div>

    <div class="banner" role="alert">
      <div class="bh">
        <span class="bi"><Icon name="alert" size={20} /></span>
        <div>
          <em>DRIVER ALERT</em>
          <b>{DRIVER_ALERT.judul}</b>
        </div>
      </div>
      <p>{DRIVER_ALERT.teks}</p>
      <div class="bs"><Icon name="volume" size={11} /> Dibacakan otomatis + nada peringatan</div>
    </div>
  </div>

  <div class="sheet">
    <div class="status" style="--w:{s.warna};--bg:{s.bg}">
      <div class="stt"><Icon name="shield" size={12} /> DRIVER STATUS</div>
      <div class="sgrid">
        {#each DRIVER_ALERT.baris as b}
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
        <b style="color:{s.warna}">{DRIVER_ALERT.risk}</b>
      </div>
    </div>

    <div class="pemicu">
      <b>Dasar peringatan</b>
      <ul>
        {#each DRIVER_ALERT.pemicu as p}<li>{p}</li>{/each}
      </ul>
    </div>

    <div class="rest">
      <span class="ri"><Icon name="coffee" size={16} /></span>
      <div>
        <b>{r.nama}</b>
        <em>{r.jarak} · sekitar {r.waktu}</em>
      </div>
    </div>

    <button class="s-btn danger" onclick={() => onnext?.()}>
      <Icon name="route" size={17} /> {DRIVER_ALERT.aksi}
    </button>
    <button class="s-btn ghost lanjut" onclick={() => onback?.()}>
      Saya masih kuat — ingatkan lagi 5 menit
    </button>
    <p class="fine">
      DRIVERA tidak mengambil alih kendali kendaraan. Keputusan akhir tetap pada Anda.
    </p>
  </div>
</div>

<style>
    .cam { position: relative; flex: none; height: 340px; overflow: hidden; background: #0A1522; }
  .frame { position: absolute; left: 0; width: 100%; height: 520px; top: -68px; }
  .feed {
    position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
    filter: saturate(.55) brightness(.62);
  }
  .scrim {
    position: absolute; inset: 0;
    background:
      linear-gradient(180deg, rgba(38,8,8,.55) 0%, rgba(6,12,20,.2) 30%, rgba(16,28,43,.96) 100%);
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

  .box {
    position: absolute; border: 1.5px solid var(--st-risk); border-radius: 6px;
    box-shadow: 0 0 0 1px rgba(6,12,20,.5);
  }
  .box span {
    position: absolute; top: -9px; left: -1px; white-space: nowrap;
    padding: 2px 6px; border-radius: 5px;
    background: var(--st-risk); color: #2A0906;
    font-size: 8px; font-weight: 800;
  }
  .bMata { top: 35.8%; left: 56.5%; width: 15%; height: 2.6%; }
  .bMata span, .bMulut span { top: 50%; left: 100%; transform: translate(6px, -50%); }
  .bMulut { top: 43.3%; left: 55%; width: 13%; height: 4.5%; border-color: var(--am-500); }
  .bMulut span { background: var(--am-500); color: #2A1502; }

  .banner {
    position: absolute; left: 16px; right: 16px; bottom: 14px; z-index: 3;
    padding: 12px 13px; border-radius: 17px;
    background: rgba(9,18,30,.88); border: 1.5px solid var(--st-risk);
    backdrop-filter: blur(16px);
    box-shadow: 0 16px 38px rgba(0,0,0,.55);
  }
  .bh { display: flex; align-items: center; gap: 10px; }
  .bi {
    width: 36px; height: 36px; flex: none; border-radius: 12px; display: grid; place-items: center;
    background: var(--st-risk-bg); color: var(--st-risk);
  }
  .bh em {
    font-style: normal; display: block;
    font-size: 9px; font-weight: 800; letter-spacing: .16em; color: var(--st-risk);
  }
  .bh b { display: block; font-size: 14px; color: #fff; font-weight: 800; line-height: 1.25; margin-top: 1px; }
  .banner p { font-size: 12px; color: #D7E4F0; line-height: 1.5; margin-top: 9px; }
  .bs {
    display: flex; align-items: center; gap: 5px; margin-top: 8px; padding-top: 8px;
    border-top: 1px solid rgba(255,255,255,.12);
    font-size: 9.5px; color: #93A9BE; font-weight: 600;
  }

  .sheet {
    flex: 1; min-height: 0; background: #101C2B;
    padding: 13px 20px 18px; display: flex; flex-direction: column; gap: 9px;
  }

  .status {
    padding: 10px 12px; border-radius: 14px;
    background: var(--bg); border: 1px solid color-mix(in srgb, var(--w) 38%, transparent);
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

  .pemicu {
    padding: 10px 12px; border-radius: 13px;
    background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
  }
  .pemicu b {
    display: block; font-size: 9.5px; font-weight: 800; letter-spacing: .12em;
    text-transform: uppercase; color: #8FA6BC; margin-bottom: 5px;
  }
  .pemicu ul { margin: 0; padding-left: 15px; }
  .pemicu li { font-size: 10.5px; color: #A8BED2; line-height: 1.5; margin-bottom: 2px; }

  .rest {
    display: flex; gap: 10px; align-items: center;
    padding: 10px 12px; border-radius: 13px;
    background: rgba(23,196,184,.1); border: 1px solid rgba(23,196,184,.3);
  }
  .ri {
    width: 32px; height: 32px; flex: none; border-radius: 11px; display: grid; place-items: center;
    background: var(--grad-brand); color: #04221F;
  }
  .rest b { display: block; font-size: 12.5px; color: var(--ink-50); }
  .rest em { font-style: normal; font-size: 10.5px; color: var(--tl-300); font-weight: 700; }

  .lanjut { min-height: 38px; font-size: 11.5px; }
  .fine { font-size: 9px; color: #7A8FA6; text-align: center; line-height: 1.45; }
</style>
