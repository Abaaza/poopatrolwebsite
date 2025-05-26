/* FreeQuotePage.tsx — FULL (≈640 lines) — EmailJS + submit‑lock + navigate after success */
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Collapse,
  Fade,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Image,
  Stack,
  Text,
  Textarea,
  useToast,
  VStack,
  Checkbox,
  RadioGroup,
  Radio,
  Divider,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

/* ────────────────────────────────────────────── */
/* ➊  ZIP codes we currently serve               */
/* ────────────────────────────────────────────── */
const SERVED_ZIPS = [
  "91302","91303","91304","91306","91307","91311","91316","91324","91325","91326",
  "91330","91331","91335","91340","91342","91343","91344","91345","91352","91356",
  "91364","91367","91401","91402","91403","91405","91406","91411","91423","91436",
  "91501","91502","91504","91505","91506","91601","91602","91604","91605","91606",
  "91607","91608","91040","91042",
];

/* ───────────────── EmailJS IDs (hard‑coded) ───────────────── */
const SERVICE_ID  = "service_zkzkbq4";
const ADMIN_TEMPLATE_ID    = "template_mor7u1k";   // to info@poopatrolcleaning.com
const CUSTOMER_TEMPLATE_ID = "template_hvrekp9";   // thank-you email
const PUBLIC_KEY  = "OONcQSxOUecXYGY0d";

/* ─────────────── types ─────────────── */
interface CleanupNotifications {
  offSchedule: boolean;
  onTheWay: boolean;
  completed: boolean;
}

interface FormData {
  /* Step‑1 */
  zipCode: string;
  couponCode: string;
  lastCleanup: string;
  yardSize: string;
  numDogs: number;
  frequency: string;
  /* Step‑2 */
  firstName: string;
  lastName: string;
  email: string;
  homeAddress: string;
  cellPhone: string;
  city: string;
  state: string;
  dogName1: string;
  dogName2: string;
  dogName3: string;
  dogName4: string;
  dogAggression1: number;
  dogAggression2: number;
  dogAggression3: number;
  dogAggression4: number;
  gateLocation: string;
  cleanupNotifications: CleanupNotifications;
  notificationType: string;
  heardAboutUs: string;
  additionalComments: string;
  additionalServices: string[];
  agreeToTerms: boolean;
}

