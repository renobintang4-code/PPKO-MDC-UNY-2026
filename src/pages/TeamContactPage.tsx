import React from 'react';
import { PageId } from '../types';
import { STUDENT_SCORES, SITE_METADATA } from '../data/siteData';
import { Badge } from '../components/Badge';
import { 
  Users, 
  GraduationCap, 
  MapPin, 
  Instagram, 
  Youtube, 
  Video, 
  ExternalLink, 
  Mail, 
  Building,
  Award,
  ArrowRight
} from 'lucide-react';

interface TeamContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const TeamContactPage: React.FC<TeamContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Banner */}
      <section className="bg-[#9A4026] text-[#FFFDF9] py-14 border-b-4 border-[#C0583A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFFDF9]/15 px-3 py-1 rounded-full text-xs font-semibold">
            <span>Struktur Pelaksana & Narahubung</span>
            <span>·</span>
            <span className="text-[#F4DCCB]">PPK Ormawa UNY 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Tim Pelaksana & Kontak Resmi
          </h1>
          <p className="text-sm sm:text-base text-[#FBF1E6]/90 max-w-3xl leading-relaxed">
            Mengenal tim penggerak dari UKMF MIPA Debate Club (MDC) FMIPA Universitas Negeri Yogyakarta dan Dosen Pendamping yang berdedikasi mengabdi di Kalurahan Giripurwo.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* DOSEN PENDAMPING & ORMAWA PENGUSUL */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Dosen Pendamping */}
          <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-[#6B8F4E] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
                  Dosen Pendamping
                </span>
                <Badge type="REALISASI" />
              </div>
              <h3 className="text-xl font-bold text-[#4A2A1E]">
                Kuntum Febriyantiningrum, S.Si., M.Sc.
              </h3>
              <p className="text-xs text-[#7C533F] font-semibold">
                Dosen Pembimbing Lapangan PPK Ormawa FMIPA Universitas Negeri Yogyakarta
              </p>
              <p className="text-xs text-[#5A3A2E] leading-relaxed pt-2">
                Memberikan arahan strategis penyusunan subproposal, memfasilitasi komunikasi resmi dengan Kalurahan Giripurwo dan instansi Pemkab Gunungkidul, memvalidasi logbook berkala, melakukan supervisi monev lapangan 2 pekanan, pengujian laboratorium sampel pupuk, serta menyusun rencana tindak lanjut kemandirian desa.
              </p>
            </div>
            <div className="p-3 bg-[#EEF3EA] rounded-xl text-xs text-[#4A6534] font-medium flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#6B8F4E]" />
              <span>FMIPA Universitas Negeri Yogyakarta</span>
            </div>
          </div>

          {/* Ormawa Pengusul */}
          <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider">
                  Ormawa Pelaksana
                </span>
                <Badge type="REALISASI" />
              </div>
              <h3 className="text-xl font-bold text-[#4A2A1E]">
                UKMF MIPA Debate Club (MDC)
              </h3>
              <p className="text-xs text-[#7C533F] font-semibold">
                Fakultas Matematika dan Ilmu Pengetahuan Alam, Universitas Negeri Yogyakarta
              </p>
              <p className="text-xs text-[#5A3A2E] leading-relaxed pt-2">
                Organisasi kemahasiswaan tingkat fakultas yang menginisiasi konsep Desa Cerdas Giripurwo. Pascapelaksanaan program, kesinambungan pendampingan diteruskan oleh Divisi Pengabdian Masyarakat MDC melalui program kerja unggulan <em>Desa Binaan</em>.
              </p>
            </div>
            <div className="p-3 bg-[#F4DCCB]/50 rounded-xl text-xs text-[#9A4026] font-medium flex items-center gap-2">
              <Building className="w-4 h-4 text-[#C0583A]" />
              <span>Divisi Pengabdian Masyarakat MDC UNY</span>
            </div>
          </div>

        </section>

        {/* 14 MAHASISWA TIM PELAKSANA */}
        <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 border border-[#F4DCCB] shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block mb-1">
                Kader Mahasiswa Pengabdi
              </span>
              <h2 className="text-2xl font-bold text-[#4A2A1E]">
                Empat Belas Mahasiswa Pelaksana PPKO MDC 2026
              </h2>
            </div>
            <Badge type="REALISASI" />
          </div>

          <p className="text-xs sm:text-sm text-[#5A3A2E] leading-relaxed">
            Seluruh anggota tim pelaksana dinilai melalui instrumen evaluasi kemahiran teknis (hard skill) dan kecakapan sosial kemasyarakatan (soft skill), dengan hasil akhir 100% berkategori <strong>"Sangat Mampu"</strong>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {STUDENT_SCORES.map((s, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FBF1E6] border border-[#F4DCCB] space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#7C533F] mb-1">
                    <span>No. {idx + 1}</span>
                    <span className="font-semibold text-[#4A6534] bg-[#EEF3EA] px-2 py-0.5 rounded">
                      {s.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-[#4A2A1E]">
                    {s.name}
                  </h4>
                  {s.role && (
                    <span className="text-[11px] font-semibold text-[#C0583A] block">
                      {s.role}
                    </span>
                  )}
                </div>

                <div className="pt-2 border-t border-[#F4DCCB]/60 text-[11px] grid grid-cols-2 gap-2 text-[#5A3A2E]">
                  <div>
                    <span className="text-[#7C533F] block text-[10px]">Hard Skill:</span>
                    <span className="font-bold text-[#6B8F4E] tabular-nums">{s.hardPre.toFixed(2)} → {s.hardPost.toFixed(2)}</span>
                  </div>
                  <div>
                    <span className="text-[#7C533F] block text-[10px]">Soft Skill:</span>
                    <span className="font-bold text-[#4F86A8] tabular-nums">{s.softPre.toFixed(2)} → {s.softPost.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KONTAK, MEDIA SOSIAL & LOKASI */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Kontak & Kanal Media */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
                Kanal Komunikasi Resmi
              </span>
              <h3 className="text-xl font-bold text-[#4A2A1E]">
                Terhubung dengan Griya Ceria
              </h3>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Untuk pertanyaan terkait program, kerja sama kemitraan, replikasi pojok literasi, atau permohonan kunjungan studi lapang, hubungi kami melalui kanal resmi berikut:
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#FBF1E6] rounded-xl hover:bg-[#F4DCCB]/40 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-[#C0583A] shrink-0" />
                  <div>
                    <span className="font-bold text-[#4A2A1E] block">Instagram Resmi:</span>
                    <span className="text-[#9A4026]">@ppkomdc.griyaceria</span>
                  </div>
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#FBF1E6] rounded-xl hover:bg-[#F4DCCB]/40 transition-colors"
                >
                  <Video className="w-5 h-5 text-[#C0583A] shrink-0" />
                  <div>
                    <span className="font-bold text-[#4A2A1E] block">TikTok Edukasi:</span>
                    <span className="text-[#9A4026]">@ppko_mdcuny2026</span>
                  </div>
                </a>

                <a
                  href={SITE_METADATA.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#FBF1E6] rounded-xl hover:bg-[#F4DCCB]/40 transition-colors"
                >
                  <Youtube className="w-5 h-5 text-[#C0583A] shrink-0" />
                  <div>
                    <span className="font-bold text-[#4A2A1E] block">YouTube Channel:</span>
                    <span className="text-[#9A4026]">@ppkomdc.griyaceria</span>
                  </div>
                </a>

                <div className="p-3 bg-[#F4DCCB]/40 rounded-xl space-y-1">
                  <span className="font-bold text-[#4A2A1E] block">Layanan Pesan WhatsApp:</span>
                  <span className="text-[#5A3A2E]">{SITE_METADATA.social.whatsapp}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F4DCCB]/60 text-xs text-[#7C533F]">
              Sekretariat UKMF MDC FMIPA UNY, Kampus Karangmalang, D.I. Yogyakarta 55281.
            </div>
          </div>

          {/* Peta & Lokasi Kalurahan Giripurwo */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#F4DCCB] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-3 py-1 bg-[#C0583A] text-white rounded-full text-xs font-semibold uppercase tracking-wider inline-block">
                Pusat Kegiatan Lapangan
              </span>
              <h3 className="text-xl font-bold text-[#4A2A1E]">
                Balai Kalurahan Giripurwo & 10 Padukuhan
              </h3>
              <p className="text-xs text-[#5A3A2E] leading-relaxed">
                Kegiatan tatap muka dipusatkan di Balai Kalurahan Giripurwo dan sentra-sentra padukuhan (Padukuhan Sumur, Gubar, dan 8 padukuhan lainnya) di Kapanewon Purwosari, Kabupaten Gunungkidul (±40 km dari UNY).
              </p>

              <div className="h-64 w-full rounded-xl overflow-hidden border border-[#F4DCCB] shadow-inner mt-2">
                <iframe
                  title="Peta Giripurwo Gunungkidul"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${SITE_METADATA.coordinates.lat},${SITE_METADATA.coordinates.lng}&hl=id&z=13&output=embed`}
                />
              </div>
            </div>

            <div className="p-3 bg-[#EEF3EA] rounded-xl text-xs text-[#4A6534] font-medium flex items-center justify-between">
              <span>Koordinat: -8.042554, 110.392314</span>
              <span>Purwosari, Gunungkidul</span>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};
