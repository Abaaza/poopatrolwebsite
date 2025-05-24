// src/components/MotionBox.ts
import { chakra, shouldForwardProp } from "@chakra-ui/system";
import { isValidMotionProp, motion } from "framer-motion";

// Chakra-wrapped motion.div
export const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
