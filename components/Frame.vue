<template>
  <div class="frame" :class="{ 'blue-border': blue }">
    <div class="border-flowers-top">
      <Flowers :number="flowersTop" />
    </div>
    <div :class="blue ? 'bgBlue' : 'bgGreen'">
      <slot></slot>
    </div>
    <div class="border-flowers-bottom">
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
}
</script>

<style scoped>
.frame {
  border: 70px solid transparent;
  border-image: url(~@/assets/images/bordas.svg) 60.47 round;
  position: relative;
}
.blue-border {
  border-image: url(~@/assets/images/bordas-blue.svg) 60.47 round;
}
.border-flowers-top {
  position: absolute;
  top: -80px;
  left: 0;
  width: 100%;
}
.border-flowers-bottom {
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
}
</style>
