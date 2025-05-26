import React, { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const bg = "brand.golden";
  const color = "black";

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <IconButton
      aria-label="Scroll to top"
      icon={<ChevronUpIcon />}
      position="fixed"
      bottom={{ base: 4, md: 8 }}
      right={{ base: 4, md: 8 }}
      onClick={scrollToTop}
      zIndex={999}
      size="lg"
      bg={bg}
      color={color}
      _hover={{ bg: "brand.brightGreen", color: "white" }}
      boxShadow="lg"
    />
  );
};

export default ScrollToTopButton;