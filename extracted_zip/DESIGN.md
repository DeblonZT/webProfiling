---
version: 0.1
name: Sansidam Jaya
description: |
  Design system website profil Sansidam Jaya (Sandi dan Siber Kodam Jaya).
  Struktur, tipografi, spacing, dan pola komponen mengadopsi referensi
  profile.smkn1cibinong.sch.id (header gelap, kanvas terang, hero foto dengan
  overlay, kartu bersudut 10px). Palet warna disesuaikan dengan identitas
  logo Sansidam Jaya (abu-hitam, merah, putih) dan Kodam Jaya (hijau, kuning).
  Aksen cyan dipertahankan sebagai penanda interaktif karena selaras dengan
  nuansa siber.
reference:
  url: "https://profile.smkn1cibinong.sch.id/"
  usage: "Acuan struktur & pola komponen, bukan salinan visual"
colors:
  # Brand (diambil dari logo Sansidam Jaya)
  brand-black: "#0B1220"        # band header & footer (gabungan navy referensi + hitam logo)
  brand-charcoal: "#333333"     # tombol sekunder, warna primer referensi
  brand-red: "#C40000"          # aksen utama/CTA (versi gelap dari merah logo #F80000, lolos kontras AA)
  brand-red-logo: "#F80000"     # merah asli logo; hanya untuk elemen dekoratif/besar
  # Identitas Kodam Jaya (hanya untuk bagian "Bagian dari Kodam Jaya")
  kodam-green: "#009038"
  kodam-gold: "#F8F000"
  # Interaktif / siber
  link: "#026E9F"               # tautan di latar terang (kontras 5.3:1)
  link-on-dark: "#03A9F4"       # tautan di latar gelap (cyan referensi)
  # Netral
  canvas: "#F7F9FB"
  surface: "#FFFFFF"
  ink: "#17252A"
  body: "#5B5668"               # sedikit lebih gelap dari referensi (#716C80) demi keterbacaan
  muted: "#CCCCCC"              # hanya untuk garis/border, bukan teks
  border: "#E1E5E8"
  info: "#58468C"
typography:
  fontFamily:
    primary: "Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    heading-accent: "Poppins, 'Segoe UI', sans-serif"
  display-lg: { size: "clamp(2rem, 5vw, 3.375rem)", weight: 700, lineHeight: 1.2 }
  display-md: { size: "clamp(1.625rem, 3.5vw, 2.625rem)", weight: 600, lineHeight: 1.15 }
  heading-sm: { family: Poppins, size: 22px, weight: 500, lineHeight: 1.25 }
  heading-xs: { size: 20px, weight: 600, lineHeight: 1.5 }
  body-lg: { size: 18px, weight: 400, lineHeight: 1.6 }
  body-md: { size: 16px, weight: 400, lineHeight: 1.6 }
  body-sm: { size: 14px, weight: 400, lineHeight: 1.5 }
  nav: { size: 15px, weight: 500, lineHeight: 1.2 }
  button: { size: 15px, weight: 600, lineHeight: 1.2 }
rounded: { none: 0px, xs: 4px, sm: 5px, md: 10px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 32px, xxl: 36px, xxxl: 40px, section: 52px, band: 56px }
shadows:
  card: "rgba(0, 0, 0, 0.1) 9.899px 9.899px 30px 0px"
  dropdown: "rgba(0, 0, 0, 0.16) 0px 10px 20px 0px"
layout:
  containerMax: 1200px
  sectionPaddingX: { mobile: 16px, desktop: 24px }
  gridColumns: { mobile: 1, tablet: 2, desktop: 3 }
breakpoints: { sm: 375px, md: 768px, lg: 1024px, xl: 1280px }
---

# Design System: Sansidam Jaya

## 1. Konsep Visual

**Kesan yang dituju:** tegas, rapi, kredibel, dan tetap ramah bagi masyarakat umum. Situs harus terasa seperti kanal resmi institusi, bukan situs militer yang menakutkan, juga bukan situs teknologi yang dingin.

