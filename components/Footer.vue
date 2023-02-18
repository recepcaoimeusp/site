<template>
  <v-footer class="sFooter" dark padless>
    <v-container fluid class="bgOrange white--text text-center">
      <v-row justify="center" class="pa-2" no-gutters>
        <LogoImeUsp />
      </v-row>
      <v-row justify="center" class="pa-2" no-gutters>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          :href="icon.link"
          class="mx-1 white--text"
          icon
          large
        >
          <v-icon size="36px">
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-row>
      <v-row justify="center" class="pa-4" no-gutters>
        Comissão de Recepção IME-USP &copy; {{ new Date().getFullYear() }}
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import LogoImeUsp from '~/components/LogoImeUsp.vue'

export default {
  components: {
    LogoImeUsp,
  },
  data: () => ({
    icons: [
      {
        name: 'mdi-facebook',
        link: 'https://www.facebook.com/recepcaoimeusp',
      },
      {
        name: 'mdi-instagram',
        link: 'https://www.instagram.com/imeusp.recepcao/',
      },
      {
        name: 'mdi-discord',
        link: 'https://discord.com/invite/qKXAkf8EjE',
      },
    ],
  }),
}
</script>

<style>
.sFooter {
  font-family: Chewy;
  font-size: 18px;
}
</style>
