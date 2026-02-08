import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionBox from "./components/QuestionBox";
import Header from "./components/header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AnalyzePage from "./pages/AnalyzePage";
import ComparePage from "./pages/ComparePage";
import "./App.css";

export default function App() {

  return (
    <BrowserRouter>
    
      <Header />
      <Hero />

      <Routes>
        <Route path="/" element={<AnalyzePage />} />
        <Route path="/compare" element={<ComparePage />} />
      </Routes>
      <QuestionBox />
      <Footer />
    </BrowserRouter>
  );
}
