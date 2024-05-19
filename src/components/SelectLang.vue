<template>
  <div class="relative inline-block text-left">
    <button
      @click="toggleDropdown"
      class="inline-flex justify-center w-28 px-2 py-2 text-sm font-medium text-primary bg-transparent rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
    >
      <img
        :src="selectedLanguage.flag"
        alt=""
        class="w-5 h-5 mr-2"
      />
      {{ selectedLanguage.label }}
      <svg
        class="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <div
        class="py-1"
        role="none"
      >
        <template
          v-for="language in languages"
          :key="language.code"
        >
          <button
            @click="selectLanguage(language)"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center w-full"
            role="menuitem"
          >
            <img
              :src="language.flag"
              alt=""
              class="w-5 h-5 mr-2"
            />
            {{ language.name }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import englishFlag from '@/assets/images/lang/english.png'
import vietnamFlag from '@/assets/images/lang/vietnam.png'
import indonesiaFlag from '@/assets/images/lang/indonesia.png'

const isOpen = ref(false)
const selectedLanguage = ref({
  name: 'Vietnam',
  flag: vietnamFlag, // Example flag URL for English
  code: 'vt',
  label: 'VND'
})

const languages = ref([
  { name: 'English', flag: englishFlag, code: 'en', label: 'ENG' },
  { name: 'Vietnam', flag: vietnamFlag, code: 'vt', label: 'VND' },
  { name: 'Indonesia', flag: indonesiaFlag, code: 'id', label: 'IDN' },
])

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function selectLanguage(language) {
  selectedLanguage.value = language
  isOpen.value = false
}
</script>

<style scoped>
/* Optional: Add custom styles here */
</style>
