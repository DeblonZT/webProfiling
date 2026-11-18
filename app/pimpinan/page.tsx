import Image from "next/image";
import Link from "next/link";
import { UserCheck, Shield, Award, Calendar, ExternalLink } from "lucide-react";
import { leaderData } from "@/data/siteData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pimpinan Satuan - Sansidam Jaya",
  description:
    "Profil Kepala Sandi dan Siber Kodam Jaya (Kasansidam Jaya). Informasi resmi pimpinan satuan di tingkat Mako Kodam Jaya.",
};

export default function PimpinanPage() {
  return (
    <div className="py-12 bg-[#F7F9FB]">
      <div className="container-custom space-y-12">
        {/* Header Title */}
        <div className="border-b border-gray-200 pb-6">
          <span className="text-xs font-bold text-[#C40000] uppercase tracking-wider">
            Struktur Komando
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17252A] mt-1">
            Pimpinan Satuan
          </h1>
          <p className="text-sm sm:text-base text-[#5B5668] mt-2 max-w-3xl">
            Kepala Sandi dan Siber Kodam Jaya (Kasansidam Jaya) selaku komandan badan pelaksana staf
            yang bertanggung jawab langsung kepada Pangdam Jaya/Jayakarta.
          </p>
        </div>

        {/* Leader Profile Card */}
        <div className="bg-white rounded-[10px] border border-[#E1E5E8] shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Foto & Identitas */}
            <div className="lg:col-span-5 bg-[#0B1220] p-8 flex flex-col items-center justify-center text-center text-white border-b lg:border-b-0 lg:border-r border-[#1D2A42]">
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-xl overflow-hidden border-4 border-[#C40000] shadow-2xl mb-6 bg-[#162238]">
                <Image
                  src={leaderData.foto}
                  alt={leaderData.nama}
                  fill
                  className="object-cover"
                  sizes="240px"
                  priority
                />
              </div>

              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#03A9F4]/20 text-[#03A9F4] border border-[#03A9F4]/30 uppercase tracking-wider mb-2">
                Pejabat Aktif
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{leaderData.nama}</h2>
              <p className="text-sm text-gray-300 font-medium mt-1">{leaderData.pangkat}</p>
              <p className="text-xs text-gray-400 mt-2 max-w-xs">{leaderData.jabatan}</p>

              <div className="mt-6 pt-6 border-t border-gray-800 w-full flex justify-center items-center gap-2 text-xs text-gray-400">
                <Calendar className="w-4 h-4 text-[#C40000]" />
                <span>Masa Jabatan: {leaderData.periode}</span>
              </div>
            </div>

            {/* Sambutan & Amanat */}
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#C40000] uppercase tracking-wider">
                  Amanat Kasansidam Jaya
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#17252A] mt-1">
                  Kesiapan Persandian & Pertahanan Siber di Era Transformasi
                </h3>
                <div className="w-16 h-1 bg-[#C40000] mt-2 mb-4"></div>
              </div>

              <div className="space-y-4 text-sm text-[#5B5668] leading-relaxed">
                {leaderData.sambutan.map((paragraf, idx) => (
                  <p key={idx}>{paragraf}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-xs font-bold text-[#17252A] uppercase tracking-wider mb-2">
                  Prinsip Kerja Komando
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#5B5668]">
                  <div className="p-3 bg-[#F7F9FB] rounded border border-[#E1E5E8] flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#C40000]" />
                    <span>Integritas & Kerahasiaan Absolut</span>
                  </div>
                  <div className="p-3 bg-[#F7F9FB] rounded border border-[#E1E5E8] flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#009038]" />
                    <span>Disiplin & Loyalitas Tegak Lurus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ketentuan Kerahasiaan Informasi Struktural (Sesuai PRD Bagian 7.2) */}
        <div className="bg-[#FFF8E7] border-l-4 border-amber-500 p-6 rounded-r-[10px]">
          <h4 className="font-bold text-sm text-amber-900 mb-1">
            Kebijakan Publikasi Struktur Organisasi
          </h4>
          <p className="text-xs text-amber-800 leading-relaxed">
            Sesuai dengan ketentuan pengamanan informasi militer (PRD Pasal 7.2), publikasi struktur
            satuan dibatasi hanya pada profil pejabat Kepala Sandi dan Siber Kodam Jaya (Kasansidam Jaya).
            Susunan staf pelaksana, komandan tim siber teknis, maupun daftar kekuatan personel tidak
            dipublikasikan demi pertimbangan keamanan operasional satuan.
          </p>
        </div>
      </div>
    </div>
  );
}
