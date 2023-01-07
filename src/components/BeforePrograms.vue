<template>
    <v-content>
      <div class="mt-5">        
        <v-img :src="staticData.backgroundPhoto" max-height="800" contain/>
      </div>
      <div class="block" v-show="!(staticData.id === '2022')">
        <h2 class="text-center"> Bir Fikir Bir Proje </h2>
        <v-container>
          <p v-html="staticData.content" ></p>
        </v-container>
        <v-container>
          <h3 class="text-center">Ödüller</h3>
          <ul>
            <li>Birincilik ödülü: 6000₺</li>
            <li>İkincilik ödülü: 6000₺</li>
            <li>Birincilik ödülü: 6000₺</li>
            <li>Birincilik ödülü: 6000₺</li>
          </ul>
        </v-container>
        <v-container>
          <template>
            <v-card
              class="mt-5"
              max-width="1200"
              v-for="item in staticData.items"
              :key="item.id"
            >
            <v-card-title>{{item.proje}}</v-card-title>
              <v-img
                class="white--text align-end"
                height="800"
                :src="item.src"
              >
              </v-img>
          
              <v-card-subtitle class="pb-0">
               {{item.school}}
              </v-card-subtitle>
          
              <v-card-subtitle class="pb-0">
                Öğrenciler
               </v-card-subtitle>
              <v-card-text class="text--primary">
                <ul >
                  <li v-for="student in item.students" :key="student">{{student}}</li>
                </ul>
              </v-card-text>

              <v-card-subtitle class="pb-0">
                Danışmanlar
               </v-card-subtitle>
              <v-card-text class="text--primary">
                <ul >
                  <li v-for="consultant in item.consultants" :key="consultant">{{consultant}}</li>
                </ul>
              </v-card-text>
            </v-card>
          </template>
        </v-container>
      </div>
      <div class="block" v-show="!(staticData.id === '2022')">
        <v-container>
            <Gallery :items="staticData.otherPhotos"/>            
        </v-container>
      </div>
    </v-content>
  </template>
  
  <script>
import Gallery from './Gallery.vue';
import db from '../lib/db.js'

  export default {
    name: "BeforePrograms",
    components: { Gallery },
    data() {
        return {
          staticData: []

        };
    },
  created() {
    var pathArray = window.location.href.slice(-4)
    this.staticData = db.filter(data => data.id === pathArray)[0];

  },
};
  </script>
<!-- <style>
 ul {
  display: flex !important;
  align-items: center !important;
  flex-direction: column !important;
} 
</style> -->