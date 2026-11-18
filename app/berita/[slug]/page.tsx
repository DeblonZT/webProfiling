import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Tag, ArrowLeft, Share2, Shield } from "lucide-react";
import { articlesData } from "@/data/siteData";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);
  if (!article) return { title: "Artikel Tidak Ditemukan - Sansidam Jaya" };

  return {
    title: `${article.title} - Sansidam Jaya`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default async function DetailBeritaPage({ params }: Props) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="py-12 bg-[#F7F9FB]">
      <div className="container-custom max-w-4xl space-y-8">
        {/* Back Link */}
        <div>
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#026E9F] hover:text-[#0B1220] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Semua Warta</span>
          </Link>
        </div>

        {/* Article Container */}
        <article className="bg-white rounded-[10px] border border-[#E1E5E8] shadow-card overflow-hidden">
          {/* Header Metadata */}
          <div className="p-6 sm:p-10 border-b border-gray-100 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#0B1220] text-[#03A9F4] text-xs font-semibold px-3 py-1 rounded">
                {article.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.date}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#17252A] leading-tight">
              {article.title}
            </h1>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-72 sm:h-96 bg-[#0B1220]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-10 space-y-6 text-sm sm:text-base text-[#17252A] leading-relaxed">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-[#333333]">
                {paragraph}
              </p>
            ))}

            {/* Verification & Approval Notice */}
            <div className="mt-8 p-4 rounded-lg bg-[#F7F9FB] border border-[#E1E5E8] text-xs text-gray-500 flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#009038] flex-shrink-0" />
              <span>
                Materi publikasi resmi telah ditinjau dan disetujui sesuai regulasi informasi publik
                Satuan Sandi dan Siber Kodam Jaya.
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