**Hasil penggabungan dengan referensi:**

| Elemen | Dari referensi SMKN 1 Cibinong | Penyesuaian untuk Sansidam Jaya |
|---|---|---|
| Header | Band gelap + menu | Band `brand-black`; logo Sansidam Jaya ditempatkan pada plat putih/bulat karena logo berlatar terang |
| Hero | Foto + overlay gelap + judul putih besar | Sama; foto kegiatan non-operasional yang sudah disetujui. Jika belum ada foto, pakai latar gradasi gelap dengan pola jaringan halus |
| Kanvas | Putih keabuan `#F7F9FB` | Sama |
| Font | Open Sans (+ Poppins) | Sama; Roboto/Lato/Arial dihapus agar konsisten |
| Kartu | Radius 10px + bayangan lembut | Sama |
| Aksen interaktif | Cyan | Dipertahankan, dengan versi lebih gelap untuk teks di latar terang |
| Tombol utama | Charcoal | CTA utama **merah** (dari logo); charcoal untuk tombol sekunder |
| Spacing | Skala 4–56px | Sama |

**Peran warna (agar tidak ramai):**
- **Hitam/abu-hitam**: struktur (header, footer, teks judul). Dominan.
- **Merah**: aksen kecil dan CTA (garis di bawah judul, label, tombol utama). Jangan dipakai sebagai latar luas.
- **Cyan/biru**: hanya untuk tautan dan elemen interaktif (menandakan sisi siber).
- **Hijau & kuning**: hanya pada blok "Bagian dari Kodam Jaya" dan logo Kodam Jaya.

## 2. Warna

| Token | Hex | Penggunaan |
|---|---|---|
| `brand-black` | `#0B1220` | Header, footer, overlay hero |
| `brand-charcoal` | `#333333` | Tombol sekunder, ikon |
| `brand-red` | `#C40000` | CTA utama, aksen garis/label |
| `brand-red-logo` | `#F80000` | Dekoratif saja (kontras teks putih 4,2:1, di bawah AA untuk teks kecil) |
| `kodam-green` / `kodam-gold` | `#009038` / `#F8F000` | Blok Kodam Jaya saja |
| `link` | `#026E9F` | Tautan di latar terang |
| `link-on-dark` | `#03A9F4` | Tautan di latar gelap |
| `canvas` | `#F7F9FB` | Latar halaman |
| `surface` | `#FFFFFF` | Kartu |
| `ink` | `#17252A` | Judul, teks utama |
| `body` | `#5B5668` | Paragraf |
| `border` | `#E1E5E8` | Garis pemisah, border kartu |

Catatan: nilai merah, hijau, dan kuning diambil dari sampel warna dominan pada file logo. Jika tersedia pedoman warna resmi satuan, nilai tersebut menggantikan sampel ini.

## 3. Tipografi

- **Font utama:** Open Sans (via `next/font/google`, `display: swap`).
- **Font judul kartu:** Poppins (hanya untuk judul kartu/seksi kecil).
- Judul hero memakai `clamp()` agar menyusut di HP (referensi memakai 54px tetap, yang terlalu besar di layar 375px).
- Paragraf 16px, line-height 1.6. Teks tidak boleh di bawah 14px.

## 4. Komponen

**Header / Navigasi**
- Tinggi 64–72px, latar `brand-black`, teks putih 15px/500.
- Menu: Beranda · Profil · Tugas & Fungsi · Pimpinan · Berita · Galeri · Kontak.
- Di bawah 1024px menu menjadi hamburger. Item aktif ditandai garis merah 3px di bawah teks.
- Hover: teks `link-on-dark`. Fokus keyboard: outline 2px `link-on-dark`.

