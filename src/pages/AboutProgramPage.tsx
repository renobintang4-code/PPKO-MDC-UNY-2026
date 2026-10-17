import React, { useState } from 'react';
import { PageId } from '../types';
import { Badge } from '../components/Badge';
import { 
  ChevronDown, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Compass, 
  Users, 
  GraduationCap, 
  Building2, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

interface AboutProgramPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutProgramPage: React.FC<AboutProgramPageProps> = ({ onNavigate }) => {
  const [activeStage, setActiveStage] = useState<number | null>(0);

  const toggleStage = (index: number) => {
    setActiveStage(activeStage === index ? null : index);
  };

  const ormawaStages = [
    {
      title: '1. Tahap Perencanaan',
      desc: 'Konsolidasi tim internal UKMF MDC FMIPA UNY, penetapan ketua dan struktur tim pelaksana 14 mahasiswa, identifikasi lokasi mitra di Giripurwo, pendampingan intensif penyusunan subproposal bersama dosen pendamping dan reviewer universitas, pengurusan administrasi perizinan kalurahan, serta penyusunan desain monev berkala.',
    },
    {
      title: '2. Tahap Pelaksanaan',
      desc: 'Pengorganisasian koordinasi lapangan di 10 padukuhan, fasilitasi komunikasi aktif dengan dosen pembimbing, pemerintah kalurahan, dan mitra sektoral (BPP, Puskesmas, Disdik, dll.), manajemen logistik pembelajaran dan dokumentasi terpadu, menjaga stabilitas partisipasi warga, serta menumbuhkan kepemimpinan mahasiswa di tengah masyarakat.',
    },
    {
      title: '3. Tahap Evaluasi',
      desc: 'Pelaksanaan monitoring dan evaluasi (monev) internal mingguan, rekapitulasi database capaian indikator, pendampingan penulisan logbook berkala divalidasi pembimbing, persiapan presentasi Penilaian Kemajuan Pelaksanaan (PKP) internal & Belmawa, serta forum refleksi organisasi.',
    },
    {
      title: '4. Tahap Pascaprogram',
      desc: 'Serah terima kelembagaan resmi Lembaga Griya Ceria ke Kalurahan Giripurwo, penyusunan rencana tindak lanjut (RTL), verifikasi kader penggerak desa mandiri, penguatan kemitraan tindak lanjut, dan integrasi pengawasan berkala ke dalam program kerja Desa Binaan Divisi Pengabdian Masyarakat MDC FMIPA UNY.',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Banner */}
      <section className="bg-[#9A4026] text-[#FFFDF9] py-14 border-b-4 border-[#C0583A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFFDF9]/15 px-3 py-1 rounded-full text-xs font-semibold">
            <span>Tentang Program</span>
            <span>·</span>
            <span className="text-[#F4DCCB]">Griya Ceria Giripurwo 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Pemberdayaan Terpadu Menuju Desa Cerdas Berkelanjutan
          </h1>
          <p className="text-sm sm:text-base text-[#FBF1E6]/90 max-w-3xl leading-relaxed">
            Menghadirkan wadah pembelajaran nonformal terpadu guna mengubah tantangan rendahnya kapasitas menjadi kemandirian ekonomi dan ketahanan keluarga di Kalurahan Giripurwo.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* A. LATAR BELAKANG */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              A. Latar Belakang
            </span>
          </div>

          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Akar Masalah dan Urgensi Inisiatif
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-[#5A3A2E] leading-relaxed">
            <p>
              Kalurahan Giripurwo di Kapanewon Purwosari, Kabupaten Gunungkidul, dihuni oleh 9.329 jiwa dengan 68% di antaranya merupakan usia produktif. Kalurahan ini dianugerahi potensi sumber daya alam dan pertanian yang besar, dengan populasi ternak sapi mencapai 2.647 ekor serta timbulan sekam padi pascapanen sekitar 50 ton per musim. Di samping itu, sebanyak 427 unit UMKM telah tumbuh aktif digerakkan oleh kelompok masyarakat seperti Kelompok Tani, KWT, Desa Prima, Desa Preneur, dan PKK.
            </p>
            <p>
              Namun, di balik modal sosial tersebut, kondisi kesejahteraan warga menghadapi tantangan struktural yang signifikan. Berdasarkan data resmi DTSEN, sebanyak 84% keluarga Giripurwo berada pada desil 1–5 (kategori prasejahtera), dengan 46% keluarga berada di desil 1. Tingkat pendidikan formal penduduk menunjukkan bahwa 49% warga tidak pernah sekolah (23,3%) atau hanya menamatkan pendidikan tingkat SD (25,8%). Rata-rata pendapatan kepala keluarga berada di kisaran Rp1.800.000 per bulan, jauh di bawah UMK Gunungkidul tahun 2026 sebesar Rp2.468.378.
            </p>
            <p>
              Keterbatasan literasi dan life skill tersebut berdampak nyata di lapangan: limbah sekam dan kotoran ternak belum diolah bernilai ekonomi, 427 UMKM belum menyentuh pemasaran daring, kasus stunting meningkat dari 17 menjadi 31 anak balita, serta muncul 4 kasus pinjol ilegal yang menjerat warga. Menanggapi kondisi ini, tim PPK Ormawa UKMF MDC FMIPA Universitas Negeri Yogyakarta merumuskan inisiatif <strong>Griya Ceria</strong> sebagai solusi terpadu berbasis andragogi desa.
            </p>
          </div>
        </section>

        {/* B. RUMUSAN MASALAH (3 KARTU) */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              B. Rumusan Masalah
            </span>
          </div>
          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Tiga Permasalahan Pokok yang Diselesaikan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#C0583A] text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-sm text-[#4A2A1E]">
                Keterbatasan Pengetahuan & Keterampilan
              </h3>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Keterbatasan pengetahuan dan keterampilan masyarakat dalam mengoptimalkan potensi lokal, sehingga kapasitas ekonomi keluarga tetap rendah dan rentan.
              </p>
            </div>

            <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#C0583A] text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-sm text-[#4A2A1E]">
                Ketiadaan Wadah Nonformal Berkelanjutan
              </h3>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Tidak tersedianya wadah pembelajaran nonformal yang terstruktur dan berkelanjutan di desa, sehingga pelatihan yang pernah ada terputus dan tidak berdampak sistematis.
              </p>
            </div>

            <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#C0583A] text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-sm text-[#4A2A1E]">
                Belum Ada Kurikulum Life Skill Terstandar
              </h3>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Tidak adanya kurikulum pembelajaran nonformal berbasis kebutuhan riil yang memuat penguatan life skill dan ketahanan keluarga, sehingga pembelajaran warga berjalan tanpa arah.
              </p>
            </div>
          </div>
        </section>

        {/* C & D. MENGAPA DESA CERDAS & SOLUSI */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block mb-3">
                C. Mengapa Desa Cerdas?
              </span>
              <h3 className="text-xl font-bold text-[#4A2A1E] mb-3">
                Titik Temu Modal Sosial & Kapasitas Pengetahuan
              </h3>
              <p className="text-xs sm:text-sm text-[#5A3A2E] leading-relaxed">
                Akar persoalan di Giripurwo adalah <strong>keterbatasan kapasitas akibat rendahnya akses pendidikan formal</strong>, padahal modal sosial kalurahan (kelompok tani, ternak, KWT, Desa Prima, Karang Taruna) sangat tinggi dan guyub.
              </p>
              <p className="text-xs sm:text-sm text-[#5A3A2E] leading-relaxed mt-2">
                Pendidikan nonformal berbasis kebutuhan yang terstruktur, intensif, dan berkelanjutan merupakan pintu masuk yang paling realistis dan berdaya guna untuk mewujudkan konsep <em>Desa Cerdas</em> secara nyata.
              </p>
            </div>
            <div className="p-3 bg-[#EEF3EA] rounded-xl text-xs text-[#4A6534] font-medium">
              Desa Cerdas bukan sekadar digitalisasi, melainkan kecerdasan warganya dalam mengelola sumber daya lokal.
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block mb-3">
                D. Solusi Terpadu
              </span>
              <h3 className="text-xl font-bold text-[#4A2A1E] mb-3">
                Wadah "Griya Ceria" dengan 4 Pojok Literasi
              </h3>
              <p className="text-xs sm:text-sm text-[#5A3A2E] leading-relaxed">
                Membentuk wadah pendidikan nonformal terpadu <strong>"Griya Ceria"</strong> yang menaungi 4 pojok literasi:
              </p>
              <ul className="text-xs space-y-1.5 text-[#5A3A2E] mt-3">
                <li>• <strong>Griya Jinawi:</strong> Pengolahan pupuk organik padat & cair dari limbah sapi dan sekam.</li>
                <li>• <strong>Griya Laku:</strong> Digital marketing, foto produk, akun marketplace, dan legalitas UMKM.</li>
                <li>• <strong>Griya Reksa:</strong> Literasi gizi pencegah stunting, buku resep PMT, dan keuangan anti-pinjol.</li>
                <li>• <strong>Griya Rekadaya:</strong> Literasi digital etis, Canva & CapCut, serta Satgas Forum Anak.</li>
              </ul>
            </div>
            <div className="p-3 bg-[#F4DCCB]/60 rounded-xl text-xs text-[#9A4026] font-semibold">
              Dilengkapi kurikulum resmi QRCBN yang disahkan Dinas Pendidikan Kabupaten Gunungkidul.
            </div>
          </div>
        </section>

        {/* E. TIGA TUJUAN UTAMA [TERCAPAI 100%] */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              E. Tujuan Program
            </span>
            <Badge type="TERCAPAI" />
          </div>

          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Tiga Tujuan Program & Bukti Ketercapaian
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            <div className="p-5 rounded-xl bg-[#FBF1E6] border border-[#F4DCCB] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#9A4026]">Tujuan 1</span>
                <span className="text-[11px] font-bold text-[#D9A441]">Tercapai 100%</span>
              </div>
              <h4 className="font-bold text-sm text-[#4A2A1E]">
                Peningkatan Kapasitas Masyarakat
              </h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Meningkatkan kapasitas masyarakat melalui empat pojok literasi dengan skor rata-rata peserta naik dari <strong>8,05 menjadi 18,20 (+126,15%)</strong>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FBF1E6] border border-[#F4DCCB] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#9A4026]">Tujuan 2</span>
                <span className="text-[11px] font-bold text-[#D9A441]">Tercapai 100%</span>
              </div>
              <h4 className="font-bold text-sm text-[#4A2A1E]">
                Tersusunnya Kurikulum Nonformal
              </h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Tersusunnya Kurikulum Griya Ceria berbasis kebutuhan yang memuat life skill dan ketahanan keluarga, <strong>disahkan Dinas Pendidikan & bersertifikat QRCBN</strong>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FBF1E6] border border-[#F4DCCB] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#9A4026]">Tujuan 3</span>
                <span className="text-[11px] font-bold text-[#D9A441]">Tercapai 100%</span>
              </div>
              <h4 className="font-bold text-sm text-[#4A2A1E]">
                Peningkatan Kapasitas Ekonomi & Produk
              </h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Meningkatnya kapasitas ekonomi warga dengan minimal 1 produk/keterampilan bernilai ekonomi di tiap Griya (pupuk Gemah Ripah, toko daring UMKM, resep PMT, dan edukasi digital).
              </p>
            </div>

          </div>
        </section>

        {/* F. MAKNA NAMA PROGRAM */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              F. Makna Nama
            </span>
            <Badge type="RANCANGAN" />
          </div>
          <h3 className="text-xl font-bold text-[#4A2A1E]">
            Griya Ceria: Giripurwo Berdaya, Cerdas, Mandiri, Berkarya
          </h3>
          <p className="text-xs sm:text-sm text-[#5A3A2E] leading-relaxed">
            Akronim <strong>GRIYA CERIA</strong> merepresentasikan semangat <em>"Giripurwo Berdaya, Cerdas, Mandiri, Berkarya"</em>. Filosofi ini dirancang selaras dengan visi misi Kalurahan Giripurwo (Berdaya, Mandiri, Berkarya) sebagaimana ditegaskan oleh Lurah Giripurwo pada forum diskusi terarah 16 Maret 2026. Nama ini merefleksikan rumah belajar komunal yang hangat, mencerdaskan, dan membawa keceriaan bagi seluruh warga.
          </p>
        </section>

        {/* G. KETERPADUAN ANTAR GRIYA [RANCANGAN] */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-8">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              G. Keterpaduan Antar Griya
            </span>
            <Badge type="RANCANGAN" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#4A2A1E]">
              Diagram Keterpaduan Ekosistem Griya Ceria
            </h2>
            <p className="text-xs sm:text-sm text-[#5A3A2E] mt-1">
              Keempat pojok literasi tidak berjalan sendiri-sendiri, melainkan membentuk satu kesatuan siklus pemberdayaan keluarga dan desa:
            </p>
          </div>

          {/* Interactive Flow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-2xl bg-[#EEF3EA] border border-[#6B8F4E]/30 space-y-2">
              <span className="text-[11px] font-bold text-[#6B8F4E] uppercase">Keterpaduan Peserta</span>
              <h4 className="font-bold text-sm text-[#4A6534]">Satu Rumah Tangga Utuh</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Satu keluarga terlibat di beberapa Griya: Bapak di Jinawi/Laku, Ibu di Reksa, dan Anak di Rekadaya. Proses belajar berlanjut secara alami dalam obrolan keluarga di rumah.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5ECE6] border border-[#8A5A3C]/30 space-y-2">
              <span className="text-[11px] font-bold text-[#8A5A3C] uppercase">Keterpaduan Kurikulum</span>
              <h4 className="font-bold text-sm text-[#633F28]">Modul Saling Terhubung</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Modul Jinawi memuat pencatatan produksi; Laku memuat harga pokok & margin; Reksa memuat nilai gizi & aplikasi keuangan; Rekadaya menyiapkan remaja menjadi digital helper keluarga.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAEDF0] border border-[#C9617A]/30 space-y-2">
              <span className="text-[11px] font-bold text-[#C9617A] uppercase">Keterpaduan Output</span>
              <h4 className="font-bold text-sm text-[#963C53]">Siklus Ekonomi Riil</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Produk pupuk Jinawi dipasarkan lewat strategi daring Laku. Hasil pendapatan dikelola dengan literasi finansial Reksa, didukung kecakapan digital pemuda Rekadaya.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#EAF2F7] border border-[#4F86A8]/30 space-y-2">
              <span className="text-[11px] font-bold text-[#4F86A8] uppercase">Titik Temu Komunal</span>
              <h4 className="font-bold text-sm text-[#325C75]">Forum Terpadu Griya Ceria</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Pameran produk inovasi bersama, gelar wicara lintas kader, evaluasi bersama, dan lokakarya akbar sebagai perayaan capaian kemandirian warga kalurahan.
              </p>
            </div>

          </div>
        </section>

        {/* H & I. KESELARASAN KEBIJAKAN & PELAKSANAAN */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-7 bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
              H. Keselarasan Kebijakan
            </span>
            <h3 className="text-xl font-bold text-[#4A2A1E]">
              Sinkronisasi Program Daerah & Nasional
            </h3>
            <div className="space-y-3 text-xs text-[#5A3A2E] leading-relaxed">
              <div className="p-3 bg-[#FBF1E6] rounded-xl space-y-1">
                <span className="font-bold text-[#4A2A1E] block">4 Program Prioritas Pemkab Gunungkidul 2026:</span>
                <p>• <strong>Bocah Pinter:</strong> Didukung melalui Griya Rekadaya (literasi digital & karakter anak).</p>
                <p>• <strong>Warga Sehat:</strong> Didukung melalui Griya Reksa (literasi gizi lokal pencegah stunting).</p>
                <p>• <strong>Tani Makmur:</strong> Didukung melalui Griya Jinawi (kemandirian pupuk organik ramah lingkungan).</p>
                <p>• <strong>UMKM Berdaya:</strong> Didukung melalui Griya Laku (digital marketing & akun toko marketplace).</p>
              </div>
              <p>
                Program juga selaras dengan <strong>Asta Cita Poin ke-4</strong> (Memperkuat pembangunan SDM, sains, teknologi, dan pendidikan) serta target <strong>SDGs Poin ke-4</strong> (Pendidikan Berkualitas yang Inklusif).
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block mb-3">
                I. Jadwal & Moda Pelaksanaan
              </span>
              <h3 className="text-xl font-bold text-[#4A2A1E] mb-2">
                Pelaksanaan Tatap Muka Luring
              </h3>
              <div className="space-y-2 text-xs text-[#5A3A2E]">
                <p>• <strong>Periode Program Keseluruhan:</strong> Februari – Oktober 2026</p>
                <p>• <strong>Kelas Pembelajaran 4 Griya:</strong> Juni – September 2026</p>
              </div>
            </div>
            <div className="p-3 bg-[#F4DCCB]/50 rounded-xl text-xs text-[#9A4026] font-semibold">
              Dilaksanakan langsung di balai padukuhan, kandang kelompok ternak, demoplot, dan rumah produksi UMKM.
            </div>
          </div>
        </section>

        {/* J. PERAN PARA PIHAK [REALISASI] */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              J. Peran Para Pihak
            </span>
            <Badge type="REALISASI" />
          </div>

          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Kolaborasi Lintas Lembaga Terintegrasi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            
            <div className="p-5 rounded-2xl bg-[#FBF1E6] border border-[#F4DCCB] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#C0583A] text-white flex items-center justify-center font-bold text-xs">
                MDC
              </div>
              <h4 className="font-bold text-sm text-[#4A2A1E]">Ormawa Pelaksana (MDC)</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Inisiasi ide, perencanaan, pelaksanaan teknis kelas, monev mingguan, dan pemantau pascaprogram melalui Divisi Pengabdian Masyarakat (program Desa Binaan).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FBF1E6] border border-[#F4DCCB] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#6B8F4E] text-white flex items-center justify-center font-bold text-xs">
                DOSEN
              </div>
              <h4 className="font-bold text-sm text-[#4A2A1E]">Dosen Pendamping</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Kuntum Febriyantiningrum, S.Si., M.Sc.: arahan penyusunan subproposal, komunikasi kalurahan, validasi logbook, monev lapangan, pengujian pupuk, dan rencana tindak lanjut.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FBF1E6] border border-[#F4DCCB] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#8A5A3C] text-white flex items-center justify-center font-bold text-xs">
                UNY
              </div>
              <h4 className="font-bold text-sm text-[#4A2A1E]">Perguruan Tinggi (UNY)</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Reviewer tingkat fakultas dan universitas, workshop pembekalan PPKO, pendampingan Abdidaya Centre, seleksi internal 2 tahap, monitoring, visitasi, dan PKP internal.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FBF1E6] border border-[#F4DCCB] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#4F86A8] text-white flex items-center justify-center font-bold text-xs">
                DESA
              </div>
              <h4 className="font-bold text-sm text-[#4A2A1E]">Pemerintah Kalurahan</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Penyediaan data kependudukan (SID/DTSEN), penyediaan fasilitas ruang belajar, koordinasi lintas padukuhan, serta penerbitan SK Lembaga Griya Ceria & Satgas Forum Anak.
              </p>
            </div>

          </div>
        </section>

        {/* K. DETAIL PERAN ORMAWA TIAP TAHAP (Accordion [RANCANGAN]) */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              K. Detail Peran Ormawa Tiap Tahap
            </span>
            <Badge type="RANCANGAN" />
          </div>

          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Alur Kerja dan Tanggung Jawab Tim Pelaksana Ormawa
          </h2>

          <div className="space-y-3 pt-2">
            {ormawaStages.map((stage, idx) => (
              <div
                key={idx}
                className="border border-[#F4DCCB] rounded-xl overflow-hidden transition-all bg-[#FFFDF9]"
              >
                <button
                  onClick={() => toggleStage(idx)}
                  className="w-full p-4 text-left font-bold text-sm text-[#4A2A1E] flex items-center justify-between hover:bg-[#F4DCCB]/30 transition-colors"
                >
                  <span>{stage.title}</span>
                  <ChevronDown className={`w-4 h-4 text-[#C0583A] transition-transform ${activeStage === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeStage === idx && (
                  <div className="p-4 pt-0 text-xs text-[#5A3A2E] leading-relaxed border-t border-[#F4DCCB]/50 bg-[#FBF1E6]/40">
                    {stage.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Blok "Lanjut Baca" (Navigasi Antar Halaman) */}
        <section className="p-6 bg-[#F4DCCB]/40 rounded-2xl border border-[#F4DCCB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#9A4026] uppercase block">Lanjut Baca:</span>
            <span className="text-sm font-semibold text-[#4A2A1E]">Jelajahi profil wilayah dan metode pembelajaran kami</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('profil-giripurwo')}
              className="px-4 py-2 text-xs font-semibold bg-[#FFFDF9] hover:bg-[#FBF1E6] text-[#9A4026] rounded-xl border border-[#F4DCCB] transition-colors shadow-xs"
            >
              Profil Giripurwo & Survei →
            </button>
            <button
              onClick={() => onNavigate('metode-kurikulum')}
              className="px-4 py-2 text-xs font-semibold bg-[#C0583A] hover:bg-[#9A4026] text-white rounded-xl transition-colors shadow-xs"
            >
              Metode & Kurikulum →
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
