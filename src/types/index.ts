export type PageId = 
  | 'home'
  | 'tentang'
  | 'profil-giripurwo'
  | 'metode-kurikulum'
  | 'program-griya'
  | 'griya-jinawi'
  | 'griya-laku'
  | 'griya-reksa'
  | 'griya-rekadaya'
  | 'capaian-dampak'
  | 'mitra-kami'
  | 'luaran'
  | 'tempat-luaran'
  | 'keberlanjutan'
  | 'dokumentasi'
  | 'tim-kontak';

export type OutputCategory = 
  | 'semua'
  | 'buku'
  | 'poster'
  | 'artikel'
  | 'produk'
  | 'video'
  | 'legalitas'
  | 'tempat';

export type PartnerCategory = 
  | 'semua'
  | 'pemerintah'
  | 'akademisi'
  | 'komunitas'
  | 'standarisasi'
  | 'media';

export interface PartnerItem {
  id: string;
  name: string;
  category: 'pemerintah' | 'akademisi' | 'komunitas' | 'standarisasi' | 'media';
  categoryLabel: string;
  role: string;
  desc: string;
  griya: string;
  color: string;
  type: 'REALISASI' | 'RANCANGAN';
  legalDocument?: string;
  legalDocType?: string;
  picOrContact?: string;
  jointOutputs?: string[];
  testimony?: {
    quote: string;
    person: string;
    title: string;
  };
}

export interface OutputLocationItem {
  id: string;
  name: string;
  shortName: string;
  category: 'balai' | 'pertanian' | 'umkm' | 'posyandu' | 'pemuda' | 'arsip' | 'digital';
  categoryLabel: string;
  locationArea: string;
  description: string;
  color: string;
  iconName: string;
  community: string;
  storedOutputs: {
    title: string;
    type: string;
    badge: 'REALISASI' | 'RANCANGAN';
  }[];
}

export interface ProgramOutputItem {
  id: string;
  title: string;
  category: OutputCategory;
  categoryLabel: string;
  griya: string;
  type: string;
  desc: string;
  location: string;
  badge: 'REALISASI' | 'RANCANGAN';
  color: string;
  actionLabel?: string;
  isEmbed?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
  source: 'REALISASI' | 'RANCANGAN';
}

export interface GriyaInfo {
  id: 'griya-jinawi' | 'griya-laku' | 'griya-reksa' | 'griya-rekadaya';
  name: string;
  tagline: string;
  shortDesc: string;
  color: string; // hex
  lightColor: string;
  darkColor: string;
  iconName: string;
  meetingsCount: number;
  preTest: number;
  postTest: number;
  increasePercent: number;
  targetAudience: string;
  keyOutputs: string[];
}

export interface StudentScore {
  name: string;
  role?: string;
  hardPre: number;
  hardPost: number;
  softPre: number;
  softPost: number;
  category: 'Sangat Mampu';
}

