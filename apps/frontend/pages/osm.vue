<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img src="/public/images/osm/osmbanner.png" cover rounded max-height="200" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h5 font-weight-bold">Online Soccer Manager</v-card-title>
          <v-card-text>
            <p class="mb-4">
              OSM staat ook wel voor Online Soccer Manager. Het is een voetbal simulatiespel, die dagelijks gespeeld wordt door duizenden gebruikers over de hele wereld. <br />
              In mijn eigen middelbare school periode (2001-2004), heb ik zelf veel OSM gespeeld. <br />
              In die tijd bestonden er nog geen apps, en was OSM alleen beschikbaar als website. <br />
              Inmiddels is het spel uitgegroeid tot een populair voetbalspel, dat beschikbaar is op Web, iOS en Android.
            </p>
            <p class="mb-4">
              In OSM speel je niet zelf een wedstrijd, maar hebben wij simulatie engines ontwikkeld die 's nachts alle wedstrijden simuleren. <br />
            De gebruiker stelt overdag zijn tactieken in, stelt de juist spelers op, of koopt nieuwe spelers van de transferlijst. 
            Nadat de gebruiker alles heeft ingesteld, hoeven ze alleen maar te wachten tot de engines starten. <br />
            Wanneer ze de volgende dag inloggen, zien ze het resultaat van hun wedstrijd terug. 
          </p>
            <p class="mb-4">
              OSM is het project waar ik 10 jaar lang altijd met veel plezier aan heb gewerkt.<br />
              Ik heb voornamelijk aan de webversie van OSM gewerkt (<a href="http://www.onlinesoccermanager.com" target="_blank">onlinesoccermanager.com</a>), in combinatie met de backend.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-img height="200px" src="/public/images/osm/osmweb.png" cover></v-img>
          <v-card-title>OSM Web</v-card-title>
          <v-card-text>
            De web frontend van OSM draait op een framework die we zelf hebben ontwikkeld, met behulp van Typescript. <br />
            <br />
            De belangrijkste library die we gebruiken is knockout.js, en gebruiken we voornamelijk om eenvoudig variablen te binden aan de html.
            <v-chip-group class="mt-4" column>
              <v-chip>Typescript</v-chip>
              <v-chip variant="elevated">Knockout.js</v-chip>
              <v-chip>.NET</v-chip>
              <v-chip variant="elevated">C#</v-chip>
              <v-chip>Linq</v-chip>
              <v-chip variant="elevated">Less</v-chip>
              <v-chip>Service Workers</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-btn target="_blank" rel="noopener" href="http://www.onlinesoccermanager.com/" text="Bekijken"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-img height="200px" src="/public/images/osm/aspnet-core.png" cover></v-img>
          <v-card-title>OSM Backend</v-card-title>
          <v-card-text>
            <p class="mb-4">Naast web, was de backend ook lange tijd onderdeel van mijn verantwoordelijkheden.</p>
            <p class="mb-4">
              Dit project maakt gebruik van het repository/service design pattern. <br />
              Dit zijn veel gebruikte patterns in .NET projecten, en helpen met het scheiden van je data en business logica. <br />
              Deze backend is inmiddels vele malen doorontwikkeld, en draait momenteel in kubernetes op een microservice architectuur.
            </p>
            <p class="mb-4">Leuk om te vermelden is dat de OSM backend ook het enige project is binnen Miniclip dat ook doet aan unit testing. Ik heb hierdoor dan ook veel ervaring opgedaan met unit testing in C#.</p>
            <v-chip-group class="mt-4" column>
              <v-chip>.NET</v-chip>
              <v-chip variant="elevated">Teamcity</v-chip>
              <v-chip>C#</v-chip>
              <v-chip variant="elevated">NUnit</v-chip>
              <v-chip>Linq</v-chip>
              <v-chip variant="elevated">Webapi</v-chip>
              <v-chip>REST</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "authentication",
});

const { typewriter } = useMenuComposable();

onMounted(() => {
  typewriter([`Hier geef ik een inkijkje in OSM, een project waar ik al ruim 10 jaar bij betrokken ben.`]);
});
</script>

<style></style>
