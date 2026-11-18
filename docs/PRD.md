# PRD: Website Profil Sansidam Jaya

| | |
|---|---|
| **Versi** | 0.4 (Draft) |
| **Tanggal** | 12 November 2026 |
| **Status** | Draft untuk direview |
| **Tech stack** | Next.js (React) + Node.js |

> Catatan: data faktual (sejarah, struktur, nama pejabat, dll.) pada dokumen ini sengaja diberi tanda `[ISI]` dan harus diverifikasi dari sumber resmi satuan sebelum dipublikasikan.

---

## 1. Ringkasan

Website ini adalah **situs profil resmi** **Sansidam Jaya** (singkatan dari **Sandi dan Siber Kodam Jaya**), salah satu satuan di jajaran Kodam Jaya. Sansidam Jaya adalah **badan pelaksana staf di tingkat Markas Komando Daerah Militer Jayakarta (Kodam Jaya)** yang bertugas **membina dan menyelenggarakan fungsi persandian serta pertahanan siber** di wilayah Kodam Jaya/Jayakarta.

Fungsi website ini sebagai "wajah digital" satuan: satu tempat yang jelas, terpercaya, dan mudah diakses bagi siapa pun yang ingin mengenal Sansidam Jaya, **tanpa perlu login atau registrasi**.

