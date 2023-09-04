import {
  FormControl,
  Button,
  Box,
  Checkbox,
  Stack,
  Center,
} from '@chakra-ui/react';
import { useState } from 'react';
import ImageUrl from '../Components/ImageUrl';
import InputControls from '../Components/InputControls';
import FormMessages from '../Components/FormMessages';
import PixelSlider from '../Components/PixelSlider';
import axios from 'axios';
import { BASE_URL } from '../constants';

const Search = () => {
  const [pixelHeight, setpixelHeight] = useState(275);
  const [pixelWidth, setPixelWidth] = useState(275);
  const [sliderPixels, setSliderPixels] = useState(275);
  const [syncLH, setSyncLH] = useState(true);
  const [imageUrl, setImageUrl] = useState('');
  const [explainerText, setExplainerText] = useState(
    'Use the slider to change the pixels'
  );
  const [isVisible, setIsVisible] = useState(true);
  const isInvalid =
    pixelHeight < 50 ||
    pixelHeight > 500 ||
    pixelWidth < 50 ||
    pixelWidth > 500;

  const handleSliderPixels = (e: any) => {
    setSliderPixels(e);
  };

  const handleSyncLH = (e: any) => {
    setSyncLH(e.target.checked);
    setpixelHeight(sliderPixels);
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        BASE_URL,
        {
          imageUrl: imageUrl,
          width: pixelWidth,
          height: pixelHeight,
          fileName: 'from_react_image',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response.data);
    } catch (e: any) {
      console.log(e);
    }

    setImageUrl('');
  };

  const handleImageUrl = (e: any) => {
    setImageUrl(e.target.value);
  };

  const handlePixelChange = (e: any) => {
    if (e.target.name === 'length') setpixelHeight(e.target.value);
    else setPixelWidth(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl p={5}>
        <ImageUrl handleImageUrl={handleImageUrl} imageUrl={imageUrl} />

        <Box py={5}>
          <Stack my={5} direction="column">
            <Box>
              <Checkbox
                colorScheme="cyan"
                defaultChecked
                onChange={handleSyncLH}
              >
                Sync L & H
              </Checkbox>
            </Box>
            <InputControls
              syncLH={syncLH}
              handlePixelChange={handlePixelChange}
              pixelHeight={pixelHeight}
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
          <Button type="submit" bg="#22c1c3" color="white">
            Generate!
          </Button>
        </Center>
      </FormControl>
    </form>
  );
};

export default Search;
