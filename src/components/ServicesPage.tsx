import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Button,
  Icon,
  VStack,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaHome, FaBuilding, FaSprayCan, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import SEO from "./SEO";

const services = [
  {
    icon: FaHome,
    title: "Residential Cleanup",
    description:
      "Keep your home yard pristine with our flexible scheduling options. Weekly, bi-weekly, one-time, or monthly visits tailored to your needs.",
    features: [
      "Weekly & bi-weekly plans",
      "One-time deep cleanups",
      "Spring seasonal specials",
      "Free first visit for subscribers",
    ],
    link: "/residential",
    badge: "Most Popular",
  },
  {
    icon: FaBuilding,
    title: "Commercial Services",
    description:
      "Professional waste management for HOAs, apartment complexes, dog parks, and pet-friendly businesses with custom scheduling.",
    features: [
      "Custom property plans",
      "Waste station management",
      "Detailed site reports",
      "Insured & bonded team",
    ],
    link: "/commercial",
    badge: "For Business",
  },
  {
    icon: FaSprayCan,
    title: "Deodorizing & Sanitizing",
    description:
      "Eliminate odors and bacteria with our eco-friendly treatments. Keep your yard safe, fresh, and pleasant for pets and people.",
    features: [
      "Pet-safe formula",
      "Kills bacteria & odors",
      "Great for high-traffic areas",
      "Perfect add-on service",
    ],
    link: "/deodorizing",
    badge: "Add-On",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": services.map((s, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "Service",
      "name": s.title,
      "description": s.description,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Poo Patrol Cleaning",
      },
    },
  })),
};

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Services – Dog Waste Removal & Yard Sanitizing"
        description="Residential and commercial dog waste removal, yard deodorizing, and sanitizing services in Northridge and the San Fernando Valley. Flexible plans for every need."
        canonical="/services"
        schema={serviceSchema}
      />

      {/* Hero Banner */}
      <Box
        bg="brand.brightGreen"
        py={{ base: 16, md: 24 }}
        textAlign="center"
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
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
            What We Do Best
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="whiteAlpha.900"
            maxW="600px"
            mx="auto"
          >
            Professional poop-scooping, sanitizing, and odor-control solutions
            for every type of property across the San Fernando Valley.
          </Text>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box as="section" py={{ base: 14, md: 20 }} bg="white">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
            {services.map((service) => (
              <Box
                key={service.title}
                bg="white"
                rounded="xl"
                overflow="hidden"
                shadow="lg"
                border="1px solid"
                borderColor="gray.100"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-8px)",
                  shadow: "2xl",
                  borderColor: "brand.brightGreen",
                }}
              >
                {/* Card Header */}
                <Box
                  bg="linear-gradient(135deg, #8bc42e 0%, #4a9720 100%)"
                  py={8}
                  textAlign="center"
                  position="relative"
                >
                  <Badge
                    position="absolute"
                    top={3}
                    right={3}
                    bg="brand.golden"
                    color="black"
                    px={3}
                    py={1}
                    rounded="full"
                    fontSize="xs"
                    fontWeight="bold"
                  >
                    {service.badge}
                  </Badge>
                  <Icon as={service.icon} w={12} h={12} color="white" mb={3} />
                  <Heading as="h2" size="lg" color="white">
                    {service.title}
                  </Heading>
                </Box>

                {/* Card Body */}
                <VStack p={6} spacing={4} align="stretch">
                  <Text color="gray.600" lineHeight={1.7}>
                    {service.description}
                  </Text>

                  <VStack align="start" spacing={2} pt={2}>
                    {service.features.map((feature) => (
                      <Flex key={feature} align="center" gap={2}>
                        <Icon as={FaCheckCircle} color="brand.brightGreen" flexShrink={0} />
                        <Text fontSize="sm" color="gray.700">
                          {feature}
                        </Text>
                      </Flex>
                    ))}
                  </VStack>

                  <Button
                    as={RouterLink}
                    to={service.link}
                    bg="brand.golden"
                    color="black"
                    size="lg"
                    mt={4}
                    rightIcon={<FaArrowRight />}
                    transition="all 0.3s ease"
                    _hover={{ bg: "brand.brightGreen", color: "white" }}
                  >
                    Learn More
                  </Button>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Why Poo Patrol */}
      <Box as="section" py={{ base: 14, md: 20 }} bg="brand.beige">
        <Container maxW="5xl" textAlign="center">
          <Heading as="h2" size={{ base: "lg", md: "xl" }} color="brand.darkBrown" mb={4}>
            We're Poop People You Can Count On
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="700px" mx="auto" mb={8} lineHeight={1.8}>
            We show up in uniform, on time, and ready to roll. No cutting
            corners, no skipped scoops. Just clean lawns, happy paws, and
            satisfied clients across the San Fernando Valley.
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
            Book Your Cleanup Today
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default ServicesPage;
