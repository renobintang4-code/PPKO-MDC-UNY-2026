import React from 'react';
import { PageId } from '../types';
import { GIRIPURWO_DATA } from '../data/siteData';
import { Badge } from '../components/Badge';
import { 
  Users, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  TrendingUp, 
  Heart, 
  Laptop, 
  CheckCircle2, 
  Calendar,
  AlertCircle
} from 'lucide-react';

interface ProfileGiripurwoPageProps {
  onNavigate: (page: PageId) => void;
}

export const ProfileGiripurwoPage: React.FC<ProfileGiripurwoPageProps> = ({ onNavigate }) => {
  const ageGroups = [
    { range: '0–4 Tahun', count: 489, percent: 5.2 },
    { range: '5–9 Tahun', count: 541, percent: 5.8 },
    { range: '10–14 Tahun', count: 590, percent: 6.3 },
    { range: '15–19 Tahun', count: 645, percent: 6.9 },
    { range: '20–24 Tahun', count: 712, percent: 7.6 },
    { range: '25–29 Tahun (Puncak Muda)', count: 763, percent: 8.2 },
    { range: '30–34 Tahun', count: 680, percent: 7.3 },
    { range: '35–39 Tahun', count: 654, percent: 7.0 },
    { range: '40–44 Tahun', count: 630, percent: 6.8 },
    { range: '45–49 Tahun', count: 598, percent: 6.4 },
    { range: '50–54 Tahun', count: 540, percent: 5.8 },
    { range: '55–59 Tahun', count: 495, percent: 5.3 },
    { range: '60–64 Tahun', count: 462, percent: 5.0 },
    { range: '65–69 Tahun', count: 410, percent: 4.4 },
    { range: '70–74 Tahun', count: 354, percent: 3.8 },
    { range: 'Di atas 75 Tahun (Lansia)', count: 1066, percent: 11.4 },
  ];

  const communities = [
    { name: 'Kelompok Tani', desc: 'Pertanian pangan & hortikultura; mayoritas laki-laki 30–65 tahun berpendidikan SD–SMP.' },
    { name: 'Kelompok Ternak', desc: 'Pemeliharaan kambing, sapi, dan unggas; usia 30–60 tahun, pengelola kotoran ternak.' },
    { name: 'Kelompok Wanita Tani (KWT)', desc: 'Perempuan 25–60 tahun; budidaya pekarangan lestari, tanaman obat, dan olahan pangan.' },
    { name: 'Desa Prima', desc: 'Pemberdayaan perempuan ekonomi produktif; 42 unit usaha aktif (kerupuk, peyek, emping jagung, olahan singkong & pisang).' },
    { name: 'Desa Preneur', desc: 'Kewirausahaan berbasis potensi lokal; 61 unit usaha aktif di sektor olahan pangan & kerajinan.' },
    { name: 'Karang Taruna', desc: 'Pemuda desa usia 17–30 tahun, 21 anggota inti terdaftar; motor penggerak kegiatan sosial kepemudaan.' },
    { name: 'Forum Anak', desc: 'Anak dan remaja usia 10–18 tahun; wadah literasi sebaya, hak anak, dan kreativitas positif desa.' },
    { name: 'PKK Kalurahan', desc: 'Ibu rumah tangga usia 25–60 tahun; pilar kesehatan keluarga, posyandu, dan pencegahan stunting.' },
  ];

  const surveyTimeline = [
    {
      date: '6 Februari 2026',
      partner: 'Bersama Carik Kalurahan Giripurwo',
      findings: [
        'Mayoritas mata pencaharian warga adalah petani dan buruh harian lepas; hampir setiap rumah tangga memiliki ternak sapi/kambing.',
        'Potensi pisang kepok dan pisang uter sangat melimpah di seluruh pekarangan padukuhan.',
        'Data kesehatan mencatat 31 balita stunting dengan akar masalah utama pada rendahnya literasi gizi dan pola asuh orang tua.',
        'Komunitas warga sangat aktif, namun keterampilan tidak berkembang karena belum ada sistem pembelajaran nonformal yang berkelanjutan.',
        'Pelatihan yang pernah diadakan pemerintah berhenti sebatas pelatihan tanpa adanya tindak lanjut implementasi mandiri.',
      ],
    },
    {
      date: '13 Februari 2026',
      partner: 'Bersama Lurah & Carik Giripurwo',
      findings: [
        'UMKM terdata mencapai lebih dari 500 unit (sektor pangan: tempe, tahu, peyek, bakpia, kerupuk; non-pangan: batik, kerajinan batok kelapa).',
        'Mayoritas keluarga berada di desil 1–5 dengan pendapatan rata-rata sekitar Rp1.800.000/bulan (di bawah UMK Rp2.468.378).',
        'Identifikasi kebutuhan per kelompok: anak butuh literasi medsos & public speaking; ibu butuh literasi keuangan keluarga, pola asuh, & camilan bergizi; bapak/petani butuh pengolahan limbah jadi pupuk bernilai.',
      ],
    },
    {
      date: '16 Februari 2026',
      partner: 'Peninjauan Lapangan Langsung',
      findings: [
        'Ketua Desa Prima mengungkapkan omzet usaha mencapai sekitar Rp15 juta/bulan (kotor produk pia/bakpia), namun belum ada satu pun pelaku usaha yang memiliki akun toko di Shopee/marketplace digital.',
        'Gudang penggilingan padi menyimpan timbunan sekam padi yang belum terkelola optimal, diperkirakan mencapai volume 50 ton per musim panen.',
      ],
    },
    {
      date: '16 Maret 2026',
      partner: 'Diskusi Pemantapan Rancangan dengan Lurah & Carik',
      findings: [
        'Rancangan kurikulum dan 4 Griya dinilai sangat tepat sasaran dan selaras visi kalurahan (Berdaya, Mandiri, Berkarya).',
        'Disepakati menggunakan aplikasi populer (Shopee, Canva, TikTok) dan TIDAK membuat aplikasi/website khusus yang membebani warga pascaprogram.',
        'Perlu antisipasi musim kemarau (keterbatasan air bersih) pada jadwal pelaksanaan Juni–Oktober.',
      ],
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Banner */}
      <section className="bg-[#9A4026] text-[#FFFDF9] py-14 border-b-4 border-[#C0583A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFFDF9]/15 px-3 py-1 rounded-full text-xs font-semibold">
            <span>Profil Wilayah</span>
            <span>·</span>
            <span className="text-[#F4DCCB]">Basis Data & Survei Empiris</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Profil Kalurahan Giripurwo & Hasil Survei
          </h1>
          <p className="text-sm sm:text-base text-[#FBF1E6]/90 max-w-3xl leading-relaxed">
            Data kependudukan, kondisi sosial ekonomi, komunitas potensial, dan temuan survei awal yang menjadi landasan kurikulum Griya Ceria.
          </p>
          <div className="text-xs text-[#F4DCCB] pt-2">
            Sumber: SID Giripurwo 2025, BPS Kabupaten Gunungkidul, Data DTSEN, dan Survei Lapangan Tim PPK Ormawa UNY 2026.
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* A. GAMBARAN UMUM KALURAHAN */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              A. Gambaran Umum Kalurahan
            </span>
            <Badge type="RANCANGAN" />
          </div>

          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Demografi & Kondisi Kesejahteraan Warga
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] text-center">
              <span className="text-2xl font-bold text-[#C0583A] block">9.329</span>
              <span className="text-xs font-semibold text-[#4A2A1E]">Total Penduduk</span>
              <span className="text-[10px] text-[#7C533F] block mt-0.5">Laki-laki 4.548 (49%) · Perempuan 4.786 (51%)</span>
            </div>

            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] text-center">
              <span className="text-2xl font-bold text-[#C0583A] block">2.891</span>
              <span className="text-xs font-semibold text-[#4A2A1E]">Kepala Keluarga (KK)</span>
              <span className="text-[10px] text-[#7C533F] block mt-0.5">Tersebar di 10 Padukuhan</span>
            </div>

            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] text-center">
              <span className="text-2xl font-bold text-[#C0583A] block">68%</span>
              <span className="text-xs font-semibold text-[#4A2A1E]">Usia Produktif</span>
              <span className="text-[10px] text-[#7C533F] block mt-0.5">6.273 Jiwa potensi tenaga kerja</span>
            </div>

            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] text-center">
              <span className="text-xl font-bold text-[#6B8F4E] block">Desa Mandiri</span>
              <span className="text-xs font-semibold text-[#4A2A1E]">Status Kalurahan</span>
              <span className="text-[10px] text-[#7C533F] block mt-0.5">Kepmen No. 343 Tahun 2025</span>
            </div>
          </div>

          {/* Konteks Ekonomi Warga */}
          <div className="p-5 bg-[#F4DCCB]/40 rounded-xl border border-[#F4DCCB] space-y-3 text-xs sm:text-sm text-[#5A3A2E]">
            <div className="font-bold text-[#9A4026] text-sm">
              Kesenjangan Pendapatan dan Tingkat Prasejahtera:
            </div>
            <p>
              Berdasarkan wawancara dengan Lurah Giripurwo pada 13 Februari 2026, rata-rata pendapatan keluarga berada di kisaran <strong>±Rp1.800.000 per bulan</strong>. Nilai ini berada di bawah Upah Minimum Kabupaten (UMK) Gunungkidul tahun 2026 yang ditetapkan sebesar <strong>Rp2.468.378</strong>.
            </p>
            <p>
              Data Terpadu Kesejahteraan Sosial (DTSEN) mencatat bahwa <strong>84% keluarga (2.209 KK)</strong> berada pada desil 1–5 yang tergolong keluarga prasejahtera, dengan <strong>46% di antaranya terkonsentrasi pada Desil 1</strong>.
            </p>
          </div>
        </section>

        {/* B. MATA PENCAHARIAN WARGA */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              B. Mata Pencaharian
            </span>
            <span className="text-xs text-[#7C533F]">Sumber: SID Giripurwo 2025</span>
          </div>

          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Distribusi Profesi dan Pekerjaan Penduduk
          </h2>

          <div className="space-y-3 pt-2">
            {GIRIPURWO_DATA.mataPencaharian.map((job, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-[#4A2A1E] font-semibold">{job.label}</span>
                  <span className="text-[#7C533F] tabular-nums">
                    {job.count} jiwa ({job.percent}%)
                  </span>
                </div>
                <div className="w-full bg-[#F4DCCB]/40 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#C0583A] h-full rounded-full"
                    style={{ width: `${Math.min(job.percent * 2, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs text-[#7C533F] pt-2 border-t border-[#F4DCCB]/60">
            *Mayoritas penduduk menggantungkan hidup pada sektor pertanian (45,6%) dan buruh harian lepas (12,67%), yang sangat bergantung pada fluktuasi musim dan pasokan pupuk.
          </div>
        </section>

        {/* C & D. TINGKAT PENDIDIKAN & KELOMPOK UMUR */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* C. Pendidikan */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
                C. Tingkat Pendidikan (2025)
              </span>
              <h3 className="text-xl font-bold text-[#4A2A1E]">
                Rendahnya Tingkat Pendidikan Formal
              </h3>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Data kependudukan menunjukkan tantangan mendasar pada kapasitas sumber daya manusia:
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-3 bg-[#FAEDF0] rounded-xl text-[#963C53]">
                  <strong>2.175 Jiwa (23,3%)</strong> tercatat tidak pernah mengenyam pendidikan sekolah formal.
                </div>
                <div className="p-3 bg-[#FBF1E6] rounded-xl text-[#5A3A2E]">
                  <strong>2.407 Jiwa (25,8%)</strong> hanya lulusan tingkat SD atau sederajat.
                </div>
                <div className="p-3 bg-[#FBF1E6] rounded-xl text-[#5A3A2E]">
                  <strong>3.126 Jiwa</strong> anak-anak belum memasuki jenjang TK/KB.
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#F4DCCB]/50 rounded-xl text-xs text-[#9A4026] font-semibold">
              Total 49% penduduk dewasa tidak bersekolah atau tamatan SD, menegaskan pentingnya model andragogi praktis di Griya Ceria.
            </div>
          </div>

          {/* D. Kelompok Umur */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4 flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block mb-2">
                D. Struktur Kelompok Umur
              </span>
              <h3 className="text-xl font-bold text-[#4A2A1E] mb-2">
                Piramida Penduduk & Kelompok Rentan
              </h3>
              <p className="text-xs text-[#5A3A2E] leading-relaxed mb-4">
                Puncak kelompok usia muda produktif berada di rentang <strong>25–29 tahun (763 jiwa)</strong>, sementara terdapat populasi lansia yang signifikan <strong>di atas 75 tahun sebanyak 1.066 jiwa</strong>.
              </p>

              {/* Mini Scrollable Bar List */}
              <div className="max-h-56 overflow-y-auto space-y-1.5 pr-2 text-[11px]">
                {ageGroups.map((age, idx) => (
                  <div key={idx} className="flex items-center justify-between py-0.5 border-b border-[#F4DCCB]/30">
                    <span className="text-[#4A2A1E] font-medium">{age.range}</span>
                    <span className="text-[#7C533F] tabular-nums font-semibold">{age.count} jiwa</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-[#EEF3EA] rounded-xl text-xs text-[#4A6534] font-medium">
              Struktur ini memerlukan perlindungan ketahanan keluarga (Griya Reksa) dan pemberdayaan pemuda produktif (Griya Rekadaya).
            </div>
          </div>

        </section>

        {/* E. DELAPAN KOMUNITAS MASYARAKAT AKTIF */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              E. Modal Sosial Komunitas
            </span>
            <Badge type="RANCANGAN" />
          </div>

          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Delapan Komunitas Aktif Penggerak Giripurwo
          </h2>
          <p className="text-xs sm:text-sm text-[#5A3A2E]">
            Griya Ceria memanfaatkan organisasi kemasyarakatan yang sudah eksis sebagai basis peserta kelas pembelajaran:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {communities.map((comm, idx) => (
              <div key={idx} className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] space-y-2">
                <span className="text-[10px] font-bold text-[#C0583A] uppercase">Komunitas 0{idx + 1}</span>
                <h4 className="font-bold text-sm text-[#4A2A1E]">{comm.name}</h4>
                <p className="text-xs text-[#5A3A2E] leading-relaxed">{comm.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* F. PETA POTENSI DAN MASALAH (Tabel) */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              F. Matriks Masalah & Solusi
            </span>
            <Badge type="RANCANGAN" />
          </div>

          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Peta Potensi, Masalah, Kebutuhan & Solusi Griya
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#5A3A2E] border-collapse">
              <thead>
                <tr className="bg-[#F4DCCB] text-[#4A2A1E] border-b border-[#D9825F]/40 font-bold uppercase tracking-wider text-[11px]">
                  <th className="p-3">Masalah Sektoral</th>
                  <th className="p-3">Kebutuhan Warga</th>
                  <th className="p-3">Potensi Lokal</th>
                  <th className="p-3">Solusi Griya Ceria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4DCCB]/60">
                <tr className="hover:bg-[#FBF1E6]/60">
                  <td className="p-3 font-semibold text-[#4A2A1E]">Limbah pertanian & peternakan menumpuk</td>
                  <td className="p-3">Kemampuan produksi dan penggunaan pupuk organik mandiri</td>
                  <td className="p-3">2.647 ekor sapi (BPS 2025) & ±50 ton sekam padi penggilingan</td>
                  <td className="p-3 font-bold text-[#4A6534] bg-[#EEF3EA]/50">Griya Jinawi (Pupuk Gemah Ripah)</td>
                </tr>
                <tr className="hover:bg-[#FBF1E6]/60">
                  <td className="p-3 font-semibold text-[#4A2A1E]">Pemasaran produk UMKM sangat terbatas lokal</td>
                  <td className="p-3">Pemasaran skala luas, digitalisasi toko, & legalitas resmi</td>
                  <td className="p-3">427 unit UMKM, produk khas (bakpia, peyek, emping), internet merata</td>
                  <td className="p-3 font-bold text-[#633F28] bg-[#F5ECE6]/50">Griya Laku (Marketplace & NIB)</td>
                </tr>
                <tr className="hover:bg-[#FBF1E6]/60">
                  <td className="p-3 font-semibold text-[#4A2A1E]">Stunting naik (17 ke 31) & 4 kasus pinjol ilegal</td>
                  <td className="p-3">Pemahaman gizi tumbuh kembang & manajemen finansial keluarga</td>
                  <td className="p-3">Pisang kepok, kelor melimpah, kader posyandu & satgas stunting</td>
                  <td className="p-3 font-bold text-[#963C53] bg-[#FAEDF0]/50">Griya Reksa (Gizi & Keuangan)</td>
                </tr>
                <tr className="hover:bg-[#FBF1E6]/60">
                  <td className="p-3 font-semibold text-[#4A2A1E]">Literasi digital rendah, hoaks & game dominan</td>
                  <td className="p-3">Pemahaman etika digital, pemanfaatan kreatif AI & Canva</td>
                  <td className="p-3">Karang Taruna dan Forum Anak aktif di 10 padukuhan</td>
                  <td className="p-3 font-bold text-[#325C75] bg-[#EAF2F7]/50">Griya Rekadaya (Satgas Forum Anak)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* G. HASIL SURVEI PENDAHULUAN (Timeline 4 Kartu) */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              G. Hasil Survei Lapangan Pendahuluan
            </span>
            <Badge type="REALISASI" />
          </div>

          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Kronologi Survei & Fakta Temuan Bersama Pemerintah Kalurahan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {surveyTimeline.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FBF1E6] border border-[#F4DCCB] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#C0583A]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <span className="text-[10px] bg-[#F4DCCB] px-2 py-0.5 rounded text-[#4A2A1E]">
                      Tahap Survei
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-[#4A2A1E]">
                    {item.partner}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#5A3A2E] leading-relaxed pt-1">
                    {item.findings.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-[#C0583A] font-bold mt-0.5">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* H. SURVEI LITERASI DIGITAL KARANG TARUNA */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              H. Survei Literasi Digital Pemuda
            </span>
            <Badge type="REALISASI" />
          </div>

          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Survei Kebutuhan Digital Karang Taruna & Forum Anak
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            
            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] text-center">
              <span className="text-3xl font-extrabold text-[#C0583A] tabular-nums block">79,3%</span>
              <span className="text-xs font-bold text-[#4A2A1E] block mt-1">Sering Menggunakan Medsos</span>
              <span className="text-[10px] text-[#7C533F]">Instagram, WhatsApp, TikTok</span>
            </div>

            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] text-center">
              <span className="text-3xl font-extrabold text-[#6B8F4E] tabular-nums block">51,7%</span>
              <span className="text-xs font-bold text-[#4A2A1E] block mt-1">Internet untuk Aktivitas Produktif</span>
              <span className="text-[10px] text-[#7C533F]">Belajar & mencari referensi</span>
            </div>

            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] text-center">
              <span className="text-3xl font-extrabold text-[#D9825F] tabular-nums block">24,1%</span>
              <span className="text-xs font-bold text-[#4A2A1E] block mt-1">Belum Paham Membedakan Hoaks</span>
              <span className="text-[10px] text-[#7C533F]">Rentan disinformasi siber</span>
            </div>

            <div className="p-4 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] text-center">
              <span className="text-3xl font-extrabold text-[#9A4026] tabular-nums block">55,2%</span>
              <span className="text-xs font-bold text-[#4A2A1E] block mt-1">Belum Pernah Ikut Pelatihan</span>
              <span className="text-[10px] text-[#7C533F]">Ketiadaan wadah edukasi</span>
            </div>

          </div>

          <div className="p-4 bg-[#F4DCCB]/60 rounded-xl border border-[#F4DCCB] text-xs sm:text-sm text-[#4A2A1E] font-medium flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-[#C0583A] shrink-0" />
            <div>
              <strong>Kesimpulan Survei Pemuda:</strong> "Penggunaan teknologi masih didominasi konsumsi hiburan, sehingga memerlukan kurikulum kreatif (Griya Rekadaya) untuk mengarahkan potensi pemuda menjadi pelopor literasi digital desa."
            </div>
          </div>
        </section>

        {/* Blok Lanjut Baca */}
        <section className="p-6 bg-[#F4DCCB]/40 rounded-2xl border border-[#F4DCCB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#9A4026] uppercase block">Lanjut Baca:</span>
            <span className="text-sm font-semibold text-[#4A2A1E]">Ketahui metode andragogi dan silabus materi pembelajaran</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('metode-kurikulum')}
              className="px-4 py-2 text-xs font-semibold bg-[#C0583A] hover:bg-[#9A4026] text-white rounded-xl transition-colors shadow-xs"
            >
              Metode & Kurikulum →
            </button>
            <button
              onClick={() => onNavigate('program-griya')}
              className="px-4 py-2 text-xs font-semibold bg-[#FFFDF9] hover:bg-[#FBF1E6] text-[#9A4026] rounded-xl border border-[#F4DCCB] transition-colors shadow-xs"
            >
              Program 4 Griya →
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
