import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const ContentPage = lazy(() => import('./pages/ContentPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const ConseilPage = lazy(() => import('./pages/ConseilPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const NewsListPage = lazy(() => import('./pages/NewsListPage'));
const NewsDetailPage = lazy(() => import('./pages/NewsDetailPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const GalleryDetailPage = lazy(() => import('./pages/GalleryDetailPage'));
const VideoPage = lazy(() => import('./pages/VideoPage'));
const ValorisationPage = lazy(() => import('./pages/ValorisationPage'));
const ValorisationDetailPage = lazy(() => import('./pages/ValorisationDetailPage'));
const AgendaPage = lazy(() => import('./pages/AgendaPage'));
const RecruitmentPage = lazy(() => import('./pages/RecruitmentPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PublicationsPage = lazy(() => import('./pages/PublicationsPage'));

const QSN = { label: 'Qui sommes-nous' };
const ACT = { label: 'Activités' };
const OUTILS = { label: 'Outils de suivi' };
const COMM = { label: 'Communication' };

function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="h-10 w-10 rounded-full border-2 border-cms-gray-light border-t-cms-green animate-spin" />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Qui sommes-nous */}
          <Route path="/presentation" element={<ContentPage slug="presentation" group={QSN} />} />
          <Route path="/infrastructure" element={<ContentPage slug="infrastructure" group={QSN} />} />
          <Route path="/conseil-dadministration" element={<ConseilPage />} />
          <Route path="/organigramme" element={<ContentPage slug="organigramme" group={QSN} />} />
          <Route path="/qsn_equipes" element={<TeamPage />} />
          <Route path="/partenaires" element={<PartnersPage />} />

          {/* Activités */}
          <Route path="/formation" element={<ContentPage slug="formation" group={ACT} />} />
          <Route path="/appui-a-la-micro-entreprise" element={<ContentPage slug="appui-a-la-micro-entreprise" group={ACT} />} />
          <Route path="/observatoire" element={<ContentPage slug="observatoire" group={ACT} />} />
          <Route path="/communication-et-partenariat" element={<ContentPage slug="communication-et-partenariat" group={ACT} />} />

          {/* Promotion */}
          <Route path="/valorisationmicroentrepreneurs" element={<ValorisationPage />} />
          <Route path="/valorisationmicroentrepreneurs/:slug" element={<ValorisationDetailPage />} />

          {/* Outils de suivi */}
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/education-financiere" element={<ContentPage slug="education-financiere" group={OUTILS} />} />
          <Route path="/e-learning" element={<ContentPage slug="e-learning" group={OUTILS} />} />
          <Route path="/cartographie-nationale-de-la-microfinance" element={<ContentPage slug="cartographie-nationale-de-la-microfinance" group={OUTILS} />} />

          {/* Communication */}
          <Route path="/actualites" element={<NewsListPage />} />
          <Route path="/actualites/:slug" element={<NewsDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/:slug" element={<GalleryDetailPage />} />
          <Route path="/gallery-video" element={<VideoPage />} />
          <Route path="/recrutement" element={<RecruitmentPage />} />
          <Route path="/bibliotheque" element={<ContentPage slug="bibliotheque" group={COMM} />} />
          <Route path="/publication" element={<PublicationsPage />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}
