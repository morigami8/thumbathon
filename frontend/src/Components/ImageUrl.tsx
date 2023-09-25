import { Input, InputGroup } from '@chakra-ui/react';
import { CustomLeftAddon } from './common/CustomLeftAddon';

const ImageUrl = ({ imageUrl, handleImageUrl }: any) => {
  return (
    <>
      <InputGroup>
        <CustomLeftAddon bg="rgba(110, 204, 205, 1)" children="Image Url" />
        <Input
          onChange={handleImageUrl}
          placeholder="https://your-image-here.com"
          border="2px solid grey"
          value={imageUrl}
        />
      </InputGroup>
    </>
  );
};

export default ImageUrl;
