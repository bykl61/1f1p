<template>
    <v-toolbar flat class="mainHeader" color="white">
      <v-btn href="/" class="ozel">
        <v-toolbar-title>BİR FİKİR BİR PROJE</v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
    <hr/>
      <v-toolbar-items class="hidden-md-and-down">

        <router-link to="/">
          <v-btn depressed>Anasayfa</v-btn>
        </router-link>

        <router-link to="/hakkimizda">
          <v-btn depressed>Hakkımızda</v-btn>
        </router-link>

        <router-link to="/sponsorlarimiz">
          <v-btn depressed>Sponsorlarımız</v-btn>
        </router-link>  
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
            >
              BİR FİKİR BİR PROJE
            </v-btn>
          </template> 
          <v-list class="list-class">
            <v-list-item>
              <v-btn text><router-link to="/birfikirbirproje/2023">2023</router-link></v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn text><router-link to="/oncekiprogramlarimiz/2020-2022">2020-2022</router-link></v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn text><router-link to="/oncekiprogramlarimiz/2019">2019</router-link></v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn text><router-link to="/oncekiprogramlarimiz/2018">2018</router-link></v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn text><router-link to="/oncekiprogramlarimiz/2017">2017</router-link></v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
          <v-btn href="https://docs.google.com/forms/d/e/1FAIpQLSeka__FUWECLsRS7QzrgcbF6m1aRRk9Tln3kp6NzGpWecoLBw/viewform?usp=sf_link" target="_blank" depressed>Başvuru</v-btn>
        <router-link to="/iletisim">
          <v-btn depressed>İLETİŞİM</v-btn>
        </router-link>  
      </v-toolbar-items>
      <div class="hidden-lg-and-up">
        <v-menu offset-y v-model="menu">
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title><router-link to="/">Anasayfa</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/hakkimizda">Hakkımızda</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/sponsorlarimiz">Sponsorlarımız</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-menu offset-y tile>
                <template @click="menu = false" v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    depressed
                  >
                  BİR FİKİR BİR PROJE
                  </v-btn>
                </template> 
                <v-list class="list-class" dense>
                  <v-list-item  @click="menu =!menu">
                    <v-btn text><router-link to="/birfikirbirproje/2023">2023</router-link></v-btn>
                  </v-list-item>
                  <v-list-item @click="menu =!menu">
                    <v-btn text><router-link to="/oncekiprogramlarimiz/2020-2022">2020-2022</router-link></v-btn>
                  </v-list-item>
                  <v-list-item @click="menu =!menu">
                    <v-btn text><router-link to="/oncekiprogramlarimiz/2019">2019</router-link></v-btn>
                  </v-list-item>
                  <v-list-item @click="menu =!menu">
                    <v-btn text><router-link to="/oncekiprogramlarimiz/2018">2018</router-link></v-btn>
                  </v-list-item>
                  <v-list-item @click="menu =!menu">
                    <v-btn text><router-link to="/oncekiprogramlarimiz/2017">2017</router-link></v-btn>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item>
            <v-list-item>
              <v-list-item-title depressed>
                <v-btn href="https://docs.google.com/forms/d/e/1FAIpQLSeka__FUWECLsRS7QzrgcbF6m1aRRk9Tln3kp6NzGpWecoLBw/viewform?usp=sf_link" target="_blank" depressed>Başvuru</v-btn>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><router-link to="/iletisim">İLETİŞİM</router-link></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
</template>

<script>

export default {
    name: "Header",
    data: () => ({menu: false,}),
};
</script>

<style>
.v-list-item {
  flex-direction: column;
  align-items: stretch !important;
}

.v-toolbar__items .v-btn , .ozel{
  border-radius: 0 !important;
  height: 100% !important;
  max-height: none !important;
  background-color: transparent !important;
  box-shadow: none !important;
} 

.v-btn:before {
background-color: unset;
}

.v-btn--is-elevated {
  box-shadow: none !important;
}

.v-toolbar__items span {
  color: #219fd9;
  font-weight: bold;
  font-size: large
}


.theme--light.v-btn.v-btn--has-bg {
  background-color: #f5f5f500;
}

</style>