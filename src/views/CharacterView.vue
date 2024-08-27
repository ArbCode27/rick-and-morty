<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col items-center">
      <figure class="skeleton w-[300px] h-[300px] rounded-full overflow-hidden">
        <img
          :src="character.image"
          class="max-w-full max-h-full object-cover rounded-lg shadow-2xl"
        />
      </figure>

      <div class="text-center">
        <h1 class="text-5xl font-bold mb-3">{{ character.name }}</h1>
        <div class="stats stats-vertical md:stats-horizontal w-full shadow">
          <div class="stat place-items-center">
            <div class="stat-title">Species</div>
            <div class="stat-value">{{ character.species }}</div>
          </div>

          <div class="stat place-items-center">
            <div class="stat-title">Gender</div>
            <div class="stat-value">{{ character.gender }}</div>
          </div>

          <div class="stat place-items-center">
            <div class="stat-title">Status</div>
            <div class="stat-value">{{ character.status }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { RickAndMorty } from '@/services/RickAndMorty'
const services = new RickAndMorty()
const route = useRoute()
const character = services.getCharacter()

onMounted(async () => {
  await services.fetchWithId(route.params.id as string)
})
</script>

<style></style>
