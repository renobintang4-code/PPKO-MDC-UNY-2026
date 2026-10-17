import React, { useState } from 'react';
import { PageId } from '../types';
import { Badge } from '../components/Badge';
import { 
  BookOpen, 
  CheckCircle2, 
  Download, 
  FileCheck, 
  Sliders, 
  Award, 
  BarChart2, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface MethodCurriculumPageProps {
  onNavigate: (page: PageId) => void;
}

export const MethodCurriculumPage: React.FC<MethodCurriculumPageProps> = ({ onNavigate }) => {
  const [activeGriyaTab, setActiveGriyaTab] = useState<'jinawi' | 'laku' | 'reksa' | 'rekadaya'>('jinawi');

  const steps = [
    { num: '01', title: 'Identifikasi Masalah & Kebutuhan', desc: 'Survei awal bersama Carik & Lurah Giripurwo, analisis potensi sekam & kotoran sapi, stunting, dan pinjol.' },
    { num: '02', title: 'Perencanaan Bersama Kalurahan', desc: 'Penyusunan modul, pembagian peran ormawa, dan sinkronisasi dengan 4 program prioritas Gunungkidul.' },
    { num: '03', title: 'Sosialisasi Akbar & Rekrutmen', desc: 'Grand Opening pada 14 Juni 2026 dan pembentukan kelompok sasaran di 10 padukuhan.' },
    { num: '04', title: 'Pelaksanaan Pre-Test', desc: 'Pengukuran pemahaman awal peserta via angket tertutup skala 1–4 sebelum kelas dimulai.' },
    { num: '05', title: 'Pelaksanaan Kelas Pembelajaran', desc: 'Kelas intensif luring (Juni–September 2026): 12 sesi Jinawi, 10 sesi Laku, 10 sesi Reksa, dan 10 sesi Rekadaya.' },
    { num: '06', title: 'Kemitraan & Kolaborasi Sektoral', desc: 'Pendampingan bersama BPP Purwosari, Puskesmas, Dinas Pendidikan, Disdik, dan OJK DIY.' },
    { num: '07', title: 'Monev Berkala & Post-Test', desc: 'Validasi logbook mingguan oleh dosen & operator PT, serta pengukuran akhir post-test peserta.' },
    { num: '08', title: 'Lokakarya & Serah Terima Lembaga', desc: 'Forum Terpadu pada 24 September 2026, pameran produk, dan pengesahan SK Lembaga Griya Ceria oleh Lurah.' },
  ];

  const curriculumMap = {
    jinawi: [
      { title: 'Forum Edukasi & Diskusi', desc: 'Pemetaan limbah organik desa dan potensi ekonomi pupuk organik mandiri.' },
      { title: 'Cek Kandang & Sanitasi', desc: 'Manajemen kotoran sapi/kambing, sanitasi kandang, dan pemilahan bahan baku.' },
      { title: 'Edukasi Dasar Fermentasi', desc: 'Pengenalan prinsip mikroorganisme pengurai, aerasi, kelembaban, dan suhu dekomposisi.' },
      { title: 'Praktik Pembuatan Kompos', desc: 'Pencampuran sekam padi, kotoran ternak, dolomit, dekomposer M21, molase, dan dedak.' },
      { title: 'Praktik Pembuatan POC', desc: 'Fermentasi anaerobik urin/kotoran cair sapi & kambing dengan EM4 dan gula merah.' },
      { title: 'Panen & Standardisasi', desc: 'Pengujian kematangan kompos (warna kehitaman, aroma tanah remah, pH netral).' },
      { title: 'Demoplot Tanaman Uji', desc: 'Pengaplikasian pupuk kompos dan POC pada tanaman cabai dan sayuran kalurahan.' },
      { title: 'Evaluasi Dampak Tanaman', desc: 'Pengamatan tekstur tanah, pertumbuhan vegetatif, warna daun, dan ketahanan hama.' },
      { title: 'Pengemasan & Merek Gemah Ripah', desc: 'Penimbangan, pengemasan karung 25kg, botol POC 1L, dan penempelan stiker label resmi.' },
      { title: 'SOP Produksi Mandiri', desc: 'Perumusan standar operasional prosedur pembuatan pupuk oleh kelompok tani Sumur & Gubar.' },
    ],
    laku: [
      { title: 'Mapping & Business Canvas', desc: 'Identifikasi kekuatan, kelemahan, peluang, dan tantangan usaha mikro warga Giripurwo.' },
      { title: 'Manajemen Usaha & Legalitas', desc: 'Pencatatan kas sederhana, pengenalan NIB OSS, sertifikasi Halal, dan izin edar P-IRT.' },
      { title: 'Konsep Visual & Positioning', desc: 'Diferensiasi kemasan produk olahan (pia, peyek, emping jagung) agar bernilai jual tinggi.' },
      { title: 'Dasar Fotografi Produk Smartphone', desc: 'Teknik pencahayaan alami, angle foto 45 derajat, dan pemanfaatan mini studio portabel.' },
      { title: 'Pemanfaatan AI untuk Promosi', desc: 'Penggunaan ChatGPT/Gemini untuk menyusun copywriting caption dan Canva untuk template poster.' },
      { title: 'Workshop Konten & Marketplace', desc: 'Strategi promosi visual di Shopee, WhatsApp Business, Facebook, dan Instagram.' },
      { title: 'Branding Produk & Kemasan', desc: 'Pemilihan bahan kemasan standing pouch ziplock dan cetak label stiker yang informatif.' },
      { title: 'Pembuatan Akun Seller Shopee', desc: 'Registrasi toko resmi Desa Prima dan Desa Preneur hingga verifikasi nomor rekening toko.' },
      { title: 'Pendampingan Aplikasi Penjual', desc: 'Simulasi unggah katalog produk, deskripsi SEO produk, pengaturan varian harga, dan logistik.' },
    ],
    reksa: [
      { title: 'Kelas Parenting Pola Asuh Positif', desc: 'Membangun komunikasi hangat dalam keluarga, stimulasi psikomotorik, dan kasih sayang anak.' },
      { title: 'Kelas Literasi Gizi Seimbang', desc: 'Pencegahan stunting 1000 HPK, prinsip Isi Piringku, dan keunggulan bahan pangan lokal.' },
      { title: 'Praktik Olahan: Superfood Donut', desc: 'Inovasi donat bergizi berbahan dasar tepung daun kelor segar, pisang kepok, dan kacang tanah.' },
      { title: 'Praktik Olahan: Banana Milk', desc: 'Minuman bernutrisi tinggi kaya kalsium dan kalium dari pisang lokal, susu UHT, keju, dan telur.' },
      { title: 'Praktik Minuman: Wedangan Rempah', desc: 'Minuman herbal keluarga berbahan jahe, temulawak, kunyit, kayu manis, serai, dan jeruk nipis.' },
      { title: 'Manajemen Keuangan Rumah Tangga', desc: 'Pemisahan anggaran kebutuhan pokok, pos tabungan darurat, dan skala prioritas keluarga.' },
      { title: 'Edukasi Bahaya Pinjol Ilegal & Judol', desc: 'Mengenali modus pinjaman online ilegal tanpa izin OJK, bank plecit, dan bahaya judi online.' },
      { title: 'Posyandu Ceria Bersama Puskesmas', desc: 'Pemantauan berkala berat/tinggi badan balita dan distribusi makanan pendamping bergizi.' },
      { title: 'Penyusunan Buku Resep Dapur Griya Reksa', desc: 'Kurasi resep olahan pangan lokal bergizi tinggi sebagai acuan menu PMT Kalurahan.' },
      { title: 'Cerdas Cermat Ketahanan Keluarga', desc: 'Evaluasi interaktif pemahaman gizi dan finansial yang menyenangkan bagi ibu-ibu kader.' },
    ],
    rekadaya: [
      { title: 'Dunia Digital Lebih dari Game', desc: 'Membuka wawasan pemuda bahwa ruang digital adalah panggung karya, wirausaha, dan edukasi.' },
      { title: 'Identitas & Jejak Digital Canva', desc: 'Membuat kartu identitas digital, portofolio diri positif, dan menjaga privasi data pribadi.' },
      { title: 'Kenalan sama AI & Belajar Mandiri', desc: 'Pemanfaatan kecerdasan buatan etis sebagai asisten belajar materi sekolah dan keterampilan baru.' },
      { title: 'Etika Bermedia Sosial & Netiket', desc: 'Mencegah perundungan siber (cyberbullying), menjaga tutur kata, dan ikrar pemuda cerdas digital.' },
      { title: 'Bahaya Digital & Deteksi Hoaks', desc: 'Metode verifikasi fakta berita, mengenali penipuan daring (scam/phishing), dan manajemen waktu gawai.' },
      { title: 'Desain Grafis Canva untuk Komunitas', desc: 'Membuat infografis dan poster kampanye sosial edukatif padukuhan beresolusi tinggi.' },
      { title: 'Produksi Video Pendek CapCut 30 Detik', desc: 'Pengambilan video dokumentasi kegiatan warga, pemilihan musik bebas hak cipta, dan transisi rapi.' },
      { title: 'Menulis & Public Speaking Pemuda', desc: 'Teknik berbicara percaya diri di depan publik dan menyusun opini positif di media daring.' },
      { title: 'Pengukuhan Satgas Forum Anak Desa', desc: 'Pengesahan SK Lurah dan pembagian peran kader pelopor dan pelapor literasi digital Giripurwo.' },
    ],
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Banner */}
      <section className="bg-[#9A4026] text-[#FFFDF9] py-14 border-b-4 border-[#C0583A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFFDF9]/15 px-3 py-1 rounded-full text-xs font-semibold">
            <span>Pedoman Akademik & Praktis</span>
            <span>·</span>
            <span className="text-[#F4DCCB]">Sertifikasi QRCBN</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Metode Pembelajaran & Kurikulum Griya Ceria
          </h1>
          <p className="text-sm sm:text-base text-[#FBF1E6]/90 max-w-3xl leading-relaxed">
            Kurikulum nonformal terstruktur berbasis andragogi dan learning-by-doing yang telah disahkan Dinas Pendidikan Kabupaten Gunungkidul.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* A. PENDEKATAN PEMBELAJARAN [REALISASI] */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              A. Pendekatan Pembelajaran
            </span>
            <Badge type="REALISASI" />
          </div>

          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Andragogi, Partisipatif, & Belajar Sambil Berbuat
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            
            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-2">
              <span className="text-[11px] font-bold text-[#C0583A] uppercase">Prinsip 1</span>
              <h4 className="font-bold text-sm text-[#4A2A1E]">Community-Based Approach</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Berakar pada kebutuhan komunitas warga dengan menjadikan kelompok lokal sebagai subjek aktif, bukan sekadar objek penerima instruksi.
              </p>
            </div>

            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-2">
              <span className="text-[11px] font-bold text-[#C0583A] uppercase">Prinsip 2</span>
              <h4 className="font-bold text-sm text-[#4A2A1E]">Andragogi (Pendidikan Dewasa)</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Pendekatan fleksibel yang menghargai pengalaman hidup warga, menggunakan bahasa tutur yang akrab, dan mengutamakan diskusi dialogis.
              </p>
            </div>

            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-2">
              <span className="text-[11px] font-bold text-[#C0583A] uppercase">Prinsip 3</span>
              <h4 className="font-bold text-sm text-[#4A2A1E]">Learning by Doing</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                80% porsi pembelajaran adalah praktik langsung: mengaduk kompos, memotret produk, memasak menu bergizi, dan mengedit konten di gawai.
              </p>
            </div>

            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-2">
              <span className="text-[11px] font-bold text-[#C0583A] uppercase">Prinsip 4</span>
              <h4 className="font-bold text-sm text-[#4A2A1E]">Pendampingan Berkelanjutan</h4>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Mahasiswa pelaksana tinggal dan berbaur bersama warga di lokasi untuk mendampingi uji coba berkala pascakelas pembelajaran.
              </p>
            </div>

          </div>
        </section>

        {/* B. STEPPER 8 TAHAPAN PROGRAM */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-8">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              B. Tahapan Pelaksanaan
            </span>
            <Badge type="REALISASI" />
          </div>

          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Delapan Tahapan Terstruktur Menuju Kemandirian
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FBF1E6] border border-[#F4DCCB] space-y-2 relative group hover:border-[#C0583A] transition-colors"
              >
                <span className="font-display text-2xl font-extrabold text-[#C0583A] block">
                  {st.num}
                </span>
                <h4 className="font-bold text-sm text-[#4A2A1E]">
                  {st.title}
                </h4>
                <p className="text-xs text-[#5A3A2E] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* C. KURIKULUM RESMI DISAHKAN DISDIK & QRCBN */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              C. Kurikulum Griya Ceria
            </span>
            <Badge type="REALISASI" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl font-bold text-[#4A2A1E]">
                Buku Kurikulum Terstandar Resmi Ber-QRCBN
              </h2>
              <p className="text-xs sm:text-sm text-[#5A3A2E] leading-relaxed">
                Kurikulum Griya Ceria dirumuskan secara komprehensif berdasarkan kebutuhan optimalisasi 4 sektor strategis Giripurwo. Kurikulum ini memuat standar kompetensi kecakapan hidup (<em>life skills</em>), literasi fungsional, dan ketahanan keluarga.
              </p>
              <div className="p-4 bg-[#FFF8E7] rounded-xl border border-[#D9A441]/40 space-y-2 text-xs text-[#5A3A2E]">
                <div className="font-bold text-[#8C6418] flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#D9A441]" />
                  Status Pengesahan & Legalitas Kurikulum:
                </div>
                <p>• <strong>Disahkan oleh:</strong> Dinas Pendidikan Kabupaten Gunungkidul</p>
                <p>• <strong>Sertifikasi:</strong> Bersertifikat QRCBN (Quick Response Code Book Number) Resmi</p>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 bg-[#F4DCCB]/40 rounded-2xl border border-[#F4DCCB] text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C0583A] text-white flex items-center justify-center mx-auto shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#4A2A1E]">Buku Kurikulum & Silabus</h4>
                <span className="text-[11px] text-[#7C533F] block mt-0.5">Dokumen Lengkap Kurikulum 4 Griya</span>
              </div>
              <button
                disabled
                className="w-full py-2.5 px-4 bg-[#D9825F]/60 text-white rounded-xl text-xs font-semibold cursor-not-allowed flex items-center justify-center gap-2"
                title="Tautan unduh sedang dipersiapkan"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Buku Kurikulum [ISI NANTI]</span>
              </button>
            </div>
          </div>
        </section>

        {/* D. PETA MATERI PER GRIYA (4 Tabs [RANCANGAN KURIKULUM]) */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block mb-1">
                D. Peta Silabus Materi
              </span>
              <h2 className="text-2xl font-bold text-[#4A2A1E]">
                Rincian Silabus Materi Kelas Tiap Griya
              </h2>
            </div>
            <Badge type="RANCANGAN" />
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB]">
            <button
              onClick={() => setActiveGriyaTab('jinawi')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeGriyaTab === 'jinawi'
                  ? 'bg-[#6B8F4E] text-white shadow-xs'
                  : 'text-[#4A6534] hover:bg-[#EEF3EA]'
              }`}
            >
              Griya Jinawi (Pupuk & Sekam)
            </button>
            <button
              onClick={() => setActiveGriyaTab('laku')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeGriyaTab === 'laku'
                  ? 'bg-[#8A5A3C] text-white shadow-xs'
                  : 'text-[#633F28] hover:bg-[#F5ECE6]'
              }`}
            >
              Griya Laku (UMKM & Marketplace)
            </button>
            <button
              onClick={() => setActiveGriyaTab('reksa')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeGriyaTab === 'reksa'
                  ? 'bg-[#C9617A] text-white shadow-xs'
                  : 'text-[#963C53] hover:bg-[#FAEDF0]'
              }`}
            >
              Griya Reksa (Gizi & Finansial)
            </button>
            <button
              onClick={() => setActiveGriyaTab('rekadaya')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeGriyaTab === 'rekadaya'
                  ? 'bg-[#4F86A8] text-white shadow-xs'
                  : 'text-[#325C75] hover:bg-[#EAF2F7]'
              }`}
            >
              Griya Rekadaya (Literasi Digital)
            </button>
          </div>

          {/* Tab Content List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {curriculumMap[activeGriyaTab].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FBF1E6] border border-[#F4DCCB] space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#C0583A] text-white text-[10px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <h4 className="font-bold text-xs text-[#4A2A1E]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-[#5A3A2E] leading-relaxed pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-[11px] text-[#7C533F] italic pt-2 border-t border-[#F4DCCB]/60">
            *Catatan: "Urutan dan nama kelas saat pelaksanaan di lapangan dapat disesuaikan dengan dinamika kelompok warga; rujuk buku modul untuk silabus lengkap."
          </div>
        </section>

        {/* E & F. CARA PENGUKURAN & JADWAL MONEV */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* E. Cara Pengukuran */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block mb-3">
                E. Instrumen Evaluasi Capaian
              </span>
              <h3 className="text-xl font-bold text-[#4A2A1E] mb-3">
                Metode Pengukuran Capaian Peserta
              </h3>
              <p className="text-xs text-[#5A3A2E] leading-relaxed mb-3">
                Keberhasilan program diukur secara kuantitatif dan kualitatif melalui instrumen yang terverifikasi:
              </p>
              <ul className="space-y-2 text-xs text-[#5A3A2E]">
                <li>• <strong>Pre-Test & Post-Test:</strong> Angket tertutup khusus tiap Griya (10 butir pernyataan terstandar skala Likert 1–4).</li>
                <li>• <strong>Presensi & Logbook Mingguan:</strong> Lembar kehadiran presensi dan logbook yang divalidasi berkala oleh dosen pendamping dan operator SIMbelmawa PT.</li>
                <li>• <strong>Observasi Praktik Lapangan:</strong> Penilaian kemandirian warga dalam praktik pembuatan pupuk, pengoperasian marketplace, dan resep gizi.</li>
                <li>• <strong>Wawancara & Umpan Balik:</strong> Penjaringan kesan, pesan, dan testimoni kualitatif warga dan tokoh pamong desa.</li>
              </ul>
            </div>
          </div>

          {/* F. Jadwal Monev & Target [RANCANGAN] */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
                  F. Siklus Monev & Target
                </span>
                <Badge type="RANCANGAN" />
              </div>
              <h3 className="text-xl font-bold text-[#4A2A1E] mb-3">
                Jadwal Monitoring & Target Kinerja
              </h3>
              
              <div className="space-y-2 text-xs text-[#5A3A2E] mb-4">
                <p>• <strong>Tim Pelaksana Ormawa:</strong> Monev mingguan setiap akhir pekan pelaksanaan kelas.</p>
                <p>• <strong>Dosen Pendamping:</strong> Supervisi dan peninjauan langsung tiap 2 pekan sekali.</p>
                <p>• <strong>Pengurus Griya & Kalurahan:</strong> Rapat koordinasi evaluasi bulanan.</p>
              </div>

              <div className="p-3 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-1.5 text-xs">
                <span className="font-bold text-[#4A2A1E] block">Target Kinerja Tiap Griya:</span>
                <p>✓ Kehadiran warga: <strong>≥75%</strong> di setiap pertemuan</p>
                <p>✓ Peningkatan pengetahuan: <strong>≥30%</strong> dari pre-test ke post-test</p>
                <p>✓ Kemampuan praktik mandiri: <strong>≥80% peserta</strong></p>
                <p>✓ Luaran produk: <strong>Minimal 1 produk/keterampilan bernilai ekonomi</strong> di tiap Griya</p>
              </div>
            </div>
          </div>

        </section>

        {/* Blok Lanjut Baca */}
        <section className="p-6 bg-[#F4DCCB]/40 rounded-2xl border border-[#F4DCCB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#9A4026] uppercase block">Lanjut Baca:</span>
            <span className="text-sm font-semibold text-[#4A2A1E]">Lihat pelaksanaan di masing-masing dari 4 Pojok Literasi</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('program-griya')}
              className="px-4 py-2 text-xs font-semibold bg-[#C0583A] hover:bg-[#9A4026] text-white rounded-xl transition-colors shadow-xs"
            >
              Ikhtisar 4 Griya →
            </button>
            <button
              onClick={() => onNavigate('capaian-dampak')}
              className="px-4 py-2 text-xs font-semibold bg-[#FFFDF9] hover:bg-[#FBF1E6] text-[#9A4026] rounded-xl border border-[#F4DCCB] transition-colors shadow-xs"
            >
              Capaian & Dampak →
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
