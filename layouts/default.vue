<template>
  <v-app>
    <NavBar />
    <v-main class="bgGreen">
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer,
  },
}
</script>
