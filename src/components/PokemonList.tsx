"use client";
import { useState } from 'react';
import PokemonCard from './PokemonCard';
import SearchBar from './Serachbar';

export default function PokemonList({ initialPokemon }: { initialPokemon: any[] }) {
  const [filteredPokemon, setFilteredPokemon] = useState(initialPokemon);

  return (
    <>
      <SearchBar
        onSearch={(term) => {
          const filtered = initialPokemon.filter(p => 
            p.name.toLowerCase().includes(term.toLowerCase())
          );
          setFilteredPokemon(filtered);
        }}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}