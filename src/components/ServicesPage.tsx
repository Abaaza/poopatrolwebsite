// src/components/ServicesPage.tsx
import React from "react";
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link as ChakraLink,
  extendTheme,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

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
      <Box
        bg="brand.lightGreen"
        py={{ base: 10, md: 20 }}
        minH="100vh"
        display="flex"
        alignItems="center"
      >
        <Container
          maxW="160vh"
          bg="white"
          p={{ base: 6, md: 10 }}
          borderRadius="md"
          boxShadow="md"
        >
          {/* Main Heading */}
          <Heading as="h1" size="xl" color="brand.darkBrown" mb={4}>
            What We Do&nbsp;Best
          </Heading>

          {/* Intro */}
          <Text mb={4}>
            At&nbsp;Poo&nbsp;Patrol, we’re not just picking up poop — we’re
            protecting lawns, saving noses, and giving pet owners their yards
            back. Our mission is simple: cleaner spaces, happier pets, and zero
            mess left behind.
          </Text>

          <Text mb={4}>
            We’re proud to offer a full range of dog-waste removal solutions for
            homes, apartments, parks, HOAs, and anywhere dogs do their business.
          </Text>

          <Text mb={6}>
            Whether you’ve got a backyard bomb zone or manage a pup-packed
            property, our trained scoop pros show up on time, get the job done
            right, and leave your space fresh, poop-free, and ready to enjoy.
          </Text>

          {/* Core Services */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            Our Core Services Include:
          </Heading>
          <UnorderedList ml={6} mb={6}>
            <ListItem>
              <strong>Routine Dog-Poop Scooping</strong> — Weekly, bi-weekly, or
              as needed
            </ListItem>
            <ListItem>
              <strong>One-Time Cleanups</strong> — Perfect for parties,
              move-ins/outs, or “oh crap” moments
            </ListItem>
            <ListItem>
              <strong>Commercial Property Patrol</strong> — Reliable scooping
              for HOAs, apartment complexes, and pet-friendly businesses
            </ListItem>
            <ListItem>
              <strong>Yard Deodorizing&nbsp;&amp;&nbsp;Sanitizing</strong> —
              Eco-friendly treatments that eliminate odor and bacteria after we
              scoop
            </ListItem>
          </UnorderedList>

          <Text mb={6}>
            All services are handled with care, professionalism, and a touch of
            tail-wagging fun.
          </Text>

          {/* Reliability */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            We’re Poop People You Can Count&nbsp;On
          </Heading>
          <Text mb={6}>
            We show up in uniform, on time, and ready to roll. No cutting
            corners, no skipped scoops. Just clean lawns, happy paws, and
            satisfied clients across the map.
          </Text>

          {/* Links to service pages */}
          <Text mb={4}>
            Want to see what plan fits your turf? Check out our specific service
            pages below:
          </Text>
          <UnorderedList ml={6} mb={8}>
            <ListItem>
              <ChakraLink as={RouterLink} to="/residential" color="brand.golden">
                Residential&nbsp;Cleanups
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink as={RouterLink} to="/commercial" color="brand.golden">
                Commercial&nbsp;Cleanups
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                as={RouterLink}
                to="/deodorizing"
                color="brand.golden"
              >
                Deodorizing&nbsp;&amp;&nbsp;Sanitizing&nbsp;Add-Ons
              </ChakraLink>
            </ListItem>
          </UnorderedList>

          {/* Closing */}
          <Text fontWeight="bold">
            Let us handle the doo so you don’t have to. <br />
            Poo&nbsp;Patrol — cleaner yards, happier pets, guaranteed.
          </Text>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default ServicesPage;
