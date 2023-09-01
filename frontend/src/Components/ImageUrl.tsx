import { Input, InputGroup } from '@chakra-ui/react';
import { CustomLeftAddon } from './common/CustomLeftAddon';

const ImageUrl = ({ imageUrl, handleImageUrl }: any) => {
  return (
    <>
      <InputGroup>
        <CustomLeftAddon bg="#22c1c3" children="Image Url" />
        <Input
          onChange={handleImageUrl}
          placeholder="https://loremflickr.com/320/240"
          border="1px solid grey"
          value={imageUrl}
        />
      </InputGroup>
    </>
  );
};

export default ImageUrl;
