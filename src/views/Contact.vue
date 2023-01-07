<template>
  <v-content>
        <v-card
          class="flex"
          flat
          tile
        >
          <v-card-title class="teal">
            <strong class="subheading">
              Sosyal ağlarda bizimle bağlantı kurun!</strong>
    
            <v-spacer></v-spacer>
    
            <v-btn
              v-for="icon in icons"
              :key="icon.icon"
              class="mx-4"
              dark
              icon
              target="_blank"
              :href="icon.src"
            >
              <v-icon size="24px">
                {{ icon.icon }}
              </v-icon>
            </v-btn>
          </v-card-title>
          <h1 class="mt-5">İletişim</h1>
          <ul>
              <li>Adres: Karagümrük Mahallesi TOKİ Konutları, muhtar Muhittin sokak, No: 14, C3-98 Blok, Daire: 3, Sulukule/Fatih/İstanbul</li>
              <li>Telefon: +90 212 532 0375</li>
              <li>Fax: +90 212 532 0375</li>
              <li>E-Posta: iletisim@tekderistanbul.org</li>
          </ul>
          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
    <div class="googlemap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.8683642929113!2d28.933157915277913!3d41.02813577929879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba3aa585e80f%3A0x717e027bdd3c97c!2zVEVLREVSIMSwc3RhbmJ1bCDEsGwgQmHFn2thbmzEscSfxLE!5e0!3m2!1str!2str!4v1672685979732!5m2!1str!2str" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    icons: [
      {icon:  "fab fa-facebook", src: 'https://www.facebook.com/people/Bir-Fikir-Bir-Proje/100088673027496/'},
      {icon:  "fab fa-twitter", src: 'https://twitter.com/1Fikirve1Proje'},
      {icon:  "fab fa-instagram", src: 'https://www.instagram.com/1fikir_1proje/'}
    ]
  }),
};
</script>

<style>
ul{
  font-family: Verdana, sans-serif !important;
}
</style>