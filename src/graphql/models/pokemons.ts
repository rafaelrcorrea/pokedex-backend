import PokedexApi from '../../services/PokedexApi'

export interface PokemonType {
  name: string,
  url: string
}

export interface PokemonSpriteOtherType {
  'front_default': string
}

export interface PokemonSpriteOther {
  'dream_world': PokemonSpriteOtherType,
}

export interface PokemonSprites {
  front_default: string,
  front_shiny: string,
  front_female: string,
  front_shiny_female: string,
  backend_default: string,
  back_shiny: string,
  back_female: string,
  back_shiny_female: string,
  other: PokemonSpriteOther
}

export interface Pokemon {
  id: string,
  name: string,
  height: number,
  types: [PokemonType],
  sprites: PokemonSprites
}

export const getPokemon = async (_: any, { id } : { id: string}): Promise<Pokemon> => {
  return await PokedexApi.getPokemon(id)
}
