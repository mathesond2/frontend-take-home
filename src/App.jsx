import { ChakraProvider } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryFallback from './components/ErrorBoundaryFallback';
import Layout from './components/Layout';
import NpmList from './components/NpmList/NpmList';
import Search from './components/Search/Search';
import { useNpmData } from './hooks/useNpmData';

function App() {
  const { npmData, fetchNpmData } = useNpmData();
  return (
    <ChakraProvider>
      <Layout>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
          <Search onSearch={fetchNpmData} />
          <NpmList npmData={npmData} />
        </ErrorBoundary>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
