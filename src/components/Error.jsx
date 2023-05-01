import { Container, Heading } from '@chakra-ui/react';

export default function Error({ text }) {
  return (
    <Container centerContent mt="25vh">
      <Heading as="p" color="red.300">
        {text}
      </Heading>
    </Container>
  );
}
