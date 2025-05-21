// src/components/HomePage.tsx
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
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const transitionStyles = {
  transition: "all 0.3s ease",
  _hover: { transform: "translateY(-2px)", boxShadow: "lg" },
};

const HomePage: React.FC = () => {
  const overlayBg = useColorModeValue(
    "rgba(255,255,255,0.35)",
    "rgba(0,0,0,0.35)"
  );
  const sectionHeadingColor = useColorModeValue(
    "brand.darkBrown",
    "brand.lightGreen"
  );

  return (
    <>
      {/* HERO / HOME SECTION */}
      <Box
        id="home"
        as="section"
        position="relative"
        bg="brand.lightGreen"
        py={{ base: 24, md: 60 }}
        textAlign="center"
        backgroundImage="url('https://s3.me-south-1.amazonaws.com/www.wall-masters.com/images/13165161616.png')"
        backgroundSize="cover"
        backgroundPosition="top"
        backgroundRepeat="no-repeat"
        color={sectionHeadingColor}
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bg: overlayBg,
          zIndex: 0,
        }}
      >
        <Container maxW="7xl" position="relative" zIndex={1}>
          <Heading
            as="h1"
            size={{ base: "xl", md: "3xl" }}
            mb={4}
            textShadow="1px 1px rgba(0,0,0,0.25)"
          >
            Say Goodbye To Messy Yards, We Scoop, You Relax!
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            maxW="620px"
            mx="auto"
            mb={8}
          >
            We clean the mess so you can spend more time with your best friend.
          </Text>
          <Button
            as={RouterLink}
            to="/free-quote"
            bg="brand.golden"
            color="black"
            size="lg"
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
        py={{ base: 14, md: 5 }}
        bg="brand.brightGreen"
        color="white"
        textAlign="center"
        shadow="md"
      >
        <Container maxW="7xl">
          <Heading as="h3" size={{ base: "lg", md: "xl" }} mb={4}>
            Book Your Cleanup
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            maxW="620px"
            mx="auto"
            mb={6}
          >
            Ready to schedule your first appointment? Book online quickly and
            easily.
          </Text>
          <Button
            as={RouterLink}
            to="/book-now"
            bg="brand.darkBrown"
            color="white"
            size="lg"
            {...transitionStyles}
            _hover={{ bg: "brand.golden", color: "black" }}
          >
            Schedule a Cleanup
          </Button>
        </Container>
      </Box>

      {/* ABOUT US SECTION */}
      <Box as="section" py={{ base: 14, md: 24 }} bg="brand.lightGreen">
        <Container maxW="7xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={10}
            align="center"
            justify="center"
          >
            <Box flex="1" textAlign="center">
              <Heading
                as="h3"
                size={{ base: "lg", md: "xl" }}
                mb={4}
                color="brand.darkBrown"
              >
                About Poo Patrol
              </Heading>
              <Text
                mb={6}
                px={{ base: 0, md: 4 }}
                fontSize={{ base: "md", md: "lg" }}
                lineHeight={1.6}
              >
                Poo Patrol was founded to make life easier for dog owners by
                offering high-quality dog waste removal. We serve countless
                communities and ensure each yard is left fresh and clean. Our
                professional team is fully trained, vetted, and passionate about
                dogs 💩🐶
              </Text>
              <Button
                as={RouterLink}
                to="/about-us"
                bg="brand.golden"
                color="black"
                size="lg"
                {...transitionStyles}
                _hover={{ bg: "brand.brightGreen", color: "white" }}
              >
                Learn More
              </Button>
            </Box>
            <Box flex="1" maxW={{ base: "full", md: "400px" }}>
              <Image
                src="https://s3.me-south-1.amazonaws.com/www.wall-masters.com/images/Pet-Waste-Removal-Business-poop-bag.jpg"
                alt="Poo Patrol team member holding a sealed pet‑waste bag"
                rounded="md"
                shadow="lg"
                mx="auto"
                {...transitionStyles}
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* SERVICES SECTION */}
      <Box as="section" py={{ base: 14, md: 24 }} bg="white">
        <Container maxW="7xl">
          <Heading
            as="h3"
            size={{ base: "lg", md: "xl" }}
            mb={10}
            textAlign="center"
            color="brand.darkBrown"
          >
            Our Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {[
              {
                title: "Residential Cleanup",
                description:
                  "Keep your home yard pristine! We provide weekly or bi‑weekly visits, as well as one‑time or monthly options.",
                link: "/residential",
              },
              {
                title: "Commercial Services",
                description:
                  "Perfect for HOAs, apartment complexes, and public spaces. We offer flexible schedules and custom waste‑management plans.",
                link: "/commercial",
              },
              {
                title: "Deodorizing & Sanitizing",
                description:
                  "Eliminate odors and bacteria. Our specialized treatments keep your yard safe, fresh, and pleasant for pets and people.",
                link: "/deodorizing",
              },
            ].map((service) => (
              <Box
                key={service.title}
                bg="brand.lightGreen"
                p={8}
                rounded="md"
                shadow="md"
                textAlign="center"
                {...transitionStyles}
              >
                <Heading as="h4" size="md" mb={3} color="brand.darkBrown">
                  {service.title}
                </Heading>
                <Text mb={6}>{service.description}</Text>
                <Button
                  as={RouterLink}
                  to={service.link}
                  bg="brand.golden"
                  color="black"
                  size="sm"
                  {...transitionStyles}
                  _hover={{ bg: "brand.brightGreen", color: "white" }}
                >
                  Learn More
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
