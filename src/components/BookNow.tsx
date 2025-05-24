/* FreeQuotePage.tsx — FULL (≈640 lines) — EmailJS + submit‑lock + navigate after success */
import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Fade,
  FormControl,
  FormLabel,
  Heading,
  HStack,
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
  CheckboxGroup,
  Divider,
} from "@chakra-ui/react";
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

  const [formData, setFormData] = useState<FormData>({
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
  });

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

  const handleCheckboxGroupChange = (values: string[]) =>
    setFormData((prev) => ({ ...prev, additionalServices: values }));

const calculateEstimate = () => {
  const dogs = Math.min(formData.numDogs, 4);   // cap at 4 for the table
  let price = 0;

  if (formData.frequency === "one-time") {
    price = ONE_TIME_PRICES[dogs];
    // optional yard-size bump only for 4+ dogs:
    if (dogs === 4 && formData.yardSize === "large") price += 20; // example
  } else {
    price = SUBSCRIPTION_PRICES[formData.frequency][dogs];
  }

  return `$${price.toFixed(2)}`;
};
  /* ────────────────────────────────────────────── */
  /* ➋  “Get Estimate” click                       */
  /* ────────────────────────────────────────────── */
  const handleGetEstimate = () => {
    const zip = formData.zipCode.trim();
    if (!SERVED_ZIPS.includes(zip)) {
      setEstimate("");
      setErrorMsg(
        "Sorry, we don’t serve this area yet. Enter a ZIP code in our service area or check back as we expand."
      );
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

  const templateParams = {
    ...formData,
    estimate,
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

    navigate("/checkout");   // only after both succeed

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
          _hover={{ transform: "translateY(-2px)" }}
        >
          <Heading size="lg" mb={2}>Book Now</Heading>
          <Text color="gray.600" mb={6}>
            Fill out the first section to see an instant estimate. Once you click “Get Estimate,” a second section will appear for final sign‑up!
          </Text>

          <VStack align="start" spacing={5}>
            {/* ZIP + coupon */}
            <HStack w="full" spacing={4}>
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
            </HStack>

            {/* Last cleanup + yard size */}
            <HStack w="full" spacing={4}>
              <FormControl>
                <FormLabel>Last Cleanup</FormLabel>
                <Select
                  name="lastCleanup"
                  value={formData.lastCleanup}
                  onChange={handleChange}
                  isDisabled={readOnlyStep1}
                  borderColor="gray.300"
                  focusBorderColor="brand.golden"
                >
                  <option value="">Select one…</option>
                  <option value="1week">One Week Ago</option>
                  <option value="2weeks">Two Weeks Ago</option>
                  <option value="month">Over a Month Ago</option>
                  <option value="never">Never</option>
                </Select>
              </FormControl>

              <FormControl>
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
            </HStack>

            {/* Dogs + frequency */}
            <HStack w="full" spacing={4}>
              <FormControl>
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

              <FormControl>
                <FormLabel>Cleanup Frequency</FormLabel>
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
            </HStack>

            {/* Button OR result */}
            {!estimateFetched ? (
              <Button
                colorScheme="green"
                onClick={handleGetEstimate}
                alignSelf="flex-start"
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
              >
                Get Estimate
              </Button>
            ) : (
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
                      Estimated Price: {estimate} / Week
                    </Text>
                    <Text fontSize="sm" mt={4}>
                      Initial cleanups start at $20 for one dog, $35 for two, $50 for three, and $60 for four dogs, based on a standard 1/4-acre yard. One promotion per customer. Discounts do not apply to one-time cleanups. New monthly subscribers receive their second cleanup free — offer valid for new customers only.
                    </Text>
                  </>
                )}
              </Box>
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

                  {/* Names */}
                  <HStack w="full">
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
                  </HStack>

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

                  <HStack w="full">
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
                  </HStack>

                  <HStack w="full">
                    <FormControl isRequired>
                      <FormLabel>Dog's Name #1</FormLabel>
                      <Input
                        name="dogName1"
                        value={formData.dogName1}
                        onChange={handleChange}
                        borderColor="gray.300"
                        focusBorderColor="brand.golden"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Dog's Name #2</FormLabel>
                      <Input
                        name="dogName2"
                        value={formData.dogName2}
                        onChange={handleChange}
                        borderColor="gray.300"
                        focusBorderColor="brand.golden"
                      />
                    </FormControl>
                  </HStack>

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
                      <Checkbox isChecked={formData.cleanupNotifications.offSchedule} onChange={() => toggleNotification("offSchedule")}>Off‑Schedule</Checkbox>
                      <Checkbox isChecked={formData.cleanupNotifications.onTheWay} onChange={() => toggleNotification("onTheWay")}>On The Way</Checkbox>
                      <Checkbox isChecked={formData.cleanupNotifications.completed} onChange={() => toggleNotification("completed")}>Completed</Checkbox>
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
                    <CheckboxGroup value={formData.additionalServices} onChange={handleCheckboxGroupChange}>
                      <Stack>
                        <Checkbox value="weekly-deodorizing">Weekly Deodorizing Service – $82.50 / Month</Checkbox>
                        <Checkbox value="biweekly-deodorizing">Bi‑Weekly Deodorizing – $45.80 / Month</Checkbox>
                        <Checkbox value="monthly-deodorizing">Monthly Deodorizing – $27.45 / Month</Checkbox>
                      </Stack>
                    </CheckboxGroup>
                    <Text fontSize="sm" mt={2} color="gray.500">Additional services may be charged based on usage.</Text>
                  </FormControl>

                  <FormControl isRequired>
                    <Stack direction="row">
                      <Checkbox
                        isChecked={formData.agreeToTerms}
                        onChange={(e) => setFormData((prev) => ({ ...prev, agreeToTerms: e.target.checked }))}
                      />
                      <Text>I agree to the terms of service*</Text>
                    </Stack>
                  </FormControl>
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
              </Fade>
            </Box>
          )}
        </Collapse>
      </Box>
    </Box>
  );
};

export default React.memo(BookNow);
