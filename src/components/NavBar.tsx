// src/components/NavBar.tsx
import React from "react";
import {
  Box,
  Flex,
  IconButton,
  HStack,
  Link as ChakraLink,
  Image,
  useDisclosure,
  useBreakpointValue,
  VStack,
  Button,
  Text,
  Divider,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { isValidMotionProp, motion } from "framer-motion";
import logo from "../assets/logopoopatrol.jpg";

// Setup chakra-wrapped motion components with proper prop forwarding
const MotionChakraLink = chakra(motion(ChakraLink), {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const MotionChakraButton = chakra(motion(Button), {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const NavBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Book Now", path: "/book-now" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about-us" },
    { label: "Terms", path: "/terms" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <Box
      as="header"
      bg="brand.lightGreen"
      color="brand.darkBrown"
      boxShadow="lg"
      position="fixed"
      top={0}
      w="100%"
      zIndex={1000}
      h={{ base: "80px", md: "100px" }}
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="7xl"
        mx="auto"
        py={2}
        px={4}
        h="100%"
      >
        {/* Logo */}
        <Image
          src={logo}
          alt="Poo Patrol Logo"
          w={isMobile ? "120px" : "150px"}
          h="auto"
          cursor="pointer"
          onClick={() => (window.location.href = "/")}
        />

        {/* Mobile Hamburger Icon */}
        {isMobile && (
          <HStack>
            <IconButton
              icon={isOpen ? <FaTimes /> : <FaBars />}
              aria-label="Toggle Menu"
              variant="ghost"
              onClick={isOpen ? onClose : onOpen}
              transition="all 0.3s ease"
              _hover={{ bg: "brand.golden" }}
            />
          </HStack>
        )}

        {/* Desktop Nav Links */}
        {!isMobile && (
          <HStack as="nav" spacing={8} align="center">
            {navItems.map((item) => (
              <MotionChakraLink
                key={item.path}
                as={RouterLink}
                to={item.path}
                fontWeight="semibold"
                transition="color 0.3s ease"
                color={location.pathname === item.path ? "brand.golden" : undefined}
                whileHover={{ scale: 1.1 }}
                _hover={{ textDecoration: "none", color: "brand.golden" }}
              >
                {item.label}
              </MotionChakraLink>
            ))}
          </HStack>
        )}
      </Flex>

      {/* Mobile Drawer */}
      {isMobile && isOpen && (
        <Box bg="white" shadow="md" px={4} py={2}>
          <VStack align="start" spacing={4}>
            {navItems.map((item) => (
              <MotionChakraButton
                key={item.path}
                as={RouterLink}
                to={item.path}
                variant="ghost"
                w="full"
                justifyContent="flex-start"
                fontWeight="bold"
                color="brand.darkBrown"
                _hover={{ bg: "brand.golden", color: "black" }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
              >
                {item.label}
              </MotionChakraButton>
            ))}
          </VStack>
        </Box>
      )}
      <Divider borderColor="brand.darkBrown" />
    </Box>
  );
};

export default NavBar;
