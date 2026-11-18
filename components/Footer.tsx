import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Shield, ExternalLink, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] border-t-4 border-[#C40000] text-gray-300">
      {/* Kodam Jaya Affiliation Ribbon */}
      <div className="bg-[#070D18] py-4 border-b border-[#1A263D]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-11 flex-shrink-0">
              <Image
                src="/images/kodam jaya.png"
                alt="Logo Kodam Jaya"
                fill
                className="object-contain"
                sizes="36px"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Badan Pelaksana Staf
              </p>
              <p className="text-sm font-bold text-white">
                Komando Daerah Militer Jayakarta (Kodam Jaya)
              </p>
            </div>
          </div>
          <a
            href="https://kodamjaya-tniad.mil.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded bg-[#009038]/20 border border-[#009038] text-[#F8F000] hover:bg-[#009038]/30 transition-colors"
          >
            <span>Kunjungi Situs Kodam Jaya</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Footer content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full bg-white p-0.5 border border-[#C40000] overflow-hidden flex-shrink-0">
                <Image
                  src="/images/logoSansidamJaya.png"
                  alt="Logo Sansidam Jaya"
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div>
                <h4 className="font-bold text-white text-base uppercase tracking-wider">
                  Sansidam Jaya
                </h4>
                <p className="text-xs text-gray-400">Sandi dan Siber Kodam Jaya</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Membina dan menyelenggarakan fungsi persandian serta pertahanan siber di wilayah Komando
              Daerah Militer Jayakarta demi kedaulatan informasi pertahanan negara.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs bg-[#C40000]/20 border border-[#C40000]/50 text-red-300 px-2.5 py-1 rounded">
                Kerahasiaan & Kedaulatan Informasi
              </span>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#C40000] pl-2.5">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/profil" className="hover:text-[#03A9F4] transition-colors">
                  Profil Satuan & Sejarah
                </Link>
              </li>
              <li>
                <Link href="/pimpinan" className="hover:text-[#03A9F4] transition-colors">
                  Pimpinan (Kasansidam Jaya)
                </Link>
              </li>
              <li>
                <Link href="/tugas-fungsi" className="hover:text-[#03A9F4] transition-colors">
                  Tugas Pokok & Fungsi
                </Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-[#03A9F4] transition-colors">
                  Warta Berita & Kegiatan
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-[#03A9F4] transition-colors">
                  Galeri Dokumentasi
                </Link>
              </li>
              <li>
                <Link href="/literasi-siber" className="hover:text-[#03A9F4] transition-colors">
                  Tips Literasi Keamanan Siber
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#03A9F4] transition-colors">
                  Tanya Jawab (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Kanal Resmi */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#C40000] pl-2.5">
              Kanal Resmi Satuan
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/sansidamjy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-300 hover:text-[#03A9F4] transition-colors"
                >
                  <Camera className="w-4 h-4 text-pink-500" />
                  <span>Instagram: @sansidamjy</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/persit_ranting2sansidam_jaya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-300 hover:text-[#03A9F4] transition-colors"
                >
                  <Camera className="w-4 h-4 text-emerald-400" />
                  <span>Persit Ranting 2 Sansidam</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kodamjayajayakarta@gmail.com"
                  className="flex items-center gap-2.5 text-gray-300 hover:text-[#03A9F4] transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>kodamjayajayakarta@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Markas Komando */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#C40000] pl-2.5">
              Alamat Markas
            </h4>
            <div className="flex gap-2.5 text-sm text-gray-400">
              <MapPin className="w-5 h-5 text-[#C40000] flex-shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed">
                Kompleks Makodam Jaya/Jayakarta
                <br />
                Jl. Mayor Jenderal Sutoyo No. 5, RW. 7, Cawang, Kec. Kramat Jati, Kota Jakarta Timur,
                DKI Jakarta 13630
              </address>
            </div>
            <div className="mt-4">
              <Link
                href="/kontak"
                className="inline-block text-xs font-semibold px-3 py-2 bg-[#1A263D] hover:bg-[#223352] text-white rounded transition-colors"
              >
                Lihat Denah & Petunjuk Arah →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="mt-12 pt-6 border-t border-[#1C2840] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>
            © 2026 Sansidam Jaya — Komando Daerah Militer Jayakarta. Hak Cipta Dilindungi.
          </p>
          <p className="text-gray-400 text-center md:text-right">
            Situs ini hanya memuat profil umum & informasi non-operasional sesuai izin Komando.
          </p>
        </div>
      </div>
    </footer>
  );
}
