<script setup></script>
<template>
  <header>
    <section class="header-left">
      <h2>TL</h2>
      <a href="/src/assets/Loix_Tijmen_cv.pdf" download="Loix_Tijmen_cv.pdf" target="_blank">
        Download hier mijn cv als PDF
      </a>
    </section>
    <section class="nav">
      <a href="#projects">Projecten</a>
      <a href="#opleidingen">Opleidingen</a>
      <a href="#overMij">Over mij</a>
      <a href="#">Werkplekleren</a>
      <a href="#" class="btn">Contact</a>
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
</style>
