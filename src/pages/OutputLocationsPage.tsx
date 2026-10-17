import React, { useState } from 'react';
import { PageId } from '../types';
import { OUTPUT_LOCATIONS_DATA } from '../data/siteData';
import { Badge } from '../components/Badge';
import { 
  MapPin, 
  Package, 
  CheckCircle2, 
  Search, 
  ArrowRight,
  Users,
  Compass
} from 'lucide-react';

interface OutputLocationsPageProps {
  onNavigate: (page: PageId, subFilter?: string) => void;
}

export const OutputLocationsPage: React.FC<OutputLocationsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);

  const categories = [
    { id: 'semua', label: 'Semua Sentra (8 Titik)' },
    { id: 'balai', label: 'Pusat Balai Kalurahan' },
    { id: 'pertanian', label: 'Sentra Pupuk Jinawi' },
    { id: 'umkm', label: 'Sentra UMKM Laku' },
    { id: 'posyandu', label: 'Dapur PMT Reksa' },
    { id: 'pemuda', label: 'Ruang Karang Taruna Rekadaya' },
    { id: 'arsip', label: 'Kantor Kalurahan' },
    { id: 'digital', label: 'Platform Daring' },
  ];

  const filteredLocations = OUTPUT_LOCATIONS_DATA.filter((loc) => {
    const matchesCategory = 
      selectedCategory === 'semua' || 
      loc.category === selectedCategory ||
      (selectedCategory === 'balai' && (loc.category === 'balai' || loc.category === 'arsip'));

    const matchesSearch = 
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.locationArea.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.community.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.storedOutputs.some(o => 
        o.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.type.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Banner */}
      <section className="bg-[#9A4026] text-[#FFFDF9] py-14 border-b-4 border-[#C0583A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFFDF9]/15 px-3 py-1 rounded-full text-xs font-semibold">
            <span>Sentra & Tempat Sebaran Luaran</span>
            <span>·</span>
            <span className="text-[#F4DCCB]">Sesuai Sublaporan Akhir PPK Ormawa 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Tempat & Sentra Sebaran Semua Luaran
          </h1>
          <p className="text-sm sm:text-base text-[#FBF1E6]/90 max-w-3xl leading-relaxed">
            Daftar sentra dan lokasi penempatan luaran produk program Griya Ceria di Kalurahan Giripurwo. Setiap sentra dikelola bersama kelompok tani, kelompok usaha UMKM, kader PKK posyandu, dan pemuda Karang Taruna.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Ringkasan Statistik Titik Luaran */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 bg-[#FFFDF9] rounded-2xl border border-[#F4DCCB] shadow-xs space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#9A4026]">8 Sentra</span>
            <span className="text-xs font-bold text-[#4A2A1E] block">Titik Sebaran Program</span>
            <p className="text-[11px] text-[#7C533F]">Sentra terdistribusi di padukuhan dan balai kalurahan</p>
          </div>

          <div className="p-5 bg-[#FFFDF9] rounded-2xl border border-[#F4DCCB] shadow-xs space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#6B8F4E]">104 Luaran</span>
            <span className="text-xs font-bold text-[#4A2A1E] block">Produk & Hasil Nyata</span>
            <p className="text-[11px] text-[#7C533F]">Tercantum dalam lampiran sublaporan akhir</p>
          </div>

          <div className="p-5 bg-[#FFFDF9] rounded-2xl border border-[#F4DCCB] shadow-xs space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#8A5A3C]">10 Padukuhan</span>
            <span className="text-xs font-bold text-[#4A2A1E] block">Wilayah Jangkauan</span>
            <p className="text-[11px] text-[#7C533F]">Melibatkan warga, petani, UMKM, ibu balita, dan pemuda</p>
          </div>

          <div className="p-5 bg-[#FFFDF9] rounded-2xl border border-[#F4DCCB] shadow-xs space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#4F86A8]">Berdaya</span>
            <span className="text-xs font-bold text-[#4A2A1E] block">Kemandirian Warga</span>
            <p className="text-[11px] text-[#7C533F]">Dikelola langsung oleh komunitas kalurahan</p>
          </div>
        </section>

        {/* Peta Ringkas Sebaran Sentra Kalurahan Giripurwo */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block mb-1">
                Sebaran Lokasi Program
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#4A2A1E]">
                Sebaran Sentra & Tempat Luaran di Kalurahan Giripurwo
              </h2>
              <p className="text-xs sm:text-sm text-[#7C533F]">
                Klik pada salah satu sentra di bawah untuk melihat luaran yang berada di lokasi tersebut.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#FBF1E6] px-3 py-1.5 rounded-xl border border-[#F4DCCB] text-xs font-medium text-[#7C533F]">
              <Compass className="w-4 h-4 text-[#9A4026]" />
              <span>Kalurahan Giripurwo, Kapanewon Purwosari</span>
            </div>
          </div>

          {/* Grid Sentra */}
          <div className="bg-gradient-to-br from-[#FBF1E6] to-[#F4DCCB]/50 rounded-2xl p-6 border border-[#F4DCCB]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {OUTPUT_LOCATIONS_DATA.map((hub, index) => {
                const isSelected = activeLocationId === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setActiveLocationId(isSelected ? null : hub.id)}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-[#FFFDF9] border-[#C0583A] shadow-md ring-2 ring-[#C0583A]/30 scale-[1.02]'
                        : 'bg-[#FFFDF9]/90 hover:bg-[#FFFDF9] border-[#F4DCCB] hover:shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div 
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: hub.color }}
                      >
                        {index + 1}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#7C533F] px-2 py-0.5 bg-[#FBF1E6] rounded-full">
                        {hub.categoryLabel}
                      </span>
                    </div>

                    <h4 className="font-bold text-xs sm:text-sm text-[#4A2A1E] leading-snug line-clamp-1">
                      {hub.shortName}
                    </h4>
                    <p className="text-[11px] text-[#5A3A2E] mt-1 line-clamp-1">
                      {hub.locationArea}
                    </p>

                    <div className="mt-3 pt-2 border-t border-[#F4DCCB]/60 flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-[#9A4026]">
                        {hub.storedOutputs.length} Luaran
                      </span>
                      <span className="text-[#7C533F]">
                        {isSelected ? 'Tutup Detail' : 'Buka Detail →'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Expanded Active Pin Drawer */}
            {activeLocationId && (
              <div className="mt-6 p-5 bg-[#FFFDF9] rounded-xl border-2 border-[#C0583A] animate-in fade-in slide-in-from-top-2 space-y-4">
                {(() => {
                  const hub = OUTPUT_LOCATIONS_DATA.find(h => h.id === activeLocationId);
                  if (!hub) return null;
                  return (
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F4DCCB] pb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span 
                              className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white uppercase"
                              style={{ backgroundColor: hub.color }}
                            >
                              {hub.categoryLabel}
                            </span>
                            <span className="text-xs text-[#7C533F] font-medium">{hub.locationArea}</span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-[#4A2A1E] mt-1">
                            {hub.name}
                          </h3>
                        </div>
                        <button
                          onClick={() => setActiveLocationId(null)}
                          className="self-start sm:self-center px-3 py-1 bg-[#FBF1E6] hover:bg-[#F4DCCB] text-[#9A4026] text-xs font-bold rounded-lg transition-colors"
                        >
                          Tutup
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="space-y-2">
                          <p className="text-[#5A3A2E] leading-relaxed">{hub.description}</p>
                          <div className="p-3 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB]/70 space-y-1">
                            <span className="text-[10px] font-bold text-[#7C533F] uppercase block">Pengelola / Komunitas:</span>
                            <p className="font-semibold text-[#4A2A1E] text-xs">{hub.community}</p>
                          </div>
                        </div>

                        <div className="p-3 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-2">
                          <span className="text-[11px] font-bold text-[#9A4026] uppercase block">
                            Daftar Luaran yang Berada di Sentra Ini:
                          </span>
                          <ul className="space-y-1.5">
                            {hub.storedOutputs.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 text-[11px] text-[#4A2A1E]">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#6B8F4E] shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-semibold">{item.title}</span>
                                  <span className="text-[10px] text-[#7C533F] block font-mono">
                                    Jenis: {item.type}
                                  </span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#7C533F] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari sentra, nama produk, atau komunitas pengelola..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#FFFDF9] border border-[#F4DCCB] rounded-xl text-[#4A2A1E] placeholder-[#7C533F]/70 focus:outline-hidden focus:border-[#C0583A] focus:ring-1 focus:ring-[#C0583A]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#7C533F] hover:text-[#9A4026]"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Quick Actions */}
            <button
              onClick={() => onNavigate('luaran', 'semua')}
              className="px-4 py-2.5 bg-[#FFFDF9] hover:bg-[#FBF1E6] border border-[#F4DCCB] rounded-xl text-xs font-semibold text-[#9A4026] transition-colors shadow-xs flex items-center gap-1.5"
            >
              <Package className="w-3.5 h-3.5" />
              <span>Katalog Semua Luaran Produk Sublaporan Akhir →</span>
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FFFDF9] rounded-2xl border border-[#F4DCCB] shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#C0583A] text-white shadow-xs'
                    : 'text-[#5A3A2E] hover:bg-[#F4DCCB]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Detailed Cards Grid of All Output Places */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#4A2A1E]">
              Daftar Sentra & Tempat Penempatan Luaran ({filteredLocations.length})
            </h3>
            <span className="text-xs text-[#7C533F]">
              Berdasarkan Sublaporan Akhir PPK Ormawa 2026
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredLocations.map((hub) => (
              <div
                key={hub.id}
                className="bg-[#FFFDF9] rounded-2xl border border-[#F4DCCB] shadow-xs p-6 space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase text-white"
                          style={{ backgroundColor: hub.color }}
                        >
                          {hub.categoryLabel}
                        </span>
                        <span className="text-[11px] font-semibold text-[#7C533F]">
                          {hub.locationArea}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-[#4A2A1E] leading-snug">
                        {hub.name}
                      </h4>
                    </div>

                    <div 
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: hub.color }}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs text-[#5A3A2E] leading-relaxed">
                    {hub.description}
                  </p>

                  {/* Pengelola / Komunitas */}
                  <div className="p-3 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB]/70 flex items-center gap-2 text-xs">
                    <Users className="w-4 h-4 text-[#9A4026] shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-[#7C533F] uppercase block">Pengelola / Komunitas:</span>
                      <span className="font-semibold text-[#4A2A1E]">{hub.community}</span>
                    </div>
                  </div>

                  {/* Inventaris Luaran */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-bold text-[#4A2A1E] uppercase tracking-wider block">
                      Luaran yang Tersimpan / Dihasilkan di Sini:
                    </span>
                    <div className="space-y-1.5">
                      {hub.storedOutputs.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 bg-[#FFFDF9] border border-[#F4DCCB] rounded-xl flex items-start justify-between gap-2 text-xs"
                        >
                          <div>
                            <span className="font-semibold text-[#4A2A1E] block text-[11px] leading-snug">
                              {item.title}
                            </span>
                            <span className="text-[10px] text-[#7C533F]">{item.type}</span>
                          </div>
                          <Badge type={item.badge} className="shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F4DCCB] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#7C533F]">
                    Data sesuai sublaporan akhir
                  </span>
                  <button
                    onClick={() => onNavigate('luaran')}
                    className="px-3 py-1.5 bg-[#FBF1E6] hover:bg-[#F4DCCB] text-[#9A4026] rounded-xl font-semibold border border-[#F4DCCB] transition-colors flex items-center gap-1 shadow-xs text-xs"
                  >
                    <span>Katalog Luaran</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tabel Ringkas Sebaran Luaran */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4">
          <div className="space-y-1">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
              Tabel Sentra Luaran
            </span>
            <h3 className="text-xl font-bold text-[#4A2A1E]">
              Ringkasan Sentra & Penempatan Luaran Produk
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#FBF1E6] border-b border-[#F4DCCB] text-[#4A2A1E]">
                  <th className="p-3 font-bold">Sentra / Tempat</th>
                  <th className="p-3 font-bold">Lokasi</th>
                  <th className="p-3 font-bold">Pengelola</th>
                  <th className="p-3 font-bold">Luaran Produk yang Ditempatkan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4DCCB]/60 text-[#5A3A2E]">
                <tr>
                  <td className="p-3 font-bold text-[#C0583A]">Pusat Pojok Literasi (Lantai 1)</td>
                  <td className="p-3">Balai Kalurahan Giripurwo</td>
                  <td className="p-3">Pengurus Lembaga Griya Ceria</td>
                  <td className="p-3">Buku Kurikulum QRCBN, 4 Modul Praktis, Buku Panduan Satgas Forum Anak & Public Speaking, Display Sampel Produk</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#6B8F4E]">Sentra Pupuk Sumur (Griya Jinawi)</td>
                  <td className="p-3">Padukuhan Sumur</td>
                  <td className="p-3">Kelompok Tani Sumur & Kader Jinawi</td>
                  <td className="p-3">Pupuk Kompos Padat "Gemah Ripah", Pupuk Organik Cair (POC) Botol 1L, SOP Pembuatan Pupuk</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#4A6534]">Sentra Pupuk & Demoplot Gubar (Griya Jinawi)</td>
                  <td className="p-3">Padukuhan Gubar</td>
                  <td className="p-3">Kelompok Tani Gubar & BPP Purwosari</td>
                  <td className="p-3">Arang Sekam Padi, MOL Batang Pisang, Demoplot Tanaman Uji Kalurahan</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#8A5A3C]">Sentra UMKM Temon (Griya Laku)</td>
                  <td className="p-3">Padukuhan Temon</td>
                  <td className="p-3">Desa Prima & Desa Preneur</td>
                  <td className="p-3">Produk Olahan Pangan (Bakpia, Peyek, Emping Jagung, Keripik Pisang), 4 NIB OSS, 3 Sertifikat Halal, Mini Studio Foto, Toko Shopee</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#C9617A]">Dapur PMT Kacangan (Griya Reksa)</td>
                  <td className="p-3">Padukuhan Kacangan & Posyandu</td>
                  <td className="p-3">Kader TP PKK & Posyandu</td>
                  <td className="p-3">Buku Resep "Dapur Griya Reksa", Banana Milk, Superfood Donut Kelor, Wedangan Rempah, Format Kas Keluarga, Poster Stunting</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#4F86A8]">Ruang Karang Taruna (Griya Rekadaya)</td>
                  <td className="p-3">Balai Kalurahan (Sayap Barat)</td>
                  <td className="p-3">Karang Taruna & Satgas Forum Anak</td>
                  <td className="p-3">SK Lurah Satgas Forum Anak, Buku Panduan Forum Anak, Poster Netiket, Desain Canva & Video CapCut</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#4A2A1E]">Kantor Kalurahan Giripurwo</td>
                  <td className="p-3">Kantor Pemerintahan Giripurwo</td>
                  <td className="p-3">Pamong Kalurahan (Lurah & Carik)</td>
                  <td className="p-3">Naskah Asli SK Lurah No. 18 & 19/KPTS/2026, Berita Acara Serah Terima (BAST)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#9A4026]">Platform Daring & Media Sosial</td>
                  <td className="p-3">Daring / Akses Publik Online</td>
                  <td className="p-3">Tim Media MDC & Pengurus Toko</td>
                  <td className="p-3">4 Akun Marketplace Shopee, Video Dokumenter YouTube, Konten Instagram/TikTok, PDF E-Book Kurikulum & Resep</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Blok Lanjut Baca */}
        <section className="p-6 bg-[#F4DCCB]/40 rounded-2xl border border-[#F4DCCB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#9A4026] uppercase block">Lanjut Jelajah:</span>
            <span className="text-sm font-semibold text-[#4A2A1E]">Lihat seluruh luaran produk atau profil mitra pendukung</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('luaran', 'semua')}
              className="px-4 py-2 text-xs font-semibold bg-[#C0583A] hover:bg-[#9A4026] text-white rounded-xl transition-colors shadow-xs"
            >
              Katalog Semua Luaran Produk →
            </button>
            <button
              onClick={() => onNavigate('mitra-kami')}
              className="px-4 py-2 text-xs font-semibold bg-[#FFFDF9] hover:bg-[#FBF1E6] text-[#9A4026] rounded-xl border border-[#F4DCCB] transition-colors shadow-xs"
            >
              Mitra Kami (16 Lembaga) →
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
