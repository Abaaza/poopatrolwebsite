import React from "react";
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Text,
  extendTheme,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

// 1) RE-USE OR EXTEND YOUR EXISTING THEME
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
          maxW="container.md"
          bg="white"
          p={{ base: 6, md: 10 }}
          borderRadius="md"
          boxShadow="md"
        >
          {/* MAIN HEADING */}
          <Heading as="h1" size="xl" color="brand.darkBrown" mb={4}>
            Poo Patrol — Terms of Service
          </Heading>
          <Text fontSize="sm" color="gray.500" mb={6}>
            Revised 2/12/24
          </Text>

          {/* INTRO */}
          <Text mb={4}>
            Welcome to Poo Patrol — where we handle the doo, so you don’t have
            to! These tail-waggin&apos; Terms of Service (&quot;Terms&quot;) lay
            out how we keep your yard clean, fresh, and paws-itively poop-free.
            By signing up for our Services, you&apos;re giving us the green
            light to scoop the poop, one paw-print at a time.
          </Text>

          {/* 1. What We Do (and Doo-Doo Best) */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            1. What We Do (and Doo-Doo Best)
          </Heading>
          <Text mb={4}>
            Poo Patrol fetches up dog waste from both residential and commercial
            properties with the following offerings:
          </Text>
          <UnorderedList mb={4} ml={6}>
            <ListItem>One-Time “Oh No!” Cleanups</ListItem>
            <ListItem>
              Weekly &amp; Bi-Weekly “Keep It Fresh” Cleanings
            </ListItem>
            <ListItem>
              Monthly “Tail-Waggin’ Clean” Subscription Packages
            </ListItem>
          </UnorderedList>
          <Text mb={6}>
            Yards up to 1/8 acre are included in our base pricing. Bigger spaces
            may require a bit more scratch (additional fees).
          </Text>

          {/* 2. Gimme Shelter (and Access!) */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            2. Gimme Shelter (and Access!)
          </Heading>
          <Text mb={6}>
            Your pups might be protective, but we need safe, open access to do
            our job. If we encounter locked gates, frosty latches, or aggressive
            doggos, we’ll have to skip that visit — but charges will still
            apply. Need us to come back? A $5 tail-chasing fee applies. Don’t
            worry — all the doo will be scooped up during your next scheduled
            cleanup!
          </Text>

          {/* 3. Rain, Snow, or Dog Day Afternoon */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            3. Rain, Snow, or Dog Day Afternoon
          </Heading>
          <Text mb={6}>
            We’re out there in the drizzle and cold — but if the weather’s ruff
            (lightning, snow piles, or heatwaves), we’ll have to skip for
            safety. No refunds for missed visits; we’ll catch all the extra poop
            next time around.
          </Text>

          {/* 4. Holiday Howl-idays */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            4. Holiday Howl-idays
          </Heading>
          <Text mb={4}>
            We give our scoopers a break on the following holidays:
          </Text>
          <UnorderedList mb={4} ml={6}>
            <ListItem>New Year’s Day</ListItem>
            <ListItem>Independence Day</ListItem>
            <ListItem>Thanksgiving Day</ListItem>
            <ListItem>Christmas Day</ListItem>
          </UnorderedList>
          <Text mb={6}>
            If your regular cleanup day lands on one of these, we’ll resume the
            next week — no refunds, but all the same poop gets scooped.
          </Text>

          {/* 5. Payment Time (Time to Fetch the Bill) */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            5. Payment Time (Time to Fetch the Bill)
          </Heading>
          <Text mb={2}>
            <strong>Subscriptions:</strong> Billed monthly on the 1st. Pay by
            the 3rd to avoid a bark of interruption.
          </Text>
          <Text mb={2}>
            <strong>One-Time Cleanups:</strong> Billed after service and due
            within 24 hours.
          </Text>
          <Text mb={2}>
            <strong>Late Payments:</strong> $10 fee. If an account gets 30+ days
            behind, we may paw it over to collections.
          </Text>
          <Text mb={6}>
            Woof at us if you need a different payment arrangement before your
            scoop day!
          </Text>

          {/* 6. Yard Shenanigans */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            6. Yard Shenanigans
          </Heading>
          <Text mb={6}>
            We’ll do our best to find every little landmine, but if your grass
            is wild, leaves are piled, or your yard’s a jungle — we might miss a
            few. Keep things tidy, and we’ll get everything cleaned up on our
            next visit. Spot a miss? Give us a woof!
          </Text>

          {/* 7. Extra Charges for Extra Ruff Work */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            7. Extra Charges for Extra Ruff Work
          </Heading>
          <UnorderedList mb={6} ml={6}>
            <ListItem>Decks, patios, concrete cleanup: $5/visit</ListItem>
            <ListItem>Return visits due to access issues: $5</ListItem>
            <ListItem>Waiting over 10 minutes: $5</ListItem>
          </UnorderedList>

          {/* 8. Privacy – We Don’t Snoof Your Stuff */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            8. Privacy – We Don’t Snoof Your Stuff
          </Heading>
          <Text mb={6}>
            Your info is safe with us. We only collect what we need to provide
            service and will never sell or share your data unless it’s needed to
            process payments or required by law.
          </Text>

          {/* 9. We May Update These Rules */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            9. We May Update These Rules
          </Heading>
          <Text mb={6}>
            Sometimes we need to tweak these Terms like a chew toy. Updates will
            be posted on our website and effective immediately. Using our
            Services means you accept any changes.
          </Text>

          {/* 10. Woof at Us! */}
          <Heading as="h2" size="md" color="brand.darkBrown" mb={2}>
            10. Woof at Us!
          </Heading>
          <Text mb={4}>
            Have questions? Something smell funny (and not in the yard)? Reach
            out anytime:
          </Text>
          <Text mb={8} fontWeight="bold">
            📧 Poopatrolcleanup@gmail.com
          </Text>

          {/* SIGN-OFF */}
          <Text fontWeight="bold">
            Thanks for choosing Poo Patrol — where we doo the dirty work, so you
            can kick back and enjoy your yard! 🐾
          </Text>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Terms;
