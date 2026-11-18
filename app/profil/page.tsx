import Image from "next/image";
import Link from "next/link";
import { Shield, Target, Compass, Award, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil Satuan - Sansidam Jaya",
  description:
    "Mengenal profil, sejarah singkat, visi, misi, serta makna lambang satuan Sansidam Jaya (Sandi dan Siber Kodam Jaya).",
};

export default function ProfilPage() {
  return (
    <div className="py-12 bg-[#F7F9FB]">
      <div className="container-custom space-y-12">
        {/* Header Title */}
        <div className="border-b border-gray-200 pb-6">
          <span className="text-xs font-bold text-[#C40000] uppercase tracking-wider">
            Tentang Satuan
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17252A] mt-1">
            Profil Sansidam Jaya
          </h1>
          <p className="text-sm sm:text-base text-[#5B5668] mt-2 max-w-3xl">
            Sandi dan Siber Kodam Jaya (Sansidam Jaya) adalah badan pelaksana staf di lingkungan
            Markas Komando Daerah Militer Jayakarta yang bertugas membina dan menyelenggarakan fungsi
            persandian serta pertahanan ruang siber.
          </p>
        </div>

        {/* 1. Siapa Kami & Posisi Satuan */}
        <div className="bg-white rounded-[10px] p-8 border border-[#E1E5E8] shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl font-bold text-[#17252A]">
                Kedudukan dan Peran Satuan
              </h2>
              <p className="text-sm text-[#5B5668] leading-relaxed">
                Sebagai bagian integral dari jajaran Kodam Jaya/Jayakarta, Sansidam Jaya mengemban
                tanggung jawab strategis dalam menjamin keamanan sinyal, integritas pesan kedinasan,
                serta ketahanan infrastruktur siber dari ancaman spionase, intersepsi, dan peretasan.
              </p>
              <p className="text-sm text-[#5B5668] leading-relaxed">
                Wilayah pertahanan Kodam Jaya mencakup episentrum pemerintahan dan stabilitas nasional,
                sehingga peran persandian dan ketahanan siber menjadi pilar vital dalam mendukung
                efektivitas komando dan pengendalian (Kodal) Panglima Kodam Jaya.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#17252A]">
                <span className="bg-[#F7F9FB] border border-[#E1E5E8] px-3 py-1.5 rounded-full">
                  📍 Markas: Kompleks Makodam Jaya, Cawang
                </span>
                <span className="bg-[#F7F9FB] border border-[#E1E5E8] px-3 py-1.5 rounded-full">
                  🛡️ Pembinaan: Staf Sandi dan Siber TNI AD
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 rounded-2xl bg-[#0B1220] p-4 flex items-center justify-center border-2 border-[#C40000] shadow-md">
                <Image
                  src="/images/logoSansidamJaya.png"
                  alt="Logo Sansidam Jaya"
                  fill
                  className="object-contain p-2 rounded-xl"
                  sizes="192px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Visi & Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi */}
          <div className="bg-white rounded-[10px] p-8 border border-[#E1E5E8] shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#C40000]/10 flex items-center justify-center text-[#C40000]">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#17252A]">Visi Satuan</h2>
            </div>
            <p className="text-sm text-[#5B5668] leading-relaxed italic border-l-4 border-[#C40000] pl-4 py-2 bg-[#F7F9FB] rounded-r">
              &ldquo;Terwujudnya sistem persandian dan pertahanan siber Kodam Jaya yang profesional,
              tangguh, adaptif, dan modern demi menjamin keamanan kedaulatan informasi serta keutuhan
              wilayah pertahanan Jayakarta.&rdquo;
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-[10px] p-8 border border-[#E1E5E8] shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#009038]/10 flex items-center justify-center text-[#009038]">
                <Compass className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#17252A]">Misi Satuan</h2>
            </div>
            <ul className="space-y-3 text-sm text-[#5B5668]">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#009038] flex-shrink-0 mt-0.5" />
                <span>
                  Menyelenggarakan pengamanan berita kedinasan dan sistem persandian militer secara aman
                  dan berkelanjutan.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#009038] flex-shrink-0 mt-0.5" />
                <span>
                  Membangun kesiapsiagaan dan ketahanan ruang siber terhadap segala bentuk ancaman
                  digital di jajaran Kodam Jaya.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#009038] flex-shrink-0 mt-0.5" />
                <span>
                  Meningkatkan kualitas sumber daya prajurit sandi dan siber yang berintegritas tinggi,
                  disiplin, dan berwawasan teknologi maju.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Makna Lambang Satuan */}
        <div className="bg-white rounded-[10px] p-8 border border-[#E1E5E8] shadow-card">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#C40000] uppercase tracking-wider">
              Identitas Visual
            </span>
            <h2 className="text-2xl font-bold text-[#17252A] mt-1">
              Makna Lambang Sansidam Jaya
            </h2>
            <div className="w-16 h-1 bg-[#C40000] mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-56 h-56 bg-white rounded-full p-2 border-2 border-gray-200 shadow-lg">
                <Image
                  src="/images/logoSansidamJaya.png"
                  alt="Detail Lambang Sansidam Jaya"
                  fill
                  className="object-contain"
                  sizes="224px"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-3">
                <div className="p-3.5 rounded-lg bg-[#F7F9FB] border border-[#E1E5E8]">
                  <h4 className="font-bold text-sm text-[#17252A]">Bentuk Perisai dan Lingkaran</h4>
                  <p className="text-xs text-[#5B5668] mt-1 leading-relaxed">
                    Melambangkan perlindungan kokoh yang menyeluruh (360 derajat) atas seluruh kerahasiaan
                    informasi dan sinyal komando di wilayah teritorial Kodam Jaya.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#F7F9FB] border border-[#E1E5E8]">
                  <h4 className="font-bold text-sm text-[#17252A]">Warna Merah dan Putih</h4>
                  <p className="text-xs text-[#5B5668] mt-1 leading-relaxed">
                    Menegaskan kesetiaan tulus tanpa pamrih pada Negara Kesatuan Republik Indonesia,
                    berlandaskan Sapta Marga dan Sumpah Prajurit.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#F7F9FB] border border-[#E1E5E8]">
                  <h4 className="font-bold text-sm text-[#17252A]">Aksen Hitam dan Elemen Sandi</h4>
                  <p className="text-xs text-[#5B5668] mt-1 leading-relaxed">
                    Mencerminkan keteguhan sifat persandian: senyap, rahasia, teliti, dan menjadi kunci
                    keberhasilan operasional militer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Bagian dari Kodam Jaya Banner */}
        <div className="bg-[#0B1220] rounded-xl text-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-l-8 border-[#009038]">
          <div className="space-y-1">
            <h3 className="text-lg font-bold">Satuan di Jajaran Kodam Jaya / Jayakarta</h3>
            <p className="text-xs text-gray-300 max-w-xl">
              Sansidam Jaya berkoordinasi erat dengan staf operasi, intelijen, dan perhubungan Kodam Jaya
              dalam menjaga keandalan komunikasi pimpinan dan pertahanan teritori digital.
            </p>
          </div>
          <Link
            href="/tugas-fungsi"
            className="px-5 py-2.5 rounded bg-[#C40000] hover:bg-[#a30000] text-xs font-semibold text-white transition-colors flex-shrink-0"
          >
            Pelajari Tugas & Fungsi →
          </Link>
        </div>
      </div>
    </div>
  );
}
