// ============================================================
// DRIVERA — Data simulasi untuk prototipe UI/UX.
// CATATAN: seluruh angka di dalam layar aplikasi bersifat DUMMY
// (ilustrasi rancangan), bukan hasil pengukuran lapangan.
// Konteks wilayah: koridor Balikpapan – Ibu Kota Nusantara (IKN).
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
    'DRIVERA menawarkan integrasi Computer Vision, GIS-based Traffic Risk Mapping, Data Analytics, dan Voice-Based AI Agent dalam satu platform keselamatan berkendara yang mampu melakukan penilaian risiko secara real-time serta memberikan peringatan, intervensi, edukasi, dan informasi keselamatan yang adaptif berdasarkan kondisi pengemudi dan lingkungan perjalanan.',
  wilayah: 'Koridor Balikpapan – Ibu Kota Nusantara (IKN)'
};

// ------------------------------------------------------------
// Tiga lapis teknologi DRIVERA — dipakai di bagian "Alur sistem"
// ------------------------------------------------------------
export const LAPIS = [
  { kode: 'CV', nama: 'Computer Vision', apa: 'Menganalisis kondisi visual pengemudi' },
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
    lapis: 'Driver Vision Monitoring',
    di: 'Kamera perangkat',
    nama: 'Vision Monitor',
    apa: 'Menganalisis kondisi visual pengemudi secara real-time untuk mendeteksi tanda-tanda kantuk, distraksi, atau kehilangan fokus — lalu mengubahnya menjadi Risk Level yang terbaca sekali lirik.',
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
  { ikon: 'route', nama: 'Tingkat risiko rute', nilai: 'Tinggi', skor: 41, st: 'risk', ket: '3 titik rawan pada 18 km pertama menuju IKN' },
  { ikon: 'rain', nama: 'Kondisi lingkungan', nilai: 'Hujan ringan', skor: 62, st: 'caution', ket: 'Jarak pandang berkurang, jalan licin' }
];

export const PRECHECK_HASIL = {
  st: 'caution',
  skor: 64,
  ringkas: 'Anda boleh berangkat, tetapi tiga hal perlu disiapkan lebih dulu.',
  saran: [
    'Tambah jarak aman menjadi 4 detik — jalan basah memperpanjang jarak henti.',
    'Rencanakan satu jeda istirahat di KM 34 sebelum ruas rawan Simpang Sepaku.',
    'Nyalakan lampu utama sejak sekarang, bukan menunggu gelap.'
  ]
};

// ------------------------------------------------------------
// 3 — Driver Vision Monitoring
// Enam parameter visual yang dianalisis dari kamera perangkat.
// Penamaan sengaja memakai istilah teknis: yang diukur adalah
// KONDISI VISUAL pengemudi, bukan identitas orangnya.
// ------------------------------------------------------------
export const INDIKATOR = [
  { kode: 'Eye Closure', nama: 'Durasi mata tertutup', ukur: 'PERCLOS 11% · ambang 15%', nilai: 11, st: 'ready' },
  { kode: 'Drowsiness', nama: 'Indikasi mengantuk', ukur: '3 kali menguap dalam 10 menit', nilai: 64, st: 'risk' },
  { kode: 'Head Pose', nama: 'Orientasi kepala', ukur: 'Yaw 6° · Pitch 4° — dalam batas', nilai: 12, st: 'ready' },
  { kode: 'Gaze Direction', nama: 'Arah pandangan', ukur: 'Lepas dari jalan 2,1 detik', nilai: 38, st: 'caution' },
  { kode: 'Distraction', nama: 'Indikasi distraksi', ukur: 'Tidak ada objek pengalih terdeteksi', nilai: 8, st: 'ready' },
  { kode: 'Face Presence', nama: 'Wajah terdeteksi', ukur: 'Stabil 100% dalam 5 menit terakhir', nilai: 100, st: 'ready' }
];