const BookNow: React.FC = () => {
  const toast = useToast();
  const navigate = useNavigate();

  /* ───────────── state ───────────── */
  const [estimateFetched, setEstimateFetched] = useState(false);
  const [estimate, setEstimate] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [reference, setReference] = useState<string>("");


  const initialFormData: FormData = {
    /* Step‑1 */
    zipCode: "",
    couponCode: "",
    lastCleanup: "",
    yardSize: "",
    numDogs: 1,
    frequency: "once-a-week",
    /* Step‑2 */
    firstName: "",
    lastName: "",
    email: "",
    homeAddress: "",
    cellPhone: "",
    city: "",
    state: "California",
    dogName1: "",
    dogName2: "",
    dogName3: "",
    dogName4: "",
    dogAggression1: 1,
    dogAggression2: 1,
    dogAggression3: 1,
    dogAggression4: 1,
    gateLocation: "",
    cleanupNotifications: {
      offSchedule: false,
      onTheWay: false,
      completed: false,
    },
    notificationType: "",
    heardAboutUs: "",
    additionalComments: "",
    additionalServices: [],
    agreeToTerms: false,
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const SUBSCRIPTION_PRICES: Record<string, Record<number, number>> = {
  "once-a-week":   { 1: 20.0, 2: 22.5, 3: 25.0, 4: 27.5 },   // 4 visits /-mo
  "bi-weekly":     { 1: 30.0, 2: 33.75, 3: 37.5, 4: 41.25 }, // 2 visits /-mo
  "once-a-month":  { 1: 45.0, 2: 50.63, 3: 56.25, 4: 61.88 },// 1 visit  /-mo
  "twice-a-week":  { 1: 18.0, 2: 20.25, 3: 22.5, 4: 24.75 }, // 8 visits /-mo
};

const ONE_TIME_PRICES: Record<number, number> = {
  1: 50,
  2: 65,
  3: 80,
  4: 95, // 4+ dogs can be handled with a “starts-at” note
};

const ADDITIONAL_SERVICE_PRICES: Record<string, number> = {
  "weekly-deodorizing": 20.63,
  "biweekly-deodorizing": 11.45,
  "monthly-deodorizing": 6.86,
  "sanitizing-service": 10,
};


  /* ───────── helpers ───────── */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNumberChange = (val: string, field: keyof FormData) =>
    setFormData((prev) => ({ ...prev, [field]: Number(val) }));

  const toggleNotification = (field: keyof CleanupNotifications) =>
    setFormData((prev) => ({
      ...prev,
      cleanupNotifications: {
        ...prev.cleanupNotifications,
        [field]: !prev.cleanupNotifications[field],
      },
    }));
  const handleDeodorizingChange = (value: string) => {
    let newServices: string[] = [];
    setFormData((prev) => {
      const withoutDeo = prev.additionalServices.filter(
        (s) => !s.includes("deodorizing")
      );
      if (prev.additionalServices.includes(value)) {
        newServices = [...withoutDeo];
      } else if (value) {
        newServices = [...withoutDeo, value];
      } else {
        newServices = [...withoutDeo];
      }
      return { ...prev, additionalServices: newServices };
    });
    if (estimateFetched) setEstimate(calculateEstimate(newServices));
  };

  const handleSanitizingChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = e.target.checked;
    let newServices: string[] = [];
    setFormData((prev) => {
      const without = prev.additionalServices.filter(
        (s) => s !== "sanitizing-service"
      );
      newServices = checked ? [...without, "sanitizing-service"] : without;
      return { ...prev, additionalServices: newServices };
    });
    if (estimateFetched) setEstimate(calculateEstimate(newServices));
  };

  const handleStartOver = () => {
    setFormData(initialFormData);
    setEstimateFetched(false);
    setEstimate("");
    setErrorMsg("");
  };

  useEffect(() => {
    if (estimateFetched) setEstimate(calculateEstimate());
  }, [formData.additionalServices]);

const calculateEstimate = (
  services: string[] = formData.additionalServices
) => {
  const dogs = Math.min(formData.numDogs, 4); // cap at 4 for the table
  let price = 0;

  if (formData.frequency === "one-time") {
    price = ONE_TIME_PRICES[dogs];
    // optional yard-size bump only for 4+ dogs:
    if (dogs === 4 && formData.yardSize === "large") price += 20;
  } else {
    price = SUBSCRIPTION_PRICES[formData.frequency][dogs];
  }

  let addOn = 0;
  services.forEach((s) => (addOn += ADDITIONAL_SERVICE_PRICES[s] || 0));

  let total = price + addOn;
  if (formData.couponCode.trim().toUpperCase() === "PROMO10") {
    total *= 0.9;
  }

  return `$${total.toFixed(2)}`;
};  /* ────────────────────────────────────────────── */
  /* ➋  “Get Estimate” click                       */
  /* ────────────────────────────────────────────── */
  const handleGetEstimate = () => {
    const zip = formData.zipCode.trim();
    if (!SERVED_ZIPS.includes(zip)) {
      setEstimate("");
      setErrorMsg("Sorry, we don’t serve this area yet. Enter a ZIP code in our service area or check back as we expand.");
      setEstimateFetched(true);
      return;
    }
    const coupon = formData.couponCode.trim().toUpperCase();
    if (coupon && coupon !== "PROMO10") {
      setEstimate("");
      setErrorMsg("Sorry, invalid promo code.");
      setEstimateFetched(true);
      return;
    }
    setErrorMsg("");
    setEstimate(calculateEstimate());
    setEstimateFetched(true);
  };

  /* ────────────────────────────────────────────── */
  /* ➍  Final submit → EmailJS                      */
  /* ────────────────────────────────────────────── */
const handleFinalSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (submitting) return;
  setSubmitting(true);

  const ref = "POO-" + Math.floor(100000 + Math.random() * 900000);
  setReference(ref);


  const templateParams = {
    ...formData,
    estimate,
    reference: ref,
    additionalServices: formData.additionalServices.join(", "),
    cleanupNotifications: Object.entries(formData.cleanupNotifications)
      .filter(([_, v]) => v)
      .map(([k]) => k)
      .join(", "),
    date: new Date().toLocaleString(),
  };

  try {
    // 1️⃣ internal email
    await emailjs.send(
      SERVICE_ID,
      ADMIN_TEMPLATE_ID,
      templateParams,
      { publicKey: PUBLIC_KEY }
    );

    // 2️⃣ customer confirmation
    await emailjs.send(
      SERVICE_ID,
      CUSTOMER_TEMPLATE_ID,
      templateParams,
      { publicKey: PUBLIC_KEY }
    );

    toast({
      title: "Success!",
      description: "We received your request and emailed a confirmation.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });

    navigate("/checkout", { state: { reference: ref } });   // only after both succeed

    // reset Step-2 fields …
    /* (keep your existing reset block) */

  } catch (err) {
    console.error(err);
    toast({
      title: "Uh-oh!",
      description: "Something went wrong sending your request. Please try again later.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  } finally {
    setSubmitting(false);
  }
};

  const readOnlyStep1 = estimateFetched;
  /* ───────────── render ───────────── */
  return (
    <Box minH="100vh" w="full" py={10} px={4} bg="gray.50">
      <Box maxW="6xl" mx="auto">
        {/* ───────────── STEP‑1 ───────────── */}
        <Box
          bg="white"
          p={{ base: 6, md: 8 }}
          rounded="lg"
          boxShadow="2xl"
          mb={6}
          position="relative"
          _hover={{ transform: "translateY(-2px)" }}
        >
          <Heading size="lg" mb={2}>Book Now</Heading>
          <Text color="gray.600" mb={6}>
            Fill out the first section to see an instant estimate. Once you click “Get Estimate,” a second section will appear for final sign‑up!
          </Text>

          <VStack align="start" spacing={6}>
            {/* ZIP + coupon */}
            <Stack direction={{ base: "column", md: "row" }} w="full" spacing={4}>
              <FormControl isRequired>
                <FormLabel>Zip Code</FormLabel>
                <Input
                  name="zipCode"
                  placeholder="e.g. 91325"
                  value={formData.zipCode}
                  onChange={handleChange}
                  isReadOnly={readOnlyStep1}
                  borderColor="gray.300"
                  focusBorderColor="brand.golden"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Coupon Code</FormLabel>
                <Input
                  name="couponCode"
                  placeholder="(Optional)"
                  value={formData.couponCode}
                  onChange={handleChange}
                  isReadOnly={readOnlyStep1}
                  borderColor="gray.300"
                  focusBorderColor="brand.golden"
                />
              </FormControl>
            </Stack>

            {/* Last cleanup + yard size */}
            <Stack direction={{ base: "column", md: "row" }} w="full" spacing={4}>


              <FormControl isRequired>
                <FormLabel>Yard Size</FormLabel>
                <Select
                  name="yardSize"
                  value={formData.yardSize}
                  onChange={handleChange}
                  isDisabled={readOnlyStep1}
                  borderColor="gray.300"
                  focusBorderColor="brand.golden"
                >
                  <option value="">Select size…</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </Select>
              </FormControl>
            </Stack>

            {/* Dogs + frequency */}
            <Stack direction={{ base: "column", md: "row" }} w="full" spacing={4}>
              <FormControl isRequired>
                <FormLabel>How Many Dogs?</FormLabel>
                <NumberInput
                  min={1}
                  max={10}
                  value={formData.numDogs}
                  onChange={(val) => handleNumberChange(val, "numDogs")}
                  isDisabled={readOnlyStep1}
                  borderColor="gray.300"
                  focusBorderColor="brand.golden"
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl isRequired>
                <FormLabel >Cleanup Frequency</FormLabel>
                <Select
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  isDisabled={readOnlyStep1}
                  borderColor="gray.300"
                  focusBorderColor="brand.golden"
                >
                  <option value="once-a-week">Once A Week</option>
                  
                  <option value="bi-weekly">Bi‑Weekly</option>
                  <option value="once-a-month">Once A Month</option>
                  <option value="one-time">One Time</option>
                </Select>
              </FormControl>
            </Stack>

            {/* Button OR result */}
            {!estimateFetched ? (
              <Button
                colorScheme="green"
                onClick={handleGetEstimate}
                w="full"
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
              >
                Get Estimate
              </Button>
            ) : (
                            <>
              <Box
                p={4}
                bg={errorMsg ? "red.50" : "brand.lightGreen"}
                rounded="md"
                shadow="lg"
                w="80%"
                textAlign="center"
                alignSelf="center"
                position="relative"
              >
                <Image
                  src="https://s3.me-south-1.amazonaws.com/www.wall-masters.com/images/1232416546546464646.png"
                  alt="Icon"
                  boxSize="90px"
                  position="relative"
                  left="50%"
                  transform="translateX(-50%)"
                />

                {errorMsg ? (
                  <Text fontSize="lg" fontWeight="semibold" color="red.700" mt={10}>
                    {errorMsg}
                  </Text>
                ) : (
                  <>
                    <Text fontSize="2xl" fontWeight="bold" color="brand.darkBrown" mt={10}>
                      {formData.frequency === "one-time" ? `Price: ${estimate}` : `Estimated Price: ${estimate} / Week`}
                    </Text>
                      {formData.couponCode.trim().toUpperCase() === "PROMO10" && (
                      <Text fontSize="md" color="green.600" fontWeight="semibold" mt={2}>
                        Coupon Code Applied, 10% OFF
                      </Text>
                    )}
                    <Text fontSize="sm" mt={4}>
                      Initial cleanups start at $20 for one dog, $35 for two, $50 for three, and $60 for four dogs, based on a standard 1/8-acre yard. One promotion per customer. Discounts do not apply to one-time cleanups. New monthly subscribers receive their second cleanup free — offer valid for new customers only.
                    </Text>
                    <Text fontSize="md" fontWeight="medium" mt={4}>Continue to Step 2 below</Text>

                  </>
                )}
              </Box>
              <Button
                mt={4}
                w="full"
                onClick={handleStartOver}
              >
                Reset
              </Button>
            </>
            )}
          </VStack>
        </Box>

        {/* ───────────── STEP‑2 ───────────── */}
        <Collapse in={estimateFetched && !errorMsg} animateOpacity>
          {estimateFetched && !errorMsg && (
            <Box as="form" onSubmit={handleFinalSubmit} bg="white" p={{ base: 6, md: 8 }} rounded="lg" boxShadow="2xl" _hover={{ transform: "translateY(-2px)" }}>
              <Fade in={estimateFetched}>
                <Heading size="md" mb={2}>Complete Your Sign‑Up</Heading>
                <Text fontSize="sm" color="gray.600" mb={4}>Fill out the details below to finalize your service request.</Text>
                <Divider mb={6} />
            <VStack spacing={5} align="stretch">


                  {/* Names */}
                  <Stack direction={{ base: "column", md: "row" }} w="full">
                    <FormControl isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        borderColor="gray.300"
                        focusBorderColor="brand.golden"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        borderColor="gray.300"
                        focusBorderColor="brand.golden"
                      />
                    </FormControl>
                  </Stack>

                  <FormControl isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      borderColor="gray.300"
                      focusBorderColor="brand.golden"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Home Address</FormLabel>
                    <Input
                      name="homeAddress"
                      value={formData.homeAddress}
                      onChange={handleChange}
                      borderColor="gray.300"
                      focusBorderColor="brand.golden"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Cell Phone Number</FormLabel>
                    <Input
                      name="cellPhone"
                      value={formData.cellPhone}
                      onChange={handleChange}
                      borderColor="gray.300"
                      focusBorderColor="brand.golden"
                    />
                    <Text fontSize="xs" mt={1}>
                      ✔ By providing your phone number, you agree to receive service‑related text messages from Poopatrol. Message and data rates may apply. Reply “STOP” to opt out.
                    </Text>
                  </FormControl>

                  <Stack direction={{ base: "column", md: "row" }} w="full">
                    <FormControl isRequired>
                      <FormLabel>City</FormLabel>
                      <Input
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        borderColor="gray.300"
                        focusBorderColor="brand.golden"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>State</FormLabel>
                      <Text border="1px solid" borderColor="gray.300" borderRadius="md" p={2} bg="gray.50">California</Text>
                    </FormControl>
                  </Stack>

                 {Array.from({ length: Math.min(formData.numDogs, 4) }, (_, i) => (
                    <Stack direction={{ base: "column", md: "row" }} w="full" key={i} align="center">
                      <FormControl isRequired>
                        <FormLabel>Dog's Name #{i + 1}</FormLabel>
                        <Input
                          name={`dogName${i + 1}`}
                          value={(formData as any)[`dogName${i + 1}`]}
                          onChange={handleChange}
                          borderColor="gray.300"
                          focusBorderColor="brand.golden"
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Dog Aggression Level (10 = aggressive)</FormLabel>
                        <Slider
                          min={1}
                          max={10}
                          step={1}
                          defaultValue={5}
                          value={(formData as any)[`dogAggression${i + 1}`]}
                          mx="auto"
                          onChange={(val) =>
                            handleNumberChange(
                              String(val),
                              `dogAggression${i + 1}` as keyof FormData
                            )
                          }
                          >
                          <SliderTrack>
                            <SliderFilledTrack />
                          </SliderTrack>
                          <SliderThumb />
                        </Slider>
                        <Text mt={1} fontSize="sm" textAlign="center">
                          {(formData as any)[`dogAggression${i + 1}`]}
                        </Text>                      </FormControl>
                    </Stack>
                  ))}
                  
                  <FormControl>
                    <FormLabel>Where is your gate located?</FormLabel>
                    <Input
                      name="gateLocation"
                      value={formData.gateLocation}
                      onChange={handleChange}
                      borderColor="gray.300"
                      focusBorderColor="brand.golden"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Cleanup Notifications</FormLabel>
                    <Stack>
                      <Checkbox isChecked={formData.cleanupNotifications.offSchedule} onChange={() => toggleNotification("offSchedule")}>Added To Route</Checkbox>
                      <Checkbox isChecked={formData.cleanupNotifications.onTheWay} onChange={() => toggleNotification("onTheWay")}>On The Way</Checkbox>
                      <Checkbox isChecked={formData.cleanupNotifications.completed} onChange={() => toggleNotification("completed")}>Clean Up Completed</Checkbox>
                      

                    </Stack>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Notification Type</FormLabel>
                    <Select
                      name="notificationType"
                      value={formData.notificationType}
                      onChange={handleChange}
                      borderColor="gray.300"
                      focusBorderColor="brand.golden"
                    >
                      <option value="">Select…</option>
                      <option value="sms">SMS</option>
                      <option value="email">Email</option>
                      <option value="both">Both</option>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <FormLabel>How did you hear about us?</FormLabel>
                    <Input
                      name="heardAboutUs"
                      value={formData.heardAboutUs}
                      onChange={handleChange}
                      borderColor="gray.300"
                      focusBorderColor="brand.golden"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Additional Comments</FormLabel>
                    <Textarea
                      name="additionalComments"
                      value={formData.additionalComments}
                      onChange={handleChange}
                      borderColor="gray.300"
                      focusBorderColor="brand.golden"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Additional Services</FormLabel>
                    <RadioGroup
                      value={
                        formData.additionalServices.find((s) =>
                          s.includes("deodorizing")
                        ) || ""
                      }
                      onChange={handleDeodorizingChange}
                    >
                      <Stack>
                        <Radio value="">No Deodorizing Service</Radio>
                        <Radio value="weekly-deodorizing">Weekly Deodorizing Service</Radio>
                        <Radio value="biweekly-deodorizing">Bi‑Weekly Deodorizing</Radio>
                        <Radio value="monthly-deodorizing">Monthly Deodorizing</Radio>
                      </Stack>
                    </RadioGroup>
  <Checkbox
                      mt={5}
                      isChecked={formData.additionalServices.includes("sanitizing-service")}
                      onChange={handleSanitizingChange}
                    >
                      Sanitizing Service – $10 / Visit
                    </Checkbox>
                    <Text fontSize="sm" mt={2} color="gray.500">
                      Additional services may be charged based on usage.
                    </Text>                  </FormControl>

                  <FormControl isRequired>
                    <Stack direction="row" align="center">
                      <Checkbox
                        isChecked={formData.agreeToTerms}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            agreeToTerms: e.target.checked,
                          }))
                        }
                      />                      
                      <Text>
                        I agree to the{' '}
                        <ChakraLink as={RouterLink} to="/terms" color="brand.golden">
                          Terms of Service
                        </ChakraLink>
                        *
                      </Text>                    </Stack>
                  </FormControl>

                  <Text fontSize="xl" fontWeight="bold" textAlign="center">
                    {formData.frequency === "one-time"
                      ? `Updated Price: ${estimate}`
                      : `Updated Price: ${estimate} / Week`}                  </Text>
                  <Button
                    type="submit"
                    colorScheme="green"
                    w="full"
                    mt={4}
  isLoading={submitting}
  isDisabled={submitting}
  _hover={{ transform: "translateY(-1px)", boxShadow: "lg" }}
>
  Complete Registration
</Button>
                </VStack>

              </Fade>
            </Box>
          )}
        </Collapse>
      </Box>
    </Box>
  );
};

export default React.memo(BookNow);
