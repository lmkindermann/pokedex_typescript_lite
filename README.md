# Pokédex TypeScript Lite #


## Sobre o projeto 

O Pokédex TypeScript Lite é uma aplicação simples em Node.js com TypeScript que consulta dados de Pokémon na PokeAPI e organiza alguns resultados em um catálogo local durante a execução do programa. 

O projeto foi desenvolvido como atividade de avaliação no curso de Desenvolvimento de Software Back-End com foco em Node.js, promovido pelo SENAI/SC em parceria com o governo de Santa Catarina, através do programa SCTEC.

## Objetivo 

Praticar os principais conceitos do Módulo 01: 
- Node.js; 
- JavaScript no back-end; 
- TypeScript; 
- interfaces; 
- funções tipadas; 
- arrays; 
- objetos; 
- JSON; 
- métodos de array; 
- classes; 
- async/await; 
- fetch; 
- tratamento de erros; 
- GitHub; 
- GitFlow; 
- Kanban. 


## Tecnologias utilizadas 

- Node.js 
- TypeScript 
- TSX 
- PokeAPI 
- Git
- GitHub


## Pré-requisitos 

Antes de executar o projeto, é necessário ter instalado: 
- Node.js 
- npm
- tsx 
- Git


## Como instalar

Clone o repositório:
```
- bash
- git clone https://github.com/lmkindermann/pokedex_typescript_lite.git
```

Acesse a pasta do projeto:
```
- cd pokedex-typescript-lite
```

Instale as dependências: 
```
- npm install -D typescript @types/node tsx
```

Execute o projeto em ambiente de desenvolvimento: 
```
- npm run dev 
```

## Estrutura do projeto
```
pokedex-typescript-lite/
|
|--src/
|  |--controllers/
|  |  |--TerminalController.ts
|  |--models/
|  |  |--CustomErrors.ts
|  |  |--Pokemon.ts
|  |--services/
|  |  |--BoxService.ts
|  |  |--PokeApiService.ts
|  |--utils/ 
|  |  |--textFormatters.ts
|  |-- main.ts
|--package.json
|--pc_box.json
|--README.md
|--tsconfig.json
```

## Funcionalidades

- Buscar Pokémon por nome ou ID 
- Tratar erro de Pokémon inexistente
- Tratar erro de conexão à API
- Transformar resposta da API em objeto simplificado 
- Adicionar Pokémon ao catálogo local 
- Impedir Pokémon duplicado 
- Listar catálogo 
- Remover Pokémon por ID
- Armazenar catálogo em arquivo JSON
- Carregar catálogo de arquivo JSON
- Exibir mensagens no terminal 
- Exemplos de execução 
- Busca válida
 

# Comportamento esperado

## Configuração inicial e Template para testes
```
import { catalogoPokemon } from "./controllers/TerminalController"
import { fileService } from "./services/BoxService"
import { buscaPokemon, type PokeID } from "./services/PokeApiService" 
import { join } from 'path'

async function main(){
    let resposta: any
    let pokeBag: PokeID[] = []
    const filepath = join(__dirname, "../pc_box.json")
    const cat = new catalogoPokemon()
    const fs = new fileService(filepath)

    // Aqui vai as Entradas Testadas dos comportamentos esperados //

}
main()
```

## Busca Pokémon por nome ou ID
```
Entrada testada: 
- resposta = await buscaPokemon("pikachu")
- cat.adicionarAoCatalogo(resposta)
- resposta = await buscaPokemon(4)
- cat.adicionarAoCatalogo(resposta)
Saída obtida: 
- [OK] pikachu adicionado ao catálogo.
- [OK] charmander adicionado ao catálogo.
```

## Busca inválida por pokémon inexistente
```
Entrada testada:
- resposta = await buscaPokemon(9999)
- cat.adicionarAoCatalogo(resposta)
Saída obtida:
- APIError: [ERRO] Pokémon não encontrado: pokemon-inexistente.
```

## Busca inválida por falha de comunicação
```
Entrada testada:
- resposta = await buscaPokemon("pikachu","https://pokeapiii.co/api/v2/pokemon/")
Saída obtida:
- APIError: [ERRO] Não foi possível buscar o Pokémon. Falha de comunicação com API.
```

## Duplicidade
```
Entrada testada:
- resposta = await buscaPokemon("pikachu")
- cat.adicionarAoCatalogo(resposta)
- resposta = await buscaPokemon(25)
- cat.adicionarAoCatalogo(resposta)
Saída obtida: 
- [OK] pikachu adicionado ao catálogo.
- [AVISO] pikachu já está no catálogo.
```

## Remoção
```
Entrada testada:
- resposta = await buscaPokemon(133)
- cat.adicionarAoCatalogo(resposta)
- cat.removerDoCatalogo(133)
Saída obtida:
- [OK] eevee adicionado ao catálogo.
- [OK] Pokémon removido do catálogo.
```

