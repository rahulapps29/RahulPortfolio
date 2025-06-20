import { Routes, Route } from "react-router-dom";

/* — Components / pages already in your project — */
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import PricingPage from "./pages/PricingPage";
import Hiring from "./pages/Hiring";
import HiringDetail from "./pages/HiringDetail";
import QuizPage from "./components/QuizPage";
import CVPage from "./pages/CVpage";
import CVPage1 from "./pages/CVpage1";
import Biodata from "./pages/Biodata";
import WhatsAppMessagePage from "./pages/WhatsAppMessagePage";
import EditPrintLabels from "./pages/EditPrintLabels";
import UrlManager from "./pages/UrlManager";
import DigitalClock from "./components/DigitalClock";
import UploadPage from "./gallery/UploadPage";

/* — Gallery imports — */
import GalleryLayout from "./gallery/GalleryLayout";
import AllGallery from "./gallery/AllGallery";
import CategoryGallery from "./gallery/CategoryGallery";

const App = () => (
  <Routes>
    {/* ───────── Main site (with shared Layout) ───────── */}
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="skills" element={<Skills />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="biodata" element={<Biodata />} />
      <Route path="pricing" element={<PricingPage />} />
      <Route path="hiring" element={<Hiring />} />
      <Route path="hiring/:jobId" element={<HiringDetail />} />
      <Route path="quiz" element={<QuizPage />} />
      <Route path="resume" element={<CVPage />} />
      <Route path="resume1" element={<CVPage1 />} />
      <Route path="whatsapp" element={<WhatsAppMessagePage />} />
      <Route path="upload" element={<UploadPage />} />
    </Route>
    {/* ───────── Dedicated Gallery section ───────── */}
    <Route path="/gallery" element={<GalleryLayout />}>
      <Route index element={<AllGallery />} /> {/* /gallery */}
      <Route path=":category" element={<CategoryGallery />} />{" "}
      <Route path="all" element={<AllGallery />} /> {/* /gallery/me etc */}
    </Route>
    {/* ───────── Stand-alone utility pages ───────── */}
    <Route path="/clock" element={<DigitalClock />} />
    <Route path="/labels" element={<EditPrintLabels />} />
    <Route path="/urls" element={<UrlManager />} />
    <Route path="/bio" element={<Biodata />} /> {/* alt alias */}
  </Routes>
);

export default App;
