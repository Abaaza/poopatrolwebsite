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
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // <-- import Link from react-router
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logopoopatrol.jpg";

const NavBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Now each nav item has a "path" to a route
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Free Quote", path: "/free-quote" },
    { label: "Book Now", path: "/book-now" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about-us" },
    { label: "Terms", path: "/terms" },
  ];

  return (
    <Box
      as="header"
      bg="#d7e5b4"
      color="#522a06"
      p={4}
      position="fixed"
      top={0}
      w="100%"
      zIndex={1000}
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="7xl"
        mx="auto"
        position="relative"
      >
        {/* Logo click -> go to homepage */}
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
            aria-label="Open Menu"
            variant="ghost"
            color="white"
            onClick={isOpen ? onClose : onOpen}
          />
        )}

        {/* Desktop Menu */}
        {!isMobile && (
          <HStack spacing={8}>
            {navItems.map((item) => (
              <ChakraLink
                key={item.path}
                as={RouterLink}
                to={item.path}
                _hover={{ textDecoration: "none", color: "brand.golden" }}
                fontWeight="bold"
              >
                {item.label}
              </ChakraLink>
            ))}
          </HStack>
        )}
      </Flex>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <Box bg="#fff" mt={4} px={4} py={2} rounded="md">
          <VStack align="start" spacing={4}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                as={RouterLink}
                to={item.path}
                variant="ghost"
                w="full"
                justifyContent="flex-start"
                _hover={{ bg: "brand.golden", color: "black" }}
                onClick={onClose}
              >
                {item.label}
              </Button>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
