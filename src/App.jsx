import { Routes, Route, Router } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import DigitalClock from "./components/DigitalClock";
import EditPrintLabels from "./pages/EditPrintLabels";
import UrlManager from "./pages/UrlManager";
import PricingPage from "./pages/PricingPage";
import Hiring from "./pages/Hiring";
import HiringDetail from "./pages/HiringDetail";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import QuizPage from "./components/QuizPage";
import CVPage from "./pages/CVpage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/hiring/:jobId" element={<HiringDetail />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/resume" element={<CVPage />} />
      </Route>
      <Route path="/clock" element={<DigitalClock />} />
      <Route path="/labels" element={<EditPrintLabels />} />
      <Route path="/urls" element={<UrlManager />} />
    </Routes>
  );
};

export default App;
