<template>
  <Carousel3d :width="tamanhoImagem()" :height="tamanhoImagem()">
    <Slide v-for="(n, i) in numero" :key="i" :index="i">
      <v-img
        :src="require(`~/assets/images/comissao/${ano}/${i}.png`)"
        :height="tamanhoImagem()"
        :width="tamanhoImagem()"
      ></v-img>
    </Slide>
  </Carousel3d>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  components: {
    Carousel3d,
    Slide,
  },
  props: {
    numero: {
      type: Number,
      default: 0,
    },
    ano: {
      type: Number,
      default: 2023,
    },
  },
  methods: {
    tamanhoImagem() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 300
        case 'sm':
          return 300
        case 'md':
          return 400
        case 'lg':
          return 400
      }
      return 400
    },
  },
}
</script>

<style>
.carousel-3d-slide {
  background-color: #fff !important;
  border: 1px solid #fff !important;
  border-radius: 5px;
}
</style>
