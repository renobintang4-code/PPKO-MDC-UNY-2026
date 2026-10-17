import React from 'react';
import { PageId } from '../types';
import { SITE_METADATA, REALISASI_STATS, GIRIPURWO_DATA, GRIYA_LIST, TIMELINE_PROGRAM } from '../data/siteData';
import { Badge } from '../components/Badge';
import { 
  ArrowRight, 
  MapPin, 
  Play, 
  BookOpen, 
  ShoppingBag, 
  Heart, 
  Laptop, 
  Sprout, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  ExternalLink,
  Instagram,
  Youtube,
  Video,
  Building2,
  Navigation
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, subFilter?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#9A4026] text-[#FFFDF9]">
        {/* Background photo with measured terracotta overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_griya_ceria_1792250518112.jpg"
            alt="Balai Kalurahan Giripurwo dan lanskap perbukitan Gunungkidul"
            className="w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A2A1E]/95 via-[#9A4026]/90 to-[#C0583A]/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-[#FFFDF9]/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#FFFDF9]/25 text-xs font-semibold text-[#FFFDF9] tracking-wide">
              <span>PPK Ormawa UKMF MDC UNY 2026</span>
              <span className="opacity-60">|</span>
              <span className="text-[#F4DCCB]">Topik: Desa Cerdas</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-script text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wide text-[#FFFDF9] drop-shadow-sm">
                Griya Ceria
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[#F4DCCB] leading-snug tracking-tight">
                Giripurwo Berdaya, Cerdas, Mandiri, Berkarya
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#FBF1E6]/90 leading-relaxed font-normal max-w-2xl">
              Pemberdayaan Masyarakat Melalui Pojok Literasi Terpadu Guna Peningkatan Kapasitas Ekonomi dan Ketahanan Keluarga di Kalurahan Giripurwo, Kapanewon Purwosari, Kabupaten Gunungkidul.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('tentang')}
                className="px-6 py-3 text-sm font-semibold text-[#9A4026] bg-[#FFFDF9] hover:bg-[#FBF1E6] rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <span>Kenali Program</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('dokumentasi')}
                className="px-6 py-3 text-sm font-semibold text-[#FFFDF9] bg-[#C0583A]/80 hover:bg-[#C0583A] rounded-full transition-all border border-[#FFFDF9]/30 backdrop-blur-xs flex items-center gap-2"
              >
                <span>Lihat Dokumentasi</span>
                <Play className="w-4 h-4 fill-current" />
              </button>
            </div>

            {/* Quick Context Bar */}
            <div className="pt-8 border-t border-[#FFFDF9]/20 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#FBF1E6]">
              <div>
                <span className="block text-[#D9825F] text-[11px] font-semibold uppercase">Lokasi</span>
                <span className="font-medium">Giripurwo, Gunungkidul</span>
              </div>
              <div>
                <span className="block text-[#D9825F] text-[11px] font-semibold uppercase">Pendanaan</span>
                <span className="font-medium">Belmawa Kemdiktisaintek</span>
              </div>
              <div>
                <span className="block text-[#D9825F] text-[11px] font-semibold uppercase">Pelaksana</span>
                <span className="font-medium">MDC FMIPA UNY 2026</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. VIDEO DOKUMENTER (EMBED YOUTUBE TEPAT DI BAWAH HERO) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="bg-[#FFFDF9] rounded-2xl p-4 sm:p-6 shadow-xl border border-[#F4DCCB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#C0583A] font-bold block">
                Dokumenter Resmi
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-[#4A2A1E]">
                Video Dokumenter Program Griya Ceria 2026
              </h2>
            </div>
            <a
              href={SITE_METADATA.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C0583A] hover:text-[#9A4026]"
            >
              <span>Buka di YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-inner">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${SITE_METADATA.videoEmbedId}`}
              title="Video Dokumenter Program Griya Ceria Kalurahan Giripurwo 2026"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* 3. MENGENAL PPK ORMAWA & LOKASI KAMI (2 Columns) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Mengenal PPK Ormawa */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-[#C0583A] text-[#FFFDF9] rounded-full text-xs font-semibold uppercase tracking-wider">
                Mengenal PPK Ormawa
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#4A2A1E]">
                Inisiatif Pemberdayaan Berbasis Mahasiswa
              </h3>
              <p className="text-xs sm:text-sm text-[#5A3A2E] leading-relaxed">
                Program Penguatan Kapasitas Organisasi Kemahasiswaan (PPK Ormawa) adalah program inisiatif Kementerian Pendidikan Tinggi, Sains, dan Teknologi (Kemdiktisaintek) untuk pembinaan dan pemberdayaan masyarakat melalui organisasi kemahasiswaan di perguruan tinggi.
              </p>
              <p className="text-xs sm:text-sm text-[#5A3A2E] leading-relaxed">
                Proposal yang diajukan diseleksi secara ketat dan didanai oleh Direktorat Belmawa. PPK Ormawa UKMF MIPA Debate Club (MDC) FMIPA Universitas Negeri Yogyakarta berhasil menjadi salah satu tim terdanai nasional tahun 2026 dengan mengusung topik strategis <strong>Desa Cerdas</strong> di Giripurwo.
              </p>
            </div>

            <div className="pt-6 border-t border-[#F4DCCB]/60 mt-6 flex items-center justify-between text-xs text-[#7C533F]">
              <span className="font-semibold text-[#9A4026]">FMIPA Universitas Negeri Yogyakarta</span>
              <span>Tahun Pelaksanaan 2026</span>
            </div>
          </div>

          {/* Lokasi Kami & Maps Embed */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-[#C0583A] text-[#FFFDF9] rounded-full text-xs font-semibold uppercase tracking-wider">
                Lokasi Kami
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#4A2A1E]">
                Kalurahan Giripurwo, Gunungkidul
              </h3>
              <p className="text-xs sm:text-sm text-[#5A3A2E] leading-relaxed">
                Program berlokasi di <strong>Kalurahan Giripurwo</strong>, Kapanewon Purwosari, Kabupaten Gunungkidul, D.I. Yogyakarta, mencakup 10 padukuhan yang aktif. Periode pelaksanaan lapangan berlangsung intensif pada Juni–Oktober 2026.
              </p>

              <div className="p-3 bg-[#F4DCCB]/40 rounded-xl flex items-center gap-3 text-xs text-[#5A3A2E]">
                <MapPin className="w-5 h-5 text-[#C0583A] shrink-0" />
                <div>
                  <span className="font-semibold block text-[#4A2A1E]">Aksesibilitas Kampus UNY:</span>
                  <span>Jarak tempuh sekitar 40 km (±65 menit perjalanan darat dari Kampus Karangmalang).</span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="mt-4 h-48 w-full rounded-xl overflow-hidden border border-[#F4DCCB] shadow-inner">
              <iframe
                title="Peta Lokasi Giripurwo"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src={`https://maps.google.com/maps?q=${SITE_METADATA.coordinates.lat},${SITE_METADATA.coordinates.lng}&hl=id&z=13&output=embed`}
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. GRIYA CERIA DALAM ANGKA [REALISASI] */}
      <section className="bg-[#F4DCCB]/50 py-16 border-y border-[#F4DCCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-0.5 bg-[#C0583A] text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
                  Data Capaian
                </span>
                <Badge type="REALISASI" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4A2A1E]">
                Griya Ceria dalam Angka
              </h2>
            </div>
            <p className="text-xs text-[#7C533F] max-w-md">
              Catatan: <strong>574</strong> adalah jumlah keikutsertaan warga pada kelas pembelajaran akumulatif, bukan jumlah orang unik.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {REALISASI_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDF9] rounded-2xl p-5 sm:p-6 border border-[#F4DCCB] shadow-xs text-center flex flex-col justify-center items-center hover:shadow-md transition-shadow"
              >
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#C0583A] tracking-tight tabular-nums block mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#4A2A1E] block mb-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-[#7C533F] leading-snug">
                  {stat.sublabel}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. POTENSI & PERMASALAHAN KALURAHAN GIRIPURWO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 bg-[#C0583A] text-[#FFFDF9] rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
            Konsep Desa Cerdas
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4A2A1E]">
            Potensi & Realitas Warga Giripurwo
          </h2>
          <p className="text-xs sm:text-sm text-[#5A3A2E] leading-relaxed">
            Giripurwo memiliki modal sosial dan sumber daya alam yang melimpah, namun memerlukan pendekatan pendidikan nonformal terstruktur untuk mengatasi kesenjangan kapasitas.
          </p>
        </div>

        {/* 2 Cards: Potensi vs Permasalahan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Potensi Giripurwo */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold text-[#4A2A1E] flex items-center gap-2">
                <Sprout className="w-5 h-5 text-[#6B8F4E]" />
                Potensi Utama Kalurahan
              </h3>
              <span className="text-xs font-semibold text-[#6B8F4E] bg-[#EEF3EA] px-2.5 py-1 rounded-full">
                Modal Berdaya
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#FBF1E6] rounded-xl">
                <span className="text-[#7C533F] block">Total Penduduk</span>
                <span className="text-sm font-bold text-[#4A2A1E]">9.329 Jiwa</span>
              </div>
              <div className="p-3 bg-[#FBF1E6] rounded-xl">
                <span className="text-[#7C533F] block">Usia Produktif</span>
                <span className="text-sm font-bold text-[#4A2A1E]">68% (6.273 Jiwa)</span>
              </div>
              <div className="p-3 bg-[#FBF1E6] rounded-xl">
                <span className="text-[#7C533F] block">UMKM Terdaftar</span>
                <span className="text-sm font-bold text-[#4A2A1E]">427 Unit Usaha</span>
              </div>
              <div className="p-3 bg-[#FBF1E6] rounded-xl">
                <span className="text-[#7C533F] block">Konektivitas</span>
                <span className="text-sm font-bold text-[#4A2A1E]">Akses Internet Mudah</span>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-[#5A3A2E]">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#6B8F4E] shrink-0 mt-0.5" />
                <span><strong>Komunitas Sangat Aktif:</strong> Kelompok Tani, Kelompok Ternak, KWT, Desa Prima, Desa Preneur, PKK, Karang Taruna, dan Forum Anak.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#6B8F4E] shrink-0 mt-0.5" />
                <span><strong>Bahan Baku Organik Melimpah:</strong> Sekam padi gudang penggilingan (±50 ton) dan limbah 2.647 ekor sapi siap diolah.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#6B8F4E] shrink-0 mt-0.5" />
                <span><strong>Pangan Lokal Kaya Nutrisi:</strong> Pisang kepok/uter serta daun kelor tumbuh subur untuk penanganan gizi keluarga.</span>
              </li>
            </ul>
          </div>

          {/* Permasalahan Utama */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold text-[#4A2A1E] flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#C0583A]" />
                Permasalahan Utama
              </h3>
              <span className="text-xs font-semibold text-[#9A4026] bg-[#F4DCCB] px-2.5 py-1 rounded-full">
                Tantangan Nyata
              </span>
            </div>

            <div className="p-4 bg-[#F4DCCB]/40 rounded-xl space-y-2 text-xs text-[#5A3A2E]">
              <p>
                <strong>49% Penduduk</strong> tidak pernah sekolah (23,3%) atau hanya lulusan SD (25,8%).
              </p>
              <p>
                <strong>84% Keluarga</strong> berada pada desil 1–5 (Prasejahtera). Sebanyak 46% di antaranya tergolong Desil 1 menurut Data DTSEN.
              </p>
            </div>

            {/* Visualisasi Donut/Bar Persentase Pendidikan */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] font-bold text-[#4A2A1E] uppercase tracking-wider block">
                Tingkat Pendidikan Penduduk Giripurwo (2025):
              </span>
              <div className="space-y-1.5 text-xs">
                {GIRIPURWO_DATA.pendidikanBreakdown.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-2">
                    <span className="text-[#5A3A2E] truncate w-48">{item.label}</span>
                    <div className="flex-1 bg-[#F4DCCB]/50 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#C0583A] h-full rounded-full"
                        style={{ width: `${item.percent * 2.5}%` }}
                      />
                    </div>
                    <span className="font-semibold text-[#4A2A1E] tabular-nums w-12 text-right">{item.percent}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visualisasi Desil Ekonomi */}
            <div className="space-y-2 pt-2 border-t border-[#F4DCCB]/60">
              <span className="text-[11px] font-bold text-[#4A2A1E] uppercase tracking-wider block">
                Distribusi Kesejahteraan Keluarga (DTSEN):
              </span>
              <div className="grid grid-cols-6 gap-1 text-center text-[10px]">
                <div className="p-1.5 bg-[#C0583A] text-white rounded font-bold">Desil 1: 46%</div>
                <div className="p-1.5 bg-[#D9825F] text-white rounded font-medium">Desil 2: 14%</div>
                <div className="p-1.5 bg-[#F4DCCB] text-[#4A2A1E] rounded font-medium">Desil 3: 8%</div>
                <div className="p-1.5 bg-[#F4DCCB] text-[#4A2A1E] rounded font-medium">Desil 4: 8%</div>
                <div className="p-1.5 bg-[#F4DCCB] text-[#4A2A1E] rounded font-medium">Desil 5: 8%</div>
                <div className="p-1.5 bg-[#6B8F4E] text-white rounded font-medium">Desil 6: 16%</div>
              </div>
              <p className="text-[10px] text-[#7C533F] italic">
                *Desil 1–5 dikategorikan sebagai keluarga prasejahtera (84%).
              </p>
            </div>
          </div>

        </div>

        {/* 6. EMPAT TANTANGAN SEKTOR (4 Kartu) */}
        <div className="space-y-6 pt-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#4A2A1E]">
              Empat Tantangan Sektoral yang Dihadapi
            </h3>
            <p className="text-xs text-[#7C533F] mt-1">
              Data riil hasil peninjauan dan survei lapangan tim pelaksana PPK Ormawa UNY bersama Pemerintah Kalurahan Giripurwo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Sektor 1 */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#6B8F4E]/30 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#EEF3EA] flex items-center justify-center text-[#6B8F4E]">
                  <Sprout className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-[#6B8F4E] uppercase tracking-wider block">
                  Pertanian & Peternakan
                </span>
                <p className="text-xs text-[#5A3A2E] leading-relaxed">
                  Sekitar 50 ton sekam padi dan limbah dari 2.647 ekor sapi belum diolah optimal.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#EEF3EA] text-[11px] font-medium text-[#6B8F4E]">
                Dijawab oleh Griya Jinawi
              </div>
            </div>

            {/* Sektor 2 */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#8A5A3C]/30 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F5ECE6] flex items-center justify-center text-[#8A5A3C]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-[#8A5A3C] uppercase tracking-wider block">
                  UMKM & Pemasaran
                </span>
                <p className="text-xs text-[#5A3A2E] leading-relaxed">
                  427 UMKM belum mengoptimalkan pemasaran dengan teknologi digital dan pasar daring.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F5ECE6] text-[11px] font-medium text-[#8A5A3C]">
                Dijawab oleh Griya Laku
              </div>
            </div>

            {/* Sektor 3 */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#C9617A]/30 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAEDF0] flex items-center justify-center text-[#C9617A]">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-[#C9617A] uppercase tracking-wider block">
                  Keluarga & Ketahanan
                </span>
                <p className="text-xs text-[#5A3A2E] leading-relaxed">
                  Stunting naik dari 17 ke 31 kasus; 4 kasus pinjaman online ilegal tercatat pada warga.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#FAEDF0] text-[11px] font-medium text-[#C9617A]">
                Dijawab oleh Griya Reksa
              </div>
            </div>

            {/* Sektor 4 */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#4F86A8]/30 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAF2F7] flex items-center justify-center text-[#4F86A8]">
                  <Laptop className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-[#4F86A8] uppercase tracking-wider block">
                  Literasi Digital Pemuda
                </span>
                <p className="text-xs text-[#5A3A2E] leading-relaxed">
                  24,1% pemuda belum bisa membedakan hoaks; 55,2% belum pernah mengikuti pelatihan literasi digital.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#EAF2F7] text-[11px] font-medium text-[#4F86A8]">
                Dijawab oleh Griya Rekadaya
              </div>
            </div>

          </div>

          <div className="p-4 bg-[#C0583A] text-white rounded-2xl text-center shadow-md">
            <span className="font-semibold text-sm sm:text-base tracking-wide">
              Menjawab permasalahan itu, kami mempersembahkan GRIYA CERIA.
            </span>
          </div>
        </div>

      </section>

      {/* 7. EMPAT POJOK LITERASI (Griya Jinawi, Laku, Reksa, Rekadaya) */}
      <section className="bg-[#FFFDF9] py-16 border-y border-[#F4DCCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-[#C0583A] text-[#FFFDF9] rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
              Pilar Pendidikan Nonformal
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4A2A1E]">
              Empat Pojok Literasi Terpadu
            </h2>
            <p className="text-xs sm:text-sm text-[#5A3A2E]">
              Setiap Griya menyelenggarakan 10–12 pertemuan berbasis andragogi dan praktik langsung di tingkat padukuhan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Griya 1: Jinawi */}
            <div className="bg-[#FFFDF9] rounded-2xl overflow-hidden border-2 border-[#6B8F4E]/30 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all group">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/src/assets/images/griya_jinawi_pupuk_1792250517012.jpg"
                  alt="Griya Jinawi Pengolahan Pupuk Gemah Ripah"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#6B8F4E] text-white text-[11px] font-bold rounded-lg shadow-xs">
                  12 Pertemuan
                </div>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#4A6534]">
                    Griya Jinawi
                  </h3>
                  <div className="text-xs font-semibold text-[#6B8F4E] italic mb-2">
                    "Menyemai Benih Kemakmuran"
                  </div>
                  <p className="text-xs text-[#5A3A2E] leading-relaxed">
                    Pengolahan limbah pertanian dan peternakan jadi pupuk bernilai ekonomis (kompos padat, POC, dan arang sekam).
                  </p>
                </div>
                <div className="pt-4 border-t border-[#EEF3EA]">
                  <button
                    onClick={() => onNavigate('griya-jinawi')}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-[#4A6534] bg-[#EEF3EA] hover:bg-[#6B8F4E] hover:text-white rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Griya 2: Laku */}
            <div className="bg-[#FFFDF9] rounded-2xl overflow-hidden border-2 border-[#8A5A3C]/30 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all group">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/src/assets/images/griya_laku_umkm_1792250518910.jpg"
                  alt="Griya Laku Pemasaran Digital UMKM"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#8A5A3C] text-white text-[11px] font-bold rounded-lg shadow-xs">
                  10 Pertemuan
                </div>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#633F28]">
                    Griya Laku
                  </h3>
                  <div className="text-xs font-semibold text-[#8A5A3C] italic mb-2">
                    "Membentangkan Sayap UMKM"
                  </div>
                  <p className="text-xs text-[#5A3A2E] leading-relaxed">
                    Digital marketing, branding kemasan, foto produk AI, akun marketplace, dan legalitas usaha NIB & halal.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F5ECE6]">
                  <button
                    onClick={() => onNavigate('griya-laku')}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-[#633F28] bg-[#F5ECE6] hover:bg-[#8A5A3C] hover:text-white rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Griya 3: Reksa */}
            <div className="bg-[#FFFDF9] rounded-2xl overflow-hidden border-2 border-[#C9617A]/30 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all group">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/src/assets/images/griya_reksa_dapur_1792250520199.jpg"
                  alt="Griya Reksa Ketahanan Gizi dan Keluarga"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#C9617A] text-white text-[11px] font-bold rounded-lg shadow-xs">
                  10 Pertemuan
                </div>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#963C53]">
                    Griya Reksa
                  </h3>
                  <div className="text-xs font-semibold text-[#C9617A] italic mb-2">
                    "Keluarga Sehat, Ibu Semangat"
                  </div>
                  <p className="text-xs text-[#5A3A2E] leading-relaxed">
                    Literasi gizi pencegah stunting, menu PMT lokal, pola asuh sehat (parenting), dan manajemen finansial anti-pinjol.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#FAEDF0]">
                  <button
                    onClick={() => onNavigate('griya-reksa')}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-[#963C53] bg-[#FAEDF0] hover:bg-[#C9617A] hover:text-white rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Griya 4: Rekadaya */}
            <div className="bg-[#FFFDF9] rounded-2xl overflow-hidden border-2 border-[#4F86A8]/30 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all group">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/src/assets/images/griya_rekadaya_digital_1792250519109.jpg"
                  alt="Griya Rekadaya Literasi Digital Pemuda"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#4F86A8] text-white text-[11px] font-bold rounded-lg shadow-xs">
                  10 Pertemuan
                </div>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#325C75]">
                    Griya Rekadaya
                  </h3>
                  <div className="text-xs font-semibold text-[#4F86A8] italic mb-2">
                    "Jadikan Dunia Digital Sebagai Teman"
                  </div>
                  <p className="text-xs text-[#5A3A2E] leading-relaxed">
                    Literasi digital, etika bermedia sosial, desain Canva & CapCut, serta pengukuhan Satgas Forum Anak Kalurahan.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#EAF2F7]">
                  <button
                    onClick={() => onNavigate('griya-rekadaya')}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-[#325C75] bg-[#EAF2F7] hover:bg-[#4F86A8] hover:text-white rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. SATU KELUARGA, EMPAT GRIYA (Alur Sinergi Terpadu) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="px-3 py-1 bg-[#C0583A] text-[#FFFDF9] rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
                Sinergi Ekosistem
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4A2A1E]">
                Satu Keluarga, Empat Griya
              </h2>
            </div>
            <p className="text-xs text-[#7C533F] max-w-lg">
              Desain pembelajaran terpadu memungkinkan satu keluarga Giripurwo berpartisipasi lintas sektor, sehingga transformasi berlanjut nyata di meja makan keluarga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            
            <div className="p-5 rounded-xl bg-[#EEF3EA] border border-[#6B8F4E]/30 space-y-2">
              <span className="text-[11px] font-bold text-[#6B8F4E] uppercase">1. Jinawi (Bapak / Petani)</span>
              <h4 className="font-bold text-sm text-[#4A6534]">Menghasilkan Produk</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Mengolah kotoran sapi dan sekam jadi pupuk padat & cair berkualitas "Gemah Ripah".
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F5ECE6] border border-[#8A5A3C]/30 space-y-2">
              <span className="text-[11px] font-bold text-[#8A5A3C] uppercase">2. Laku (Pelaku Usaha)</span>
              <h4 className="font-bold text-sm text-[#633F28]">Memasarkan Produk</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Membuka akun toko online, fotografi produk terstandar, dan perluasan pasar digital.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAEDF0] border border-[#C9617A]/30 space-y-2">
              <span className="text-[11px] font-bold text-[#C9617A] uppercase">3. Reksa (Ibu Rumah Tangga)</span>
              <h4 className="font-bold text-sm text-[#963C53]">Mengelola Hasil & Gizi</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Pendapatan dikelola dengan pencatatan keuangan sehat, serta pemenuhan gizi keluarga.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#EAF2F7] border border-[#4F86A8]/30 space-y-2">
              <span className="text-[11px] font-bold text-[#4F86A8] uppercase">4. Rekadaya (Anak / Remaja)</span>
              <h4 className="font-bold text-sm text-[#325C75]">Digital Helper</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Mendampingi orang tua menggunakan gawai secara produktif, etis, dan aman dari siber.
              </p>
            </div>

          </div>

          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onNavigate('tentang')}
              className="px-6 py-2.5 bg-[#C0583A] hover:bg-[#9A4026] text-white rounded-full text-xs font-semibold transition-colors flex items-center gap-2"
            >
              <span>Pelajari Detail Keterpaduan Program</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 9. PERJALANAN PROGRAM (Timeline Horizontal [REALISASI]) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-0.5 bg-[#C0583A] text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
                Kronologi
              </span>
              <Badge type="REALISASI" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4A2A1E]">
              Perjalanan Program Griya Ceria 2026
            </h2>
          </div>
          <p className="text-xs text-[#7C533F]">
            Dari identifikasi akar masalah hingga pelembagaan berkelanjutan di kalurahan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {TIMELINE_PROGRAM.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#F4DCCB] shadow-xs flex flex-col justify-between relative group hover:border-[#C0583A] transition-colors"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#C0583A] block">
                  {step.period}
                </span>
                <h4 className="text-xs font-bold text-[#4A2A1E] leading-snug">
                  {step.title}
                </h4>
                <p className="text-[11px] text-[#5A3A2E] leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#F4DCCB]/60 text-[10px] text-[#7C533F] font-semibold flex items-center justify-between">
                <span>Tahap 0{idx + 1}</span>
                <span className="text-[#6B8F4E]">Terlaksana</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. SOROTAN LUARAN (Carousel/Grid 5 Item Utama) */}
      <section className="bg-[#F4DCCB]/40 py-16 border-y border-[#F4DCCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="px-3 py-0.5 bg-[#C0583A] text-white text-[11px] font-bold rounded-full uppercase tracking-wider inline-block mb-2">
                Sorotan Utama
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4A2A1E]">
                Luaran Unggulan Program
              </h2>
            </div>
            <button
              onClick={() => onNavigate('luaran')}
              className="text-xs font-bold text-[#C0583A] hover:text-[#9A4026] flex items-center gap-1.5"
            >
              <span>Lihat Semua 104 Luaran</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Luaran 1: Buku Kurikulum */}
            <div className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#F4DCCB] shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#C0583A]/15 text-[#C0583A] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#7C533F] font-semibold uppercase block">Kurikulum Resmi</span>
                  <h4 className="text-xs font-bold text-[#4A2A1E] leading-snug">Buku Kurikulum Griya Ceria</h4>
                </div>
                <p className="text-[11px] text-[#5A3A2E] leading-relaxed">
                  Disahkan Dinas Pendidikan Kab. Gunungkidul dan bersertifikasi QRCBN.
                </p>
              </div>
              <button
                onClick={() => onNavigate('luaran', 'buku')}
                className="mt-4 text-xs font-semibold text-[#C0583A] text-left hover:underline"
              >
                Detail Buku →
              </button>
            </div>

            {/* Luaran 2: Buku Resep */}
            <div className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#F4DCCB] shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#C9617A]/15 text-[#C9617A] flex items-center justify-center">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#7C533F] font-semibold uppercase block">Kesehatan Balita</span>
                  <h4 className="text-xs font-bold text-[#4A2A1E] leading-snug">Buku Resep Dapur Griya Reksa</h4>
                </div>
                <p className="text-[11px] text-[#5A3A2E] leading-relaxed">
                  Rujukan menu resmi PMT (Pemberian Makanan Tambahan) Kalurahan Giripurwo.
                </p>
              </div>
              <button
                onClick={() => onNavigate('luaran', 'buku')}
                className="mt-4 text-xs font-semibold text-[#C9617A] text-left hover:underline"
              >
                Detail Resep →
              </button>
            </div>

            {/* Luaran 3: Pupuk Gemah Ripah */}
            <div className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#F4DCCB] shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#6B8F4E]/15 text-[#6B8F4E] flex items-center justify-center">
                  <Sprout className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#7C533F] font-semibold uppercase block">Pertanian Berkelanjutan</span>
                  <h4 className="text-xs font-bold text-[#4A2A1E] leading-snug">Pupuk "Gemah Ripah"</h4>
                </div>
                <p className="text-[11px] text-[#5A3A2E] leading-relaxed">
                  Pupuk padat & POC olahan limbah kotoran sapi dan arang sekam padi.
                </p>
              </div>
              <button
                onClick={() => onNavigate('luaran', 'produk')}
                className="mt-4 text-xs font-semibold text-[#6B8F4E] text-left hover:underline"
              >
                Detail Produk →
              </button>
            </div>

            {/* Luaran 4: Akun Marketplace */}
            <div className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#F4DCCB] shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#8A5A3C]/15 text-[#8A5A3C] flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#7C533F] font-semibold uppercase block">Komersialisasi Digital</span>
                  <h4 className="text-xs font-bold text-[#4A2A1E] leading-snug">4 Akun Marketplace UMKM</h4>
                </div>
                <p className="text-[11px] text-[#5A3A2E] leading-relaxed">
                  Toko digital resmi Desa Prima & Desa Preneur Giripurwo di platform e-commerce.
                </p>
              </div>
              <button
                onClick={() => onNavigate('luaran', 'produk')}
                className="mt-4 text-xs font-semibold text-[#8A5A3C] text-left hover:underline"
              >
                Katalog Toko →
              </button>
            </div>

            {/* Luaran 5: Video Dokumenter */}
            <div className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#F4DCCB] shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#4F86A8]/15 text-[#4F86A8] flex items-center justify-center">
                  <Play className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#7C533F] font-semibold uppercase block">Publikasi Audio-Visual</span>
                  <h4 className="text-xs font-bold text-[#4A2A1E] leading-snug">Video Dokumenter Resmi</h4>
                </div>
                <p className="text-[11px] text-[#5A3A2E] leading-relaxed">
                  Dokumentasi komprehensif perjalanan pemberdayaan warga dari awal hingga akhir.
                </p>
              </div>
              <button
                onClick={() => onNavigate('luaran', 'video')}
                className="mt-4 text-xs font-semibold text-[#4F86A8] text-left hover:underline"
              >
                Tonton Video →
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 11. TEMPAT & SENTRA SEBARAN SEMUA LUARAN (8 Hub Fisik & Digital) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-0.5 bg-[#C0583A] text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
                Sebaran Spasial
              </span>
              <Badge type="REALISASI" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4A2A1E]">
              Tempat & Sentra Sebaran Seluruh Luaran
            </h2>
          </div>
          <button
            onClick={() => onNavigate('tempat-luaran')}
            className="text-xs font-bold text-[#C0583A] hover:text-[#9A4026] flex items-center gap-1.5 self-start sm:self-end"
          >
            <span>Peta & Detail 8 Sentra Luaran Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#5A3A2E] leading-relaxed max-w-3xl">
          104 luaran program terinventarisasi secara resmi dan ditempatkan di 8 sentra kalurahan dan platform daring—memastikan keberlanjutan fungsi bagi warga, petani, UMKM, ibu balita, dan pemuda Giripurwo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Hub 1: Balai Kalurahan */}
          <div className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#F4DCCB] shadow-xs flex flex-col justify-between space-y-3 hover:shadow-md transition-shadow">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-[#C0583A] text-white rounded-md text-[10px] font-bold uppercase">
                  Pusat Sentra
                </span>
                <span className="text-[11px] font-semibold text-[#7C533F]">Lantai 1</span>
              </div>
              <h4 className="font-bold text-sm text-[#4A2A1E]">Pojok Literasi Balai Desa</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Rak master buku kurikulum cetak QRCBN, 4 modul pelatihan, dan display contoh produk unggulan.
              </p>
            </div>
            <div className="pt-2 border-t border-[#F4DCCB]/60 text-[11px] text-[#C0583A] font-semibold">
              Balai Kalurahan Giripurwo
            </div>
          </div>

          {/* Hub 2: Rumah Kompos Sumur */}
          <div className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#F4DCCB] shadow-xs flex flex-col justify-between space-y-3 hover:shadow-md transition-shadow">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-[#6B8F4E] text-white rounded-md text-[10px] font-bold uppercase">
                  Sentra Jinawi I
                </span>
                <span className="text-[11px] font-semibold text-[#7C533F]">Kandang Komunal</span>
              </div>
              <h4 className="font-bold text-sm text-[#4A2A1E]">Sentra Pupuk Padukuhan Sumur</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Stok fisik karung pupuk kompos padat, botol POC bio-aktif Gemah Ripah, dan SOP alur pembuatan pupuk.
              </p>
            </div>
            <div className="pt-2 border-t border-[#F4DCCB]/60 text-[11px] text-[#6B8F4E] font-semibold">
              Padukuhan Sumur
            </div>
          </div>

          {/* Hub 3: Galeri UMKM Temon */}
          <div className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#F4DCCB] shadow-xs flex flex-col justify-between space-y-3 hover:shadow-md transition-shadow">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-[#8A5A3C] text-white rounded-md text-[10px] font-bold uppercase">
                  Sentra Laku
                </span>
                <span className="text-[11px] font-semibold text-[#7C533F]">Rumah Produksi</span>
              </div>
              <h4 className="font-bold text-sm text-[#4A2A1E]">Galeri UMKM Padukuhan Temon</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Etalase produk pangan, 4 piagam NIB OSS, 3 sertifikat Halal BPJPH, mini studio foto produk, dan toko Shopee.
              </p>
            </div>
            <div className="pt-2 border-t border-[#F4DCCB]/60 text-[11px] text-[#8A5A3C] font-semibold">
              Padukuhan Temon
            </div>
          </div>

          {/* Hub 4: Dapur Gizi Kacangan */}
          <div className="bg-[#FFFDF9] rounded-2xl p-5 border border-[#F4DCCB] shadow-xs flex flex-col justify-between space-y-3 hover:shadow-md transition-shadow">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-[#C9617A] text-white rounded-md text-[10px] font-bold uppercase">
                  Sentra Reksa
                </span>
                <span className="text-[11px] font-semibold text-[#7C533F]">Balai Posyandu</span>
              </div>
              <h4 className="font-bold text-sm text-[#4A2A1E]">Dapur PMT Padukuhan Kacangan</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Buku resep resmi Dapur Griya Reksa, sampel Banana Milk & Donut Kelor, serta poster gizi 1000 HPK.
              </p>
            </div>
            <div className="pt-2 border-t border-[#F4DCCB]/60 text-[11px] text-[#C9617A] font-semibold">
              Padukuhan Kacangan & Posyandu
            </div>
          </div>
        </div>

        <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#4A2A1E]">
            <Navigation className="w-4 h-4 text-[#C0583A] shrink-0" />
            <span>Terdapat pula Sentra Demoplot Gubar, Digital Corner Karang Taruna, Ruang Arsip Carik, dan Repositori Cloud 24/7.</span>
          </div>
          <button
            onClick={() => onNavigate('tempat-luaran')}
            className="px-4 py-1.5 bg-[#C0583A] hover:bg-[#9A4026] text-white font-semibold rounded-lg transition-colors shrink-0"
          >
            Lihat Peta Spasial →
          </button>
        </div>
      </section>

      {/* 12. SINERGI HEXA-HELIX & 16 MITRA KAMI */}
      <section className="bg-[#FFFDF9] py-16 border-y border-[#F4DCCB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="px-3 py-0.5 bg-[#C0583A] text-white text-[11px] font-bold rounded-full uppercase tracking-wider inline-block mb-2">
                Kolaborasi Multi-Pihak
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4A2A1E]">
                Mitra Kami: Sinergi Hexa-Helix
              </h2>
            </div>
            <button
              onClick={() => onNavigate('mitra-kami')}
              className="text-xs font-bold text-[#C0583A] hover:text-[#9A4026] flex items-center gap-1.5"
            >
              <span>Lihat Detail Seluruh 16 Mitra</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs sm:text-sm text-[#5A3A2E] leading-relaxed max-w-3xl">
            Didukung oleh sinergi 16 lembaga mencakup kementerian nasional, perguruan tinggi, dinas teknis pemerintah daerah, dan paguyuban warga Kalurahan Giripurwo.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-center text-xs">
            <div className="p-3 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-1">
              <span className="font-bold text-[#9A4026] block text-[11px]">Kemdiktisaintek</span>
              <span className="text-[10px] text-[#7C533F]">Direktorat Belmawa</span>
            </div>
            <div className="p-3 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-1">
              <span className="font-bold text-[#C0583A] block text-[11px]">Universitas Negeri Yogyakarta</span>
              <span className="text-[10px] text-[#7C533F]">LPPM & FMIPA UNY</span>
            </div>
            <div className="p-3 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-1">
              <span className="font-bold text-[#4A2A1E] block text-[11px]">Pemerintah Kalurahan</span>
              <span className="text-[10px] text-[#7C533F]">Giripurwo & 10 Dukuh</span>
            </div>
            <div className="p-3 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-1">
              <span className="font-bold text-[#6B8F4E] block text-[11px]">BPP Purwosari</span>
              <span className="text-[10px] text-[#7C533F]">Dinas Pertanian GK</span>
            </div>
            <div className="p-3 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-1">
              <span className="font-bold text-[#C9617A] block text-[11px]">Puskesmas Purwosari</span>
              <span className="text-[10px] text-[#7C533F]">Dinas Kesehatan GK</span>
            </div>
            <div className="p-3 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-1">
              <span className="font-bold text-[#8A5A3C] block text-[11px]">Dinas Pendidikan GK</span>
              <span className="text-[10px] text-[#7C533F]">Sertifikasi QRCBN</span>
            </div>
          </div>

          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onNavigate('mitra-kami')}
              className="px-6 py-2.5 bg-[#C0583A] hover:bg-[#9A4026] text-white rounded-full text-xs font-semibold transition-colors flex items-center gap-2 shadow-xs"
            >
              <span>Buka Profil Kemitraan & Matriks Sinergi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 13. IKUTI KAMI (Social Media Channels) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="space-y-2">
          <span className="px-3 py-1 bg-[#C0583A] text-[#FFFDF9] rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
            Terhubung Bersama Kami
          </span>
          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Ikuti Aktivitas & Publikasi Griya Ceria
          </h2>
          <p className="text-xs text-[#5A3A2E]">
            Simak perkembangan terkini, video edukasi, dan dokumentasi lapangan di media sosial resmi kami.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-[#FFFDF9] hover:bg-[#F4DCCB]/40 text-[#9A4026] border border-[#F4DCCB] rounded-xl text-xs font-semibold transition-all flex items-center gap-2 shadow-xs"
          >
            <Instagram className="w-4 h-4 text-[#C0583A]" />
            <span>@ppkomdc.griyaceria</span>
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-[#FFFDF9] hover:bg-[#F4DCCB]/40 text-[#9A4026] border border-[#F4DCCB] rounded-xl text-xs font-semibold transition-all flex items-center gap-2 shadow-xs"
          >
            <Video className="w-4 h-4 text-[#C0583A]" />
            <span>@ppko_mdcuny2026</span>
          </a>

          <a
            href={SITE_METADATA.videoUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-[#C0583A] hover:bg-[#9A4026] text-white rounded-xl text-xs font-semibold transition-all flex items-center gap-2 shadow-xs"
          >
            <Youtube className="w-4 h-4" />
            <span>YouTube Griya Ceria</span>
          </a>
        </div>
      </section>

    </div>
  );
};
