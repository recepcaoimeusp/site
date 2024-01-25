<template>
  <div>
    <div
      :class="{ 'bar-background-colored': backgroundColored }"
      :style="{
        minHeight: minHeightRow,
        backgroundImage: 'url(' + backgroundImage + ')',
      }"
    >
      <div v-if="borderTop" class="bar-border flipped"></div>
      <v-container>
        <v-row class="mb-0 bar" :align="alignRow">
          <template v-if="singleCol">
            <v-col cols="12" md="12" :align="alignCol">
              <slot name="center"></slot>
            </v-col>
          </template>
          <template v-else>
            <v-col cols="12" md="6" :align="alignCol">
              <slot name="left"></slot>
            </v-col>
            <v-col cols="12" md="6" :align="alignCol">
              <slot name="right"></slot>
            </v-col>
          </template>
        </v-row>
      </v-container>
      <div v-if="borderBottom" class="bar-border"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColored: {
      type: Boolean,
      default: false,
    },
    backgroundImage: {
      type: String,
      default: '',
    },
    singleCol: {
      type: Boolean,
      default: false,
    },
    minHeightRow: {
      type: String,
      default: '0px',
    },
    alignRow: {
      type: String,
      default: 'center',
    },
    alignCol: {
      type: String,
      default: 'center',
    },
    borderTop: {
      type: Boolean,
      default: false,
    },
    borderBottom: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.bar {
  background-repeat: repeat-x;
  margin-bottom: 60px;
}
.bar-border {
  background-image: url('/kungFuPanda/divisoria-amarela.svg');
  background-size: auto 5em;
  background-repeat: repeat-x;
  height: 50px;
  position: relative;
  width: 100%;
  padding-bottom: 5em;
}
.flipped {
  transform: scaleY(-1);
}
</style>
