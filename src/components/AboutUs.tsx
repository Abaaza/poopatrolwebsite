import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaHeart,
  FaBullseye,
  FaHandsHelping,
  FaDog,
  FaCalendarAlt,
  FaLeaf,
} from "react-icons/fa";
import SEO from "./SEO";

const values = [
  {
    icon: FaHeart,
    title: "Passion for Pets",
    description:
      "We're dog lovers first. Every scoop is done with care because we know your furry friend is family.",
  },
  {
    icon: FaHandsHelping,
    title: "Reliable Service",
    description:
      "Rain or shine, we show up on time in uniform, ready to roll. No cutting corners, no skipped scoops.",
  },
  {
    icon: FaLeaf,
    title: "Eco-Friendly",
    description:
      "Our products are pet-safe and eco-friendly. We care about your pets, your family, and the planet.",
  },
  {
    icon: FaBullseye,
    title: "Attention to Detail",
    description:
      "We don't just scoop — we inspect every inch of your yard to make sure nothing gets left behind.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us – Meet the Poo Patrol Team"
        description="Learn about Poo Patrol Cleaning, founded in 2024 in Northridge, CA. We're passionate dog lovers providing professional waste removal across the San Fernando Valley."
        canonical="/about-us"
      />

      {/* Hero Banner */}
      <Box
        bg="brand.brightGreen"
        py={{ base: 16, md: 24 }}
        textAlign="center"
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bg: "linear-gradient(135deg, rgba(139,196,46,0.9) 0%, rgba(74,151,32,0.95) 100%)",
          zIndex: 0,
        }}
      >
        <Container maxW="5xl" position="relative" zIndex={1}>
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            color="white"
            mb={4}
            textShadow="0 2px 4px rgba(0,0,0,0.2)"
          >
            Who We Are
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="whiteAlpha.900" maxW="600px" mx="auto">
            The Doo Crew at your service — passionate, professional, and ready to scoop!
          </Text>
        </Container>
      </Box>

      {/* Our Story */}
      <Box as="section" py={{ base: 14, md: 20 }} bg="white">
        <Container maxW="4xl">
          <VStack spacing={6} textAlign="center">
            <Flex align="center" gap={3}>
              <Icon as={FaCalendarAlt} color="brand.golden" w={6} h={6} />
              <Text fontWeight="bold" color="brand.golden" fontSize="lg">
                Founded January 2024
              </Text>
            </Flex>
            <Heading as="h2" size={{ base: "lg", md: "xl" }} color="brand.darkBrown">
              Our Story
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8} color="gray.700">
              At Poo Patrol, we take our job seriously. We're the cleanup crew on a mission
              to rescue your lawn from those stinky little landmines your furry
              best friend leaves behind. We started with one simple goal:{" "}
              <strong>make life easier for pet parents and cleaner for their paws.</strong>
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8} color="gray.700">
              We saw a need in our Northridge community and decided to do something about
              it — one scoop at a time. Now, we proudly serve neighborhoods across the
              San Fernando Valley with love, professionalism, and a zero-tolerance policy for dog doo.
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8} color="gray.700">
              We're not just scoopers — we're cleanup experts and your dog's #1 backup
              for #2. Whether it's a quick pickup or a weekly raid, we roll in with gloves on,
              bags ready, and a passion for cleanliness.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Our Values */}
      <Box as="section" py={{ base: 14, md: 20 }} bg="brand.beige">
        <Container maxW="6xl">
          <Heading
            as="h2"
            size={{ base: "lg", md: "xl" }}
            textAlign="center"
            color="brand.darkBrown"
            mb={12}
          >
            What Drives Us
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {values.map((value) => (
              <Flex
                key={value.title}
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
                  w={14}
                  h={14}
                  bg="green.50"
                  rounded="xl"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Icon as={value.icon} w={7} h={7} color="brand.brightGreen" />
                </Flex>
                <Box>
                  <Heading as="h3" size="md" color="brand.darkBrown" mb={2}>
                    {value.title}
                  </Heading>
                  <Text color="gray.600" lineHeight={1.7}>
                    {value.description}
                  </Text>
                </Box>
              </Flex>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Vision */}
      <Box as="section" py={{ base: 14, md: 20 }} bg="white">
        <Container maxW="4xl" textAlign="center">
          <Icon as={FaDog} w={10} h={10} color="brand.golden" mb={4} />
          <Heading as="h2" size={{ base: "lg", md: "xl" }} color="brand.darkBrown" mb={6}>
            Our Vision
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8} color="gray.700" mb={8}>
            To create a world where every yard is clean, every dog is happy, and
            every human can walk barefoot without fear. We dream of poop-free parks,
            fresh-smelling lawns, and a life where pet owners can focus on belly
            rubs, not backyard duty.
          </Text>
          <Button
            as={RouterLink}
            to="/book-now"
            bg="brand.brightGreen"
            color="white"
            size="lg"
            px={10}
            transition="all 0.3s ease"
            _hover={{ bg: "brand.darkGreen", transform: "translateY(-2px)" }}
          >
            Join Our Happy Customers
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
