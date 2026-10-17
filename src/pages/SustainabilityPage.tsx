import React from 'react';
import { PageId } from '../types';
import { Badge } from '../components/Badge';
import { 
  ShieldCheck, 
  Users, 
  Sprout, 
  Store, 
  Heart, 
  Laptop, 
  ArrowRight,
  Sparkles,
  CalendarCheck
} from 'lucide-react';

interface SustainabilityPageProps {
  onNavigate: (page: PageId) => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onNavigate }) => {
  const pillars = [
    {
      title: '1. Pengesahan SK Lembaga Griya Ceria Kalurahan',
      icon: ShieldCheck,
      color: '#C0583A',
      desc: 'Keberlanjutan program dijamin dengan pelembagaan formal melalui Surat Keputusan Lurah Giripurwo. Pengurus lembaga terdiri atas kader-kader terlatih dari 10 padukuhan sehingga kepemilikan program sepenuhnya beralih ke masyarakat desa.',
    },
    {
      title: '2. Pengawalan Pascaprogram Divisi Pengmas Ormawa MDC',
      icon: Users,
      color: '#9A4026',
      desc: 'UKMF MIPA Debate Club FMIPA UNY mengintegrasikan Kalurahan Giripurwo ke dalam program kerja "Desa Binaan" Divisi Pengabdian Masyarakat untuk pendampingan berkala pascaprogram PPK Ormawa.',
    },
    {
      title: '3. Kemandirian 2 Pusat Pengolahan Pupuk Sumur & Gubar',
      icon: Sprout,
      color: '#6B8F4E',
      desc: 'Pusat produksi pupuk organik padat dan POC "Gemah Ripah" dikelola secara swadaya oleh 22 kelompok tani dan 6 kelompok ternak dengan SOP produksi yang telah dibakukan.',
    },
    {
      title: '4. Tim Pengelola Toko Daring Desa Prima & Preneur',
      icon: Store,
      color: '#8A5A3C',
      desc: 'Empat akun marketplace e-commerce resmi diteruskan operasionalnya oleh tim pengelola pemuda desa untuk memproses pesanan, pembaruan stok, dan promosi berkelanjutan.',
    },
    {
      title: '5. Rujukan Menu Tetap PMT Posyandu & Kolaborasi OJK 2027',
      icon: Heart,
      color: '#C9617A',
      desc: 'Buku Resep "Dapur Griya Reksa" dijadikan pedoman baku menu Pemberian Makanan Tambahan (PMT) Posyandu Kalurahan Giripurwo, serta rencana tindak lanjut edukasi finansial bersama OJK DIY pada tahun 2027.',
    },
    {
      title: '6. Satgas Forum Anak Kalurahan (2026–2028)',
      icon: Laptop,
      color: '#4F86A8',
      desc: 'Kader Forum Anak Giripurwo yang dikukuhkan dengan SK Lurah bertugas aktif sebagai Pelopor dan Pelapor (2P) literasi digital, pencegahan hoaks, dan keamanan internet bagi teman sebaya.',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Banner */}
      <section className="bg-[#9A4026] text-[#FFFDF9] py-14 border-b-4 border-[#C0583A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFFDF9]/15 px-3 py-1 rounded-full text-xs font-semibold">
            <span>Redesain & Perluasan Situs</span>
            <span>·</span>
            <span className="text-[#F4DCCB]">Rencana Jangka Panjang</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Keberlanjutan Program Griya Ceria
          </h1>
          <p className="text-sm sm:text-base text-[#FBF1E6]/90 max-w-3xl leading-relaxed">
            Menjawab kekosongan halaman keberlanjutan sebelumnya dengan desain skema kemandirian komprehensif berbasis legalitas kalurahan, kaderisasi warga, dan pendampingan berkelanjutan Ormawa MDC UNY.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Pilar Keberlanjutan Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block mb-1">
                Fondasi Keberlanjutan
              </span>
              <h2 className="text-2xl font-bold text-[#4A2A1E]">
                Enam Pilar Kemandirian Pascaprogram
              </h2>
            </div>
            <Badge type="REALISASI" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="space-y-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: pil.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-[#4A2A1E] leading-snug">
                      {pil.title}
                    </h3>
                    <p className="text-xs text-[#5A3A2E] leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Roadmap Pascaprogram */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              Roadmap Berkelanjutan
            </span>
            <Badge type="RANCANGAN" />
          </div>

          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Rencana Aksi Pascapelaksanaan (2026–2028)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-[#FBF1E6] border border-[#F4DCCB] space-y-2">
              <span className="text-[11px] font-bold text-[#C0583A] uppercase">Fase 1: Triwulan IV 2026</span>
              <h4 className="font-bold text-sm text-[#4A2A1E]">Transisi & Penguatan Kader</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Pendampingan intensif peralihan operasional sentra pupuk dan pengelolaan akun toko daring secara penuh kepada pengurus Lembaga Griya Ceria.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FBF1E6] border border-[#F4DCCB] space-y-2">
              <span className="text-[11px] font-bold text-[#C0583A] uppercase">Fase 2: Tahun 2027</span>
              <h4 className="font-bold text-sm text-[#4A2A1E]">Ekspansi Kemitraan & Edukasi Finansial</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Pelaksanaan edukasi literasi keuangan lanjutan bersama OJK DIY, pengujian berkala sampel pupuk, dan perluasan jangkauan pasar online UMKM.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FBF1E6] border border-[#F4DCCB] space-y-2">
              <span className="text-[11px] font-bold text-[#C0583A] uppercase">Fase 3: Tahun 2028</span>
              <h4 className="font-bold text-sm text-[#4A2A1E]">Kemandirian Penuh Desa Cerdas</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Kalurahan Giripurwo menjadi model percontohan desa cerdas mandiri di Kabupaten Gunungkidul yang mampu menduplikasi pojok literasi ke desa tetangga.
              </p>
            </div>
          </div>
        </section>

        {/* Blok Lanjut Baca */}
        <section className="p-6 bg-[#F4DCCB]/40 rounded-2xl border border-[#F4DCCB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#9A4026] uppercase block">Lanjut Baca:</span>
            <span className="text-sm font-semibold text-[#4A2A1E]">Lihat galeri dokumentasi foto dan kontak tim kami</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('dokumentasi')}
              className="px-4 py-2 text-xs font-semibold bg-[#C0583A] hover:bg-[#9A4026] text-white rounded-xl transition-colors shadow-xs"
            >
              Dokumentasi Kegiatan →
            </button>
            <button
              onClick={() => onNavigate('tim-kontak')}
              className="px-4 py-2 text-xs font-semibold bg-[#FFFDF9] hover:bg-[#FBF1E6] text-[#9A4026] rounded-xl border border-[#F4DCCB] transition-colors shadow-xs"
            >
              Tim & Kontak →
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
