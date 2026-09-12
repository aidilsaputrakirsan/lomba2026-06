<script>
  import { TITIK, RISIKO } from './data.js';

  /**
   * Kanvas peta vektor (representasi MapLibre GL + PostGIS).
   * mode: 'heat'  -> sebaran risiko ruas (Traffic Risk Map)
   *       'drive' -> rute aktif + posisi pengemudi saat berkendara
   */
  let { mode = 'heat', active = null, onpick = null } = $props();
</script>

<div class="map">
  <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" role="img"
       aria-label="Peta risiko lalu lintas dengan titik rawan kecelakaan">
    <defs>
      <linearGradient id="dvbg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#08121D" />
        <stop offset="55%" stop-color="#0E1D2E" />
        <stop offset="100%" stop-color="#0A1726" />
      </linearGradient>
      <radialGradient id="dvheat">
        <stop offset="0%" stop-color="#FF4D5E" stop-opacity=".5" />
        <stop offset="100%" stop-color="#FF4D5E" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="dvroute" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stop-color="#17C4B8" />
        <stop offset="65%" stop-color="#FFB627" />
        <stop offset="100%" stop-color="#FF4D5E" />
      </linearGradient>
    </defs>

    <rect width="100" height="100" fill="url(#dvbg)" />

    <!-- blok terbangun -->
    <g fill="#9FD8FF" opacity=".05">
      <rect x="6" y="10" width="18" height="14" rx="1.5" />
      <rect x="30" y="8" width="22" height="12" rx="1.5" />
      <rect x="60" y="12" width="16" height="16" rx="1.5" />
      <rect x="80" y="8" width="14" height="20" rx="1.5" />
      <rect x="8" y="36" width="20" height="18" rx="1.5" />
      <rect x="34" y="34" width="26" height="16" rx="1.5" />
      <rect x="66" y="36" width="26" height="12" rx="1.5" />
      <rect x="6" y="62" width="24" height="20" rx="1.5" />
      <rect x="36" y="58" width="20" height="22" rx="1.5" />
      <rect x="62" y="56" width="18" height="14" rx="1.5" />
      <rect x="84" y="56" width="12" height="26" rx="1.5" />
    </g>

    <!-- sungai -->
    <path d="M-2 84 Q 22 76 40 88 T 102 80" fill="none" stroke="#1E6E8C" stroke-opacity=".4" stroke-width="4" />

    <!-- jaringan jalan: arteri tebal, kolektor tipis -->
    <g stroke="#CDE7FF" fill="none" stroke-linecap="round">
      <g stroke-opacity=".20" stroke-width="3.2">
        <path d="M0 30 H100" /><path d="M0 54 H100" /><path d="M28 0 V100" /><path d="M62 0 V100" />
      </g>
      <g stroke-opacity=".10" stroke-width="1.4">
        <path d="M0 16 H100" /><path d="M0 42 H100" /><path d="M0 70 H100" /><path d="M0 88 H100" />
        <path d="M14 0 V100" /><path d="M44 0 V100" /><path d="M78 0 V100" /><path d="M92 0 V100" />
      </g>
    </g>

    {#if mode === 'heat'}
      <!-- sebaran risiko: hanya ruas tinggi & sangat tinggi yang memancar -->
      <g>
        {#each TITIK.filter((t) => t.rk >= 3) as t}
          <circle cx={t.x} cy={t.y} r={t.rk === 4 ? 11 : 8} fill="url(#dvheat)" />
        {/each}
      </g>
    {:else}
      <!-- rute aktif; warna bergradasi mengikuti naiknya risiko di depan -->
      <path d="M20 88 L28 88 L28 70 L44 70 L44 54 L62 54 L62 30 L74 30 L74 12"
            fill="none" stroke="url(#dvroute)" stroke-width="3.6"
            stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="44" cy="70" r="3.6" fill="#17C4B8" stroke="#08121D" stroke-width="1.4" />
      <circle cx="44" cy="70" r="6.4" fill="none" stroke="#17C4B8" stroke-opacity=".45" stroke-width="1" />
      <circle cx="74" cy="12" r="3" fill="#FF4D5E" stroke="#08121D" stroke-width="1.4" />
    {/if}

    <!-- penanda titik rawan -->
    {#snippet marker(t, on)}
      {#if on}<circle cx={t.x} cy={t.y} r="4.2" fill={RISIKO[t.rk].warna} opacity=".3" />{/if}
      <circle cx={t.x} cy={t.y} r={on ? 2.3 : 1.7}
              fill={RISIKO[t.rk].warna} stroke="#08121D" stroke-width=".7" />
    {/snippet}

    <g>
      {#each TITIK as t}
        {@const on = active === t.id}
        {#if onpick}
          <g
            class="mk" class:on
            onclick={() => onpick(t)}
            onkeydown={(e) => (e.key === 'Enter' || e.key === ' ' ? onpick(t) : null)}
            role="button" tabindex="0"
            aria-label={`Titik ${t.id}, ${t.jalan}, risiko ${RISIKO[t.rk].label}`}
          >
            {@render marker(t, on)}
          </g>
        {:else}
          <g>{@render marker(t, on)}</g>
        {/if}
      {/each}
    </g>
  </svg>
</div>

<style>
  .map { position: absolute; inset: 0; }
  .map svg { width: 100%; height: 100%; display: block; }
  .mk { cursor: pointer; transition: transform .18s ease; transform-origin: center; transform-box: fill-box; }
  .mk:hover { transform: scale(1.25); }
</style>
