export interface LeaderData {
  nama: string;
  pangkat: string;
  jabatan: string;
  periode: string;
  foto: string;
  sambutan: string[];
}

export const leaderData: LeaderData = {
  nama: "Letkol Inf [Nama Kasansidam]", // Sesuai PRD, diberi tanda kurung jika menunggu update resmi
  pangkat: "Letnan Kolonel",
  jabatan: "Kepala Sandi dan Siber Kodam Jaya (Kasansidam Jaya)",
  periode: "2025 - Sekarang",
  foto: "/images/pimpinan-placeholder.svg",
  sambutan: [
    "Assalamu’alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera bagi kita semua.",
    "Selamat datang di situs resmi profil Sansidam Jaya (Sandi dan Siber Kodam Jaya). Sebagai badan pelaksana staf di tingkat Markas Komando Daerah Militer Jayakarta, kami mengemban amanah penting dalam membina dan menyelenggarakan fungsi persandian serta pertahanan siber di seluruh wilayah komando Kodam Jaya/Jayakarta.",
    "Di era transformasi digital dan perang informasi yang semakin kompleks, keamanan informasi militer serta ketahanan ruang siber menjadi garda pertahanan krusial. Sansidam Jaya berkomitmen menjaga integritas kerahasiaan komunikasi dan keamanan sistem data pertahanan demi kedaulatan NKRI, khususnya di wilayah Ibukota Jakarta dan sekitarnya.",
    "Website ini dihadirkan sebagai representasi keterbukaan informasi publik dan edukasi masyarakat mengenai peran persandian dan keamanan siber, tanpa mengabaikan aspek kerahasiaan operasional satuan.",
  ],
};

export interface Article {
  slug: string;
  title: string;
  date: string;
  category: "Kegiatan" | "Persit" | "Sosialisasi" | "Edukasi";
  excerpt: string;
  content: string[];
  image: string;
  featured?: boolean;
}

