<template>
  <v-btn
    class="padraoButton"
    rounded
    elevation="0"
    large
    :dark="dark"
    :color="color"
    :href="link"
    :target="target"
  >
    <slot> </slot>
  </v-btn>
</template>

<script>
export default {
  name: 'Button',
  props: {
    link: {
      type: String,
      default: '#',
    },
    color: {
      type: String,
      default: '#1E1E1E',
    },
    dark: {
      type: Boolean,
      default: true,
    },
    target: {
      type: String,
      default: '_self',
    },
  },
}
</script>
<style>
.padraoButton {
  font-size: 16px;
  letter-spacing: normal;
  font-family: Fuji;
  font-weight: 500;
}
</style>