**Tombol**
- *Primary*: latar `brand-red`, teks putih, radius 5px, padding 14px 28px, tinggi min 44px. Hover: `#9E0000`.
- *Secondary*: latar `brand-charcoal`, teks putih. Hover: `#111111`.
- *Outline*: border 2px `link`, teks `link`, latar transparan. Hover: latar `link`, teks putih.
- *Outline on dark* (di hero): border 2px putih, teks putih. Hover: latar putih, teks `brand-black`.
- Semua tombol: min-height 44px, state fokus terlihat jelas.

**Kartu** (berita, tugas & fungsi, pimpinan)
- Latar putih, radius 10px, `shadow card`, padding 16–24px.
- Kartu berita: gambar rasio 16:9 di atas, tanggal (body-sm, `body`), judul (heading-xs), kutipan 2–3 baris, tautan "Baca selengkapnya" (`link`).
- Kartu tugas & fungsi: ikon dalam lingkaran tipis, judul, deskripsi singkat.

**Kartu Pimpinan**
- Foto resmi, nama, pangkat, jabatan "Kasansidam Jaya". Hanya satu orang, ditata di tengah. Tanpa kontak pribadi.

**Label/Badge**
- Teks kecil kapital 13px dengan garis merah pendek di depan, untuk kategori berita atau penanda seksi.

**Footer**
- Latar `brand-black`, teks putih/abu muda.
- Kolom: identitas (logo + nama), tautan cepat, kontak umum (alamat markas, Instagram, email umum), blok **"Bagian dari Kodam Jaya"** (logo Kodam Jaya + tautan ke kodamjaya-tniad.mil.id).

## 5. Layout & Spacing

- Container maksimum 1200px, di tengah. Padding horizontal 16px (HP) dan 24px (desktop). Referensi memakai 10px; dinaikkan agar teks tidak terlalu mepet tepi layar.
- Jarak antarbagian: `section` 52px (HP) hingga `band` 56px–80px (desktop). Pemisahan dengan ruang kosong, bukan garis.
- Grid kartu: 1 kolom (HP), 2 kolom (tablet), 3 kolom (desktop).
- Skala spacing hanya: 4, 8, 12, 16, 20, 32, 36, 40, 52, 56px.

## 6. Elevasi

Hanya dua tingkat: **card** (kartu, panel) dan **dropdown** (menu mobile, tooltip). Header dan teks tetap datar.

## 7. Responsif

| Lebar | Perilaku |
|---|---|
| 375–767px | 1 kolom, menu hamburger, hero tinggi ±70vh, tombol lebar penuh |
| 768–1023px | 2 kolom kartu, menu hamburger |
| ≥1024px | 3 kolom kartu, menu horizontal |

Pendekatan **mobile-first**. Uji minimal pada 360px, 768px, 1024px, dan 1440px.

## 8. Penyesuaian terhadap Referensi (dan Alasannya)

Beberapa nilai referensi tidak memenuhi target aksesibilitas PRD (WCAG 2.1 AA), jadi diubah:

| Referensi | Masalah | Perubahan |
|---|---|---|
| Tautan `#03A9F4` di latar terang | Kontras ±2,6:1 (di bawah 4,5:1) | `#026E9F` untuk latar terang; cyan hanya di latar gelap |
| Tombol putih di atas `rgb(64,139,209)`, teks 13px | Kontras ±3,6:1 | Tombol memakai merah gelap/charcoal/`link` |
| Teks `#CCCCCC` sebagai teks tersier | Kontras terlalu rendah | `#CCCCCC` hanya untuk garis |
| Tombol kecil tinggi 33,5px | Di bawah target sentuh 44px | Tinggi minimum 44px |
| Judul 54px tetap di semua layar | Terlalu besar di HP | `clamp()` |
| Banyak font (Roboto, Lato, Arial) | Tidak konsisten | Hanya Open Sans + Poppins |
| Border hitam murni `#000` | Terlalu keras | `#E1E5E8` |

## 9. Cetak Biru Halaman

