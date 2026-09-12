<script>
  /**
   * Bingkai perangkat.
   * Layar digambar pada ukuran logis sebenarnya (390 x 844, iPhone 14)
   * lalu diperkecil dengan transform agar muat di halaman lampiran.
   */
  let { label = '', caption = '', scale = 0.78, children } = $props();

  const W = 390, H = 844, PAD = 12;
  const outerW = $derived((W + PAD * 2) * scale);
  const outerH = $derived((H + PAD * 2) * scale);
</script>

<figure class="dev">
  <div class="slot" style="width:{outerW}px;height:{outerH}px">
    <div class="frame" style="transform:scale({scale})">
      <div class="notch"></div>
      <div class="status">
        <span class="t">21:41</span>
        <span class="rr">
          <svg width="18" height="12" viewBox="0 0 17 11" aria-hidden="true">
            <rect x="0" y="7.5" width="3" height="3.5" rx="1" fill="currentColor" />
            <rect x="4.5" y="5" width="3" height="6" rx="1" fill="currentColor" />
            <rect x="9" y="2.5" width="3" height="8.5" rx="1" fill="currentColor" />
            <rect x="13.5" y="0" width="3" height="11" rx="1" fill="currentColor" opacity=".35" />
          </svg>
          <svg width="26" height="13" viewBox="0 0 24 12" aria-hidden="true">
            <rect x=".6" y=".6" width="19" height="10.8" rx="3" fill="none" stroke="currentColor" stroke-opacity=".5" />
            <rect x="2.2" y="2.2" width="13" height="7.6" rx="1.6" fill="currentColor" />
            <path d="M21 4v4a2.2 2.2 0 0 0 0-4z" fill="currentColor" opacity=".5" />
          </svg>
        </span>
      </div>

      <div class="screen">
        {@render children?.()}
      </div>

      <div class="home"></div>
    </div>
  </div>

  {#if label}
    <figcaption style="max-width:{outerW + 24}px">
      <strong>{label}</strong>
      {#if caption}<span>{caption}</span>{/if}
    </figcaption>
  {/if}
</figure>

<style>
  .dev { margin: 0; display: flex; flex-direction: column; align-items: center; gap: 14px; }
  .slot { position: relative; flex: none; }

  .frame {
    position: absolute; top: 0; left: 0;
    transform-origin: top left;
    width: 414px;   /* 390 + padding 12*2 */
    height: 868px;  /* 844 + padding 12*2 */
    border-radius: 52px;
    padding: 12px;
    background: linear-gradient(150deg, #33465C 0%, #16212F 45%, #3A4E64 100%);
    box-shadow:
      0 30px 64px rgba(0, 0, 0, .55),
      0 0 0 1px rgba(255, 255, 255, .10) inset;
    color: #EDF4FA;
  }

  .notch {
    position: absolute; top: 21px; left: 50%; transform: translateX(-50%);
    width: 112px; height: 26px; border-radius: 999px;
    background: #05090F; z-index: 5;
  }

  .status {
    position: absolute; top: 24px; left: 0; right: 0; z-index: 4;
    display: flex; justify-content: space-between; align-items: center;
    padding: 0 34px; font-size: 14px; font-weight: 700;
    pointer-events: none;
  }
  .status .rr { display: flex; align-items: center; gap: 5px; }

  .screen {
    position: absolute; inset: 12px;
    border-radius: 42px; overflow: hidden;
    background: #0B1522;
    display: flex; flex-direction: column;
  }

  .home {
    position: absolute; bottom: 11px; left: 50%; transform: translateX(-50%);
    width: 140px; height: 5px; border-radius: 999px;
    background: currentColor; opacity: .38; z-index: 6;
  }

  figcaption { text-align: center; font-size: 13px; color: var(--ink-400); line-height: 1.5; }
  figcaption strong { display: block; color: var(--ink-50); font-size: 14.5px; }

  @media print {
    /* Bingkai dicetak sebagai garis tipis; isi layar tetap gelap karena
       itulah tampilan sebenarnya di kabin — hanya kerangkanya yang netral. */
    .frame { box-shadow: 0 0 0 1px #B9C9D8; background: #E6EDF4; color: #0B1622; }
    .dev { zoom: .62; break-inside: avoid; }
  }
</style>
