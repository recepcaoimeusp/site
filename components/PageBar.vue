<template>
  <v-row class="mb-0 py-8" :class="{ 'background-azul': backgroundAzul }">
    <v-col
      cols="12"
      md="6"
      class="d-flex justify-center align-center text-center text-md-right"
    >
      <slot name="left"></slot>
    </v-col>
    <v-col cols="12" md="6" class="d-flex justify-center align-center">
      <slot name="right"></slot>
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
  },
}
</script>
