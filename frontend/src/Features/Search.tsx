import {
  FormControl,
  Button,
  Slider,
  SliderTrack,
  Box,
  SliderFilledTrack,
  SliderThumb,
  Checkbox,
  Stack,
  Center,
} from '@chakra-ui/react';
import { useState } from 'react';
import ImageUrl from '../Components/ImageUrl';
import InputControls from '../Components/InputControls';
import FormMessages from '../Components/FormMessages';
import PixelSlider from '../Components/PixelSlider';

const Search = () => {
  const [pixelLength, setPixelLength] = useState(275);
  const [pixelWidth, setPixelWidth] = useState(275);
  const [sliderPixels, setSliderPixels] = useState(275);
  const [syncLH, setSyncLH] = useState(true);
  const [explainerText, setExplainerText] = useState(
    'Use the slider to change the pixels'
  );
  const [isVisible, setIsVisible] = useState(true);
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
    setIsVisible(false); // Start the fade-out

    setTimeout(() => {
      if (e.target.checked) {
        setExplainerText('Use the slider to change the pixels');
      } else {
        setExplainerText('Type in your desired pixels');
      }
      setIsVisible(true); // Start the fade-in
    }, 300);
  };

  const handlePixelChange = (e: any) => {
    if (e.target.name === 'length') setPixelLength(e.target.value);
    else setPixelWidth(e.target.value);
  };

  return (
    <FormControl p={5}>
      <ImageUrl />

      <Box py={5}>
        <Stack my={5} direction="column">
          <Box>
            <Checkbox colorScheme="cyan" defaultChecked onChange={handleSyncLH}>
              Sync L & H
            </Checkbox>
          </Box>
          <InputControls
            syncLH={syncLH}
            handlePixelChange={handlePixelChange}
            pixelLength={pixelLength}
            pixelWidth={pixelWidth}
            sliderPixels={sliderPixels}
            isInvalid={isInvalid}
          />
        </Stack>
        <FormControl isInvalid={isInvalid}>
          <FormMessages
            isInvalid={isInvalid}
            isVisible={isVisible}
            explainerText={explainerText}
          />
        </FormControl>
      </Box>
      <PixelSlider syncLH={syncLH} handleSliderPixels={handleSliderPixels} />
      <Center py={5}>
        <Button bg="#22c1c3" color="white">
          Generate!
        </Button>
      </Center>
    </FormControl>
  );
};

export default Search;

//TODO: Connect NestJS and React
