<script>
  import Icon from './Icon.svelte';
  let { aktif = 'kemudi', onnav = null } = $props();

  /* Tombol tengah bukan "tambah data" seperti aplikasi pada umumnya,
     melainkan mikrofon: jalur interaksi utama DRIVERA adalah suara. */
  const items = [
    { id: 'kemudi', ic: 'gauge', l: 'Kemudi' },
    { id: 'peta', ic: 'map', l: 'Peta Risiko' },
    { id: 'agent', ic: 'mic', l: 'Bicara', fab: true },
    { id: 'edukasi', ic: 'book', l: 'Edukasi' },
    { id: 'profil', ic: 'user', l: 'Saya' }
  ];
</script>

<nav class="s-tabs" aria-label="Navigasi utama">
  {#each items as it}
    <button
      class="s-tab" class:on={aktif === it.id}
      onclick={() => onnav?.(it.id)}
      aria-current={aktif === it.id ? 'page' : undefined}
    >
      {#if it.fab}
        <span class="fab"><Icon name={it.ic} size={20} /></span>
      {:else}
        <Icon name={it.ic} size={19} />
      {/if}
      {it.l}
    </button>
  {/each}
</nav>
