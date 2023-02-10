<template>
  <div>
    <div v-if="borderTop" class="bar-border flipped"></div>
    <v-row
      class="mb-0 pa-8 bar"
      :align="alignRow"
      :class="{ 'bar-background-colored': backgroundColored }"
      :style="{
        minHeight: minHeightRow,
        backgroundImage: 'url(' + backgroundImage + ')',
      }"
    >
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
    <div v-if="borderBottom" class="bar-border"></div>
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
  margin-bottom: 50px;
}
.bar-border {
  background-image: url('/divisoria-azul.svg');
  background-repeat: repeat-x;
  height: 50px;
  width: 100%;
}
.flipped {
  transform: scaleY(-1);
}
</style>
