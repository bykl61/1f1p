<template>
  <v-main>
    <CarouselPage />
    <ProjectPartners/>
    <Partners/>
    <Gallery :items="items" :title="title"/>
  </v-main>
</template>

<script>
import CarouselPage from "../components/CarouselPage";
import Gallery from "../components/Gallery";
import Partners from "../components/Partners";
import ProjectPartners from "../components/ProjectPartners.vue";

export default {
  name: "Home",

  components: {
    CarouselPage,
    Gallery,
    Partners,
    ProjectPartners
  },
  data() {
    return {
      items: [
        {
                id: 1,
                src: require("../assets/images/2019/other/img-1.jpg"),
            },
            {
                id: 2,
                src: require("../assets/images/2018/other/img4.jpg"),
            },
            {
                id: 3,
                src: require("../assets/images/2019/other/img-3.jpg"),
            },
            {
                id: 4,
                src: require("../assets/images/2017/other/img-4.jpg"),
            },
            {
                id: 5,
                src: require("../assets/images/2017/other/img-5.jpg"),
            },
            {
                id: 6,
                src: require("../assets/images/2019/other/img-6.jpg"),
            },
            {
                id: 7,
                src: require("../assets/images/2018/other/img7.jpg"),
            },
            {
                id: 8,
                src: require("../assets/images/2019/other/img-8.jpg"),
            },
            {
                id: 9,
                src: require("../assets/images/2019/other/img-9.jpg"),
            }
      ],
      title: "Önceki Yarışmalarımızdan"
    }
  },
};
</script>