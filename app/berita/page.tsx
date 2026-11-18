import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag, ChevronRight } from "lucide-react";
import { articlesData } from "@/data/siteData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warta Berita & Kegiatan - Sansidam Jaya",
  description:
    "Kumpulan berita, dokumentasi kegiatan resmi non-operasional, dan rilis publik Sansidam Jaya.",
};

export default function BeritaPage() {
  return (
    <div className="py-12 bg-[#F7F9FB]">
      <div className="container-custom space-y-10">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6">
          <span className="text-xs font-bold text-[#C40000] uppercase tracking-wider">
            Publikasi Resmi
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17252A] mt-1">
            Warta & Kegiatan Satuan
          </h1>
          <p className="text-sm sm:text-base text-[#5B5668] mt-2 max-w-3xl">
            Informasi dokumentasi kegiatan non-operasional, pembinaan personel, Persit Kartika
            Chandra Kirana Ranting 2, dan program sosialisasi Sansidam Jaya.
          </p>
        </div>

        {/* Grid Berita */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-[10px] overflow-hidden border border-[#E1E5E8] shadow-card shadow-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 w-full bg-[#0B1220]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B1220]/80 backdrop-blur-sm text-[#03A9F4] text-xs font-semibold px-2.5 py-1 rounded">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>

                  <h2 className="font-bold text-lg text-[#17252A] mb-3 leading-snug hover:text-[#026E9F] transition-colors">
                    <Link href={`/berita/${article.slug}`}>{article.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#5B5668] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={`/berita/${article.slug}`}
                  className="text-xs font-semibold text-[#026E9F] hover:text-[#0B1220] inline-flex items-center gap-1"
                >
                  <span>Baca artikel lengkap</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-gray-400">Sansidam Jaya</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
