<template>
  <v-container class="pa-16">
    <Frame :flowers-top="2" :flowers-bottom="2" blue>
      <div class="d-flex flex-column align-center pa-6">
        <h1 class="mb-10">Guia de Bixe</h1>
        <embed src="guia.pdf" width="543px" height="701.6px" />
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
}
</script>

<style scoped>
h1 {
  font-family: Chewy;
}
</style>
