export interface PokemonTypeDeClass {

  id: number,
  hp: number,
  cp: number,
  name: string,
  picture: string,
  types: string,
  created: string,

}

export interface resultPokemonApi {
  true: string | undefined,
  err: string | undefined
  userApi: string | undefined
}

/*

{
        "id": "2",
        "hp": "28",
        "cp": "6",
        "name": "Salamèche",
        "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        "types": "Feu",
        "created": "2023-09-04 13:49:02"
    },


 */
