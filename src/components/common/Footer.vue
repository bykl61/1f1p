<template class="footerCustom mt-10">
  <v-container>
    <v-footer style="justify-content: space-around">
      <div>
        <v-card flat class="text-center" style="display: inline-flex">
            <v-card-text style="width: unset">

              <v-card-title style="flex-direction: column-reverse; width: max-content">Tekder İstanbul</v-card-title>
              <v-btn v-for="icon in tekderIcons" :key="icon.icon" class="mx-4" icon>
                <a :href="icon.src" target="_blank">
                  <v-icon size="24px" >{{ icon.icon }}</v-icon>
                </a>  
              </v-btn>
            </v-card-text>
          <v-card-text style="width: unset">
            <v-card-title style="flex-direction: column-reverse; width: max-content">Bir Fikir Bir Proje </v-card-title> 
            <v-btn v-for="icon in fikirIcons" :key="icon.icon" class="mx-4" icon>
              <a :href="icon.src" target="_blank">
                <v-icon size="24px" >{{ icon.icon }}</v-icon>
              </a>  
            </v-btn>
          </v-card-text>  
        </v-card>
      </div>
      <v-card flat class="text-center">
        <v-card-text>
          Bir Fikir Bir Proje Yarışması Tekder İstanbul İl Başkanlığı'nın Mesleki Liseler İçin Düzenliği Bir Yarışma Etkinliğidir.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <strong>Tüm hakları saklıdır © </strong>
          <strong>{{ new Date().getFullYear() }} —</strong>
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
    tekderIcons: [
      {icon:  "fab fa-facebook", src: 'https://www.facebook.com/tekderistanbul'},
      {icon:  "fab fa-twitter", src: 'https://www.twitter.com/tekderistanbul'},
      {icon:  "fab fa-linkedin", src: 'https://www.linkedin.com/company/tekderistanbul'},
      {icon:  "fab fa-instagram", src: 'https://www.instagram.com/tekderistanbul'}
    ],
    fikirIcons: [
      {icon:  "fab fa-facebook", src: 'https://www.facebook.com/people/Bir-Fikir-Bir-Proje/100088673027496/'},
      {icon:  "fab fa-twitter", src: 'https://twitter.com/1Fikir1Projeorg'},
      {icon:  "fab fa-instagram", src: 'https://www.instagram.com/1Fikir1Projeorg'}    ]
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

.v-card__title {
  display: block !important;
  width: max-content !important;
}


}


</style>