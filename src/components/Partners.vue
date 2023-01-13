<template>
  <v-main>
    <v-container class="mt-5">
      <h1 class="text-center">Proje Sponsorlarımız</h1>
      <v-row class="mt-10">
        <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="6" sm="4">
          <v-card flat tile class="mx-auto">
            <a :href="item.site" target="_blank">
              <v-img :src="item.src" max-height="150px" class="grey lighten-2"/>
            </a>
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
        id: 1,
        title: "Türksat",
        src: require("../assets/images/partners/turksat.jpg"),
        site: 'https://www.turksat.com.tr/tr',
      },
      {
        id: 2,
        title: "Titra",
        src: require("../assets/images/partners/titra.png"),
        site: 'https://www.titra.com.tr/tr',
      },
      {
        id: 3,
        title: "AnkaGeo",
        src: require("../assets/images/partners/ankageo.jpg"),
        site: 'https://ankageo.com/',
      },
      {
        id: 4,
        title: "Sadık Yamanoğlu",
        src: require("../assets/images/partners/sadik-yamanoglu.png"),
        site: 'https://sadikyamanoglu.com.tr/',
      },
      {
        id: 5,
        title: "Çevre Norm",
        src: require("../assets/images/partners/cevre-norm.jpeg"),
        site: 'https://www.cevrenorm.com.tr/',
      },
      {
        id: 6,
        title: "Disan",
        src: require("../assets/images/partners/disan.png"),
        site: 'https://disan.com.tr/'
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