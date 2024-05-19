<template>
  <div class="section-banner-two flex items-center bg-cream-dark rounded-lg">
    <div class="grid lg:grid-cols-5 grid-cols gap-4">
      <div class="lg:col-span-2 sm:col-spa">
        <div class="card-left ml-8">
          <div class="flex flex-col items-start gap-8">
            <h1
              class="lg:text-5xl text-4xl text-primary-text font-bold capitalize"
            >
              Adoption
            </h1>
            <h2
              class="lg:text-4xl text-4xl text-primary-text font-bold capitalize"
            >
              We need help. so do they.
            </h2>
            <p class="lg:text-base text-xs text-primary-text">
              Adopt a pet and give it a home, it will be love you back
              unconditionally.
            </p>
            <div class="flex gap-4">
              <Button
                label="View intro"
                backgroundColor="bg-transparent"
                borderColor="border-primary"
                textColor="text-primary-text"
                fontWeight="font-medium"
                width="lg:w-44 w-6/12"
                :iconURL="playIcon"
              />
              <Button
                label="Explore now"
                width="lg:w-44 w-6/12"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="lg:col-span-3 sm:col-span">
        <div class="card-right">
          <img src="@/assets/images/banner/hand.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/Button.vue'
import playIcon from '@/assets/icons/play-icon.png'
</script>
