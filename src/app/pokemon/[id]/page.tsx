import { fetchPokemonDetails } from '@/lib/api';
import { ChevronLeft, Heart } from 'lucide-react';
import Link from 'next/link';
import { JSX } from 'react';

type Props = {
  params: {
    id: string;
  };
};
export default async function Page({ params }: Props): Promise<JSX.Element> {
  const pokemon = await fetchPokemonDetails(params.id);
  
  // Type colors mapping
  const typeColors: Record<string, string> = {
    normal: 'bg-[#A8A878]',
    fire: 'bg-[#F08030]',
    water: 'bg-[#6890F0]',
    electric: 'bg-[#F8D030]',
    grass: 'bg-[#78C850]',
    ice: 'bg-[#98D8D8]',
    fighting: 'bg-[#C03028]',
    poison: 'bg-[#A040A0]',
    ground: 'bg-[#E0C068]',
    flying: 'bg-[#A890F0]',
    psychic: 'bg-[#F85888]',
    bug: 'bg-[#A8B820]',
    rock: 'bg-[#B8A038]',
    ghost: 'bg-[#705898]',
    dragon: 'bg-[#7038F8]',
    dark: 'bg-[#705848]',
    steel: 'bg-[#B8B8D0]',
    fairy: 'bg-[#EE99AC]',
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <header className="flex items-center justify-between mb-6">
        <Link href="/" className="flex items-center gap-2 text-[#3c5aa6] hover:text-[#ffcb05] transition">
          <ChevronLeft size={24} />
          <span className="font-bold">Back to Pokédex</span>
        </Link>
        <button className="p-2 rounded-full bg-white shadow-md hover:bg-[#ffcb05] transition">
          <Heart className="text-[#3c5aa6]" size={20} />
        </button>
      </header>


      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-[#3c5aa6]">

        {/* Pokémon Header */}
        <div className={`relative h-48 ${typeColors[pokemon.types[0].type.name] || 'bg-gray-400'} p-6`}>
          <div className="absolute -bottom-16 left-6 w-32 h-32">
            <img 
              src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
              alt={pokemon.name}
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <span className="text-white/80 text-sm">#{pokemon.id.toString().padStart(3, '0')}</span>
              <h1 className="text-3xl font-bold text-white capitalize">{pokemon.name}</h1>
            </div>
            <div className="flex gap-2">
              {pokemon.types.map((type: any) => (
                <span 
                  key={type.type.name}
                  className={`px-3 py-1 rounded-full text-white text-xs font-bold capitalize ${typeColors[type.type.name] || 'bg-gray-500'}`}
                >
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="p-6 pt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="bg-[#f0f8ff] p-4 rounded-xl">
              <h2 className="text-lg font-bold text-[#3c5aa6] mb-3">Pokédex Data</h2>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-sm text-gray-500">Height</p>
                  <p className="font-medium">{(pokemon.height / 10).toFixed(1)} m</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Weight</p>
                  <p className="font-medium">{(pokemon.weight / 10).toFixed(1)} kg</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Abilities</p>
                  <div className="space-y-1">
                    {pokemon.abilities.map((ability: any) => (
                      <p key={ability.ability.name} className="font-medium capitalize">
                        {ability.ability.name.replace('-', ' ')}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f0f8ff] p-4 rounded-xl">
              <h2 className="text-lg font-bold text-[#3c5aa6] mb-3">Training</h2>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-sm text-gray-500">Base Exp</p>
                  <p className="font-medium">{pokemon.base_experience}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Capture Rate</p>
                  {/* <p className="font-medium">{(pokemon.species.capture_rate / 255 * 100).toFixed(1)}%</p> */}
                </div>
              </div>
            </div>
          </div>


          <div className="bg-[#f0f8ff] p-4 rounded-xl">
            <h2 className="text-lg font-bold text-[#3c5aa6] mb-3">Base Stats</h2>
            <div className="space-y-2">
              {pokemon.stats.map((stat: any) => (
                <div key={stat.stat.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="capitalize text-gray-600">
                      {stat.stat.name.replace('-', ' ')}
                    </span>
                    <span className="font-medium">{stat.base_stat}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${stat.base_stat > 50 ? 'bg-green-500' : 'bg-yellow-500'}`}
                      style={{ width: `${Math.min(100, stat.base_stat)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="space-y-4">
            <div className="bg-[#f0f8ff] p-4 rounded-xl">
              <h2 className="text-lg font-bold text-[#3c5aa6] mb-3">Moves</h2>
              <div className="flex flex-wrap gap-2">
                {pokemon.moves.slice(0, 10).map((move: any) => (
                  <span 
                    key={move.move.name}
                    className="px-2 py-1 bg-white rounded-full text-xs capitalize shadow-sm"
                  >
                    {move.move.name.replace('-', ' ')}
                  </span>
                ))}
              </div>
              {pokemon.moves.length > 10 && (
                <p className="text-xs text-gray-500 mt-2">+{pokemon.moves.length - 10} more moves</p>
              )}
            </div>

            <div className="bg-[#f0f8ff] p-4 rounded-xl">
              <h2 className="text-lg font-bold text-[#3c5aa6] mb-3">Sprites</h2>
              <div className="grid grid-cols-2 gap-2">
                <img src={pokemon.sprites.front_default} alt="Front Default" className="w-full" />
                <img src={pokemon.sprites.back_default} alt="Back Default" className="w-full" />
                {pokemon.sprites.front_shiny && (
                  <img src={pokemon.sprites.front_shiny} alt="Front Shiny" className="w-full" />
                )}
                {pokemon.sprites.back_shiny && (
                  <img src={pokemon.sprites.back_shiny} alt="Back Shiny" className="w-full" />
                )}
              </div>
            </div>
          </div>
        </div>


        <div className="bg-[#3c5aa6] p-6">
          <h2 className="text-xl font-bold text-white mb-4">Evolution Chain</h2>
          <div className="flex justify-center items-center gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full p-2 w-24 h-24 mx-auto mb-2">
                <img src={pokemon.sprites.front_default} className="w-full h-full" />
              </div>
              <p className="text-white font-medium capitalize">{pokemon.name}</p>
            </div>
            <div className="text-white">
              <p className="text-sm">Level 16</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full p-2 w-24 h-24 mx-auto mb-2">
                <img src={pokemon.sprites.front_default} className="w-full h-full" />
              </div>
              <p className="text-white font-medium">Ivysaur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}