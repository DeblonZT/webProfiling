"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryData, GalleryItem } from "@/data/siteData";
import { Filter, Eye, X } from "lucide-react";

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [previewItem, setPreviewItem] = useState<GalleryItem | null>(null);

  const categories = [
    "Semua",
    "Kegiatan Resmi",
    "Persit KCK",
    "Olahraga & Bintal",
    "Sosialisasi",
  ];

  const filteredItems =
    selectedCategory === "Semua"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <div className="py-12 bg-[#F7F9FB]">
      <div className="container-custom space-y-10">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6">
          <span className="text-xs font-bold text-[#C40000] uppercase tracking-wider">
            Dokumentasi Visual
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17252A] mt-1">
            Galeri Kegiatan
          </h1>
          <p className="text-sm sm:text-base text-[#5B5668] mt-2 max-w-3xl">
            Kumpulan dokumentasi foto kegiatan seremonial, pembinaan tradisi, dan kemasyarakatan
            Sansidam Jaya yang telah disetujui untuk konsumsi publik.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[#0B1220] text-white shadow-sm border border-[#0B1220]"
                  : "bg-white text-gray-700 border border-[#E1E5E8] hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setPreviewItem(item)}
              className="bg-white rounded-[10px] overflow-hidden border border-[#E1E5E8] shadow-card shadow-card-hover cursor-pointer group"
            >
              <div className="relative h-60 w-full bg-[#0B1220] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 bg-[#0B1220]/80 text-[#03A9F4] text-xs font-semibold px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded">
                  {item.year}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-sm text-[#17252A] group-hover:text-[#026E9F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5B5668] mt-1 line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox Preview */}
        {previewItem && (
          <div
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setPreviewItem(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-[#0B1220] rounded-xl overflow-hidden border border-gray-700 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPreviewItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-80 sm:h-96 w-full bg-black">
                <Image
                  src={previewItem.image}
                  alt={previewItem.title}
                  fill
                  className="object-contain"
                  sizes="800px"
                />
              </div>

              <div className="p-6 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-[#C40000] text-white text-xs font-semibold px-2.5 py-0.5 rounded">
                    {previewItem.category}
                  </span>
                  <span className="text-xs text-gray-400">Tahun {previewItem.year}</span>
                </div>
                <h3 className="text-lg font-bold">{previewItem.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{previewItem.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
