<template>
  <img
    :class="{ animation: hasAnimation }"
    :height="logoHeight"
    alt="Logo Comissão"
    :src="logoSource"
  />
</template>

<script>
export default {
  props: {
    hasAnimation: {
      type: Boolean,
      default: false,
    },
    alternative: {
      type: Boolean,
      default: false,
    },
    hasCustomHeight: {
      type: Boolean,
      default: false,
    },
    customHeight: {
      type: Number,
      default: 210,
    },
    white: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    logoSource() {
      if (this.alternative) {
        if (this.white) {
          return '/kungFuPanda/comissao-borda.svg'
        }
        return '/logoAlternative.svg'
      }
      return '/logo.png'
    },
    logoHeight() {
      if (this.hasCustomHeight) {
        return this.customHeight
      }

      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 230
        case 'sm':
          return 250
        case 'md':
          return 275
        case 'lg':
          return 300
        case 'xl':
          return 325
      }

      return 0
    },
  },
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
