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
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Search = () => {
  const [pixelLength, setPixelLength] = useState(0);
  const [pixelWidth, setPixelWidth] = useState(250);
  const [sliderPixels, setSliderPixels] = useState(250);
  const [syncLH, setSyncLH] = useState(true);

  const handleSliderPixels = (e: any) => {
    setSliderPixels(e);
  };

  const handleSyncLH = (e: any) => {
    setSyncLH(e.target.checked);
    setPixelLength(sliderPixels);
    setPixelWidth(sliderPixels);
  };

  const handlePixelChange = (e: any) => {
    setPixelLength(e.target.value);
  };

  const handleInvalid = (): boolean => {
    if (pixelLength || pixelWidth > 500) return true;
    else return false;
  };
  return (
    <FormControl p={5}>
      <FormLabel>Image Url</FormLabel>
      <InputGroup>
        <InputLeftAddon children="https://" />
        <Input placeholder="imageurl" />
        <InputRightAddon children=".com" />
      </InputGroup>
      <Box>
        <InputGroup>
          <Checkbox defaultChecked onChange={handleSyncLH}>
            Sync LH
          </Checkbox>
          {syncLH && (
            <>
              <Input type="number" isDisabled={syncLH} value={sliderPixels} />
              <Input type="number" isDisabled={syncLH} value={sliderPixels} />
            </>
          )}
          {!syncLH && (
            <>
              <Input
                type="number"
                value={pixelLength}
                onChange={handlePixelChange}
              />
              <Input
                type="number"
                value={pixelWidth}
                onChange={handlePixelChange}
              />
            </>
          )}
        </InputGroup>
      </Box>
      <Slider
        defaultValue={250}
        min={50}
        max={500}
        aria-label="pixel-slider"
        onChange={(e) => handleSliderPixels(e)}
        isDisabled={!syncLH}
      >
        <SliderTrack bg="grey">
          <Box position="relative" right={10} />
          <SliderFilledTrack
            bg={
              syncLH
                ? 'rgb(34,193,195); background: linear-gradient(90deg,rgba(253,187,45,1) 0%, rgba(34,193,195,1) 100%);'
                : 'grey'
            }
          />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
      <Button>Generate!</Button>
    </FormControl>
  );
};

export default Search;
