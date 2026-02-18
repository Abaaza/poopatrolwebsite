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
  FaCheckCircle,
  FaClipboardList,
  FaTrashAlt,
  FaUserTie,
  FaFileAlt,
  FaShieldAlt,
  FaBuilding,
  FaEnvelope,
} from "react-icons/fa";
import SEO from "./SEO";

const features = [
  {
    icon: FaClipboardList,
    title: "Customized Service Plans",
    description:
      "Weekly, bi-weekly, or custom schedules based on property size and pet traffic volume.",
  },
  {
    icon: FaTrashAlt,
    title: "Waste Station Management",
    description:
      "We clean, restock bags, and keep waste bins emptied and odor-free for your residents.",
  },
  {
    icon: FaUserTie,
    title: "Professional Technicians",
    description:
      "Discreet, uniformed scoop technicians who are always courteous, professional, and punctual.",
  },
  {
    icon: FaFileAlt,
    title: "Detailed Site Reports",
    description:
      "Stay updated on what was cleaned, what we noticed, and when we visited your property.",
  },
  {
    icon: FaShieldAlt,
    title: "Insured & Reliable",
    description:
      "Full insurance for peace of mind. We deliver a cleaner experience for tenants and guests.",
  },
  {
    icon: FaBuilding,
    title: "Multi-Property Discounts",
    description:
      "Managing multiple properties? Ask about our volume pricing for property management companies.",
  },
];

const commercialSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Pet Waste Management",
  "description": "Professional pet waste removal for HOAs, apartment complexes, parks, and businesses in the San Fernando Valley.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Poo Patrol Cleaning",
    "telephone": "+1-818-877-3304",
  },
  "areaServed": {
    "@type": "City",
    "name": "Los Angeles",
  },
  "serviceType": "Commercial Pet Waste Removal",
};

const Commercial: React.FC = () => {
  return (
    <>
      <SEO
        title="Commercial Pet Waste Removal – HOAs, Apartments & Parks"
        description="Professional commercial pet waste management for HOAs, apartment complexes, dog parks, and businesses in Los Angeles. Custom plans, waste station management, and detailed reports."
        canonical="/commercial"
        schema={commercialSchema}
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
          bg: "linear-gradient(135deg, rgba(82,42,6,0.9) 0%, rgba(82,42,6,0.85) 100%)",
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
            Commercial Pack Leader Program
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="whiteAlpha.900" maxW="650px" mx="auto">
            Professional pet waste management for HOAs, apartments, public spaces, and pet-friendly businesses.
          </Text>
        </Container>
      </Box>

      {/* Intro */}
      <Box as="section" py={{ base: 14, md: 20 }} bg="white">
        <Container maxW="4xl" textAlign="center">
          <Heading as="h2" size={{ base: "lg", md: "xl" }} color="brand.darkBrown" mb={6}>
            Your Four-Legged-Friendly Partner
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8} color="gray.700">
            Poo Patrol isn't just for backyards — we're your partner in keeping
            multi-residential and community spaces fresh, clean, and poop-free.
            Whether you manage a dog-loving apartment complex, HOA, public park,
            or pet-friendly business, we bring professional-level scooping
            service with tail-wagging results.
          </Text>
        </Container>
      </Box>

      {/* Features Grid */}
      <Box as="section" py={{ base: 14, md: 20 }} bg="brand.beige">
        <Container maxW="7xl">
          <Heading
            as="h2"
            size={{ base: "lg", md: "xl" }}
            textAlign="center"
            color="brand.darkBrown"
            mb={12}
          >
            What's Included
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
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
                  bg="orange.50"
                  rounded="xl"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Icon as={feature.icon} w={6} h={6} color="brand.golden" />
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

      {/* Ideal For */}
      <Box as="section" py={{ base: 10, md: 16 }} bg="white">
        <Container maxW="4xl" textAlign="center">
          <Heading as="h2" size="lg" color="brand.darkBrown" mb={6}>
            Ideal For
          </Heading>
          <Flex wrap="wrap" justify="center" gap={3}>
            {[
              "HOAs",
              "Apartment Complexes",
              "Dog Parks",
              "Hiking Trails",
              "Business Campuses",
              "Pet-Friendly Hotels",
              "Property Management",
              "Public Parks",
            ].map((item) => (
              <Flex
                key={item}
                align="center"
                gap={2}
                bg="green.50"
                px={4}
                py={2}
                rounded="full"
              >
                <Icon as={FaCheckCircle} color="brand.brightGreen" w={4} h={4} />
                <Text fontSize="sm" fontWeight="medium" color="brand.darkBrown">
                  {item}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Container>
      </Box>

      {/* Bonus + CTA */}
      <Box
        as="section"
        py={{ base: 14, md: 20 }}
        bg="linear-gradient(135deg, #522a06 0%, #7a4012 100%)"
        textAlign="center"
      >
        <Container maxW="4xl">
          <Text color="brand.golden" fontWeight="bold" fontSize="lg" mb={4}>
            A cleaner community means happier residents, fewer complaints, and better online reviews!
          </Text>
          <Heading as="h2" size={{ base: "lg", md: "xl" }} color="white" mb={6}>
            Ready to Partner with Poo Patrol?
          </Heading>
          <VStack spacing={4}>
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
              Get a Custom Quote
            </Button>
            <Flex align="center" gap={2} color="whiteAlpha.800">
              <Icon as={FaEnvelope} />
              <Text>info@poopatrolcleaning.com</Text>
            </Flex>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default Commercial;
