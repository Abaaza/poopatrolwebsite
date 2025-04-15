import React from "react";
import {
  Box,
  ChakraProvider,
  extendTheme,
  Flex,
  Text,
  Heading,
  Button,
  Image,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";

// 1) Import `Link` from React Router, then rename it to RouterLink
import { Link as RouterLink } from "react-router-dom";

// Brand theme
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

// Hover transitions
const transitionStyles = {
  transition: "all 0.3s ease",
  _hover: {
    transform: "translateY(-2px)",
    boxShadow: "xl",
  },
};

const HomePage: React.FC = () => {
  return (
    // If your entire app uses ChakraProvider at the root (e.g. in App.tsx),
    // you can remove this extra ChakraProvider wrapper
    <ChakraProvider theme={theme}>
      {/* HERO / HOME SECTION */}
      <Box
        id="home"
        as="section"
        bg="brand.lightGreen"
        py={{ base: 20, md: 32 }}
        textAlign="center"
        // Optional background image for a cleaner, modern hero
        backgroundImage="url('https://via.placeholder.com/1200x800')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        color="brand.darkBrown"
        position="relative"
      >
        {/* Overlay to dim the background image a bit */}
        <Box
          position="absolute"
          inset="0"
          bg="rgba(255,255,255,0.6)"
          zIndex={0}
        />
        <Container maxW="7xl" zIndex={1} position="relative">
          <Heading as="h1" size="2xl" mb={4}>
            LET US HANDLE THE DIRTY WORK!
          </Heading>
          <Text fontSize="xl" maxW="600px" mx="auto" mb={6}>
            We handle the mess so you can spend more time with your best friend.
          </Text>
          {/* CTA Button */}
          <Button
            as={RouterLink}
            to="/free-quote"
            bg="brand.golden"
            color="black"
            {...transitionStyles}
            _hover={{ bg: "brand.brightGreen", color: "white" }}
          >
            Get a Free Quote
          </Button>
        </Container>
      </Box>

      {/* BOOK NOW SECTION */}
      <Box
        as="section"
        py={{ base: 10, md: 20 }}
        bg="brand.brightGreen"
        color="white"
        textAlign="center"
      >
        <Container maxW="7xl">
          <Heading as="h3" size="xl" mb={4}>
            Book Your Cleanup
          </Heading>
          <Text fontSize="lg" maxW="600px" mx="auto" mb={6}>
            Ready to schedule your first appointment? Book online quickly and
            easily.
          </Text>
          <Button
            as={RouterLink}
            to="/book-now"
            bg="brand.darkBrown"
            color="white"
            {...transitionStyles}
            _hover={{
              bg: "brand.golden",
              color: "black",
            }}
          >
            Schedule a Cleanup
          </Button>
        </Container>
      </Box>

      {/* ABOUT US SECTION */}
      <Box as="section" py={{ base: 10, md: 20 }} bg="brand.lightGreen">
        <Container maxW="7xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={8}
            align="center"
            justify="center"
          >
            <Box
              flex="1"
              textAlign={{ base: "center", md: "left" }}
              order={{ base: 2, md: 1 }}
            >
              <Heading as="h3" size="lg" mb={4} color="brand.darkBrown">
                About Poo Patrol
              </Heading>
              <Text mb={4}>
                Poo Patrol was founded to make life easier for dog owners by
                offering high-quality dog waste removal. We serve countless
                communities and ensure each yard is left fresh and clean. Our
                professional team is fully trained, vetted, and passionate about
                dogs.
              </Text>
              <Button
                bg="brand.golden"
                color="black"
                {...transitionStyles}
                _hover={{
                  bg: "brand.brightGreen",
                  color: "white",
                }}
              >
                Learn More
              </Button>
            </Box>
            <Box flex="1" order={{ base: 1, md: 2 }}>
              <Image
                src="https://via.placeholder.com/600x400"
                alt="Poo Patrol Team"
                rounded="md"
                mx="auto"
                {...transitionStyles}
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* SERVICES SECTION */}
      <Box as="section" py={{ base: 10, md: 20 }} bg="white">
        <Container maxW="7xl">
          <Heading
            as="h3"
            size="xl"
            mb={10}
            textAlign="center"
            color="brand.darkBrown"
          >
            Our Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {/* Residential Cleanup */}
            <Box
              bg="brand.lightGreen"
              p={6}
              rounded="md"
              shadow="md"
              textAlign="center"
              {...transitionStyles}
            >
              <Heading as="h4" size="md" mb={2} color="brand.darkBrown">
                Residential Cleanup
              </Heading>
              <Text mb={4}>
                Keep your home yard pristine! We provide weekly or bi-weekly
                visits, as well as one-time or monthly options.
              </Text>
              <Button
                bg="brand.golden"
                color="black"
                {...transitionStyles}
                _hover={{ bg: "brand.brightGreen", color: "white" }}
              >
                Learn More
              </Button>
            </Box>

            {/* Commercial Services */}
            <Box
              bg="brand.lightGreen"
              p={6}
              rounded="md"
              shadow="md"
              textAlign="center"
              {...transitionStyles}
            >
              <Heading as="h4" size="md" mb={2} color="brand.darkBrown">
                Commercial Services
              </Heading>
              <Text mb={4}>
                Perfect for HOAs, apartment complexes, and other public spaces.
                We offer flexible schedules and custom waste management plans.
              </Text>
              <Button
                bg="brand.golden"
                color="black"
                {...transitionStyles}
                _hover={{ bg: "brand.brightGreen", color: "white" }}
              >
                Learn More
              </Button>
            </Box>

            {/* Deodorizing & Sanitizing */}
            <Box
              bg="brand.lightGreen"
              p={6}
              rounded="md"
              shadow="md"
              textAlign="center"
              {...transitionStyles}
            >
              <Heading as="h4" size="md" mb={2} color="brand.darkBrown">
                Deodorizing & Sanitizing
              </Heading>
              <Text mb={4}>
                Eliminate odors and bacteria. Our specialized treatments keep
                your yard safe, fresh, and pleasant for pets and people.
              </Text>
              <Button
                bg="brand.golden"
                color="black"
                {...transitionStyles}
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

export default HomePage;
