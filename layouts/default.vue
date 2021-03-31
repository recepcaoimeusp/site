<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>Comissão de Recepção &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
