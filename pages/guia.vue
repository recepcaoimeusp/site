<template>
  <v-row justify="center" align="center">
    <v-col cols="12" class="d-flex justify-center">
      <v-card max-width="344">
        <v-img
          :src="require('@/assets/images/construcao.gif')"
          height="200px"
        ></v-img>

        <v-card-text>
          Desculpe, mas o Guia do Bixe ainda está em construção :/ Por favor,
          tente novamente mais tarde!
        </v-card-text>
        <v-card-actions>
          <v-btn color="orange lighten-2" block @click="$router.go(-1)">
            <a @click.prevent=""> Ok, Voltar :/ </a>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style scoped lang="scss"></style>
