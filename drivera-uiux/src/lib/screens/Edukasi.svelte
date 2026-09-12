<script>
  import Icon from '../Icon.svelte';
  import TabBar from '../TabBar.svelte';
  import { BASE, EDUKASI, KONTEKS, STATUS } from '../data.js';

  let { onnav = null } = $props();
</script>

<!-- Satu-satunya layar bertema terang. Alasannya bukan estetika:
     ini layar yang dibaca lama dan hanya dibuka ketika kendaraan
     berhenti, sehingga kontras tinggi lebih menolong daripada
     tema gelap yang dirancang untuk lirikan singkat. -->
<div class="s-root light">
  <div class="s-bar">
    <button class="s-icobtn" aria-label="Kembali" onclick={() => onnav?.('kemudi')}>
      <Icon name="back" size={16} />
    </button>
    <div style="flex:1">
      <h3>Edukasi Kontekstual</h3>
      <div class="sub">Muncul karena kondisi Anda, bukan jadwal</div>
    </div>
  </div>

  <div class="s-body">
    <div class="pem">
      <Icon name="alert" size={12} />
      Pemicu: <b>{EDUKASI.pemicu}</b>
    </div>

    <div class="kartu">
      <img src="{BASE}img/hujan-kaca.jpg" alt="Pandangan jalan dari balik kaca mobil yang basah" />
      <div class="kt">
        <span class="s-tag" style="color:var(--st-risk);background:var(--st-risk-bg)">Kelelahan</span>
        <h4>{EDUKASI.judul}</h4>
        <p>{EDUKASI.isi}</p>

        <b class="lb">Yang perlu dilakukan</b>
        <ol>
          {#each EDUKASI.langkah as l}<li>{l}</li>{/each}
        </ol>

        <div class="ruj"><Icon name="book" size={11} /> {EDUKASI.rujukan}</div>
      </div>
    </div>

    <b class="jt">Kapan DRIVERA mengedukasi</b>
    <div class="pic">
      {#each KONTEKS as k}
        {@const st = STATUS[k.st]}
        <div class="pr">
          <span class="pi" style="color:{st.warna};background:{st.bg}"><Icon name={k.ikon} size={14} /></span>
          <div>
            <b>{k.pemicu}</b>
            <em>{k.respons}</em>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="foot">
    <button class="s-btn" onclick={() => onnav?.('agent')}>
      <Icon name="volume" size={16} /> Bacakan untuk saya
    </button>
  </div>

  <TabBar aktif="edukasi" {onnav} />
</div>

<style>
  .s-body { gap: 11px; }

  .pem {
    flex: none; display: flex; align-items: center; gap: 6px;
    padding: 8px 11px; border-radius: 11px;
    background: #FDF1D8; border: 1px solid #F3DDAC; color: #7A5B06;
    font-size: 11px;
  }
  .pem b { color: #4A3703; }

  .kartu {
    border-radius: 18px; overflow: hidden; background: #fff; border: 1px solid #E2EAF2;
    box-shadow: 0 4px 14px rgba(16,40,66,.06);
  }
  .kartu img { width: 100%; height: 108px; object-fit: cover; }
  .kt { padding: 13px 14px 14px; }
  .kt h4 { font-size: 15px; color: #0B1622; line-height: 1.3; margin: 8px 0 6px; }
  .kt p { font-size: 11.5px; color: #4E637A; line-height: 1.6; }

  .lb {
    display: block; font-size: 9.5px; font-weight: 800; letter-spacing: .12em;
    text-transform: uppercase; color: #7A8FA6; margin: 11px 0 5px;
  }
  .kt ol { margin: 0; padding-left: 16px; }
  .kt li { font-size: 11px; color: #4E637A; line-height: 1.55; margin-bottom: 3px; }

  .ruj {
    display: inline-flex; align-items: center; gap: 5px; margin-top: 10px;
    padding: 4px 9px; border-radius: 8px; background: #EAF7F4; color: #0A7F7B;
    font-size: 9.5px; font-weight: 800;
  }

  .jt { display: block; font-size: 12.5px; font-weight: 800; color: #0B1622; margin-top: 2px; }
  .pic { display: flex; flex-direction: column; gap: 6px; }
  .pr {
    display: flex; gap: 9px; align-items: center;
    padding: 9px 10px; border-radius: 13px; background: #fff; border: 1px solid #E2EAF2;
  }
  .pi { width: 28px; height: 28px; flex: none; border-radius: 9px; display: grid; place-items: center; }
  .pr b { display: block; font-size: 11.5px; color: #0B1622; line-height: 1.3; }
  .pr em { font-style: normal; font-size: 10px; color: #63788C; }

  .foot { flex: none; padding: 0 20px 12px; }
</style>
