import React from "react";
import { Box, Icon, Link } from "@chakra-ui/react";
import { keyframes as emotionKeyframes } from "@emotion/react";
import { FaPhone } from "react-icons/fa";

const pulse = emotionKeyframes`
  0% { box-shadow: 0 0 0 0 rgba(139, 196, 46, 0.5); }
  70% { box-shadow: 0 0 0 15px rgba(139, 196, 46, 0); }
  100% { box-shadow: 0 0 0 0 rgba(139, 196, 46, 0); }
`;

const FloatingContact: React.FC = () => {
  return (
    <Link
      href="tel:8188773304"
      position="fixed"
      bottom={{ base: "20px", md: "30px" }}
      right={{ base: "20px", md: "30px" }}
      zIndex={999}
      bg="brand.brightGreen"
      w={{ base: "56px", md: "64px" }}
      h={{ base: "56px", md: "64px" }}
      rounded="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      shadow="xl"
      transition="all 0.3s ease"
      css={{ animation: `${pulse} 2s infinite` }}
      _hover={{
        bg: "brand.darkGreen",
        transform: "scale(1.1)",
      }}
      aria-label="Call Poo Patrol at 818-877-3304"
    >
      <Icon as={FaPhone} w={6} h={6} color="white" />
    </Link>
  );
};

export default FloatingContact;
