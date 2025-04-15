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
  Divider,
} from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="brand.lightGreen" color="brand.darkBrown" mt={16}>
      {/* Top divider for separation */}
      <Divider borderColor="brand.darkBrown" />

      {/* Footer container with some shadow if you want a “floating” look */}
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
            <Text>1234 Main St</Text>
            <Text>Somewhere, USA 99999</Text>
            <Text>Phone: 999-999-9999</Text>
            <Text>Email: info@poopatrol.com</Text>
          </Stack>

          {/* Right Column - Quick Links */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <Heading as="h5" size="md" mb={4}>
                Services
              </Heading>
              <Stack spacing={2}>
                <Link href="#services" _hover={{ textDecoration: "none" }}>
                  Residential
                </Link>
                <Link href="#services" _hover={{ textDecoration: "none" }}>
                  Commercial
                </Link>
              </Stack>
            </Box>
            <Box>
              <Heading as="h5" size="md" mb={4}>
                Resources
              </Heading>
              <Stack spacing={2}>
                <Link href="#faq" _hover={{ textDecoration: "none" }}>
                  FAQ
                </Link>
                <Link href="#" _hover={{ textDecoration: "none" }}>
                  Blog
                </Link>
                <Link href="#" _hover={{ textDecoration: "none" }}>
                  Careers
                </Link>
                <Link href="#" _hover={{ textDecoration: "none" }}>
                  Contact
                </Link>
              </Stack>
            </Box>
          </SimpleGrid>
        </Flex>
        <Text textAlign="center" mt={8} fontWeight="semibold">
          © 2025 Poo Patrol • Your #1 Dog Waste Removal Service.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
