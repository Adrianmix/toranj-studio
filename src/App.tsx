/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import type { JournalArticle } from './data/articles';
import type { ProjectItem } from './data/projects';
import { AboutStudio } from './components/AboutStudio';
import { ArticleModal } from './components/ArticleModal';
import { FeaturedCaseStudy } from './components/FeaturedCaseStudy';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Journal } from './components/Journal';
import { MobileMenu } from './components/MobileMenu';
import { Philosophy } from './components/Philosophy';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { ProjectModal } from './components/ProjectModal';
import { ScrollToTop } from './components/ScrollToTop';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState<string | undefined>(undefined);

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const openInquiry = (serviceTitle?: string) => {
    setInquiryService(serviceTitle);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3EFE8] text-[#252522]">
      {/* SECTION 01 — HEADER */}
      <Header
        onOpenInquiry={() => openInquiry()}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenInquiry={() => openInquiry()}
      />

      <main className="flex-1">
        {/* SECTION 02 — HERO */}
        <Hero onOpenInquiry={() => openInquiry()} />

        {/* SECTION 03 — SELECTED WORKS */}
        <Portfolio onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* SECTION 04 — FEATURED CASE STUDY */}
        <FeaturedCaseStudy onOpenCaseStudy={() => setIsCaseStudyOpen(true)} />

        {/* SECTION 05 — ABOUT THE STUDIO */}
        <AboutStudio onOpenAboutModal={() => setIsAboutOpen(true)} />

        {/* SECTION 06 — SERVICES */}
        <Services onSelectService={(serviceTitle) => openInquiry(serviceTitle)} />

        {/* SECTION 07 — DESIGN PHILOSOPHY */}
        <Philosophy />

        {/* SECTION 08 — OUR PROCESS */}
        <Process />

        {/* SECTION 09 — TESTIMONIALS */}
        <Testimonials />

        {/* SECTION 10 — JOURNAL */}
        <Journal onSelectArticle={(article) => setSelectedArticle(article)} />

        {/* SECTION 11 — FINAL CTA */}
        <FinalCTA onOpenInquiry={() => openInquiry()} />
      </main>

      {/* SECTION 12 — FOOTER */}
      <Footer onOpenInquiry={() => openInquiry()} />

      <ScrollToTop />

      {/* Interactive Modals */}
      <ProjectInquiryModal
        isOpen={isInquiryOpen}
        initialService={inquiryService}
        onClose={() => setIsInquiryOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        isCaseStudyOpen={isCaseStudyOpen}
        onClose={() => {
          setSelectedProject(null);
          setIsCaseStudyOpen(false);
        }}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onStartSimilarProject={(svc) => openInquiry(svc)}
      />

      <ArticleModal
        article={selectedArticle}
        isAboutOpen={isAboutOpen}
        onClose={() => {
          setSelectedArticle(null);
          setIsAboutOpen(false);
        }}
        onOpenInquiry={() => openInquiry()}
      />
    </div>
  );
}
