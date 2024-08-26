<template>
  <div
    class="hero bg-base-200 min-h-screen text-white"
    style="
      background-image: url(https://th.bing.com/th/id/R.3440e8e54fc2b341bfbb40fde0096999?rik=yiT4aE%2flRX2Fwg&pid=ImgRaw&r=0);
    "
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content w-full flex-col items-center justify-end lg:flex-row-reverse">
      <div class="text-center max-w-[400px] lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">
          Join the wildest dimension in the multiverse! Sign up now on our Rick and Morty website
          for exclusive content, theories, episodes, and more. Don't miss out on the adventure!
        </p>
      </div>
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form class="card-body">
          <div v-if="session.error" class="w-full flex justify-center text-cencer text-red-700">
            <div role="alert" class="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Incorrect email or password</span>
            </div>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="email"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="password"
              class="input input-bordered"
              required
            />
          </div>
          {{ session.session }}
          <div class="form-control mt-6">
            <button class="btn btn-primary" @click.prevent="login">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useSessionStore } from '@/stores/session'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const session = useSessionStore()
const email = ref('')
const password = ref('')

const login = () => {
  session.login(email.value, password.value)
  if (session.session) {
    router.push('/')
  }
}
</script>
<style scoped></style>
