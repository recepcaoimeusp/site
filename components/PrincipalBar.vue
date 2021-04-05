<template>
  <v-row justify="end" class="mb-0 py-8 background-azul">
    <v-col cols="12" md="6" class="d-flex justify-center align-center">
      <v-card
        max-width="600"
        class="d-flex flex-column flex-sm-row justify-center align-center pa-5"
      >
        <slot></slot>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
      class="d-flex justify-start justify-center justify-md-center align-center"
    >
      <AppCarrossel
        :largura="larguraSlide"
        :altura="alturaSlide"
        :links="links"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
    alturaSlide: {
      type: [String, Number],
      default: 300,
    },
    larguraSlide: {
      type: [String, Number],
      default: 500,
    },
    textoCard: {
      type: [String, Number],
      required: true,
    },
  },
}
</script>
