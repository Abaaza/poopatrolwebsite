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

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

function fetchReviewsFromPlace(
  service: google.maps.places.PlacesService,
  placeId: string,
  setReviews: (reviews: Review[]) => void
) {
  service.getDetails(
    { placeId, fields: ["reviews"] },
    (place: any, status: google.maps.places.PlacesServiceStatus) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
        const fetched = place.reviews.map((r: any) => ({
          author_name: r.author_name,
          rating: r.rating,
          text: r.text,
          relative_time_description: r.relative_time_description,
          profile_photo_url: r.profile_photo_url,
        }));
        setReviews(fetched);
        sessionStorage.setItem("poopatrol_reviews", JSON.stringify(fetched));
      }
    }
  );
}

const GoogleReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Fetch reviews from Google Places API
  useEffect(() => {
    if (!API_KEY) return;

    // Check sessionStorage cache first
    const cached = sessionStorage.getItem("poopatrol_reviews");
    if (cached) {
      try {
        setReviews(JSON.parse(cached));
        return;
      } catch {
        // ignore bad cache
      }
    }

    // Load Google Maps JS API and fetch reviews
    const existingScript = document.querySelector(
      'script[src*="maps.googleapis.com"]'
    );
    const init = () => {
      const service = new google.maps.places.PlacesService(
        document.createElement("div")
      );
      // Use findPlaceFromQuery to get the correct Place ID dynamically
      service.findPlaceFromQuery(
        {
          query: "Poopatrol 17646 Lassen St Northridge CA",
          fields: ["place_id"],
        },
        (results: any, status: google.maps.places.PlacesServiceStatus) => {
          if (
            status === google.maps.places.PlacesServiceStatus.OK &&
            results?.[0]?.place_id
          ) {
            fetchReviewsFromPlace(service, results[0].place_id, setReviews);
          }
        }
      );
    };

    if (existingScript || (window as any).google?.maps) {
      init();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
      script.async = true;
      script.onload = init;
      document.head.appendChild(script);
    }
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || reviews.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, reviews.length]);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      setIsAutoPlaying(false);
      // Resume auto-play after 10 seconds of inactivity
      setTimeout(() => setIsAutoPlaying(true), 10000);
    },
    []
  );

  const goNext = useCallback(() => {
    goTo((currentIndex + 1) % reviews.length);
  }, [currentIndex, reviews.length, goTo]);

  const goPrev = useCallback(() => {
    goTo((currentIndex - 1 + reviews.length) % reviews.length);
  }, [currentIndex, reviews.length, goTo]);

  // ──── Fallback: No API key or no reviews fetched ────
  if (reviews.length === 0) {
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
              See What Our Customers Say on Google
            </Heading>

            <Box
              bg="white"
              rounded="2xl"
              shadow="xl"
              p={{ base: 8, md: 12 }}
              maxW="600px"
              w="full"
              border="1px solid"
              borderColor="gray.100"
              transition="all 0.3s ease"
              _hover={{ shadow: "2xl", transform: "translateY(-4px)" }}
            >
              <VStack spacing={5}>
                <Icon as={FaGoogle} w={10} h={10} color="#4285F4" />
                <HStack spacing={2}>
                  <Text
                    fontSize="5xl"
                    fontWeight="800"
                    color="brand.darkBrown"
                    lineHeight={1}
                  >
                    5.0
                  </Text>
                  <VStack spacing={0} align="start">
                    <HStack spacing={1}>
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          as={FaStar}
                          color="brand.golden"
                          w={5}
                          h={5}
                        />
                      ))}
                    </HStack>
                    <Text fontSize="sm" color="gray.500" fontWeight="medium">
                      on Google Maps
                    </Text>
                  </VStack>
                </HStack>
                <Text
                  color="gray.600"
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight={1.7}
                >
                  Our customers love us! Check out our reviews on Google to see
                  why pet owners across the San Fernando Valley trust Poo Patrol
                  for their yard cleanup needs.
                </Text>
                <HStack spacing={4} pt={2} flexWrap="wrap" justify="center">
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
                    Read Our Reviews
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
                    Review Us on Google
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    );
  }

  // ──── Main: Review Carousel ────
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
          </HStack>

          {/* Review Card with Navigation */}
          <Box position="relative" w="full" maxW="700px">
            {/* Navigation Arrows */}
            {reviews.length > 1 && (
              <>
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
              </>
            )}

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
                noOfLines={5}
              >
                "{review.text}"
              </Text>

              {/* Reviewer Info */}
              <Flex align="center" gap={3}>
                {review.profile_photo_url ? (
                  <Box
                    as="img"
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    w={10}
                    h={10}
                    rounded="full"
                    objectFit="cover"
                  />
                ) : (
                  <Flex
                    w={10}
                    h={10}
                    bg="brand.brightGreen"
                    rounded="full"
                    align="center"
                    justify="center"
                  >
                    <Text color="white" fontWeight="bold" fontSize="sm">
                      {review.author_name.charAt(0)}
                    </Text>
                  </Flex>
                )}
                <Box textAlign="left">
                  <Text
                    fontWeight="bold"
                    color="brand.darkBrown"
                    fontSize="sm"
                  >
                    {review.author_name}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    {review.relative_time_description}
                  </Text>
                </Box>
              </Flex>
            </Box>

            {/* Dot Indicators */}
            {reviews.length > 1 && (
              <HStack spacing={2} justify="center" mt={5}>
                {reviews.map((_, i) => (
                  <Box
                    key={i}
                    w={i === currentIndex ? 8 : 3}
                    h={3}
                    rounded="full"
                    bg={
                      i === currentIndex ? "brand.brightGreen" : "gray.300"
                    }
                    cursor="pointer"
                    transition="all 0.3s ease"
                    onClick={() => goTo(i)}
                  />
                ))}
              </HStack>
            )}
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
