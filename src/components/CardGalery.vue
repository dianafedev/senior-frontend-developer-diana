<template>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
    <img
      :class="['w-full h-72 object-cover p-1', { 'rounded-xl': cardType !== 'pets' }]"
      :src="imageUrl"
      alt="Image"
    />
    <div class="flex flex-col gap-2 p-4">
      <template v-if="cardType === 'pets'">
        <h3 class="text-base text-dark font-bold">MO231 - Pomeranian White</h3>
        <div class="flex items-center text-gray text-xs">
          <span class="mr-2">Gane:</span>
          <span class="font-bold">Male</span>
          <span class="font-bold mx-2">&#x2022;</span>
          <span class="mr-2">Age:</span>
          <span class="font-bold">20 Months</span>
        </div>
        <h4 class="text-base text-dark font-bold">6.900.000 VND</h4>
      </template>
      <template v-if="cardType === 'product'">
        <h3 class="text-base text-dark font-bold">
          Reflex Plus Adult Cat Food Salmon
        </h3>
        <div class="flex items-center text-gray text-xs">
          <span class="mr-2">Product:</span>
          <span class="font-bold">Dog Food</span>
          <span class="font-bold mx-2">&#x2022;</span>
          <span class="mr-2">Size:</span>
          <span class="font-bold">385gm</span>
        </div>
        <h4 class="text-base text-dark font-bold">6.900.000 VND</h4>
        <div
          v-if="withGive"
          class="flex items-center bg-cream p-2 rounded-lg"
        >
          <img
            src="@/assets/icons/give.png"
            class="h-5"
            alt="Give"
          />
          <span class="font-bold mx-2">&#x2022;</span>
          <h4 class="text-sm font-bold">Free Toy & Free Shaker</h4>
        </div>
      </template>
      <template v-if="cardType === 'knowledge'">
        <span
          class="flex justify-center items-center w-32 rounded-full bg-blue-sea px-2 py-1 text-xs font-medium text-white"
          >Pet knowledge</span
        >
        <h3 class="text-base text-dark font-bold">
          What is a Pomeranian? How to Identify Pomeranian Dogs
        </h3>
        <p class="text-sm text-dark">
          The Pomeranian, also known as the Pomeranian (Pom dog), is always in
          the top of the cutest pets. Not only that, the small, lovely, smart,
          friendly, and skillful circus dog breed.
        </p>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cardType: {
    type: String,
    default: '',
  },
  withGive: {
    type: Boolean,
    default: false,
  },
  imageUrl: {
    type: String,
    default: ''
  }
})
</script>
