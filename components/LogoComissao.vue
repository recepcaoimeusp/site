<template>
  <img
    :class="{ animation: hasAnimation }"
    :height="logoHeight"
    alt="Logo Comissão"
    :src="inverse ? '/logoInverse.png' : '/logo.png'"
  />
</template>

<script>
export default {
  props: {
    hasAnimation: {
      type: Boolean,
      default: false,
    },
    inverse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    logoHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 210
        case 'sm': return 220
        case 'md': return 275
        case 'lg': return 350
        case 'xl': return 400
      }
    },
  }
}
</script>

<style>
.animation {
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
