<template>
  <div class="background">
    <div
      v-for="(quadro, i) in quadros"
      :key="quadro + i"
      :class="`background-item ${corQuadro(i)}`"
      :style="{ height: quadro }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    quadros: {
      type: Array,
      default: () => ['400px'],
    },
  },
  methods: {
    corQuadro(i) {
      return i % 2 === 0 ? 'azul' : 'branco'
    },
  },
}
</script>

<style scoped lang="scss">
.background {
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  .background-item {
    width: 100%;
    height: 150px;
    &.azul {
      background-color: #a2b7e2;
    }
  }
}
</style>
