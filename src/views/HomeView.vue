<script setup>
import IntroductionItem from "@/components/IntroductionItem.vue"
import ProjectItem from "@/components/ProjectItem.vue"
import OpleidingenItem from "@/components/OpleidingenItem.vue"
import OverMij from "@/components/OverMij.vue"
</script>
<template>
  <main>
    <IntroductionItem />
    <ProjectItem id="projects" />
    <OpleidingenItem id="opleidingen" />
    <OverMij id="overMij" />
  </main>
</template>
<style scoped>
main {
  margin-top: 46px;
}
</style>