Rujukan resmi satuan induk: [Daftar satuan Kodam Jaya](https://kodamjaya-tniad.mil.id/satuan_kodam).

## 2. Tujuan & Non-Tujuan

### Tujuan
1. Menyampaikan informasi tentang Sansidam Jaya secara jelas, akurat, dan mudah dipahami.
2. Menjadi rujukan resmi (single source of truth) agar publik tidak bergantung pada informasi yang tersebar/tidak jelas sumbernya.
3. Membangun citra institusi yang profesional dan kredibel.
4. Memudahkan publik menemukan kontak dan lokasi satuan.

### Non-Tujuan (di luar cakupan versi awal)
- Sistem login / akun pengguna / registrasi.
- E-commerce, pembayaran, atau transaksi.
- Portal internal / sistem administrasi satuan.
- Publikasi informasi operasional atau yang bersifat rahasia (daftar lengkap pada bagian 7.2).
- Menampilkan struktur internal detail, daftar anggota, atau jumlah personel.
- Forum / kolom komentar publik.

## 3. Target Pengguna

| Persona | Kebutuhan utama |
|---|---|
| **Masyarakat umum** | Mengetahui apa itu Sansidam Jaya, tugas, dan perannya |
| **Calon prajurit / pelajar / mahasiswa** | Memahami profil satuan, struktur, dan informasi umum terkait satuan |
| **Instansi / mitra / media** | Informasi resmi, kontak, dan lokasi untuk koordinasi atau liputan |
| **Keluarga & purnawirawan / alumni satuan** | Mengikuti kabar dan kegiatan satuan |
| **Anggota satuan** | Rujukan profil resmi untuk dibagikan |

Pengguna dominan diasumsikan **mengakses lewat HP**, sehingga desain harus *mobile-first*.

## 4. Masalah yang Diselesaikan

Karena belum ada daftar kebutuhan baku, berikut hasil analisis masalah umum dari sebuah website profil institusi:

| # | Masalah | Solusi di website |
|---|---|---|
| 1 | Publik tidak tahu apa itu Sansidam Jaya & apa tugasnya (persandian dan siber adalah bidang yang kurang dikenal) | Halaman profil yang ringkas dan berbahasa awam, dengan penjelasan istilah |
| 2 | Informasi tersebar / tidak resmi / berpotensi keliru | Satu sumber resmi dengan tanggal pembaruan |
| 3 | Sulit mencari kontak & lokasi | Halaman kontak + peta + jam layanan |
| 4 | Publik tidak tahu siapa pimpinan satuan saat ini | Halaman Pimpinan Satuan (Kasansidam Jaya) yang mudah diperbarui saat serah terima jabatan |
| 5 | Kegiatan satuan tidak terdokumentasi publik | Berita/kegiatan dan galeri |
| 6 | Sulit diakses di HP / koneksi lambat | Desain responsif, ringan, cepat |
| 7 | Orang bingung memastikan akun medsos mana yang asli | Tautan ke kanal resmi (media sosial, website Kodam Jaya) |
| 8 | Pertanyaan yang sama berulang | Halaman FAQ |
| 9 | Fungsi persandian dan pertahanan siber sering disalahpahami atau dianggap tertutup | Penjelasan peran secara umum + edukasi literasi siber untuk publik |

## 5. Fitur

### 5.1 Must Have (MVP)

1. **Beranda** — hero (nama, logo Sansidam Jaya, tagline), ringkasan singkat, tautan cepat ke bagian utama, berita terbaru.
2. **Profil Satuan** — siapa kami, sejarah singkat `[ISI]`, visi & misi `[ISI]`, serta lambang/logo Sansidam Jaya dan Kodam Jaya beserta maknanya `[ISI]`.
3. **Tugas & Fungsi** — penjelasan peran Sansidam Jaya sebagai badan pelaksana staf di tingkat Mako Kodam Jaya yang membina dan menyelenggarakan fungsi persandian serta pertahanan siber di wilayah Kodam Jaya/Jayakarta, ditulis dengan bahasa awam (tanpa detail teknis sensitif).
4. **Pimpinan Satuan** — nama, pangkat, jabatan, dan foto resmi **Kepala Sandi dan Siber Kodam Jaya (Kasansidam Jaya)** `[ISI]`, ditambah penjelasan singkat posisi Sansidam Jaya dalam jajaran Kodam Jaya. **Tidak** menampilkan struktur internal di bawah Kasansidam Jaya.
5. **Berita & Kegiatan** — daftar dan halaman detail artikel, dengan tanggal dan gambar.
6. **Galeri** — dokumentasi kegiatan seremonial dan non-operasional (mis. upacara/sertijab, olahraga bersama, pembinaan mental, bakti sosial, kegiatan Persit Kartika Chandra Kirana Ranting 2 Sansidam Jaya), dikelompokkan per kegiatan/tahun.
7. **Kontak & Lokasi** — alamat markas, peta, **hanya kanal komunikasi umum/terpusat** (akun Instagram resmi dan email umum Kodam Jaya), serta tautan ke website Kodam Jaya. Tanpa nomor telepon pribadi atau jalur khusus.
8. **Desain responsif** (HP, tablet, desktop) dan **tanpa login**.
9. **Dasar SEO** — meta title/description, Open Graph (agar tampil bagus saat dibagikan di WhatsApp/medsos), sitemap, robots.txt.

### 5.2 Should Have (versi berikutnya / nice to have)

- **FAQ** — pertanyaan yang sering diajukan.
- **Edukasi & Literasi Siber** — tips keamanan siber dan kesadaran sandi untuk publik (konten umum, bukan teknis sensitif), misalnya cara mengenali hoaks, phishing, dan menjaga akun.
- **Daftar satuan terkait** — tautan ke Kodam Jaya dan satuan lain di jajarannya.
- **Pencarian** pada berita dan halaman.
- **Dua bahasa** (Indonesia & Inggris).
- **Halaman Unduhan** — dokumen publik, press kit (logo, foto pimpinan resmi) untuk media.
- **Linimasa sejarah** interaktif.
- **Tombol bagikan** (WhatsApp, Facebook, X, salin tautan).
- **Mode gelap** dan opsi ukuran teks.
- **Formulir kontak sederhana** tanpa login (dengan proteksi spam, misalnya captcha/honeypot).
- **Integrasi feed** media sosial resmi.

### 5.3 Nanti / Opsional

- Panel admin ringan (CMS) agar konten bisa diubah tanpa mengedit kode.
- Statistik pengunjung (analitik yang menghormati privasi).
- Notifikasi/newsletter.

## 6. Kebutuhan Non-Fungsional

| Aspek | Target |
|---|---|
| **Kinerja** | Lighthouse Performance ≥ 90 di mobile; LCP < 2,5 detik pada 4G |
| **Aksesibilitas** | Mengacu WCAG 2.1 AA: kontras warna, teks alternatif gambar, navigasi keyboard |
| **Responsif** | Nyaman mulai lebar 320px |
| **Keamanan** | HTTPS wajib, security headers, tidak ada data pribadi pengunjung yang disimpan, dependensi rutin diperbarui |
| **SEO** | Lighthouse SEO ≥ 90, mudah ditemukan lewat nama "Sansidam Jaya" |
| **Ketersediaan** | Target uptime ≥ 99% |
| **Keterpeliharaan** | Konten terpisah dari kode agar mudah diperbarui |

## 7. Pertimbangan Konten & Kebijakan (Penting)

Karena ini situs institusi militer, perlu ditetapkan sejak awal:

- **Persetujuan konten**: seluruh materi disetujui oleh **Kepala Sandi dan Siber Kodam Jaya (Kasansidam Jaya)** sebelum tayang. Lihat alur pada bagian 7.3.
- **Larangan publikasi**: mengikuti daftar informasi yang diizinkan dan dikecualikan pada bagian 7.2.
- **Penggunaan lambang/logo & foto**: logo Sansidam Jaya dan Kodam Jaya dipakai apa adanya (tidak diubah proporsi/warna); foto pimpinan hanya yang resmi.
- **Informasi persandian & siber**: karena bidang ini sensitif, konten dibatasi pada penjelasan peran dan edukasi umum. Tidak memuat detail sistem, infrastruktur, prosedur teknis, atau kerentanan.
- **Klaim "resmi"**: cantumkan keterangan bahwa ini situs resmi dan tautkan dari website Kodam Jaya agar publik bisa memverifikasi.

### 7.1 Identitas Visual

Satuan sudah memiliki dua logo yang menjadi dasar desain:

| Logo | Ciri visual | Peran di website |
|---|---|---|
| **Logo Sansidam Jaya** (`logo-sansidam-jaya.png`) | Lingkaran dengan teks "SANDI DAN SIBER KODAM JAYA" dan "JAYAKARTA", dominan abu gelap/hitam, latar merah-putih, perisai di tengah, dan bintang di sisi kiri-kanan | Logo utama di header, hero, favicon, dan gambar saat tautan dibagikan (Open Graph) |
| **Logo Kodam Jaya** (`logo-kodam-jaya.png`) | Perisai hijau dengan tulisan "JAYAKARTA" kuning, bintang, sayap, dan perisai merah-putih | Pada footer/bagian "Bagian dari Kodam Jaya" dan tautan ke website Kodam Jaya |

Arahan desain lengkap ada di **`DESIGN.md`** (menggabungkan pola website SMKN 1 Cibinong sebagai referensi struktur dengan identitas logo Sansidam Jaya). Ringkasannya:
- **Referensi struktur**: header gelap, hero foto dengan overlay, kanvas terang, kartu bersudut 10px, font Open Sans.
- **Palet warna**: abu-hitam sebagai warna dominan, **merah** sebagai aksen/CTA, **cyan/biru** hanya untuk tautan (nuansa siber), **hijau dan kuning** hanya pada blok "Bagian dari Kodam Jaya". Nilai hex diambil dari sampel logo.
- **Penyesuaian aksesibilitas**: beberapa nilai referensi (warna tautan, ukuran tombol, ukuran judul di HP) diubah agar memenuhi WCAG 2.1 AA.
- **Kesan visual**: tegas, rapi, modern, dan kredibel; selaras dengan nuansa persandian/siber namun tetap ramah bagi masyarakat umum.
- **Kualitas aset**: file logo saat ini berupa PNG. Jika ada, minta versi **SVG atau resolusi tinggi** agar tajam di semua layar; siapkan juga versi untuk latar terang dan gelap serta favicon.
- Kontras teks pada latar gelap harus memenuhi standar aksesibilitas.
- **Sumber & tanggal**: setiap artikel memuat tanggal terbit.
- **Hak cipta**: foto/gambar milik sendiri atau berizin.
- **Domain**: pastikan domain/hosting resmi atau yang disetujui satuan agar kredibilitas terjaga.

### 7.2 Informasi yang Boleh dan Tidak Boleh Ditampilkan

**Boleh ditampilkan:**

| Kategori | Rincian |
|---|---|
| **Pimpinan satuan** | Nama, pangkat, dan jabatan **Kasansidam Jaya** saja, terutama pada rilis berita sertijab atau kegiatan resmi. Pejabat di bawahnya (kepala seksi, komandan tim siber, dsb.) **dikecualikan**. |
| **Alamat markas** | Berada di kompleks Makodam Jaya/Jayakarta: Jl. Mayor Jenderal Sutoyo No. 5, RW. 7, Cawang, Kec. Kramat Jati, Kota Jakarta Timur, DKI Jakarta 13630. |
| **Kontak & kanal resmi umum** | Instagram Sansidam Jaya ([@sansidamjy](https://www.instagram.com/sansidamjy/)), Instagram Persit Ranting 2 Sansidam Jaya ([@persit_ranting2sansidam_jaya](https://www.instagram.com/persit_ranting2sansidam_jaya/)), dan email umum Kodam Jaya `kodamjayajayakarta@gmail.com`. |
| **Profil umum & kegiatan** | Tugas pokok secara garis besar dan dokumentasi kegiatan non-operasional (olahraga bersama, pembinaan mental, bakti sosial, kegiatan Persit Ranting 2 Sansi). |

**Dilarang ditampilkan:**

| Kategori | Rincian |
|---|---|
| **Kontak pribadi & jalur khusus** | Nomor telepon pribadi Kasansidam Jaya, nomor ekstensi internal ruang sandi/siber, dan alamat email dinas berklasifikasi. |
| **Struktur detail & personel** | Susunan jabatan internal di bawah pimpinan, daftar nama anggota, dan kekuatan/jumlah personel. |
| **Teknologi, sistem & infrastruktur siber** | Jenis perangkat keras/lunak persandian, topologi jaringan, sistem keamanan siber yang dipakai, serta tampilan layar operasional atau ruang kerja. |
| **Rencana & laporan operasi** | Jadwal pengamanan sandi, kegiatan patroli siber, dan laporan insiden keamanan informasi. |

Dampak ke desain: tidak ada halaman struktur organisasi detail, tidak ada daftar anggota, dan foto kegiatan harus diperiksa agar tidak memperlihatkan layar, perangkat, atau ruang kerja operasional.

### 7.3 Alur Persetujuan Konten

1. Admin/pengelola menyiapkan draf (berita, foto, perubahan halaman).
2. Draf diperiksa dengan **checklist larangan publikasi** (bagian 7.2).
3. **Kasansidam Jaya** menyetujui.
4. Konten dipublikasikan dan tanggal terbit dicatat.

## 8. Rancangan Teknis (Ringkas)

**Arsitektur sederhana tanpa database untuk MVP:**

- **Framework**: Next.js (App Router) + TypeScript.
- **Rendering**: Static Generation (SSG) untuk hampir semua halaman → cepat, murah, aman.
- **Konten**: file Markdown/MDX dan JSON di dalam repo (berita, profil, pimpinan). Mudah diubah dan dilacak lewat Git.
- **Data pimpinan**: disimpan dalam satu file (mis. `pimpinan.json`) agar mudah diganti saat sertijab, tanpa mengubah kode halaman.
- **Kanal kontak**: tautan Instagram dan email umum disimpan di satu file konfigurasi, sehingga seragam di seluruh situs.
- **Styling**: Tailwind CSS.
- **Gambar & logo**: `next/image` untuk optimasi otomatis; logo disimpan di `/public/images/` (idealnya SVG).
- **Desain**: token warna/spasi/tipografi mengikuti `DESIGN.md`, disimpan sebagai CSS variables; font Open Sans dan Poppins via `next/font`.
- **Peta**: embed Google Maps atau OpenStreetMap.
- **Node.js**: dipakai sebagai runtime build/server. API Route hanya diperlukan jika kelak ada formulir kontak.
- **Deploy**: Vercel (termudah) atau VPS/server sendiri dengan Node.js + Nginx.
- **Kualitas**: ESLint, Prettier, dan pengecekan Lighthouse.

**Struktur halaman (sitemap):**

```
/                     Beranda
/profil               Profil Satuan (sejarah, visi-misi, tupoksi, lambang)
/pimpinan             Pimpinan Satuan (Kasansidam Jaya)
/berita               Daftar Berita & Kegiatan
/berita/[slug]        Detail Berita
/galeri               Galeri
/faq                  FAQ (opsional)
/kontak               Kontak & Lokasi
```

## 9. Alur Pengguna Utama

1. Pengguna mencari "Sansidam Jaya" di Google, atau membuka tautan yang dibagikan lewat WhatsApp.
2. Mendarat di beranda → langsung memahami "siapa dan apa" dalam beberapa detik.
3. Menelusuri Profil → Struktur → Berita sesuai kebutuhan.
4. Mendapat kontak/lokasi di halaman Kontak.
5. Membagikan halaman ke orang lain.

## 10. Metrik Keberhasilan

- Pengunjung dapat menemukan jawaban dasar (apa itu Sansidam Jaya, tugasnya, lokasinya) dalam ≤ 3 klik.
- Skor Lighthouse (Performance, Accessibility, SEO) ≥ 90.
- Halaman muncul di hasil pencarian untuk kata kunci nama satuan.
- Jumlah kunjungan dan durasi kunjungan bertumbuh (target ditentukan setelah ada data awal).
- Berita baru diunggah rutin (mis. minimal 2 artikel/bulan).

## 11. Rencana Pengerjaan

| Fase | Kegiatan | Estimasi |
|---|---|---|
| **0. Persiapan** | Finalisasi PRD, kumpulkan konten (teks, foto, logo), konfirmasi nama & wewenang persetujuan | 1 minggu |
| **1. Desain** | Palet warna, tipografi, wireframe, desain halaman utama | 1 minggu |
| **2. Pengembangan** | Setup proyek, komponen, halaman, integrasi konten | 2 minggu |
| **3. Pengujian** | Uji responsif, aksesibilitas, kinerja, tinjau konten | 3–5 hari |
| **4. Peluncuran** | Deploy, domain, HTTPS, submit ke Google Search Console | 2–3 hari |
| **5. Pemeliharaan** | Pembaruan konten & dependensi berkala | Berkelanjutan |

## 12. Risiko

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Konten belum lengkap/tidak tersedia | Peluncuran tertunda | Mulai dengan halaman inti, tambah bertahap |
| Informasi sensitif ikut terpublikasi | Risiko keamanan & reputasi | Proses review/persetujuan konten sebelum tayang |
| Konten tidak diperbarui | Situs terkesan terbengkalai | Tetapkan penanggung jawab & jadwal pembaruan |
| Data pimpinan tidak diperbarui setelah sertijab | Informasi keliru, kredibilitas turun | Jadikan pembaruan halaman Pimpinan bagian dari prosedur sertijab; data di satu file |
| Foto kegiatan tanpa sengaja memperlihatkan layar/perangkat/ruang kerja operasional | Kebocoran informasi sensitif | Checklist pemeriksaan foto sebelum tayang (bagian 7.2) |
| Kinerja lambat karena foto besar | Pengalaman buruk di HP | Optimasi gambar otomatis |
| Kerentanan keamanan | Situs diretas/dideface | HTTPS, update dependensi, hosting terpercaya |

## 13. Pertanyaan Terbuka

**Sudah terjawab:**
- ✅ Nama resmi: **Sansidam Jaya** = Sandi dan Siber Kodam Jaya.
- ✅ Logo Sansidam Jaya dan logo Kodam Jaya sudah tersedia.
- ✅ Deskripsi tugas & fungsi satuan sudah tersedia (lihat bagian 1).
- ✅ Penyetuju konten: **Kasansidam Jaya**.
- ✅ Daftar informasi yang boleh dan dilarang ditampilkan (bagian 7.2).
- ✅ Alamat markas, Instagram resmi, dan email umum sudah ditentukan.

**Masih terbuka:**
1. Siapa pengelola harian situs (menyiapkan draf, mengunggah, memperbarui)?
2. Nama, pangkat, dan foto resmi Kasansidam Jaya saat ini (diisi dari sumber resmi).
3. Apakah ada domain/subdomain resmi yang akan dipakai?
4. Apakah ada versi logo SVG/transparan untuk latar gelap dan panduan warna resmi? (Warna di `DESIGN.md` saat ini diambil dari sampel file logo.)
5. Apakah wajah anggota/peserta pada foto kegiatan boleh ditampilkan, atau ada ketentuan khusus?
6. Apakah butuh dua bahasa (Indonesia & Inggris) sejak awal?
7. Apakah makna logo, sejarah, serta visi-misi sudah tersedia dokumennya?
8. Apakah fitur Edukasi Literasi Siber diinginkan, dan siapa yang menyusun kontennya?
9. Apakah email umum Kodam Jaya masih aktif dan boleh dicantumkan di halaman Sansidam Jaya? Jika ada formulir kontak, apakah diizinkan?

## 14. Lampiran: Checklist Konten yang Perlu Disiapkan

- [x] Nama resmi: Sansidam Jaya (Sandi dan Siber Kodam Jaya)
- [ ] Tagline `[ISI]`
- [x] Logo Sansidam Jaya & logo Kodam Jaya (PNG tersedia; minta SVG/versi transparan jika ada)
- [x] Referensi desain (`DESIGN.md`)
- [ ] Makna logo/lambang `[ISI]`
- [x] Deskripsi tugas & fungsi satuan
- [ ] Sejarah singkat
- [ ] Visi, misi, tugas pokok & fungsi
- [ ] Nama, pangkat, jabatan, dan foto resmi Kasansidam Jaya saat ini
- [x] Alamat markas (Jl. Mayjen Sutoyo No. 5, Cawang, Kramat Jati, Jakarta Timur 13630)
- [ ] Koordinat peta untuk embed
- [x] Instagram Sansidam Jaya, Instagram Persit Ranting 2, email umum Kodam Jaya
- [x] Website induk: kodamjaya-tniad.mil.id
- [ ] Minimal 5–10 foto kegiatan non-operasional berkualitas baik (sudah lolos checklist 7.2)
- [ ] 3–5 artikel/berita awal
- [ ] Daftar FAQ awal

---

## Riwayat Revisi

| Versi | Perubahan |
|---|---|
| 0.1 | Draf awal berdasarkan ide pemilik proyek |
| 0.2 | Konfirmasi nama (Sansidam Jaya = Sandi dan Siber Kodam Jaya); penambahan deskripsi tugas & fungsi; penambahan bagian Identitas Visual berdasarkan logo Sansidam Jaya & Kodam Jaya; fitur Edukasi Literasi Siber; pembatasan konten sensitif persandian/siber; pembaruan pertanyaan terbuka dan checklist |
| 0.3 | Penyetuju konten ditetapkan (Kasansidam Jaya); ditambah bagian 7.2 (informasi yang boleh/dilarang) dan 7.3 (alur persetujuan); halaman Struktur Organisasi diganti menjadi Pimpinan Satuan; kontak dibatasi ke kanal umum; galeri dibatasi ke kegiatan non-operasional; pembaruan risiko, pertanyaan terbuka, dan checklist |
| 0.4 | Ditambah `DESIGN.md` (gabungan referensi SMKN 1 Cibinong + identitas logo); bagian 7.1 dan 8 merujuk ke DESIGN.md; pertanyaan terbuka dan checklist diperbarui |
