import { type PokemonResume } from "../models/Pokemon"
import { pokemonReport } from "../utils/textFormatters"

export class catalogoPokemon{
    catalogo: PokemonResume[] = [];

    constructor(){
        this.catalogo = []
    }

    adicionarAoCatalogo(pokemon:PokemonResume): void {
        if(pokemon === null){
            console.log(`[ERRO] Entrada inválida: pokemon-inexistente`)
        }
        else if( this.catalogo.find((p:PokemonResume) => p.id === pokemon.id) ){
            console.log(`[AVISO] ${pokemon.name} já está no catálogo.`)
        } else {
            this.catalogo.push(pokemon)
            console.log(`[OK] ${pokemon.name} adicionado ao catálogo.`)
        }
    }

    listarCatalogo(): void {
        if( this.catalogo.length === 0){
            console.log(`[AVISO] Catálogo vazio.`)
        } else {  
            pokemonReport(this.catalogo)  
        }
    }

    removerDoCatalogo(id:number): void {
        if( this.catalogo.find(l => l.id === id) ) {
            this.catalogo = this.catalogo.filter(l => l.id != id)        
            console.log(`[OK] Pokémon removido do catálogo.`)
        } else {
            console.log(`[AVISO] Nenhum Pokémon encontrado com esse ID.`)
        }
    }
}