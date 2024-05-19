<template>
  <div class="lg:px-28 px-4 lg:py-8 py-2">
    <HeaderSection
      title="Take a look at some of our pets"
      message="Whats new?"
    />
    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-7 gap-16 py-4">
      <CardSeller :image-url="image1" />
      <CardSeller :image-url="image2" />
      <CardSeller :image-url="image3" />
      <CardSeller :image-url="image4" />
      <CardSeller :image-url="image5" />
      <CardSeller :image-url="image6" />
      <CardSeller :image-url="image7" />
    </div>
    <div class="block lg:hidden mt-8">
      <Button
        label="View all our sellers"
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
import HeaderSection from '@/components/HeaderSection.vue'
import CardSeller from '@/components/CardSeller.vue'
import Button from '@/components/Button.vue'
import arrowRight from '@/assets/icons/arrow-right.png'
import image1 from '@/assets/images/sellers/image-1.png'
import image2 from '@/assets/images/sellers/image-2.png'
import image3 from '@/assets/images/sellers/image-3.png'
import image4 from '@/assets/images/sellers/image-4.png'
import image5 from '@/assets/images/sellers/image-5.png'
import image6 from '@/assets/images/sellers/image-6.png'
import image7 from '@/assets/images/sellers/image-7.png'
</script>
