<template>
  <v-footer class="sFooter bgGray d-flex justify-center" dark padless>
    <v-container class="bgGray white--text text-center">
      <v-row class="pa-4" align="center">
        <v-col cols="12" md="6" class="pb-2 pb-md-0 order-md-last">
          <v-row justify="center" class="mb-1" justify-md="end">
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
      },
    ],
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
