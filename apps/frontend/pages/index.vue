<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-img height="150" class="mt-5" src="/public/images/avatar_jurgen_vector2.png"></v-img>
          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">Tijdlijn</div>
            <div>Op deze pagina vind je een kort overzicht van mijn werkervaring en projecten. Via het menu aan de linkerkant, vind je meer informatie.</div>
          </v-card-text>

          <v-timeline class="mx-5" side="end">
            <v-timeline-item icon="mdi-briefcase" fill-dot dot-color="indigo" icon-color="white">
              <template v-slot:opposite>
                <div class="pt-1 headline font-weight-bold" v-text="2011"></div>
              </template>
              <v-card variant="flat" class="mx-auto">
                <v-card-item>
                  <div>
                    <div class="text-overline mb-1">PHP Web Developer</div>
                    <div class="text-h6 mb-1">Floro Webdevelopment</div>
                    <div class="text-caption">
                      <p class="mb-4">Tijdens mijn studie aan het Grafisch Lyceum in Rotterdam, heb ik een afstudeerstage gevolgd bij Floro Webdevelopment. Nadat ik was afgestudeerd, ben ik hier in dienst gegaan als webdeveloper.</p>
                      <p class="mb-4">Bij Floro werkte ik aan verschillende projecten, voor verschillende soorten klanten. Denk aan gemeentes en andere overheidsinstellingen, maar ook aan MKB-bedrijven. Bij Floro hadden we inhouse een eigen CMS gebouwd in de programmeertaal PHP. Mijn werkzaamheden bestonden vooral uit het toevoegen van nieuwe modules zoals modules voor webshops of portfolio's.</p>
                    </div>
                  </div>
                </v-card-item>
              </v-card>
            </v-timeline-item>
            <v-timeline-item icon="mdi-soccer" fill-dot dot-color="white" icon-color="indigo">
              <template v-slot:opposite>
                <div class="pt-1 headline font-weight-bold" v-text="2014"></div>
              </template>
              <v-card color="white" variant="flat" class="mx-auto">
                <v-card-item>
                  <div>
                    <div class="text-overline mb-1">.NET Web Developer</div>
                    <div class="text-h6 mb-1">Gamebasics</div>
                    <div class="text-caption">
                      <p class="mb-4">In 2014 ben ik begonnen met werken bij Gamebasics in Zoetermeer. Gamebasics is de maker van het online voetbalspel "Online Soccer Manager".</p>
                      <p class="mb-4">OSM is een populair voetbalmanagementspel waarin spelers hun eigen team kunnen beheren en strijden tegen andere teams. OSM is beschikbaar op verschillende platformen, waaronder web, maar ook op iOS en Android.</p>
                      <p class="mb-4">Ik ben begonnen bij Gamebasics als webdeveloper. Ik kwam in het team terecht dat verantwoordelijk was voor zowel de backend als de web frontend van OSM.</p>
                      <p class="mb-4">In de loop der jaren heb ik verschillende rollen vervuld binnen het bedrijf. Zo heb ik ook een tijdje meegewerkt aan de iOS versie alsmede de Android versie van OSM.</p>
                    </div>
                  </div>
                </v-card-item>
              </v-card>
            </v-timeline-item>
            <v-timeline-item icon="mdi-cellphone" fill-dot dot-color="indigo" icon-color="white">
              <template v-slot:opposite>
                <div class="pt-1 headline font-weight-bold" v-text="2021"></div>
              </template>
              <v-card variant="flat" class="mx-auto">
                <v-card-item>
                  <div>
                    <div class="text-overline mb-1">.NET Web Developer</div>
                    <div class="text-h6 mb-1">Miniclip NL</div>
                    <div class="text-caption">
                      <p class="mb-4">In 2021 heeft de oprichter van OSM Gamebasics verkocht aan Miniclip, een groot internationaal gamingbedrijf, dat ook zijn oorsprong kent in de web browser games. Miniclip zelf is weer onderdeel van Tencent, een van de grootste technologiebedrijven ter wereld.</p>
                      <p class="mb-4">Inmiddels is Miniclip van alle markten thuis en heeft het een breed scala aan populaire games in zijn portfolio.</p>
                      <p class="mb-4">Mijn werkzaamheden bleven grotendeels hetzelfde, alleen werkten we nu meer samen met andere locaties binnen Miniclip, zoals de vestigingen in Portugal en Italië.</p>
                    </div>
                  </div>
                </v-card-item>
              </v-card>
            </v-timeline-item>
            <v-timeline-item icon="mdi-unity" fill-dot dot-color="white" icon-color="indigo">
              <template v-slot:opposite>
                <div class="pt-1 headline font-weight-bold" v-text="2024"></div>
              </template>
              <v-card color="white" variant="flat" class="mx-auto">
                <v-card-item>
                  <div>
                    <div class="text-overline mb-1">Unity/Azure Developer (C#)</div>
                    <div class="text-h6 mb-1">Miniclip NL</div>
                    <div class="text-caption">
                      <p class="mb-4">In april 2024, ben ik begonnen met een nieuwe uitdaging bij Miniclip als Unity Developer.</p>
                      <p class="mb-4">Unity is een populaire game-engine, die veel wordt gebruikt voor het ontwikkelen van 2D en 3D games. Ik heb altijd een beetje de ambitie gehad om te werken met Unity. Ik had er al wel veel mee gewerkt tijdens Hackathons, maar nooit tijdens mijn reguliere werk.</p>
                      <p class="mb-4">Aangezien OSM een webgame is, ben ik overgestapt naar het Minifootball team. Dit is een game die ontwikkeld is in Unity, en die we met Miniclip NL in 2022 hebben overgenomen van een andere Miniclip vestiging.</p>
                      <p class="mb-4">Naast Unity, bestaat minifootball ook uit een backend die draait op Azure Functions. Bij het werken aan een feature wordt er verwacht van een developer binnen ons team dat die zowel de frontend als de backend bouwt, dus ik heb ook redelijk wat ervaring op kunnen doen met Azure.</p>
                      <p class="mb-4">Vanwege mijn web kennis, ben ik ook gevraagd om een tools project op te zetten. Hier stond ik voor open omdat ik het gewoon erg leuk vind om ook met web te werken, en mijn kennis te delen in een team dat voornamelijk bekend was met Unity.
                        Ik heb een vue.js frontend opgezet met daarin een Azure functions C# backend. Deze maakt connectie met de api van Playfab, waar die alle data voor onze game uit haalt en in opslaat.
                      </p>
                      <p class="mb-4">Nu ik een jaar ervaring heb met Unity, ben ik tot de conclusie gekomen dat dit toch niet helemaal bij mij past. Unity vereist een andere manier van werken dan ik gewend ben, en hoe langer ik er mee werk, hoe meer ik weer terug verlang naar het werken met webtechnologieën.</p>
                    </div>
                  </div>
                </v-card-item>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const { typewriter } = useMenuComposable();
definePageMeta({
  middleware: "authentication",
});
onMounted(() => {
  typewriter([`Via het menu hierboven kun je meer informatie vinden over mijn werkervaring en projecten.`]);
});
</script>
