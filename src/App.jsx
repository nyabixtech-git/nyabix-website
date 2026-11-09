import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Proof from './components/Proof';
import Stats from './components/Stats';
import Services from './components/Services';
import Engagement from './components/Engagement';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Leadership from './components/Leadership';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import CtaBand from './components/CtaBand';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
