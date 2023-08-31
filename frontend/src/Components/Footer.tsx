import { Container, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      bg="rgb(34,193,195); background: linear-gradient(90deg,rgba(253,187,45,1) 0%, rgba(34,193,195,1) 100%);"
      color="white"
      className="footer"
      justifyContent="space-around"
      width="100%"
      height="10vh"
      borderRadius={20}
      my={5}
    >
      <HStack
        fontSize={{ sm: '14px', md: '18px', lg: '20px' }}
        filter="drop-shadow(0 0 3px #000)"
        gap={4}
      >
        <Text>Tech Stack: </Text>
        <a href="https://nestjs.com">NestJS</a>
        <a href="https://react.dev/">React</a>
        <a href="https://www.typescriptlang.org/">TypeScript</a>
        <a href="https://www.postgresql.org/">Postgres</a>
        <a href="https://www.rabbitmq.com/">RabbitMQ</a>
      </HStack>
    </Flex>
  );
};

export default Footer;