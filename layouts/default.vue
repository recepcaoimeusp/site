<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container class="bgBeige" fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>Comissão de Recepção &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
