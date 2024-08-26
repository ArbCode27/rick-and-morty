<template>
  <RouterLink
    :to="{ name: 'character', params: { id: props.id } }"
    class="card bg-black bg-[#931f05] shadow-xl text-white"
  >
    <figure class="w-full">
      <img class="w-full -mb-[40px]" :src="props.image" :alt="props.name" />
    </figure>
    <div class="card-body">
      <div class="flex justify-between items-start">
        <h2 class="card-title">{{ props.name }}</h2>
        <p class="badge badge-outline py-3 max-w-[80px] scale-[0.8]" :class="statusColor">
          {{ props.status }}
        </p>
      </div>
      <div>
        <p class="text-gray-400 text-sm">{{ props.species }}</p>
        <p class="text-gray-400 text-sm">
          Origin: <span class="font-semibold ml-1">{{ props.origin.name }}</span>
        </p>
      </div>
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps(['name', 'id', 'status', 'species', 'origin', 'image', 'gender'])

const statusColor =
  props.status === 'Alive' ? 'badge-accent' : props.status === 'Dead' ? 'badge-error' : ''
</script>
