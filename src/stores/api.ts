import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useApiStore = defineStore(
  'apiStore',
  () => {
    const page = ref(1)

    function nextPage() {
      page.value = page.value + 1
    }
    function previousPage() {
      page.value = page.value - 1
    }
    function selectPage(number: number) {
      page.value = number
    }

    return { page, previousPage, nextPage, selectPage }
  },
  {
    persist: {
      storage: sessionStorage,
      paths: ['session']
    }
  }
)
