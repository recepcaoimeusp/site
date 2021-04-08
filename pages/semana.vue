<template>
  <v-row justify="space-between" align="start">
    <v-col class="fundo-azul" cols="12">
      <v-container fluid>
        <v-row justify="space-between" align="start">
          <v-col cols="12" lg="4" xl="4">
            <h2>Semana de Recepção</h2>
            <p>
              Texto explicando o tema, o que é a semana, como funciona, pedindo
              pra fazer o cadastro
              <br />
              <br />
              <span>A semana será dia tal até tal</span>
            </p>

            <div class="d-flex container row justify-start links">
              <a class="link" href="#">
                <v-btn depressed tile color="#FECA09"> Link dos links </v-btn>
              </a>
              <a class="link" href="#">
                <v-btn depressed tile color="#FECA09">
                  Acessse o Guia do Bixe
                </v-btn>
              </a>
            </div>
          </v-col>
          <v-col cols="12" lg="8" xl="8">
            <h2 class="mb-5">Cronograma</h2>
            <EventosTabela />
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <v-col cols="12">
      <h2 class="mb-3">Provas da Gincana</h2>
      <ul
        class="provas-grid d-flex justify-center justify-sm-start align-start flex-wrap pa-0"
      >
        <v-card
          v-for="(prova, index) in provas"
          :key="index"
          tag="li"
          outlined
          class="prova d-flex flex-column mr-0 mr-sm-5 mb-5"
          height="180"
        >
          <v-card-title>
            {{ prova.nome }}
          </v-card-title>
          <v-card-text v-if="prova.descricao">{{
            prova.descricao
          }}</v-card-text>
          <div
            v-else
            class="cadeado-conteiner d-flex justify-center align-center"
          >
            <v-icon color="black" size="55px">mdi-lock-outline</v-icon>
          </div>
        </v-card>
      </ul>
    </v-col>
    <v-col cols="12 d-flex justify-center">
      <v-btn x-large color="error" @click="ganharPontos"
        >Perder 10 pontos</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
import EventosTabela from '~/components/EventosTabela.vue'

export default {
  components: { EventosTabela },
  data: () => ({
    provas: [
      { nome: 'Nº 1 da Pokedex' },
      {
        nome: 'Conhecendo Pokestops',
      },
      // {
      //   nome: 'Conhecendo Pokestops',
      //   descricao:
      //     'Prova de caça às insígnias dos pokemons venha virar um mestre pokemon',
      // },
      {
        nome: 'Caça às Insígnias',
      },
      { nome: 'Ligação do Professor Carvalho' },
      { nome: 'Líderes de Ginásio' },
      { nome: 'Elite 4' },
      { nome: 'Batalha de Ginásio' },
      {
        nome: 'KaHoothoot',
      },
      {
        nome: 'Quem é esse Pokémon?',
      },
    ],
  }),
  methods: {
    ganharPontos() {
      alert(
        'Você perdeu 10 pontos. Mas também ganhou 10! Basta confiar na palavra fricasse.'
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.fundo-azul {
  background: #a2b7e2;
}

.links {
  .link {
    &:not(:last-child) {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
}

.provas-grid {
  .prova {
    * {
      word-break: break-word;
    }
    width: 100%;
    max-width: 400px;
    @media (min-width: 600px) {
      max-width: 300px;
    }
    .cadeado-conteiner {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
