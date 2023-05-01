import { ErrorBoundary } from 'react-error-boundary';
import Layout from './components/Layout';
import NpmList from './components/NpmList/NpmList';
import Search from './components/Search/Search';
import { useNpmData } from './hooks/useNpmData';
import { ChakraProvider } from '@chakra-ui/react'
import ErrorBoundaryFallback from './components/ErrorBoundaryFallback';

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
