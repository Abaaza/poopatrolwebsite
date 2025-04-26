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

const Commercial: React.FC = () => {
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
            🏢 Commercial Pack Leader Program (HOAs, Apartments & Public Spaces)
          </Heading>

          <Text mb={4} fontSize={{ base: "md", md: "lg" }}>
            Poo Patrol isn’t just for backyards — we’re your
            four‑legged‑friendly partner in keeping multi‑residential and
            community spaces fresh, clean, and poop‑free. Whether you manage a
            dog‑loving apartment complex, HOA, public park, or pet‑friendly
            business, we bring professional‑level scooping service with
            tail‑wagging results.
          </Text>

          <Bullet>
            Customized Service Plans – weekly, bi‑weekly, or custom schedules
            based on property size and pup traffic.
          </Bullet>
          <Bullet>
            Pet Waste Station Management – we clean, restock bags, and keep
            waste bins emptied and odor‑free.
          </Bullet>
          <Bullet>
            Discreet, Uniformed Scoop Technicians – always courteous,
            professional, and punctual.
          </Bullet>
          <Bullet>
            Detailed Site Reports – stay updated on what was cleaned, what we
            noticed, and when we visited.
          </Bullet>
          <Bullet>
            Insured & Reliable – peace of mind for you and a cleaner experience
            for tenants and guests.
          </Bullet>
          <Bullet>
            Ideal For: HOAs, apartment complexes, dog parks, trails, business
            campuses, and more!
          </Bullet>

          <Text
            mt={6}
            mb={4}
            fontWeight="bold"
            fontSize={{ base: "md", md: "lg" }}
          >
            💡 Bonus Bark: A cleaner community means happier residents, fewer
            complaints, and pawsitive online reviews!
          </Text>

          <Text textAlign="center" fontSize="lg" fontWeight="bold">
            Reach out to <u>poopatrolcleanup@gmail.com</u> for pricing or
            business inquiries.
          </Text>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Commercial;
