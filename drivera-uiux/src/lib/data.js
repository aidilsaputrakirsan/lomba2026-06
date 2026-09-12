// ============================================================
// DRIVERA — Data simulasi untuk prototipe UI/UX.
// CATATAN: seluruh angka di dalam layar aplikasi bersifat DUMMY
// (ilustrasi rancangan), bukan hasil pengukuran lapangan.
// ============================================================

// Prefiks aset. Bernilai '/' saat dev, '/lomba2026-06/' saat build Pages.
export const BASE = import.meta.env.BASE_URL;

export const BRAND = {
  nama: 'DRIVERA',
  inisial: 'D',
  kepanjangan: 'AI-Powered Driver Readiness & Road Safety Platform',
  tagline: 'Drive Smarter. Arrive Safer.',
  taglineId: 'Berkendara Cerdas, Selamat Sampai Tujuan.',
  judul: 'DRIVERA: AI-Powered Driver Readiness & Road Safety Platform',
  subjudul:
    'Platform keselamatan berkendara yang memadukan Computer Vision, GIS-based Traffic Risk Mapping, Data Analytics, dan Voice-Based AI Agent untuk menilai risiko secara real-time serta memberikan peringatan, intervensi, dan edukasi yang adaptif',
  novelty:
    'DRIVERA menawarkan integrasi Computer Vision, GIS-based Traffic Risk Mapping, Data Analytics, dan Voice-Based AI Agent dalam satu platform keselamatan berkendara yang mampu melakukan penilaian risiko secara real-time serta memberikan peringatan, intervensi, edukasi, dan informasi keselamatan yang adaptif berdasarkan kondisi pengemudi dan lingkungan perjalanan.'
};

// ------------------------------------------------------------
// Tiga lapis teknologi DRIVERA — dipakai di bagian "Alur sistem"
// ------------------------------------------------------------
export const LAPIS = [
  { kode: 'CV', nama: 'Computer Vision', apa: 'Membaca kondisi pengemudi dari kamera kabin' },
  { kode: 'GIS', nama: 'Traffic Risk Mapping', apa: 'Memetakan tingkat risiko ruas jalan' },
  { kode: 'DA', nama: 'Data Analytics', apa: 'Menggabungkan keduanya menjadi satu skor' },
  { kode: 'AI', nama: 'Voice AI Agent', apa: 'Menyampaikan tanpa menuntut layar' }
];

// ------------------------------------------------------------
// Penempatan AI — bagian "Di mana AI benar-benar bekerja"
// ------------------------------------------------------------
export const AI_PERAN = [
  {
    ikon: 'eye',
    lapis: 'Driver Monitoring',
    di: 'Kamera kabin',
    nama: 'Readiness Watch',
    apa: 'Membaca indikator visual kesiapan — durasi mata tertutup, pola kedipan, indikasi menguap, dan orientasi kepala — lalu mengubahnya menjadi status Ready / Caution / High Risk.',
    kenapa: 'Pengemudi adalah pihak yang paling terlambat menyadari dirinya mengantuk. Microsleep tidak terasa oleh yang mengalaminya.'
  },
  {
    ikon: 'pin',
    lapis: 'Context Awareness',
    di: 'Latar perjalanan',
    nama: 'Road Context',
    apa: 'Mencocokkan posisi pengguna dengan peta risiko: titik rawan kecelakaan, kawasan sekolah, tikungan tajam, dan jam ketika risiko ruas memuncak.',
    kenapa: 'Peringatan baru berguna bila datang sebelum tikungan, bukan sesudahnya. Itu soal konteks lokasi, bukan soal kamera.'
  },
  {
    ikon: 'mic',
    lapis: 'Interaction',
    di: 'Kanal suara',
    nama: 'DRIVERA Agent',
    apa: 'Menjawab pertanyaan, memberi edukasi kontekstual, dan menjalankan perintah aplikasi sepenuhnya lewat suara.',
    kenapa: 'Aplikasi keselamatan yang menuntut pengemudi menatap layar sedang menciptakan risiko yang ingin dicegahnya sendiri.'
  }
];

