import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';

type PixelSliderProps = {
  syncLH: boolean;
  handleSliderPixels: Function;
};

const PixelSlider = ({ syncLH, handleSliderPixels }: PixelSliderProps) => {
  return (
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
              ? 'rgb(34,193,195); background: linear-gradient(90deg,rgba(247,203,108,1) 0%, rgba(205,188,78,1) 50%, rgba(110,204,205,1) 100%);'
              : 'grey'
          }
        />
      </SliderTrack>
      <SliderThumb boxSize={6} />
    </Slider>
  );
};
export default PixelSlider;
