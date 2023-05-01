import './App.css';
import NpmList from './components/NpmList';
import Search from './components/Search';
import { useNpmData } from './hooks/useNpmData';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const { npmData, fetchNpmData } = useNpmData();
  return (
    <ChakraProvider>
      <Search onSearch={fetchNpmData} />
      <NpmList npmData={npmData} />
    </ChakraProvider>
  );
}

export default App;
