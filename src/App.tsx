import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

// Import your new pages
import ServicesPage from "./components/ServicesPage";
import Terms from "./components/Terms";
import FreeQuotePage from "./components/FreeQuotePage";
import BookNow from "./components/BookNow";
import AboutUs from "./components/AboutUs";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />

      <Flex
        direction="column"
        minHeight="100vh"
        pt={{ base: "40px", md: "120px" }}
      >
        <Box flex="1">
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* New routes */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/free-quote" element={<FreeQuotePage />} />

            <Route path="*" element={<p>Page not found</p>} />
          </Routes>
        </Box>

        <Footer />
      </Flex>
    </Router>
  );
};

export default App;
