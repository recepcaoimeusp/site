<template>
  <img
    class="logo"
    :class="{ animation: hasAnimation }"
    alt="Logo Comissão"
    src="/logo.png"
  />
</template>

<script>
export default {
  props: {
    hasAnimation: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
.logo {
  height: 180px;
  width: 180px;
  border-radius: 25%;
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
