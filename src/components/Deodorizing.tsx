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

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Flex align="flex-start" mb={1}>
    <Icon as={CheckCircleIcon} color="brand.golden" mt={1} />
    <Text ml={2}>{children}</Text>
  </Flex>
);

const Deodorizing: React.FC = () => {
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
            🌬️ Deodorizing & Sanitizing Spritz (Add‑On Service)
          </Heading>

          <Text mb={4} fontSize={{ base: "md", md: "lg" }}>
            Even after the poop’s gone, the <em>phew!</em> might stick around.
            That’s where our Deodorizing & Sanitizing Spritz comes in — a
            tail‑waggin' upgrade to your cleanup routine that leaves your yard
            smelling fresh and feeling clean.
          </Text>

          <Bullet>
            Pet‑Safe, Eco‑Friendly Formula – gentle for paws, tough on stink.
          </Bullet>
          <Bullet>
            Kills Bacteria & Neutralizes Odors – targets what causes the smell,
            not just covers it up.
          </Bullet>
          <Bullet>
            Great for High‑Traffic Dog Areas – patios, decks, turf, and kennel
            zones get an instant refresh.
          </Bullet>
          <Bullet>
            Ideal After Cleanups or Parties – especially handy for events,
            rentals, or seasonal refreshes.
          </Bullet>

          <Text
            mt={6}
            fontWeight="bold"
            fontSize={{ base: "md", md: "lg" }}
            textAlign="center"
          >
            🦴 Pro Tip: Combine this with your regular poop‑scooping schedule to
            keep your yard the envy of the entire dog park.
          </Text>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Deodorizing;
