import Link from "next/link";
import { Shield, Lock, Cpu, Server, Network, FileCheck, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tugas Pokok & Fungsi - Sansidam Jaya",
  description:
    "Penjelasan peran dan fungsi Sansidam Jaya dalam menyelenggarakan persandian militer dan pertahanan siber di wilayah Kodam Jaya.",
};

export default function TugasFungsiPage() {
  const tugasPokok = [
    {
      title: "Penyelenggaraan Persandian Militer",
      desc: "Menjamin terselenggaranya pengamanan berita, dokumen, serta komunikasi komando dan kendali secara terenkripsi di lingkungan Kodam Jaya.",
      icon: Lock,
      color: "text-[#C40000]",
      bg: "bg-[#C40000]/10",
    },
    {
      title: "Pertahanan & Pengawasan Siber Teritori",
      desc: "Memonitor sistem teknologi komunikasi dari ancaman penyusupan, malware, defacement, dan intrusi jaringan siber yang dapat mengganggu operasi satuan.",
      icon: Shield,
      color: "text-[#026E9F]",
      bg: "bg-[#03A9F4]/10",
    },
    {
      title: "Pembinaan Personel & Komando Teknis",
      desc: "Melaksanakan pendidikan, pelatihan berkesinambungan, dan sertifikasi keahlian teknologi sandi dan informatika militer bagi prajurit.",
      icon: Cpu,
      color: "text-[#009038]",
      bg: "bg-[#009038]/10",
    },
  ];

  const fungsiUtama = [
    {
      title: "Pengamanan Komunikasi Sinyal (Comsec)",
      points: [
        "Penyaluran berita sandi kawat dan radio komunikasi kedinasan.",
        "Pengelolaan kunci kriptografi militer secara ketat.",
        "Pencegahan kebocoran informasi pada jalur transmisi data.",
      ],
    },
    {
      title: "Keamanan Sistem & Informasi (Infosec)",
      points: [
        "Audit berkala kesiapan proteksi gawai dan komputer dinas.",
        "Penerapan standar operasional prosedur penanganan insiden siber.",
        "Pemulihan cepat terhadap gangguan integritas data dinas.",
      ],
    },
    {
      title: "Sosialisasi Kesadaran Keamanan (Awareness)",
      points: [
        "Edukasi literasi siber untuk seluruh staf dan prajurit Kodam Jaya.",
        "Bimbingan etika pemanfaatan media sosial bagi keluarga prajurit.",
        "Simulasi tanggap darurat serangan phishing dan rekayasa sosial.",
      ],
    },
  ];

  return (
    <div className="py-12 bg-[#F7F9FB]">
      <div className="container-custom space-y-12">
        {/* Header Title */}
        <div className="border-b border-gray-200 pb-6">
          <span className="text-xs font-bold text-[#C40000] uppercase tracking-wider">
            Akuntabilitas & Peran
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17252A] mt-1">
            Tugas Pokok & Fungsi
          </h1>
          <p className="text-sm sm:text-base text-[#5B5668] mt-2 max-w-3xl">
            Sansidam Jaya bertindak sebagai badan pelaksana staf di tingkat Mako Kodam Jaya yang
            membina dan menyelenggarakan fungsi persandian serta pertahanan siber di wilayah Kodam
            Jaya/Jayakarta.
          </p>
        </div>

        {/* 1. Tiga Tugas Pokok Utama */}
        <div>
          <h2 className="text-xl font-bold text-[#17252A] mb-6">Tugas Pokok Satuan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tugasPokok.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[10px] p-6 border border-[#E1E5E8] shadow-card flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center ${item.color} mb-5`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#17252A] mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5B5668] leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-[#009038]" />
                    <span>Sesuai Doktrin TNI AD</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Rincian Fungsi Satuan */}
        <div className="bg-white rounded-[10px] p-8 border border-[#E1E5E8] shadow-card space-y-6">
          <div>
            <h2 className="text-xl font-bold text-[#17252A]">Rincian Fungsi Pelaksana</h2>
            <div className="w-16 h-1 bg-[#C40000] mt-2"></div>
            <p className="text-xs sm:text-sm text-[#5B5668] mt-2">
              Diterjemahkan secara umum agar dapat dipahami publik tanpa memaparkan aspek teknis
              operasional rahasia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {fungsiUtama.map((f, idx) => (
              <div key={idx} className="p-5 rounded-lg bg-[#F7F9FB] border border-[#E1E5E8] space-y-3">
                <h4 className="font-bold text-sm text-[#17252A]">{f.title}</h4>
                <ul className="space-y-2 text-xs text-[#5B5668]">
                  {f.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-[#C40000] font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Catatan Kerahasiaan & Regulasi */}
        <div className="bg-[#0B1220] rounded-xl text-white p-8 border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-lg font-bold">Kepatuhan Kerahasiaan Informasi</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Seluruh pelaksanaan teknis persandian, topologi jaringan pertahanan, dan prosedur sandi
              tunduk pada undang-undang intelijen negara serta peraturan pengamanan informasi rahasia
              militer.
            </p>
          </div>
          <Link
            href="/literasi-siber"
            className="px-5 py-2.5 rounded bg-[#03A9F4] hover:bg-[#0288d1] text-xs font-semibold text-black transition-colors flex-shrink-0"
          >
            Baca Edukasi Siber Publik →
          </Link>
        </div>
      </div>
    </div>
  );
}
