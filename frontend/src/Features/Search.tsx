import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Button,
  Slider,
  SliderTrack,
  Box,
  SliderFilledTrack,
  SliderThumb,
  Checkbox,
  Flex,
  FormErrorMessage,
  Stack,
  Center,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Search = () => {
  const [pixelLength, setPixelLength] = useState(0);
  const [pixelWidth, setPixelWidth] = useState(250);
  const [sliderPixels, setSliderPixels] = useState(250);
  const [syncLH, setSyncLH] = useState(true);
  const isInvalid =
    pixelLength < 50 ||
    pixelLength > 500 ||
    pixelWidth < 50 ||
    pixelWidth > 500;

  const handleSliderPixels = (e: any) => {
    setSliderPixels(e);
  };

  const handleSyncLH = (e: any) => {
    setSyncLH(e.target.checked);
    setPixelLength(sliderPixels);
    setPixelWidth(sliderPixels);
  };

  const handlePixelChange = (e: any) => {
    if (e.target.name === 'length') setPixelLength(e.target.value);
    else setPixelWidth(e.target.value);
  };

  const CustomLeftAddon = ({ ...props }) => (
    <InputLeftAddon
      borderRadius="8px"
      bg="blackAlpha.600"
      color="white"
      mx={0.5}
      {...props}
    />
  );

  const CustomRightAddon = ({ ...props }) => (
    <InputRightAddon
      borderRadius="8px"
      bg="blackAlpha.600"
      color="white"
      mx={0.5}
      {...props}
    />
  );

  return (
    <FormControl p={5}>
      <FormLabel>Image Url</FormLabel>
      <InputGroup>
        <CustomLeftAddon children="https://" />
        <Input placeholder="paste image url here" border="1px solid grey" />
      </InputGroup>
      <Box py={5}>
        <Stack margin={5} direction="column">
          <Checkbox defaultChecked onChange={handleSyncLH}>
            Sync L & H
          </Checkbox>

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
                  <InputLeftAddon children="Length" />
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
                  <InputLeftAddon children="Height" />
                  <Input
                    name="height"
                    type="number"
                    value={pixelWidth}
                    onChange={handlePixelChange}
                    isInvalid={pixelWidth < 50 || pixelWidth > 500}
                  />
                </InputGroup>
              </FormControl>

              {isInvalid && (
                <FormErrorMessage>
                  set pixels between 50 and 500
                </FormErrorMessage>
              )}
            </Flex>
          )}
        </Stack>
      </Box>
      <Slider
        defaultValue={250}
        min={50}
        max={500}
        aria-label="pixel-slider"
        onChange={(e) => handleSliderPixels(e)}
        isDisabled={!syncLH}
      >
        <SliderTrack>
          <Box position="relative" right={10} />
          <SliderFilledTrack
            bg={
              syncLH
                ? 'rgb(34,193,195); background: linear-gradient(90deg,rgba(253,187,45,1) 0%, rgba(205,188,78,1) 50%, rgba(34,193,195,1) 100%);'
                : 'grey'
            }
          />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
      <Center py={5}>
        <Button bg="#22c1c3" color="white">
          Generate!
        </Button>
      </Center>
    </FormControl>
  );
};

export default Search;
