import { type PokemonResume } from "../models/Pokemon"
//descomentar para os testes:
//import { buscaPokemon, type PokeID } from "../services/PokeApiService" 

export let catalogo: PokemonResume[] = [];

export function adicionarAoCatalogo(
    lista:PokemonResume[], 
    pokemon:PokemonResume
): void {
    if(pokemon === null){
        console.log(`[ERRO] Entrada inválida.`)
    }
    else if( lista.find((p:PokemonResume) => p.id === pokemon.id) ){
        console.log(`[AVISO] ${pokemon.name} já está no catalogo.`)
    } else {
        lista.push(pokemon)    
        console.log(`[OK] ${pokemon.name} adicionado ao catalogo.`)
    }
}

export function listarCatalogo(lista: PokemonResume[]) : void {
    lista.forEach(pokemon => {
        console.log(`#${pokemon.id} - ${pokemon.name} | Tipos: ${pokemon.types} | Altura: ${pokemon.height} | Peso: ${pokemon.weight} | HP: ${pokemon.hp} | Ataque: ${pokemon.attack} | Defesa: ${pokemon.defense}`)
    });
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
//     let resposta:any = await buscaPokemon(25)
//     console.log(adicionarAoCatalogo(catalogo,resposta))
//     resposta = await buscaPokemon(55)
//     console.log(adicionarAoCatalogo(catalogo,resposta))
//     resposta = await buscaPokemon(25)
//     console.log(adicionarAoCatalogo(catalogo,resposta))
//     console.log(catalogo)
//     resposta = await buscaPokemon(5555)
//     console.log(resposta)
//     console.log(adicionarAoCatalogo(catalogo,resposta))
// }
// catalogoPokemon()