// Status kesiapan pengemudi
export const STATUS = {
  ready: { label: 'Ready', warna: 'var(--st-ready)', bg: 'var(--st-ready-bg)', arti: 'Kondisi pengemudi terpantau baik' },
  caution: { label: 'Caution', warna: 'var(--st-caution)', bg: 'var(--st-caution-bg)', arti: 'Ada indikator yang perlu diperhatikan' },
  risk: { label: 'High Risk', warna: 'var(--st-risk)', bg: 'var(--st-risk-bg)', arti: 'Ada indikasi yang meningkatkan risiko berkendara' }
};

// Tingkat risiko ruas jalan pada peta
export const RISIKO = {
  1: { label: 'Rendah', warna: 'var(--rk-1)', bg: 'var(--rk-1-bg)' },
  2: { label: 'Sedang', warna: 'var(--rk-2)', bg: 'var(--rk-2-bg)' },
  3: { label: 'Tinggi', warna: 'var(--rk-3)', bg: 'var(--rk-3-bg)' },
  4: { label: 'Sangat Tinggi', warna: 'var(--rk-4)', bg: 'var(--rk-4-bg)' }
};

// ------------------------------------------------------------
// 1 — Safety Onboarding: modul edukasi dasar sebelum berkendara
// ------------------------------------------------------------
export const MODUL = [
  { ikon: 'heart', nama: 'Kesiapan fisik & mental', durasi: '2 mnt', selesai: true },
  { ikon: 'eye', nama: 'Menjaga fokus di perjalanan', durasi: '3 mnt', selesai: true },
  { ikon: 'shield', nama: 'Perlengkapan keselamatan', durasi: '2 mnt', selesai: true },
  { ikon: 'sign', nama: 'Rambu & marka jalan', durasi: '4 mnt', selesai: false },
  { ikon: 'book', nama: 'Aturan dasar lalu lintas', durasi: '3 mnt', selesai: false },
  { ikon: 'alert', nama: 'Tindakan saat kondisi darurat', durasi: '3 mnt', selesai: false }
];

// Profil pengemudi — menentukan bobot peringatan dan gaya edukasi
export const PROFIL = [
  { ikon: 'car', nama: 'Pengemudi harian', butuh: 'Perjalanan rutin rumah–kantor, rawan jenuh' },
  { ikon: 'truck', nama: 'Pengemudi jarak jauh', butuh: 'Durasi panjang, risiko microsleep tertinggi' },
  { ikon: 'bike', nama: 'Pengendara roda dua', butuh: 'Paparan cuaca dan risiko benturan terbesar' },
  { ikon: 'user', nama: 'Pengemudi pemula', butuh: 'Butuh edukasi rambu dan aturan lebih sering' }
];

// ------------------------------------------------------------
// 2 — Pre-Drive Safety Check
// ------------------------------------------------------------
export const PRECHECK = [
  { ikon: 'eye', nama: 'Kesiapan pengemudi', nilai: 'Baik', skor: 86, st: 'ready', ket: 'Wajah terdeteksi jelas, tidak ada indikasi kantuk' },
  { ikon: 'target', nama: 'Tingkat fokus', nilai: 'Cukup', skor: 68, st: 'caution', ket: 'Pola kedipan sedikit di atas garis dasar Anda' },
  { ikon: 'moon', nama: 'Indikasi kelelahan', nilai: 'Waspada', skor: 54, st: 'caution', ket: 'Perjalanan dimulai 21.40 — di luar jam biasa Anda' },
  { ikon: 'route', nama: 'Tingkat risiko rute', nilai: 'Tinggi', skor: 41, st: 'risk', ket: '3 titik rawan pada 18 km pertama' },
  { ikon: 'rain', nama: 'Kondisi lingkungan', nilai: 'Hujan ringan', skor: 62, st: 'caution', ket: 'Jarak pandang berkurang, jalan licin' }
];

