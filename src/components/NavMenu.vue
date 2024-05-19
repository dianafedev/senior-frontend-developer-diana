<template>
  <header class="padding-x py-4 absolute z-10 w-full">
    <div class="lg:flex md:flex lg:gap-16 md:gap-8 lg:px-28 w-full">
      <div class="flex items-center justify-between">
        <button
          @click="toggleMenu"
          class="md:hidden p-2 focus:outline-none"
        >
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div>
          <img
            src="@/assets/images/logo.png"
            class="app-logo"
          />
        </div>
        <button
          @click="toggleSearch"
          class="md:hidden p-2 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-6 h-6"
          >
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </button>
      </div>
      <nav
        :class="[
          'lg:flex md:flex lg:items-center md:items-center lg:bg-transparent md:bg-transparent bg-white p-2 z-10',
          isMenuOpen ? 'block' : 'hidden',
        ]"
      >
        <ul class="space-y-4 md:space-y-0 md:flex md:space-x-8 text-primary">
          <li>
            <a
              href="#"
              class="font-montserrat font-bold text-base hover:text-blue-700"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              class="font-montserrat font-bold text-base hover:text-blue-700"
            >
              Category
            </a>
          </li>
          <li>
            <a
              href="#"
              class="font-montserrat font-bold text-base hover:text-blue-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              class="font-montserrat font-bold text-base hover:text-blue-700"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <nav
        :class="[
          'lg:flex md:flex lg:items-center md:items-center p-2 z-10',
          isSearchOpen ? 'block' : 'hidden',
        ]"
      >
        <ul class="lg:flex lg:items-center gap-4">
          <li>
            <div class="relative">
              <input
                type="text"
                class="lg:w-72 w-full pl-10 pr-4 py-2 border rounded-full"
                placeholder="Search something here!"
              />
              <div
                class="absolute inset-y-0 left-0 px-4 flex items-center pointer-events-none"
              >
                <svg
                  class="w-4 h-4 mr-2 w-10 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </li>
          <li class="lg:block hidden">
            <a href="#">
              <Button
                label="Join the community"
                fontWeight="font-bold"
              />
            </a>
          </li>
          <li class="lg:block hidden">
            <SelectLang />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import Button from './Button.vue'
import SelectLang from './SelectLang.vue'

const isMenuOpen = ref(false)
const isSearchOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  isSearchOpen.value = false
}

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
  isMenuOpen.value = false
}
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>
