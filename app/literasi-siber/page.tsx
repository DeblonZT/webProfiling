import Link from "next/link";
import { ShieldAlert, KeyRound, Wifi, Smartphone, CheckCircle2, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Literasi & Edukasi Siber - Sansidam Jaya",
  description:
    "Panduan praktis kewaspadaan keamanan informasi dan etika digital untuk masyarakat umum dan keluarga besar Kodam Jaya.",
};

export default function LiterasiSiberPage() {
  const tipsKeamanan = [
    {
      title: "Kenali Modus Phishing & Rekayasa Sosial",
      icon: ShieldAlert,
      color: "text-[#C40000]",
      bg: "bg-[#C40000]/10",
      desc: "Jangan mudah percaya pada pesan singkat WhatsApp, SMS, atau email yang mengatasnamakan kurir paket (file APK), instansi resmi, atau perbankan dengan tautan tidak jelas.",
      points: [
        "Periksa alamat email pengirim dan URL website secara teliti.",
        "Jangan pernah menginstal file berekstensi .apk dari sumber tak resmi.",
        "Aparat atau pihak resmi tidak pernah meminta kata sandi / OTP Anda.",
      ],
    },
    {
      title: "Gunakan Kata Sandi Kuat & Autentikasi 2FA",
      icon: KeyRound,
      color: "text-[#026E9F]",
      bg: "bg-[#03A9F4]/10",
      desc: "Kunci utama keamanan akun digital pribadi adalah kombinasi kata sandi yang kompleks dan aktivasi verifikasi dua langkah (Two-Factor Authentication).",
      points: [
        "Gunakan minimal 12 karakter kombinasi huruf besar, kecil, angka, dan simbol.",
        "Hindari menggunakan tanggal lahir atau nama anggota keluarga.",
        "Aktifkan Google Authenticator atau verifikasi OTP di semua akun penting.",
      ],
    },
    {
      title: "Waspada Jaringan Wi-Fi Publik Terbuka",
      icon: Wifi,
      color: "text-amber-600",
      bg: "bg-amber-500/10",
      desc: "Jaringan Wi-Fi gratis tanpa sandi di ruang publik rawan penyadapan (man-in-the-middle attack) yang dapat mencegat data penting Anda.",
      points: [
        "Hindari membuka mobile banking saat terhubung ke Wi-Fi publik.",
        "Gunakan VPN terpercaya jika terpaksa menggunakan jaringan umum.",
        "Matikan fitur auto-connect Wi-Fi pada perangkat gawai Anda.",
      ],
    },
    {
      title: "Perbarui Sistem Operasi & Aplikasi Rutin",
      icon: Smartphone,
      color: "text-[#009038]",
      bg: "bg-[#009038]/10",
      desc: "Pembaruan (update) perangkat lunak tidak hanya memberikan fitur baru, tetapi juga menutup celah keamanan (patch vulnerability) yang sering dieksploitasi peretas.",
      points: [
        "Segera instal update keamanan Android, iOS, maupun Windows.",
        "Hapus aplikasi yang sudah tidak terpakai dari smartphone Anda.",
        "Pasang hanya aplikasi dari Google Play Store atau Apple App Store.",
      ],
    },
  ];

  return (
    <div className="py-12 bg-[#F7F9FB]">
      <div className="container-custom space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6">
          <span className="text-xs font-bold text-[#C40000] uppercase tracking-wider">
            Edukasi Publik
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17252A] mt-1">
            Literasi & Kesadaran Siber
          </h1>
          <p className="text-sm sm:text-base text-[#5B5668] mt-2 max-w-3xl">
            Sansidam Jaya berkomitmen mendorong literasi digital masyarakat. Keamanan siber nasional
            dimulai dari kesadaran setiap individu dalam menjaga keamanan perangkat pribadinya.
          </p>
        </div>

        {/* Banner Waspada Hoaks & Rekayasa Sosial */}
        <div className="bg-[#0B1220] rounded-xl text-white p-8 border border-gray-800 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-[#C40000]/20 border border-[#C40000] flex items-center justify-center text-[#C40000] flex-shrink-0">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold">
                Prinsip Utama: Saring Sebelum Sharing, Verifikasi Sebelum Klik!
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-3xl">
                Banyak insiden kebocoran akun terjadi bukan karena kecanggihan peretasan sistem,
                melainkan kelengahan pengguna yang membagikan kode OTP atau mengklik tautan palsu yang
                disebarkan via pesan berantai.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Panduan Praktis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tipsKeamanan.map((tip, idx) => {
            const IconC = tip.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[10px] p-6 sm:p-8 border border-[#E1E5E8] shadow-card space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg ${tip.bg} flex items-center justify-center ${tip.color}`}>
                    <IconC className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#17252A]">{tip.title}</h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5B5668] leading-relaxed">{tip.desc}</p>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Langkah Pencegahan:
                  </h4>
                  <ul className="space-y-2 text-xs text-[#5B5668]">
                    {tip.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#009038] flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Kanal Bantuan Pelaporan Siber Sipil */}
        <div className="bg-white rounded-[10px] p-6 border border-[#E1E5E8] shadow-sm">
          <h4 className="font-bold text-sm text-[#17252A] mb-2">
            Butuh Melaporkan Penipuan Siber atau Kejahatan Internet Sipil?
          </h4>
          <p className="text-xs text-[#5B5668] leading-relaxed mb-4">
            Bagi masyarakat yang mengalami tindak pidana penipuan daring, pencurian rekening bank, atau
            pemerasan siber, dapat segera menghubungi portal resmi kepolisian atau BSSN:
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-semibold">
            <a
              href="https://patrolisiber.id"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-[#17252A] border border-gray-300 transition-colors"
            >
              Portal Patroli Siber Polri ↗
            </a>
            <a
              href="https://aduankonten.id"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-[#17252A] border border-gray-300 transition-colors"
            >
              Aduan Konten Komdigi ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
