<template>
  <div class="carouselPageBlock">
    <v-carousel cycle>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :to="item.to"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
       <v-sheet
        height="100%"
        tile
       >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-img :src="item.src" max-height="900px" contain eager/>
        </v-row>
      </v-sheet>  
        <v-row class="title fill-height hidden-xs-only" align="center" justify="center">{{ item.title }}</v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "CarouselPage",
  data() {
    return {
      items: [
        {
          src: require("../assets/images/twitter-kapak.jpg"),
          title: "Bir Fikir Bir Proje 2023",
          to: "oncekiprogramlarimiz/2023"
        }
      ]
    };
  }
};
</script>
