import { type PokemonResume } from "../models/Pokemon";
import { APIError } from "../models/CustomErrors"
export type PokeID = number | string

export async function buscaPokemon(id: PokeID, enter_url?: string): Promise<PokemonResume | null> {
    try{
        let url:string = ''
        enter_url !== undefined ? url = enter_url + id : url = "https://pokeapi.co/api/v2/pokemon/" + id      
        const resposta = await fetch(url)
        if (!resposta.ok){
            throw new APIError("[ERRO] Pokémon não encontrado: pokemon-inexistente.")                     
        }
        const dados = await resposta.json()
        const pokeData: PokemonResume = {
            id: dados.id,
            name: dados.name,
            height: dados.height,
            weight: dados.weight,
            types: dados.types.map((t:any) => t.type.name),
            hp: dados.stats.find((s:any) => s.stat.name === "hp")?.base_stat,
            attack: dados.stats.find((s:any) => s.stat.name === "attack")?.base_stat,
            defense: dados.stats.find((s:any) => s.stat.name === "defense")?.base_stat
        }
        return pokeData
    } catch(error){
        if (error instanceof APIError){
            throw error
        }
        throw new APIError('[ERRO] Não foi possível buscar o Pokémon. Falha de comunicação com API')     
    }
}