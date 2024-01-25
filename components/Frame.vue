<template>
  <div class="frame greenBorder" :class="{ small: isMobile, blueBorder: blue }">
    <div :class="blue ? 'bgBlue' : 'bgGreen'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blue: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mdAndDown
    },
  },
}
</script>

<style scoped>
.frame {
  border-width: 70px;
  border-style: solid;
  border-color: transparent;
  border-image-slice: 60.47;
  border-image-repeat: round;
  position: relative;
}

.blueBorder {
  border-image-source: url(~@/assets/images/bordas-blue.svg) !important;
}

.greenBorder {
  border-image-source: url(~@/assets/images/bordas.svg);
}

.small {
  border-width: 30px;
  border-style: solid;
  border-color: transparent;
  border-image-slice: 30.07 !important;
  border-image-source: url(~@/assets/images/bordas.svg);
}
</style>
