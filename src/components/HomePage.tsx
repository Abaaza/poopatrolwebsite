import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Image,
  Container,
  SimpleGrid,
  Icon,
  VStack,
  HStack,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { isValidMotionProp, motion } from "framer-motion";
import {
  FaPaw,
  FaLeaf,
  FaClock,
  FaShieldAlt,
  FaHome,
  FaBuilding,
  FaSprayCan,
  FaStar,
  FaPhone,
  FaArrowRight,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaHeart,
  FaGoogle,
  FaExternalLinkAlt,
} from "react-icons/fa";
import SEO from "./SEO";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Poopatrol/@34.2500741,-118.5220439,570m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa8454316eaccb7c9:0x5514a013f85d05bb!8m2!3d34.2500741!4d-118.5194636!16s%2Fg%2F11xdtch__p";

const whyChooseUs = [
  {
    icon: FaPaw,
    title: "Pet-Safe Products",
    description: "All our cleaning and deodorizing products are 100% safe for your furry family members.",
    color: "green",
  },
  {
    icon: FaLeaf,
    title: "Eco-Friendly Disposal",
    description: "We double-bag all waste and use environmentally responsible disposal methods.",
    color: "teal",
  },
  {
    icon: FaClock,
    title: "Reliable Scheduling",
    description: "We show up on time, every time. Rain or shine, your yard stays clean.",
    color: "orange",
  },
  {
    icon: FaShieldAlt,
    title: "Satisfaction Guaranteed",
    description: "Not happy? We'll come back and make it right. Your satisfaction is our promise.",
    color: "purple",
  },
];

const services = [
  {
    icon: FaHome,
    title: "Residential Cleanup",
    description: "Weekly, bi-weekly, or one-time visits to keep your home yard pristine and poop-free.",
    link: "/residential",
  },
  {
    icon: FaBuilding,
    title: "Commercial Services",
    description: "Custom waste management for HOAs, apartments, parks, and pet-friendly businesses.",
    link: "/commercial",
  },
  {
    icon: FaSprayCan,
    title: "Deodorizing & Sanitizing",
    description: "Eco-friendly treatments that eliminate odors and bacteria — safe for pets and people.",
    link: "/deodorizing",
  },
];

const serviceAreas = [
  "Northridge", "Granada Hills", "Chatsworth", "Porter Ranch",
  "Encino", "Tarzana", "Woodland Hills", "Reseda",
  "Canoga Park", "Winnetka", "Van Nuys", "Sherman Oaks",
];