export const PRECHECK_HASIL = {
  st: 'caution',
  skor: 64,
  ringkas: 'Anda boleh berangkat, tetapi tiga hal perlu disiapkan lebih dulu.',
  saran: [
    'Tambah jarak aman menjadi 4 detik — jalan basah memperpanjang jarak henti.',
    'Rencanakan satu jeda istirahat di KM 34 sebelum ruas rawan Jl. Pantura.',
    'Nyalakan lampu utama sejak sekarang, bukan menunggu gelap.'
  ]
};

// ------------------------------------------------------------
// 3 — AI Driver Monitoring: indikator visual yang dianalisis
// ------------------------------------------------------------
export const INDIKATOR = [
  { kode: 'M01', nama: 'Durasi mata tertutup', ukur: 'PERCLOS 11% · ambang 15%', st: 'ready' },
  { kode: 'M02', nama: 'Pola kedipan', ukur: '19 kedip/menit · naik 24% dari garis dasar', st: 'caution' },
  { kode: 'M03', nama: 'Indikasi menguap', ukur: '3 kali dalam 10 menit terakhir', st: 'risk' },
  { kode: 'M04', nama: 'Orientasi kepala', ukur: 'Yaw 6° · Pitch 4° — dalam batas', st: 'ready' },
  { kode: 'M05', nama: 'Indikasi kehilangan fokus', ukur: 'Pandangan lepas jalan 2,1 detik', st: 'caution' }
];

export const BATAS_CV =
  'Fitur ini membaca kondisi kesiapan berkendara, bukan identitas pengemudi. Tidak ada pengenalan wajah, tidak ada perbandingan dengan basis data orang, dan bingkai kamera tidak dikirim ke server — hanya angka indikator yang keluar dari perangkat.';

// ------------------------------------------------------------
// 4 & 7 — Dynamic Risk Score
// ------------------------------------------------------------
export const SKOR_KOMPONEN = [
  { nama: 'Driver Risk', nilai: 58, bobot: '35%', ket: 'Dari indikator kelelahan & fokus' },
  { nama: 'Road Risk', nilai: 74, bobot: '30%', ket: 'Riwayat kecelakaan & karakteristik ruas' },
  { nama: 'Kondisi perjalanan', nilai: 46, bobot: '15%', ket: 'Durasi tempuh & jam berkendara' },
  { nama: 'Lingkungan', nilai: 63, bobot: '20%', ket: 'Cuaca, jarak pandang, penerangan' }
];

export const SKOR_SEKARANG = { nilai: 62, st: 'caution', tren: 'naik 14 poin dalam 20 menit' };

// ------------------------------------------------------------
// 5 — Traffic Risk Map: titik & ruas pada peta
// Koordinat relatif 0–100 pada kanvas SVG.
// ------------------------------------------------------------
export const TITIK = [
  { id: 'R-204', x: 29, y: 30, rk: 4, jalan: 'Simpang Pantura KM 12', sebab: 'Tikungan tajam + penerangan minim', jarak: '1,2 km', laka: 14, jam: '19.00–23.00' },
  { id: 'R-208', x: 57, y: 22, rk: 3, jalan: 'Jl. Ahmad Yani (Pasar)', sebab: 'Penyeberang padat, bahu jalan terpakai', jarak: '3,4 km', laka: 9, jam: '06.00–08.00' },
  { id: 'R-215', x: 73, y: 53, rk: 4, jalan: 'Turunan Cikidang', sebab: 'Turunan panjang, rem blong berulang', jarak: '6,1 km', laka: 17, jam: '13.00–16.00' },
  { id: 'R-221', x: 42, y: 61, rk: 2, jalan: 'Jl. Diponegoro', sebab: 'Perlintasan sebidang tanpa palang', jarak: '7,8 km', laka: 5, jam: '05.00–07.00' },
  { id: 'R-227', x: 18, y: 70, rk: 3, jalan: 'Kawasan SDN 3 Merdeka', sebab: 'Zona sekolah, pejalan kaki anak', jarak: '9,2 km', laka: 7, jam: '06.30–07.30' },
  { id: 'R-233', x: 64, y: 77, rk: 1, jalan: 'Jl. Sudirman', sebab: 'Ruas tertata, tanpa riwayat fatal', jarak: '11,4 km', laka: 1, jam: '—' },
  { id: 'R-240', x: 86, y: 34, rk: 3, jalan: 'Jembatan Kalimas', sebab: 'Angin samping, permukaan licin saat hujan', jarak: '13,6 km', laka: 8, jam: '15.00–18.00' },
  { id: 'R-246', x: 36, y: 45, rk: 2, jalan: 'Jl. Gatot Subroto', sebab: 'Penyempitan lajur akibat proyek', jarak: '4,5 km', laka: 4, jam: '17.00–20.00' }
];

