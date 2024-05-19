<template>
  <div class="flex justify-between items-center py-8">
    <div>
      <h2 class="text-base font-medium mb-2">{{ message }}</h2>
      <h1 class="text-2xl text-primary font-bold">
        {{ title }}
      </h1>
    </div>
    <div class="hidden lg:block">
      <Button
        label="View more"
        backgroundColor="bg-transparent"
        borderColor="border-primary"
        textColor="text-primary-text"
        fontWeight="font-medium"
        :iconURL="arrowRight"
      />
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue'
import arrowRight from '@/assets/icons/arrow-right.png'

defineProps({
  message: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})
</script>
