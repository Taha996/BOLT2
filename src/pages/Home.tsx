import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import MissionSection from '../components/MissionSection';
import ActivitiesSection from '../components/ActivitiesSection';
import NewsSection from '../components/NewsSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import PublicationsSection from '../components/PublicationsSection';
import ObservatorySection from '../components/ObservatorySection';
import PartnersSection from '../components/PartnersSection';
import ELearningSection from '../components/ELearningSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <StatsSection />
      <MissionSection />
      <ActivitiesSection />
      <NewsSection />
      <SuccessStoriesSection />
      <ObservatorySection />
      <PublicationsSection />
      <PartnersSection />
      <ELearningSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
