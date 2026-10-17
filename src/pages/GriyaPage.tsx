import React, { useState } from 'react';
import { PageId } from '../types';
import { GRIYA_LIST, JINAWI_MEETINGS, LAKU_MEETINGS, REKSA_MEETINGS, REKADAYA_MEETINGS } from '../data/siteData';
import { Badge } from '../components/Badge';
import { 
  Sprout, 
  Store, 
  HeartHandshake, 
  Laptop, 
  CheckCircle, 
  Calendar, 
  TrendingUp, 
  Download, 
  ExternalLink,
  Users,
  Award,
  ArrowRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

interface GriyaPageProps {
  initialGriya?: 'griya-jinawi' | 'griya-laku' | 'griya-reksa' | 'griya-rekadaya' | 'overview';
  onNavigate: (page: PageId, subFilter?: string) => void;
}

export const GriyaPage: React.FC<GriyaPageProps> = ({ initialGriya = 'overview', onNavigate }) => {
  const [selectedGriya, setSelectedGriya] = useState<string>(initialGriya);

  // If initial prop changes
  React.useEffect(() => {
    setSelectedGriya(initialGriya);
  }, [initialGriya]);

  const currentGriya = GRIYA_LIST.find(g => g.id === selectedGriya) || GRIYA_LIST[0];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Selector Bar */}
      <section className="bg-[#4A2A1E] text-[#FFFDF9] py-12 border-b-4 border-[#C0583A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#D9825F] uppercase tracking-widest block">
              Pendidikan Nonformal Desa Cerdas
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Empat Pojok Literasi Griya Ceria
            </h1>
            <p className="text-xs sm:text-sm text-[#FBF1E6]/85 max-w-2xl">
              Pilih pojok literasi untuk melihat profil sasaran, kronologi pertemuan, modul pembelajaran, dan produk yang dihasilkan.
            </p>
          </div>

          {/* Sub-navigation buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => setSelectedGriya('overview')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                selectedGriya === 'overview'
                  ? 'bg-[#C0583A] text-white shadow-md'
                  : 'bg-[#5A3A2E] text-[#FBF1E6] hover:bg-[#C0583A]/50'
              }`}
            >
              Ikhtisar 4 Griya & Keterpaduan
            </button>
            <button
              onClick={() => setSelectedGriya('griya-jinawi')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 ${
                selectedGriya === 'griya-jinawi'
                  ? 'bg-[#6B8F4E] text-white shadow-md'
                  : 'bg-[#5A3A2E] text-[#EEF3EA] hover:bg-[#6B8F4E]/60'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#6B8F4E]" />
              Griya Jinawi (Pupuk & Sekam)
            </button>
            <button
              onClick={() => setSelectedGriya('griya-laku')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 ${
                selectedGriya === 'griya-laku'
                  ? 'bg-[#8A5A3C] text-white shadow-md'
                  : 'bg-[#5A3A2E] text-[#F5ECE6] hover:bg-[#8A5A3C]/60'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#8A5A3C]" />
              Griya Laku (UMKM & Digital)
            </button>
            <button
              onClick={() => setSelectedGriya('griya-reksa')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 ${
                selectedGriya === 'griya-reksa'
                  ? 'bg-[#C9617A] text-white shadow-md'
                  : 'bg-[#5A3A2E] text-[#FAEDF0] hover:bg-[#C9617A]/60'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#C9617A]" />
              Griya Reksa (Gizi & Parenting)
            </button>
            <button
              onClick={() => setSelectedGriya('griya-rekadaya')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 ${
                selectedGriya === 'griya-rekadaya'
                  ? 'bg-[#4F86A8] text-white shadow-md'
                  : 'bg-[#5A3A2E] text-[#EAF2F7] hover:bg-[#4F86A8]/60'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#4F86A8]" />
              Griya Rekadaya (Literasi Pemuda)
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* VIEW 1: OVERVIEW & COMPARISON TABLE */}
        {selectedGriya === 'overview' && (
          <div className="space-y-16">
            
            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {GRIYA_LIST.map((griya) => (
                <div
                  key={griya.id}
                  className="bg-[#FFFDF9] rounded-2xl p-6 border-2 shadow-xs space-y-4 flex flex-col justify-between hover:shadow-lg transition-all"
                  style={{ borderColor: `${griya.color}40` }}
                >
                  <div className="space-y-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: griya.color }}
                    >
                      {griya.id === 'griya-jinawi' && <Sprout className="w-5 h-5" />}
                      {griya.id === 'griya-laku' && <Store className="w-5 h-5" />}
                      {griya.id === 'griya-reksa' && <HeartHandshake className="w-5 h-5" />}
                      {griya.id === 'griya-rekadaya' && <Laptop className="w-5 h-5" />}
                    </div>

                    <div>
                      <h3 className="font-bold text-lg" style={{ color: griya.darkColor }}>
                        {griya.name}
                      </h3>
                      <span className="text-xs font-semibold italic block" style={{ color: griya.color }}>
                        "{griya.tagline}"
                      </span>
                    </div>

                    <p className="text-xs text-[#5A3A2E] leading-relaxed">
                      {griya.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t space-y-3" style={{ borderColor: `${griya.color}25` }}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#7C533F]">Total Pertemuan:</span>
                      <span className="font-bold text-[#4A2A1E]">{griya.meetingsCount} Sesi</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#7C533F]">Kenaikan Skor:</span>
                      <span className="font-bold" style={{ color: griya.color }}>+{griya.increasePercent}%</span>
                    </div>

                    <button
                      onClick={() => setSelectedGriya(griya.id)}
                      className="w-full py-2 px-3 text-xs font-semibold text-white rounded-xl transition-opacity hover:opacity-90 flex items-center justify-center gap-1.5"
                      style={{ backgroundColor: griya.color }}
                    >
                      <span>Lihat Rincian Lengkap</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* TABEL PERBANDINGAN KOMPREHENSIF */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
                  Matriks Komparasi 4 Griya
                </span>
                <Badge type="REALISASI" />
              </div>

              <h2 className="text-2xl font-bold text-[#4A2A1E]">
                Tabel Perbandingan Sasaran, Pertemuan, & Luaran Utama
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-[#5A3A2E] border-collapse">
                  <thead>
                    <tr className="bg-[#F4DCCB] text-[#4A2A1E] font-bold uppercase tracking-wider text-[11px] border-b border-[#D9825F]/40">
                      <th className="p-3">Pojok Literasi</th>
                      <th className="p-3">Kelompok Sasaran</th>
                      <th className="p-3">Fokus Pembelajaran</th>
                      <th className="p-3 text-center">Pertemuan</th>
                      <th className="p-3 text-center">Pre → Post</th>
                      <th className="p-3">Luaran Utama</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F4DCCB]/60">
                    <tr className="hover:bg-[#EEF3EA]/40">
                      <td className="p-3 font-bold text-[#4A6534]">Griya Jinawi (Sage)</td>
                      <td className="p-3">22 Kelompok Tani, 3 KWT, 6 Ternak (27–60 th)</td>
                      <td className="p-3">Pengolahan limbah kotoran sapi & 50 ton sekam padi</td>
                      <td className="p-3 text-center font-bold text-[#4A2A1E]">12</td>
                      <td className="p-3 text-center font-bold text-[#6B8F4E] tabular-nums">7,11 → 18,01 (+153,38%)</td>
                      <td className="p-3">Pupuk Gemah Ripah, POC, 2 Pusat Pengolahan (Sumur & Gubar)</td>
                    </tr>
                    <tr className="hover:bg-[#F5ECE6]/40">
                      <td className="p-3 font-bold text-[#633F28]">Griya Laku (Karamel)</td>
                      <td className="p-3">Pelaku UMKM Desa Prima & Desa Preneur (33–48 th)</td>
                      <td className="p-3">Digital marketing, foto produk AI, toko Shopee, legalitas</td>
                      <td className="p-3 text-center font-bold text-[#4A2A1E]">10</td>
                      <td className="p-3 text-center font-bold text-[#8A5A3C] tabular-nums">7,51 → 18,22 (+142,47%)</td>
                      <td className="p-3">4 Akun marketplace, 9 foto produk, 4 NIB, 3 Halal, 5 HKI</td>
                    </tr>
                    <tr className="hover:bg-[#FAEDF0]/40">
                      <td className="p-3 font-bold text-[#963C53]">Griya Reksa (Dusty Rose)</td>
                      <td className="p-3">PKK & Kader Posyandu / Kesehatan (28–50 th)</td>
                      <td className="p-3">Literasi gizi stunting, olahan pangan lokal, anti-pinjol</td>
                      <td className="p-3 text-center font-bold text-[#4A2A1E]">10</td>
                      <td className="p-3 text-center font-bold text-[#C9617A] tabular-nums">7,81 → 18,10 (+131,77%)</td>
                      <td className="p-3">Buku Resep Dapur Griya Reksa (PMT), Banana Milk, Superfood Donut</td>
                    </tr>
                    <tr className="hover:bg-[#EAF2F7]/40">
                      <td className="p-3 font-bold text-[#325C75]">Griya Rekadaya (Dusty Blue)</td>
                      <td className="p-3">Karang Taruna & Forum Anak (15–20 th)</td>
                      <td className="p-3">Literasi digital, etika medsos, Canva & CapCut, anti-hoaks</td>
                      <td className="p-3 text-center font-bold text-[#4A2A1E]">10</td>
                      <td className="p-3 text-center font-bold text-[#4F86A8] tabular-nums">9,09 → 18,36 (+101,98%)</td>
                      <td className="p-3">SK Lurah Satgas Forum Anak (2026–2028), Buku Pedoman Public Speaking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 2: SUB-HALAMAN GRIYA JINAWI */}
        {selectedGriya === 'griya-jinawi' && (
          <div className="space-y-12 animate-in fade-in">
            
            {/* Hero Sub-halaman */}
            <div className="bg-[#6B8F4E] text-[#FFFDF9] rounded-2xl p-6 sm:p-10 shadow-md flex flex-col md:flex-row items-center gap-8">
              <div className="space-y-3 flex-1">
                <span className="px-3 py-1 bg-[#4A6534] rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
                  Pojok Literasi Pertanian & Peternakan
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold">Griya Jinawi</h2>
                <p className="text-sm font-semibold italic text-[#EEF3EA]">
                  "Menyemai Benih Kemakmuran"
                </p>
                <p className="text-xs sm:text-sm text-[#FBF1E6]/90 leading-relaxed">
                  Pemberdayaan kelompok tani dan ternak Giripurwo dalam mengolah limbah kotoran ternak sapi dan sekam padi melimpah menjadi pupuk kompos padat dan pupuk organik cair (POC) berkualitas dengan merek resmi "Gemah Ripah".
                </p>
              </div>

              <div className="w-full md:w-72 rounded-xl overflow-hidden shadow-md shrink-0 border-2 border-white/20">
                <img
                  src="/src/assets/images/griya_jinawi_pupuk_1792250517012.jpg"
                  alt="Petani Giripurwo memproduksi pupuk organik Gemah Ripah"
                  className="w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* 1. Sekilas & Kondisi Awal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-3">
                <h3 className="font-bold text-base text-[#4A6534]">Sekilas Sasaran & Mitra</h3>
                <ul className="space-y-2 text-xs text-[#5A3A2E]">
                  <li>• <strong>Sasaran:</strong> 22 Kelompok Tani, 3 KWT, dan 6 Kelompok Ternak di 10 padukuhan.</li>
                  <li>• <strong>Rentang Usia:</strong> 27–60 tahun (didominasi petani, peternak, dan buruh harian).</li>
                  <li>• <strong>Jumlah Pertemuan:</strong> 12 Pertemuan tatap muka intensif.</li>
                  <li>• <strong>Mitra Pendamping:</strong> Balai Penyuluhan Pertanian (BPP) Purwosari & Dinas Lingkungan Hidup [RANCANGAN].</li>
                </ul>
              </div>

              <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-3">
                <h3 className="font-bold text-base text-[#9A4026]">Kondisi Awal / Masalah yang Dijawab</h3>
                <p className="text-xs text-[#5A3A2E] leading-relaxed">
                  Sekitar 50 ton sekam padi menumpuk di gudang penggilingan dan limbah kotoran dari 2.647 ekor sapi mencemari lingkungan pemukiman warga karena belum adanya keterampilan fermentasi dan formulasi dekomposer yang tepat. Petani masih tergantung pada pupuk kimia subsidi yang langka dan mahal.
                </p>
              </div>
            </div>

            {/* 2. Formulasi Bahan [RANCANGAN] */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-[#4A6534]">Formulasi & Komposisi Bahan Pupuk</h3>
                <Badge type="RANCANGAN" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-[#EEF3EA] rounded-xl space-y-1.5">
                  <span className="font-bold text-[#4A6534] block text-sm">Kompos Organik Padat:</span>
                  <p>Bahan: Sekam padi, kotoran hewan (sapi/kambing), dedak bekatul, kapur dolomit, dekomposer M21, molase tebu, dan air bersih.</p>
                </div>
                <div className="p-4 bg-[#EEF3EA] rounded-xl space-y-1.5">
                  <span className="font-bold text-[#4A6534] block text-sm">Pupuk Organik Cair (POC):</span>
                  <p>Bahan: Kotoran hewan, sekam, dedak, gula merah, bio-aktivator EM4 pertanian, mikroorganisme lokal batang pisang, dan air.</p>
                </div>
              </div>
            </div>

            {/* 3. Kronologi 12 Pertemuan [REALISASI] */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-[#4A6534]">Kronologi 12 Pertemuan Griya Jinawi</h3>
                <Badge type="REALISASI" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {JINAWI_MEETINGS.map((m) => (
                  <div key={m.no} className="p-3 rounded-xl bg-[#FBF1E6] border border-[#F4DCCB] text-xs">
                    <div className="flex items-center justify-between text-[#6B8F4E] font-bold text-[11px] mb-1">
                      <span>Pertemuan {m.no}</span>
                      <span>{m.date}</span>
                    </div>
                    <span className="text-[#4A2A1E] font-medium leading-snug block">{m.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Analisis Produk (SWOT) [RANCANGAN] */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-[#4A6534]">Analisis SWOT Pupuk Gemah Ripah</h3>
                <Badge type="RANCANGAN" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-[#EEF3EA] rounded-xl space-y-1">
                  <span className="font-bold text-[#4A6534] block">Kekuatan (Strengths):</span>
                  <p>Bahan baku melimpah & murah di desa, ramah lingkungan, kandungan hara lengkap, memperbaiki struktur tanah jangka panjang, biaya produksi rendah, dapat divariasikan untuk aneka komoditas.</p>
                </div>

                <div className="p-4 bg-[#FAEDF0] rounded-xl space-y-1">
                  <span className="font-bold text-[#963C53] block">Kelemahan (Weaknesses):</span>
                  <p>Aroma menyengat saat tahap fermentasi awal (bergantung aerasi dan kadar air); POC memiliki masa simpan terbatas jika tidak ditutup rapat.</p>
                </div>

                <div className="p-4 bg-[#EEF3EA] rounded-xl space-y-1">
                  <span className="font-bold text-[#4A6534] block">Peluang (Opportunities):</span>
                  <p>Tingginya tren pertanian organik dan urban farming, dukungan kebijakan nasional pupuk organik, branding eco-friendly, penjualan daring lewat marketplace UMKM Laku.</p>
                </div>

                <div className="p-4 bg-[#FAEDF0] rounded-xl space-y-1">
                  <span className="font-bold text-[#963C53] block">Tantangan (Threats):</span>
                  <p>Kecenderungan petani memakai pupuk kimia karena efek instan, resistensi kebiasaan lama, serta perlunya kepatuhan pada standar uji mutu laboratorium.</p>
                </div>
              </div>
            </div>

            {/* 5. Capaian & Unduh Modul */}
            <div className="p-6 bg-[#EEF3EA] rounded-2xl border border-[#6B8F4E]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#4A6534] uppercase block">Capaian Pre-Test ke Post-Test:</span>
                <span className="text-2xl font-bold text-[#4A6534] tabular-nums">7,11 → 18,01 (+153,38%)</span>
                <span className="text-xs text-[#5A3A2E] block mt-0.5">2 Pusat Pengolahan Pupuk diresmikan di Padukuhan Sumur & Gubar</span>
              </div>
              <div className="flex gap-2">
                <button
                  disabled
                  className="px-4 py-2 bg-[#6B8F4E]/60 text-white rounded-xl text-xs font-semibold cursor-not-allowed"
                >
                  Unduh Modul [ISI NANTI]
                </button>
                <button
                  disabled
                  className="px-4 py-2 bg-[#4A6534]/60 text-white rounded-xl text-xs font-semibold cursor-not-allowed"
                >
                  Unduh Buku Materi [ISI NANTI]
                </button>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 3: SUB-HALAMAN GRIYA LAKU */}
        {selectedGriya === 'griya-laku' && (
          <div className="space-y-12 animate-in fade-in">
            
            <div className="bg-[#8A5A3C] text-[#FFFDF9] rounded-2xl p-6 sm:p-10 shadow-md flex flex-col md:flex-row items-center gap-8">
              <div className="space-y-3 flex-1">
                <span className="px-3 py-1 bg-[#633F28] rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
                  Pojok Literasi UMKM & Digital Marketing
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold">Griya Laku</h2>
                <p className="text-sm font-semibold italic text-[#F5ECE6]">
                  "Membentangkan Sayap UMKM"
                </p>
                <p className="text-xs sm:text-sm text-[#FBF1E6]/90 leading-relaxed">
                  Peningkatan kapasitas pelaku usaha mikro Desa Prima dan Desa Preneur melalui pemanfaatan gawai cerdas, fotografi produk dengan studio mini, optimasi AI untuk copywriting, pembuatan akun marketplace, dan pendampingan izin resmi NIB serta sertifikasi halal.
                </p>
              </div>

              <div className="w-full md:w-72 rounded-xl overflow-hidden shadow-md shrink-0 border-2 border-white/20">
                <img
                  src="/src/assets/images/griya_laku_umkm_1792250518910.jpg"
                  alt="Produk UMKM Giripurwo siap dipasarkan di marketplace"
                  className="w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-3">
                <h3 className="font-bold text-base text-[#633F28]">Sekilas Sasaran & Mitra</h3>
                <ul className="space-y-2 text-xs text-[#5A3A2E]">
                  <li>• <strong>Sasaran:</strong> Pelaku UMKM Desa Prima & Desa Preneur (usia 33–48 tahun).</li>
                  <li>• <strong>Profesi Peserta:</strong> Pedagang olahan makanan, buruh harian, ibu rumah tangga.</li>
                  <li>• <strong>Jumlah Pertemuan:</strong> 10 Pertemuan intensif tatap muka & pendampingan teknis.</li>
                  <li>• <strong>Mitra Pendamping:</strong> DPMPTSP Gunungkidul (NIB), Kementerian Agama (Halal), Dinas Kesehatan (PIRT), Dinas Perindustrian, Koperasi, UKM [RANCANGAN].</li>
                </ul>
              </div>

              <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-3">
                <h3 className="font-bold text-base text-[#9A4026]">Kondisi Awal / Masalah yang Dijawab</h3>
                <p className="text-xs text-[#5A3A2E] leading-relaxed">
                  Sebanyak 427 UMKM hanya mengandalkan penjualan konvensional dari mulut ke mulut dengan kemasan seadanya tanpa label nutrisi dan izin edar. Belum ada satu pun pelaku usaha yang memiliki akun penjual (seller) di e-commerce seperti Shopee, dan omzet terhambat radius lokal kalurahan.
                </p>
              </div>
            </div>

            {/* Produk UMKM Binaan Giripurwo */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4">
              <h3 className="font-bold text-lg text-[#633F28]">Ragam Komoditas UMKM Giripurwo</h3>
              <p className="text-xs text-[#5A3A2E]">
                Sektor Pangan: tempe, tahu, peyek, bakpia/pia kering, kerupuk, emping jagung, olahan singkong & pisang. Sektor Non-Pangan: batik dan kerajinan batok kelapa khas Purwosari.
              </p>
            </div>

            {/* Kronologi 10 Pertemuan */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-[#633F28]">Kronologi 10 Pertemuan Griya Laku</h3>
                <Badge type="REALISASI" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {LAKU_MEETINGS.map((m) => (
                  <div key={m.no} className="p-3 rounded-xl bg-[#FBF1E6] border border-[#F4DCCB] text-xs">
                    <div className="flex items-center justify-between text-[#8A5A3C] font-bold text-[11px] mb-1">
                      <span>Pertemuan {m.no}</span>
                      <span>{m.date}</span>
                    </div>
                    <span className="text-[#4A2A1E] font-medium leading-snug block">{m.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Luaran Riil & Capaian */}
            <div className="p-6 bg-[#F5ECE6] rounded-2xl border border-[#8A5A3C]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#633F28] uppercase block">Capaian Pre-Test ke Post-Test:</span>
                <span className="text-2xl font-bold text-[#633F28] tabular-nums">7,51 → 18,22 (+142,47%)</span>
                <span className="text-xs text-[#5A3A2E] block mt-0.5">4 Toko Online Diresmikan, 4 NIB, 3 Sertifikat Halal, 5 HKI Terbit</span>
              </div>
              <div className="flex gap-2">
                <button
                  disabled
                  className="px-4 py-2 bg-[#8A5A3C]/60 text-white rounded-xl text-xs font-semibold cursor-not-allowed"
                >
                  Unduh Modul [ISI NANTI]
                </button>
                <button
                  disabled
                  className="px-4 py-2 bg-[#633F28]/60 text-white rounded-xl text-xs font-semibold cursor-not-allowed"
                >
                  Unduh Buku Materi [ISI NANTI]
                </button>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 4: SUB-HALAMAN GRIYA REKSA */}
        {selectedGriya === 'griya-reksa' && (
          <div className="space-y-12 animate-in fade-in">
            
            <div className="bg-[#C9617A] text-[#FFFDF9] rounded-2xl p-6 sm:p-10 shadow-md flex flex-col md:flex-row items-center gap-8">
              <div className="space-y-3 flex-1">
                <span className="px-3 py-1 bg-[#963C53] rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
                  Pojok Literasi Gizi, Parenting & Finansial
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold">Griya Reksa</h2>
                <p className="text-sm font-semibold italic text-[#FAEDF0]">
                  "Keluarga Sehat, Ibu Semangat"
                </p>
                <p className="text-xs sm:text-sm text-[#FBF1E6]/90 leading-relaxed">
                  Membangun ketahanan fisik dan psikologis keluarga melalui edukasi pengolahan pangan lokal pencegah stunting, pola asuh anak yang positif, dan literasi pengelolaan keuangan rumah tangga untuk membentengi warga dari jeratan rentenir dan pinjol ilegal.
                </p>
              </div>

              <div className="w-full md:w-72 rounded-xl overflow-hidden shadow-md shrink-0 border-2 border-white/20">
                <img
                  src="/src/assets/images/griya_reksa_dapur_1792250520199.jpg"
                  alt="Ibu kader PKK dan Posyandu mempraktikkan menu bergizi daun kelor dan pisang"
                  className="w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-3">
                <h3 className="font-bold text-base text-[#963C53]">Sekilas Sasaran & Mitra</h3>
                <ul className="space-y-2 text-xs text-[#5A3A2E]">
                  <li>• <strong>Sasaran:</strong> Kader PKK dan kader kesehatan posyandu (usia 28–50 tahun).</li>
                  <li>• <strong>Profesi:</strong> Guru PAUD/TK, kader posyandu, dan ibu rumah tangga.</li>
                  <li>• <strong>Jumlah Pertemuan:</strong> 10 Pertemuan tatap muka & praktik memasak.</li>
                  <li>• <strong>Mitra Pendamping:</strong> Puskesmas Purwosari, Dinas Kesehatan Gunungkidul, dan OJK DIY (edukasi keuangan; berlanjut 2027).</li>
                </ul>
              </div>

              <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-3">
                <h3 className="font-bold text-base text-[#9A4026]">Kondisi Awal / Masalah yang Dijawab</h3>
                <p className="text-xs text-[#5A3A2E] leading-relaxed">
                  Angka stunting di Giripurwo meningkat dari 17 kasus pada 2024 menjadi 31 kasus pada 2025 akibat rendahnya variasi olahan gizi anak, serta tercatatnya 4 kasus jeratan pinjaman online ilegal dan kebiasaan meminjam bank plecit dengan bunga tinggi.
                </p>
              </div>
            </div>

            {/* Inovasi Menu Praktik [RANCANGAN] */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-[#963C53]">Contoh Inovasi Menu Praktik Gizi Sehat</h3>
                <Badge type="RANCANGAN" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-[#FAEDF0] rounded-xl space-y-1">
                  <span className="font-bold text-[#963C53] block text-sm">1. Banana Milk:</span>
                  <p>Minuman sehat padat gizi berbahan dasar pisang kepok lokal, telur, susu UHT murni, kismis, dan keju parut sebagai sumber protein & kalsium anak.</p>
                </div>
                <div className="p-4 bg-[#FAEDF0] rounded-xl space-y-1">
                  <span className="font-bold text-[#963C53] block text-sm">2. Superfood Donut:</span>
                  <p>Donat lembut bergizi kaya zat besi dan antioksidan dari ekstrak daun kelor segar, pisang uter, kacang tanah, dan selai coklat yang disukai balita.</p>
                </div>
                <div className="p-4 bg-[#FAEDF0] rounded-xl space-y-1">
                  <span className="font-bold text-[#963C53] block text-sm">3. Wedangan Rempah:</span>
                  <p>Minuman imun keluarga berbahan temulawak, kunyit, kayu manis, cengkeh, jeruk nipis, jahe emprit, dan serai penghangat tubuh.</p>
                </div>
              </div>
            </div>

            {/* Kronologi 10 Pertemuan */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-[#963C53]">Kronologi 10 Pertemuan Griya Reksa</h3>
                <Badge type="REALISASI" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {REKSA_MEETINGS.map((m) => (
                  <div key={m.no} className="p-3 rounded-xl bg-[#FBF1E6] border border-[#F4DCCB] text-xs">
                    <div className="flex items-center justify-between text-[#C9617A] font-bold text-[11px] mb-1">
                      <span>Pertemuan {m.no}</span>
                      <span>{m.date}</span>
                    </div>
                    <span className="text-[#4A2A1E] font-medium leading-snug block">{m.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Luaran & Capaian */}
            <div className="p-6 bg-[#FAEDF0] rounded-2xl border border-[#C9617A]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#963C53] uppercase block">Capaian Pre-Test ke Post-Test:</span>
                <span className="text-2xl font-bold text-[#963C53] tabular-nums">7,81 → 18,10 (+131,77%)</span>
                <span className="text-xs text-[#5A3A2E] block mt-0.5">Buku Resep "Dapur Griya Reksa" dijadikan pedoman resmi PMT Balita Kalurahan</span>
              </div>
              <div className="flex gap-2">
                <button
                  disabled
                  className="px-4 py-2 bg-[#C9617A]/60 text-white rounded-xl text-xs font-semibold cursor-not-allowed"
                >
                  Unduh Modul [ISI NANTI]
                </button>
                <button
                  disabled
                  className="px-4 py-2 bg-[#963C53]/60 text-white rounded-xl text-xs font-semibold cursor-not-allowed"
                >
                  Unduh Buku Materi [ISI NANTI]
                </button>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 5: SUB-HALAMAN GRIYA REKADAYA */}
        {selectedGriya === 'griya-rekadaya' && (
          <div className="space-y-12 animate-in fade-in">
            
            <div className="bg-[#4F86A8] text-[#FFFDF9] rounded-2xl p-6 sm:p-10 shadow-md flex flex-col md:flex-row items-center gap-8">
              <div className="space-y-3 flex-1">
                <span className="px-3 py-1 bg-[#325C75] rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
                  Pojok Literasi Digital & Karakter Pemuda
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold">Griya Rekadaya</h2>
                <p className="text-sm font-semibold italic text-[#EAF2F7]">
                  "Jadikan Dunia Digital Sebagai Teman"
                </p>
                <p className="text-xs sm:text-sm text-[#FBF1E6]/90 leading-relaxed">
                  Membina generasi muda Karang Taruna dan Forum Anak agar cakap, kritis, dan beretika dalam menggunakan teknologi digital, mampu memproduksi karya desain Canva dan video CapCut untuk desa, serta dikukuhkan menjadi Satgas Forum Anak Kalurahan.
                </p>
              </div>

              <div className="w-full md:w-72 rounded-xl overflow-hidden shadow-md shrink-0 border-2 border-white/20">
                <img
                  src="/src/assets/images/griya_rekadaya_digital_1792250519109.jpg"
                  alt="Pemuda Karang Taruna Giripurwo belajar desain Canva dan video editing"
                  className="w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-3">
                <h3 className="font-bold text-base text-[#325C75]">Sekilas Sasaran & Mitra</h3>
                <ul className="space-y-2 text-xs text-[#5A3A2E]">
                  <li>• <strong>Sasaran:</strong> Karang Taruna dan Forum Anak (usia 15–20 tahun / SMP-SMA).</li>
                  <li>• <strong>Persebaran:</strong> Perwakilan pemuda dari 10 padukuhan Giripurwo.</li>
                  <li>• <strong>Jumlah Pertemuan:</strong> 10 Pertemuan workshop kreatif tatap muka.</li>
                  <li>• <strong>Mitra Pendamping:</strong> Dinas PPPA Sosial Kabupaten Gunungkidul & Dinas Komunikasi dan Informatika (Kominfo).</li>
                </ul>
              </div>

              <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-3">
                <h3 className="font-bold text-base text-[#9A4026]">Kondisi Awal / Masalah yang Dijawab</h3>
                <p className="text-xs text-[#5A3A2E] leading-relaxed">
                  Pemuda merupakan pengguna aktif gawai, namun 79,3% hanya memakainya untuk media sosial hiburan dan game online. Sebanyak 24,1% pemuda belum paham cara memverifikasi kebenaran berita hoaks dan 55,2% belum pernah mendapatkan edukasi etika digital atau netiket.
                </p>
              </div>
            </div>

            {/* Kelembagaan Satgas Forum Anak */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-[#325C75]">Pengukuhan Satgas Forum Anak Kalurahan Giripurwo</h3>
                <Badge type="REALISASI" />
              </div>
              <p className="text-xs sm:text-sm text-[#5A3A2E] leading-relaxed">
                Sebagai luaran legalitas keberlanjutan, Pemerintah Kalurahan menerbitkan <strong>SK Lurah Giripurwo</strong> tentang Pengukuhan Satgas Forum Anak sebagai <em>Pelopor dan Pelapor (2P)</em> masa bakti <strong>2026–2028</strong>. Satgas bertugas menjadi benteng teman sebaya dalam penangkalan disinformasi, pencegahan perundungan siber, dan edukasi literasi digital berkelanjutan.
              </p>
            </div>

            {/* Kronologi 10 Pertemuan */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-[#325C75]">Kronologi 10 Pertemuan Griya Rekadaya</h3>
                <Badge type="REALISASI" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {REKADAYA_MEETINGS.map((m) => (
                  <div key={m.no} className="p-3 rounded-xl bg-[#FBF1E6] border border-[#F4DCCB] text-xs">
                    <div className="flex items-center justify-between text-[#4F86A8] font-bold text-[11px] mb-1">
                      <span>Pertemuan {m.no}</span>
                      <span>{m.date}</span>
                    </div>
                    <span className="text-[#4A2A1E] font-medium leading-snug block">{m.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Luaran & Capaian */}
            <div className="p-6 bg-[#EAF2F7] rounded-2xl border border-[#4F86A8]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#325C75] uppercase block">Capaian Pre-Test ke Post-Test:</span>
                <span className="text-2xl font-bold text-[#325C75] tabular-nums">9,09 → 18,36 (+101,98%)</span>
                <span className="text-xs text-[#5A3A2E] block mt-0.5">Buku Panduan Satgas Forum Anak & Buku Pedoman Public Speaking Resmi Diterbitkan</span>
              </div>
              <div className="flex gap-2">
                <button
                  disabled
                  className="px-4 py-2 bg-[#4F86A8]/60 text-white rounded-xl text-xs font-semibold cursor-not-allowed"
                >
                  Unduh Modul [ISI NANTI]
                </button>
                <button
                  disabled
                  className="px-4 py-2 bg-[#325C75]/60 text-white rounded-xl text-xs font-semibold cursor-not-allowed"
                >
                  Unduh Buku Materi [ISI NANTI]
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
