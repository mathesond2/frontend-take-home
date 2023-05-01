import { useState } from 'react';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('searchTerm: ', searchTerm);
  }

  function handleChange(e) {
    const val = e.target.value;
    setSearchTerm(val);
  }

  return (
    <form onSubmit={handleSubmit} className="search">
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search NPM packages" />
      <button type="submit">Search</button>
    </form>
  );
}