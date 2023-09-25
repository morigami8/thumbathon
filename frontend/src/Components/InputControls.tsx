import { Flex, FormControl, Input, InputGroup } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { CustomLeftAddon } from './common/CustomLeftAddon';

type InputControlProps = {
  syncLH: boolean;
  handlePixelChange: (event: ChangeEvent<HTMLInputElement>) => void;
  pixelHeight: number;
  pixelWidth: number;
  sliderPixels: number;
  isInvalid: boolean;
};

const InputControls = ({
  syncLH,
  handlePixelChange,
  pixelHeight,
  pixelWidth,
  sliderPixels,
  isInvalid,
}: InputControlProps) => {
  return (
    <>
      {syncLH ? (
        <Flex>
          <InputGroup>
            <CustomLeftAddon children="Length" />
            <Input
              type="number"
              border="2px solid grey"
              isDisabled={syncLH}
              value={sliderPixels}
              mr={2}
            />
            <CustomLeftAddon children="Height" />
            <Input
              border="2px solid grey"
              type="number"
              isDisabled={syncLH}
              value={sliderPixels}
            />
          </InputGroup>
        </Flex>
      ) : (
        <Flex>
          <FormControl mr="0.6rem" isInvalid={isInvalid}>
            <InputGroup>
              <CustomLeftAddon bg="rgba(110,204,205,1)" children="Length" />
              <Input
                name="length"
                type="number"
                border="2px solid grey"
                value={pixelHeight}
                onChange={handlePixelChange}
                isInvalid={pixelHeight < 50 || pixelHeight > 500}
              />
            </InputGroup>
          </FormControl>

          <FormControl isInvalid={isInvalid}>
            <InputGroup>
              <CustomLeftAddon bg="rgba(110,204,205,1)" children="Height" />
              <Input
                name="height"
                type="number"
                border="2px solid grey"
                value={pixelWidth}
                onChange={handlePixelChange}
                isInvalid={pixelWidth < 50 || pixelWidth > 500}
              />
            </InputGroup>
          </FormControl>
        </Flex>
      )}
    </>
  );
};

export default InputControls;
