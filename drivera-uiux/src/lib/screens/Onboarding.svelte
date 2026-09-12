<script>
  import Icon from '../Icon.svelte';
  import { BASE, PROFIL, MODUL } from '../data.js';
  let { pilih = $bindable(1), onnext = null } = $props();

  const selesai = MODUL.filter((m) => m.selesai).length;
</script>

<div class="s-root ob">
  <div class="hero">
    <img src="{BASE}img/hero-malam.jpg" alt="Kendaraan melaju di jalan kota pada malam hari" />
    <div class="veil"></div>
    <div class="brandline">
      <span class="logo">
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" stroke-width="2" />
          <circle cx="12" cy="12" r="2.8" fill="currentColor" />
        </svg>
      </span>
      <div>
        <div class="nm">DRIVERA</div>
        <div class="tg">Berkendara Cerdas, Selamat Sampai Tujuan</div>
      </div>
    </div>
  </div>

  <div class="sheet">
    <div class="edu">
      <div class="eh">
        <span class="ei"><Icon name="book" size={16} /></span>
        <div style="flex:1">
          <b>Safety Onboarding</b>
          <em>{selesai} dari {MODUL.length} modul selesai</em>
        </div>
        <span class="pct">{Math.round((selesai / MODUL.length) * 100)}%</span>
      </div>
      <div class="s-prog"><i style="width:{(selesai / MODUL.length) * 100}%"></i></div>
      <div class="mods">
        {#each MODUL.slice(0, 4) as m}
          <span class="mod" class:done={m.selesai}>
            {#if m.selesai}<Icon name="check" size={10} stroke={3} />{:else}<Icon name={m.ikon} size={10} />{/if}
            {m.nama}
          </span>
        {/each}
        <span class="mod">+{MODUL.length - 4}</span>
      </div>
    </div>

    <h3>Siapa yang sedang<br />memegang kemudi?</h3>
    <p class="s-meta" style="margin-top:6px">
      Profil menentukan bobot peringatan, ambang kelelahan, dan cara DRIVERA menjelaskan risiko
      kepada Anda. Bisa diubah kapan saja.
    </p>

    <div class="opts">
      {#each PROFIL as p, i}
        <button class="opt" class:on={pilih === i} onclick={() => (pilih = i)}>
          <span class="ic"><Icon name={p.ikon} size={19} /></span>
          <span class="tx">
            <b>{p.nama}</b>
            <em>{p.butuh}</em>
          </span>
          <span class="rad" aria-hidden="true">{#if pilih === i}<Icon name="check" size={12} stroke={3} />{/if}</span>
        </button>
      {/each}
    </div>

    <button class="s-btn" onclick={() => onnext?.()}>
      Lanjut ke Pre-Drive Check <Icon name="chevron" size={17} />
    </button>
    <p class="fine">
      Kamera kabin hanya aktif selama perjalanan. Analisis berjalan di perangkat.
    </p>
  </div>
</div>

<style>
  .ob { background: #0B1522; }
  .hero { position: relative; height: 192px; flex: none; }
  .hero img { width: 100%; height: 100%; object-fit: cover; }
  .veil {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(5,10,18,.72) 0%, rgba(5,10,18,.32) 42%, rgba(11,21,34,.96) 100%);
  }
  .brandline { position: absolute; left: 24px; top: 66px; display: flex; align-items: center; gap: 10px; color: #fff; }
  .logo {
    width: 34px; height: 34px; border-radius: 11px; display: grid; place-items: center;
    background: rgba(23,196,184,.20); border: 1px solid rgba(23,196,184,.55);
    color: var(--tl-300); backdrop-filter: blur(8px);
  }
  .nm { font-weight: 800; font-size: 16px; letter-spacing: .1em; }
  .tg { font-size: 10px; opacity: .82; }

  .sheet {
    flex: 1; margin-top: -34px; position: relative; z-index: 2;
    background: #0B1522; border-radius: 26px 26px 0 0;
    padding: 18px 22px 20px; display: flex; flex-direction: column;
  }
  .sheet h3 { font-size: 19.5px; line-height: 1.2; margin-top: 13px; }

  .edu {
    padding: 11px 12px; border-radius: 15px;
    background: rgba(23,196,184,.09); border: 1px solid rgba(23,196,184,.24);
  }
  .eh { display: flex; align-items: center; gap: 9px; margin-bottom: 9px; }
  .ei {
    width: 30px; height: 30px; flex: none; border-radius: 10px; display: grid; place-items: center;
    background: var(--grad-brand); color: #04221F;
  }
  .eh b { display: block; font-size: 12.5px; color: var(--ink-50); }
  .eh em { font-style: normal; font-size: 10.5px; color: #8FA6BC; }
  .pct { font-size: 15px; font-weight: 800; color: var(--tl-300); letter-spacing: -.02em; }

  .mods { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 9px; }
  .mod {
    display: inline-flex; align-items: center; gap: 4px;
    padding: 3px 8px; border-radius: 999px; font-size: 9.5px; font-weight: 700;
    background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.12); color: #9DB3C7;
  }
  .mod.done { background: var(--st-ready-bg); border-color: transparent; color: var(--st-ready); }

  .opts { display: flex; flex-direction: column; gap: 6px; margin: 11px 0 11px; }
  .opt {
    display: flex; align-items: center; gap: 11px; text-align: left;
    padding: 9px 11px; min-height: 52px; border-radius: 14px;
    border: 1.5px solid rgba(255,255,255,.11); background: rgba(255,255,255,.045);
    color: inherit; transition: .16s;
  }
  .opt.on { border-color: var(--tl-500); background: rgba(23,196,184,.12); }
  .ic {
    width: 36px; height: 36px; flex: none; border-radius: 11px; display: grid; place-items: center;
    background: rgba(255,255,255,.08); color: var(--tl-300);
  }
  .opt.on .ic { background: var(--grad-brand); color: #04221F; }
  .tx { flex: 1; min-width: 0; }
  .tx b { display: block; font-size: 13.5px; color: var(--ink-50); }
  .tx em { font-style: normal; font-size: 10.5px; color: #8FA6BC; line-height: 1.4; display: block; }
  .rad {
    width: 20px; height: 20px; flex: none; border-radius: 50%; border: 1.5px solid rgba(255,255,255,.24);
    display: grid; place-items: center; color: #04221F;
  }
  .opt.on .rad { background: var(--tl-500); border-color: var(--tl-500); }

  .fine { font-size: 9.5px; color: #7A8FA6; text-align: center; margin-top: 9px; line-height: 1.45; }
</style>
