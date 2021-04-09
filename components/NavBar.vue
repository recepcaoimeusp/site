<template>
  <div>
    <v-app-bar fixed app color="#0B122F" class="white--text hidden-md-and-down">
      <v-toolbar-title>
        <NuxtLink class="white--text nav-link" to="/">
          Comissão de Recepção IME USP
        </NuxtLink>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        color="#FECA09"
        class="black--text font-weight-bold"
        @click="mensagemNaoExiste"
        >Bixe, cadastre-se aqui</v-btn
      >
      <template v-for="(link, i) in links">
        <NuxtLink
          v-if="!link.ehExterno"
          :key="`link-${i}`"
          class="mx-5 white--text nav-link"
          :to="link.url"
          >{{ link.nome }}</NuxtLink
        >
        <a
          v-else
          :key="`link-${i}`"
          :href="link.url"
          class="ml-5 white--text nav-link"
          target="_blank"
          >{{ link.nome }}</a
        >
      </template>
    </v-app-bar>

    <v-app-bar fixed color="#0B122F" dark class="hidden-lg-and-up">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="text--accent-4">
          <v-btn
            color="#FECA09"
            class="black--text font-weight-bold my-5"
            @click="mensagemNaoExiste"
            >Bixe, cadastre-se aqui</v-btn
          >
          <v-list-item to="/">
            <v-list-item-title>Página Inicial</v-list-item-title>
          </v-list-item>
          <v-list-item
            v-for="(link, i) in links"
            :key="i"
            :to="link.ehExterno ? undefined : link.url"
            :href="link.ehExterno ? link.url : undefined"
            :target="link.ehExterno ? '_blank' : ''"
          >
            <v-list-item-title>{{ link.nome }}</v-list-item-title>
          </v-list-item>
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
    links: [
      { url: '/comissao', nome: 'Quem somos?', ehExterno: false },
      { url: '/semana', nome: 'Semana de Recepção', ehExterno: false },
      {
        url: 'https://cheersshop.com.br/recepcaoimeusp',
        nome: 'Kit Bixe',
        ehExterno: true,
      },
      {
        url: '#',
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
    ],
  }),
  methods: {
    mensagemNaoExiste() {
      alert(
        'Este recurso ainda não está disponível. Por favor, aguarde nossas atualizações.'
      )
    },
  },
}
</script>

<style lang="scss">
.nav-link {
  text-decoration: none;
}
</style>
