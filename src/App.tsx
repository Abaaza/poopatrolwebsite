// src/App.tsx
import React, { Suspense, lazy, useEffect, useState } from "react";
import { ChakraProvider, Box, Spinner, Center } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import customTheme from "./components/theme";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ReactGA from "react-ga4";

import PageWrapper from "./components/PageWrapper";
import LoadingOverlay from "./components/LoadingOverlay";

const HomePage = lazy(() => import("./components/HomePage"));
const ServicesPage = lazy(() => import("./components/ServicesPage"));
const FreeQuotePage = lazy(() => import("./components/FreeQuotePage"));
const BookNow = lazy(() => import("./components/BookNow"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Terms = lazy(() => import("./components/Terms"));
const Residential = lazy(() => import("./components/Residential"));
const Commercial = lazy(() => import("./components/Commercial"));
const Deodorizing = lazy(() => import("./components/Deodorizing"));
const FAQ = lazy(() => import("./components/FAQ"));
const Checkout = lazy(() => import("./components/Checkout"));

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
            <Suspense
            fallback={
              <Center py={10}>
                <Spinner size="xl" thickness="4px" color="brand.brightGreen" />
              </Center>
            }
          >
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
          </Suspense>

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
