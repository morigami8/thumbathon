import {
  FormControl,
  Button,
  Box,
  Checkbox,
  Stack,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Container,
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
  const [imageSubmitSucess, setImageSubmitSucess] = useState(false);
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
          fileName: 'thumbathon_image',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setImageSubmitSucess(true);
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

  const handleDownloadButton = () => {
    setImageSubmitSucess(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormControl p={5} mb={5}>
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
        {imageSubmitSucess && (
          <Center>
            <Container>
              <Alert m={5} status="success" variant="subtle" bg="whitesmoke">
                <Box
                  ml={{ md: '2em' }}
                  display="flex"
                  alignItems="center"
                  textAlign="center"
                >
                  <AlertIcon color="#22c1c3" />
                  <AlertTitle m={2}>Image succesfully processed!</AlertTitle>
                  <AlertDescription m={2}>
                    <Button
                      onClick={handleDownloadButton}
                      bg="#22c1c3"
                      color="white"
                    >
                      <a href="http://localhost:3001/file/download" download>
                        Download Image
                      </a>
                    </Button>
                  </AlertDescription>
                </Box>
                <CloseButton
                  alignSelf="flex-start"
                  position="relative"
                  onClick={handleDownloadButton}
                  ml={{ md: '2em' }}
                />
              </Alert>
            </Container>
          </Center>
        )}
      </FormControl>
    </form>
  );
};

export default Search;