**Beranda**
1. Header
2. Hero: foto + overlay, judul "Sansidam Jaya", sub "Sandi dan Siber Kodam Jaya", dua tombol (Tentang Kami, Hubungi Kami)
3. Tentang singkat + tautan ke Profil
4. Tugas & Fungsi (3–4 kartu ringkas)
5. Pimpinan Satuan (satu kartu)
6. Berita terbaru (3 kartu)
7. Galeri pilihan (grid 6 foto)
8. Kontak & peta
9. Footer dengan blok "Bagian dari Kodam Jaya"

**Halaman dalam** (Profil, Tugas & Fungsi, Pimpinan, Berita, Galeri, Kontak): banner judul gelap pendek + breadcrumb, lalu konten pada container 800–1200px.

## 10. Penggunaan Logo

- Logo Sansidam Jaya: di header dalam plat putih/bulat, tinggi 44–48px; di hero dan footer dalam ukuran lebih besar.
- Logo Kodam Jaya: hanya di footer dan blok Kodam Jaya.
- Jangan ubah proporsi, warna, atau beri efek pada logo.
- Beri ruang bebas minimal selebar ¼ tinggi logo.
- Jika memungkinkan, minta versi **SVG** dan versi **transparan/terang** untuk latar gelap.
- Favicon dan gambar Open Graph dibuat dari logo Sansidam Jaya.

## 11. Implementasi di Next.js

Token disimpan sebagai CSS variables (kompatibel dengan Tailwind) di `app/globals.css`:

```css
:root {
  --brand-black: #0B1220;
  --brand-charcoal: #333333;
  --brand-red: #C40000;
  --kodam-green: #009038;
  --kodam-gold: #F8F000;
  --link: #026E9F;
  --link-on-dark: #03A9F4;
  --canvas: #F7F9FB;
  --surface: #FFFFFF;
  --ink: #17252A;
  --body: #5B5668;
  --border: #E1E5E8;
  --radius-card: 10px;
  --shadow-card: 9.899px 9.899px 30px 0 rgba(0, 0, 0, 0.1);
}
```

Font:

```ts
// app/layout.tsx
import { Open_Sans, Poppins } from "next/font/google";
const openSans = Open_Sans({ subsets: ["latin"], display: "swap", variable: "--font-open-sans" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500"], display: "swap", variable: "--font-poppins" });
```

Struktur komponen yang disarankan: `Header`, `Footer`, `Hero`, `PageBanner`, `Button`, `Card`, `NewsCard`, `LeaderCard`, `GalleryGrid`, `ContactBlock`, `KodamBlock`.

## 12. Do & Don't

**Do**
- Gunakan hitam/abu-hitam sebagai warna dominan; merah sebagai aksen kecil.
- Pakai `link` (`#026E9F`) untuk tautan di latar terang.
- Beri ruang kosong yang lega antarbagian.
- Pastikan setiap gambar punya teks alternatif.
- Periksa setiap foto galeri agar tidak memperlihatkan layar, perangkat, atau ruang kerja operasional (lihat PRD bagian 7.2).

**Don't**
- Jangan jadikan merah latar luas (terkesan agresif).
- Jangan pakai hijau/kuning di luar blok Kodam Jaya.
- Jangan gunakan efek "hacker" (hijau neon, kode berjalan, glitch) yang menyiratkan detail teknis atau mengganggu keterbacaan.
- Jangan tambah bayangan selain dua tingkat.
- Jangan pakai teks di bawah 14px.

## 13. Hal yang Belum Ditentukan

- Foto hero dan galeri (menunggu materi yang disetujui Kasansidam Jaya).
- Versi logo SVG/transparan.
- Tema gelap (opsional, versi berikutnya). Jika dibuat: latar `#091116`, permukaan `#181F24`, teks `#F5FCFF`, tautan `#03A9F4`.
- Ikon: disarankan satu set tunggal (mis. Lucide) dengan ukuran 24px.
- Animasi: hanya transisi halus (150–200ms) untuk hover dan menu; hormati `prefers-reduced-motion`.
