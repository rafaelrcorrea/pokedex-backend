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

  async getPokemons ({ limit, offset } : {limit: number, offset: number}) : Promise<Pokemon[]> {
    const pokeList = await this.api.getPokemonsList({ limit, offset })
    return this.api.resource(pokeList?.results.map(item => item.url))
  }
}

export default new PokedexApi()
