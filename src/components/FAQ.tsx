import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Link,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import SEO from "./SEO";

const faqItems = [
  {
    question: "What areas do you service?",
    answer:
      "We proudly serve the San Fernando Valley and surrounding areas including Northridge, Granada Hills, Chatsworth, Porter Ranch, Encino, Tarzana, Woodland Hills, Reseda, Canoga Park, Winnetka, Van Nuys, and Sherman Oaks. Not sure if you're in our zone? Just reach out and we'll let you know!",
  },
  {
    question: "How does your service work?",
    answer:
      "It's simple! Choose a service plan (weekly, bi-weekly, one-time, or custom), and our trained team will come by on your scheduled day(s) to scoop the poop so you don't have to. We leave your yard clean and odor-free — every time.",
  },
  {
    question: "Do I need to be home during the visit?",
    answer:
      "Nope! As long as we have access to your yard (and your furry friend is secured), you don't need to be there. We also send you a photo of your gate closed after service for peace of mind.",
  },
  {
    question: "What do you do with the waste?",
    answer:
      "We securely double-bag all waste and dispose of it in your household trash bin. To keep your bin smelling fresh, we also deodorize it once a month at no extra charge.",
  },
  {
    question: "Do you offer one-time cleanups or just recurring plans?",
    answer:
      "We offer both! Whether it's a one-time spring cleanup, a party prep sweep, or regular weekly visits, we've got a plan that works for you.",
  },
  {
    question: "Is it safe for pets and kids after service?",
    answer:
      "Absolutely! All products we use are eco-friendly and safe for pets and children. Our optional deodorizing and sanitizing spritz is also completely pet-safe.",
  },
  {
    question: "How do I sign up or get a quote?",
    answer:
      "Visit our Book Now page to fill out a quick quote form, or call us directly at 818-877-3304. We'll get you scooped and scheduled in no time!",
  },
  {
    question: "Do you service commercial properties?",
    answer:
      "Yes! We offer commercial pet waste management for HOAs, apartment complexes, dog parks, business campuses, and more. Contact us at info@poopatrolcleaning.com for custom commercial pricing.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
};

const FAQ: React.FC = () => {
  return (
    <>
      <SEO
        title="Frequently Asked Questions – Dog Waste Removal"
        description="Got questions about dog waste removal? Find answers about our service areas, pricing, scheduling, safety, and more. Serving Northridge and the San Fernando Valley."
        canonical="/faq"
        schema={faqSchema}
      />

      {/* Hero Banner */}
      <Box
        bg="brand.brightGreen"
        py={{ base: 16, md: 24 }}
        textAlign="center"
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bg: "linear-gradient(135deg, rgba(139,196,46,0.9) 0%, rgba(74,151,32,0.95) 100%)",
          zIndex: 0,
        }}
      >
        <Container maxW="5xl" position="relative" zIndex={1}>
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            color="white"
            mb={4}
            textShadow="0 2px 4px rgba(0,0,0,0.2)"
          >
            Frequently Asked Questions
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="whiteAlpha.900" maxW="550px" mx="auto">
            Everything you need to know about our dog waste removal services.
          </Text>
        </Container>
      </Box>

      {/* FAQ Accordion */}
      <Box as="section" py={{ base: 14, md: 20 }} bg="white">
        <Container maxW="4xl">
          <Accordion allowMultiple>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                border="1px solid"
                borderColor="gray.100"
                rounded="xl"
                mb={4}
                overflow="hidden"
                shadow="sm"
              >
                <AccordionButton
                  py={5}
                  px={6}
                  _hover={{ bg: "green.50" }}
                  _expanded={{ bg: "green.50" }}
                >
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} color="brand.darkBrown">
                      {item.question}
                    </Text>
                  </Box>
                  <AccordionIcon color="brand.brightGreen" />
                </AccordionButton>
                <AccordionPanel pb={5} px={6}>
                  <Text color="gray.700" lineHeight={1.8}>
                    {item.answer}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        as="section"
        py={{ base: 14, md: 20 }}
        bg="brand.beige"
        textAlign="center"
      >
        <Container maxW="4xl">
          <Heading as="h2" size={{ base: "lg", md: "xl" }} color="brand.darkBrown" mb={4}>
            Still Have Questions?
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={6}>
            Reach out to us directly or book a free quote — we're happy to help!
          </Text>
          <VStack spacing={4}>
            <Button
              as={RouterLink}
              to="/book-now"
              bg="brand.brightGreen"
              color="white"
              size="lg"
              px={10}
              transition="all 0.3s ease"
              _hover={{ bg: "brand.darkGreen", transform: "translateY(-2px)" }}
            >
              Get a Free Quote
            </Button>
            <Text color="gray.500">
              Or call us at{" "}
              <Link href="tel:8188773304" color="brand.golden" fontWeight="bold">
                818-877-3304
              </Link>
            </Text>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default React.memo(FAQ);
