// src/components/Footer.tsx
import React from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  Heading,
  Link,
  SimpleGrid,
  Icon,          // ← add this
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="brand.lightGreen" color="brand.darkBrown">
      <Box py={8} boxShadow="inner">
        <Flex
          direction={{ base: "column", md: "row" }}
          maxW="7xl"
          mx="auto"
          px={4}
          justify="space-between"
        >
          {/* Left Column */}
          <Stack mb={{ base: 6, md: 0 }} spacing={3}>
            <Heading as="h5" size="md">
              Poo Patrol
            </Heading>
            <Text>17646&nbsp;Lassen&nbsp;st.</Text>
            <Text>Northridge, CA 91325</Text>
            <Text>Phone: 818-877-3304</Text>
            <Text>Email: info@poopatrolcleaning.com</Text>
          </Stack>

          {/* Right Column */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <Heading as="h5" size="md" mb={4}>
                Services
              </Heading>
              <Stack spacing={2}>
                <Link href="/residential" _hover={{ textDecoration: "none" }}>
                  Residential
                </Link>
                <Link href="/commercial" _hover={{ textDecoration: "none" }}>
                  Commercial
                </Link>
                <Link href="/deodorizing" _hover={{ textDecoration: "none" }}>
                  Deodorizing
                </Link>
              </Stack>
            </Box>
            <Box>
              <Heading as="h5" size="md" mb={4}>
                Resources
              </Heading>
              <Stack spacing={2}>
                <Link href="/book-now" _hover={{ textDecoration: "none" }}>
                  Book Now
                </Link>
                <Link href="/free-quote" _hover={{ textDecoration: "none" }}>
                  Free Quote
                </Link>
                <Link href="/services" _hover={{ textDecoration: "none" }}>
                  Services
                </Link>
                <Link href="/about-us" _hover={{ textDecoration: "none" }}>
                  About Us
                </Link>
              </Stack>
            </Box>
          </SimpleGrid>
        </Flex>

        {/* Social icons */}
        <Stack direction="row" spacing={4} justify="center" mt={6}>
          <Link
            href="https://www.facebook.com/people/Poopatrol/61575697444609/"
            isExternal
            aria-label="Facebook"
          >
            <Icon as={FaFacebook} w={6} h={6} />
          </Link>
          <Link
            href="https://www.instagram.com/poopatrols/?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
            isExternal
            aria-label="Instagram"
          >
            <Icon as={FaInstagram} w={6} h={6} />
          </Link>
        </Stack>

        {/* Copyright */}
        <Text textAlign="center" mt={8} fontWeight="semibold">
          © 2025 Poo Patrol • Your #1 Dog-Waste Removal Service.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
