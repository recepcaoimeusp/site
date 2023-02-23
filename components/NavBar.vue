<template>
  <div>
    <v-app-bar
      fixed
      app
      color="#A15AA0"
      class="hidden-md-and-down mainNav bgBeige"
    >
      <v-toolbar-title>
        <NuxtLink style="color:#FFFFFF" to="/">
          Comissão de Recepção IME USP
        </NuxtLink>
      </v-toolbar-title>
       <v-spacer />

      <template v-for="(link, i) in links">
        <NuxtLink
          v-if="!link.ehExterno"
          :key="`link-${i}`"
          style="color:#FFFFFF"
          class="me-5"
          :to="link.url"
          >{{ link.nome }}</NuxtLink
        >
        <a
          v-else
          :key="`link-${i}`"
          :href="link.url"
          class="me-5"
          style="color:#FFFFFF"
          target="_blank"
          >{{ link.nome }}</a
        >
      </template>
    </v-app-bar>

    <v-app-bar fixed dark class="bgBeige hidden-lg-and-up">
      <v-app-bar-nav-icon
        class="txtDarkGreen"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      class="mainNav bgBeige"
      fixed
      temporary
    >
      <v-list nav dense>
        <v-list-item-group active-class="text--accent-4 txtDarkGreen">
          <v-btn class="bgGreen white--text my-5" :href="forms" target="_blank"
            >Bixe, cadastre-se aqui</v-btn
          >
          <v-list-item to="/">
            <v-list-item-title>Página Inicial</v-list-item-title>
          </v-list-item>
          <template v-for="(link, i) in links">
            <v-list-item
              v-if="link.ehExterno"
              :key="i"
              :href="link.url"
              target="_blank"
            >
              <v-list-item-title>{{ link.nome }}</v-list-item-title>
            </v-list-item>
            <v-list-item v-else :key="i" :to="link.url">
              <v-list-item-title>{{ link.nome }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    drawer: false,
    mostrarInput: false,
    forms: '',
    links: [
      { url: '/comissao', nome: 'Quem somos?', ehExterno: false },
      { url: '/semana', nome: 'Semana de Recepção', ehExterno: false },
      {
        url: 'https://cheersshop.com.br/kit/3516',
        nome: 'Kit Bixe',
        ehExterno: true,
      },
      {
        url:
          'https://drive.google.com/file/d/1_3Uvndzd0Gudy4ozYRilFNVDnv3hFqQb/view?usp=sharing',
        nome: 'Guia do Bixe',
        ehExterno: true,
      },
      {
        url: '/ime',
        nome: 'O IME',
        ehExterno: false,
      },
      {
        url: 'https://sites.google.com/view/recepcaoimeusp',
        nome: 'Fotos',
        ehExterno: true,
      },
      {
        url:
          'https://drive.google.com/drive/folders/1Rje607bFQQOlgvBoRSubSEjzc0EV1LMF?usp=sharing',
        nome: 'Vídeos',
        ehExterno: true,
      },
    ],
  }),
}
</script>

<style>
.mainNav {
  font-family: Chewy;
}
</style>
