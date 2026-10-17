import React, { useState, useEffect } from 'react';
import { PageId, OutputCategory } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutProgramPage } from './pages/AboutProgramPage';
import { ProfileGiripurwoPage } from './pages/ProfileGiripurwoPage';
import { MethodCurriculumPage } from './pages/MethodCurriculumPage';
import { GriyaPage } from './pages/GriyaPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { PartnersPage } from './pages/PartnersPage';
import { OutputsPage } from './pages/OutputsPage';
import { OutputLocationsPage } from './pages/OutputLocationsPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { DocumentationPage } from './pages/DocumentationPage';
import { TeamContactPage } from './pages/TeamContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [outputCategory, setOutputCategory] = useState<OutputCategory>('semua');

  const handleNavigate = (page: PageId, subFilter?: string) => {
    setCurrentPage(page);
    if (page === 'luaran' && subFilter) {
      setOutputCategory(subFilter as OutputCategory);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF1E6] text-[#5A3A2E] font-sans antialiased selection:bg-[#F4DCCB] selection:text-[#9A4026]">
      {/* Sticky Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'tentang' && <AboutProgramPage onNavigate={handleNavigate} />}
        {currentPage === 'profil-giripurwo' && <ProfileGiripurwoPage onNavigate={handleNavigate} />}
        {currentPage === 'metode-kurikulum' && <MethodCurriculumPage onNavigate={handleNavigate} />}
        
        {currentPage === 'program-griya' && (
          <GriyaPage initialGriya="overview" onNavigate={handleNavigate} />
        )}
        {currentPage === 'griya-jinawi' && (
          <GriyaPage initialGriya="griya-jinawi" onNavigate={handleNavigate} />
        )}
        {currentPage === 'griya-laku' && (
          <GriyaPage initialGriya="griya-laku" onNavigate={handleNavigate} />
        )}
        {currentPage === 'griya-reksa' && (
          <GriyaPage initialGriya="griya-reksa" onNavigate={handleNavigate} />
        )}
        {currentPage === 'griya-rekadaya' && (
          <GriyaPage initialGriya="griya-rekadaya" onNavigate={handleNavigate} />
        )}

        {currentPage === 'capaian-dampak' && <AchievementsPage onNavigate={handleNavigate} />}
        {currentPage === 'mitra-kami' && <PartnersPage onNavigate={handleNavigate} />}
        {currentPage === 'luaran' && (
          <OutputsPage initialCategory={outputCategory} onNavigate={handleNavigate} />
        )}
        {currentPage === 'tempat-luaran' && (
          <OutputLocationsPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'keberlanjutan' && <SustainabilityPage onNavigate={handleNavigate} />}
        {currentPage === 'dokumentasi' && <DocumentationPage onNavigate={handleNavigate} />}
        {currentPage === 'tim-kontak' && <TeamContactPage onNavigate={handleNavigate} />}
      </main>

      {/* Institutional Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
