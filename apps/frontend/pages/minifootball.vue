<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img src="/public/images/minifootball/mf-banner2.webp" cover rounded max-height="200" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h5 font-weight-bold">Minifootball</v-card-title>
          <v-card-text>
            <p class="mb-4">In 2024 ben ik begonnen bij het Minifootball team. Minifootball is een project die we hebben overgenomen van een andere Miniclip locatie in Portugal.</p>
            <p class="mb-4">
              Het is, net als OSM, een voetbalspel, maar net iets anders. Waar je bij OSM niet daadwerkelijk kan voetballen maar alles voor je wordt gesimuleerd, kun je bij Minifootball echte voetbalwedstrijden spelen.
              <br />
              Het spel is alleen beschikbaar op iOS en Android, en heeft geen web versie.
            </p>
            <p class="mb-4">
              De gameplay is zo casual mogelijk gemaakt, en niet al te ingewikkeld om op te pakken. <br />
              Easy to play, hard to master. <br />
            </p>
            <p class="mb-4">Het was voor mij een unieke mogelijkheid om mij verder te ontwikkelen binnen de game industrie. Unity is de meest gebruikte engine, en vele succesvolle games zijn hier dan ook mee gemaakt.</p>
            <p class="mb-4">Naast de Unity frontend, zit er een Azure Functions API achter. Deze API maakt connectie met Playfab, waar al onze gamedata in staat opgeslagen.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-img height="200px" src="/public/images/minifootball/mf-banner.webp" cover></v-img>
          <v-card-title>Minifootball Unity Frontend</v-card-title>
          <v-card-text>
            <p class="mb-4">
              Het spel Minifootball zelf is dus gebouw met Unity. Hiermee kunnen met 1 codebase, onze game compilen naar zowel Android als iOS.
            </p>
            <p class="mb-4">
              Ik had al redelijk wat ervaring met Unity, voordat ik begon bij Minifootball. <br />
               Ik had namelijk regelmatig al meegedaan met Hackathons en Gamejams, waar Unity vaak de standaard is. <br />
               Het lastigste was vooral om bekend te raken met het Minifootball project zelf.
            </p>
            
            

            <v-chip-group class="mt-4" column>
              <v-chip>Unity</v-chip>
              <v-chip variant="elevated">C#</v-chip>
              <v-chip>Playfab</v-chip>
              <v-chip variant="elevated">Linq</v-chip>
              <v-chip>Azure</v-chip>
              <v-chip variant="elevated">iOS</v-chip>
              <v-chip>Android</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-btn target="_blank" rel="noopener" href="https://apps.apple.com/us/app/mini-football-soccer-game/id1502383491" text="Bekijken"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-img height="200px" src="/public/images/minifootball/vuejs.webp" cover></v-img>
          <v-card-title>Minifootball Tools Project</v-card-title>
          <v-card-text>
            <p class="mb-4">Bij Minifootball, lag er een grote behoefte om een website te maken waarmee ze gemakkelijker het spel konden beheren.</p>
            <p class="mb-4">
              Minifootball wordt geconfigureerd via JSON bestanden, binnen Playfab.<br />
              Je kunt je voorstellen dat dit voor iemand van marketing niet ideaal is om mee te werken, het kwam dan ook vaak voor dat het spel fouten bevatte omdat iemand bijvoorbeeld een komma was vergeten.
            </p>
            <p class="mb-4">
              Toen ik net in het team kwam, is mij gevraagd om hierover na te denken en hier misschien iets voor op te zetten.
              De developers in dit team hadden geen Web ervaring, en het leek mij dan ook een leuke uitdaging om hier iets voor op te zetten.
            </p>
            <p class="mb-4">
              Ik zag een uitgelezen kans om meer te leren over nieuwe webtechnieken, en ik heb de keuze gemaakt om een Tools project te bouwen met Vue.js. <br />
              In een korte periode heb ik een authenticatie flow opgezet door middel van Firebase/Microsoft Authentication, waarna ik kon beginnen aan de eerste tools voor het marketing team.
            </p>
            <p class="mb-4">
              Onze marketeers maken nu veelvuldig gebruik van dit project, om bijvoorbeeld Promotions klaar te zetten, of dropchances van onze cardpacks te tweaken.
            </p>
            <v-chip-group class="mt-4" column>
              <v-chip>Vue</v-chip>
              <v-chip variant="elevated">Typescript</v-chip>
              <v-chip>Marketing</v-chip>
              <v-chip variant="elevated">JSON</v-chip>
              <v-chip>Azure Functions</v-chip>
              <v-chip variant="elevated">Microsoft</v-chip>
              <v-chip>Pinia</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-btn target="_blank" rel="noopener" href="https://apps.apple.com/us/app/mini-football-soccer-game/id1502383491" text="Bekijken"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-img height="200px" src="/public/images/minifootball/azurefunctions.png" cover></v-img>
          <v-card-title>Minifootball Azure Backend</v-card-title>
          <v-card-text>
            <p class="mb-4">De backend van Minifootball, draait op Azure functions. Met Azure Functions kun je losse kleine functies draaien in de cloud, zonder dat je je bezig hoeft te houden met serverbeheer.</p>
            <p class="mb-4">
              Voor elke feature die ik moest bouwen voor Minifootball, was ik als developer ook automatisch verantwoordelijk voor de backend. <br />
              Dit vond ik erg leuk om te doen, omdat ik van A tot Z de feature kon bouwen. Dit maakte het werk erg dynamisch.
            </p>

            <v-chip-group class="mt-4" column>
              <v-chip>C#</v-chip>
              <v-chip variant="elevated">Azure</v-chip>
              <v-chip>Playfab</v-chip>
              <v-chip variant="elevated">API</v-chip>
              <v-chip>Linq</v-chip>
              <v-chip variant="elevated">JSON</v-chip>
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
  typewriter([`Sinds een jaar ben ik ook betrokken bij Minifootball, een casual mobile voetbal spel.`]);
});
</script>

<style></style>
