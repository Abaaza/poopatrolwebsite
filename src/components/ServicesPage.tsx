// src/components/ServicesPage.tsx
import React from "react";
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Button,
  extendTheme,
} from "@chakra-ui/react";

// Re-use your brand theme if you want the same colors
const theme = extendTheme({
  colors: {
    brand: {
      darkBrown: "#522a06",
      lightGreen: "#d7e5b4",
      golden: "#e5ab30",
      brightGreen: "#8bc42e",
    },
  },
});

const ServicesPage: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="white" py={10}>
        <Container maxW="7xl" textAlign="center">
          <Heading as="h1" size="2xl" mb={4} color="brand.darkBrown">
            Our Services
          </Heading>
          <Text fontSize="lg" mb={8} maxW="600px" mx="auto">
            We offer a variety of dog waste removal services to keep your yard
            spotless and odor-free.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <Box
              bg="brand.lightGreen"
              p={6}
              rounded="md"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
            >
              <Heading as="h3" size="md" mb={2} color="brand.darkBrown">
                Residential Cleanup
              </Heading>
              <Text mb={4}>
                Weekly, bi-weekly, or monthly visits to keep your home lawn
                pristine.
              </Text>
              <Button
                bg="brand.golden"
                color="black"
                _hover={{ bg: "brand.brightGreen", color: "white" }}
              >
                Learn More
              </Button>
            </Box>

            <Box
              bg="brand.lightGreen"
              p={6}
              rounded="md"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
            >
              <Heading as="h3" size="md" mb={2} color="brand.darkBrown">
                Commercial Services
              </Heading>
              <Text mb={4}>
                Ideal for HOAs, apartment complexes, and public areas with
                multiple dogs.
              </Text>
              <Button
                bg="brand.golden"
                color="black"
                _hover={{ bg: "brand.brightGreen", color: "white" }}
              >
                Learn More
              </Button>
            </Box>

            <Box
              bg="brand.lightGreen"
              p={6}
              rounded="md"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
            >
              <Heading as="h3" size="md" mb={2} color="brand.darkBrown">
                Deodorizing & Sanitizing
              </Heading>
              <Text mb={4}>
                Keep your yard smelling fresh with our pet-safe deodorizing
                products.
              </Text>
              <Button
                bg="brand.golden"
                color="black"
                _hover={{ bg: "brand.brightGreen", color: "white" }}
              >
                Learn More
              </Button>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default ServicesPage;
