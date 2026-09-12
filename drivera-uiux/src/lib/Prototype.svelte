<script>
  import Phone from './Phone.svelte';
  import Onboarding from './screens/Onboarding.svelte';
  import PreDrive from './screens/PreDrive.svelte';
  import Monitor from './screens/Monitor.svelte';
  import DriverAlert from './screens/DriverAlert.svelte';
  import Kemudi from './screens/Kemudi.svelte';
  import PetaRisiko from './screens/PetaRisiko.svelte';
  import DetailTitik from './screens/DetailTitik.svelte';
  import Agent from './screens/Agent.svelte';
  import Edukasi from './screens/Edukasi.svelte';
  import Ringkasan from './screens/Ringkasan.svelte';

  let layar = $state('onboarding');
  let profil = $state(1);

  const urutan = [
    { id: 'onboarding', l: 'Onboarding' },
    { id: 'predrive', l: 'Pre-Drive' },
    { id: 'monitor', l: 'Vision Monitor' },
    { id: 'alert', l: 'Driver Alert' },
    { id: 'kemudi', l: 'Kemudi' },
    { id: 'peta', l: 'Peta Risiko' },
    { id: 'titik', l: 'Detail Ruas' },
    { id: 'agent', l: 'AI Agent' },
    { id: 'edukasi', l: 'Edukasi' },
    { id: 'profil', l: 'Ringkasan' }
  ];

  const nav = (id) => (layar = id);
</script>

<div class="proto">
  <div class="stage">
    <Phone>
      {#if layar === 'onboarding'}
        <Onboarding bind:pilih={profil} onnext={() => nav('predrive')} />
      {:else if layar === 'predrive'}
        <PreDrive onnext={() => nav('monitor')} onback={() => nav('onboarding')} />
      {:else if layar === 'monitor'}
        <Monitor onnext={() => nav('kemudi')} onback={() => nav('predrive')} onalert={() => nav('alert')} />
      {:else if layar === 'alert'}
        <DriverAlert onnext={() => nav('agent')} onback={() => nav('monitor')} />
      {:else if layar === 'kemudi'}
        <Kemudi onnav={nav} />
      {:else if layar === 'peta'}
        <PetaRisiko onnav={nav} />
      {:else if layar === 'titik'}
        <DetailTitik onnav={nav} />
      {:else if layar === 'agent'}
        <Agent onnav={nav} />
      {:else if layar === 'edukasi'}
        <Edukasi onnav={nav} />
      {:else}
        <Ringkasan onnav={nav} />
      {/if}
    </Phone>
  </div>

  <div class="panel glass">
    <div class="eyebrow">Prototipe interaktif</div>
    <h3>Coba alurnya langsung</h3>
    <p class="s-meta" style="font-size:13.5px;margin:8px 0 16px">
      Tombol di dalam layar berfungsi. Alur utama: pilih profil → Pre-Drive Check →
      Driver Vision Monitoring → <b>Driver Alert</b> → peringatan ruas → DRIVERA Agent →
      edukasi kontekstual → ringkasan perjalanan.
    </p>

    <div class="chips">
      {#each urutan as u, i}
        <button class="c" class:on={layar === u.id} onclick={() => nav(u.id)}>
          <span>{i + 1}</span>{u.l}
        </button>
      {/each}
    </div>

    <div class="hint">
      Ketuk penanda berwarna pada peta risiko untuk mengganti ruas yang ditampilkan di panel bawah.
      Tombol “Simulasi kantuk” pada layar Vision Monitor membuka state Driver Alert.
    </div>
  </div>
</div>

<style>
  .proto { display: grid; grid-template-columns: auto 1fr; gap: 34px; align-items: center; }
  .stage { display: flex; justify-content: center; }
  .panel { padding: 26px; }
  .panel h3 { font-size: 24px; }

  .chips { display: flex; flex-wrap: wrap; gap: 7px; }
  .c {
    display: inline-flex; align-items: center; gap: 7px; min-height: 40px;
    padding: 0 14px 0 8px; border-radius: 999px;
    border: 1px solid var(--glass-brd); background: rgba(255,255,255,.05);
    font-size: 13px; font-weight: 700; color: var(--ink-300); transition: .16s;
  }
  .c span {
    width: 22px; height: 22px; border-radius: 50%; display: grid; place-items: center;
    background: rgba(255,255,255,.09); color: var(--ink-400); font-size: 11px; font-weight: 800;
  }
  .c:hover { border-color: var(--tl-500); color: var(--ink-50); }
  .c.on { background: var(--grad-brand); color: #04221F; border-color: transparent; box-shadow: 0 8px 20px rgba(23,196,184,.3); }
  .c.on span { background: rgba(0,0,0,.18); color: #04221F; }

  .hint {
    margin-top: 16px; padding: 11px 14px; border-radius: 12px;
    background: rgba(23,196,184,.08); border: 1px solid rgba(23,196,184,.24);
    font-size: 12.5px; color: var(--ink-300);
  }

  @media (max-width: 900px) {
    .proto { grid-template-columns: 1fr; gap: 24px; }
  }
</style>
