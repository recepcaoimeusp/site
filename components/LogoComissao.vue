<template>
  <img
    class="logo"
    :class="{ animation: hasAnimation }"
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
}
</script>

<style>
.logo {
  width: 350px;
  height: 350px;
}

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
