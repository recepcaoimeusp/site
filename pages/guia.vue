<template>
  <v-row>
    <v-col id="pdf-view--container" cols="12" align="center">
      <h2 class="mb-15">Guia do Bixe</h2>
      <v-card height="100%">
        <div id="pdf-view"></div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'https://documentcloud.adobe.com/view-sdk/main.js', body: true },
        { src: require('@/services/carregarGuiaPDF.js'), body: true },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#pdf-view--container {
  height: 100vh;
}

#pdf-view {
  width: 100%;
  height: 100%;
}
</style>
