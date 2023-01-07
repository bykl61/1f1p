<template>
    <v-main>
        <v-container class="mt-5"> 
          <h1 class="text-center">Proje Ortakları</h1>
          <v-row class="mt-10">
            <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="6" sm="4">
              <v-card flat tile class="mx-auto">
                <a :href="item.site" target="_blank">
                  <v-img :src="item.src" aspect-ratio="1" max-height="250px" class="grey lighten-2" :to="item.site"/>
                </a>
                <v-card-text class="text--primary text-center">
                  <div class="title">{{ item.name }}</div>
                  <p>{{ item.title }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
    </v-main>
  </template>
  
  <script>
  export default {
    name: "ProjectPartners",
    data() {
      return {
        items: [
          {
            id: 1,
            src: require("../assets/images/partners/tekder-logo.png"),
            name: 'Tekder İstanbul',
            site: 'http://tekderistanbul.org'
          },
          {
            id: 2,
            src: require("../assets/images/partners/il-milli-egitim.jpg"),
            name: 'İstanbul İl Milli Eğitim Müdürlüğü',
            site: 'https://istanbul.meb.gov.tr/'
          }
        ]
      };
    }
  };
  </script>

  
<style>

.row {
    justify-content: space-around;
}

.v-application .grey.lighten-2 {
    background-color: #fafafa00 !important;
    border-color: #fafafa00 !important;
}

.v-image__image--cover {
    background-size: contain;
}


</style>