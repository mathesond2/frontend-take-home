import './App.css';
import NpmList from './components/NpmList';
import Search from './components/Search';
import { useNpmData } from './hooks/useNpmData';

function App() {
  const { npmData, fetchNpmData } = useNpmData();
  return (
    <>
      <Search onSearch={fetchNpmData} />
      <NpmList npmData={npmData} />
    </>
  );
}

export default App;
