import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './v2/Header';
import FooterV2 from './v2/FooterV2';
import './components/Footer.css'; // back-to-top button styles
import ScrollManager from './components/ScrollManager';
import Home from './pages/Home';
import CaseStudyPage from './pages/CaseStudyPage';
import NotFound from './pages/NotFound';
import './styles/theme-arctic.css'; // Arctic Light colour theme (remove this line for the dark theme)

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterV2 />
    </BrowserRouter>
  );
}
