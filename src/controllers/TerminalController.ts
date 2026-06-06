import { type PokemonResume } from "../models/Pokemon"

export let catalogo: PokemonResume[] = [];

export function adicionarAoCatalogo(
    lista:PokemonResume[], 
    pokemon:PokemonResume
): string { //retornar mensagem, checar se precisa retornar a lista em outro nivel da aplicação
    let status:string = ''
    if(pokemon === null){
        status = `[ERRO] Entrada inválida.`        
    }
    else if( lista.find((p:PokemonResume) => p.id === pokemon.id) ){
        status = `[AVISO] ${pokemon.name} já está no catalogo.`    
    } else {
        lista.push(pokemon)    
        status = `[OK] ${pokemon.name} adicionado ao catalogo.`
    }
    return status
}

//Teste
// export async function catalogoPokemon() {
//     for(let i=0; i<=2; i++){
//         let id:PokeID = (Math.random() * 150).toFixed(0)
//         const resposta:any = await buscaPokemon(id)
//         //catalogo.push(resposta) //rf
//         const msg:string = adicionarAoCatalogo(catalogo,resposta)
//         console.log(msg)
//     }
//     console.log(catalogo)
//     console.log("posição 2")
//     console.log(catalogo[1])
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

