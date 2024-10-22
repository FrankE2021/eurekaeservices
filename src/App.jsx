import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaymentPage from "./pages/PaymentPage"; // Nueva página independiente

// Componente que renderiza todo el contenido de la página principal
const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <main className="overflow-hidden">
        <Routes>
          {/* Ruta principal que carga el contenido de toda la página */}
          <Route path="/" element={<MainPage />} />

          {/* Ruta independiente para la página de pago */}
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
