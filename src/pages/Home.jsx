import { useEffect } from 'react';
import HeroSlider from '../v2/HeroSlider';
import {
  AboutStrip, ServicesGrid, AiBand, Industries, Work, Clients, SolutionsTech, Reviews, ContactBand,
} from '../v2/Sections';

export default function Home() {
  useEffect(() => {
    document.title = 'NYABIX | Custom Software & AI Development Company';
  }, []);

  return (
    <main>
      <HeroSlider />
      <AboutStrip />
      <ServicesGrid />
      <AiBand />
      <Industries />
      <Work />
      <Clients />
      <SolutionsTech />
      <Reviews />
      <ContactBand />
    </main>
  );
}
