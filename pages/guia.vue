<template>
  <v-container class="pa-md-16 py-16">
    <Frame red>
      <div class="d-flex flex-column align-center pa-4 pa-md-6">
        <h1 class="title mb-md-10 mb-6 txtWhite text-center text-h5 text-md-h4">
          Guia de Bixe
        </h1>
        <GuiaDeBixe active />
      </div>
    </Frame>
  </v-container>
</template>

<script>
import Frame from '~/components/Frame.vue'
import GuiaDeBixe from '~/components/GuiaDeBixe.vue'
export default {
  components: {
    Frame,
    GuiaDeBixe,
  },
}
</script>

<style scoped>
.title {
  font-family: Gang of Three !important;
}
</style>
