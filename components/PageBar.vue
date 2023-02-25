<template>
  <div>
    <div v-if="borderTop" class="bar-border flipped">
      <Flowers :number="flowersTop" />
    </div>
    <div
      :class="{ 'bar-background-colored': backgroundColored }"
      :style="{
        minHeight: minHeightRow,
        backgroundImage: 'url(' + backgroundImage + ')',
      }"
    >
      <v-container>
        <v-row class="mb-0 pa-8 bar" :align="alignRow">
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
    </div>
    <div v-if="borderBottom" class="bar-border">
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
.bar {
  background-repeat: repeat-x;
  margin-bottom: 50px;
}
.bar-border {
  background-image: url('/divisoria-azul.svg');
  background-repeat: repeat-x;
  height: 50px;
  position: relative;
  width: 100%;
}
.flipped {
  transform: scaleY(-1);
}
</style>
