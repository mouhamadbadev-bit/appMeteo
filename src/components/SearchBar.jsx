import { useState } from 'react';

export default function  SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-6">
      <input
        type="text"
        placeholder="Rechercher une ville..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-slate-800 text-white px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
        Search
      </button>
    </form>
  );
}