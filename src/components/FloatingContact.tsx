import React, { useState } from "react";
import { Box, Icon, Link, VStack } from "@chakra-ui/react";
import { keyframes as emotionKeyframes } from "@emotion/react";
import { FaPhone, FaWhatsapp, FaTimes, FaCommentDots } from "react-icons/fa";

const pulse = emotionKeyframes`
  0% { box-shadow: 0 0 0 0 rgba(139, 196, 46, 0.5); }
  70% { box-shadow: 0 0 0 15px rgba(139, 196, 46, 0); }
  100% { box-shadow: 0 0 0 0 rgba(139, 196, 46, 0); }
`;

const PHONE_NUMBER = "8188773304";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'm interested in Poo Patrol's dog waste removal service. Can I get a free quote?"
);
const WHATSAPP_URL = `https://wa.me/1${PHONE_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      position="fixed"
      bottom={{ base: "20px", md: "30px" }}
      right={{ base: "20px", md: "30px" }}
      zIndex={999}
    >
      {/* Action buttons */}
      <VStack
        spacing={3}
        mb={3}
        opacity={isOpen ? 1 : 0}
        transform={isOpen ? "translateY(0)" : "translateY(10px)"}
        pointerEvents={isOpen ? "auto" : "none"}
        transition="all 0.25s ease"
      >
        {/* WhatsApp */}
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          bg="#25D366"
          w={{ base: "48px", md: "54px" }}
          h={{ base: "48px", md: "54px" }}
          rounded="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          shadow="lg"
          transition="all 0.2s ease"
          _hover={{ transform: "scale(1.1)", shadow: "xl" }}
          aria-label="Message Poo Patrol on WhatsApp"
        >
          <Icon as={FaWhatsapp} w={6} h={6} color="white" />
        </Link>

        {/* Phone */}
        <Link
          href={`tel:${PHONE_NUMBER}`}
          bg="brand.brightGreen"
          w={{ base: "48px", md: "54px" }}
          h={{ base: "48px", md: "54px" }}
          rounded="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          shadow="lg"
          transition="all 0.2s ease"
          _hover={{ transform: "scale(1.1)", shadow: "xl" }}
          aria-label="Call Poo Patrol at 818-877-3304"
        >
          <Icon as={FaPhone} w={5} h={5} color="white" />
        </Link>
      </VStack>

      {/* Main toggle button */}
      <Box
        as="button"
        onClick={() => setIsOpen(!isOpen)}
        bg={isOpen ? "gray.600" : "brand.brightGreen"}
        w={{ base: "56px", md: "64px" }}
        h={{ base: "56px", md: "64px" }}
        rounded="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        shadow="xl"
        transition="all 0.3s ease"
        css={!isOpen ? { animation: `${pulse} 2s infinite` } : undefined}
        _hover={{
          bg: isOpen ? "gray.700" : "brand.darkGreen",
          transform: "scale(1.1)",
        }}
        aria-label={isOpen ? "Close contact options" : "Contact Poo Patrol"}
      >
        <Icon
          as={isOpen ? FaTimes : FaCommentDots}
          w={6}
          h={6}
          color="white"
          transition="transform 0.3s ease"
          transform={isOpen ? "rotate(90deg)" : "rotate(0)"}
        />
      </Box>
    </Box>
  );
};

export default FloatingContact;
