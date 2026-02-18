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
  Badge,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaCheckCircle,
  FaRocket,
  FaDog,
  FaPaw,
  FaStar,
  FaSeedling,
} from "react-icons/fa";
import SEO from "./SEO";

const plans = [
  {
    icon: FaRocket,
    title: "Twice-a-Week Cleanup",
    subtitle: "Maximum Freshness",
    features: [
      "Fresh yard twice a week",
      "Kicks odors to the curb faster",
      "Great for big pups or multi-dog homes",
      "Priority scheduling available",
    ],
    badge: null,
  },
  {
    icon: FaDog,
    title: "Weekly Cleanup",
    subtitle: "Fan Favorite",
    features: [
      "Keeps poop and bacteria under control",
      "Ideal for 1-2 dog households",
      "A clean yard every single week",
      "Most popular among our customers",
    ],
    badge: "Most Popular",
  },
  {
    icon: FaPaw,
    title: "Bi-Weekly Cleanup",
    subtitle: "Budget-Friendly",
    features: [
      "Budget-friendly option",
      "Great for homes with small dogs",
      "Every other week service",
      "Still keeps your yard fresh",
    ],
    badge: null,
  },
  {
    icon: FaStar,
    title: "One-Time Cleanup",
    subtitle: "The 'Oh-Crap!' Special",
    features: [
      "Complete yard sweep",
      "Perfect for parties or move-ins",
      "Landlord & renter friendly",
      "We handle the mess — you relax!",
    ],
    badge: null,
  },
  {
    icon: FaSeedling,
    title: "Spring Special",
    subtitle: "Seasonal Deep Clean",
    features: [
      "Deep clean after winter neglect",
      "Eliminates bacteria & stink buildup",
      "Restores your yard to fresh condition",
      "Limited-time seasonal offer",
    ],
    badge: "Seasonal",
  },
];

const residentialSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Residential Dog Waste Removal",
  "description": "Weekly, bi-weekly, and one-time dog waste cleanup services for residential yards in the San Fernando Valley.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Poo Patrol Cleaning",
    "telephone": "+1-818-877-3304",
  },
  "areaServed": {
    "@type": "City",
    "name": "Northridge",
  },
  "serviceType": "Dog Waste Removal",
};

const Residential: React.FC = () => {
  return (
    <>
      <SEO
        title="Residential Dog Waste Removal – Plans & Pricing"
        description="Professional residential dog waste removal in Northridge & the San Fernando Valley. Weekly, bi-weekly, and one-time yard cleanups. Free first visit for new subscribers!"
        canonical="/residential"
        schema={residentialSchema}
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
            Residential Cleanup Plans
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="whiteAlpha.900" maxW="600px" mx="auto">
            We don't just scoop — we find the best plan for your pup-filled palace.
            Flexible options for every home and every budget.
          </Text>
        </Container>
      </Box>

      {/* Plans Grid */}
      <Box as="section" py={{ base: 14, md: 20 }} bg="white">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {plans.map((plan) => (
              <Box
                key={plan.title}
                bg="white"
                rounded="xl"
                overflow="hidden"
                shadow="lg"
                border="1px solid"
                borderColor={plan.badge === "Most Popular" ? "brand.brightGreen" : "gray.100"}
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-6px)",
                  shadow: "2xl",
                }}
                position="relative"
              >
                {plan.badge && (
                  <Badge
                    position="absolute"
                    top={3}
                    right={3}
                    bg={plan.badge === "Most Popular" ? "brand.brightGreen" : "brand.golden"}
                    color={plan.badge === "Most Popular" ? "white" : "black"}
                    px={3}
                    py={1}
                    rounded="full"
                    fontSize="xs"
                    fontWeight="bold"
                    zIndex={1}
                  >
                    {plan.badge}
                  </Badge>
                )}
                <Box p={6}>
                  <Flex align="center" gap={3} mb={3}>
                    <Flex
                      w={12}
                      h={12}
                      bg="green.50"
                      rounded="xl"
                      align="center"
                      justify="center"
                    >
                      <Icon as={plan.icon} w={6} h={6} color="brand.brightGreen" />
                    </Flex>
                    <Box>
                      <Heading as="h2" size="md" color="brand.darkBrown">
                        {plan.title}
                      </Heading>
                      <Text fontSize="sm" color="brand.golden" fontWeight="semibold">
                        {plan.subtitle}
                      </Text>
                    </Box>
                  </Flex>

                  <List spacing={3} mt={4}>
                    {plan.features.map((feature) => (
                      <ListItem key={feature} display="flex" alignItems="center">
                        <ListIcon as={FaCheckCircle} color="brand.brightGreen" />
                        <Text fontSize="sm" color="gray.700">
                          {feature}
                        </Text>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        as="section"
        py={{ base: 14, md: 20 }}
        bg="linear-gradient(135deg, #8bc42e 0%, #4a9720 100%)"
        textAlign="center"
      >
        <Container maxW="4xl">
          <Heading as="h2" size={{ base: "lg", md: "xl" }} color="white" mb={4}>
            Let us do the dirty work — so you and your pups can enjoy a poop-free paradise.
          </Heading>
          <Text color="whiteAlpha.900" fontSize={{ base: "md", md: "lg" }} mb={6}>
            Book now and get <strong>one FREE visit</strong> for new monthly subscribers!
          </Text>
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

export default Residential;
