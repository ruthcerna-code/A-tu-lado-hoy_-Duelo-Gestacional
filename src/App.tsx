/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhoWeAccompany } from './components/WhoWeAccompany';
import { ToolsGrid, ToolItem } from './components/ToolsGrid';
import { LibraryAndRights } from './components/LibraryAndRights';
import { PrivacyAndControl } from './components/PrivacyAndControl';
import { CalmPause } from './components/CalmPause';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

// Modals
import { GuestAccessModal } from './components/GuestAccessModal';
import { EmergencyResourcesModal } from './components/EmergencyResourcesModal';
import { LawInfoModal } from './components/LawInfoModal';
import { ToolDetailModal } from './components/ToolDetailModal';
import { LibraryModal } from './components/LibraryModal';

export default function App() {
  // Modal states
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isLawModalOpen, setIsLawModalOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);
  const [isLibraryModalOpen, setIsLibraryModalOpen] = useState(false);
  const [libraryInitialCategory, setLibraryInitialCategory] = useState<string>('todos');
  const [activeUserPseudonym, setActiveUserPseudonym] = useState<string | null>(null);

  const handleOpenLibraryWithCategory = (category?: string) => {
    setLibraryInitialCategory(category || 'todos');
    setIsLibraryModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnterAsGuest = (pseudonym: string) => {
    setActiveUserPseudonym(pseudonym);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#002E67] flex flex-col font-sans selection:bg-[#EF8E11] selection:text-white">
      
      {/* Sands UK Active Session banner */}
      {activeUserPseudonym && (
        <aside aria-label="Aviso de sesión activa" className="bg-[#E1F2F6] border-b border-[#1A95BA]/30 px-4 py-2 text-center text-xs font-bold text-[#002E67] flex items-center justify-center gap-2">
          <span>Estás en tu espacio como: <strong className="font-extrabold text-[#1A95BA]">{activeUserPseudonym}</strong> (modo anónimo/libre sin registro obligatorio)</span>
          <button 
            type="button" 
            onClick={() => setActiveUserPseudonym(null)}
            className="text-[11px] underline text-[#002E67]/70 hover:text-[#002E67] ml-2 cursor-pointer font-bold"
          >
            Salir
          </button>
        </aside>
      )}

      {/* 1. Header (Sands UK Top Bar & Utility Helpline) */}
      <Header
        onOpenGuestAccess={() => setIsGuestModalOpen(true)}
        onOpenHelpResources={() => setIsHelpModalOpen(true)}
        onOpenSection={handleScrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero: Qué es A Tu Lado Hoy */}
        <Hero
          onOpenGuestAccess={() => setIsGuestModalOpen(true)}
          onExploreLibrary={() => handleOpenLibraryWithCategory()}
        />

        {/* 3. A quién acompaña */}
        <WhoWeAccompany />

        {/* 4. Herramientas (Gran contenedor durazno, 4x2) */}
        <ToolsGrid
          onSelectTool={(tool) => setSelectedTool(tool)}
        />

        {/* 5. Biblioteca + Tus derechos (Dos columnas) */}
        <LibraryAndRights
          onOpenLibrary={handleOpenLibraryWithCategory}
          onOpenLawInfo={() => setIsLawModalOpen(true)}
        />

        {/* 6. Privacidad y control (4 tiles redondeados + nota honesta) */}
        <PrivacyAndControl
          onOpenPrivacyDetails={() => setIsGuestModalOpen(true)}
        />

        {/* 7. Pausa de calma (Franja en verde salvia) */}
        <CalmPause />

        {/* 8. CTA Final */}
        <FinalCTA
          onOpenGuestAccess={() => setIsGuestModalOpen(true)}
          onExploreLibrary={() => handleOpenLibraryWithCategory()}
        />
      </main>

      {/* 9. Footer (Aviso médico destacado + Recursos de ayuda) */}
      <Footer
        onOpenSection={handleScrollToSection}
        onOpenHelpResources={() => setIsHelpModalOpen(true)}
        onOpenLawInfo={() => setIsLawModalOpen(true)}
        onOpenGuestAccess={() => setIsGuestModalOpen(true)}
      />

      {/* Interactive Modals & Drawers */}
      <GuestAccessModal
        isOpen={isGuestModalOpen}
        onClose={() => setIsGuestModalOpen(false)}
        onEnterAsGuest={handleEnterAsGuest}
      />

      <EmergencyResourcesModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />

      <LawInfoModal
        isOpen={isLawModalOpen}
        onClose={() => setIsLawModalOpen(false)}
      />

      <ToolDetailModal
        tool={selectedTool}
        onClose={() => setSelectedTool(null)}
        onOpenCalmSection={() => handleScrollToSection('pausa')}
        onOpenHelpResources={() => setIsHelpModalOpen(true)}
        onOpenLibrary={() => handleOpenLibraryWithCategory()}
        onOpenLawInfo={() => setIsLawModalOpen(true)}
      />

      <LibraryModal
        isOpen={isLibraryModalOpen}
        onClose={() => setIsLibraryModalOpen(false)}
        initialCategory={libraryInitialCategory}
      />

    </div>
  );
}
