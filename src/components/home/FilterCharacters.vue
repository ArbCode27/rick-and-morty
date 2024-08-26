<template>
  <div>
    <div class="flex gap-3">
      <div>
        <div class="label">
          <span class="label-text">Status</span>
        </div>
        <select @change="filterStatus" class="select select-warning w-full min-w-[160px]">
          <option value="">All</option>
          <option>Alive</option>
          <option>Dead</option>
          <option>Unknown</option>
        </select>
      </div>
      <div>
        <div class="label">
          <span class="label-text">Species</span>
        </div>
        <select @change="filterSpecies" class="select select-success w-full min-w-[160px]">
          <option value="">All</option>
          <option>Human</option>
          <option>Alien</option>
          <option>Cronenberg</option>
          <option>Disease</option>
          <option>Humanoid</option>
          <option>Mythological Creature</option>
          <option>Parasite</option>
          <option>Poopybutthole</option>
          <option>Robot</option>
          <option>Vampire</option>
          <option>Unknown</option>
        </select>
      </div>
      <div>
        <div class="label">
          <span class="label-text">Gender</span>
        </div>
        <select
          @change="filterGender"
          class="select select-bordered select-info w-full min-w-[160px]"
        >
          <option value="">All</option>
          <option>Female</option>
          <option>Male</option>
          <option>Genderless</option>
          <option>Unknown</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const emits = defineEmits(['handlerStatus', 'handlerSpecies', 'handlerGender'])
const filterStatus = (e: any) => {
  emits('handlerStatus', e.target?.value)
}

const filterSpecies = (e: any) => {
  emits('handlerSpecies', e.target?.value)
}

const filterGender = (e: any) => {
  emits('handlerGender', e.target?.value)
}
</script>
<style lang=""></style>
