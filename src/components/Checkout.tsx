// src/components/Checkout.tsx
import React, { useEffect, useState } from "react";
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Text,
  Link,
  extendTheme,
  Badge,
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

const Checkout: React.FC = () => {
  const [reference, setReference] = useState("");

  useEffect(() => {
    const randomRef = "POO-" + Math.floor(100000 + Math.random() * 900000);
    setReference(randomRef);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box
        bg="brand.lightGreen"
        py={{ base: 10, md: 20 }}
        minH="100vh"
        display="flex"

      >
        <Container
          maxW="7xl"
          bg="white"
                  minH="30vh"
          p={{ base: 6, md: 10 }}
          borderRadius="md"
          boxShadow="md"
          textAlign="center"
        >
          <Heading as="h1" size="xl" color="brand.darkBrown" mb={4}>
            ✅ Booking Confirmed!
          </Heading>

          <Text fontSize="lg" mb={4}>
            Thanks for choosing <strong>Poopatrol</strong> — your booking has been received!
          </Text>

          <Text fontSize="md" mb={2}>
            You’re officially one step closer to a cleaner, stink-free yard 🐾
          </Text>

          <Box my={6}>
            <Badge colorScheme="green" fontSize="md" py={1} px={4}>
              Reference Number: {reference}
            </Badge>
          </Box>

          <Box textAlign="left" mt={8}>
            <Text mb={3}>🗓️ <strong>What happens next:</strong></Text>
            <Text mb={2}>• You’ve been added to our service route</Text>
            <Text mb={2}>• We’ll contact you shortly to confirm your service day and time</Text>
            <Text mb={2}>• A confirmation email has been sent to your inbox with all the details</Text>
            
            <Text mt={4}>
            We’re excited to scoop you soon! If you have any questions, feel free to reach out at{" "}
              <Link href="mailto:info@poopatrolcleaning.com" color="brand.golden">
                info@poopatrolcleaning.com
              </Link>
            </Text>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Checkout;
