<template>
  <header
    class="h-fit w-full flex justify-between items-center px-4 fixed top-0 navbar-bg z-[1000]"
  >
    <RouterLink :to="{ name: 'home' }" class="flex items-center text-white gap-2">
      <figure class="w-[80px] h-[80px]">
        <img class="w-full h-full object-cover" :src="logo" alt="logo" />
      </figure>
      <p>Rick and Morty</p>
    </RouterLink>

    <RouterLink
      v-if="session.session === false"
      :to="{ name: 'login' }"
      class="btn btn-outline btn-primary px-8"
      >Login</RouterLink
    >
    <button v-if="session.session" class="btn btn-outline btn-primary px-8" @click="session.logout">
      Logout
    </button>
  </header>
  <slot></slot>
</template>
<script setup lang="ts">
import logo from '@/assets/logo.png'
import { RouterLink } from 'vue-router'
import { useSessionStore } from '@/stores/session'

const session = useSessionStore()
</script>
<style scoped>
.navbar-bg {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
