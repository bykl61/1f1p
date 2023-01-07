<template class="footerCustom mt-10">
  <v-container>
    <v-footer>
      <v-card flat class="text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon.icon" class="mx-4" icon>
            <a :href="icon.src" target="_blank">
              <v-icon size="24px" >{{ icon.icon }}</v-icon>
            </a>  
          </v-btn>
        </v-card-text>
        <v-card-text>
          Bir Fikir Bir Proje Yarışması Tekder İstanbul İl Başkanlığı'nın Mesleki Liseler İçin Düzenliği Bir Yarışma Etkinliğidir. Her türlü soru ve bilgi paylaşımı için tıklayınız. 
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong>Bir Fikir Bir Proje</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    icons: [
      {icon:  "fab fa-facebook", src: 'https://www.facebook.com/tekderistanbul'},
      {icon:  "fab fa-twitter", src: 'https://www.twitter.com/tekderistanbul'},
      {icon:  "fab fa-linkedin", src: 'https://www.linkedin.com/company/tekderistanbul'},
      {icon:  "fab fa-instagram", src: 'https://www.instagram.com/tekderistanbul'}
    ]
  })
};
</script>

<style lang="scss">

.footerCustom {
.v-card__text {
  color: white !important;
  text-align: center !important;
 }

.v-icon {
  color: white !important;
 }

.theme--light.v-card {
  background-color: #012950 !important;
 }
}


</style>