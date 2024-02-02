<template>
  <v-footer class="sFooter bgBlack d-flex justify-center" dark padless>
    <v-container class="white--text text-center">
      <v-row class="pa-4" align="center">
        <v-col cols="12" md="6" class="pb-2 pb-md-0 order-md-last">
          <v-row justify="center" class="mb-1" justify-md="end">
            <SocialMedia />
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-row justify="center" justify-md="start">
            Comissão de Recepção IME-USP &copy;
            {{ new Date().getFullYear() }}
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import SocialMedia from '~/components/SocialMedia.vue'

export default {
  components: {
    SocialMedia,
  },
}
</script>

<style>
.sFooter {
  font-family: Fuji;
  font-weight: 500;
  font-size: 18px;
}
</style>
