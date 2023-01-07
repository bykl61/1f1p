<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 v-if="title" class="text-center">{{title}}</h2>
      <h2 v-else class="text-center">Diğer Fotoğraflar</h2>
      <v-row>
        <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="6" sm="4">
          <v-card flat tile class="d-flex">
            <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    items: Array,
    title: String
  },
};
</script>