import React, { useEffect, useState, useCallback } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Button,
  Flex,
} from "@chakra-ui/react";
import {
  FaStar,
  FaGoogle,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Poopatrol/@34.2500741,-118.5220439,570m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa8454316eaccb7c9:0x5514a013f85d05bb!8m2!3d34.2500741!4d-118.5194636!16s%2Fg%2F11xdtch__p";

const reviews = [
  {
    name: "Carly",
    rating: 5,
    time: "4 weeks ago",
    text: "Poo Patrol has been providing me with consistently high-quality service, and I couldn't be happier. They are reliable, thorough, and clearly take pride in their work. My yard is always spotless, and the service is totally hassle-free. Highly recommend Poo Patrol to anyone looking for dependable, top-notch service!",
  },
  {
    name: "Johanna Padilla",
    rating: 5,
    time: "a month ago",
    text: "He's been coming every week for a few months now and I am so grateful for him. It's affordable, necessary, and I recommend him if you don't want to take care of the dirty side of pet parenting!",
  },
  {
    name: "Phil Rich",
    rating: 5,
    time: "4 weeks ago",
    text: "The dog service was very helpful and convenient. Poopatrol did a great job and would recommend them.",
  },
  {
    name: "saba Sadatzadeh",
    rating: 5,
    time: "8 months ago",
    text: "Poopatrol did an amazing job! They were on time, professional, and left my yard spotless. Super convenient service, HIGHLY RECOMMEND for any dog owners and my dog also definitely enjoys the clean yard!",
  },
  {
    name: "Neisha Pereira",
    rating: 5,
    time: "5 months ago",
    text: "Our backyard was a mess thanks to some raccoons. Shareef was quick to respond and did a great job cleaning the area.",
  },
  {
    name: "michael gluck",
    rating: 5,
    time: "a month ago",
    text: "Sherif does a fantastic job. Fast and efficient!",
  },
  {
    name: "Ahmed Abaza",
    rating: 5,
    time: "8 months ago",
    text: "Really fast service, showed up when they said they would, cleaned up everything up quick, reliable folks - no hassles.",
  },
];

const GoogleReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const goNext = useCallback(() => {
    goTo((currentIndex + 1) % reviews.length);
  }, [currentIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((currentIndex - 1 + reviews.length) % reviews.length);
  }, [currentIndex, goTo]);

  const review = reviews[currentIndex];

  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="5xl">
        <VStack spacing={6} textAlign="center">
          <Text
            color="brand.brightGreen"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wider"
            fontSize="sm"
          >
            Customer Reviews
          </Text>
          <Heading
            as="h2"
            size={{ base: "xl", md: "2xl" }}
            color="brand.darkBrown"
          >
            What Our Customers Say on Google
          </Heading>

          {/* Rating Summary */}
          <HStack spacing={2}>
            <Icon as={FaGoogle} w={6} h={6} color="#4285F4" />
            <Text fontSize="2xl" fontWeight="800" color="brand.darkBrown">
              5.0
            </Text>
            <HStack spacing={1}>
              {[...Array(5)].map((_, i) => (
                <Icon key={i} as={FaStar} color="brand.golden" w={5} h={5} />
              ))}
            </HStack>
            <Text fontSize="sm" color="gray.500">
              ({reviews.length} reviews)
            </Text>
          </HStack>

          {/* Review Card with Navigation */}
          <Box position="relative" w="full" maxW="700px">
            {/* Navigation Arrows */}
            <Button
              position="absolute"
              left={{ base: -2, md: -14 }}
              top="50%"
              transform="translateY(-50%)"
              onClick={goPrev}
              variant="ghost"
              rounded="full"
              w={10}
              h={10}
              minW={10}
              p={0}
              zIndex={2}
              color="gray.400"
              _hover={{ color: "brand.brightGreen", bg: "green.50" }}
              aria-label="Previous review"
            >
              <Icon as={FaChevronLeft} w={5} h={5} />
            </Button>
            <Button
              position="absolute"
              right={{ base: -2, md: -14 }}
              top="50%"
              transform="translateY(-50%)"
              onClick={goNext}
              variant="ghost"
              rounded="full"
              w={10}
              h={10}
              minW={10}
              p={0}
              zIndex={2}
              color="gray.400"
              _hover={{ color: "brand.brightGreen", bg: "green.50" }}
              aria-label="Next review"
            >
              <Icon as={FaChevronRight} w={5} h={5} />
            </Button>

            {/* Review Card */}
            <Box
              bg="white"
              rounded="2xl"
              shadow="xl"
              p={{ base: 8, md: 10 }}
              mx={{ base: 6, md: 0 }}
              border="1px solid"
              borderColor="gray.100"
              position="relative"
              minH="220px"
              transition="all 0.3s ease"
              _hover={{ shadow: "2xl" }}
            >
              <Icon
                as={FaQuoteLeft}
                w={8}
                h={8}
                color="brand.lightGreen"
                position="absolute"
                top={4}
                right={6}
                opacity={0.4}
              />

              {/* Stars */}
              <HStack spacing={1} mb={4}>
                {[...Array(review.rating)].map((_, i) => (
                  <Icon key={i} as={FaStar} color="brand.golden" w={5} h={5} />
                ))}
              </HStack>

              {/* Review Text */}
              <Text
                color="gray.700"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight={1.8}
                fontStyle="italic"
                mb={6}
              >
                "{review.text}"
              </Text>

              {/* Reviewer Info */}
              <Flex align="center" gap={3}>
                <Flex
                  w={10}
                  h={10}
                  bg="brand.brightGreen"
                  rounded="full"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Text color="white" fontWeight="bold" fontSize="sm">
                    {review.name.charAt(0).toUpperCase()}
                  </Text>
                </Flex>
                <Box textAlign="left">
                  <Text fontWeight="bold" color="brand.darkBrown" fontSize="sm">
                    {review.name}
                  </Text>
                  <HStack spacing={1}>
                    <Icon as={FaGoogle} w={3} h={3} color="#4285F4" />
                    <Text fontSize="xs" color="gray.500">
                      {review.time}
                    </Text>
                  </HStack>
                </Box>
              </Flex>
            </Box>

            {/* Dot Indicators */}
            <HStack spacing={2} justify="center" mt={5}>
              {reviews.map((_, i) => (
                <Box
                  key={i}
                  w={i === currentIndex ? 8 : 3}
                  h={3}
                  rounded="full"
                  bg={i === currentIndex ? "brand.brightGreen" : "gray.300"}
                  cursor="pointer"
                  transition="all 0.3s ease"
                  onClick={() => goTo(i)}
                />
              ))}
            </HStack>
          </Box>

          {/* CTA Buttons */}
          <HStack spacing={4} pt={4} flexWrap="wrap" justify="center">
            <Button
              as="a"
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              bg="brand.brightGreen"
              color="white"
              size="lg"
              px={8}
              fontWeight="bold"
              leftIcon={<FaGoogle />}
              rightIcon={<FaExternalLinkAlt />}
              transition="all 0.3s ease"
              _hover={{
                bg: "brand.darkGreen",
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              See All Reviews
            </Button>
            <Button
              as="a"
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              borderColor="brand.golden"
              color="brand.golden"
              size="lg"
              px={8}
              fontWeight="bold"
              leftIcon={<FaStar />}
              transition="all 0.3s ease"
              _hover={{
                bg: "brand.golden",
                color: "black",
                transform: "translateY(-2px)",
              }}
            >
              Write a Review
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default GoogleReviews;
