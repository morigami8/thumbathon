import { Flex, FormControl, Input, InputGroup } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { CustomLeftAddon } from './common/CustomLeftAddon';

type InputControlProps = {
  syncLH: boolean;
  handlePixelChange: (event: ChangeEvent<HTMLInputElement>) => void;
  pixelLength: number;
  pixelWidth: number;
  sliderPixels: number;
  isInvalid: boolean;
};

const InputControls = ({
  syncLH,
  handlePixelChange,
  pixelLength,
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
              border="1px solid grey"
              isDisabled={syncLH}
              value={sliderPixels}
              mr={2}
            />
            <CustomLeftAddon children="Height" />
            <Input
              border="1px solid grey"
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
              <CustomLeftAddon bg="#22c1c3" children="Length" />
              <Input
                name="length"
                type="number"
                value={pixelLength}
                onChange={handlePixelChange}
                isInvalid={pixelLength < 50 || pixelLength > 500}
              />
            </InputGroup>
          </FormControl>

          <FormControl isInvalid={isInvalid}>
            <InputGroup>
              <CustomLeftAddon bg="#22c1c3" children="Height" />
              <Input
                name="height"
                type="number"
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
