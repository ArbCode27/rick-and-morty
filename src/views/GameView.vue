<template>
  <div
    v-if="characters[0]?.items"
    class="w-full h-[100vh] flex items-end justify-center gap-8 p-2 pb-12"
  >
    <GameCard
      @dragover.prevent
      @dragenter.prevent
      v-for="item in characters"
      :key="item?.name"
      :card="item"
      :characters="item?.items"
      :equalCharacters="equalCharacters"
      @drop="onDrop($event, item)"
      @start-drag="startDrag"
    />
  </div>
</template>
<script setup lang="ts">
import GameCard from '@/components/game/GameCard.vue'
import type ICharacter from '@/interfaces/ICharacter'
import { computed, onMounted, reactive } from 'vue'

const characters = reactive<Array<{ name: string; items: Array<ICharacter> }>>([])
const equalCharacters = computed(() => {
  const equalAliens = characters[1].items.filter(
    (item) => item.species?.toLocaleLowerCase() === 'alien'
  )

  const equalHumans = characters[0].items.filter(
    (item) => item.species?.toLocaleLowerCase() === 'human'
  )

  if (equalAliens.length === 5 && equalHumans.length === 5) {
    return true
  } else {
    return false
  }
})

const startDrag = (
  event: DragEvent,
  card: { name: string; items: Array<ICharacter> },
  item: ICharacter
) => {
  event.dataTransfer?.setData('text/plain', JSON.stringify({ cardName: card.name, item: item }))
}

const onDrop = (event: DragEvent, dest: { name: string; items: Array<ICharacter> }) => {
  const data = event.dataTransfer?.getData('text/plain')
  const { cardName, item } = JSON.parse(data as string)
  const originCard = characters.find((item) => item.name === cardName)
  if (originCard) {
    originCard.items = originCard?.items.filter((character) => character.id !== item.id)
  }
  dest.items.push(item)
}

onMounted(async () => {
  function getRandomElements(arr: Array<ICharacter>) {
    const result = []
    const arrayCopy = [...arr] // Hacemos una copia para no modificar el array original

    while (result.length < 5 && arrayCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length)
      result.push(arrayCopy[randomIndex])
      arrayCopy.splice(randomIndex, 1) // Eliminamos el elemento ya seleccionado
    }

    return result
  }

  const humans = await fetch(`https://rickandmortyapi.com/api/character/?species=Human`)
  const humansJson = await humans.json()

  const aliens = await fetch(`https://rickandmortyapi.com/api/character/?species=Alien`)
  const aliensJson = await aliens.json()

  const humansArray = getRandomElements(
    humansJson.results.filter((item: any) => item.species === 'Human')
  )
  const aliensArray = getRandomElements(aliensJson.results)

  const charactersArray = humansArray.concat(aliensArray)
  const sortCharacters = charactersArray.sort(() => Math.random() - 0.5)
  console.log(sortCharacters.filter((item) => item.species === 'Human').length)

  characters.push(
    {
      name: 'Humans',
      items: sortCharacters.slice(0, 5)
    },
    {
      name: 'Aliens',
      items: sortCharacters.slice(5)
    }
  )
})
</script>
<style></style>
