import { Box, Container } from '@chakra-ui/react';
import Navbar from './Navbar/Navbar';

export default function Layout({ children }) {
  return (
    <Container maxW="full" as="main" paddingX={[6, 6, 10]}>
      <Navbar />
      <Box pt={4}>{children}</Box>
    </Container>
  );
}
