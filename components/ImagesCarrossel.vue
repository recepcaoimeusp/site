<template>
  <div class="carrossel-conteiner" :style="estiloCarrossel">
    <v-carousel :interval="intervalo" cycle hide-delimiters :height="altura">
      <v-carousel-item v-for="image in Number(numberOfImages)" :key="image">
        <v-card
          class="conteiner-item d-flex justify-center align-center"
          :img="
            require(`../assets/images/${imagePath}/${imageName}${image}.${extension}`)
          "
        />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: {
    imagePath: {
      type: String,
      required: true,
    },
    imageName: {
      type: String,
      required: true,
    },
    numberOfImages: {
      type: [String, Number],
      required: true,
    },
    extension: {
      type: [String],
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
    intervalo: {
      type: Number,
      default: 3000,
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
