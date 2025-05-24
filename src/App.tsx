// src/App.tsx
import React, { useEffect, useState } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import customTheme from "./components/theme";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import FreeQuotePage from "./components/FreeQuotePage";
import BookNow from "./components/BookNow";
import AboutUs from "./components/AboutUs";
import Terms from "./components/Terms";
import Residential from "./components/Residential";
import Commercial from "./components/Commercial";
import Deodorizing from "./components/Deodorizing";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ReactGA from "react-ga4";
import FAQ from "./components/FAQ";
import Checkout from "./components/Checkout";
import PageWrapper from "./components/PageWrapper";
import LoadingOverlay from "./components/LoadingOverlay";

ReactGA.initialize("G-98H33R3ELB");

function RouterContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
      <NavBar />
      <Box mt={{ base: "60px", md: "75px" }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
            <Route path="/free-quote" element={<PageWrapper><FreeQuotePage /></PageWrapper>} />
            <Route path="/book-now" element={<PageWrapper><BookNow /></PageWrapper>} />
            <Route path="/about-us" element={<PageWrapper><AboutUs /></PageWrapper>} />
            <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
            <Route path="/residential" element={<PageWrapper><Residential /></PageWrapper>} />
            <Route path="/commercial" element={<PageWrapper><Commercial /></PageWrapper>} />
            <Route path="/deodorizing" element={<PageWrapper><Deodorizing /></PageWrapper>} />
            <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
            <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </Box>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <ScrollToTop />
        <RouterContent />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
