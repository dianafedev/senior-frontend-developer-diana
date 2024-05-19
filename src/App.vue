<script setup>
import NavMenu from '@/components/NavMenu.vue'
import BannerHome from '@/sections/BannerHome.vue'
import WhatsNew from '@/sections/WhatsNew.vue'
import BannerFriend from '@/sections/BannerFriend.vue'
import OurProduct from '@/sections/OurProduct.vue'
import PetSellers from '@/sections/PetSellers.vue'
import BannerAdopt from '@/sections/BannerAdopt.vue'
import Knowledge from '@/sections/Knowledge.vue'
import Footer from '@/sections/Footer.vue'
</script>

<template>
  <main class="relative">
    <NavMenu />
    <section id="hero">
      <BannerHome />
    </section>
    <section id="whats-new">
      <WhatsNew />
    </section>
    <section id="banner-friend">
      <BannerFriend />
    </section>
    <section id="our-product">
      <OurProduct />
    </section>
    <section id="pet-sellers">
      <PetSellers />
    </section>
    <section id="banner-adopt">
      <BannerAdopt />
    </section>
    <section id="knowledge">
      <Knowledge />
    </section>
    <section id="footer">
      <Footer />
    </section>
  </main>
</template>

<style scoped>
</style>
