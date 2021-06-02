import { getPokemon, getPokemons, getPokemonsColors } from './models/pokemons'

const resolvers = {
  Query: {
    getPokemon,
    getPokemons,
    getPokemonsColors
  }
}

export default resolvers
