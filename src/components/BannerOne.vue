<template>
  <div class="section-banner flex items-center bg-primary rounded-lg">
    <div class="grid lg:grid-cols-5 grid-cols gap-4">
      <div class="lg:col-span-3 sm:col-span">
        <div class="card-left">
          <img src="@/assets/images/banner/woman-dog.png" />
        </div>
      </div>
      <div class="lg:col-span-2 sm:col-spa">
        <div class="card-right mr-8">
          <div class="flex flex-col items-end gap-8">
            <h1
              class="lg:text-5xl text-4xl text-primary-text font-bold capitalize"
            >
              One more friend
            </h1>
            <h2
              class="lg:text-4xl text-4xl text-primary-text font-bold capitalize"
            >
              Thousands more fun!
            </h2>
            <p class="lg:text-base text-xs text-primary-text">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
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
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/Button.vue'
import playIcon from '@/assets/icons/play-icon.png'
</script>
