<template>
  <v-card-actions>
    <v-container>
      <v-icon
        v-for="icon in icons"
        :key="icon.name"
        class="mx-3 mx-sm-4 mx-md-5"
        tag="a"
        :href="icon.link"
        target="_blank"
        color="#fff"
        size="35px"
      >
        {{ icon.name }}
      </v-icon>
    </v-container>
  </v-card-actions>
</template>

<script>
export default {
  name: 'SocialMedia',
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
