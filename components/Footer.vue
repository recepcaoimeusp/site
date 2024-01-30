<template>
  <v-footer class="sFooter" dark padless>
    <v-container fluid class="bgOrange white--text text-center">
      <v-row justify="center" class="pa-2" no-gutters>
        <LogoImeUsp />
      </v-row>
        <SocialMedia>
        </SocialMedia>
      <v-row justify="center" class="pa-4" no-gutters>
        Comissão de Recepção IME-USP &copy; {{ new Date().getFullYear() }}
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import LogoImeUsp from '~/components/LogoImeUsp.vue'
import SocialMedia from './SocialMedia.vue';

export default {
  components: {
    LogoImeUsp,
    SocialMedia,
},
  data: () => ({
  }),
}
</script>

<style>
.sFooter {
  font-family: Fuji;
  font-weight: 500;
  font-size: 18px;
}
</style>
