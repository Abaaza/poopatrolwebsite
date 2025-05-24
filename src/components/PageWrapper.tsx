// src/components/PageWrapper.tsx
import React from "react";
import { BoxProps } from "@chakra-ui/react";
import { MotionBox } from "./MotionBox"; // This should match file location exactly

interface PageWrapperProps extends BoxProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, ...rest }) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 } as any}
    {...rest}
  >
    {children}
  </MotionBox>
);

export default PageWrapper;
