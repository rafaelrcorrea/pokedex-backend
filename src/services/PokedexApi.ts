import Pokedex from 'pokedex-promise-v2'
import { Pokemon, PokemonColor } from '../graphql/models/pokemons'

class PokedexApi {
  api: any
  constructor () {
    this.api = new Pokedex()
  }

  async getPokemon (id: string) : Promise<Pokemon> {
    const pokemon = await this.api.getPokemonByName(id)
    const pokemonSpecies = await this.api.resource(pokemon.species.url)
    return { ...pokemon, species: { color: pokemonSpecies.color?.name, description: pokemonSpecies.flavor_text_entries?.find(flavor => flavor.language.name === 'en' && flavor.version.name === 'ruby')?.flavor_text } }
  }

  async getPokemons ({ limit, offset } : {limit: number, offset: number}) : Promise<Pokemon[]> {
    const pokeList = await this.api.getPokemonsList({ limit, offset })

    return this.api.resource(pokeList?.results.map(item => item.url))
  }

  async getPokemonsColors () : Promise<PokemonColor[]> {
    const result: PokemonColor[] = []
    const colors = await this.api.getPokemonColorsList()
    const pokeColors = await this.api.resource(colors?.results.map(item => item.url))
    pokeColors?.forEach(color => {
      color.pokemon_species?.forEach(({ name }) => {
        result.push({ name, color: color.name })
      })
    })
    return result
  }
}

export default new PokedexApi()
