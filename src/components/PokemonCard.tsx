import Link from "next/link";

export default function PokemonCard({ pokemon }: { pokemon: any }) {
  const id = pokemon.url.split("/").slice(-2, -1)[0];
  
  return (
    <Link href={`/pokemon/${id}`} className="block group active:scale-95 transition-transform">
      <div className="relative bg-white rounded-xl border-4 border-[#3c5aa6] p-4 shadow-lg hover:shadow-xl hover:shadow-[#ffcb05]/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden">


        <div className="absolute -top-3 -left-3 z-10 group-hover:rotate-180 transition-transform duration-500">
        {/* <div className="absolute top-2 right-2 z-10"> */}
          <div className="relative bg-white rounded-full p-1 border-2 border-[#3c5aa6] shadow-md w-8 h-8">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="h-1/2 bg-[#ff0000]"></div>
              <div className="h-1/2 bg-white"></div>
              <div className="absolute inset-0 w-2 h-2 bg-[#3c5aa6] rounded-full m-auto"></div>
            </div>
          </div>
          <span className="absolute -bottom-5 left-0 right-0 text-xs font-bold text-[#3c5aa6] text-center">
            #{id.padStart(3, "0")}
          </span>
        </div>


        <div className="absolute inset-0 bg-[#ffcb05] opacity-0 group-hover:opacity-10 transition-opacity rounded-lg"></div>

        <div className="h-40 flex items-center justify-center relative">

          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
            }
            className={`w-full h-32 object-contain group-hover:scale-110 transition-transform`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
            }}
            alt={pokemon.name}
          />

          <span className="absolute bottom-2 right-2 text-[#3c5aa6] opacity-0 group-hover:opacity-100 transition-opacity">
            ▶
          </span>
        </div>

        <div className="text-center mt-2 relative inline-block">
          <h3 className="font-bold text-lg capitalize text-[#3c5aa6] relative inline-block">
            {pokemon.name}
            <span className="absolute bottom-0 left-0 h-0.5 bg-[#ffcb05] w-0 group-hover:w-full transition-all duration-300"></span>
          </h3>
        </div>


        <div className="flex justify-center gap-1 mt-2">
          {["grass", "poison"].slice(0, 2).map((type) => (
            <span
              key={type}
              className="px-2 py-0.5 text-xs font-bold rounded-full bg-[#78C850] text-white capitalize"
            >
              {type}
            </span>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-8 bg-[#3c5aa6] flex items-center justify-center text-white font-bold text-sm overflow-hidden transition-all duration-300 rounded-b-lg">
          View Details
        </div>
      </div>
    </Link>
  );
}