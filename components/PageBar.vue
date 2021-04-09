<template>
  <v-row
    align="center"
    class="mb-0 py-8"
    :class="{ 'background-azul': backgroundAzul }"
  >
    <v-col cols="12" md="6" align="center">
      <slot name="left"></slot>
    </v-col>
    <v-col cols="12" md="6" align="center">
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
