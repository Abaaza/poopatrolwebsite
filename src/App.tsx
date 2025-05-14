// src/App.tsx
import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ReactGA from "react-ga4";
import FAQ from "./components/FAQ";
import Checkout from "./components/Checkout";

ReactGA.initialize("G-98H33R3ELB");

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <ScrollToTop />
        {/* Fixed NavBar at the top */}
        <NavBar />

        {/* Add top margin/padding equal to the NavBar’s height so content isn’t hidden underneath */}
        <Box mt={{ base: "60px", md: "75px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/free-quote" element={<FreeQuotePage />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/deodorizing" element={<Deodorizing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Box>

        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
