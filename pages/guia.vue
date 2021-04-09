<template>
  <v-row>
    <v-col cols="12" align="center" class="mt-16">
      <v-card max-width="344">
        <v-img
          :src="require('@/assets/images/construcao.gif')"
          height="200px"
        ></v-img>

        <v-card-text class="text--primary">
          Desculpe, mas o Guia do Bixe ainda está em construção :/ Por favor,
          tente novamente mais tarde!
        </v-card-text>
        <v-card-actions>
          <v-btn color="orange lighten-2" block @click="$router.go(-1)">
            <a style="color: black" @click.prevent=""> Ok, Voltar :/ </a>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