## Listar catálogo
```
Entrada testada:
- resposta = await buscaPokemon(1)
- cat.adicionarAoCatalogo(resposta)
- resposta = await buscaPokemon('7')
- cat.adicionarAoCatalogo(resposta)
- cat.listarCatalogo()
Saída obtida:
- [OK] bulbasaur adicionado ao catálogo.
- [OK] squirtle adicionado ao catálogo.
- Catálogo atual:
- #1 - bulbasaur | Tipos: grass,poison | Altura: 7 | Peso: 69 | HP: 45 | Ataque: 49 | Defesa: 49
- #7 - squirtle | Tipos: water | Altura: 5 | Peso: 90 | HP: 44 | Ataque: 48 | Defesa: 65
```

## Salvar catálogo em arquivo JSON
```
Entrada testada:
- resposta = await buscaPokemon(1)
- cat.adicionarAoCatalogo(resposta)
- resposta = await buscaPokemon(4)
- cat.adicionarAoCatalogo(resposta)
- resposta = await buscaPokemon(7)
- cat.adicionarAoCatalogo(resposta)
- resposta = await buscaPokemon(25)
- cat.adicionarAoCatalogo(resposta)
- await fs.saveData(cat.catalogo)
Saída obtida:
- [OK] bulbasaur adicionado ao catálogo.
- [OK] charmander adicionado ao catálogo.
- [OK] squirtle adicionado ao catálogo.
- [OK] pikachu adicionado ao catálogo.
- Catálogo salvo em C:\Users\...\pokedex_typescript_lite\pc_box.json
```

## Carregar catálogo de arquivo JSON
```
Entrada testada:
- cat.catalogo = await fs.readData()
- cat.listarCatalogo()
Saída obtida:
- Catálogo carregado de C:\Users\...\pokedex_typescript_lite\pc_box.json
- Catálogo atual:
- #1 - bulbasaur | Tipos: grass,poison | Altura: 7 | Peso: 69 | HP: 45 | Ataque: 49 | Defesa: 49
- #4 - charmander | Tipos: fire | Altura: 6 | Peso: 85 | HP: 39 | Ataque: 52 | Defesa: 43
- #7 - squirtle | Tipos: water | Altura: 5 | Peso: 90 | HP: 44 | Ataque: 48 | Defesa: 65
- #25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60 | HP: 35 | Ataque: 55 | Defesa: 40
```

# Conceitos aplicados

- **TypeScript**\
Os elementos tipados, característicos da linguagem TypeScript, foram utilizados em todas as funções, classes e métodos desenvolvidos, incluíndo variáveis definidas para números e strings, interface para especificar e selecionar os campos desejados da API, parâmetros de configurações e mais...

- **Interface PokemonResumo**\
A interface PokemonResume() foi implementada para definir os atributos que seriam levantados nas buscas realizadas na PokeAPI, garantindo a segurança e a tipagem dos atributos envolvidos: ID, nome, tipos, altura, peso, HP, ataque e defesa.

- **Fetch e async/await**\
O comando fetch é aplicado para gerar uma requisição de dados da API através do uso de promises, configurando a função de busca com a diretiva async para seguir com a execução das demais instruções, enquanto aguarda a conclusão do recebimento dos dados com a diretiva await.

- **Tratamento de erros**\
Para evitar o processamento de valores indefinidos ou comportamentos inesperados, alguns mecanismos de detecção de erros foram adotadas nas funções de busca à PokeAPI e na manipulação do catálogo, onde ao detectar uma condição anômala, retorna um erro informando a razão e a localização da falha, interrompendo a execução da aplicação.

- **Métodos de array**\
Os métodos de array foram utilizados no projeto para diferentes finalidades, como:
  - filter: Para remoção de Pokémons do catálogo.
  - find: Para buscar informações específicas de Pokémons.
  - push: Para adicionar Pokémons no catálogo.
  - forEach: Para listar os Pokémons existentes no catálogo.
  - map: Para obter as informações de tipos de Pokémon.

- **Classe CatalogoPokemon**\
Para manipular o catálogo Pokémon, foram criados os seguintes métodos:
  - adicionarAoCatalogo(): Método que permite adicionar ao catálogo, as informações obtidas em uma busca na PokeAPI.
  - listarCatalogo(): Retorna as informações armazenadas de todos os Pokémons cadastrados no catálogo.
  - removerDoCatalogo(): Método que permite remover do catálogo um Pokémon específico através de sua ID.
  - constructor(): Configura a inicialização de um novo catálogo na memória ao criar um novo objeto da classe.


# Organização do Kanban

Link do Kanban:
[https://trello.com/b/MrlhzITV/pokedex-typescript-lite](https://trello.com/b/MrlhzITV/pokedex-typescript-lite)


# Branches utilizadas
- main
- develop
- feature/controllers
- feature/models
- feature/services
- feature/utils


# Sugestões de melhorias futuras
- Criar menu interativo no terminal
- Criar filtros por tipo de Pokémon 
- Criar uma API própria com Express
