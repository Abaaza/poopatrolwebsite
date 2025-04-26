// src/components/AboutUs.tsx
import React from "react";
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Text,
  extendTheme,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

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

const bullet = (text: string) => (
  <Flex align="flex-start" mb={1}>
    <Icon as={CheckCircleIcon} mt={1} color="brand.golden" />
    <Text ml={2}>{text}</Text>
  </Flex>
);

const Residential: React.FC = () => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Box
        bg="brand.lightGreen"
        py={{ base: 10, md: 20 }}
        display="flex"
        justifyContent="center"
      >
        <Container
          maxW="4xl"
          bg="white"
          p={{ base: 6, md: 10 }}
          borderRadius="md"
          boxShadow="md"
        >
          <Heading
            as="h1"
            size="xl"
            color="brand.darkBrown"
            mb={6}
            textAlign="center"
          >
            🐾 Our Tail‑Waggin’ Services
          </Heading>

          <Text mb={10} fontSize={{ base: "md", md: "lg" }} textAlign="center">
            At <strong>Poo Patrol</strong> we don’t just scoop — we sniff out
            the best plan for your pup‑filled palace. Whether you’ve got one
            lazy hound or a full‑on bark brigade, we’ve got you covered. Check
            out our drool‑worthy options below!
          </Text>

          {/* Twice‑a‑Week */}
          <Box mb={10}>
            <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
              🚀 Twice‑a‑Week Doo‑Doo Defense
            </Heading>
            {bullet("Fresh yard twice a week")}
            {bullet("Kicks odors to the curb faster")}
            {bullet("Great for big pups or big poop volume")}
          </Box>

          {/* Weekly */}
          <Box mb={10}>
            <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
              🐕 Weekly Woof‑Cleanup (Fan Favorite!)
            </Heading>
            {bullet("Keeps poop and bacteria under control")}
            {bullet("Ideal for one–two dog households")}
            {bullet("A clean yard every single week — yes paw‑lease!")}
          </Box>

          {/* Bi‑Weekly */}
          <Box mb={10}>
            <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
              🐾 Bi‑Weekly Tail‑Tidy
            </Heading>
            {bullet("Budget‑friendly")}
            {bullet("Great for homes with lighter pooping pups")}
            {bullet("Less frequent, still fur‑tastic!")}
          </Box>

          {/* One‑Time */}
          <Box mb={10}>
            <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
              🎉 One‑Time “Oh‑Crap!” Cleanup
            </Heading>
            {bullet("One‑time clean sweep of your yard")}
            {bullet("Perfect for landlords, renters, or events")}
            {bullet("We handle the mess — you relax and impress!")}
          </Box>

          {/* Spring Special */}
          <Box mb={10}>
            <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
              🌸 Spring Sniff‑Off Special
            </Heading>
            {bullet("Deep seasonal clean after snowy neglect")}
            {bullet("Bye‑bye bacteria and stink")}
            {bullet("Hello fresh, poop‑free grass!")}
          </Box>

          <Heading
            as="h3"
            size="md"
            color="brand.darkBrown"
            textAlign="center"
            mt={10}
          >
            Let us do the dirty work — so you and your pups can enjoy a
            poop‑free paradise.
          </Heading>
          <Heading as="h4" size="sm" textAlign="center" mt={2}>
            🐾✨ Book now and get <strong>one FREE visit</strong> for new
            monthly subscribers! ✨🐾
          </Heading>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Residential;
