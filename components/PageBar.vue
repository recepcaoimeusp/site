<template>
  <v-row
    class="mb-0 py-8"
    :align="alignRow"
    :class="{ 'background-azul': backgroundAzul }"
    :style="{ minHeight: minHeightRow }"
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
</template>

<script>
export default {
  props: {
    backgroundAzul: {
      type: Boolean,
      default: false,
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
  },
}
</script>
