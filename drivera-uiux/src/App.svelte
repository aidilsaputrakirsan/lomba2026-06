<script>
  import Icon from './lib/Icon.svelte';
  import Phone from './lib/Phone.svelte';
  import Prototype from './lib/Prototype.svelte';
  import Dashboard from './lib/Dashboard.svelte';
  import Onboarding from './lib/screens/Onboarding.svelte';
  import PreDrive from './lib/screens/PreDrive.svelte';
  import Monitor from './lib/screens/Monitor.svelte';
  import DriverAlert from './lib/screens/DriverAlert.svelte';
  import Kemudi from './lib/screens/Kemudi.svelte';
  import PetaRisiko from './lib/screens/PetaRisiko.svelte';
  import DetailTitik from './lib/screens/DetailTitik.svelte';
  import Agent from './lib/screens/Agent.svelte';
  import Edukasi from './lib/screens/Edukasi.svelte';
  import Ringkasan from './lib/screens/Ringkasan.svelte';
  import {
    BASE, BRAND, RUJUKAN, TECH, KREDIT, PROFIL, INDIKATOR,
    STATUS, RISIKO, AI_PERAN, LAPIS, KONTEKS, INTERVENSI, PERINTAH_SUARA
  } from './lib/data.js';

  const alur = [
    { ic: 'book', t: 'Edukasi lebih dulu', d: 'Safety Onboarding memberi dasar keselamatan sebelum satu fitur pun dipakai. Kesadaran dibangun sebelum perjalanan, bukan setelah nyaris celaka.' },
    { ic: 'shield', t: 'Kesiapan diperiksa', d: 'Pre-Drive Check menggabungkan kondisi pengemudi, risiko rute, dan lingkungan menjadi satu status: Ready, Caution, atau High Risk.' },
    { ic: 'eye', t: 'Kondisi visual dianalisis', d: 'Driver Vision Monitoring membaca enam parameter — eye closure, drowsiness, head pose, gaze direction, distraction, dan face presence — seluruhnya di dalam perangkat.' },
    { ic: 'gauge', t: 'Risiko dihitung ulang', d: 'Driver Risk dan Road Risk digabung menjadi Dynamic Risk Score yang berubah mengikuti kondisi perjalanan.' },
    { ic: 'mic', t: 'Bantuan disampaikan', d: 'Peringatan, edukasi, dan rekomendasi tindakan diberikan lewat suara — tanpa menuntut pengemudi menatap layar.' }
  ];

  const a11y = [
    { ic: 'ruler', t: 'Target sentuh ≥ 48 px', d: 'Seluruh kontrol memenuhi WCAG 2.2 Target Size. Di dalam kendaraan, tangan tidak pernah sepenuhnya stabil.' },
    { ic: 'volume', t: 'Suara sebagai kanal utama', d: 'Setiap peringatan punya pasangan suara. Layar adalah pelengkap, bukan syarat untuk memahami situasi.' },
    { ic: 'alert', t: 'Warna bukan satu-satunya penanda', d: 'Status selalu disertai label teks dan ikon — aman bagi pengguna dengan buta warna merah-hijau.' },
    { ic: 'eyeoff', t: 'Tema gelap sebagai bawaan', d: 'Layar terang di kabin gelap menyempitkan pupil dan menurunkan penglihatan malam selama beberapa detik setelahnya.' },
    { ic: 'flash', t: 'Satu pesan pada satu waktu', d: 'Peringatan tidak menumpuk. Yang paling mendesak menggantikan yang lama, bukan berbaris menunggu giliran.' },
    { ic: 'clock', t: 'Peringatan berjarak, bukan mendadak', d: 'Diberikan 700 m sebelum titik risiko — cukup untuk menyesuaikan kecepatan tanpa pengereman panik.' }
  ];

  const swatch = [
    { n: 'Teal 500', v: '#17C4B8' },
    { n: 'Teal 600', v: '#0EA5A0' },
    { n: 'Amber 500', v: '#F2A413' },
    { n: 'Ready', v: '#22D48A' },
    { n: 'Caution', v: '#FFB627' },
    { n: 'High Risk', v: '#FF6A52' },
    { n: 'Sangat tinggi', v: '#FF4D5E' },
    { n: 'Paper', v: '#0A1220' }
  ];
</script>

<div class="blobs" aria-hidden="true">
  <span class="blob bl1"></span><span class="blob bl2"></span><span class="blob bl3"></span>
</div>

