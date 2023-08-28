import {
  Container,
  ListItem,
  UnorderedList,
  Box,
  Heading,
  Center,
  ListIcon,
  List,
} from '@chakra-ui/react';
import { FaAsterisk, FaCheckCircle } from 'react-icons/fa';

const Content = () => {
  return (
    <Container
      className="main-content"
      bg="purple.300"
      color="white"
      background="rgb(34,193,195); background: linear-gradient(90deg,rgba(253,187,45,1) 0%, rgba(34,193,195,1) 100%);"
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
        <List
          fontSize={{ base: 'small', sm: 'lg', md: 'x-large' }}
          p={{ base: '1em' }}
          mx="auto"
          spacing={5}
        >
          <ListItem>
            <ListIcon
              verticalAlign="middle"
              fontSize={12}
              as={FaAsterisk}
              color="#white"
            />
            Paste your image url in the textbox
          </ListItem>
          <ListItem>
            <ListIcon
              verticalAlign="middle"
              fontSize={12}
              as={FaAsterisk}
              color="#white"
            />
            Set your desired pixels
          </ListItem>
          <ListItem>
            <ListIcon
              verticalAlign="middle"
              fontSize={12}
              as={FaAsterisk}
              color="#white"
            />
            Click Generate!
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Content;
