<script setup></script>
<template>
  <section class="content">
    <section class="content-left">
      <p>-- Zutendaal, Limburg</p>
      <h1 class="naam">Tijmen Loix</h1>
      <h1 class="function">Full-Stack Web Developer</h1>
      <p class="description">
        Enthousiaste, leergierige jongeman met een passie voor web development, <br />
        creatief design en technologische snuifjes.<br />
        Student Digitale Vormgeving aan PXL Hogeschool
      </p>
      <section class="skills">
        <p>HTML/CSS</p>
        <p>JavaScript</p>
        <p>Vue</p>
        <p>SQL</p>
        <p>Express</p>
        <p>UI/UX</p>
        <p>Figma</p>
        <p>Adobe Photoshop/Illustrator</p>
        <p>Microsoft Office</p>
      </section>
      <section class="contact">
        <a href="#"
          >Neem contact op <img class="arrow" src="@/img/arrow-right.svg" alt="Arrow"
        /></a>
        <a href="#projects">Bekijk projecten</a>
      </section>
    </section>
    <section>
      <img class="imgTijmen" src="@/img/TijmenGlow.png" alt="Tijmen" />
    </section>
  </section>
  <hr />
</template>
<style scoped>
.content {
  display: flex;
  justify-content: space-between;
}
.content-left {
  display: flex;
  flex-direction: column;
  margin: 106px -10px 20px 60px;
}
.naam {
  color: var(--white);
  font-weight: bold;
  font-size: 3.2rem;
  margin-bottom: -8px;
  margin-top: -8px;
}
.function {
  font-size: 1.8rem;
  color: var(--accent);
}
.description {
  margin-top: 30px;
}
.skills {
  display: flex;
  flex-wrap: wrap;
  width: 800px;
}
.skills p {
  padding: 2px 12px;
  border: 1px solid var(--white-soft);
  border-radius: var(--border-radius);
  margin: 20px 12px -6px 0;
  transition: 0.3s;
}
.skills p:hover {
  color: var(--accent);
  transition: 0.3s;
  cursor: pointer;
  border: 1px solid var(--accent);
  box-shadow: 0 0 8px var(--accent-glow);
}
.imgTijmen {
  margin: 0 20px 20px 0;
  object-fit: cover;
  width: 600px;
  height: 580px;
  z-index: 0;
  border-bottom: 1px solid var(--accent);
}
.contact {
  display: flex;
  margin-top: 34px;
}
.contact a:nth-child(1) {
  display: flex;
  align-items: center;
  background-color: var(--accent);
  color: var(--white);
  text-decoration: none;
  padding: 6px 12px;
  border-radius: var(--border-radius);
  font-weight: bold;
  transition: 0.3s;
}
.contact a:nth-child(1):hover {
  box-shadow: 0 0 10px var(--accent-glow);
  transition: 0.3s;
}

.contact a:nth-child(2) {
  color: var(--white-soft);
  text-decoration: none;
  margin: 6px 0 0 18px;
  transition: 0.3s;
}
.contact a:nth-child(2):hover {
  color: var(--accent);
  transition: 0.3s;
}
.arrow {
  width: 22px;
  margin: 2px 0 0 8px;
}
hr {
  background-color: var(--accent);
  height: 1px;
  margin-top: -26px;
  z-index: 1;
  border: none;
  outline: none;
}
</style>
