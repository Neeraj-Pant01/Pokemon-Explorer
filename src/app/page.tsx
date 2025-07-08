import PokemonList from "@/components/PokemonList";
import { fetchPokemonList } from "@/lib/api";

export default async function Home() {
  const { results } = await fetchPokemonList();

  return (
    <main className="min-h-screen bg-[#f0f8ff] p-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold mt-2 text-[#ffcb05] drop-shadow-[3px_3px_0px_#3c5aa6] font-press-start">
          Pokémon Explorer
        </h1>
        <p className="text-[#3c5aa6] mt-2 text-lg">Gotta Catch 'Em All!</p>
      </header>

      <PokemonList initialPokemon={results} />

      <div className="fixed inset-0 pointer-events-none border-[16px] border-[#3c5aa6] border-dotted opacity-20 z-50"></div>
    </main>
  );
}