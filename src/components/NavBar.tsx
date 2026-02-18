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
  Icon,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import logo from "../assets/logopoopatrol.jpg";

const NavBar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about-us" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <Box
      as="header"
      bg="white"
      color="brand.darkBrown"
      boxShadow="0 2px 20px rgba(0,0,0,0.08)"
      position="fixed"
      top={0}
      w="100%"
      zIndex={1000}
      h={{ base: "80px", md: "100px" }}
      backdropFilter="blur(10px)"
      backgroundColor="rgba(255,255,255,0.97)"
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
        <ChakraLink as={RouterLink} to="/" _hover={{ opacity: 0.85 }}>
          <Image
            src={logo}
            alt="Poo Patrol Cleaning Logo"
            w={isMobile ? "120px" : "150px"}
            h="auto"
          />
        </ChakraLink>

        {/* Mobile Hamburger Icon */}
        {isMobile && (
          <HStack spacing={3}>
            <IconButton
              as="a"
              href="tel:8188773304"
              icon={<FaPhone />}
              aria-label="Call us"
              variant="ghost"
              color="brand.brightGreen"
              fontSize="lg"
            />
            <IconButton
              icon={isOpen ? <FaTimes /> : <FaBars />}
              aria-label="Toggle Menu"
              variant="ghost"
              onClick={isOpen ? onClose : onOpen}
              transition="all 0.3s ease"
              _hover={{ bg: "green.50" }}
            />
          </HStack>
        )}

        {/* Desktop Nav Links */}
        {!isMobile && (
          <HStack as="nav" spacing={8} align="center">
            {navItems.map((item) => (
              <ChakraLink
                key={item.path}
                as={RouterLink}
                to={item.path}
                fontWeight="600"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="0.5px"
                transition="all 0.3s ease"
                color={
                  location.pathname === item.path
                    ? "brand.brightGreen"
                    : "brand.darkBrown"
                }
                borderBottom="2px solid"
                borderColor={
                  location.pathname === item.path
                    ? "brand.brightGreen"
                    : "transparent"
                }
                pb={1}
                _hover={{
                  textDecoration: "none",
                  color: "brand.brightGreen",
                  borderColor: "brand.brightGreen",
                }}
              >
                {item.label}
              </ChakraLink>
            ))}

            {/* Phone Number */}
            <HStack
              as="a"
              href="tel:8188773304"
              spacing={2}
              color="brand.darkBrown"
              _hover={{ color: "brand.brightGreen" }}
              transition="all 0.3s ease"
            >
              <Icon as={FaPhone} w={3} h={3} />
              <Text fontWeight="600" fontSize="sm">
                818-877-3304
              </Text>
            </HStack>

            {/* Book Now CTA */}
            <Button
              as={RouterLink}
              to="/book-now"
              bg="brand.brightGreen"
              color="white"
              size="md"
              fontWeight="bold"
              px={6}
              transition="all 0.3s ease"
              _hover={{
                bg: "brand.darkGreen",
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Book Now
            </Button>
          </HStack>
        )}
      </Flex>

      {/* Mobile Drawer */}
      {isMobile && isOpen && (
        <Box
          bg="white"
          shadow="xl"
          px={4}
          py={4}
          borderTop="1px solid"
          borderColor="gray.100"
        >
          <VStack align="stretch" spacing={1}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                as={RouterLink}
                to={item.path}
                variant="ghost"
                w="full"
                justifyContent="flex-start"
                fontWeight="600"
                fontSize="md"
                color={
                  location.pathname === item.path
                    ? "brand.brightGreen"
                    : "brand.darkBrown"
                }
                bg={
                  location.pathname === item.path
                    ? "green.50"
                    : "transparent"
                }
                rounded="lg"
                py={6}
                _hover={{ bg: "green.50", color: "brand.brightGreen" }}
                onClick={onClose}
              >
                {item.label}
              </Button>
            ))}
            <Divider my={2} />
            <Button
              as={RouterLink}
              to="/book-now"
              bg="brand.brightGreen"
              color="white"
              size="lg"
              w="full"
              fontWeight="bold"
              _hover={{ bg: "brand.darkGreen" }}
              onClick={onClose}
            >
              Book Now — Free Quote
            </Button>
            <Button
              as="a"
              href="tel:8188773304"
              variant="outline"
              borderColor="brand.brightGreen"
              color="brand.brightGreen"
              size="lg"
              w="full"
              leftIcon={<FaPhone />}
              onClick={onClose}
            >
              Call 818-877-3304
            </Button>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
