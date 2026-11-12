import { useEffect } from 'react';
import Hero from '../components/Hero';
import Proof from '../components/Proof';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Engagement from '../components/Engagement';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import Leadership from '../components/Leadership';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import CtaBand from '../components/CtaBand';
import Faq from '../components/Faq';
import Contact from '../components/Contact';

export default function Home() {
  useEffect(() => {
    document.title = 'NYABIX | Custom Software & AI Development Company';
  }, []);

  return (
    <main>
      <Hero />
      <Proof />
      <Stats />
      <Services />
      <Engagement />
      <WhyUs />
      <Process />
      <Leadership />
      <CaseStudies />
      <Testimonials />
      <CtaBand />
      <Faq />
      <Contact />
    </main>
  );
}