// ------------------------------------------------------------
// 6 — Smart Road Warning: peringatan yang muncul saat mengemudi
// ------------------------------------------------------------
export const PERINGATAN = {
  st: 'risk',
  judul: 'Area risiko tinggi di depan',
  teks: 'Anda sedang memasuki area dengan tingkat risiko tinggi. Tingkatkan kewaspadaan dan sesuaikan kecepatan.',
  jarak: '700 m',
  titik: 'R-204 · Simpang Pantura KM 12',
  sebab: '14 kecelakaan tercatat, 9 di antaranya pukul 19.00–23.00'
};

// ------------------------------------------------------------
// 8 & 12 — Context-Aware AI dan Personalized Safety Education
// ------------------------------------------------------------
export const KONTEKS = [
  { pemicu: 'Memasuki area rawan kecelakaan', respons: 'Peringatan dini + saran kecepatan', ikon: 'alert', st: 'risk' },
  { pemicu: 'Mendekati kawasan sekolah', respons: 'Pengingat kewaspadaan terhadap pejalan kaki', ikon: 'school', st: 'caution' },
  { pemicu: 'Hujan & jarak pandang turun', respons: 'Edukasi jarak aman dan visibilitas', ikon: 'rain', st: 'caution' },
  { pemicu: 'Indikasi kelelahan pengemudi', respons: 'Rekomendasi istirahat + edukasi microsleep', ikon: 'moon', st: 'risk' }
];

export const EDUKASI = {
  pemicu: 'Terdeteksi 3 indikasi menguap dalam 10 menit',
  judul: 'Microsleep: tertidur 3 detik tanpa Anda sadari',
  isi: 'Pada 80 km/jam, mata terpejam 3 detik berarti kendaraan menempuh sekitar 67 meter tanpa kendali. Microsleep tidak terasa oleh yang mengalaminya — itulah sebabnya rasa "masih kuat" bukan ukuran yang bisa dipercaya.',
  langkah: [
    'Berhenti di tempat aman — rest area terdekat 4,2 km.',
    'Tidur singkat 15–20 menit, bukan sekadar meregangkan badan.',
    'Kopi baru bekerja setelah ±30 menit; minum sebelum tidur singkat, bukan sesudahnya.'
  ],
  rujukan: 'Materi edukasi keselamatan berkendara — versi ringkas dalam aplikasi'
};

// ------------------------------------------------------------
// 9 & 10 — DRIVERA AI Agent (percakapan berbasis suara)
// Ini SKRIP RANCANGAN, bukan keluaran model sungguhan.
// ------------------------------------------------------------
export const PERCAKAPAN = [
  { dari: 'user', teks: 'DRIVERA, apakah jalan di depan saya rawan?', suara: true },
  {
    dari: 'ai',
    teks: 'Ya. Dalam 700 meter Anda memasuki Simpang Pantura KM 12 — tikungan tajam dengan penerangan minim dan 14 kecelakaan tercatat, sembilan di antaranya pada jam seperti sekarang.',
    aksi: 'Saran: turunkan kecepatan ke 40 km/jam sebelum tikungan.',
    sumber: 'Peta risiko ruas · 14 kejadian tercatat'
  },
  { dari: 'user', teks: 'Apa yang harus dilakukan ketika mengantuk?', suara: true }
];

