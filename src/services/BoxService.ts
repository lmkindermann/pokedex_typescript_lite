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
            return JSON.parse(fileContent)
        } catch {
            
            return []
        }
    }

    async saveData(data: PokemonResume[]): Promise<void> {
        await writeFile(
            this.json_file_path,
            JSON.stringify(data, null, 2)
        )
    }
}