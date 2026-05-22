<script setup>
import { ref } from "vue"

const submitted = ref(false)

const handleSubmit = async (e) => {
  e.preventDefault()
  const form = e.target

  const formData = new FormData(form)
  formData.append("_subject", "Nieuw bericht van portfolio")

  await fetch("https://formsubmit.co/tijmenloix@icloud.com", {
    method: "POST",
    body: formData,
  })

  submitted.value = true
  form.reset()
}
</script>

<template>
  <section class="content">
    <section>
      <section class="left-top">
        <h4>-- contact</h4>
        <h1>
          Laten we <br />
          samenwerken.
        </h1>
        <p>
          Geïnteresseerd in samenwerking of <br />
          heb je een vraag? Stuur een bericht.
        </p>
      </section>
      <section class="left-bottom">
        <p class="label">E-mail</p>
        <p class="info">tijmenloix@icloud.com</p>
        <p class="label">Telefoon</p>
        <p class="info">+32 468 48 55 95</p>
        <p class="label">Locatie</p>
        <p class="info">Zutendaal, Limburg</p>
        <p class="label">Socials</p>
        <section class="links">
          <a href="https://instagram.com/tijmenloix" target="_blank">Instagram</a>
          <a href="https://www.facebook.com/tijmen.loix" target="_blank">Facebook</a>
          <a href="https://www.linkedin.com/in/tijmen-loix-5a03593ab/" target="_blank">LinkedIn</a>
        </section>
      </section>
    </section>
    <section class="right">
      <h2>Stuur een bericht</h2>
      <p>Ik reageer doorgaans binnen 24 uur.</p>
      <form @submit="handleSubmit">
        <section class="right-top">
          <section>
            <p>Voornaam</p>
            <input type="text" id="name" name="name" required placeholder="Tijmen" />
          </section>
          <section>
            <p>Achternaam</p>
            <input type="text" id="lastName" name="lastName" required placeholder="Loix" />
          </section>
        </section>
        <p>E-mail adres</p>
        <input type="email" id="email" name="email" required placeholder="jouw@email.com" />
        <p>Onderwerp</p>
        <input
          type="text"
          id="onderwerp"
          name="onderwerp"
          required
          placeholder="Samenwerking / Vraag / Andere"
        />
        <p>Bericht</p>
        <textarea
          type="text"
          id="bericht"
          name="bericht"
          required
          placeholder="Vertel me meer..."
        ></textarea>
        <section class="right-bottom">
          <button type="submit">Verstuur bericht</button>
          <p v-if="submitted" class="success">Bericht ontvangen!</p>
        </section>
      </form>
    </section>
  </section>
</template>
<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  margin: 114px 60px 60px 60px;
}
.left-top h1 {
  color: var(--white);
  font-weight: bold;
  font-size: 50px;
  line-height: 1.16;
}
.left-top p {
  color: var(--accent);
  margin-top: 20px;
  margin-bottom: 40px;
}
.info {
  color: var(--white);
  margin-bottom: 40px;
}

.links {
  margin-top: 20px;
}
.links a {
  color: var(--white);
  margin-right: 16px;
  transition: 0.3s;
  text-decoration: none;
  border: 1px solid var(--white);
  padding: 2px 10px;
  border-radius: var(--border-radius);
  font-size: 14px;
}
.links a:hover {
  color: var(--accent);
  transition: 0.3s;
  border: 1px solid var(--accent);
  box-shadow: 0 0 10px var(--accent-glow);
}
form {
  margin-top: 20px;
  width: 100%;
}
.right {
  background-color: var(--black-soft);
  padding: 30px;
  width: 60%;
}
.right h2 {
  color: var(--white);
  font-weight: bold;
}
.right p {
  font-size: 12px;
}
.right-top {
  display: flex;
  gap: 10px;
  width: 100%;
}
.right-top section {
  width: 100%;
}
input,
textarea {
  width: 100%;
  outline: none;
  border: 1px solid var(--accent);
  padding: 10px;
  background-color: var(--black);
  color: var(--white);
  margin: 6px 0 16px 0;
}

textarea {
  min-height: 140px;
  resize: vertical;
}
button {
  background-color: var(--accent);
  border: none;
  color: var(--white);
  font-weight: bold;
  outline: none;
  padding: 12px 18px;
}
button:hover {
  cursor: pointer;
}
.right-bottom p {
  color: var(--white);
  font-size: 16px;
}
.right-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 850px) {
  .content {
    display: flex;
    flex-direction: column;
  }
  .right {
    width: 100%;
  }
  .left-bottom {
    display: none;
  }
}
@media (max-width: 650px) {
  .left-top h1 {
    font-size: 1.6rem;
    margin-top: 8px;
  }
  .left-top p {
    font-size: 0.8rem;
  }
  .left-top h4 {
    font-size: 0.8rem;
  }
  .content {
    margin: 80px 30px;
  }
  .right {
    margin-top: -10px;
  }
  .right h2 {
    font-size: 1rem;
  }
  .right-bottom p {
    font-size: 0.8rem;
    text-align: right;
  }
}
</style>
