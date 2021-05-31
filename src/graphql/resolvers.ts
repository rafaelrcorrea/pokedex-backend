import { getPokemon, getPokemons } from './models/pokemons'

const resolvers = {
  Query: {
    getPokemon,
    getPokemons
  }
}

export default resolvers