<!-- ============ HERO ============ -->
<header class="wrap hero-wrap">
  <div class="glass hero">
    <div class="htext">
      <div class="topline">
        <img class="mark" src="{BASE}img/logo-mark.png" alt="Logo DRIVERA" />
        <span class="nm">DRIVERA</span>
        <span class="pill"><span class="dot"></span> Lampiran UI/UX</span>
      </div>

      <h1>Mendeteksi risiko<br />tidak cukup.</h1>
      <p class="lead" style="margin-top:14px">
        Rancangan antarmuka AI Safety Agent yang memahami kondisi pengemudi dan lingkungan
        perjalanan, lalu memberi peringatan, intervensi, dan edukasi lewat suara — agar keputusan
        yang lebih aman diambil sebelum tikungan, bukan sesudah kejadian.
      </p>

      <div class="meta">
        <div><em>Tagline</em><b>{BRAND.tagline}</b></div>
        <div><em>Wilayah studi</em><b>Koridor Balikpapan – IKN Nusantara</b></div>
      </div>

      <div class="cta no-print">
        <a class="btn" href="#prototipe"><Icon name="sparkle" size={17} /> Lihat prototipe</a>
        <button class="btn ghost" onclick={() => window.print()}><Icon name="print" size={17} /> Cetak sebagai lampiran</button>
      </div>
    </div>

    <div class="hshot">
      <img src="{BASE}img/ikn-istana.jpg" alt="Istana Garuda dan Istana Negara di Ibu Kota Nusantara" />
      <div class="badge glass">
        <b>62<small>/100</small></b>
        <em>Dynamic Risk Score<br />saat berkendara (simulasi)</em>
      </div>
    </div>
  </div>

  <div class="glass stats">
    {#each RUJUKAN as r}
      <div class="st">
        <b>{r.angka}</b>
        <em>{r.label}</em>
        <span>{r.catatan}</span>
      </div>
    {/each}
    <p class="disc">
      Angka pada strip ini menjelaskan rancangan, bukan mengutip temuan lapangan. Seluruh angka
      <b>di dalam layar aplikasi</b> adalah data simulasi. Statistik kecelakaan yang dipakai dalam
      naskah harus dikutip dari sumber resmi dan masuk Daftar Pustaka.
    </p>
  </div>
</header>

<!-- ============ MASALAH ============ -->
<section class="wrap sec">
  <div class="eyebrow">Pijakan masalah</div>
  <h2>Peringatan yang datang terlambat sama saja dengan diam</h2>
  <p class="lead" style="margin-top:10px">
    Sebagian besar teknologi keselamatan berkendara berhenti pada satu hal: memberi tahu bahwa
    ada bahaya. Padahal pengemudi yang mengantuk tidak merasa dirinya mengantuk, dan pengemudi
    yang asing dengan sebuah ruas tidak tahu bahwa tikungan di depan sudah memakan korban.
    Yang kurang bukan sensor, melainkan konteks dan cara menyampaikannya.
  </p>

  <div class="prob">
    <figure class="glass pcard">
      <img src="{BASE}img/pengemudi-ngantuk.jpg" alt="Pengemudi menguap dengan mata terpejam di balik kemudi" />
      <figcaption>
        <span class="s-tag" style="color:var(--st-risk);background:var(--st-risk-bg)">KONDISI PENGEMUDI</span>
        <b>Kantuk tidak terasa oleh yang mengalaminya</b>
        <p>Microsleep berlangsung beberapa detik dan tidak meninggalkan kesadaran bahwa ia terjadi. Rasa "masih kuat" bukan ukuran yang bisa dipercaya.</p>
      </figcaption>
    </figure>

    <figure class="glass pcard">
      <img src="{BASE}img/ikn-jalan.jpg" alt="Pengerjaan jalan di kawasan Istana Negara IKN pada malam hari" />
      <figcaption>
        <span class="s-tag" style="color:var(--rk-4);background:var(--rk-4-bg)">KONDISI JALAN</span>
        <b>Riwayat kecelakaan berhenti di arsip</b>
        <p>Koridor menuju IKN tumbuh lebih cepat daripada datanya. Ruas baru, penerangan belum merata, dan riwayat kejadian berhenti di arsip instansi.</p>
      </figcaption>
    </figure>

    <figure class="glass pcard">
      <img src="{BASE}img/kokpit.jpg" alt="Kemudi dan panel instrumen di dalam kabin kendaraan" />
      <figcaption>
        <span class="s-tag" style="color:var(--st-caution);background:var(--st-caution-bg)">CARA MENYAMPAIKAN</span>
        <b>Aplikasi yang menuntut layar menambah risiko</b>
        <p>Informasi keselamatan yang hanya bisa dibaca memaksa pengemudi melepas pandangan dari jalan — persis perilaku yang ingin dicegah.</p>
      </figcaption>
    </figure>
  </div>

  <div class="glass persona">
    <b class="pt">Empat profil pengemudi, satu ambang risiko yang berbeda-beda</b>
    <div class="pl">
      {#each PROFIL as p}
        <div class="pi">
          <span><Icon name={p.ikon} size={18} /></span>
          <div><b>{p.nama}</b><em>{p.butuh}</em></div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ============ ALUR ============ -->
<section class="wrap sec">
  <div class="eyebrow">Alur sistem</div>
  <h2>Dari kamera kabin menjadi satu keputusan yang lebih aman</h2>

  <div class="flow">
    {#each alur as a, i}
      <div class="glass fc">
        <span class="no">{i + 1}</span>
        <span class="fi"><Icon name={a.ic} size={19} /></span>
        <b>{a.t}</b>
        <p>{a.d}</p>
      </div>
      {#if i < alur.length - 1}<span class="ar no-print" aria-hidden="true"><Icon name="chevron" size={18} /></span>{/if}
    {/each}
  </div>

  <div class="glass kelas">
    <b class="pt">Enam parameter visual yang dianalisis Driver Vision Monitoring</b>
    <div class="kl">
      {#each INDIKATOR as k}
        {@const st = STATUS[k.st]}
        <div class="ki">
          <span class="kdot" style="background:{st.warna}" aria-label={st.label}></span>
          <div><b>{k.kode}</b><em>{k.nama} — {k.ukur}</em></div>
        </div>
      {/each}
      <div class="ki wide">
        <span class="kdot" style="background:var(--ink-500)" aria-hidden="true"></span>
        <div><b>Bukan pengenalan identitas</b><em>Tidak ada face recognition, tidak ada pencocokan dengan basis data orang. Yang keluar dari perangkat hanya angka indikator.</em></div>
      </div>
    </div>
  </div>

  <div class="glass lapis">
    {#each LAPIS as l}
      <div class="lp">
        <span class="lk">{l.kode}</span>
        <div><b>{l.nama}</b><em>{l.apa}</em></div>
      </div>
    {/each}
  </div>
</section>

<!-- ============ PENEMPATAN AI ============ -->
<section class="wrap sec">
  <div class="eyebrow">Penempatan asisten</div>
  <h2>Di mana AI benar-benar bekerja</h2>
  <p class="lead" style="margin-top:10px">
    AI di DRIVERA tidak berbentuk satu gelembung obrolan yang menunggu ditanya. Ia bekerja di tiga
    lapis yang berbeda, dan hanya satu di antaranya berupa percakapan.
  </p>

  <div class="aigrid">
    {#each AI_PERAN as a}
      <div class="glass aic">
        <div class="aitop">
          <span class="aiico"><Icon name={a.ikon} size={19} /></span>
          <span class="s-tag" style="color:var(--tl-300);background:rgba(23,196,184,.13)">{a.lapis}</span>
        </div>
        <b>{a.nama}</b>
        <em>{a.di}</em>
        <p>{a.apa}</p>
        <div class="why">
          <span>Kenapa di sini</span>
          {a.kenapa}
        </div>
      </div>
    {/each}
  </div>

  <div class="glass ctx">
    <b class="pt">Context-Aware AI — informasi yang datang tanpa diminta</b>
    <div class="cl">
      {#each KONTEKS as k}
        {@const st = STATUS[k.st]}
        <div class="ck">
          <span class="cki" style="color:{st.warna};background:{st.bg}"><Icon name={k.ikon} size={15} /></span>
          <div>
            <em>Ketika</em>
            <b>{k.pemicu}</b>
            <p><Icon name="chevron" size={11} /> {k.respons}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="glass batas">
    <span class="bic"><Icon name="shield" size={18} /></span>
    <div>
      <b>Batas yang sengaja dipasang</b>
      <p>
        DRIVERA memberi informasi dan rekomendasi, bukan perintah. Ia tidak mengambil alih kendali
        kendaraan, tidak mengunci keberangkatan, dan tidak menilai pengemudi sebagai orang —
        hanya kesiapannya pada saat itu. Analisis visual berjalan di dalam perangkat: yang keluar
        hanya angka indikator, bukan bingkai kamera. Status High Risk pun tetap berupa tawaran
        berhenti, karena keputusan akhir ada pada pengemudi yang memegang kemudi.
      </p>
    </div>
  </div>
</section>

<!-- ============ PROTOTIPE ============ -->
<section class="wrap sec page-break" id="prototipe">
  <div class="eyebrow">Prototipe</div>
  <h2>Antarmuka pengemudi</h2>
  <p class="lead" style="margin:10px 0 26px">
    Sepuluh layar inti, dirancang untuk dipakai di dalam kabin — sering pada malam hari, dengan
    lirikan yang tidak boleh lebih dari dua detik, dan idealnya tanpa disentuh sama sekali.
  </p>
  <div class="no-print"><Prototype /></div>
</section>

<!-- ============ GALERI LAYAR ============ -->
<section class="wrap sec" id="galeri">
  <div class="eyebrow">Galeri layar</div>
  <h2>Semua layar, ukuran penuh</h2>

  <div class="gal">
    <Phone label="1 · Safety Onboarding" caption="Edukasi dasar diselesaikan lebih dulu, lalu profil pengemudi dipilih.">
      <Onboarding />
    </Phone>
    <Phone label="2 · Pre-Drive Safety Check" caption="Lima aspek kesiapan diringkas menjadi satu status berangkat.">
      <PreDrive />
    </Phone>
    <Phone label="3 · Driver Vision Monitoring" caption="Kamera perangkat aktif; enam parameter visual dianalisis menjadi DRIVER STATUS.">
      <Monitor />
    </Phone>
    <Phone label="4 · Driver Alert" caption="Saat drowsiness terdeteksi: peringatan, dasarnya, dan jalan keluarnya.">
      <DriverAlert />
    </Phone>
    <Phone label="5 · Mode berkendara" caption="Smart Road Warning menguasai layar; Dynamic Risk Score di bawahnya.">
      <Kemudi />
    </Phone>
    <Phone label="6 · Traffic Risk Map" caption="Empat kelas risiko ruas beserta jam ketika risikonya memuncak.">
      <PetaRisiko />
    </Phone>
    <Phone label="7 · Detail ruas" caption="Risiko per jam — alasan mengapa peringatan muncul di jam tertentu.">
      <DetailTitik />
    </Phone>
    <Phone label="8 · DRIVERA Agent" caption="Kanal suara sebagai jalur utama; papan ketik hanya alternatif.">
      <Agent />
    </Phone>
    <Phone label="9 · Edukasi kontekstual" caption="Satu-satunya layar terang — dibaca lama, hanya saat kendaraan berhenti.">
      <Edukasi />
    </Phone>
    <Phone label="10 · Ringkasan perjalanan" caption="Linimasa keputusan: kapan risiko naik dan apa yang dilakukan.">
      <Ringkasan />
    </Phone>
  </div>
</section>

<!-- ============ SUARA & INTERVENSI ============ -->
<section class="wrap sec">
  <div class="eyebrow">Voice-based interaction</div>
  <h2>Antarmuka terbaik saat berkendara adalah yang tidak dilihat</h2>

  <div class="vgrid">
    <div class="glass vcard">
      <img class="vshot" src="{BASE}img/hero-malam.jpg" alt="Kendaraan melaju di jalan pada malam hari" />
      <b class="pt">Alur interaksi suara</b>
      <div class="vf">
        <span>Pengguna berbicara</span>
        <i aria-hidden="true"><Icon name="chevron" size={14} /></i>
        <span>AI memahami perintah</span>
        <i aria-hidden="true"><Icon name="chevron" size={14} /></i>
        <span>Sistem memproses</span>
        <i aria-hidden="true"><Icon name="chevron" size={14} /></i>
        <span>Respons diberikan</span>
      </div>
      <b class="pt" style="margin-top:18px">Contoh perintah yang dikenali</b>
      <ul class="vp">
        {#each PERINTAH_SUARA as p}<li><Icon name="mic" size={12} /> {p}</li>{/each}
      </ul>
      <p class="vn">
        Respons dapat berupa suara, teks, peringatan visual, atau rekomendasi tindakan — dipilih
        mengikuti seberapa mendesak situasinya, bukan seragam.
      </p>
    </div>

    <div class="glass vcard">
      <b class="pt">Safety Intervention — tindakan yang direkomendasikan</b>
      <div class="ivl">
        {#each INTERVENSI as i}
          <div class="ivi">
            <span><Icon name={i.ikon} size={16} /></span>
            <div><b>{i.nama}</b><em>{i.kapan}</em></div>
          </div>
        {/each}
      </div>
      <b class="pt" style="margin-top:18px">Empat kelas risiko ruas</b>
      <div class="rkl">
        {#each [1, 2, 3, 4] as k}
          <span class="s-tag" style="color:{RISIKO[k].warna};background:{RISIKO[k].bg}">{RISIKO[k].label}</span>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- ============ DASHBOARD ============ -->
<section class="wrap sec page-break">
  <div class="eyebrow">Sisi institusi</div>
  <h2>Konsol Dishub & Korlantas</h2>
  <p class="lead" style="margin:10px 0 22px">
    Peringatan yang diterima pengemudi meninggalkan jejak agregat: ruas mana yang paling sering
    memicu peringatan, pada jam berapa, dan dengan sebab dominan apa. Dari sana daftar prioritas
    penanganan blackspot disusun dengan rumus yang terbuka.
  </p>
  <img class="dshot" src="{BASE}img/ikn-kota.png" alt="Pandangan udara kawasan inti IKN Nusantara beserta jaringan jalannya" />
  <Dashboard />
</section>

<!-- ============ KEPUTUSAN DESAIN ============ -->
<section class="wrap sec">
  <div class="eyebrow">Keputusan desain</div>
  <h2>Antarmuka keselamatan tidak boleh menciptakan risikonya sendiri</h2>

  <div class="a11y">
    {#each a11y as a}
      <div class="glass ac">
        <span><Icon name={a.ic} size={18} /></span>
        <div><b>{a.t}</b><p>{a.d}</p></div>
      </div>
    {/each}
  </div>
</section>

<!-- ============ SISTEM DESAIN ============ -->
<section class="wrap sec">
  <div class="eyebrow">Sistem desain</div>
  <h2>Token visual</h2>

  <div class="ds">
    <div class="glass dcard logo-card">
      <b class="pt">Identitas visual</b>
      <div class="logo-plate">
        <img src="{BASE}img/logo-full.png" alt="Logo DRIVERA lengkap dengan wordmark dan tagline Smart Mobility Solutions" />
      </div>
      <p class="dn" style="margin-top:14px">
        Lambang perisai menggabungkan tiga hal yang dikerjakan DRIVERA sekaligus: huruf D, lensa
        kamera di tengahnya, dan ruas jalan yang membentang di belakangnya — perlindungan,
        penglihatan, dan perjalanan dalam satu tanda.
      </p>
      <div class="logo-rule">
        <span>Ruang kosong minimum setara tinggi lensa · jangan diputar, dimiringkan, atau
        diganti warnanya · di atas foto selalu pakai versi transparan di area gelap.</span>
      </div>
    </div>

    <div class="glass dcard">
      <b class="pt">Palet</b>
      <div class="sw">
        {#each swatch as s}
          <div><span style="background:{s.v}"></span><em>{s.n}</em><i>{s.v}</i></div>
        {/each}
      </div>
      <p class="dn">
        Teal untuk status aman dan tindakan, amber untuk peringatan bertingkat, merah hanya untuk
        risiko tertinggi — supaya merah tidak kehilangan arti karena terlalu sering dipakai.
      </p>
    </div>

    <div class="glass dcard">
      <b class="pt">Tipografi</b>
      <div class="ty">
        <p style="font-size:26px;font-weight:800;letter-spacing:-.02em">Plus Jakarta Sans</p>
        <p style="font-size:15px;font-weight:700">Judul layar · 16,5 / 800</p>
        <p style="font-size:13.5px">Teks isi · 13,5 / 400</p>
        <p style="font-size:11.5px;color:var(--ink-400)">Metadata · 11,5 / 600</p>
      </div>
      <b class="pt" style="margin-top:16px">Radius & bayangan</b>
      <div class="rd">
        <span style="border-radius:10px">10</span>
        <span style="border-radius:16px">16</span>
        <span style="border-radius:22px">22</span>
        <span style="border-radius:30px">30</span>
      </div>
    </div>

    <div class="glass dcard">
      <b class="pt">Tumpukan teknologi</b>
      <div class="tk">
        {#each TECH as t}
          <div><b>{t.n}</b><em>{t.d}</em></div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- ============ FOOTER ============ -->
<footer class="wrap sec">
  <div class="glass foot">
    <div>
      <div class="eyebrow">Judul</div>
      <p class="jd">{BRAND.judul}</p>
      <p class="jsub">{BRAND.subjudul}</p>
      <div class="nov">
        <span>Kalimat novelty</span>
        <p>{BRAND.novelty}</p>
      </div>
    </div>

    <div class="kredit">
      <b class="pt">Kredit gambar</b>
      <p class="s-meta" style="font-size:11.5px;margin-bottom:8px">
        Seluruh foto berlisensi bebas dari Wikimedia Commons dan dipakai sebagai ilustrasi konteks,
        bukan dokumentasi lokasi yang disebut dalam mockup.
      </p>
      <ul>
        {#each KREDIT as k}
          <li><b>{k.judul}</b> — {k.pembuat}, {k.lisensi}</li>
        {/each}
      </ul>
    </div>
  </div>
</footer>

<style>
  /* ---- Hero ---- */
  .hero-wrap { padding-top: 40px; }
  .hero { display: grid; grid-template-columns: 1.1fr .9fr; gap: 0; overflow: hidden; }
  .htext { padding: 40px 36px; }
  .topline { display: flex; align-items: center; gap: 11px; margin-bottom: 22px; }
  .mark { width: 40px; height: 40px; object-fit: contain; flex: none; }
  .nm { font-weight: 800; font-size: 17px; letter-spacing: .12em; color: var(--ink-50); }
  h1 { font-size: clamp(34px, 4.6vw, 52px); line-height: 1.06; letter-spacing: -.035em; }

  .meta { display: flex; gap: 26px; flex-wrap: wrap; margin: 24px 0 26px; }
  .meta em { font-style: normal; display: block; font-size: 10.5px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-400); font-weight: 800; }
  .meta b { font-size: 13.5px; color: var(--ink-50); }

  .cta { display: flex; gap: 10px; flex-wrap: wrap; }
  .btn {
    display: inline-flex; align-items: center; gap: 9px; min-height: 48px; padding: 0 22px;
    border: 0; border-radius: 14px; background: var(--grad-brand); color: #04221F;
    font-weight: 800; font-size: 14.5px; text-decoration: none;
    box-shadow: 0 10px 26px rgba(23,196,184,.28);
  }
  .btn.ghost { background: rgba(255,255,255,.07); color: var(--ink-50); border: 1px solid var(--glass-brd); box-shadow: none; }

  .hshot { position: relative; min-height: 380px; }
  .hshot img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
  .badge {
    position: absolute; left: 22px; bottom: 22px; padding: 14px 18px; border-radius: 18px;
    display: flex; align-items: center; gap: 12px;
    width: 232px; background: rgba(10,18,32,.9); border-color: rgba(255,255,255,.18);
  }
  .badge b { font-size: 30px; flex: none; color: var(--st-caution); letter-spacing: -.03em; line-height: 1; }
  .badge small { font-size: 14px; color: var(--ink-400); font-weight: 700; }
  .badge em { font-style: normal; font-size: 11px; color: var(--ink-300); line-height: 1.4; }

  /* ---- Stat strip ---- */
  .stats {
    margin-top: 14px; padding: 22px 26px;
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px;
  }
  .st b { display: block; font-size: 27px; color: var(--tl-400); letter-spacing: -.03em; line-height: 1.1; }
  .st em { font-style: normal; display: block; font-size: 13px; font-weight: 700; color: var(--ink-50); margin: 3px 0 2px; }
  .st span { font-size: 11.5px; color: var(--ink-400); line-height: 1.45; display: block; }
  .disc {
    grid-column: 1 / -1; font-size: 11.5px; color: var(--ink-400); line-height: 1.55;
    padding-top: 14px; border-top: 1px solid var(--glass-brd-soft);
  }

  /* ---- Masalah ---- */
  .prob { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 26px; }
  .pcard { margin: 0; overflow: hidden; }
  .pcard img { width: 100%; height: 168px; object-fit: cover; }
  .pcard figcaption { padding: 16px 18px 18px; }
  .pcard b { display: block; font-size: 15.5px; color: var(--ink-50); margin: 9px 0 5px; line-height: 1.3; }
  .pcard p { font-size: 12.5px; color: var(--ink-300); line-height: 1.6; }

  .pt { display: block; font-size: 13px; color: var(--ink-50); font-weight: 800; margin-bottom: 12px; }
  .persona { margin-top: 16px; padding: 20px 24px; }
  .pl { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
  .pi { display: flex; gap: 10px; align-items: flex-start; }
  .pi span {
    width: 36px; height: 36px; flex: none; border-radius: 12px; display: grid; place-items: center;
    background: var(--grad-brand); color: #04221F;
  }
  .pi b { display: block; font-size: 13px; color: var(--ink-50); }
  .pi em { font-style: normal; font-size: 11.5px; color: var(--ink-400); line-height: 1.45; }

  /* ---- Alur ---- */
  .flow { display: flex; align-items: stretch; gap: 8px; margin-top: 24px; }
  .fc { flex: 1; padding: 20px; position: relative; }
  .no {
    position: absolute; top: 14px; right: 16px; font-size: 30px; font-weight: 800;
    color: rgba(23,196,184,.18); letter-spacing: -.04em;
  }
  .fi {
    width: 38px; height: 38px; border-radius: 12px; display: grid; place-items: center;
    background: var(--grad-brand); color: #04221F; margin-bottom: 12px;
  }
  .fc b { display: block; font-size: 14.5px; color: var(--ink-50); margin-bottom: 5px; }
  .fc p { font-size: 12px; color: var(--ink-300); line-height: 1.55; }
  .ar { display: grid; place-items: center; color: var(--tl-500); opacity: .55; flex: none; }

  .kelas { margin-top: 16px; padding: 20px 24px; }
  .kl { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .ki { display: flex; gap: 9px; align-items: flex-start; }
  .kdot { width: 8px; height: 8px; border-radius: 50%; flex: none; margin-top: 5px; }
  .ki.wide { grid-column: 1 / -1; }
  .ki b { display: block; font-size: 12.5px; color: var(--ink-50); line-height: 1.3; }
  .ki em { font-style: normal; font-size: 11px; color: var(--ink-400); line-height: 1.4; }

  .lapis { margin-top: 12px; padding: 16px 24px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
  .lp { display: flex; gap: 10px; align-items: center; }
  .lk {
    width: 40px; height: 34px; flex: none; border-radius: 10px; display: grid; place-items: center;
    background: rgba(23,196,184,.12); border: 1px solid rgba(23,196,184,.3);
    color: var(--tl-300); font-size: 12px; font-weight: 800; letter-spacing: .04em;
  }
  .lp b { display: block; font-size: 12.5px; color: var(--ink-50); }
  .lp em { font-style: normal; font-size: 10.5px; color: var(--ink-400); line-height: 1.4; }

  /* ---- Galeri ---- */
  .gal { display: flex; flex-wrap: wrap; gap: 34px 26px; margin-top: 26px; justify-content: center; }

  /* ---- Penempatan AI ---- */
  .aigrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 24px; }
  .aic { padding: 20px 22px; }
  .aitop { display: flex; align-items: center; justify-content: space-between; margin-bottom: 13px; }
  .aiico {
    width: 38px; height: 38px; border-radius: 12px; display: grid; place-items: center;
    background: var(--grad-brand); color: #04221F;
  }
  .aic > b { display: block; font-size: 16px; color: var(--ink-50); }
  .aic > em {
    font-style: normal; display: block; font-size: 11px; font-weight: 700;
    color: var(--tl-400); margin-bottom: 8px;
  }
  .aic > p { font-size: 12.5px; color: var(--ink-300); line-height: 1.6; }
  .why {
    margin-top: 12px; padding-top: 11px; border-top: 1px solid var(--glass-brd-soft);
    font-size: 11.5px; color: var(--ink-400); line-height: 1.55;
  }
  .why span {
    display: block; font-size: 9.5px; font-weight: 800; letter-spacing: .12em;
    text-transform: uppercase; color: var(--ink-500); margin-bottom: 4px;
  }

  .ctx { margin-top: 14px; padding: 20px 24px; }
  .cl { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .ck { display: flex; gap: 10px; align-items: flex-start; }
  .cki { width: 32px; height: 32px; flex: none; border-radius: 11px; display: grid; place-items: center; }
  .ck em { font-style: normal; font-size: 9.5px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: var(--ink-500); }
  .ck b { display: block; font-size: 12.5px; color: var(--ink-50); line-height: 1.3; margin: 2px 0 4px; }
  .ck p { display: flex; gap: 4px; align-items: flex-start; font-size: 11px; color: var(--tl-400); line-height: 1.45; font-weight: 600; }

  .batas { margin-top: 14px; padding: 20px 24px; display: flex; gap: 14px; align-items: flex-start; }
  .bic {
    width: 40px; height: 40px; flex: none; border-radius: 13px; display: grid; place-items: center;
    background: var(--st-ready-bg); color: var(--st-ready);
  }
  .batas b { display: block; font-size: 15px; color: var(--ink-50); margin-bottom: 5px; }
  .batas p { font-size: 12.5px; color: var(--ink-300); line-height: 1.65; max-width: 92ch; }

  /* ---- Suara & intervensi ---- */
  .vgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 24px; align-items: start; }
  .vcard { padding: 22px 24px; }
  .vshot {
    width: calc(100% + 48px); margin: -22px -24px 18px; height: 130px;
    object-fit: cover; object-position: center 62%;
    border-radius: var(--r-lg) var(--r-lg) 0 0;
  }
  .dshot {
    width: 100%; height: 168px; object-fit: cover; object-position: center 58%;
    border-radius: var(--r-lg); margin-bottom: 14px;
  }
  .vf { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }
  .vf span {
    padding: 7px 13px; border-radius: 999px; font-size: 12px; font-weight: 700;
    background: rgba(23,196,184,.1); border: 1px solid rgba(23,196,184,.26); color: var(--tl-300);
  }
  .vf i { color: var(--ink-500); display: grid; place-items: center; }
  .vp { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 6px; }
  .vp li {
    display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 11px;
    background: rgba(255,255,255,.04); border: 1px solid var(--glass-brd-soft);
    font-size: 12.5px; color: var(--ink-300);
  }
  .vp li :global(svg) { color: var(--tl-400); flex: none; }
  .vn { font-size: 11.5px; color: var(--ink-400); line-height: 1.55; margin-top: 12px; }

  .ivl { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .ivi { display: flex; gap: 9px; align-items: flex-start; }
  .ivi span {
    width: 32px; height: 32px; flex: none; border-radius: 11px; display: grid; place-items: center;
    background: var(--st-caution-bg); color: var(--st-caution);
  }
  .ivi b { display: block; font-size: 12.5px; color: var(--ink-50); line-height: 1.3; }
  .ivi em { font-style: normal; font-size: 10.5px; color: var(--ink-400); line-height: 1.4; }
  .rkl { display: flex; flex-wrap: wrap; gap: 7px; }

  /* ---- Keputusan desain ---- */
  .a11y { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 24px; }
  .ac { padding: 18px 20px; display: flex; gap: 12px; align-items: flex-start; }
  .ac span {
    width: 36px; height: 36px; flex: none; border-radius: 12px; display: grid; place-items: center;
    background: rgba(23,196,184,.12); color: var(--tl-300);
  }
  .ac b { display: block; font-size: 13.5px; color: var(--ink-50); margin-bottom: 3px; }
  .ac p { font-size: 12px; color: var(--ink-300); line-height: 1.55; }

  /* ---- Sistem desain ---- */
  .ds { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 24px; }
  .dcard { padding: 20px 22px; }
  .logo-plate {
    display: grid; place-items: center; padding: 18px; border-radius: 16px;
    background: radial-gradient(120% 120% at 50% 0%, rgba(23,196,184,.12) 0%, rgba(255,255,255,.03) 60%);
    border: 1px solid var(--glass-brd-soft);
  }
  .logo-plate img { width: 100%; max-width: 250px; height: auto; }
  .logo-rule {
    margin-top: 12px; padding-top: 11px; border-top: 1px solid var(--glass-brd-soft);
    font-size: 11px; color: var(--ink-400); line-height: 1.55;
  }
  .sw { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  .sw div { text-align: center; }
  .sw span { display: block; height: 42px; border-radius: 11px; box-shadow: inset 0 0 0 1px rgba(255,255,255,.14); }
  .sw em { font-style: normal; display: block; font-size: 10px; font-weight: 700; color: var(--ink-300); margin-top: 5px; }
  .sw i { font-style: normal; font-size: 9px; color: var(--ink-500); }
  .dn { font-size: 11px; color: var(--ink-400); line-height: 1.55; margin-top: 12px; }

  .ty p { margin-bottom: 6px; color: var(--ink-50); }
  .rd { display: flex; gap: 8px; }
  .rd span {
    width: 46px; height: 46px; display: grid; place-items: center; font-size: 11px; font-weight: 700;
    background: rgba(255,255,255,.05); border: 1px solid var(--glass-brd-soft); color: var(--ink-400);
  }

  .tk { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .tk div { padding: 9px 11px; border-radius: 11px; background: rgba(255,255,255,.04); border: 1px solid var(--glass-brd-soft); }
  .tk b { display: block; font-size: 12.5px; color: var(--ink-50); }
  .tk em { font-style: normal; font-size: 10.5px; color: var(--ink-400); }

  /* ---- Footer ---- */
  .foot { padding: 26px 30px; display: grid; grid-template-columns: 1.25fr 1fr; gap: 32px; }
  .jd { font-size: 15px; font-weight: 700; color: var(--ink-50); line-height: 1.55; }
  .jsub { font-size: 12.5px; color: var(--ink-300); line-height: 1.6; margin-top: 6px; }
  .nov {
    margin-top: 14px; padding: 13px 15px; border-radius: 13px;
    background: rgba(23,196,184,.08); border: 1px solid rgba(23,196,184,.24);
  }
  .nov span {
    display: block; font-size: 9.5px; font-weight: 800; letter-spacing: .12em;
    text-transform: uppercase; color: var(--tl-400); margin-bottom: 5px;
  }
  .nov p { font-size: 12px; color: var(--ink-300); line-height: 1.6; }
  .kredit ul { margin: 0; padding-left: 16px; }
  .kredit li { font-size: 11.5px; color: var(--ink-400); line-height: 1.6; }
  .kredit li b { color: var(--ink-300); font-weight: 700; }

  /* ---- Responsif ---- */
  @media (max-width: 980px) {
    .hero { grid-template-columns: 1fr; }
    .hshot { min-height: 260px; order: -1; }
    .htext { padding: 28px 24px; }
    .stats, .prob, .a11y, .ds, .aigrid, .vgrid { grid-template-columns: repeat(2, 1fr); }
    .pl, .kl, .cl, .lapis { grid-template-columns: repeat(2, 1fr); }
    .flow { flex-direction: column; }
    .ar { transform: rotate(90deg); }
    .foot { grid-template-columns: 1fr; }
  }
  @media (max-width: 620px) {
    .stats, .prob, .a11y, .ds, .pl, .kl, .tk, .aigrid, .cl, .lapis, .vgrid, .ivl { grid-template-columns: 1fr; }
  }

  /* Lebar A4 (~794px) memicu aturan responsif ponsel dan membuat lampiran
     membengkak menjadi belasan halaman. Untuk cetak, tata letak kolom dipulihkan. */
  @media print {
    .hero-wrap { padding-top: 0; }
    .hero { grid-template-columns: 1.15fr .85fr; }
    .hshot { min-height: 0; order: 0; }
    .htext { padding: 22px 24px; }
    h1 { font-size: 30px; }
    .badge { background: #fff; border-color: #C7D4E0; }
    .badge b { color: #9A6B03; }
    .stats { grid-template-columns: repeat(4, 1fr); gap: 14px; }
    .prob, .a11y, .aigrid { grid-template-columns: repeat(3, 1fr); }
    .ds { grid-template-columns: repeat(4, 1fr); }
    .vgrid { grid-template-columns: repeat(2, 1fr); }
    .pl, .lapis, .cl { grid-template-columns: repeat(4, 1fr); }
    .kl { grid-template-columns: repeat(3, 1fr); }
    .tk, .ivl { grid-template-columns: repeat(2, 1fr); }
    .flow { flex-direction: row; }
    .ar { display: none; }
    .foot { grid-template-columns: 1.25fr 1fr; }
    .pcard img { height: 120px; }
    .vshot { height: 92px; }
    .dshot { height: 110px; }
    .gal { gap: 20px 14px; }
    figure, .fc, .pcard, .ac, .dcard, .vcard { break-inside: avoid; }
  }
</style>
