import React from 'react';
import { PageId } from '../types';
import { STUDENT_SCORES } from '../data/siteData';
import { Badge } from '../components/Badge';
import { 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  BarChart2, 
  Users, 
  FileCheck, 
  Sprout, 
  Store, 
  Heart, 
  Laptop,
  ArrowRight
} from 'lucide-react';

interface AchievementsPageProps {
  onNavigate: (page: PageId) => void;
}

export const AchievementsPage: React.FC<AchievementsPageProps> = ({ onNavigate }) => {
  const indicators = [
    {
      aspek: '1. Penguatan Kapasitas Ormawa MDC',
      sebelum: 'Belum berpengalaman memfasilitasi kelas desa, menyusun kurikulum nonformal, dan komunikasi lintas pamong.',
      sesudah: '100% mahasiswa pelaksana (14 orang) mencapai kategori "Sangat Mampu" dalam hard skill dan soft skill pengabdian.',
      status: 'Tercapai 100%',
    },
    {
      aspek: '2. Jumlah Pojok Literasi & Peserta',
      sebelum: 'Belum ada wadah literasi desa terpadu.',
      sesudah: 'Terbentuk 4 Pojok Literasi dengan total 123 peserta terdaftar dan 574 keikutsertaan kelas di 10 padukuhan.',
      status: 'Tercapai 100%',
    },
    {
      aspek: '3. Kurikulum Nonformal Terstandar',
      sebelum: 'Belum tersedianya kurikulum life skill berbasis kebutuhan lokal.',
      sesudah: 'Kurikulum Griya Ceria resmi disahkan Dinas Pendidikan Kab. Gunungkidul dan bersertifikasi QRCBN.',
      status: 'Tercapai 100%',
    },
    {
      aspek: '4. Pelaksanaan Pertemuan Pembelajaran',
      sebelum: 'Tidak ada rutinitas belajar nonformal terstruktur di tingkat padukuhan.',
      sesudah: 'Terlaksana 10–12 pertemuan per Griya; pengurus dan anggota disahkan melalui SK Lembaga Kalurahan.',
      status: 'Tercapai 100%',
    },
    {
      aspek: '5. Peluang Peningkatan Kapasitas Ekonomi',
      sebelum: 'Limbah kotoran dan sekam mencemari desa; produk UMKM minim pasar digital.',
      sesudah: 'Masyarakat memiliki keterampilan memproduksi pupuk Gemah Ripah dan mengelola 4 akun marketplace.',
      status: 'Tercapai 100%',
    },
    {
      aspek: '6. Kelembagaan Keberlanjutan Desa',
      sebelum: 'Belum ada lembaga resmi pelindung literasi desa terpadu.',
      sesudah: 'Lembaga Griya Ceria resmi disahkan melalui Keputusan Lurah Giripurwo untuk operasional berkelanjutan.',
      status: 'Tercapai 100%',
    },
    {
      aspek: '7. Penerapan Teknologi Digital',
      sebelum: 'Gawai hanya untuk konsumsi hiburan medsos dan game online.',
      sesudah: '4 akun toko marketplace aktif, promosi foto AI terstandar, dan pembentukan Satgas Forum Anak Kalurahan.',
      status: 'Tercapai 100%',
    },
  ];

  const prePostData = [
    { name: 'Griya Jinawi (Sage)', pre: 7.11, post: 18.01, increase: '153,38%', color: '#6B8F4E' },
    { name: 'Griya Laku (Karamel)', pre: 7.51, post: 18.22, increase: '142,47%', color: '#8A5A3C' },
    { name: 'Griya Reksa (Dusty Rose)', pre: 7.81, post: 18.10, increase: '131,77%', color: '#C9617A' },
    { name: 'Griya Rekadaya (Dusty Blue)', pre: 9.09, post: 18.36, increase: '101,98%', color: '#4F86A8' },
    { name: 'RATA-RATA KESELURUHAN', pre: 8.05, post: 18.20, increase: '126,15%', color: '#C0583A' },
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Banner */}
      <section className="bg-[#9A4026] text-[#FFFDF9] py-14 border-b-4 border-[#C0583A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFFDF9]/15 px-3 py-1 rounded-full text-xs font-semibold">
            <span>Evaluasi & Hasil Nyata</span>
            <span>·</span>
            <span className="text-[#F4DCCB]">PPK Ormawa UNY 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Capaian Kinerja & Dampak Program
          </h1>
          <p className="text-sm sm:text-base text-[#FBF1E6]/90 max-w-3xl leading-relaxed">
            Bukti kuantitatif dan kualitatif ketercapaian seluruh tujuan serta indikator keberhasilan program Griya Ceria di Kalurahan Giripurwo.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* A. KARTU BESAR OCHRE RINGKASAN CAPAIAN */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border-2 border-[#D9A441] shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6418] block">
                Status Evaluasi Kinerja Belmawa
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2A1E]">
                Tujuan Tercapai 100% | Indikator Keberhasilan Tercapai 100%
              </h2>
            </div>
            <div className="px-4 py-2 bg-[#FFF8E7] text-[#8C6418] border border-[#D9A441] rounded-xl font-bold text-xs uppercase tracking-wider shrink-0 text-center">
              ✓ Paripurna Kinerja
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#5A3A2E] leading-relaxed">
            Seluruh rencana kerja dan target luaran yang diajukan dalam subproposal PPK Ormawa telah terlaksana penuh melalui kerja kolaboratif bersama warga, pamong kalurahan, akademisi UNY, serta instansi pendamping sektoral di Gunungkidul.
          </p>
        </section>

        {/* B. BUKTI CAPAIAN TIGA TUJUAN UTAMA */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              B. Capaian Tiga Tujuan Utama
            </span>
            <Badge type="REALISASI" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-[#C0583A] text-white flex items-center justify-center font-bold text-xs">1</span>
                <span className="text-xs font-bold text-[#8C6418]">Tercapai 100%</span>
              </div>
              <h3 className="font-bold text-sm text-[#4A2A1E]">Peningkatan Kapasitas Warga</h3>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Skor pemahaman dan kompetensi rata-rata seluruh peserta naik signifikan dari <strong>8,05 menjadi 18,20 (+10,15 poin)</strong> atau melonjak <strong>+126,15%</strong> melalui 4 pojok literasi.
              </p>
            </div>

            <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-[#C0583A] text-white flex items-center justify-center font-bold text-xs">2</span>
                <span className="text-xs font-bold text-[#8C6418]">Tercapai 100%</span>
              </div>
              <h3 className="font-bold text-sm text-[#4A2A1E]">Penyusunan Kurikulum Nonformal</h3>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Tersusunnya Buku Kurikulum Griya Ceria yang memuat penguatan life skill dan ketahanan keluarga, <strong>disahkan Dinas Pendidikan Kab. Gunungkidul dan ber-QRCBN</strong>.
              </p>
            </div>

            <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#F4DCCB] shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-[#C0583A] text-white flex items-center justify-center font-bold text-xs">3</span>
                <span className="text-xs font-bold text-[#8C6418]">Tercapai 100%</span>
              </div>
              <h3 className="font-bold text-sm text-[#4A2A1E]">Produk & Keterampilan Bernilai</h3>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Setiap Griya menghasilkan luaran nyata: Jinawi (6 produk pupuk Gemah Ripah); Laku (4 akun marketplace & 9 foto katalog); Reksa (buku resep & 2 olahan gizi); Rekadaya (5 konten edukasi digital).
              </p>
            </div>

          </div>
        </section>

        {/* C. TABEL 7 INDIKATOR KEBERHASILAN */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              C. Tujuh Indikator Keberhasilan
            </span>
            <Badge type="REALISASI" />
          </div>

          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Matriks Ketercapaian Sebelum vs Sesudah Program
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#5A3A2E] border-collapse">
              <thead>
                <tr className="bg-[#F4DCCB] text-[#4A2A1E] font-bold uppercase tracking-wider text-[11px] border-b border-[#D9825F]/40">
                  <th className="p-3 w-1/4">Aspek Indikator</th>
                  <th className="p-3 w-1/3">Kondisi Sebelum Program</th>
                  <th className="p-3 w-1/3">Kondisi Sesudah Program</th>
                  <th className="p-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4DCCB]/60">
                {indicators.map((ind, idx) => (
                  <tr key={idx} className="hover:bg-[#FBF1E6]/60">
                    <td className="p-3 font-bold text-[#4A2A1E]">{ind.aspek}</td>
                    <td className="p-3 text-[#7C533F]">{ind.sebelum}</td>
                    <td className="p-3 text-[#5A3A2E] font-medium">{ind.sesudah}</td>
                    <td className="p-3 text-center">
                      <span className="inline-block px-2.5 py-0.5 bg-[#FFF8E7] text-[#8C6418] border border-[#D9A441] rounded-full text-[10px] font-bold whitespace-nowrap">
                        {ind.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* D. GRAFIK BATANG PRE-TEST VS POST-TEST */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block mb-1">
                D. Pengukuran Kuantitatif Peserta
              </span>
              <h2 className="text-2xl font-bold text-[#4A2A1E]">
                Grafik Perbandingan Pre-Test vs Post-Test per Griya
              </h2>
            </div>
            <Badge type="REALISASI" />
          </div>

          <div className="space-y-6 pt-2">
            {prePostData.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[#4A2A1E]">{item.name}</span>
                  <span className="text-[#9A4026] tabular-nums font-extrabold">
                    +{item.increase}
                  </span>
                </div>

                {/* Pre-Test Bar */}
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-16 text-[#7C533F] text-[11px]">Pre-Test:</span>
                  <div className="flex-1 bg-[#F4DCCB]/40 h-3 rounded-full overflow-hidden">
                    <div
                      className="bg-[#D9825F] h-full rounded-full"
                      style={{ width: `${(item.pre / 20) * 100}%` }}
                    />
                  </div>
                  <span className="w-12 text-right font-bold text-[#7C533F] tabular-nums">{item.pre}</span>
                </div>

                {/* Post-Test Bar */}
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-16 font-bold text-[#4A2A1E] text-[11px]">Post-Test:</span>
                  <div className="flex-1 bg-[#F4DCCB]/40 h-3.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${(item.post / 20) * 100}%`, backgroundColor: item.color }}
                    />
                  </div>
                  <span className="w-12 text-right font-extrabold text-[#4A2A1E] tabular-nums">{item.post}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-[#FBF1E6] rounded-xl border border-[#F4DCCB] text-[11px] text-[#7C533F] italic">
            *Catatan Metodologi: "Pre-test dan post-test diisi oleh peserta melalui angket tertutup terstandar pada setiap Griya dengan skala 1–4, kemudian dikonversikan ke skala 20."
          </div>
        </section>

        {/* E. SEBELUM DAN SESUDAH PER SEKTOR (4 KARTU) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              E. Transformasi Empat Sektor
            </span>
            <Badge type="REALISASI" />
          </div>

          <h2 className="text-2xl font-bold text-[#4A2A1E]">
            Sebelum vs Sesudah Intervensi Program di Giripurwo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Pertanian */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 border-2 border-[#6B8F4E]/30 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#4A6534] font-bold text-sm">
                <Sprout className="w-4 h-4" />
                <span>Sektor Pertanian & Peternakan</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-[#FAEDF0] text-[#963C53] rounded-lg">
                  <strong>Sebelum:</strong> Sekam padi dan kotoran ternak menumpuk mencemari lingkungan pemukiman tanpa nilai ekonomi.
                </div>
                <div className="p-2.5 bg-[#EEF3EA] text-[#4A6534] rounded-lg">
                  <strong>Sesudah:</strong> Terbentuk 2 Pusat Pengolahan Pupuk Organik di Padukuhan Sumur dan Gubar dengan merek "Gemah Ripah".
                </div>
              </div>
            </div>

            {/* UMKM */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 border-2 border-[#8A5A3C]/30 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#633F28] font-bold text-sm">
                <Store className="w-4 h-4" />
                <span>Sektor UMKM & Digitalisasi Pasar</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-[#FAEDF0] text-[#963C53] rounded-lg">
                  <strong>Sebelum:</strong> Belum ada akun penjual online, foto kemasan seadanya, pemasaran terbatas antarwarga lokal.
                </div>
                <div className="p-2.5 bg-[#F5ECE6] text-[#633F28] rounded-lg">
                  <strong>Sesudah:</strong> Foto katalog produk terstandar studio mini, AI prompt untuk caption, dan 4 akun marketplace dikelola tim terlatih.
                </div>
              </div>
            </div>

            {/* Keluarga */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 border-2 border-[#C9617A]/30 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#963C53] font-bold text-sm">
                <Heart className="w-4 h-4" />
                <span>Sektor Ketahanan Keluarga & Gizi</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-[#FAEDF0] text-[#963C53] rounded-lg">
                  <strong>Sebelum:</strong> Stunting naik ke 31 balita, terbiasa meminjam bank plecit, dan 4 warga terjerat pinjol ilegal.
                </div>
                <div className="p-2.5 bg-[#FAEDF0] text-[#963C53] rounded-lg">
                  <strong>Sesudah:</strong> Pola asuh positif, olahan daun kelor & pisang jadi acuan PMT Kalurahan via Buku Resep Dapur Griya Reksa, dan literasi anti-pinjol.
                </div>
              </div>
            </div>

            {/* Literasi Digital */}
            <div className="bg-[#FFFDF9] rounded-2xl p-6 border-2 border-[#4F86A8]/30 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#325C75] font-bold text-sm">
                <Laptop className="w-4 h-4" />
                <span>Sektor Literasi Pemuda & Karakter</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-[#FAEDF0] text-[#963C53] rounded-lg">
                  <strong>Sebelum:</strong> Gawai hanya digunakan konsumsi hiburan, minim pemahaman deteksi hoaks, dan belum ada pelatihan literasi.
                </div>
                <div className="p-2.5 bg-[#EAF2F7] text-[#325C75] rounded-lg">
                  <strong>Sesudah:</strong> Kader pemuda terlatih desain Canva & CapCut, dan dikukuhkan menjadi Satgas Forum Anak (2026–2028) pelopor literasi desa.
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* F. PENINGKATAN KAPASITAS 14 MAHASISWA ORMAWA MDC [REALISASI] */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
              F. Penguatan Kapasitas Mahasiswa Pelaksana
            </span>
            <Badge type="REALISASI" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#4A2A1E]">
              Evaluasi Hard Skill & Soft Skill 14 Mahasiswa Tim PPKO MDC
            </h2>
            <p className="text-xs sm:text-sm text-[#5A3A2E] mt-1">
              Seluruh 14 mahasiswa pelaksana UKMF MIPA Debate Club FMIPA UNY berhasil mencapai kategori tertinggi <strong>"Sangat Mampu"</strong>.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#5A3A2E] border-collapse">
              <thead>
                <tr className="bg-[#F4DCCB] text-[#4A2A1E] font-bold uppercase tracking-wider text-[11px] border-b border-[#D9825F]/40">
                  <th className="p-3">No</th>
                  <th className="p-3">Nama Mahasiswa Pelaksana</th>
                  <th className="p-3 text-center">Hard Skill (Pre → Post)</th>
                  <th className="p-3 text-center">Soft Skill (Pre → Post)</th>
                  <th className="p-3 text-center">Kategori Capaian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F4DCCB]/60">
                {STUDENT_SCORES.map((s, idx) => (
                  <tr key={idx} className="hover:bg-[#FBF1E6]/60">
                    <td className="p-3 text-[#7C533F]">{idx + 1}</td>
                    <td className="p-3 font-semibold text-[#4A2A1E]">
                      {s.name}
                      {s.role && <span className="ml-2 text-[10px] text-[#C0583A] font-bold">({s.role})</span>}
                    </td>
                    <td className="p-3 text-center font-bold text-[#6B8F4E] tabular-nums">
                      {s.hardPre.toFixed(2)} → {s.hardPost.toFixed(2)}
                    </td>
                    <td className="p-3 text-center font-bold text-[#4F86A8] tabular-nums">
                      {s.softPre.toFixed(2)} → {s.softPost.toFixed(2)}
                    </td>
                    <td className="p-3 text-center">
                      <span className="inline-block px-2.5 py-0.5 bg-[#EEF3EA] text-[#4A6534] border border-[#6B8F4E]/40 rounded-full text-[10px] font-bold">
                        {s.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Blok Lanjut Baca */}
        <section className="p-6 bg-[#F4DCCB]/40 rounded-2xl border border-[#F4DCCB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#9A4026] uppercase block">Lanjut Baca:</span>
            <span className="text-sm font-semibold text-[#4A2A1E]">Lihat mitra pendukung dan katalog luaran resmi</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('mitra-kami')}
              className="px-4 py-2 text-xs font-semibold bg-[#C0583A] hover:bg-[#9A4026] text-white rounded-xl transition-colors shadow-xs"
            >
              Mitra Kami →
            </button>
            <button
              onClick={() => onNavigate('luaran')}
              className="px-4 py-2 text-xs font-semibold bg-[#FFFDF9] hover:bg-[#FBF1E6] text-[#9A4026] rounded-xl border border-[#F4DCCB] transition-colors shadow-xs"
            >
              Katalog 104 Luaran →
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
