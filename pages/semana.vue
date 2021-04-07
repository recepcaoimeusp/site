<template>
  <v-row justify="space-between" align="center">
    <v-col cols="12" lg="5" xl="4">
      <h2>Semana de Recepção</h2>
      <p>
        Texto explicando o tema, o que é a semana, como funciona, pedindo pra
        fazer o cadastro
        <br />
        <br />
        <span>A semana será dia tal até tal</span>
      </p>

      <div class="d-flex container row justify-start links">
        <a class="link" href="#">
          <v-btn depressed tile color="#FECA09"> Link dos links </v-btn>
        </a>
        <a class="link" href="#">
          <v-btn depressed tile color="#FECA09"> Acessse o Guia do Bixe </v-btn>
        </a>
      </div>
    </v-col>
    <v-col cols="12" lg="7" xl="8"> </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="scss" scoped>
.links {
  .link {
    &:not(:last-child) {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
