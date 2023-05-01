import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import './Search.css';

export default function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchTerm);
  }

  function handleChange(e) {
    const val = e.target.value;
    setSearchTerm(val);
  }

  return (
    <form onSubmit={handleSubmit} className="search">
      <Input size="lg" type="text" value={searchTerm} onChange={handleChange} placeholder="Search NPM packages" />
      <Button size="lg" type="submit">Search</Button>
    </form>
  );
}
