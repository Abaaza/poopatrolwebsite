import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import SEO from "./SEO";

const Terms: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of Service for Poo Patrol Cleaning dog waste removal services. Read our policies on billing, yard access, weather, and more."
        canonical="/terms"
      />

      {/* Hero Banner */}
      <Box
        bg="brand.darkBrown"
        py={{ base: 12, md: 16 }}
        textAlign="center"
      >
        <Container maxW="5xl">
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="white" mb={2}>
            Terms of Service
          </Heading>
          <Text color="whiteAlpha.700" fontSize="sm">
            Revised 2/12/24
          </Text>
        </Container>
      </Box>

      {/* Content */}
      <Box as="section" py={{ base: 10, md: 16 }} bg="white">
        <Container maxW="4xl">
          <Text mb={6} lineHeight={1.8} color="gray.700">
            Please read these Terms of Service ("Terms") carefully before using
            the pet-waste removal services ("Services") provided by Poo Patrol
            ("we," "us," or "our"). By subscribing to or using our Services, you
            agree to be bound by these Terms.
          </Text>

          <Heading as="h2" size="md" color="brand.darkBrown" mb={2} mt={8}>
            1. Services Offered
          </Heading>
          <Text mb={2} color="gray.700" lineHeight={1.8}>
            Poo Patrol provides residential and commercial dog-waste removal
            services including:
          </Text>
          <UnorderedList ml={6} mb={4} color="gray.700" spacing={1}>
            <ListItem>One-Time Cleanups</ListItem>
            <ListItem>Weekly & Bi-Weekly Cleanings</ListItem>
            <ListItem>Monthly Subscription Packages</ListItem>
          </UnorderedList>
          <Text mb={6} color="gray.700" lineHeight={1.8}>
            Pricing is based on standard yard sizes (up to 1/8 acre). Larger
            properties may incur additional charges.
          </Text>

          <Heading as="h2" size="md" color="brand.darkBrown" mb={2} mt={8}>
            2. Access to Your Property
          </Heading>
          <Text mb={6} color="gray.700" lineHeight={1.8}>
            You are responsible for ensuring safe and unobstructed access to the
            area requiring service. If we cannot access your yard due to locked
            gates, aggressive dogs, or unsafe conditions, the visit will be
            skipped and charges will still apply. A $5 fee may be charged
            for return visits at your request.
          </Text>

          <Heading as="h2" size="md" color="brand.darkBrown" mb={2} mt={8}>
            3. Weather Conditions
          </Heading>
          <Text mb={6} color="gray.700" lineHeight={1.8}>
            We operate in most weather conditions but may skip service during
            extreme weather such as heavy rain, snow, or unsafe heat. Missed
            visits due to weather are not refunded; service will resume on the
            next scheduled visit.
          </Text>

          <Heading as="h2" size="md" color="brand.darkBrown" mb={2} mt={8}>
            4. Holidays
          </Heading>
          <Text mb={2} color="gray.700" lineHeight={1.8}>
            Poo Patrol does not operate on the following major holidays:
          </Text>
          <UnorderedList ml={6} mb={4} color="gray.700" spacing={1}>
            <ListItem>New Year's Day</ListItem>
            <ListItem>Independence Day</ListItem>
            <ListItem>Thanksgiving Day</ListItem>
            <ListItem>Christmas Day</ListItem>
          </UnorderedList>
          <Text mb={6} color="gray.700" lineHeight={1.8}>
            If your service day falls on a listed holiday, we will resume
            service the following week. No refunds will be issued.
          </Text>

          <Heading as="h2" size="md" color="brand.darkBrown" mb={2} mt={8}>
            5. Billing and Payment
          </Heading>
          <Text mb={6} color="gray.700" lineHeight={1.8}>
            Monthly subscription payments are billed on the 1st of each
            month and must be received by the 3rd to avoid service
            interruption. A late fee of $10 may apply. One-time
            cleanings are billed after service and due within 24 hours.
            Accounts unpaid after 30 days may be referred to collections.
          </Text>

          <Heading as="h2" size="md" color="brand.darkBrown" mb={2} mt={8}>
            6. Yard Conditions
          </Heading>
          <Text mb={6} color="gray.700" lineHeight={1.8}>
            Excessive leaves, tall grass, or debris may hinder our ability to
            locate all waste. Maintain your yard regularly; if conditions are
            improved by the next visit, we will address any missed waste.
          </Text>

          <Heading as="h2" size="md" color="brand.darkBrown" mb={2} mt={8}>
            7. Additional Fees
          </Heading>
          <UnorderedList ml={6} mb={6} color="gray.700" spacing={1}>
            <ListItem>Cleaning decks, patios, or concrete – $5 per visit</ListItem>
            <ListItem>Return visits due to access issues – $5</ListItem>
            <ListItem>Waiting time exceeding five minutes – $5 per visit</ListItem>
          </UnorderedList>

          <Heading as="h2" size="md" color="brand.darkBrown" mb={2} mt={8}>
            8. Privacy Policy
          </Heading>
          <Text mb={6} color="gray.700" lineHeight={1.8}>
            We collect and use personal information solely to provide and
            improve our Services. We do not sell or share your information with
            third parties except as necessary to process payments or comply with
            legal obligations.
          </Text>

          <Heading as="h2" size="md" color="brand.darkBrown" mb={2} mt={8}>
            9. Revisions to Terms
          </Heading>
          <Text mb={6} color="gray.700" lineHeight={1.8}>
            We may update these Terms from time to time. Changes will be posted
            on our website and become effective immediately. Continued use of
            our Services constitutes acceptance of any revised Terms.
          </Text>

          <Heading as="h2" size="md" color="brand.darkBrown" mb={2} mt={8}>
            10. Contact Us
          </Heading>
          <Text mb={8} fontWeight="bold" color="brand.darkBrown">
            info@poopatrolcleaning.com
          </Text>

          <Text fontWeight="bold" color="brand.darkBrown" textAlign="center" pt={4} borderTop="1px solid" borderColor="gray.200">
            Thank you for choosing Poo Patrol — We Scoop, You Relax!
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default React.memo(Terms);
