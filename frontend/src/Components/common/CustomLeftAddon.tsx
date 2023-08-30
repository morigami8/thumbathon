import { InputLeftAddon } from '@chakra-ui/react';

export const CustomLeftAddon = ({ ...props }) => (
  <InputLeftAddon
    borderRadius="8px"
    bg="blackAlpha.600"
    color="white"
    mx={0.5}
    {...props}
  />
);
