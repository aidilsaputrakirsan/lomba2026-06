# DRIVERA — Lampiran UI/UX

Prototipe antarmuka untuk karya tulis **DRIVERA: AI-Powered Driver Readiness &
Road Safety Platform**.

> **Drive Smarter. Arrive Safer.**
> *Berkendara Cerdas, Selamat Sampai Tujuan.*
>
> Platform keselamatan berkendara yang memadukan Computer Vision, GIS-based
> Traffic Risk Mapping, Data Analytics, dan Voice-Based AI Agent.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173/lomba2026-06/
```

Karena situs tayang di GitHub Project Pages, `base` disetel ke `/lomba2026-06/`
(lihat `vite.config.js`) sehingga URL dev pun ikut berprefiks. Untuk menjalankan
di root, timpa lewat env: `VITE_BASE=/ npm run dev`.

Seluruh rujukan gambar memakai `BASE` dari `src/lib/data.js`, bukan path absolut
`/img/...`, agar tetap benar di kedua kondisi.

Dideploy otomatis oleh `.github/workflows/deploy-pages.yml` setiap kali ada push
ke `main` yang menyentuh folder `drivera-uiux/`.

## Mengekspor lampiran (PDF A4)

Dua cara:

1. Buka aplikasi, klik tombol **"Cetak sebagai lampiran"** → *Save as PDF*
   (ukuran A4, margin 14 mm sudah diatur lewat `@page`).
2. Otomatis: `npm run export:pdf` → menghasilkan
   `export/DRIVERA-Lampiran-UIUX.pdf`.

Tata letak cetak berbeda dari tampilan layar. Tema layar adalah **cockpit
malam** (dasar gelap), tetapi seluruh token warna dibalik menjadi terang di
dalam blok `@media print` pada `src/app.css` — supaya lampiran hemat tinta dan
tetap terbaca di atas kertas. Yang tetap gelap hanyalah isi layar ponsel, karena
itulah tampilan sebenarnya di dalam kabin.

## Mengapa temanya gelap

Bukan pilihan gaya. Risiko yang ditangani DRIVERA — kelelahan, microsleep,
jarak pandang — memuncak pada kondisi gelap, dan layar terang di dalam kabin
gelap menyempitkan pupil sehingga penglihatan malam pengemudi turun selama
beberapa detik setelah melirik. Satu-satunya layar bertema terang adalah
**Edukasi Kontekstual**, karena layar itu dibaca lama dan hanya dibuka ketika
kendaraan berhenti.

## Di mana AI ditempatkan

Asisten sengaja **tidak** hadir sebagai gelembung obrolan di setiap layar. Ia
bekerja di tiga lapis, dan hanya satu di antaranya berupa percakapan:

| Lapis | Letak | Nama | Peran |
| --- | --- | --- | --- |
| Driver Monitoring | Kamera kabin | **Readiness Watch** | Membaca indikator visual kesiapan → status Ready / Caution / High Risk |
| Context Awareness | Latar perjalanan | **Road Context** | Mencocokkan posisi dengan peta risiko: blackspot, zona sekolah, jam rawan |
| Interaction | Kanal suara | **DRIVERA Agent** | Menjawab, mengedukasi, dan menjalankan perintah lewat suara |

Batas yang dipasang: DRIVERA tidak mengambil alih kendali kendaraan, tidak
mengunci keberangkatan, dan tidak mengenali identitas pengemudi. Analisis visual
berjalan di perangkat — yang keluar hanya angka indikator, bukan bingkai kamera.

## Isi halaman lampiran

| Bagian | Keterangan |
| --- | --- |
| Hero + angka rujukan | Judul, tagline, dan empat angka pijakan rancangan |
| Pijakan masalah | Tiga kondisi lapangan + empat profil pengemudi |
| Alur sistem | Lima tahap + lima indikator Driver Monitoring + empat lapis teknologi |
| Penempatan asisten | Tiga peran AI, pemicu Context-Aware AI, dan batas kewenangan |
| Prototipe interaktif | Hanya di layar — tombol di dalam mockup berfungsi |
| Galeri layar | Sembilan layar ponsel ukuran penuh + keterangan |
| Voice & intervensi | Alur interaksi suara, contoh perintah, enam Safety Intervention |
| Konsol Dishub & Korlantas | Dashboard agregat, asisten analis, antrean blackspot |
| Keputusan desain | Enam alasan di balik antarmuka untuk dipakai sambil berkendara |
| Sistem desain | Palet, tipografi, radius, tumpukan teknologi |
| Kredit gambar | Atribusi lisensi foto |

## Struktur

```
src/
  app.css                 token desain + komponen layar (.s-*) + aturan cetak
  App.svelte              halaman lampiran
  lib/
    data.js               seluruh data simulasi & teks terpusat
    Icon.svelte           ikon garis 24×24
    Phone.svelte          bingkai perangkat 390×844, diperkecil via transform
    TabBar.svelte         navigasi bawah (target sentuh 48 px, FAB = mikrofon)
    MapCanvas.svelte      kanvas peta SVG (mode heat / drive)
    Dashboard.svelte      konsol Dishub & Korlantas + asisten analis
    Prototype.svelte      pemutar prototipe interaktif
    screens/              sembilan layar aplikasi
public/img/               foto Wikimedia Commons (sudah dikecilkan ke ±1400 px)
```

### Sembilan layar

1. **Onboarding** — Safety Onboarding + pemilihan profil pengemudi
2. **PreDrive** — Pre-Drive Safety Check, lima aspek → satu status berangkat
3. **Monitor** — AI Driver Monitoring, landmark wajah diabstraksi
4. **Kemudi** — Smart Road Warning + Dynamic Risk Score
5. **PetaRisiko** — Traffic Risk Map, empat kelas risiko ruas
6. **DetailTitik** — karakteristik ruas + risiko menurut jam
7. **Agent** — DRIVERA AI Agent berbasis suara
8. **Edukasi** — Personalized Safety Education (satu-satunya layar terang)
9. **Ringkasan** — linimasa keputusan sepanjang perjalanan

## Catatan penting untuk naskah

- **Seluruh angka di dalam layar aplikasi adalah data simulasi.** Jangan dikutip
  sebagai temuan. Ini termasuk jumlah kecelakaan per ruas, PERCLOS, jumlah
  pengguna, dan nilai anggaran pada konsol institusi.
- Angka pada strip hero menjelaskan **rancangan**, bukan mengutip temuan
  lapangan. Statistik kecelakaan yang dipakai dalam naskah harus dikutip dari
  sumber resmi (Korlantas Polri / BPS / WHO) dan masuk Daftar Pustaka.
- Percakapan pada layar DRIVERA Agent adalah **skrip rancangan**, bukan keluaran
  model sungguhan. Sebutkan ini bila juri bertanya saat pitching.
- Wajah pada layar Driver Monitoring digambar sebagai abstraksi landmark, bukan
  foto orang — konsisten dengan janji privasi fitur tersebut.
- Foto berasal dari Wikimedia Commons (CC0 / CC BY / CC BY-SA) dan dipakai
  sebagai ilustrasi konteks, **bukan** dokumentasi lokasi yang disebut dalam
  mockup. Halaman kredit sudah disertakan di akhir lampiran.
- Bingkai perangkat mengikuti ukuran logis 390×844 px (iPhone 14) lalu
  diperkecil, sehingga proporsi teks dan target sentuh tetap realistis.
