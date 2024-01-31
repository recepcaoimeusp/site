<template>
  <v-footer class="sFooter bgGray d-flex justify-center " dark padless>
    <v-container class="bgGray white--text text-center">
      <div v-if="!isMobile">
        <v-row justify="space-between" align="center" class="pa-2" no-gutters >
          <span>Comissão de Recepção IME-USP &copy; {{ new Date().getFullYear() }}</span>
          <span>
          <v-btn
            v-for="icon in icons"
            :key="icon.name"
            :href="icon.link"
            class="mx-1 white--text"
            icon
            large
            target="_blank"
          >
          <v-icon size="36px">
              {{ icon.name }}
            </v-icon>
          </v-btn>
          </span>
        </v-row>
      </div>

      <div v-else>
        <v-row justify="center" class="pa-4" no-gutters>
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
      </div>
    </v-container>
  </v-footer>
</template>

<script>

export default {
  data: () => ({
    icons: [
      {
        name: 'fa-brands fa-facebook',
        link: 'https://www.facebook.com/recepcaoimeusp',
      },
      {
        name: 'fa-brands fa-instagram',
        link: 'https://www.instagram.com/imeusp.recepcao/',
      },
      {
        name: 'fa-brands fa-discord',
        link: 'https://discord.com/invite/qKXAkf8EjE',
      },
      {
        name: 'fa-brands fa-tiktok',
        link: 'https://www.tiktok.com/@imeusp.recepcao',
      }
    ],
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mdAndDown
    }
  }
}
</script>

<style>
.sFooter {
  font-family: Fuji;
  font-weight: 500;
  font-size: 18px;
}
</style>
