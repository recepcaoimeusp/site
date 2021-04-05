<template>
  <v-row :class="{ 'background-azul': backgroundAzul }">
    <v-col
      cols="12"
      md="6"
      class="d-flex text-center text-md-right justify-center align-center"
    >
      <div v-if="alinhaTextoEsquerda" :style="defineLarguraContainer">
        <slot></slot>
      </div>
      <AppCarrossel
        v-if="!alinhaTextoEsquerda"
        :largura="larguraSlide"
        :altura="alturaSlide"
        :links="links"
      />
    </v-col>
    <v-col
      cols="12"
      md="6"
      class="d-flex justify-center text-center text-md-left align-center"
    >
      <div v-if="!alinhaTextoEsquerda" :style="defineLarguraContainer">
        <slot></slot>
      </div>
      <AppCarrossel
        v-if="alinhaTextoEsquerda"
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
    backgroundAzul: {
      type: Boolean,
      default: false,
    },
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
    alinhaTextoEsquerda: {
      type: Boolean,
      required: true,
    },
    larguraContainer: {
      type: Number,
      default: 600,
    },
  },
  computed: {
    defineLarguraContainer() {
      return {
        maxWidth: `${this.larguraContainer}px`,
      }
    },
  },
}
</script>
