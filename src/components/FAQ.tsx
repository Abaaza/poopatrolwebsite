// src/components/FAQ.tsx
import React from "react";
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Text,
  Link,
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

const FAQ: React.FC = () => {
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
          <Heading as="h1" size="xl" color="brand.darkBrown" mb={8}>
            Frequently Asked&nbsp;Questions
          </Heading>

          {/* Q1 */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            1.&nbsp;What areas do you service?
          </Heading>
          <Text mb={6}>
            We proudly serve the San&nbsp;Fernando Valley and surrounding
            areas. Not sure if you’re in our zone? Just reach out and we’ll let
            you know!
          </Text>

          {/* Q2 */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            2.&nbsp;How does your service work?
          </Heading>
          <Text mb={6}>
            It’s simple! Choose a service plan, and our team will come by on
            your scheduled day(s) to scoop the poop so you don’t have to. We
            leave your yard clean and odor-free—every time.
          </Text>

          {/* Q3 */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            3.&nbsp;Do I need to be home during the visit?
          </Heading>
          <Text mb={6}>
            Nope! As long as we have access to your yard (and your furry friend
            is secured), you don’t need to be there. We also send you a photo of
            your gate closed after service for peace of mind.
          </Text>

          {/* Q4 */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            4.&nbsp;What do you do with the waste?
          </Heading>
          <Text mb={6}>
            We securely double-bag all waste and dispose of it in your household
            trash bin. To keep your bin smelling fresh, we also deodorize it
            once a month at no extra charge.
          </Text>

          {/* Q5 */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            5.&nbsp;Do you offer one-time cleanups or just recurring plans?
          </Heading>
          <Text mb={6}>
            We offer both! Whether it’s a one-time spring cleanup or regular
            weekly visits, we’ve got a plan that works for you.
          </Text>

          {/* Q6 */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            6.&nbsp;Is it safe for pets and kids after service?
          </Heading>
          <Text mb={6}>
            Absolutely! We offer optional deodorizing and sanitizing spritz
            that’s eco-friendly and safe for pets and children.
          </Text>

          {/* Q7 */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            7.&nbsp;How do I sign up?
          </Heading>
          <Text mb={6}>
            Just visit{" "}
            <Link href="https://poopatrolcleaning.com" color="brand.golden" isExternal>
              poopatrolcleaning.com
            </Link>{" "}
            or call us at{" "}
            <Link href="tel:8188773304" color="brand.golden">
              818-877-3304
            </Link>{" "}
            — we’ll get you scooped and scheduled in no time.
          </Text>

          {/* CTA */}
          <Box textAlign="center" mt={10}>
            <Link
              as={RouterLink}
              to="/free-quote"
              bg="brand.golden"
              color="black"
              px={8}
              py={3}
              borderRadius="md"
              _hover={{ bg: "brand.brightGreen", color: "white" }}
            >
              Get a Free Quote
            </Link>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default React.memo(FAQ);
