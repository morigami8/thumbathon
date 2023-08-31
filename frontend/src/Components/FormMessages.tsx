import { Center, FormErrorMessage, FormHelperText } from '@chakra-ui/react';

type FormMessageProps = {
  isInvalid: boolean;
  isVisible: boolean;
  explainerText: string;
};
const FormMessages = ({
  isInvalid,
  isVisible,
  explainerText,
}: FormMessageProps) => {
  return (
    <Center>
      {isInvalid ? (
        <FormErrorMessage>set pixels between 50 or 500</FormErrorMessage>
      ) : (
        <FormHelperText
          opacity={isVisible ? 1 : 0}
          transition="opacity 0.3s ease"
          id="explainerText"
        >
          {explainerText}
        </FormHelperText>
      )}
    </Center>
  );
};

export default FormMessages;
