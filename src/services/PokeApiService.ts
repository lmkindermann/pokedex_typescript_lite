import { type PokemonResume } from "../models/Pokemon";
type PokeID = number | string

async function buscaPokemon(id: PokeID): Promise<PokemonResume | null> {
    try{
        const url = "https://pokeapi.co/api/v2/pokemon/" + id
        const resposta = await fetch(url)
        if (!resposta.ok){
            console.log("[ERRO] Pokémon não encontrado: pokemon-inexistente.")
            return null           
            //throw new Error(`Erro na requisição: ${resposta.status}`)
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
        console.log("[ERRO] Não foi possível buscar o Pokémon.")
        return null
        //console.error("[ERRO] Não foi possível buscar o Pokémon.",error)        
    }
}