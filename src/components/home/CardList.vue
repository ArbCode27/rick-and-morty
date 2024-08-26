<template>
  <div class="md:px-20">
    <div class="divider"></div>
    <div class="flex flex-col lg:flex-row justify-between items-end pb-4">
      <FilterCharacters
        @handlerStatus="handlerStatus"
        @handlerSpecies="handlerSpecies"
        @handlerGender="handlerGender"
      />
      <div class="w-full lg:w-[250px] mt-3">
        <div>
          <div>
            <input
              v-model="search"
              class="w-full input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <transition-group
    class="grid p-2 md:grid-cols-3 lg:grid-cols-4 md:px-20 md:py-4 gap-8"
    name="card"
    tag="div"
  >
    <CharacterCard
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :gender="item.gender"
      :image="item.image"
      :name="item.name"
      :species="item.species"
      :status="item.status"
      :origin="item.origin"
    />
  </transition-group>
</template>
<script lang="ts" setup>
import { RickAndMorty } from '@/services/RickAndMorty'
import { computed, onMounted, reactive, ref } from 'vue'
import CharacterCard from '../CharacterCard.vue'
import FilterCharacters from './FilterCharacters.vue'

const services = new RickAndMorty()
const characters = services.getAll()
const search = ref('')
const items = computed(() => {
  const items = characters.value.filter((item) => {
    return item.name?.toLocaleLowerCase().includes(search.value.toLowerCase())
  })
  if (filters.gender) {
    return items.filter((item) => item.gender?.toLowerCase() === filters.gender.toLocaleLowerCase())
  }
  if (filters.status) {
    return items.filter((item) => item.status?.toLowerCase() === filters.status.toLocaleLowerCase())
  }

  if (filters.species) {
    return items.filter(
      (item) => item.species?.toLowerCase() === filters.species.toLocaleLowerCase()
    )
  } else return items
})

const filters = reactive({
  status: '',
  species: '',
  gender: ''
})

const handlerStatus = (value: string) => {
  filters.status = value
}

const handlerSpecies = (value: string) => {
  filters.species = value
}

const handlerGender = (value: string) => {
  filters.gender = value
}
onMounted(async () => {
  await services.fetchAll()
})
</script>
<style>
.card-enter-active,
.card-leave-active {
  transition: all 0.3s ease-in;
}

.card-enter-from,
.card-leave-to {
  opacity: 0;
  transition: translateY(8px);
}
</style>
