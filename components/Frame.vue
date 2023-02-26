<template>
  <div class="frame" :class="{ 'blue-border' : blue }">
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
}
</script>

<style scoped>
.frame {
  border: 70px solid transparent;
  border-image: url(~@/assets/images/bordas.svg) 60.47 round;
}
.blue-border {
  border-image: url(~@/assets/images/bordas-blue.svg) 60.47 round;
}
</style>
