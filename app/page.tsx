import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Lock,
  Cpu,
  ChevronRight,
  ExternalLink,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { articlesData, leaderData } from "@/data/siteData";
import BannerSlideshow from "@/components/BannerSlideshow";

export default function HomePage() {
  const latestArticles = articlesData.slice(0, 3);

  const heroSlides = [
    { src: "/images/slide 1.png", alt: "Sansidam Jaya Slide 1" },
    { src: "/images/slide 2.jpg", alt: "Sansidam Jaya Slide 2" },
    { src: "/images/slide 3.png", alt: "Sansidam Jaya Slide 3" },
    { src: "/images/slide 4.jpg", alt: "Sansidam Jaya Slide 4" },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION WITH TOP-LEFT TO BOTTOM-RIGHT PAN SLIDESHOW */}
      <section className="relative bg-[#0B1220] text-white pt-16 pb-24 lg:pt-20 lg:pb-32 overflow-hidden border-b border-[#1A263D] min-h-[580px] flex items-center">
        {/* Slideshow background */}
        <BannerSlideshow slides={heroSlides} intervalMs={6500} />

        <div className="container-custom relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C40000]/20 border border-[#C40000] text-xs font-semibold uppercase tracking-wider text-red-200">
                <span className="w-2 h-2 rounded-full bg-[#C40000] animate-ping"></span>
                <span>Satuan Sandi dan Siber Kodam Jaya</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Garda Pengaman Persandian & Pertahanan Siber{" "}
                <span className="text-[#03A9F4] block mt-1">Kodam Jaya / Jayakarta</span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Badan pelaksana staf di tingkat Markas Komando Daerah Militer Jayakarta yang bertugas
                membina dan menyelenggarakan fungsi persandian militer serta kesiapsiagaan pertahanan
                ruang siber di wilayah Ibukota Jakarta dan sekitarnya.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  href="/profil"
                  className="px-6 py-3 rounded-md bg-[#C40000] hover:bg-[#a30000] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <span>Mengenal Sansidam Jaya</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/tugas-fungsi"
                  className="px-6 py-3 rounded-md bg-[#1C2942] hover:bg-[#283b5e] border border-gray-700 text-gray-200 hover:text-white font-semibold text-sm transition-all duration-200"
                >
                  Tugas Pokok & Fungsi
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-gray-800 grid grid-cols-3 gap-4 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#009038] flex-shrink-0" />
                  <span>Kerahasiaan Berita</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#03A9F4] flex-shrink-0" />
                  <span>Ketahanan Siber</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Wilayah Kodam Jaya</span>
                </div>
              </div>
            </div>

            {/* Right Hero Badge / Logo Presentation */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#C40000] via-[#03A9F4] to-[#009038] rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-white p-4 flex items-center justify-center shadow-2xl border-4 border-[#0B1220]">
                  <Image
                    src="/images/logoSansidamJaya.png"
                    alt="Lambang Sansidam Jaya"
                    fill
                    className="object-contain p-2"
                    sizes="288px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BAGIAN DARI KODAM JAYA (Affiliation Ribbon Box) */}
      <section className="bg-white border-b border-[#E1E5E8] py-8">
        <div className="container-custom">
          <div className="bg-[#F7F9FB] border border-[#E1E5E8] rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-20 flex-shrink-0">
                <Image
                  src="/images/kodam jaya.png"
                  alt="Logo Kodam Jaya Jayakarta"
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-[#009038] uppercase tracking-wider">
                  Kedudukan & Komando
                </span>
                <h3 className="text-lg font-bold text-[#17252A]">
                  Badan Pelaksana Staf Komando Daerah Militer Jayakarta
                </h3>
                <p className="text-sm text-[#5B5668]">
                  Berada langsung di bawah komando Pangdam Jaya/Jayakarta dalam menyelenggarakan
                  pengamanan informasi persandian dan teknologi siber pertahanan.
                </p>
              </div>
            </div>

            <a
              href="https://kodamjaya-tniad.mil.id/satuan_kodam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-md bg-[#009038] text-white hover:bg-[#00732c] transition-colors shadow-sm"
            >
              <span>Satuan Kodam Jaya</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. TIGA PILAR PERAN & FUNGSI (CARD GRID) */}
      <section className="py-16 bg-[#F7F9FB]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#C40000] text-xs font-bold uppercase tracking-wider">
              Tupoksi Utama
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17252A] mt-1">
              Fungsi Pokok Sansidam Jaya
            </h2>
            <div className="w-16 h-1 bg-[#C40000] mx-auto mt-3 mb-3"></div>
            <p className="text-sm text-[#5B5668]">
              Melaksanakan pembinaan dan penyelenggaraan sistem pengamanan komunikasi serta pertahanan
              ruang siber di seluruh jajaran Kodam Jaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pilar 1 */}
            <div className="bg-white rounded-[10px] p-6 border border-[#E1E5E8] shadow-card shadow-card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#C40000]/10 flex items-center justify-center text-[#C40000] mb-5">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#17252A] mb-2">
                  Pengamanan Persandian
                </h3>
                <p className="text-sm text-[#5B5668] leading-relaxed">
                  Menyelenggarakan tata kelola persandian kedinasan, perlindungan sinyal, dan
                  kerahasiaan komunikasi militer untuk mencegah penyadapan maupun kebocoran informasi.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href="/tugas-fungsi"
                  className="text-xs font-semibold text-[#026E9F] hover:underline inline-flex items-center gap-1"
                >
                  Pelajari selengkapnya →
                </Link>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="bg-white rounded-[10px] p-6 border border-[#E1E5E8] shadow-card shadow-card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#03A9F4]/10 flex items-center justify-center text-[#026E9F] mb-5">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#17252A] mb-2">
                  Pertahanan Ruang Siber
                </h3>
                <p className="text-sm text-[#5B5668] leading-relaxed">
                  Melakukan pemantauan ketahanan sistem jaringan, tanggap insiden siber internal, dan
                  memastikan integritas perangkat teknologi informasi Kodam Jaya tetap aman.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href="/tugas-fungsi"
                  className="text-xs font-semibold text-[#026E9F] hover:underline inline-flex items-center gap-1"
                >
                  Pelajari selengkapnya →
                </Link>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="bg-white rounded-[10px] p-6 border border-[#E1E5E8] shadow-card shadow-card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#009038]/10 flex items-center justify-center text-[#009038] mb-5">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#17252A] mb-2">
                  Pembinaan & Literasi
                </h3>
                <p className="text-sm text-[#5B5668] leading-relaxed">
                  Membina kompetensi teknis sumber daya manusia di bidang persandian serta
                  mensosialisasikan kesadaran etika dan literasi keamanan digital bagi keluarga besar TNI.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href="/literasi-siber"
                  className="text-xs font-semibold text-[#026E9F] hover:underline inline-flex items-center gap-1"
                >
                  Edukasi literasi siber →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAMBUTAN SINGKAT PIMPINAN */}
      <section className="py-16 bg-white border-y border-[#E1E5E8]">
        <div className="container-custom">
          <div className="bg-[#0B1220] rounded-xl text-white overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-4 bg-[#142036] p-8 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-[#1E2E4A]">
                <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-[#C40000] mb-4 shadow-lg bg-[#0B1220]">
                  <Image
                    src={leaderData.foto}
                    alt="Kasansidam Jaya"
                    fill
                    className="object-cover"
                    sizes="176px"
                  />
                </div>
                <span className="text-xs font-bold text-[#03A9F4] uppercase tracking-wider">
                  Pimpinan Satuan
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{leaderData.nama}</h3>
                <p className="text-xs text-gray-300 mt-0.5">{leaderData.jabatan}</p>
                <div className="mt-4">
                  <Link
                    href="/pimpinan"
                    className="inline-block text-xs font-semibold px-4 py-2 rounded bg-[#C40000] hover:bg-[#a30000] text-white transition-colors"
                  >
                    Profil Pimpinan →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-8 p-8 lg:p-12 space-y-4">
                <span className="text-[#C40000] text-xs font-bold uppercase tracking-wider">
                  Pesan Komando
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Menjaga Integritas Komunikasi Demi Kedaulatan Negara
                </h3>
                <blockquote className="text-gray-300 text-sm sm:text-base leading-relaxed italic border-l-2 border-[#C40000] pl-4">
                  &ldquo;Di tengah pesatnya dinamika siber dan perang informasi global, komitmen
                  Sansidam Jaya adalah menghadirkan ketahanan persandian yang kokoh, terpercaya, dan
                  selalu siap mendukung setiap tugas komando Kodam Jaya.&rdquo;
                </blockquote>
                <p className="text-xs text-gray-400">
                  Transparansi informasi profil ini disajikan secara resmi sebagai sarana literasi
                  bagi masyarakat dan mitra pertahanan tanpa mengurangi kepatuhan pada standar kerahasiaan
                  militer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BERITA & KEGIATAN TERBARU */}
      <section className="py-16 bg-[#F7F9FB]">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[#C40000] text-xs font-bold uppercase tracking-wider">
                Dokumentasi Publik
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#17252A] mt-1">
                Warta & Kegiatan Terbaru
              </h2>
              <div className="w-16 h-1 bg-[#C40000] mt-2"></div>
            </div>

            <Link
              href="/berita"
              className="text-sm font-semibold text-[#026E9F] hover:text-[#0B1220] inline-flex items-center gap-1 transition-colors"
            >
              Lihat Semua Warta →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <div
                key={article.slug}
                className="bg-white rounded-[10px] overflow-hidden border border-[#E1E5E8] shadow-card shadow-card-hover flex flex-col"
              >
                <div className="relative h-48 w-full bg-[#0B1220]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 bg-[#0B1220]/80 text-[#03A9F4] text-xs font-semibold px-2.5 py-1 rounded">
                    {article.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </div>

                    <h3 className="font-bold text-[#17252A] text-base mb-2 line-clamp-2 hover:text-[#026E9F]">
                      <Link href={`/berita/${article.slug}`}>{article.title}</Link>
                    </h3>

                    <p className="text-xs text-[#5B5668] line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <Link
                      href={`/berita/${article.slug}`}
                      className="text-xs font-semibold text-[#026E9F] hover:underline inline-flex items-center gap-1"
                    >
                      Baca selengkapnya →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION EDUKASI SIBER */}
      <section className="bg-[#0B1220] py-14 text-white border-t border-[#1C2840]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#111C30] to-[#17253D] p-8 rounded-xl border border-gray-800">
            <div className="space-y-2 max-w-xl">
              <span className="text-[#03A9F4] text-xs font-bold uppercase tracking-wider">
                Edukasi & Kewaspadaan Digital
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Tingkatkan Kesadaran Keamanan Data & Privasi
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Pelajari kiat-kiat praktis menghindari phising, menjaga kata sandi, dan melindungi gawai
                pribadi dari rekayasa sosial di ruang digital.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/literasi-siber"
                className="px-6 py-3 rounded-md bg-[#C40000] hover:bg-[#a30000] text-white font-semibold text-sm transition-all shadow-md inline-block"
              >
                Buka Panduan Literasi Siber
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
