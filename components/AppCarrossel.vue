<template>
  <div class="carrossel-conteiner" :style="estiloCarrossel">
    <v-carousel cycle hide-delimiters :height="altura">
      <v-carousel-item v-for="(link, i) in links" :key="i">
        <v-card
          class="conteiner-item d-flex justify-center align-center"
          :style="{ backgroundImage: `url(${link})` }"
        />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
    altura: {
      type: [String, Number],
      default: 300,
    },
    largura: {
      type: [String, Number],
      default: 500,
    },
  },
  computed: {
    estiloCarrossel() {
      return {
        maxWidth: `${this.largura}px`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.carrossel-conteiner {
  width: 100%;
  .conteiner-item {
    height: 100%;
    background-position: center;
    background-size: cover;
  }
}
</style>
