import type ICharacter from '@/interfaces/ICharacter'
import { reactive, ref, type Reactive, type Ref } from 'vue'

export class RickAndMorty {
  private character: Ref<ICharacter>
  private characters: Ref<Array<ICharacter>>

  constructor() {
    this.character = ref<ICharacter>({})
    this.characters = ref<Array<ICharacter>>([])
  }

  getAll() {
    return this.characters
  }

  getCharacter() {
    return this.character
  }

  async fetchAll() {
    try {
      const res = await fetch('https://rickandmortyapi.com/api/character/')
      const json = await res.json()
      this.characters.value = await json.results
    } catch (err) {
      console.log(err)
    }
  }

  async fetchWithId(id: string) {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      const json = await res.json()
      this.character.value = await json
    } catch (err) {
      console.log(err)
    }
  }
}
