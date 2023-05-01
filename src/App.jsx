import Layout from './components/Layout';
import NpmList from './components/NpmList/NpmList';
import Search from './components/Search/Search';
import { useNpmData } from './hooks/useNpmData';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const { npmData, fetchNpmData } = useNpmData();
  return (
    <ChakraProvider>
      <Layout>
        <Search onSearch={fetchNpmData} />
        <NpmList npmData={npmData} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
