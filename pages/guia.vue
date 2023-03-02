<template>
  <v-container class="pa-md-16 py-16">
    <Frame :flowers-top="2" :flowers-bottom="2" blue>
      <div class="d-flex flex-column align-center pa-4 pa-md-6">
        <h1 class="mb-md-10 mb-4">Guia de Bixe</h1>
        <embed src="guia.pdf" :width="pdfWidth" :height="pdfHeight" />
      </div>
    </Frame>
  </v-container>
</template>

<script>
import Frame from '~/components/Frame.vue'
export default {
  components: {
    Frame,
  },
  computed: {
    pdfWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '243px'
        case 'sm':
          return '362px'
        default:
          return '543px'
      }
    },
    pdfHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '316px'
        case 'sm':
          return '467.7px'
        default:
          return '701.6px'
      }
    },
  }
}
</script>

<style scoped>
h1 {
  font-family: Chewy;
}
</style>
