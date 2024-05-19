<template>
  <div class="lg:px-28 px-4 lg:py-8 py-2">
    <HeaderSection title="Our Products" message="Hard to choose right products for your pets?"/>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <CardGalery cardType="product" :imageUrl="image3" with-give />
      <CardGalery cardType="product" :imageUrl="image3" with-give />
      <CardGalery cardType="product" :imageUrl="image3" with-give />
      <CardGalery cardType="product" :imageUrl="image3" with-give />
    </div>
    <div class="block lg:hidden mt-8">
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
import HeaderSection from '@/components/HeaderSection.vue'
import CardGalery from '@/components/CardGalery.vue'
import Button from '@/components/Button.vue';
import image3 from '@/assets/images/products/image-3.png'
import arrowRight from '@/assets/icons/arrow-right.png'
</script>
