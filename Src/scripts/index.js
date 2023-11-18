
import { getPokemonList , getPokemon } from "./request.js";

// const pokemonListSize = await getPokemonList()
const pokemonList =await getPokemon(10);


console.log(pokemonList);
