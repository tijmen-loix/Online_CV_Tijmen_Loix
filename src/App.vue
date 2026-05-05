<script setup>
import { RouterView } from "vue-router"
import HeaderItem from "@/components/HeaderItem.vue"
import FooterItem from "@/components/FooterItem.vue"
</script>

<template>
  <header>
    <HeaderItem />
  </header>
  <RouterView />
  <footer>
    <FooterItem />
  </footer>
</template>
<style scoped></style>
