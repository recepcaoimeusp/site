<template>
  <div>
    <v-app-bar flat app fixed class="bgBeige sBar hidden-md-and-down">
      <template v-for="(link, i) in links">
        <NuxtLink
          v-if="!link.ehExterno"
          :key="`link-${i}`"
          class="px-3 py-5 txtGreen page"
          :to="link.url"
          >{{ link.nome }}</NuxtLink
        >
        <a
          v-else
          :key="`link-${i}`"
          :href="link.url"
          class="px-3 py-5 txtGreen page"
          target="_blank"
          >{{ link.nome }}</a
        >
      </template>
      <v-spacer />
      <v-btn
        outlined
        color="#8CB04E"
        class="px-5 mx-1 no-uppercase no-letterspacing"
        elevation="0"
        >Gincanas</v-btn
      >
      <v-btn
        color="#8CB04E"
        class="px-5 mx-1 white--text no-uppercase no-letterspacing"
        elevation="0"
        >Participar</v-btn
      >
    </v-app-bar>

    <v-app-bar fixed dark class="bgBeige txtGreen sBar hidden-lg-and-up">
      <v-app-bar-nav-icon
        class="txtGreen"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
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
    forms: 'https://forms.gle/UuvHzWwkHauGw2z27',
    links: [
      { url: '/', nome: 'Início', ehExterno: false },
      { url: '/comissao', nome: 'Quem somos?', ehExterno: false },
      { url: '/semana', nome: 'Semana de Recepção', ehExterno: false },
      {
        url: 'https://cheersshop.com.br/recepcaoimeusp',
        nome: 'Kit Bixe',
        ehExterno: true,
      },
      {
        url: 'https://drive.google.com/file/d/1Hdj8wfGvu9MOmyYdKxLDL71d3EDPZ0MW/view',
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
        url: 'https://drive.google.com/drive/folders/1Rje607bFQQOlgvBoRSubSEjzc0EV1LMF?usp=sharing',
        nome: 'Vídeos',
        ehExterno: true,
      },
    ],
  }),
}
</script>

<style>
.sBar {
  font-family: Marmelad;
  font-size: 16px;
}

.page {
  transition: all ease-in 0.1s;
}

.page:hover {
  background-color: #8cb04e;
  color: #fff !important;
}
</style>
