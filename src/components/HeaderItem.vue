<script setup>

import {ref} from 'vue';

const hamburger = ref(false)


</script>
<template>
  <header>
    <section class="header-left">
      <h2>TL</h2>
      <a href="/src/assets/Loix_Tijmen_cv.pdf" download="Loix_Tijmen_cv.pdf" target="_blank">
        Download hier mijn cv als PDF
      </a>
    </section>
    <section class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/#projects">Projecten</RouterLink>
      <RouterLink to="/#opleidingen">Opleidingen</RouterLink>
      <RouterLink to="/#overMij">Over mij</RouterLink>
      <RouterLink to="/contact" class="btn">Contact</RouterLink>
    </section>
    <section class="hamburger">
      <img @click="hamburger=true" src="@/img/hamburger.svg" alt="Hamburger" />
      <section class="hamburger-inner" v-if="hamburger">
        <img class="cross" src="@/img/cross.svg" alt="cross" @click="hamburger=false"/>
        <RouterLink @click="hamburger=false" to="/">Home</RouterLink>
        <RouterLink @click="hamburger=false" to="/#projects">Projecten</RouterLink>
        <RouterLink @click="hamburger=false" to="/#opleidingen">Opleidingen</RouterLink>
        <RouterLink @click="hamburger=false" to="/#overMij">Over mij</RouterLink>
        <RouterLink @click="hamburger=false" to="/contact" class="btn">Contact</RouterLink>
      </section>
    </section>
  </header>
</template>
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid var(--white-softer);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 5%;
  background-color: var(--black);
  z-index: 2;
}

h2 {
  color: var(--accent);
  font-weight: bold;
  font-size: 1.2rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 40px;
}

a {
  text-decoration: none;
  font-size: 0.8rem;
  transition: 0.2s;
}
.nav a {
  margin: 0 20px;
  color: var(--white);
}
.header-left a {
  color: var(--white-soft);
}
a:hover {
  color: var(--accent);
  transition: 0.2s;
}
.hamburger {
  display: none;
}

@media (max-width: 950px) {
  .header-left {
    gap: 20px;
  }
  .header-left a{
    font-size: 0.6rem;
  }
  .nav a {
    margin: 0 10px;
    font-size: 0.6rem;
  }
}
@media (max-width: 650px) {
  .nav{
    display: none;
  }
  .hamburger {
    display: flex;
    flex-direction: column;
  }
  .hamburger img {
    width: 25px;
  }
  .hamburger-inner {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--black);
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 100px 80px;
    gap: 10px;
  }
  .hamburger-inner a{
    color: var(--white);
    text-decoration: none;
    font-size: 1.4rem;
  }
  .hamburger-inner .btn{
   width: fit-content;
    margin-top: 20px;
  }
  .cross{
    position: absolute;
    width: 35px !important;
    right: 40px;
    top: 40px;
    z-index: 2;
  }
}
</style>
