import { CloseIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
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

  function handleCloseIconClick() {
    setSearchTerm('');
  }


  return (
    <form onSubmit={handleSubmit} className="search">
      <InputGroup>
        <Input size="lg" type="text" value={searchTerm} onChange={handleChange} placeholder="Search NPM packages" />
        <InputRightElement top={1} children={<CloseIcon className='close-icon' onClick={handleCloseIconClick} />} />
      </InputGroup>
      <Button size="lg" type="submit">Search</Button>

    </form>
  );
}
