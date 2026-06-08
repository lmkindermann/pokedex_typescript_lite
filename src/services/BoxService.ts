import { readFile, writeFile } from 'node:fs/promises'
import { type PokemonResume } from "../models/Pokemon"

export class fileService{
    json_file_path: string

    constructor(filePath: string){
        this.json_file_path = filePath
    }

    async readData(): Promise<PokemonResume[]> {
        try {
            const fileContent: string = await readFile(this.json_file_path, 'utf-8')
            console.log(`Catálogo carregado de ${this.json_file_path}`)
            return JSON.parse(fileContent)
        } catch {            
            console.log(`Novo catálogo inicializado`)
            return []
        }
    }

    async saveData(data: PokemonResume[]): Promise<void> {
        await writeFile(
            this.json_file_path,
            JSON.stringify(data, null, 2)
        )
        console.log(`Catálogo salvo em ${this.json_file_path}`)
    }
}