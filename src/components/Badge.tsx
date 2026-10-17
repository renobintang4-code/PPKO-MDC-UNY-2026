import React from 'react';

interface BadgeProps {
  type: 'REALISASI' | 'RANCANGAN' | 'TERCAPAI' | 'SEGERA';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ type, className = '' }) => {
  if (type === 'REALISASI') {
    return (
      <span className={`inline-flex items-center text-[11px] font-semibold tracking-wider text-[#9A4026] uppercase ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#C0583A] mr-1.5" aria-hidden="true" />
        Fakta Capaian
      </span>
    );
  }

  if (type === 'RANCANGAN') {
    return (
      <span className={`inline-flex items-center text-[10px] font-medium tracking-wide text-[#7C533F] bg-[#F4DCCB]/70 px-2 py-0.5 rounded border border-[#D9825F]/30 uppercase ${className}`}>
        Rancangan
      </span>
    );
  }

  if (type === 'TERCAPAI') {
    return (
      <span className={`inline-flex items-center text-[11px] font-semibold text-[#8C6418] bg-[#FFF8E7] px-2.5 py-0.5 rounded border border-[#D9A441]/40 uppercase tracking-wider ${className}`}>
        ✓ Tercapai 100%
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center text-[11px] font-medium text-[#5A3A2E] bg-[#F4DCCB]/40 px-2 py-0.5 rounded ${className}`}>
      Segera Hadir
    </span>
  );
};
