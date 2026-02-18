import React from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  Heading,
  Link,
  SimpleGrid,
  Icon,
  Container,
  HStack,
  VStack,
  Button,
  Divider,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="brand.darkBrown" color="white">
      {/* CTA Strip */}
      <Box
        bg="brand.golden"
        py={5}
        textAlign="center"
      >
        <Container maxW="7xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            gap={{ base: 3, md: 6 }}
          >
            <Text fontWeight="bold" color="black" fontSize={{ base: "md", md: "lg" }}>
              Ready to get started? Book your cleanup today!
            </Text>
            <Button
              as={RouterLink}
              to="/book-now"
              bg="brand.darkBrown"
              color="white"
              size="sm"
              px={6}
              rightIcon={<FaArrowRight />}
              _hover={{ bg: "black" }}
            >
              Book Now
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Main Footer */}
      <Container maxW="7xl" py={{ base: 10, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 10, md: 16 }}>
          {/* Company Info */}
          <VStack align={{ base: "center", md: "start" }} spacing={4}>
            <Heading as="h4" size="md" color="brand.golden">
              Poo Patrol Cleaning
            </Heading>
            <VStack
              align={{ base: "center", md: "start" }}
              spacing={3}
              fontSize="sm"
              color="whiteAlpha.800"
            >
              <HStack spacing={2}>
                <Icon as={FaMapMarkerAlt} w={4} h={4} color="brand.golden" />
                <Text>17646 Lassen St, Northridge, CA 91325</Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaPhone} w={4} h={4} color="brand.golden" />
                <Link href="tel:8188773304" _hover={{ color: "brand.golden" }}>
                  818-877-3304
                </Link>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaEnvelope} w={4} h={4} color="brand.golden" />
                <Link href="mailto:info@poopatrolcleaning.com" _hover={{ color: "brand.golden" }}>
                  info@poopatrolcleaning.com
                </Link>
              </HStack>
            </VStack>
            {/* Social Icons */}
            <HStack spacing={4} pt={2}>
              <Link
                href="https://www.facebook.com/people/Poopatrol/61575697444609/"
                isExternal
                rel="noopener noreferrer"
                aria-label="Facebook"
                bg="whiteAlpha.100"
                p={3}
                rounded="full"
                transition="all 0.3s ease"
                _hover={{ bg: "brand.golden", color: "black" }}
              >
                <Icon as={FaFacebook} w={5} h={5} />
              </Link>
              <Link
                href="https://www.instagram.com/poopatrols/"
                isExternal
                rel="noopener noreferrer"
                aria-label="Instagram"
                bg="whiteAlpha.100"
                p={3}
                rounded="full"
                transition="all 0.3s ease"
                _hover={{ bg: "brand.golden", color: "black" }}
              >
                <Icon as={FaInstagram} w={5} h={5} />
              </Link>
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack align={{ base: "center", md: "start" }} spacing={4}>
            <Heading as="h4" size="sm" color="brand.golden" textTransform="uppercase" letterSpacing="wider">
              Services
            </Heading>
            <VStack align={{ base: "center", md: "start" }} spacing={2}>
              {[
                { label: "Residential Cleanup", path: "/residential" },
                { label: "Commercial Services", path: "/commercial" },
                { label: "Deodorizing & Sanitizing", path: "/deodorizing" },
                { label: "All Services", path: "/services" },
              ].map((link) => (
                <Link
                  key={link.path}
                  as={RouterLink}
                  to={link.path}
                  fontSize="sm"
                  color="whiteAlpha.800"
                  _hover={{ textDecoration: "none", color: "brand.golden" }}
                  transition="all 0.2s ease"
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </VStack>

          {/* Resources */}
          <VStack align={{ base: "center", md: "start" }} spacing={4}>
            <Heading as="h4" size="sm" color="brand.golden" textTransform="uppercase" letterSpacing="wider">
              Resources
            </Heading>
            <VStack align={{ base: "center", md: "start" }} spacing={2}>
              {[
                { label: "Book Now", path: "/book-now" },
                { label: "About Us", path: "/about-us" },
                { label: "FAQ", path: "/faq" },
                { label: "Terms of Service", path: "/terms" },
              ].map((link) => (
                <Link
                  key={link.path}
                  as={RouterLink}
                  to={link.path}
                  fontSize="sm"
                  color="whiteAlpha.800"
                  _hover={{ textDecoration: "none", color: "brand.golden" }}
                  transition="all 0.2s ease"
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </VStack>
        </SimpleGrid>
      </Container>

      {/* Copyright Bar */}
      <Box borderTop="1px solid" borderColor="whiteAlpha.100" py={4}>
        <Container maxW="7xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={2}
          >
            <Text fontSize="xs" color="whiteAlpha.600" textAlign="center">
              &copy; {new Date().getFullYear()} Poo Patrol Cleaning. All rights reserved. Your #1 Dog-Waste Removal Service.
            </Text>
            <Text fontSize="xs" color="whiteAlpha.400">
              Serving Northridge & the San Fernando Valley
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
