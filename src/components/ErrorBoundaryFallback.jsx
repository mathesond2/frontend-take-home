import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';

export default function ErrorBoundaryFallback({ error }) {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Something went wrong!</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
    </Alert>
  );
}
