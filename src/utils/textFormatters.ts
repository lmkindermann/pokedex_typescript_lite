import { type PokemonResume } from "../models/Pokemon"

export function pokemonReport(catalogo:PokemonResume[] ){
    console.log("Catálogo atual:")
    catalogo.forEach(pokemon => {
    console.log(`#${pokemon.id} - ${pokemon.name} | Tipos: ${pokemon.types} | Altura: ${pokemon.height} | Peso: ${pokemon.weight} | HP: ${pokemon.hp} | Ataque: ${pokemon.attack} | Defesa: ${pokemon.defense}`)        
    })
}