<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  iconURL: {
    type: String,
    default: '',
  },
  backgroundColor: {
    type: String,
    default: '',
  },
  textColor: {
    type: String,
    default: '',
  },
  borderColor: {
    type: String,
    default: '',
  },
  fontWeight: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <button
    :class="[
      width,
      fontWeight,
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : 'bg-primary hover:bg-primary-light text-white',
      'flex justify-center items-center gap-2 padding-button font-montserrat text-base leading-none border-2 rounded-full',
    ]"
  >
    {{ label }}
    <img
      v-if="iconURL"
      :src="iconURL"
      alt="button icon"
      class="ml-1 rounded-full h-5"
    />
  </button>
</template>
