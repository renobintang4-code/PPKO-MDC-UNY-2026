import React, { useState } from 'react';
import { PageId } from '../types';
import { SITE_METADATA } from '../data/siteData';
import { Badge } from '../components/Badge';
import { Play, Image, ExternalLink, Calendar, Instagram, Youtube, Video, ArrowRight } from 'lucide-react';

interface DocumentationPageProps {
  onNavigate: (page: PageId) => void;
}

export const DocumentationPage: React.FC<DocumentationPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<'semua' | 'opening' | 'kelas' | 'forum'>('semua');

  const galleryItems = [
    {
      category: 'opening',
      title: 'Grand Opening & Sosialisasi Akbar Program',
      date: '14 Juni 2026',
      desc: 'Peluncuran resmi Griya Ceria di Balai Kalurahan Giripurwo dihadiri Lurah, Pamong Kalurahan, BPP, Puskesmas, dan 123 perwakilan warga dari 10 padukuhan.',
      image: '/src/assets/images/hero_griya_ceria_1792250518112.jpg',
      badge: 'REALISASI',
    },
    {
      category: 'kelas',
      title: 'Praktik Pembuatan Kompos Padat & POC Gemah Ripah',
      date: '7–8 Juli 2026',
      desc: 'Petani dan peternak Griya Jinawi mencampur sekam padi, kotoran sapi, dolomit, dan dekomposer M21 di pusat pengolahan Padukuhan Sumur.',
      image: '/src/assets/images/griya_jinawi_pupuk_1792250517012.jpg',
      badge: 'REALISASI',
    },
    {
      category: 'kelas',
      title: 'Workshop Fotografi Produk Smartphone & Studio Mini',
      date: '13–17 Juli 2026',
      desc: 'Pelaku UMKM Desa Prima dan Desa Preneur belajar tata pencahayaan dan komposisi sudut foto untuk 9 komoditas pangan olahan Giripurwo.',
      image: '/src/assets/images/griya_laku_umkm_1792250518910.jpg',
      badge: 'REALISASI',
    },
    {
      category: 'kelas',
      title: 'Praktik Pengolahan Pangan Lokal Superfood Donut & Banana Milk',
      date: '12 & 22 Juli 2026',
      desc: 'Kader PKK dan Posyandu mempraktikkan resep berbahan dasar daun kelor dan pisang kepok lokal sebagai menu PMT balita pencegah stunting.',
      image: '/src/assets/images/griya_reksa_dapur_1792250520199.jpg',
      badge: 'REALISASI',
    },
    {
      category: 'kelas',
      title: 'Pelatihan Desain Canva, Video CapCut, & Ikrar Digital Pemuda',
      date: '8 Agustus 2026',
      desc: 'Generasi muda Karang Taruna dan Forum Anak memproduksi konten kampanye sosial positif dan menyepakati ikrar netiket bersama.',
      image: '/src/assets/images/griya_rekadaya_digital_1792250519109.jpg',
      badge: 'REALISASI',
    },
    {
      category: 'forum',
      title: 'Lokakarya, Forum Terpadu, & Serah Terima Lembaga Kalurahan',
      date: '24 September 2026',
      desc: 'Pameran produk terpadu 4 Griya, evaluasi hasil post-test, dan penerbitan SK Lurah Giripurwo tentang penetapan Lembaga Griya Ceria.',
      image: '/src/assets/images/hero_griya_ceria_1792250518112.jpg',
      badge: 'REALISASI',
    },
  ];

  const filteredItems = activeFilter === 'semua'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Banner */}
      <section className="bg-[#9A4026] text-[#FFFDF9] py-14 border-b-4 border-[#C0583A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFFDF9]/15 px-3 py-1 rounded-full text-xs font-semibold">
            <span>Arsip Visual Program</span>
            <span>·</span>
            <span className="text-[#F4DCCB]">Juni–Oktober 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Dokumentasi Kegiatan Griya Ceria
          </h1>
          <p className="text-sm sm:text-base text-[#FBF1E6]/90 max-w-3xl leading-relaxed">
            Rekam jejak visual dinamika kebersamaan, proses pembelajaran tatap muka andragogi, dan senyum antusias warga di 10 padukuhan Kalurahan Giripurwo.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Video Dokumenter Utama */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C0583A] block">
                Video Utama
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#4A2A1E]">
                Dokumenter Resmi Perjalanan Griya Ceria Giripurwo 2026
              </h2>
            </div>
            <a
              href={SITE_METADATA.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-[#C0583A] hover:bg-[#9A4026] text-white rounded-xl text-xs font-semibold transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>Tonton di YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-md">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${SITE_METADATA.videoEmbedId}`}
              title="Dokumenter Griya Ceria Giripurwo 2026"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#FFFDF9] rounded-2xl border border-[#F4DCCB] shadow-xs">
          {[
            { id: 'semua', label: 'Semua Dokumentasi' },
            { id: 'opening', label: 'Grand Opening (14 Juni)' },
            { id: 'kelas', label: 'Kelas Pembelajaran 4 Griya' },
            { id: 'forum', label: 'Forum Terpadu & Serah Terima' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeFilter === tab.id
                  ? 'bg-[#C0583A] text-white shadow-xs'
                  : 'text-[#5A3A2E] hover:bg-[#F4DCCB]/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#F4DCCB] shadow-xs space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div className="relative h-52 overflow-hidden bg-[#FBF1E6]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-[#4A2A1E]/80 backdrop-blur-xs text-white text-[10px] font-bold rounded-lg flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[#D9825F]" />
                    {item.date}
                  </span>
                </div>
              </div>

              <div className="p-5 pt-1 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <Badge type={item.badge as any} />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-[#4A2A1E] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5A3A2E] leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blok Lanjut Baca */}
        <section className="p-6 bg-[#F4DCCB]/40 rounded-2xl border border-[#F4DCCB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#9A4026] uppercase block">Lanjut Baca:</span>
            <span className="text-sm font-semibold text-[#4A2A1E]">Ketahui profil mahasiswa pelaksana dan kontak resmi</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('tim-kontak')}
              className="px-4 py-2 text-xs font-semibold bg-[#C0583A] hover:bg-[#9A4026] text-white rounded-xl transition-colors shadow-xs"
            >
              Tim Pelaksana & Kontak →
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="px-4 py-2 text-xs font-semibold bg-[#FFFDF9] hover:bg-[#FBF1E6] text-[#9A4026] rounded-xl border border-[#F4DCCB] transition-colors shadow-xs"
            >
              Kembali ke Halaman Muka →
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
