<script setup>
import { Analytics } from "@vercel/analytics/vue"
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
  <Analytics />
</template>
<style scoped></style>
