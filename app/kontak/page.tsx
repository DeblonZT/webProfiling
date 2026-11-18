import { MapPin, Mail, Shield, Phone, Clock, ExternalLink, Camera } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak & Lokasi Markas - Sansidam Jaya",
  description:
    "Informasi alamat markas, denah lokasi, dan kanal komunikasi resmi Sansidam Jaya (Sandi dan Siber Kodam Jaya).",
};

export default function KontakPage() {
  return (
    <div className="py-12 bg-[#F7F9FB]">
      <div className="container-custom space-y-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6">
          <span className="text-xs font-bold text-[#C40000] uppercase tracking-wider">
            Koordinasi Resmi
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17252A] mt-1">
            Kontak & Lokasi Markas
          </h1>
          <p className="text-sm sm:text-base text-[#5B5668] mt-2 max-w-3xl">
            Sesuai regulasi informasi satuan militer, komunikasi dan koordinasi umum dilayani melalui
            kanal terpusat resmi Kodam Jaya dan akun media sosial dinas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Kolom Kiri: Detail Kontak */}
          <div className="lg:col-span-5 space-y-6">
            {/* Kartu Alamat Markas */}
            <div className="bg-white rounded-[10px] p-6 border border-[#E1E5E8] shadow-card space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#C40000]/10 flex items-center justify-center text-[#C40000]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#17252A]">Alamat Markas Satuan</h3>
                  <span className="text-xs text-gray-500">Kompleks Makodam Jaya</span>
                </div>
              </div>

              <address className="not-italic text-xs sm:text-sm text-[#5B5668] leading-relaxed border-l-2 border-gray-200 pl-3">
                <strong>Sansidam Jaya (Sandi dan Siber Kodam Jaya)</strong>
                <br />
                Kompleks Makodam Jaya/Jayakarta
                <br />
                Jl. Mayor Jenderal Sutoyo No. 5, RW. 7, Cawang,
                <br />
                Kecamatan Kramat Jati, Kota Jakarta Timur,
                <br />
                Daerah Khusus Ibukota Jakarta 13630
              </address>
            </div>

            {/* Kanal Komunikasi Resmi */}
            <div className="bg-white rounded-[10px] p-6 border border-[#E1E5E8] shadow-card space-y-4">
              <h3 className="font-bold text-base text-[#17252A]">Kanal Media Sosial & Surel</h3>
              <ul className="space-y-4 text-xs sm:text-sm">
                <li>
                  <a
                    href="https://www.instagram.com/sansidamjy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#17252A] hover:text-[#026E9F] p-3 rounded-lg bg-[#F7F9FB] border border-[#E1E5E8] transition-colors"
                  >
                    <Camera className="w-5 h-5 text-pink-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Instagram Resmi Satuan</p>
                      <p className="text-xs text-gray-500">@sansidamjy</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/persit_ranting2sansidam_jaya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#17252A] hover:text-[#026E9F] p-3 rounded-lg bg-[#F7F9FB] border border-[#E1E5E8] transition-colors"
                  >
                    <Camera className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Instagram Persit Ranting 2</p>
                      <p className="text-xs text-gray-500">@persit_ranting2sansidam_jaya</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:kodamjayajayakarta@gmail.com"
                    className="flex items-center gap-3 text-[#17252A] hover:text-[#026E9F] p-3 rounded-lg bg-[#F7F9FB] border border-[#E1E5E8] transition-colors"
                  >
                    <Mail className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold">Email Umum Kodam Jaya</p>
                      <p className="text-xs text-gray-500">kodamjayajayakarta@gmail.com</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Ketentuan Keamanan Komunikasi */}
            <div className="bg-[#FFF8E7] border-l-4 border-amber-500 p-4 rounded-r-[10px] text-xs text-amber-900 leading-relaxed">
              <strong>Pemberitahuan:</strong> Sansidam Jaya tidak menyediakan nomor telepon pribadi
              maupun jalur dinas berklasifikasi di ruang terbuka web. Surat kedinasan resmi dikirimkan
              melalui Tata Usaha Urusan Dalam (TUUD) Makodam Jaya.
            </div>
          </div>

          {/* Kolom Kanan: Peta Google Maps Embed */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[10px] p-6 border border-[#E1E5E8] shadow-card space-y-4 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-[#17252A]">Denah Lokasi Makodam Jaya</h3>
                <span className="text-xs bg-[#009038]/10 text-[#009038] font-semibold px-2.5 py-1 rounded">
                  Cawang, Jakarta Timur
                </span>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="relative w-full flex-1 min-h-[380px] rounded-lg overflow-hidden border border-[#E1E5E8]">
                <iframe
                  title="Peta Lokasi Makodam Jaya"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1969032644265!2d106.86873327499043!3d-6.237752493750438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f37cbb115717%3A0xe6bfdd6cf7bce8cb!2sKomando%20Daerah%20Militer%20Jaya%2FJayakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[380px]"
                ></iframe>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs text-gray-500">
                <span>Koordinat: Cawang, Kec. Kramat Jati</span>
                <a
                  href="https://maps.google.com/?q=Komando+Daerah+Militer+Jaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#026E9F] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Buka di Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
