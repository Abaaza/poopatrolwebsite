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
  Divider,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logopoopatrol.jpg";

const NavBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Free Quote", path: "/free-quote" },
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
      // Give the NavBar a fixed height
      h={{ base: "80px", md: "100px" }}
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="7xl"
        mx="auto"
        py={2}
        px={4}
        // Ensure the content fits within the fixed height
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

        {isMobile && (
          <IconButton
            icon={isOpen ? <FaTimes /> : <FaBars />}
            aria-label="Toggle Menu"
            variant="ghost"
            onClick={isOpen ? onClose : onOpen}
            transition="all 0.3s ease"
            _hover={{ bg: "brand.golden" }}
          />
        )}

        {/* Desktop Menu */}
        {!isMobile && (
          <HStack as="nav" spacing={8}>
            {navItems.map((item) => (
              <ChakraLink
                key={item.path}
                as={RouterLink}
                to={item.path}
                fontWeight="semibold"
                transition="color 0.3s ease"
                _hover={{ textDecoration: "none", color: "brand.golden" }}
              >
                {item.label}
              </ChakraLink>
            ))}
          </HStack>
        )}
      </Flex>

      {/* Mobile Menu (collapsible) */}
      {isMobile && isOpen && (
        <Box bg="white" shadow="md" px={4} py={2}>
          <VStack align="start" spacing={4}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                as={RouterLink}
                to={item.path}
                variant="ghost"
                w="full"
                justifyContent="flex-start"
                fontWeight="bold"
                color="brand.darkBrown"
                _hover={{ bg: "brand.golden", color: "black" }}
                onClick={onClose}
              >
                {item.label}
              </Button>
            ))}
          </VStack>
        </Box>
      )}
      <Divider borderColor="brand.darkBrown" />
    </Box>
  );
};

export default NavBar;
