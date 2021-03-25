<template>
  <v-app-bar fixed app color="#0B122F" class="white--text">
    <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
    <v-toolbar-title>
      <NuxtLink class="white--text nav-link" to="/">
        Comissão de Recepção IME USP
      </NuxtLink>
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      color="yellow"
      class="black--text font-weight-bold"
      @click="mensagemNaoExiste"
      >Bixe, cadastre-se aqui</v-btn
    >
    <template v-for="(link, i) in links">
      <NuxtLink
        v-if="!link.ehExterno"
        :key="`link-${i}`"
        class="ml-5 white--text nav-link"
        :to="link.url"
        >{{ link.nome }}</NuxtLink
      >
      <a
        v-else
        :key="`link-${i}`"
        :href="link.url"
        class="ml-5 white--text nav-link"
        >{{ link.nome }}</a
      >
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    nome: '',
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
