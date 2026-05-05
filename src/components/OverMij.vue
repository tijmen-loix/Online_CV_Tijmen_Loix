<template>
  <section class="content">
    <section class="top">
      <h1>Over mij</h1>
      <p>Leuke weetjes</p>
    </section>
    <section class="middle">
      <section class="middle-left">
        <section class="card">
          <p>Talenkennis</p>
          <section class="card-bottom">
            <p><span style="color: var(--white)">Nederlands</span> ---- Moedertaal</p>
            <div style="background: var(--black-soft); border-radius: 2px; height: 3px">
              <div
                style="background: var(--accent); width: 100%; height: 3px; border-radius: 2px"
              ></div>
            </div>
            <p><span style="color: var(--white)">Engels</span> ---- Heel goed</p>
            <div style="background: var(--black-soft); border-radius: 2px; height: 3px">
              <div
                style="background: var(--accent); width: 90%; height: 3px; border-radius: 2px"
              ></div>
            </div>
            <p><span style="color: var(--white)">Frans</span> ---- basis</p>
            <div style="background: var(--black-soft); border-radius: 2px; height: 3px">
              <div
                style="background: var(--accent); width: 25%; height: 3px; border-radius: 2px"
              ></div>
            </div>
            <p><span style="color: var(--white)">Duits</span> ---- basis</p>
            <div style="background: var(--black-soft); border-radius: 2px; height: 3px">
              <div
                style="background: var(--accent); width: 15%; height: 3px; border-radius: 2px"
              ></div>
            </div>
            <p><span style="color: var(--white)">Chinees</span> ---- NULL</p>
            <div style="background: var(--black-soft); border-radius: 2px; height: 3px">
              <div
                style="background: var(--accent); width: 0; height: 3px; border-radius: 2px"
              ></div>
            </div>
          </section>
        </section>
        <section class="card">
          <p>Eigenschappen</p>
          <section class="card-bottom2">
            <p>Creatief</p>
            <p>Sportief</p>
            <p>Zelfstandig</p>
            <p>Bezige bij</p>
            <p>Probleem oplosser</p>
            <p>Sociaal dier</p>
            <p>Goede humor</p>
          </section>
        </section>
      </section>
      <section class="bottom">
        <section class="middle-right">
          <section class="left">
            <p>Leeftijd</p>
            <p>Woonplaats</p>
            <p>Opleiding</p>
            <p>Rijbewijs</p>
            <p>Studentenjob</p>
            <p>Hobby's</p>
            <p>E-mail</p>
            <p>Telefoon</p>
          </section>
          <section class="right">
            <p>18 jaar oud</p>
            <p>Zutendaal, Limburg</p>
            <p>PXL Digitale Vormgeving (web developer)</p>
            <p>Categorie B</p>
            <p>Horeca medewerker - zaal</p>
            <p>DJ, Badminton, Fitness</p>
            <p>tijmenloix@icloud.com</p>
            <p>+32 468 48 55 95</p>
          </section>
        </section>
        <section class="links">
          <a href="https://instagram.com/tijmenloix" target="_blank">Instagram</a>
          <a href="https://www.facebook.com/tijmen.loix" target="_blank">Facebook</a>
          <a href="https://www.linkedin.com/in/tijmen-loix-5a03593ab/" target="_blank">LinkedIn</a>
        </section>
      </section>
    </section>
  </section>
</template>
<style scoped>
.content {
  margin: 20px 60px;
}
.top h1 {
  color: white;
  font-weight: bold;
}
.middle {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
}
.middle-right {
  display: flex;
  width: 100%;
}

.middle-right p {
  padding: 4px 10px 4px 14px;
  margin: 0 0 10px 0;
  background-color: var(--black-soft);
}
.right {
  color: var(--white);
  text-align: right;
  width: 100%;
}
.right p {
  padding: 4px 20px 4px 0;
}
.card {
  background-color: var(--black-soft);
  padding: 12px 20px 4px 18px;
  margin: 0 0 20px 0;
  width: 100%;
}
.middle-left {
  width: 46%;
}
.card-bottom {
  margin: 10px 5px 20px 80px;
  text-align: left;
}
.card-bottom p {
  margin: 16px 0 8px 0;
}
.card-bottom2 {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 2px 28px;
  margin: 10px 20px 20px 80px;
}
.card-bottom2 p {
  color: var(--accent);
}
.bottom {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.links {
  margin-top: 94px;
  text-align: right;
}
.links a {
  color: var(--white);
  margin-right: 16px;
  transition: 0.3s;
  text-decoration: none;
  border: 1px solid var(--white);
  padding: 2px 10px;
  border-radius: var(--border-radius);
}
.links a:hover {
  color: var(--accent);
  transition: 0.3s;
  border: 1px solid var(--accent);
  box-shadow: 0 0 10px var(--accent-glow);
}

@media (max-width: 1200px) {
  .card-bottom2,
  .card-bottom {
    margin: 10px 20px 20px 40px;
  }
  .middle-left {
    width: 40%;
  }
  .bottom {
    width: 60%;
  }
}
@media (max-width: 1050px) {
  .middle {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .middle-left {
    width: 100%;
  }
  .bottom {
    width: 100%;
  }
  .top h1 {
    font-size: 1.4rem;
  }
  .links {
    margin-top: 20px;
  }
}
@media (max-width: 660px) {
  .card-bottom2,
  .card-bottom {
    margin: 10px 10px 20px 10px;
    font-size: 0.8rem;
  }
  .bottom p {
    font-size: 0.8rem;
  }

  .links a {
    font-size: 0.8rem;
  }
  .bottom p {
    font-size: 0.6rem;
  }
  .content {
    margin: 30px 30px;
  }
}
@media (max-width: 480px) {
  .links a {
    font-size: 0.6rem;
  }
  .right p {
    padding: 4px 20px 4px -10px;
  }
}
@media (max-width: 410px) {
  .left p:nth-child(3) {
    padding: 12px 14px;
  }
}
@media (max-width: 320px) {
  .left p:nth-child(3) {
    padding: 19px 14px;
  }
  .left p:nth-child(5) {
    padding: 12px 14px;
  }
}
</style>
