import NavBar from './components/NavBar';
import Hero from './components/Hero';
import LaunchIntro from './components/LaunchIntro';
import ContentSplitPage from './components/ContentSplitPage';
import SectionImage from './components/SectionImage';
import FeatureCards from './components/FeatureCards';
import LayeredSection from './components/LayeredSection';
import CommunitySection from './components/CommunitySection';
import ProfessionalsSection from './components/ProfessionalsSection';

import productBanner from './assets/third.png';
import clinicalBase from './assets/fourth/Component.png';
import clinicalOverlay from './assets/fourth/componenttext.png';
import ingredientsSection from './assets/fourth/componenttext1.png';
import testimonialsSection from './assets/fourth/comptext2.png';
import journeySection from './assets/n1.png';
import revolutionSection from './assets/n2.png';
import footerSection from './assets/n3.png';

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <LaunchIntro />
        <SectionImage src={productBanner} alt="Hydra Curls product lineup" id="collection" />
        <ContentSplitPage />
        <FeatureCards />
        <LayeredSection
          id="clinical"
          base={clinicalBase}
          overlay={clinicalOverlay}
          alt="Clinically proven 48-hour hydration results"
        />
        <SectionImage src={ingredientsSection} alt="Powered by nature's best ingredients" id="ingredients" />
        <SectionImage src={testimonialsSection} alt="Customer testimonials" id="reviews" />
        <CommunitySection />
        <ProfessionalsSection />
        <SectionImage src={journeySection} alt="Your daily hair routine checklist" id="journey" />
        <SectionImage src={revolutionSection} alt="Join the curly hair revolution" id="newsletter" />
        <SectionImage src={footerSection} alt="Footer" id="contact" />
      </main>
    </>
  );
}
