// src/components/Terms.tsx
import React from "react";
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Text,
  UnorderedList,
  ListItem,
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

const Terms: React.FC = () => {
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
          <Heading as="h1" size="xl" color="brand.darkBrown" mb={4}>
            Terms of Service
          </Heading>
          <Text fontSize="sm" color="gray.500" mb={6}>
            Revised&nbsp;2/12/24
          </Text>

          {/* Intro */}
          <Text mb={6}>
            Please read these Terms of Service (“Terms”) carefully before using
            the pet-waste removal services (“Services”) provided by Poo Patrol
            (“we,” “us,” or “our”). By subscribing to or using our Services, you
            agree to be bound by these Terms.
          </Text>

          {/* 1 Services Offered */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            1.&nbsp;Services Offered
          </Heading>
          <Text mb={2}>
            Poo Patrol provides residential and commercial dog-waste removal
            services including:
          </Text>
          <UnorderedList ml={6} mb={4}>
            <ListItem>One-Time Cleanups</ListItem>
            <ListItem>Weekly & Bi-Weekly Cleanings</ListItem>
            <ListItem>Monthly Subscription Packages</ListItem>
          </UnorderedList>
          <Text mb={6}>
            Pricing is based on standard yard sizes (up to&nbsp;⅛ acre). Larger
            properties may incur additional charges.
          </Text>

          {/* 2 Access */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            2.&nbsp;Access to Your Property
          </Heading>
          <Text mb={6}>
            You are responsible for ensuring safe and unobstructed access to the
            area requiring service. If we cannot access your yard due to locked
            gates, aggressive dogs, or unsafe conditions, the visit will be
            skipped and charges will still apply. A&nbsp;$5 fee may be charged
            for return visits at your request.
          </Text>

          {/* 3 Weather */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            3.&nbsp;Weather Conditions
          </Heading>
          <Text mb={6}>
            We operate in most weather conditions but may skip service during
            extreme weather such as heavy rain, snow, or unsafe heat. Missed
            visits due to weather are not refunded; service will resume on the
            next scheduled visit.
          </Text>

          {/* 4 Holidays */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            4.&nbsp;Holidays
          </Heading>
          <Text mb={2}>
            Poo Patrol does not operate on the following major holidays:
          </Text>
          <UnorderedList ml={6} mb={6}>
            <ListItem>New Year’s Day</ListItem>
            <ListItem>Independence Day</ListItem>
            <ListItem>Thanksgiving Day</ListItem>
            <ListItem>Christmas Day</ListItem>
          </UnorderedList>
          <Text mb={6}>
            If your service day falls on a listed holiday, we will resume
            service the following week. No refunds will be issued.
          </Text>

          {/* 5 Billing */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            5.&nbsp;Billing and Payment
          </Heading>
          <Text mb={6}>
            Monthly subscription payments are billed on the&nbsp;1st of each
            month and must be received by the&nbsp;3rd to avoid service
            interruption. A&nbsp;late fee of&nbsp;$10 may apply. One-time
            cleanings are billed after service and due within&nbsp;24 hours.
            Accounts unpaid after&nbsp;30 days may be referred to collections.
          </Text>

          {/* 6 Yard Conditions */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            6.&nbsp;Yard Conditions
          </Heading>
          <Text mb={6}>
            Excessive leaves, tall grass, or debris may hinder our ability to
            locate all waste. Maintain your yard regularly; if conditions are
            improved by the next visit, we will address any missed waste.
          </Text>

          {/* 7 Additional Fees */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            7.&nbsp;Additional Fees
          </Heading>
          <UnorderedList ml={6} mb={6}>
            <ListItem>
              Cleaning decks, patios, or concrete – $5 per visit
            </ListItem>
            <ListItem>Return visits due to access issues – $5</ListItem>
            <ListItem>
              Waiting time exceeding five minutes – $5 per visit
            </ListItem>
          </UnorderedList>

          {/* 8 Privacy */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            8.&nbsp;Privacy Policy
          </Heading>
          <Text mb={6}>
            We collect and use personal information solely to provide and
            improve our Services. We do not sell or share your information with
            third parties except as necessary to process payments or comply with
            legal obligations.
          </Text>

          {/* 9 Revisions */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            9.&nbsp;Revisions to Terms
          </Heading>
          <Text mb={6}>
            We may update these Terms from time to time. Changes will be posted
            on our website and become effective immediately. Continued use of
            our Services constitutes acceptance of any revised Terms.
          </Text>

          {/* 10 Contact */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            10.&nbsp;Contact Us
          </Heading>
          <Text mb={8} fontWeight="bold">
            📧 info@poopatrolcleaning.com
          </Text>

          <Text fontWeight="bold">
            Thank you for choosing Poo Patrol — We Scoop, You Relax!
          </Text>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Terms;