export const AGENT_JAWAB = {
  judul: 'Rekomendasi tindakan',
  ringkas: 'Berhenti, bukan melawan. Rest area terdekat 4,2 km di depan.',
  langkah: [
    'Kurangi kecepatan dan pindah ke lajur kiri sekarang.',
    'Keluar di Rest Area KM 38 — 4,2 km, sekitar 4 menit.',
    'Tidur singkat 15–20 menit sebelum melanjutkan.'
  ],
  catatan: 'Saya akan mengingatkan lagi 2 menit sebelum pintu keluar.'
};

export const PERINTAH_SUARA = [
  'DRIVERA, apakah jalan di depan saya rawan?',
  'Berikan tips berkendara saat hujan.',
  'Apa yang harus dilakukan ketika mengantuk?',
  'Buka peta risiko.',
  'Apakah ada tempat aman untuk berhenti?'
];

// ------------------------------------------------------------
// 13 — Safety Intervention
// ------------------------------------------------------------
export const INTERVENSI = [
  { ikon: 'gauge', nama: 'Kurangi kecepatan', kapan: 'Saat memasuki ruas berisiko tinggi' },
  { ikon: 'eye', nama: 'Tingkatkan kewaspadaan', kapan: 'Zona sekolah, pasar, perlintasan' },
  { ikon: 'ruler', nama: 'Jaga jarak aman', kapan: 'Hujan, kabut, atau jalan basah' },
  { ikon: 'coffee', nama: 'Cari tempat berhenti', kapan: 'Skor risiko melewati ambang' },
  { ikon: 'moon', nama: 'Istirahat', kapan: 'Terdapat indikasi kelelahan' },
  { ikon: 'stop', nama: 'Tunda perjalanan', kapan: 'Kondisi pengemudi tidak memungkinkan' }
];

// ------------------------------------------------------------
// Ringkasan perjalanan (layar 8)
// ------------------------------------------------------------
export const PERJALANAN = {
  rute: 'Bekasi → Cirebon',
  jarak: '184 km',
  durasi: '3 jam 12 mnt',
  skor: 71,
  st: 'caution',
  rinci: [
    { l: 'Peringatan diberikan', v: '6' },
    { l: 'Indikasi kelelahan', v: '2' },
    { l: 'Ruas risiko tinggi dilalui', v: '3' },
    { l: 'Istirahat diambil', v: '1' }
  ],
  linimasa: [
    { jam: '21.40', teks: 'Pre-Drive Check — status Caution', st: 'caution' },
    { jam: '22.06', teks: 'Memasuki Simpang Pantura KM 12 — peringatan risiko tinggi', st: 'risk' },
    { jam: '22.31', teks: 'Hujan terdeteksi — edukasi jarak aman diberikan', st: 'caution' },
    { jam: '23.14', teks: 'Indikasi kelelahan — rekomendasi istirahat', st: 'risk' },
    { jam: '23.22', teks: 'Berhenti di Rest Area KM 38 selama 18 menit', st: 'ready' },
    { jam: '00.52', teks: 'Tiba di tujuan — tanpa insiden', st: 'ready' }
  ]
};

// ------------------------------------------------------------
// Konsol Dishub / Korlantas (sisi institusi)
// ------------------------------------------------------------
export const PRIORITAS = [
  { rank: 1, ruas: 'Turunan Cikidang (KM 18–21)', skor: 94, laka: 17, korban: 23, sebab: 'Turunan panjang, rem blong', aksi: 'Jalur penyelamat' },
  { rank: 2, ruas: 'Simpang Pantura KM 12', skor: 89, laka: 14, korban: 19, sebab: 'Tikungan tajam, gelap', aksi: 'Penerangan + rambu' },
  { rank: 3, ruas: 'Jl. Ahmad Yani (Pasar)', skor: 78, laka: 9, korban: 11, sebab: 'Penyeberang tanpa fasilitas', aksi: 'Zebra + pelican' },
  { rank: 4, ruas: 'Jembatan Kalimas', skor: 72, laka: 8, korban: 9, sebab: 'Angin samping, licin', aksi: 'Rambu dinamis' },
  { rank: 5, ruas: 'Kawasan SDN 3 Merdeka', skor: 66, laka: 7, korban: 8, sebab: 'Zona sekolah tanpa pembatas', aksi: 'Zona selamat sekolah' }
];

