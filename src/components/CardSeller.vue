<template>
  <img
    class="w-full h-20"
    :src="imageUrl"
    alt="Image"
  />
</template>

<script setup>
defineProps({
  imageUrl: {
    type: String,
    default: ''
  }
})
</script>