const trustBadges = [
  { icon: FaStar, label: "5.0 Google Rating" },
  { icon: FaShieldAlt, label: "Licensed & Insured" },
  { icon: FaHeart, label: "Locally Owned" },
  { icon: FaLeaf, label: "Eco-Friendly" },
];

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Dog Waste Removal & Yard Sanitizing in Northridge & Los Angeles"
        description="Professional dog waste removal serving Northridge and the San Fernando Valley. Weekly scooping, one-time cleanups, and eco-friendly yard sanitizing. Book online today — cleaner yards, happier pets!"
        canonical="/"
      />

      {/* ═══════════ HERO SECTION ═══════════ */}
      <MotionBox
        id="home"
        position="relative"
        minH={{ base: "85vh", md: "90vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        backgroundImage="url('https://s3.me-south-1.amazonaws.com/www.wall-masters.com/images/13165161616.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bg: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)",
          zIndex: 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // @ts-ignore
        transition={{ duration: 0.6 }}
      >
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack spacing={6}>
            <Heading
              as="h1"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
              color="white"
              fontWeight="800"
              textShadow="0 4px 12px rgba(0,0,0,0.4)"
              lineHeight={1.2}
            >
              Say Goodbye to Messy Yards.
              <br />
              <Text as="span" color="brand.golden">
                We Scoop, You Relax!
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="whiteAlpha.900"
              maxW="600px"
              textShadow="0 2px 6px rgba(0,0,0,0.3)"
            >
              Professional dog waste removal serving Northridge and the
              San Fernando Valley. Clean yards, happy pets — guaranteed.
            </Text>
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                as={RouterLink}
                to="/book-now"
                bg="brand.golden"
                color="black"
                size="lg"
                px={8}
                fontSize="lg"
                fontWeight="bold"
                rightIcon={<FaArrowRight />}
                transition="all 0.3s ease"
                _hover={{ bg: "#f0bc45", transform: "translateY(-3px)", boxShadow: "xl" }}
              >
                Get a Free Quote
              </Button>
              <Button
                as={RouterLink}
                to="/services"
                variant="outline"
                borderColor="white"
                color="white"
                size="lg"
                px={8}
                fontSize="lg"
                transition="all 0.3s ease"
                _hover={{ bg: "whiteAlpha.200", transform: "translateY(-3px)" }}
              >
                Our Services
              </Button>
            </HStack>
            <HStack spacing={2} mt={4}>
              <HStack spacing={1}>
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} as={FaStar} color="brand.golden" w={4} h={4} />
                ))}
              </HStack>
              <Text color="whiteAlpha.800" fontSize="sm" fontWeight="medium">
                5.0 rated on Google — Northridge, San Fernando Valley
              </Text>
            </HStack>
          </VStack>
        </Container>
      </MotionBox>

      {/* ═══════════ WHY CHOOSE US ═══════════ */}
      <Box as="section" py={{ base: 16, md: 24 }} bg="white">
        <Container maxW="7xl">
          <VStack spacing={4} mb={14} textAlign="center">
            <Text
              color="brand.brightGreen"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wider"
              fontSize="sm"
            >
              Why Choose Us
            </Text>
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              color="brand.darkBrown"
            >
              The Poo Patrol Difference
            </Heading>
            <Text color="gray.600" maxW="600px" fontSize={{ base: "md", md: "lg" }}>
              We're not just scoopers — we're your yard's best friend.
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={8}>
            {whyChooseUs.map((item) => (
              <VStack
                key={item.title}
                bg="white"
                p={8}
                rounded="2xl"
                shadow="lg"
                border="1px solid"
                borderColor="gray.50"
                spacing={4}
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-8px)",
                  shadow: "2xl",
                  borderColor: "brand.brightGreen",
                }}
              >
                <Flex
                  w={16}
                  h={16}
                  bg={`${item.color}.50`}
                  rounded="2xl"
                  align="center"
                  justify="center"
                >
                  <Icon as={item.icon} w={8} h={8} color={`${item.color}.500`} />
                </Flex>
                <Heading as="h3" size="md" color="brand.darkBrown">
                  {item.title}
                </Heading>
                <Text color="gray.600" fontSize="sm" lineHeight={1.7}>
                  {item.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ═══════════ ABOUT SECTION ═══════════ */}
      <Box as="section" py={{ base: 16, md: 24 }} bg="brand.beige">
        <Container maxW="7xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={10}
            align="center"
            justify="center"
          >
            <Box flex="1" maxW={{ base: "full", md: "500px" }}>
              <Image
                src="https://s3.me-south-1.amazonaws.com/www.wall-masters.com/images/Pet-Waste-Removal-Business-poop-bag.jpg"
                alt="Poo Patrol professional team member holding a sealed pet-waste bag during yard cleanup service"
                rounded="2xl"
                shadow="2xl"
                mx="auto"
                transition="all 0.3s ease"
                _hover={{ transform: "scale(1.02)" }}
                loading="lazy"
              />
            </Box>
            <VStack flex="1" align={{ base: "center", md: "start" }} spacing={6} textAlign={{ base: "center", md: "left" }}>
              <Text
                color="brand.brightGreen"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="wider"
                fontSize="sm"
              >
                About Us
              </Text>
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl" }}
                color="brand.darkBrown"
              >
                Your Local Poop-Free Guarantee
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight={1.8}
                color="gray.700"
              >
                Founded in 2024, Poo Patrol was built to make life easier for dog owners
                across the San Fernando Valley. We serve multiple communities and ensure
                each yard is left fresh and clean. Our professional team is fully trained,
                vetted, and passionate about giving you a yard you can enjoy.
              </Text>
              <HStack spacing={8} pt={2}>
                <VStack spacing={0}>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.brightGreen">
                    5.0
                  </Text>
                  <Text fontSize="xs" color="gray.500" textTransform="uppercase">
                    Google Rating
                  </Text>
                </VStack>
                <VStack spacing={0}>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.golden">
                    12+
                  </Text>
                  <Text fontSize="xs" color="gray.500" textTransform="uppercase">
                    Areas Served
                  </Text>
                </VStack>
                <VStack spacing={0}>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.darkGreen">
                    100%
                  </Text>
                  <Text fontSize="xs" color="gray.500" textTransform="uppercase">
                    Eco-Friendly
                  </Text>
                </VStack>
              </HStack>
              <Button
                as={RouterLink}
                to="/about-us"
                bg="brand.golden"
                color="black"
                size="lg"
                rightIcon={<FaArrowRight />}
                transition="all 0.3s ease"
                _hover={{ bg: "brand.brightGreen", color: "white", transform: "translateY(-2px)" }}
              >
                Learn More About Us
              </Button>
            </VStack>
          </Flex>
        </Container>
      </Box>

      {/* ═══════════ SERVICES SECTION ═══════════ */}
      <Box as="section" py={{ base: 16, md: 24 }} bg="white">
        <Container maxW="7xl">
          <VStack spacing={4} mb={14} textAlign="center">
            <Text
              color="brand.brightGreen"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wider"
              fontSize="sm"
            >
              What We Offer
            </Text>
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              color="brand.darkBrown"
            >
              Our Services
            </Heading>
            <Text color="gray.600" maxW="600px" fontSize={{ base: "md", md: "lg" }}>
              From backyard cleanups to commercial property management — we've got you covered.
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {services.map((service) => (
              <Box
                key={service.title}
                bg="white"
                rounded="2xl"
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
                <Box
                  bg="linear-gradient(135deg, #8bc42e 0%, #4a9720 100%)"
                  py={8}
                  textAlign="center"
                >
                  <Icon as={service.icon} w={12} h={12} color="white" />
                </Box>
                <VStack p={6} spacing={4} align="stretch">
                  <Heading as="h3" size="md" color="brand.darkBrown" textAlign="center">
                    {service.title}
                  </Heading>
                  <Text color="gray.600" textAlign="center" lineHeight={1.7}>
                    {service.description}
                  </Text>
                  <Button
                    as={RouterLink}
                    to={service.link}
                    variant="outline"
                    borderColor="brand.brightGreen"
                    color="brand.brightGreen"
                    size="md"
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

      {/* ═══════════ GOOGLE REVIEWS ═══════════ */}
      <Box as="section" py={{ base: 16, md: 24 }} bg="gray.50">
        <Container maxW="5xl">
          <VStack spacing={6} textAlign="center">
            <Text
              color="brand.brightGreen"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wider"
              fontSize="sm"
            >
              Customer Reviews
            </Text>
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              color="brand.darkBrown"
            >
              See What Our Customers Say on Google
            </Heading>

            {/* Google Rating Card */}
            <Box
              bg="white"
              rounded="2xl"
              shadow="xl"
              p={{ base: 8, md: 12 }}
              maxW="600px"
              w="full"
              border="1px solid"
              borderColor="gray.100"
              transition="all 0.3s ease"
              _hover={{ shadow: "2xl", transform: "translateY(-4px)" }}
            >
              <VStack spacing={5}>
                <Icon as={FaGoogle} w={10} h={10} color="#4285F4" />
                <HStack spacing={2}>
                  <Text fontSize="5xl" fontWeight="800" color="brand.darkBrown" lineHeight={1}>
                    5.0
                  </Text>
                  <VStack spacing={0} align="start">
                    <HStack spacing={1}>
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} as={FaStar} color="brand.golden" w={5} h={5} />
                      ))}
                    </HStack>
                    <Text fontSize="sm" color="gray.500" fontWeight="medium">
                      on Google Maps
                    </Text>
                  </VStack>
                </HStack>
                <Text color="gray.600" fontSize={{ base: "md", md: "lg" }} lineHeight={1.7}>
                  Our customers love us! Check out our reviews on Google to see
                  why pet owners across the San Fernando Valley trust Poo Patrol
                  for their yard cleanup needs.
                </Text>
                <HStack
                  spacing={4}
                  pt={2}
                  flexWrap="wrap"
                  justify="center"
                >
                  <Button
                    as="a"
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="brand.brightGreen"
                    color="white"
                    size="lg"
                    px={8}
                    fontWeight="bold"
                    leftIcon={<FaGoogle />}
                    rightIcon={<FaExternalLinkAlt />}
                    transition="all 0.3s ease"
                    _hover={{ bg: "brand.darkGreen", transform: "translateY(-2px)", boxShadow: "lg" }}
                  >
                    Read Our Reviews
                  </Button>
                  <Button
                    as="a"
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    borderColor="brand.golden"
                    color="brand.golden"
                    size="lg"
                    px={8}
                    fontWeight="bold"
                    leftIcon={<FaStar />}
                    transition="all 0.3s ease"
                    _hover={{ bg: "brand.golden", color: "black", transform: "translateY(-2px)" }}
                  >
                    Review Us on Google
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* ═══════════ TRUST BADGES ═══════════ */}
      <Box as="section" py={{ base: 10, md: 14 }} bg="white">
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
            {trustBadges.map((badge) => (
              <VStack
                key={badge.label}
                spacing={3}
                py={6}
                px={4}
                rounded="xl"
                bg="green.50"
                textAlign="center"
              >
                <Icon as={badge.icon} w={8} h={8} color="brand.brightGreen" />
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "xs", md: "sm" }}
                  color="brand.darkBrown"
                >
                  {badge.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ═══════════ SERVICE AREA ═══════════ */}
      <Box as="section" py={{ base: 16, md: 24 }} bg="brand.beige">
        <Container maxW="6xl" textAlign="center">
          <VStack spacing={4} mb={10}>
            <Icon as={FaMapMarkerAlt} w={8} h={8} color="brand.brightGreen" />
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              color="brand.darkBrown"
            >
              Proudly Serving the San Fernando Valley
            </Heading>
            <Text color="gray.600" maxW="600px" fontSize={{ base: "md", md: "lg" }}>
              We cover neighborhoods across the valley — and we're still growing!
            </Text>
          </VStack>
          <Flex wrap="wrap" justify="center" gap={3}>
            {serviceAreas.map((area) => (
              <Flex
                key={area}
                align="center"
                gap={2}
                bg="white"
                px={5}
                py={3}
                rounded="full"
                shadow="sm"
                border="1px solid"
                borderColor="gray.100"
                transition="all 0.2s ease"
                _hover={{ shadow: "md", borderColor: "brand.brightGreen" }}
              >
                <Icon as={FaCheckCircle} color="brand.brightGreen" w={4} h={4} />
                <Text fontWeight="medium" color="brand.darkBrown" fontSize="sm">
                  {area}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Container>
      </Box>

      {/* ═══════════ FINAL CTA BANNER ═══════════ */}
      <Box
        as="section"
        py={{ base: 16, md: 24 }}
        bg="linear-gradient(135deg, #8bc42e 0%, #4a9720 100%)"
        textAlign="center"
        position="relative"
        overflow="hidden"
      >
        <Container maxW="4xl" position="relative" zIndex={1}>
          <VStack spacing={6}>
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              color="white"
              textShadow="0 2px 4px rgba(0,0,0,0.15)"
            >
              Ready for a Poop-Free Yard?
            </Heading>
            <Text
              color="whiteAlpha.900"
              fontSize={{ base: "lg", md: "xl" }}
              maxW="500px"
            >
              Pet owners across the San Fernando Valley trust us. Book your first cleanup today!
            </Text>
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                as={RouterLink}
                to="/book-now"
                bg="white"
                color="brand.darkGreen"
                size="lg"
                px={10}
                fontWeight="bold"
                rightIcon={<FaArrowRight />}
                transition="all 0.3s ease"
                _hover={{ bg: "brand.golden", color: "black", transform: "translateY(-3px)" }}
              >
                Book Now
              </Button>
              <Button
                as="a"
                href="tel:8188773304"
                variant="outline"
                borderColor="white"
                color="white"
                size="lg"
                px={8}
                leftIcon={<FaPhone />}
                transition="all 0.3s ease"
                _hover={{ bg: "whiteAlpha.200", transform: "translateY(-3px)" }}
              >
                818-877-3304
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
