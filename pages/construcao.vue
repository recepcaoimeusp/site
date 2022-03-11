<template>
  <v-row justify="center" align="center">
    <v-col cols="12" class="d-flex justify-center">
      <v-card max-width="344">
        <v-img :src="require('@/assets/sextafeira.gif')" height="200px"></v-img>

        <v-card-text class="tituloConst txtBrown">
          Desculpe bixe, mas sem spoilers! Tente novamente mais tarde
        </v-card-text>
        <v-card-actions>
          <v-btn class="bgGreen botao" block @click="$router.go(-1)">
            <a class="white--text" @click.prevent="">
              Ok! Vou voltar, senhor Shrek :/
            </a>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script></script>

<style>
.tituloConst {
  font-size: 24px;
  padding: 30px 20px;
  font-family: Marmelad;
}

.botao {
  font-family: Marmelad;
}
</style>
