import {
  Container,
  ListItem,
  UnorderedList,
  Box,
  Heading,
  Center,
} from '@chakra-ui/react';

const Content = () => {
  return (
    <Container
      className="main-content"
      bg="purple.300"
      color="white"
      background="rgb(34,193,195); background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);"
      borderRadius={40}
    >
      <Box
        display="flex"
        flexDirection="column"
        filter="drop-shadow(0 0 3px #000)"
        py="5"
      >
        <Heading
          fontSize={{
            sm: '1.5rem',
            md: '1.5rem',
            lg: '1.875rem',
          }}
          mx="auto"
          py="auto"
        >
          Create Thumbnails Easily
        </Heading>
        <UnorderedList p={{ base: '1em' }} mx="auto" spacing={5}>
          <ListItem>Paste your image url in the textbox</ListItem>
          <ListItem>Set your desired pixels</ListItem>
          <ListItem>Click Generate!</ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default Content;
