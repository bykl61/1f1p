<template>
  <!-- <div class="block PartnersBlock">
    <v-container>
      <h2 class="text-center">Sponsorlarımız</h2>
      <v-row>
        <v-col v-for="item in items" :key="item.id" cols="4" md="4">
          <v-card class="mx-auto">
            <v-img
              class="white--text align-end"
              cover
              :src="item.src"
            >
            </v-img>
            <v-card-title class="pb-0" color="black">{{ item.title }}</v-card-title>
            <v-card-actions class="text-center">
              <v-btn>
                <a :href="item.site" target="_blank"> Ziyaret Et</a>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div> -->
  <v-main>
    <v-container class="mt-5">
      <h1 class="text-center">Proje Sponsorlarımız</h1>
      <v-row class="mt-10">
        <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="6" sm="4">
          <v-card flat tile class="mx-auto">
            <v-img :src="item.src" max-height="150px" class="grey lighten-2"/>
            <v-card-text class="text--primary text-center">
              <div class="title">{{ item.name }}</div>
              <h2>{{ item.title }}</h2>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</v-main >
</template>

<script>
export default {
  name: "Partners",
  data: () => ({
    show: false,
    items: [
      {
        id: 5,
        title: "Türksat",
        src: require("../assets/images/partners/turksat.jpg"),
      },
      {
        id: 1,
        title: "Titra",
        src: require("../assets/images/partners/titra.png"),
      },
      {
        id: 2,
        title: "AnkaGeo",
        src: require("../assets/images/partners/ankageo.jpg"),
      },
      {
        id: 3,
        title: "Sadık Yamanoğlu",
        src: require("../assets/images/partners/sadik-yamanoglu.png"),
      },
      {
        id: 4,
        title: "Çevre Norm",
        src: require("../assets/images/partners/cevre-norm.jpeg"),
      },
      {
        id: 6,
        title: "Disan",
        src: require("../assets/images/partners/disan.png"),
      }

    ]
  })
};
</script>

<style lang="scss">
.PartnersBlock {
  .v-image__image {
  background-size: 50% 90% !important;
}
}
</style>