// Ringkasan hasil analisis — kondisi normal
export const DRIVER_STATUS = {
  st: 'ready',
  risk: 'SAFE',
  baris: [
    { l: 'Face Detected', v: 'Ya', st: 'ready', cek: true },
    { l: 'Attention', v: '92%', st: 'ready' },
    { l: 'Drowsiness', v: 'Low', st: 'ready' },
    { l: 'Distraction', v: 'Low', st: 'ready' }
  ],
  catatan: 'Kondisi visual terpantau stabil. Analisis berjalan 4 kali per detik di dalam perangkat.'
};

// Ringkasan hasil analisis — kondisi kantuk terdeteksi
export const DRIVER_ALERT = {
  st: 'risk',
  risk: 'HIGH RISK',
  judul: 'Indikasi kantuk terdeteksi',
  teks: 'Disarankan berhenti dan beristirahat.',
  baris: [
    { l: 'Face Detected', v: 'Ya', st: 'ready', cek: true },
    { l: 'Attention', v: '47%', st: 'risk' },
    { l: 'Drowsiness', v: 'High', st: 'risk' },
    { l: 'Distraction', v: 'Medium', st: 'caution' }
  ],
  pemicu: [
    'Mata tertutup 1,8 detik — melewati ambang 1,5 detik.',
    'Menguap 3 kali dalam 10 menit terakhir.',
    'Pandangan lepas dari jalan 2,1 detik, dua kali berturut-turut.'
  ],
  aksi: 'Cari Rest Area Terdekat',
  restArea: { nama: 'Rest Area KM 38 · Samboja', jarak: '4,2 km', waktu: '4 menit' }
};

export const BATAS_CV =
  'Yang dianalisis adalah kondisi visual pengemudi — bukan identitas. Tidak ada pengenalan wajah, tidak ada pencocokan dengan basis data orang, dan bingkai kamera tidak dikirim ke server. Yang keluar dari perangkat hanya angka indikator.';

// ------------------------------------------------------------
// 4 & 7 — Dynamic Risk Score
// ------------------------------------------------------------
export const SKOR_KOMPONEN = [
  { nama: 'Driver Risk', nilai: 58, bobot: '35%', ket: 'Dari indikator kantuk & fokus' },
  { nama: 'Road Risk', nilai: 74, bobot: '30%', ket: 'Riwayat kecelakaan & karakteristik ruas' },
  { nama: 'Kondisi perjalanan', nilai: 46, bobot: '15%', ket: 'Durasi tempuh & jam berkendara' },
  { nama: 'Lingkungan', nilai: 63, bobot: '20%', ket: 'Cuaca, jarak pandang, penerangan' }
];

export const SKOR_SEKARANG = { nilai: 62, st: 'caution', tren: 'naik 14 poin dalam 20 menit' };

// ------------------------------------------------------------
// 5 — Traffic Risk Map: ruas pada koridor Balikpapan – IKN
// Koordinat relatif 0–100 pada kanvas SVG.
// ------------------------------------------------------------
export const TITIK = [
  { id: 'R-204', x: 29, y: 30, rk: 4, jalan: 'Simpang Sepaku KM 12', sebab: 'Tikungan tajam + penerangan minim', jarak: '1,2 km', laka: 14, jam: '19.00–23.00' },
  { id: 'R-208', x: 57, y: 22, rk: 3, jalan: 'Jl. Sudirman Sepaku (Pasar)', sebab: 'Penyeberang padat, bahu jalan terpakai', jarak: '3,4 km', laka: 9, jam: '06.00–08.00' },
  { id: 'R-215', x: 73, y: 53, rk: 4, jalan: 'Turunan Samboja', sebab: 'Turunan panjang, rem blong berulang', jarak: '6,1 km', laka: 17, jam: '13.00–16.00' },
  { id: 'R-221', x: 42, y: 61, rk: 2, jalan: 'Akses KIPP Segmen 3', sebab: 'Lalu lintas kendaraan proyek bercampur', jarak: '7,8 km', laka: 5, jam: '05.00–07.00' },
  { id: 'R-227', x: 18, y: 70, rk: 3, jalan: 'Kawasan SDN 020 Sepaku', sebab: 'Zona sekolah, pejalan kaki anak', jarak: '9,2 km', laka: 7, jam: '06.30–07.30' },
  { id: 'R-233', x: 64, y: 77, rk: 1, jalan: 'Sumbu Kebangsaan', sebab: 'Ruas tertata, tanpa riwayat fatal', jarak: '11,4 km', laka: 1, jam: '—' },
  { id: 'R-240', x: 86, y: 34, rk: 3, jalan: 'Jembatan Pulau Balang', sebab: 'Angin samping, permukaan licin saat hujan', jarak: '13,6 km', laka: 8, jam: '15.00–18.00' },
  { id: 'R-246', x: 36, y: 45, rk: 2, jalan: 'Tol Balikpapan–IKN Seksi 3B', sebab: 'Penyempitan lajur akibat pekerjaan', jarak: '4,5 km', laka: 4, jam: '17.00–20.00' }
];

