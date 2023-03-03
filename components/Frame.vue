<template>
  <div class="frame greenBorder" :class="{ small: isMobile, blueBorder: blue }">
    <div :class="isMobile ? 'border-flowers-top-mobile' : 'border-flowers-top'">
      <Flowers :number="flowersTop" />
    </div>
    <div :class="blue ? 'bgBlue' : 'bgGreen'">
      <slot></slot>
    </div>
    <div
      :class="
        isMobile ? 'border-flowers-bottom-mobile' : 'border-flowers-bottom'
      "
    >
      <Flowers :number="flowersBottom" />
    </div>
  </div>
</template>

<script>
import Flowers from '~/components/Flowers.vue'
export default {
  components: {
    Flowers,
  },
  props: {
    blue: {
      type: Boolean,
      default: false,
    },
    flowersTop: {
      type: Number,
      default: 0,
    },
    flowersBottom: {
      type: Number,
      default: 0,
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

.border-flowers-top {
  position: absolute;
  top: -80px;
  left: 0;
  width: 100%;
}

.border-flowers-top-mobile {
  position: absolute;
  top: -40px;
  left: 0;
  width: 100%;
}

.border-flowers-bottom {
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
}

.border-flowers-bottom-mobile {
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 100%;
}
</style>
