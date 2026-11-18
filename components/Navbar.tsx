"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Shield, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Profil Satuan", href: "/profil" },
    { label: "Pimpinan", href: "/pimpinan" },
    { label: "Tugas & Fungsi", href: "/tugas-fungsi" },
    { label: "Berita & Kegiatan", href: "/berita" },
    { label: "Galeri", href: "/galeri" },
    { label: "Literasi Siber", href: "/literasi-siber" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontak", href: "/kontak" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B1220] border-b border-[#1E293B] text-white shadow-md">
      {/* Top bar info */}
      <div className="bg-[#070C16] border-b border-[#152033] py-1.5 px-4 text-xs text-gray-400">
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#009038] animate-pulse"></span>
            <span>Situs Resmi Profil Satuan Sandi dan Siber Kodam Jaya / Jayakarta</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://kodamjaya-tniad.mil.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#03A9F4] transition-colors"
            >
              Portal Kodam Jaya ↗
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-300">Jakarta Timur, DKI Jakarta</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full bg-white p-0.5 shadow-md border-2 border-[#C40000] overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/images/logoSansidamJaya.png"
                alt="Logo Sansidam Jaya"
                fill
                className="object-cover"
                sizes="48px"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-wider text-white uppercase group-hover:text-red-400 transition-colors">
                Sansidam Jaya
              </span>
              <span className="text-xs text-gray-400 tracking-wide">
                Sandi dan Siber Kodam Jaya
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-150 ${
                    active
                      ? "text-[#03A9F4] bg-[#162238] font-semibold border-b-2 border-[#C40000]"
                      : "text-gray-200 hover:text-white hover:bg-[#131E33]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#1E293B] focus:outline-none"
              aria-label="Menu navigasi"
            >
              {isOpen ? <X className="w-6 h-6 text-[#C40000]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#0F182A] border-t border-[#1E293B] px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                  active
                    ? "bg-[#1E2B45] text-[#03A9F4] font-semibold border-l-4 border-[#C40000]"
                    : "text-gray-200 hover:bg-[#162238] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
