import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Flex,
  Button,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaCheckCircle,
  FaLeaf,
  FaBacterium,
  FaDog,
  FaCalendarCheck,
  FaSprayCan,
} from "react-icons/fa";
import SEO from "./SEO";

const features = [
  {
    icon: FaLeaf,
    title: "Pet-Safe, Eco-Friendly Formula",
    description: "Gentle for paws, tough on stink. Our formula is safe for pets, kids, and the environment.",
  },
  {
    icon: FaBacterium,
    title: "Kills Bacteria & Neutralizes Odors",
    description: "Targets the root cause of the smell — doesn't just cover it up with fragrance.",
  },
  {
    icon: FaDog,
    title: "Great for High-Traffic Areas",
    description: "Patios, decks, artificial turf, and kennel zones get an instant refresh.",
  },
  {
    icon: FaCalendarCheck,
    title: "Ideal After Cleanups or Events",
    description: "Especially handy for parties, rentals, seasonal refreshes, or move-outs.",
  },
];

const deodorizingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Yard Deodorizing & Sanitizing",
  "description": "Eco-friendly yard deodorizing and sanitizing treatment that eliminates pet odors and bacteria. Available as an add-on to any cleanup plan.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Poo Patrol Cleaning",
    "telephone": "+1-818-877-3304",
  },
  "areaServed": {
    "@type": "City",
    "name": "Northridge",
  },
  "serviceType": "Yard Deodorizing and Sanitizing",
};

const Deodorizing: React.FC = () => {
  return (
    <>
      <SEO
        title="Yard Deodorizing & Sanitizing – Eco-Friendly Odor Control"
        description="Eliminate pet odors and bacteria with Poo Patrol's eco-friendly deodorizing and sanitizing treatment. Pet-safe formula for patios, decks, turf, and kennels in the San Fernando Valley."
        canonical="/deodorizing"
        schema={deodorizingSchema}
      />

      {/* Hero Banner */}
      <Box
        py={{ base: 16, md: 24 }}
        textAlign="center"
        position="relative"
        bg="brand.brightGreen"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bg: "linear-gradient(135deg, rgba(139,196,46,0.9) 0%, rgba(74,151,32,0.95) 100%)",
          zIndex: 0,
        }}
      >
        <Container maxW="5xl" position="relative" zIndex={1}>
          <Icon as={FaSprayCan} w={12} h={12} color="white" mb={4} />
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            color="white"
            mb={4}
            textShadow="0 2px 4px rgba(0,0,0,0.2)"
          >
            Deodorizing & Sanitizing
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="whiteAlpha.900" maxW="600px" mx="auto">
            A tail-wagging upgrade to your cleanup — leaves your yard smelling fresh and feeling clean.
          </Text>
        </Container>
      </Box>

      {/* Intro */}
      <Box as="section" py={{ base: 14, md: 20 }} bg="white">
        <Container maxW="4xl" textAlign="center">
          <Heading as="h2" size={{ base: "lg", md: "xl" }} color="brand.darkBrown" mb={6}>
            Even After the Poop's Gone...
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8} color="gray.700">
            The smell might stick around. That's where our Deodorizing & Sanitizing
            Spritz comes in — an eco-friendly upgrade to your cleanup routine that
            targets what causes the smell, not just covers it up. Safe for pets,
            kids, and the planet.
          </Text>
        </Container>
      </Box>

      {/* Features Grid */}
      <Box as="section" py={{ base: 14, md: 20 }} bg="brand.beige">
        <Container maxW="6xl">
          <Heading
            as="h2"
            size={{ base: "lg", md: "xl" }}
            textAlign="center"
            color="brand.darkBrown"
            mb={12}
          >
            How It Works
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {features.map((feature) => (
              <Flex
                key={feature.title}
                bg="white"
                p={6}
                rounded="xl"
                shadow="md"
                gap={4}
                align="start"
                transition="all 0.3s ease"
                _hover={{ transform: "translateY(-4px)", shadow: "xl" }}
              >
                <Flex
                  w={12}
                  h={12}
                  bg="green.50"
                  rounded="xl"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Icon as={feature.icon} w={6} h={6} color="brand.brightGreen" />
                </Flex>
                <Box>
                  <Heading as="h3" size="sm" color="brand.darkBrown" mb={2}>
                    {feature.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" lineHeight={1.7}>
                    {feature.description}
                  </Text>
                </Box>
              </Flex>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Pro Tip + CTA */}
      <Box
        as="section"
        py={{ base: 14, md: 20 }}
        bg="linear-gradient(135deg, #8bc42e 0%, #4a9720 100%)"
        textAlign="center"
      >
        <Container maxW="4xl">
          <Text color="whiteAlpha.900" fontSize={{ base: "md", md: "lg" }} mb={4} fontStyle="italic">
            Pro Tip: Combine this with your regular poop-scooping schedule to
            keep your yard the envy of the entire neighborhood.
          </Text>
          <Heading as="h2" size={{ base: "lg", md: "xl" }} color="white" mb={6}>
            Add Deodorizing to Your Plan
          </Heading>
          <Button
            as={RouterLink}
            to="/book-now"
            bg="brand.golden"
            color="black"
            size="lg"
            px={10}
            transition="all 0.3s ease"
            _hover={{ bg: "white", color: "brand.darkBrown", transform: "translateY(-2px)" }}
          >
            Get a Free Quote
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Deodorizing;
