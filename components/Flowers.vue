<template>
  <div class="flowers">
    <div v-for="(flower, index) in flowers" :key="index" :style="flower.style">
      <img src="~/assets/images/flower.svg" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      lowerSize: 40,
      upperSize: 100,
      lowerSizeMobile: 40,
      upperSizeMobile: 60,
    }
  },
  computed: {
    flowers() {
      const flowers = []

      let lowerSize = this.lowerSize
      let upperSize = this.upperSize

      if (this.$vuetify.breakpoint.mdAndDown) {
        lowerSize = this.lowerSizeMobile
        upperSize = this.upperSizeMobile
      }

      for (let i = 0; i < this.number; i++) {
        const height = Math.floor(
          Math.random() * (upperSize - lowerSize + 1) + lowerSize
        )

        flowers.push({
          style: {
            width: `${height}px`,
            height: `${height}px`,
            position: `absolute`,
            transform: `rotate(${Math.floor(Math.random() * 360)}deg)`,
            top: `${Math.floor(Math.random() * 60) - 30}%`,
            left: `${
              i * (80 / this.number) +
              Math.floor((Math.random() * 80) / this.number) +
              10
            }%`,
          },
        })
      }

      return flowers
    },
  },
}
</script>

<style scoped>
.flowers {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
