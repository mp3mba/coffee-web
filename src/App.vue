<script setup>
import Home from './components/Home.vue'
import Capuccino from './components/Capuccino.vue'
import NavBar from './components/pages/NavBar.vue'
import Price from './components/Price.vue'
import Cta from './components/Cta.vue'
import Talk from './components/Talk.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="px-5">
    <NavBar />
    <Home></Home>
    <Capuccino />
    <Price />
    <Cta />
    <Talk />
    <Footer />
  </div>
</template>