// ------------------------------------------------------------
// 6 — Smart Road Warning: peringatan yang muncul saat mengemudi
// ------------------------------------------------------------
export const PERINGATAN = {
  st: 'risk',
  judul: 'Area risiko tinggi di depan',
  teks: 'Anda sedang memasuki area dengan tingkat risiko tinggi. Tingkatkan kewaspadaan dan sesuaikan kecepatan.',
  jarak: '700 m',
  titik: 'R-204 · Simpang Sepaku KM 12',
  sebab: '14 kecelakaan tercatat, 9 di antaranya pukul 19.00–23.00'
};

// ------------------------------------------------------------
// 8 & 12 — Context-Aware AI dan Personalized Safety Education
// ------------------------------------------------------------
export const KONTEKS = [
  { pemicu: 'Memasuki area rawan kecelakaan', respons: 'Peringatan dini + saran kecepatan', ikon: 'alert', st: 'risk' },
  { pemicu: 'Mendekati kawasan sekolah', respons: 'Pengingat kewaspadaan terhadap pejalan kaki', ikon: 'school', st: 'caution' },
  { pemicu: 'Hujan & jarak pandang turun', respons: 'Edukasi jarak aman dan visibilitas', ikon: 'rain', st: 'caution' },
  { pemicu: 'Indikasi kantuk pengemudi', respons: 'Rekomendasi istirahat + edukasi microsleep', ikon: 'moon', st: 'risk' }
];

export const EDUKASI = {
  pemicu: 'Drowsiness terdeteksi — 3 indikasi menguap dalam 10 menit',
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
    teks: 'Ya. Dalam 700 meter Anda memasuki Simpang Sepaku KM 12 — tikungan tajam dengan penerangan minim dan 14 kecelakaan tercatat, sembilan di antaranya pada jam seperti sekarang.',
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
    'Keluar di Rest Area KM 38 Samboja — 4,2 km, sekitar 4 menit.',
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
  { ikon: 'moon', nama: 'Istirahat', kapan: 'Terdapat indikasi kantuk' },
  { ikon: 'stop', nama: 'Tunda perjalanan', kapan: 'Kondisi pengemudi tidak memungkinkan' }
];

// ------------------------------------------------------------
// Ringkasan perjalanan (layar terakhir)
// ------------------------------------------------------------
export const PERJALANAN = {
  rute: 'Balikpapan → IKN Nusantara',
  jarak: '96 km',
  durasi: '1 jam 48 mnt',
  skor: 71,
  st: 'caution',
  rinci: [
    { l: 'Peringatan diberikan', v: '6' },
    { l: 'Indikasi kantuk', v: '2' },
    { l: 'Ruas risiko tinggi dilalui', v: '3' },
    { l: 'Istirahat diambil', v: '1' }
  ],
  linimasa: [
    { jam: '21.40', teks: 'Pre-Drive Check — status Caution', st: 'caution' },
    { jam: '22.06', teks: 'Memasuki Simpang Sepaku KM 12 — peringatan risiko tinggi', st: 'risk' },
    { jam: '22.31', teks: 'Hujan terdeteksi — edukasi jarak aman diberikan', st: 'caution' },
    { jam: '22.54', teks: 'Drowsiness High — Driver Alert, rekomendasi istirahat', st: 'risk' },
    { jam: '23.02', teks: 'Berhenti di Rest Area KM 38 Samboja selama 18 menit', st: 'ready' },
    { jam: '23.28', teks: 'Tiba di KIPP IKN — tanpa insiden', st: 'ready' }
  ]
};

