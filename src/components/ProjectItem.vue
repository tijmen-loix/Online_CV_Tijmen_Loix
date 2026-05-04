<script setup>
import projects from "@/assets/Projects.json"
</script>
<template>
  <section class="content">
    <section class="top">
      <section>
        <h1>Mijn Projecten</h1>
        <p>School, werk en persoonlijk gerelateerde projecten</p>
      </section>
      <section>
        <p class="note">*Je kan de afbeeldingen horizontaal scrollen</p>
      </section>
    </section>
    <section
      class="project"
      v-for="(project, index) in projects"
      :key="project.id"
      :class="{ reverse: index % 2 !== 0 }"
    >
      <section class="images">
        <img v-for="img in project.images" :key="img" :src="img" alt="Pokedex" />
      </section>
      <section class="information">
        <h2>{{ project.project }}</h2>
        <h3>{{ project.projectClass }}</h3>
        <p>
          {{ project.description }}
        </p>
        <section class="skillsLink">
          <section class="skills">
            <p v-for="skill in project.skills" :key="skill">{{ skill }}</p>
          </section>
          <a v-if="project.github" :href="project.github" target="_blank">Link naar github</a>
          <a v-if="project.online" :href="project.online" target="_blank">Link naar de website</a>
        </section>
      </section>
    </section>
  </section>
</template>
<style scoped>
.content {
  margin: 50px 60px;
}
.top h1 {
  color: var(--white);
  font-weight: bold;
}
.top {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.note {
  font-style: italic;
  color: var(--accent);
  font-size: 12px;
  margin-top: 20px;
}
.project {
  width: 100%;
  border-bottom: 1px solid var(--white-soft);
  height: 320px;
  margin-top: 20px;
  display: flex;
}
.images {
  display: flex;
  width: 556px;
  height: 100%;
  overflow-y: hidden;
  overflow-x: auto;
}
.images img {
  border: 2px solid var(--black-soft);
  height: 320px;
  width: auto;
  object-fit: cover;
}
.skillsLink {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-top: 40px;
}
.skills {
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
  gap: 8px;
}
.skills p {
  padding: 2px 12px;
  border: 1px solid var(--white-soft);
  border-radius: var(--border-radius);
  transition: 0.3s;
  font-size: 12px;
  width: fit-content;
}
.skills p:hover {
  color: var(--accent);
  transition: 0.3s;
  cursor: pointer;
  border: 1px solid var(--accent);
  box-shadow: 0 0 8px var(--accent-glow);
}
.information {
  margin: 36px 0 0 40px;
  width: 52%;
}
.information h2 {
  color: var(--white);
  font-weight: bold;
}
.information h3 {
  color: var(--accent);
}
.information > p {
  margin-top: 26px;
  font-size: 12px;
  width: 80%;
}
.information a {
  text-decoration: none;
  color: var(--white);
  margin-top: 8px;
}

.project.reverse {
  flex-direction: row-reverse;
  text-align: left;
  justify-content: space-between;
}
.project.reverse .information {
  margin: 36px 40px 0 0;
  text-align: left;
}
</style>
