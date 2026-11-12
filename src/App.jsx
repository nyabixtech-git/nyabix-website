import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import Home from './pages/Home';
import CaseStudyPage from './pages/CaseStudyPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter basename="/nyabix-website">
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
