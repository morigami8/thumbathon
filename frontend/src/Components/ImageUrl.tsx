import { FormLabel, Input, InputGroup } from '@chakra-ui/react';
import React from 'react';
import { CustomLeftAddon } from './common/CustomLeftAddon';

const ImageUrl = ({ imageUrl, handleImageUrl }: any) => {
  return (
    <>
      <FormLabel>Image Url</FormLabel>
      <InputGroup>
        <CustomLeftAddon bg="#22c1c3" children="https://" />
        <Input
          onChange={handleImageUrl}
          placeholder="paste image url here"
          border="1px solid grey"
          value={imageUrl}
        />
      </InputGroup>
    </>
  );
};

export default ImageUrl;