export const TANYA_ANALIS = {
  tanya: 'Anggaran penanganan blackspot tahun ini Rp 1,8 miliar. Ruas mana yang paling menurunkan angka korban?',
  jawab: 'Dahulukan Turunan Cikidang dan Simpang Pantura KM 12 (total Rp 1,52 miliar).',
  alasan: [
    'Keduanya menyumbang 31 dari 55 kecelakaan tercatat pada delapan ruas prioritas.',
    'Penanganan Cikidang berupa jalur penyelamat — menjawab sebab dominan, bukan gejalanya.',
    'Sisa Rp 280 juta cukup untuk penerangan Jembatan Kalimas yang risikonya musiman.'
  ],
  catatan: 'Rekomendasi disusun dari data kejadian dan telemetri anonim. Keputusan akhir tetap pada instansi.'
};

// ------------------------------------------------------------
// Angka rujukan untuk hero — WAJIB diverifikasi & masuk Daftar
// Pustaka sebelum dipakai di naskah.
// ------------------------------------------------------------
export const RUJUKAN = [
  {
    angka: '3 dtk',
    label: 'Durasi satu episode microsleep',
    catatan: 'Pada 80 km/jam setara ±67 meter tanpa kendali pengemudi'
  },
  {
    angka: '4',
    label: 'Lapis teknologi yang diintegrasikan',
    catatan: 'Computer Vision · GIS · Data Analytics · Voice AI Agent'
  },
  {
    angka: '13',
    label: 'Fitur inti dalam satu platform',
    catatan: 'Dari Safety Onboarding hingga Safety Intervention'
  },
  {
    angka: '0',
    label: 'Bingkai kamera yang keluar dari perangkat',
    catatan: 'Analisis di perangkat; yang dikirim hanya angka indikator'
  }
];

export const TECH = [
  { n: 'Svelte 5', d: 'Antarmuka pengemudi (PWA)' },
  { n: 'MediaPipe', d: 'Face mesh & landmark mata' },
  { n: 'TF Lite', d: 'Inferensi PERCLOS on-device' },
  { n: 'MapLibre GL', d: 'Peta vektor & heatmap risiko' },
  { n: 'PostGIS', d: 'Basis data blackspot geospasial' },
  { n: 'Web Speech API', d: 'Wake word & sintesis suara' },
  { n: 'FastAPI', d: 'Agregasi telemetri anonim' },
  { n: 'Satu Data', d: 'Interoperabilitas Dishub–Korlantas' }
];

export const KREDIT = [
  { file: 'hero-malam.jpg', judul: 'Cars are driving down the street at night', pembuat: 'Pattaya Patrol', lisensi: 'CC BY-SA 4.0' },
  { file: 'kokpit.jpg', judul: 'Blue car dashboard and wheel', pembuat: 'Igor Ovsyannykov', lisensi: 'CC0' },
  { file: 'hujan-kaca.jpg', judul: 'Cars through rainy windshield', pembuat: 'Nadine Shaabana', lisensi: 'CC0' },
  { file: 'macet-jakarta.jpg', judul: 'Traffic jam in Sudirman Street, Jakarta', pembuat: 'Serenity', lisensi: 'CC BY-SA 3.0' },
  { file: 'rambu.jpg', judul: 'Indonesia Traffic-signs Warning-sign-04', pembuat: 'CEphoto, Uwe Aranas', lisensi: 'CC BY-SA 3.0' },
  { file: 'tol-jakarta.jpg', judul: 'Jakarta Inner Ring Road, Agustus 2019', pembuat: 'Firzafp', lisensi: 'CC BY-SA 4.0' },
  { file: 'blackspot.jpg', judul: 'Accident Blackspot road sign', pembuat: 'Thomas Nugent', lisensi: 'CC BY-SA 2.0' }
];
