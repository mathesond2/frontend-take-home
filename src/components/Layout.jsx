import { Box, Container } from '@chakra-ui/react';

export default function Layout({ children }) {
  return (
    <Container maxW="full" as="main" paddingX={[6, 6, 10]}>
      <Box pt={4}>{children}</Box>
    </Container>
  );
}
