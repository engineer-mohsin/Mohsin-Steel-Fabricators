// Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Clients from "../pages/Clients";
import About from "../pages/About";
import Services from "../pages/Services";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";


// Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <WhatsAppButton/>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
