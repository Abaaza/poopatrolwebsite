// src/components/AboutUs.tsx
import React from "react";
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Text,
  extendTheme,
} from "@chakra-ui/react";

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

const AboutUs: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="brand.lightGreen" py={{ base: 10, md: 20 }} display="flex">
        <Container
          maxW="160vh"
          bg="white"
          p={{ base: 6, md: 10 }}
          borderRadius="md"
          boxShadow="md"
        >
          <Heading as="h1" size="xl" color="brand.darkBrown" mb={6}>
            🐾 Who We Are – The Doo Crew at Your Service!
          </Heading>

          <Text mb={4}>
            At Poo Patrol, we take crap seriously — literally. We’re the unsung
            heroes of the backyard, the tail-waggin' cleanup crew on a mission
            to rescue your lawn from those stinky little landmines your furry
            best friend leaves behind.
          </Text>

          <Text mb={4}>
            We’re not just scoopers — we’re turd terminators, doo-duty experts,
            and your dog’s&nbsp;#1 backup for&nbsp;#2. Whether it’s a quick
            pickup or a weekly poop raid, we roll in with gloves on, bags ready,
            and a nose for cleanliness (don’t worry, we’ve trained ourselves not
            to smell it anymore).
          </Text>

          <Text mb={4}>
            No more dodging doo. No more yelling “WATCH YOUR STEP!” Just fresh
            grass, happy paws, and a whole lot less… poop. Because your dog may
            rule the yard, but <strong>we rule the stool</strong>. 💩🐶
          </Text>

          <Text mb={4}>
            <strong>Founded in January 2024</strong>, Poo Patrol started with
            one simple goal:{" "}
            <em>
              “Make life easier for pet parents and cleaner for their paws.”
            </em>{" "}
            We saw a need (and a lot of poop) and decided to do something about
            it — one scoop at a time. Now, we proudly serve our community with
            love, laughs, and a zero-tolerance policy for dog doo.
          </Text>

          <Heading as="h2" size="md" color="brand.darkBrown" mt={8} mb={2}>
            🌟 Our Vision
          </Heading>
          <Text mb={4}>
            To create a world where every yard is clean, every dog is happy, and
            every human can walk barefoot without fear. (Okay, maybe socks… but
            you get the point.) We dream big — of poop-free parks,
            fresh-smelling lawns, and a life where pet owners can focus on belly
            rubs, not butt business. 🐾
          </Text>

          <Heading
            as="h3"
            size="md"
            color="brand.darkBrown"
            textAlign="center"
            mt={8}
          >
            Because your dog may rule the yard, but we rule the stool. 💩🐶
          </Heading>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default AboutUs;