// ------------------------------------------------------------
// Konsol Dishub / Korlantas (sisi institusi)
// ------------------------------------------------------------
export const PRIORITAS = [
  { rank: 1, ruas: 'Turunan Samboja (KM 18–21)', skor: 94, laka: 17, korban: 23, sebab: 'Turunan panjang, rem blong', aksi: 'Jalur penyelamat' },
  { rank: 2, ruas: 'Simpang Sepaku KM 12', skor: 89, laka: 14, korban: 19, sebab: 'Tikungan tajam, gelap', aksi: 'Penerangan + rambu' },
  { rank: 3, ruas: 'Jl. Sudirman Sepaku (Pasar)', skor: 78, laka: 9, korban: 11, sebab: 'Penyeberang tanpa fasilitas', aksi: 'Zebra + pelican' },
  { rank: 4, ruas: 'Jembatan Pulau Balang', skor: 72, laka: 8, korban: 9, sebab: 'Angin samping, licin', aksi: 'Rambu dinamis' },
  { rank: 5, ruas: 'Kawasan SDN 020 Sepaku', skor: 66, laka: 7, korban: 8, sebab: 'Zona sekolah tanpa pembatas', aksi: 'Zona selamat sekolah' }
];

export const TANYA_ANALIS = {
  tanya: 'Anggaran penanganan blackspot koridor IKN tahun ini Rp 1,8 miliar. Ruas mana yang paling menurunkan angka korban?',
  jawab: 'Dahulukan Turunan Samboja dan Simpang Sepaku KM 12 (total Rp 1,52 miliar).',
  alasan: [
    'Keduanya menyumbang 31 dari 55 kecelakaan tercatat pada delapan ruas prioritas.',
    'Penanganan Samboja berupa jalur penyelamat — menjawab sebab dominan, bukan gejalanya.',
    'Sisa Rp 280 juta cukup untuk penerangan Jembatan Pulau Balang yang risikonya musiman.'
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
    angka: '6',
    label: 'Parameter visual yang dianalisis',
    catatan: 'Eye Closure · Drowsiness · Head Pose · Gaze · Distraction · Face Presence'
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
  { file: 'ikn-istana.jpg', judul: 'Istana Garuda & Istana Negara, IKN Nusantara', pembuat: 'Humas Otorita IKN', lisensi: '© 2025 — dipakai sebagai ilustrasi konteks' },
  { file: 'pengemudi.jpg', judul: 'Pengemudi di dalam kabin (dokumentasi tim)', pembuat: 'Dokumentasi penulis', lisensi: 'Dipakai atas izin yang bersangkutan' },
  { file: 'ikn-jalan.jpg', judul: 'Pengerjaan jalan di kawasan Istana Negara IKN', pembuat: 'Marwan Mohamad', lisensi: 'CC BY-SA 4.0' },
  { file: 'ikn-kota.png', judul: 'Nusantara, Juni 2024 (udara)', pembuat: 'PUPR Permukiman Kaltim', lisensi: 'Public domain' },
  { file: 'hero-malam.jpg', judul: 'Cars are driving down the street at night', pembuat: 'Pattaya Patrol', lisensi: 'CC BY-SA 4.0' },
  { file: 'kokpit.jpg', judul: 'Blue car dashboard and wheel', pembuat: 'Igor Ovsyannykov', lisensi: 'CC0' },
  { file: 'hujan-kaca.jpg', judul: 'Cars through rainy windshield', pembuat: 'Nadine Shaabana', lisensi: 'CC0' }
];
