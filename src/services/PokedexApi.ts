import Pokedex from 'pokedex-promise-v2'
import { Pokemon } from '../graphql/models/pokemons'

class PokedexApi {
  api: any
  constructor () {
    this.api = new Pokedex()
  }

  getPokemon (id: string) : Promise<Pokemon> {
    return this.api.getPokemonByName(id)
  }
}

export default new PokedexApi()
