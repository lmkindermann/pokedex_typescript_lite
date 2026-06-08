import { catalogoPokemon } from "./controllers/TerminalController"
import { fileService } from "./services/BoxService"
import { buscaPokemon, type PokeID } from "./services/PokeApiService" 
import { join } from 'path'

async function main(){
    console.log("Welcome to the Pokédex TypeScript Lite")
    
    // Configuração inicial
    let resposta: any
    let pokeBag: PokeID[] = []
    const filepath = join(__dirname, "../pc_box.json")
    const cat = new catalogoPokemon()
    const fs = new fileService(filepath)
    
    // Carrega dados iniciais do arquivo json (vazio se for o 1o. uso)
    cat.catalogo = await fs.readData()
    cat.listarCatalogo()

    // Gera ID de 6 pokemons aleatórios (entre 1 e 151) para a demonstração da aplicação
    // Adiciona todos no catálogo
    for(let i=0; i<=5; i++){
        pokeBag[i] = ((Math.random()*150)+1).toFixed(0)
        resposta = await buscaPokemon(pokeBag[i]!)
        cat.adicionarAoCatalogo(resposta)
    }

    // Lista todos os Pokemons do catálogo
    cat.listarCatalogo()

    // Tenta adicionar um Pokemon duplicado
    resposta = await buscaPokemon(pokeBag[0]!)
    cat.adicionarAoCatalogo(resposta)

    // Remove um Pokemon do catálogo
    cat.removerDoCatalogo(Number(pokeBag[5]))

    // Lista o catálogo Pokemon novamente
    // Um Pokemon recente deve ter sido removido
    cat.listarCatalogo()

    // Tenta remover um Pokemon inexistente do catálogo
    cat.removerDoCatalogo(152)

    // Adiciona um Pokemon através do nome e não do ID
    resposta = await buscaPokemon("chikorita")
    cat.adicionarAoCatalogo(resposta)

    // Lista o catálogo Pokemon novamente
    // O Pokemon adicionado pelo nome deve estar presente
    cat.listarCatalogo()

    // Remove três Pokemons previamente adicionados para manter outros 3 no catálogo
    // (ou menos se houve duplicados durante os 6 primeiros adicionados)
    cat.removerDoCatalogo(152) //"chikorita"
    cat.removerDoCatalogo(Number(pokeBag[3]))
    cat.removerDoCatalogo(Number(pokeBag[4]))
    
    // Lista o catálogo Pokemon novamente
    // Deve haver 3 Pokemons agora (ou menos)
    cat.listarCatalogo()

    // Salva o catálogo no arquivo JSON mapeado
    // Estes Pokemons devem estar disponíveis na próxima execução da aplicação
    await fs.saveData(cat.catalogo)

    // Descomente as linhas abaixos para testar condições de erros
    
    // // Tenta adicionar um Pokemon inexistente no catálogo
    // // Vai gerar uma condição de erro e interromper a aplicação
    // resposta = await buscaPokemon(5555)
    // cat.adicionarAoCatalogo(resposta)

    // // Tenta adicionar um Pokemon com entrada nula
    // // Vai gerar uma condição de erro e interromper a aplicação
    // cat.adicionarAoCatalogo(null!)

    // // Tenta buscar um Pokemon com a URL incorreta
    // // Vai gerar uma condição de erro e interromper a aplicação
    // resposta = await buscaPokemon("pikachu","https://pokeapiii.co/api/v2/pokemon/")

    // Caso contrário, a aplicação será encerrada aqui
    console.log("Finishing PokeDex TypeScript Lite app")
}
main()
