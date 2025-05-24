import React from 'react';
import { Flex, Spinner } from '@chakra-ui/react';

interface LoadingOverlayProps {
  isLoading: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      justify="center"
      align="center"
      bg="rgba(255,255,255,0.8)"
      zIndex={2000}
    >
      <Spinner size="xl" thickness="4px" color="brand.brightGreen" />
    </Flex>
  );
};

export default LoadingOverlay;