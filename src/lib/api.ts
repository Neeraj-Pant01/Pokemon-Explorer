export const fetchPokemonList = async () =>{
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    return resp.json();
}

export const fetchPokemonDetails = async (id : string) =>{
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return resp.json();
}