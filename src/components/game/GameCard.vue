<template>
  <div
    class="w-[400px] flex flex-col gap-2 bg-black items-center p-4 py-6 rounded-xl"
    :class="{ 'border border-green-400': props.equalCharacters }"
  >
    <p class="text-xl text-white font-semibold mb-4 uppercase">{{ props.card.name }}</p>
    <div
      draggable="true"
      @dragstart="($event) => emits('startDrag', $event, props.card, item)"
      v-for="item in props.characters"
      :key="item.id"
      class="w-full glass flex justify-between items-center p-3 rounded-md"
    >
      <figure class="w-[60px] h-[60px]">
        <img class="w-full h-full object-cover" :src="item.image" :alt="item.image" />
      </figure>
      <p class="text-sm text-white">{{ item.name }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps(['characters', 'card', 'equalCharacters'])
const emits = defineEmits(['startDrag'])
</script>
<style></style>
