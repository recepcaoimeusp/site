<template>
  <v-row justify="center" align="center">
    <v-col cols="12" class="d-flex justify-center">
      <v-card max-width="344">
        <v-img
          :src="require('@/assets/sextafeira.gif')"
          height="200px"
        ></v-img>

        <v-card-text>
          Desculpe bixe, mas sem spoilers! Tente novamente mais tarde
        </v-card-text>
        <v-card-actions>
          <v-btn color="orange lighten-2" block @click="$router.go(-1)">
            <a @click.prevent=""> Ok, Vou voltar senhor shrek :/ </a>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>