export const articlesData: Article[] = [
  {
    slug: "sosialisasi-kesadaran-keamanan-informasi-kodam-jaya",
    title: "Sansidam Jaya Gelar Sosialisasi Kesadaran Keamanan Informasi dan Literasi Siber",
    date: "28 Oktober 2026",
    category: "Sosialisasi",
    excerpt:
      "Dalam rangka memperkuat ketahanan digital di lingkungan Makodam Jaya, Sansidam Jaya menyelenggarakan penguatan literasi siber dasar bagi prajurit dan PNS.",
    content: [
      "Jakarta — Sansidam Jaya (Sandi dan Siber Kodam Jaya) menyelenggarakan kegiatan penguatan literasi dan sosialisasi kesadaran keamanan informasi di Aula Sudirman Makodam Jaya.",
      "Kegiatan ini bertujuan untuk meningkatkan kewaspadaan prajurit dan PNS TNI AD terhadap potensi ancaman rekayasa sosial (social engineering), kebocoran data, dan serangan siber melalui perangkat seluler maupun pos elektronik.",
      "Kasansidam Jaya dalam arahannya menegaskan bahwa rantai keamanan terkuat dimulai dari kesadaran individu setiap personel dalam menjaga kerahasiaan kode etik komunikasi dan informasi.",
    ],
    image: "/images/berita-1.svg",
    featured: true,
  },
  {
    slug: "olahraga-bersama-tingkatkan-soliditas-satuan",
    title: "Olahraga Bersama dan Pembinaan Jasmani Tingkatkan Kekompakan Anggota Sansidam Jaya",
    date: "17 Oktober 2026",
    category: "Kegiatan",
    excerpt:
      "Kegiatan pembinaan fisik dan olahraga bersama seluruh anggota Sansidam Jaya di Lapangan Jayakarta Makodam Jaya guna menjaga kebugaran jasmani dan jiwa korsa.",
    content: [
      "Jakarta — Menjaga stamina dan kesehatan fisik merupakan pondasi utama kesiapan kerja para prajurit persandian. Sansidam Jaya melaksanakan apel pagi yang dilanjutkan dengan jalan santai dan olahraga bersama di seputaran Makodam Jaya.",
      "Kegiatan berlangsung dengan penuh semangat kebersamaan dan kekeluargaan, menegaskan soliditas internal satuan dalam mendukung tugas pokok Kodam Jaya.",
    ],
    image: "/images/berita-2.svg",
  },
  {
    slug: "kegiatan-persit-kartika-chandra-kirana-ranting-2-sansidam-jaya",
    title: "Pertemuan Rutin dan Bakti Sosial Persit Kartika Chandra Kirana Ranting 2 Sansidam Jaya",
    date: "05 Oktober 2026",
    category: "Persit",
    excerpt:
      "Persit Kartika Chandra Kirana Ranting 2 Sansidam Jaya mengadakan pertemuan anggota serta aksi kepedulian sosial bagi keluarga besar Kodam Jaya.",
    content: [
      "Jakarta — Persit Kartika Chandra Kirana Ranting 2 Sansidam Jaya Cabang II Srendam PD Jaya menyelenggarakan kegiatan pembinaan anggota dan silaturahmi berkala.",
      "Selain agenda pertemuan rutin, Persit Ranting 2 juga menyerahkan santunan dan bantuan sosial sebagai wujud kepedulian dan kebersamaan keluarga besar prajurit sandi dan siber Kodam Jaya.",
    ],
    image: "/images/berita-3.svg",
  },
  {
    slug: "tips-keamanan-data-pribadi-menghindari-phishing",
    title: "Literasi Siber: Panduan Mengenali dan Menghindari Serangan Phishing di Ruang Publik",
    date: "20 September 2026",
    category: "Edukasi",
    excerpt:
      "Kenali ciri-ciri tautan mencurigakan, pesan palsu berkedok kurir, dan modus rekayasa sosial untuk melindungi data serta privasi Anda.",
    content: [
      "Serangan phishing kian marak memanfaatkan kelengahan pengguna gawai pintar melalui pesan WhatsApp, SMS, maupun surel yang menyamar sebagai instansi terpercaya.",
      "Sansidam Jaya mengajak masyarakat untuk selalu menerapkan prinsip 'Cek, Verifikasi, dan Jangan Asal Klik'. Pastikan alamat pengirim resmi dan hindari memasukkan kata sandi pada formulir daring yang tidak jelas.",
    ],
    image: "/images/berita-4.svg",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "Kegiatan Resmi" | "Persit KCK" | "Olahraga & Bintal" | "Sosialisasi";
  year: string;
  image: string;
  caption: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    title: "Upacara Peringatan Hari Jadi dan Apel Satuan",
    category: "Kegiatan Resmi",
    year: "2026",
    image: "/images/galeri-1.svg",
    caption: "Pelaksanaan upacara dan apel kesiapsiagaan di lingkungan Makodam Jaya.",
  },
  {
    id: "g2",
    title: "Kegiatan Senam Pagi dan Olahraga Bersama",
    category: "Olahraga & Bintal",
    year: "2026",
    image: "/images/galeri-2.svg",
    caption: "Meningkatkan daya tahan tubuh dan kekompakan personel melalui olahraga rutin.",
  },
  {
    id: "g3",
    title: "Pertemuan Anggota Persit Ranting 2 Sansidam Jaya",
    category: "Persit KCK",
    year: "2026",
    image: "/images/galeri-3.svg",
    caption: "Dokumentasi keakraban anggota Persit Kartika Chandra Kirana Ranting 2 Sansidam Jaya.",
  },
  {
    id: "g4",
    title: "Bakti Sosial Peduli Lingkungan",
    category: "Sosialisasi",
    year: "2025",
    image: "/images/galeri-4.svg",
    caption: "Kegiatan kepedulian sosial bagi masyarakat di sekitar wilayah Cawang, Jakarta Timur.",
  },
  {
    id: "g5",
    title: "Pembinaan Rohani dan Mental Personel",
    category: "Olahraga & Bintal",
    year: "2026",
    image: "/images/galeri-5.svg",
    caption: "Kegiatan bintal berkala guna memperkuat integritas moral dan etika prajurit.",
  },
  {
    id: "g6",
    title: "Workshop Pengenalan Etika Ruang Siber",
    category: "Sosialisasi",
    year: "2026",
    image: "/images/galeri-6.svg",
    caption: "Edukasi etika bermedia sosial yang cerdas dan bijak bagi keluarga besar satuan.",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "Apa itu Sansidam Jaya?",
    answer:
      "Sansidam Jaya adalah singkatan dari Sandi dan Siber Komando Daerah Militer Jayakarta (Kodam Jaya). Satuan ini merupakan badan pelaksana staf di tingkat Mako Kodam Jaya yang bertugas membina dan menyelenggarakan fungsi persandian serta pertahanan siber di wilayah kerja Kodam Jaya/Jayakarta.",
  },
  {
    question: "Apa perbedaan antara tugas persandian dan pertahanan siber di Kodam Jaya?",
    answer:
      "Persandian berfokus pada pengamanan informasi, kerahasiaan berita, dan kriptografi militer guna memastikan komunikasi kedinasan aman dari penyadapan. Sedangkan pertahanan siber berfokus pada perlindungan sistem teknologi informasi, jaringan data, dan kesiapan pertahanan ruang digital di jajaran Kodam Jaya.",
  },
  {
    question: "Di mana alamat markas Sansidam Jaya?",
    answer:
      "Sansidam Jaya bermarkas di dalam Kompleks Markas Komando Daerah Militer Jayakarta (Makodam Jaya), Jl. Mayor Jenderal Sutoyo No. 5, RW. 7, Cawang, Kec. Kramat Jati, Kota Jakarta Timur, DKI Jakarta 13630.",
  },
  {
    question: "Bagaimana cara masyarakat berkoordinasi atau menghubungi Sansidam Jaya?",
    answer:
      "Sesuai regulasi resmi Kodam Jaya, jalur koordinasi umum terpusat dapat dilakukan melalui akun Instagram resmi @sansidamjy atau melalui kanal resmi Kodam Jaya (email: kodamjayajayakarta@gmail.com dan laman kodamjaya-tniad.mil.id).",
  },
  {
    question: "Apakah Sansidam Jaya melayani aduan kejahatan siber dari masyarakat sipil?",
    answer:
      "Sansidam Jaya bertugas mengamankan sistem persandian dan pertahanan siber internal militer Kodam Jaya. Untuk laporan penipuan siber atau kejahatan internet sipil, masyarakat dapat menghubungi kepolisian terdekat (Ditreskrimsiber Polri) atau kanal resmi Badan Siber dan Sandi Negara (BSSN).",
  },
];
