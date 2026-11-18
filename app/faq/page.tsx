import Link from "next/link";
import { HelpCircle, ChevronDown } from "lucide-react";
import { faqData } from "@/data/siteData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tanya Jawab (FAQ) - Sansidam Jaya",
  description:
    "Pertanyaan yang sering diajukan mengenai profil, kedudukan, dan informasi satuan Sansidam Jaya.",
};

export default function FAQPage() {
  return (
    <div className="py-12 bg-[#F7F9FB]">
      <div className="container-custom max-w-4xl space-y-10">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6">
          <span className="text-xs font-bold text-[#C40000] uppercase tracking-wider">
            Informasi Publik
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17252A] mt-1">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h1>
          <p className="text-sm sm:text-base text-[#5B5668] mt-2">
            Jawaban resmi atas pertanyaan umum mengenai kedudukan, fungsi, dan kanal koordinasi
            Sansidam Jaya.
          </p>
        </div>

        {/* List of FAQ Accordions */}
        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[10px] border border-[#E1E5E8] shadow-card p-6 space-y-3"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C40000]/10 text-[#C40000] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                  Q{idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#17252A] leading-snug">
                    {item.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B5668] mt-2 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Box Pertanyaan Lainnya */}
        <div className="bg-[#0B1220] rounded-xl p-8 text-white text-center space-y-3 border border-gray-800">
          <h4 className="font-bold text-lg">Masih Memiliki Pertanyaan Lain?</h4>
          <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
            Untuk informasi dan koordinasi resmi lainnya, silakan hubungi kanal komunikasi resmi Kodam
            Jaya melalui halaman Kontak.
          </p>
          <div className="pt-2">
            <Link
              href="/kontak"
              className="inline-block px-5 py-2.5 rounded bg-[#C40000] hover:bg-[#a30000] text-xs font-semibold text-white transition-colors"
            >
              Buka Halaman Kontak Satuan →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
