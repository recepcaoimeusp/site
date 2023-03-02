<template>
  <div>
    <v-app-bar
      v-if="!isMobile"
      fixed
      app
      flat
      height="85"
      class="mainNav bgViolet"
    >
      <v-toolbar-title>
        <NuxtLink class="link-box px-3" to="/">
          <Logo alternative white has-custom-height custom-height="65" />
        </NuxtLink>
      </v-toolbar-title>
      <v-spacer />

      <template v-for="(link, i) in links">
        <NuxtLink
          v-if="!link.ehExterno"
          :key="`link-${i}`"
          class="link-box white--text px-5"
          :to="link.url"
        >
          {{ link.nome }}
        </NuxtLink>
        <a
          v-else
          :key="`link-${i}`"
          :href="link.url"
          class="white--text px-5"
          target="_blank"
        >
          {{ link.nome }}
        </a>
      </template>
    </v-app-bar>

    <v-app-bar v-if="isMobile" height="60" flat app fixed dark class="bgViolet">
      <v-app-bar-nav-icon
        class="white--text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      class="mainNav bgViolet"
      fixed
      temporary
    >
      <v-list nav dense>
        <v-list-item-group active-class="text--accent-4">
          <v-list-item to="/">
            <v-list-item-title class="white--text text-center py-4">
              <Logo alternative white has-custom-height custom-height="50" />
            </v-list-item-title>
          </v-list-item>
          <template v-for="(link, i) in links">
            <v-list-item
              v-if="link.ehExterno"
              :key="i"
              :href="link.url"
              target="_blank"
            >
              <v-list-item-title class="white--text">
                {{ link.nome }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item v-else :key="i" :to="link.url">
              <v-list-item-title class="white--text">
                {{ link.nome }}
              </v-list-item-title>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Logo from '~/components/LogoComissao.vue'
export default {
  name: 'NavBar',
  components: {
    Logo,
  },
  data: () => ({
    drawer: false,
    mostrarInput: false,
    forms: '',
    links: [
      { url: '/comissao', nome: 'Quem somos?', ehExterno: false },
      {
        url: '/semana',
        nome: 'Semana de Recepção',
        ehExterno: false,
      },
      {
        url: 'https://cheersshop.com.br/kit/3516',
        nome: 'Kit Bixe',
        ehExterno: true,
      },
      {
        url: '/guia',
        nome: 'Guia de Bixe',
        ehExterno: false,
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
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mdAndDown
    },
  },
}
</script>

<style>
.mainNav {
  font-family: Chewy;
}

.link-box {
  height: 85px;
  display: flex;
  align-items: center;
}

.nuxt-link-exact-active {
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
}

.nuxt-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #fff;
  border-radius: 10px;
}
</style>
