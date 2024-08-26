import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore(
  'session',
  () => {
    const session = ref(false)
    const error = ref(false)
    function login(email: string, password: string) {
      if (email === 'admin@admin.com' && password === '123456') {
        session.value = true
        error.value = false
      } else {
        error.value = true
      }
    }

    function logout() {
      session.value = false
    }

    return { session, error, login, logout }
  },
  {
    persist: {
      storage: sessionStorage,
      paths: ['session']
    }
  }
)
