import { type PokemonResume } from "../models/Pokemon"
import { buscaPokemon, type PokeID } from "../services/PokeApiService" 

export let catalogo: PokemonResume[] = [];

export function adicionarAoCatalogo(
    lista:PokemonResume[], 
    pokemon:PokemonResume
): void {
    if(pokemon === null){
        console.log(`[ERRO] Entrada inválida: pokemon-inexistente`)
    }
    else if( lista.find((p:PokemonResume) => p.id === pokemon.id) ){
        console.log(`[AVISO] ${pokemon.name} já está no catálogo.`)
    } else {
        lista.push(pokemon)    
        console.log(`[OK] ${pokemon.name} adicionado ao catálogo.`)
    }
}

export function listarCatalogo(lista: PokemonResume[]) : void {
    if( lista.length === 0){
        console.log(`[AVISO] Catálogo vazio.`)
    } else {    
        console.log("Catálogo atual:")
        lista.forEach(pokemon => {
            console.log(`#${pokemon.id} - ${pokemon.name} | Tipos: ${pokemon.types} | Altura: ${pokemon.height} | Peso: ${pokemon.weight} | HP: ${pokemon.hp} | Ataque: ${pokemon.attack} | Defesa: ${pokemon.defense}`)
        });
    }
}

export function removerDoCatalogo(
    lista:PokemonResume[], 
    id:number
) : void {
    if( lista.find(l => l.id === id) ) {
        const position = lista.findIndex(l => l.id === id)
        lista.splice(position,1)
        console.log(`[OK] Pokémon removido do catálogo.`)
    } else {
        console.log(`[AVISO] Nenhum Pokémon encontrado com esse ID.`)
    }
    //buscar - se tiver: remover
    // - se não tiver: avisar
    // 
}

//Teste
// export async function catalogoPokemon() {
//     for(let i=0; i<=2; i++){
//         let id:PokeID = (Math.random() * 150).toFixed(0)
//         const resposta:any = await buscaPokemon(id)
//         //catalogo.push(resposta)
//         //const msg:string = adicionarAoCatalogo(catalogo,resposta)
//         adicionarAoCatalogo(catalogo,resposta)
//         //console.log(msg)
//     }
//     //console.log(catalogo)
//     //console.log("posição 2")
//     //console.log(catalogo[1])
//     //console.log("chamando listarCatalogo aqui...")
//     listarCatalogo(catalogo)
// }
// catalogoPokemon()

//Teste 2
// export async function catalogoPokemon() {
//     listarCatalogo(catalogo)
//     let resposta:any = await buscaPokemon(25)
//     adicionarAoCatalogo(catalogo,resposta)
//     resposta = await buscaPokemon(55)
//     adicionarAoCatalogo(catalogo,resposta)
//     resposta = await buscaPokemon(25)
//     adicionarAoCatalogo(catalogo,resposta)
//     listarCatalogo(catalogo)
//     resposta = await buscaPokemon(5555)
//     adicionarAoCatalogo(catalogo,resposta)
//     removerDoCatalogo(catalogo,5555)
//     listarCatalogo(catalogo)
//     removerDoCatalogo(catalogo,55)
//     listarCatalogo(catalogo)
// }
// catalogoPokemon()

