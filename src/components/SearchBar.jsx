import { useState } from 'react';

export default function  SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim())
      //permet si la saisie est valide, cette function props envoie le text saisie 
      onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-6 justify-center relative text-amber-50">
 
      <input
        type="text"
        placeholder="  Rechercher une ville..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-3 border-neutral-50 bg-gray-600 rounded-2xl w-2xl placeholder:text-amber-50 accent-gray-600 outline-0 " />
      <button type="submit" className=''>
        Search
      </button>
    </form>
  );
}