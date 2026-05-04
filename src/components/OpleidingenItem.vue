<template>
  <section class="content">
    <section class="top">
      <h1>Opleidingen</h1>
      <p>& ervaringen</p>
    </section>
    <section class="bottom">
      <section class="left">
        <h2>-- Hogeschool</h2>
        <section class="card">
          <h3>PXL Digital - Digitale Vormgeving (web developer)</h3>
          <h4>Web developer</h4>
          <p>2025 - Diploma verwacht in 2027</p>
        </section>
        <h2>-- Secundair onderwijs</h2>
        <section class="card">
          <h3>Diploma van secundair onderwijs</h3>
          <h4>Onderwijskwalificatie niveau 4 Sportbegeleiding bij GO! Atheneum Martinus Bilzen</h4>
          <p>Behaald op 30/6/2025</p>
        </section>
        <section class="card">
          <h3>Getuigschrift TSO 2de graad</h3>
          <h4>Secundair onderwijs Sport GO! Atheneum Martinus Bilzen</h4>
          <p>Diploma behaald in 2023</p>
        </section>
        <section class="card">
          <h3>Getuigschrift A 1ste graad</h3>
          <h4>
            Secundair onderwijs Stem-wetenschappen (meer conceptueel) Technisch Instituut Sint-Jozef
          </h4>
          <p>Diploma behaald in 2021</p>
        </section>
      </section>
      <section class="right">
        <h2>-- Werkervaring</h2>
        <section class="card">
          <h3>Student horeca medewerker</h3>
          <h4>'t Zutendalertje</h4>
          <p>Mei 2023 - heden</p>
        </section>
        <section class="card">
          <h3>School stages - sportbegeleider</h3>
          <h4>Verschillende locaties</h4>
          <p>2023-2025</p>
        </section>
      </section>
    </section>
  </section>
</template>
<style scoped>
.content {
  margin: 40px 60px;
  border-bottom: 1px solid var(--white-soft);
}
.top h1 {
  color: var(--white);
  font-weight: bold;
}
.bottom {
  display: flex;
  justify-content: space-between;
  margin: 20px 20px 20px 0;
}
.left {
  width: 55%;
}
.right {
  width: 38%;
}

.bottom h3 {
  color: var(--white);
}
.bottom p {
  color: var(--accent);
}
.bottom h2 {
  margin-bottom: 20px;
}

.card {
  padding: 20px 30px;
  background-color: var(--black-soft);
  margin: 12px 0 18px 12px;
}
</style>
