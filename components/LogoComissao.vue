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
          return '/logoAlternative-white.svg'
        }
        return '/logoAlternative.svg'
      }
      return '/logo.svg'
    },
    logoHeight() {
      if (this.hasCustomHeight) {
        return this.customHeight
      }

      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 250
        case 'sm':
          return 300
        case 'md':
          return 350
        case 'lg':
          return 375
        default:
          return 400
      }
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
