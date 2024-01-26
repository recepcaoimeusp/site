<template>
  <div class="pa-4" :class="red ? 'bgRed' : 'bgOrange'">
    <div
      class="frame redBorder"
      :class="{ small: isMobile, orangeBorder: red }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    red: {
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
  border-width: 60px;
  border-style: solid;
  border-color: transparent;
  border-image-slice: 60;
  border-image-repeat: stretch;
  position: relative;
}

.orangeBorder {
  border-image-source: url(~@/assets/images/frame.svg) !important;
}

.redBorder {
  border-image-source: url(~@/assets/images/frame-red.svg);
}

.small {
  border-width: 40px !important;
}
</style>
