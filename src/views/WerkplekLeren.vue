<script setup>
</script>
<template>
  <main>
    <section class="content">
      <section class="top">
        <h2>Tijdens Werkplekleren 2 werden wij ingedeeld in groepjes <br>en kregen wij een project toegewezen.</h2>
        <p>Hier moeten wij onze case beschrijven en een eindreflectie uploaden.</p>
      </section>
      <section class="middle">
        <h3>Projectbeschrijving
        </h3>
        <p>
          Voor het vak Werkplekleren 2 werkte ik samen in een team bestaande uit studenten Digitale vormgeving Design, Web en Programmeren. Wij kregen Musea Maaseik toegewezen.
          Het doel van het project was het ontwerpen en ontwikkelen van een nieuwe kinderwebsite en bijhorende campagne voor Musea Maaseik. De website moest visueel aantrekkelijk, gebruiksvriendelijk en functioneel zijn voor een jong doelpubliek.
        </p>
        <h3>Mijn aandeel, de technische uitwerking</h3>
        <p>De website werd opgebouwd met een Vue.js-frontend en een C#-backend. Deze combinatie zorgde voor een moderne, snelle en schaalbare webapplicatie. Een belangrijk technisch onderdeel was het volledige accountbeheersysteem, dat ik heb uitgewerkt in samenwerking met de programmeerstudenten. Dit systeem omvatte registratie, login, uitloggen en een wachtwoord reset functionaliteit via e-mail. Het was een uitdagende maar leerrijke samenwerking.</p>
      <h3>Design & Campagne/App</h3>
        <p>Naast de technische kant werd er ook een volledig nieuw campagneconcept bedacht. Het grafisch design team zorgde voor een frisse, kindvriendelijke huisstijl die aansluit bij de doelgroep. Er werd nagedacht over kleurgebruik, typografie en een toegankelijke gebruikerservaring. Er werd ook een mini-app ontworpen waarin kids een leerrijke quiz kunnen voltooien.</p>
      <h3>Samenwerking & proces</h3>
        <p>Het team kwam elke donderdag en vrijdag samen om de voortgang te bespreken en taken op elkaar af te stemmen. De diversiteit in het team zorgde voor waardevolle inzichten vanuit verschillende vakgebieden. </p>
      <h3>Wat ik er uit heb geleerd, resultaat</h3>
        <p>Het eindresultaat is een functionele kinderwebsite met een volledig werkend accountbeheersysteem, een doordacht visueel concept en een campagne die Musea Maaseik kan inzetten om een jonger publiek aan te trekken. Ik ben trots op wat ons team heeft bereikt en de manier waarop we de verschillende disciplines succesvol hebben samengebracht. Ieder van ons heeft nieuwe kennis opgedaan, nieuwe soft & hard skills ontwikkeld en vooral sociaal veel sterker geworden.</p>
      </section>
      <section class="bottom">
        <h2></h2>

      </section>
    </section>
  </main>
</template>
<style scoped>
.content{
  margin: 110px 60px 30px 60px;
}
.top h2{
  font-weight: bold;
  color: var(--white);
  line-height: 1.2;
  margin-bottom: 10px;
}
.top p{
  color: var(--accent);
  margin-bottom: 22px;
}
.middle{
  background-color: var(--black-soft);
  padding: 4px 16px 20px 16px;
}
h3{
  margin-bottom: 10px;
  margin-top: 20px;
  color: var(--white);
}
p{
  line-height: 1.2;
  letter-spacing: 0.2px;
}

.bottom h2{
  font-weight: bold;
  color: var(--white);
  margin-top: 30px;
}

@media (max-width: 650px){
  .content{
    margin: 80px 30px 30px 30px
  }
  p{
    font-size: 0.8rem;
  }
  h2{
    font-size: 1.2rem;
  }
}

</style>
