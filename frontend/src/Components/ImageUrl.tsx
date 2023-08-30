import { FormLabel, Input, InputGroup } from '@chakra-ui/react';
import React from 'react';
import { CustomLeftAddon } from './common/CustomLeftAddon';

const ImageUrl = () => {
  return (
    <>
      <FormLabel>Image Url</FormLabel>
      <InputGroup>
        <CustomLeftAddon bg="#22c1c3" children="https://" />
        <Input placeholder="paste image url here" border="1px solid grey" />
      </InputGroup>
    </>
  );
};

export default ImageUrl;
