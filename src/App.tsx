// src/App.tsx
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
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

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/free-quote" element={<FreeQuotePage />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
