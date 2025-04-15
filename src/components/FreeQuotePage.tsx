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
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
  useToast,
  VStack,
  Checkbox,
  CheckboxGroup,
  Divider,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";

const FreeQuotePage: React.FC = () => {
  const toast = useToast();

  // Track if the user has clicked "Get Estimate"
  const [estimateFetched, setEstimateFetched] = useState(false);

  // Store the final estimate
  const [estimate, setEstimate] = useState("");

  // All form data
  const [formData, setFormData] = useState({
    // Step 1 fields
    zipCode: "",
    couponCode: "",
    lastCleanup: "",
    yardSize: "",
    numDogs: 1,
    frequency: "once-a-week",
    // Step 2 fields
    firstName: "",
    lastName: "",
    email: "",
    homeAddress: "",
    city: "",
    state: "",
    dogName1: "",
    dogName2: "",
    gateLocation: "",
    cleanupNotifications: {
      offSchedule: false,
      onTheWay: false,
      completed: false,
    },
    cleanupMessage: "",
    notificationType: "",
    notificationMethod: "",
    cardOnFile: "", // yes/no
    heardAboutUs: "",
    additionalComments: "",
    additionalServices: [] as string[],
    agreeToTerms: false,
  });

  // For text/select changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      // Single checkbox => boolean
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // For numeric fields
  const handleNumberChange = (val: string, fieldName: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: Number(val),
    }));
  };

  // For radio fields
  const handleRadioChange = (val: string, fieldName: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: val,
    }));
  };

  // For nested toggles in cleanupNotifications
  const toggleNotification = (
    field: "offSchedule" | "onTheWay" | "completed"
  ) => {
    setFormData((prev) => ({
      ...prev,
      cleanupNotifications: {
        ...prev.cleanupNotifications,
        [field]: !prev.cleanupNotifications[field],
      },
    }));
  };

  // For multiple checkboxes group
  const handleCheckboxGroupChange = (values: string[]) => {
    setFormData((prev) => ({ ...prev, additionalServices: values }));
  };

  // Dummy logic for estimate
  const calculateEstimate = () => {
    let base = 60;
    // Yard size factor
    if (formData.yardSize === "medium") base += 10;
    if (formData.yardSize === "large") base += 20;
    // Extra dogs
    base += (formData.numDogs - 1) * 10;
    // Frequency factor
    if (formData.frequency === "bi-weekly") base *= 0.8;
    if (formData.frequency === "once-a-month") base *= 0.6;
    if (formData.frequency === "one-time") base *= 1.2;

    return `$${base.toFixed(2)}`;
  };

  // Step 1: user clicks "Get Estimate"
  const handleGetEstimate = () => {
    setEstimate(calculateEstimate());
    setEstimateFetched(true);
  };

  // Final submission
  const handleFinalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For example, using EmailJS or a backend:
    // emailjs.send("SERVICE_ID", "TEMPLATE_ID", {...formData, estimate}, "PUBLIC_KEY")
    //   .then(...)
    //   .catch(...);

    toast({
      title: "Form submitted (demo).",
      description: `Replace this with your EmailJS or backend logic. Estimate: ${estimate}`,
      status: "info",
      duration: 4000,
      isClosable: true,
    });
  };

  // Step 1 fields become read-only if we've fetched estimate
  const readOnlyStep1 = estimateFetched;

  return (
    <Box
      minH="100vh"
      w="full"
      bgGradient="linear(to-b, brand.lightGreen, brand.brightGreen)"
      py={10}
      px={4}
    >
      <Box maxW="3xl" mx="auto">
        {/* Card: Step 1 */}
        <Box
          bg="white"
          p={{ base: 6, md: 8 }}
          rounded="lg"
          boxShadow="2xl"
          mb={6}
          transition="all 0.3s ease"
          _hover={{ transform: "translateY(-2px)" }}
        >
          <Heading as="h1" size="lg" mb={2}>
            Get Your Free Quote
          </Heading>
          <Text fontSize="md" color="gray.600" mb={6}>
            Fill out the first section to see an instant estimate. Once you
            click “Get Estimate,” a second section will appear for final
            sign-up!
          </Text>

          {/* STEP 1: Yard Details */}
          <VStack align="start" spacing={5}>
            <HStack w="full" spacing={4}>
              <FormControl>
                <FormLabel>Zip Code</FormLabel>
                <Input
                  name="zipCode"
                  placeholder="e.g. 99202"
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
                  <option value="">Select one...</option>
                  <option value="1week">1 Week Ago</option>
                  <option value="2weeks">2 Weeks Ago</option>
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
                  <option value="">Select size...</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </Select>
              </FormControl>
            </HStack>

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
                  <option value="bi-weekly">Bi Weekly</option>
                  <option value="once-a-month">Once A Month</option>
                  <option value="one-time">One Time</option>
                </Select>
              </FormControl>
            </HStack>

            {/* If estimate NOT fetched, show button; otherwise, show estimate. */}
            {!estimateFetched ? (
              <Button
                colorScheme="green"
                onClick={handleGetEstimate}
                alignSelf="flex-start"
                transition="all 0.3s ease"
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
              >
                Get Estimate
              </Button>
            ) : (
              <Box
                p={4}
                bg="brand.lightGreen"
                rounded="md"
                shadow="md"
                w="full"
                transition="all 0.3s ease"
              >
                <Text fontSize="lg" fontWeight="bold" color="brand.darkBrown">
                  Estimated Price: {estimate}
                </Text>
              </Box>
            )}
          </VStack>
        </Box>

        {/* STEP 2: Collapsible Sign-Up Form */}
        <Collapse in={estimateFetched} animateOpacity>
          {estimateFetched && (
            <Box
              as="form"
              onSubmit={handleFinalSubmit}
              bg="white"
              p={{ base: 6, md: 8 }}
              rounded="lg"
              boxShadow="2xl"
              transition="all 0.3s ease"
              _hover={{ transform: "translateY(-2px)" }}
            >
              <Fade in={estimateFetched}>
                <Heading as="h2" size="md" mb={2}>
                  Complete Your Sign Up
                </Heading>
                <Text fontSize="sm" color="gray.600" mb={4}>
                  Fill out the details below to finalize your service request.
                </Text>
                <Divider mb={6} />

                <VStack align="start" spacing={5}>
                  <HStack w="full">
                    <FormControl isRequired>
                      <FormLabel>First Name*</FormLabel>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        borderColor="gray.300"
                        focusBorderColor="brand.golden"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Last Name*</FormLabel>
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
                    <FormLabel>Email Address*</FormLabel>
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
                    <FormLabel>Home Address*</FormLabel>
                    <Input
                      name="homeAddress"
                      value={formData.homeAddress}
                      onChange={handleChange}
                      borderColor="gray.300"
                      focusBorderColor="brand.golden"
                    />
                  </FormControl>

                  <HStack w="full">
                    <FormControl isRequired>
                      <FormLabel>City*</FormLabel>
                      <Input
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        borderColor="gray.300"
                        focusBorderColor="brand.golden"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>State*</FormLabel>
                      <Input
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        borderColor="gray.300"
                        focusBorderColor="brand.golden"
                      />
                    </FormControl>
                  </HStack>

                  <HStack w="full">
                    <FormControl isRequired>
                      <FormLabel>Dog's name #1*</FormLabel>
                      <Input
                        name="dogName1"
                        value={formData.dogName1}
                        onChange={handleChange}
                        borderColor="gray.300"
                        focusBorderColor="brand.golden"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Dog's name #2</FormLabel>
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

                  {/* Notifications */}
                  <FormControl>
                    <FormLabel>Cleanup Notifications</FormLabel>
                    <Stack>
                      <Checkbox
                        isChecked={formData.cleanupNotifications.offSchedule}
                        onChange={() => toggleNotification("offSchedule")}
                      >
                        Off Schedule
                      </Checkbox>
                      <Checkbox
                        isChecked={formData.cleanupNotifications.onTheWay}
                        onChange={() => toggleNotification("onTheWay")}
                      >
                        On The Way
                      </Checkbox>
                      <Checkbox
                        isChecked={formData.cleanupNotifications.completed}
                        onChange={() => toggleNotification("completed")}
                      >
                        Completed
                      </Checkbox>
                    </Stack>
                  </FormControl>

                  <FormControl>
                    <FormLabel>
                      What cleanup message would you like to receive?
                    </FormLabel>
                    <Input
                      name="cleanupMessage"
                      value={formData.cleanupMessage}
                      onChange={handleChange}
                      borderColor="gray.300"
                      focusBorderColor="brand.golden"
                    />
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
                      <option value="">Select...</option>
                      <option value="sms">SMS</option>
                      <option value="email">Email</option>
                      <option value="both">Both</option>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <FormLabel>
                      How would you like to receive notifications?
                    </FormLabel>
                    <Input
                      name="notificationMethod"
                      placeholder="Text, phone call, email, etc."
                      value={formData.notificationMethod}
                      onChange={handleChange}
                      borderColor="gray.300"
                      focusBorderColor="brand.golden"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>
                      A card on file is needed. Provide card info now?
                    </FormLabel>
                    <RadioGroup
                      onChange={(val) => handleRadioChange(val, "cardOnFile")}
                      value={formData.cardOnFile}
                    >
                      <Stack direction="row">
                        <Radio value="yes">Yes</Radio>
                        <Radio value="no">No, I have questions first</Radio>
                      </Stack>
                    </RadioGroup>
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
                    <FormLabel>Additional comments</FormLabel>
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
                    <CheckboxGroup
                      value={formData.additionalServices}
                      onChange={handleCheckboxGroupChange}
                    >
                      <Stack>
                        <Checkbox value="weekly-deodorizing">
                          Weekly Deodorizing Service - $82.50/Month
                        </Checkbox>
                        <Checkbox value="biweekly-deodorizing">
                          Bi Weekly Deodorizing - $45.80/Month
                        </Checkbox>
                        <Checkbox value="monthly-deodorizing">
                          Once Per Month Deodorizing - $27.45/Month
                        </Checkbox>
                      </Stack>
                    </CheckboxGroup>
                    <Text fontSize="sm" mt={2} color="gray.500">
                      Additional services may be charged based on usage.
                    </Text>
                  </FormControl>

                  <FormControl isRequired>
                    <Stack direction="row">
                      <Checkbox
                        isChecked={formData.agreeToTerms}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            agreeToTerms: e.target.checked,
                          }))
                        }
                      />
                      <Text>I agree to terms of service.*</Text>
                    </Stack>
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="green"
                    w="full"
                    mt={4}
                    transition="all 0.3s ease"
                    _hover={{
                      transform: "translateY(-1px)",
                      boxShadow: "lg",
                    }}
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

export default FreeQuotePage;
