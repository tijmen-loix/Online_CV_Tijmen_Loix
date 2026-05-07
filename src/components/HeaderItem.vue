<script setup>
import { ref } from "vue"

const hamburger = ref(false)
</script>
<template>
  <header>
    <section class="header-left">
      <RouterLink to="/">TL</RouterLink>
      <a href="/Loix_Tijmen_cv.pdf" download="Loix_Tijmen_cv.pdf" target="_blank">
        Download hier mijn cv als PDF
      </a>
    </section>
    <section class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/#projects">Projecten</RouterLink>
      <RouterLink to="/#opleidingen">Opleidingen</RouterLink>
      <RouterLink to="/#overMij">Over mij</RouterLink>
      <RouterLink to="/wpl">Werkplekleren</RouterLink>
      <RouterLink to="/contact" class="btn">Contact</RouterLink>
    </section>
    <section class="hamburger">
      <img @click="hamburger = true" src="@/img/hamburger.svg" alt="Hamburger" />
      <section class="hamburger-inner" v-if="hamburger">
        <img class="cross" src="@/img/cross.svg" alt="cross" @click="hamburger = false" />
        <RouterLink @click="hamburger = false" to="/">Home</RouterLink>
        <RouterLink @click="hamburger = false" to="/#projects">Projecten</RouterLink>
        <RouterLink @click="hamburger = false" to="/#opleidingen">Opleidingen</RouterLink>
        <RouterLink @click="hamburger = false" to="/#overMij">Over mij</RouterLink>
        <RouterLink @click="hamburger = false" to="/wpl">Werkplekleren</RouterLink>
        <RouterLink @click="hamburger = false" to="/contact" class="btn">Contact</RouterLink>
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

.header-left a:nth-child(1) {
  color: var(--accent);
  font-weight: bold;
  font-size: 1.2rem;
}
.header-left a:nth-child(1):hover {
  cursor: pointer;
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
.header-left a:nth-child(2) {
  color: var(--white-soft);
}
a:hover {
  color: var(--accent);
  transition: 0.2s;
}
.hamburger {
  display: none;
}

@media (max-width: 1120px){
  .header-left {
    gap: 30px;
  }
  .header-left a {
    font-size: 0.8rem;
  }
  .nav a {
    margin: 0 10px;
    font-size: 0.8rem;
  }
}

@media (max-width: 970px) {
  .header-left {
    gap: 20px;
  }
  .header-left a {
    font-size: 0.6rem;
  }
  .nav a {
    margin: 0 10px;
    font-size: 0.6rem;
  }
}
@media (max-width: 770px) {
  .nav {
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
    padding: 100px 40px;
    gap: 10px;
  }
  .hamburger-inner a {
    color: var(--white);
    text-decoration: none;
    font-size: 1.4rem;
  }
  .hamburger-inner .btn {
    width: fit-content;
    margin-top: 20px;
    padding: 2px 10px;
  }
  .cross {
    position: absolute;
    width: 35px !important;
    right: 40px;
    top: 40px;
    z-index: 2;
  }
}
</style>
