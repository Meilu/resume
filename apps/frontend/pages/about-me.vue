<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h5 font-weight-bold">Over mij</v-card-title>
          <v-card-text>
            <div class="d-flex align-start mb-4">
              <v-avatar image="/images/avatar_jurgen.png" size="120" class="me-4" rounded />
              <div>
                <p class="mb-4">Mijn naam is Jurgen, ik ben 38 jaar en woon in Zoetermeer.</p>
                <p class="mb-4">Naast mijn werk hou ik ervan om te sporten en in de natuur te zijn. Zo ga ik regelmatig op mooie wandelvakanties, en doe ik vaak aan hardlopen. 
                  Vorig jaar ben ik naar Ijsland geweest, en over een maand heb ik een nieuwe wandelvakantie gepland in Noorwegen.</p>
              </div>
            </div>
            <p class="mb-4">
              Sinds kort heb ik ook mijn PADI-duikbrevet behaald, waarmee ik tot 18 meter diep mag duiken. <br />
              Ik ben nog niet heel ervaren, maar ik vind het wel heel leuk om te doen. <br />
              Duiken moet eigenlijk altijd met een buddy, en het vereist ook wat voorbereiding kwa uitrusting, maar wanneer het een keertje lukt is het elke keer weer een hele leuke ervaring.
            </p>
            <p class="mb-4">
              Programmeren is naast mijn werk ook gewoon een hobby van me, en probeer ik soms ook in mijn vrije tijd wat aan te knutselen. <br />
              Er zijn geen hele concrete projecten uit gekomen, maar het zijn altijd wel hele leerzame ervaringen. <br />
              Zo is de website waar je nu naar kijkt ook voortgekomen uit wat rondknutselen hier en daar, en zo ontwikkel ik een template die uit steeds meer functionaliteiten bestaat.
            </p>
            <p class="mb-4">Ik vind het ook gewoon belangrijk om naast mijn werk met programmeren bezig te zijn, omdat ik hierdoor beter op de hoogte blijf van nieuwe technieken, en niet alleen maar afhankelijk ben van de technieken waar ik mee werk op mijn werk.</p>
            <p class="mb-4">Als laatste vind ik autorijden ook best wel ontspannend en leuk om te doen! ik heb een leuke auto voor de deur staan waar ik graag mee op pad ga.</p>
            <v-chip-group class="mt-4" column>
              <v-chip>Programmeren</v-chip>
              <v-chip variant="elevated">Hiking</v-chip>
              <v-chip>Hardlopen</v-chip>
              <v-chip variant="elevated">Katten</v-chip>
              <v-chip>Films</v-chip>
              <v-chip variant="elevated">Scuba Diving</v-chip>
              <v-chip>Fitness</v-chip>
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
  typewriter([`Op deze pagina lees je meer over mij als persoon, en wat mij bezig houdt.`]);
});
</script>

<style></style>
