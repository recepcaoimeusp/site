<template>
  <v-row justify="space-between" align="start">
    <v-col class="fundo-azul" cols="12">
      <v-container fluid>
        <v-row justify="space-between" align="start">
          <v-col cols="12" lg="6" xl="4">
            <h2>Semana de Recepção</h2>
            <p>Preparados para a MELHOR SEMANA DE RECEPÇÃO ON-LINE do mundo?</p>
            <p>
              Entre os dias 12/04 e 16/04 ocorrerá a Semana de Recepção do
              IME-USP, cuja programação vocês podem conferir aqui. Serão cinco
              dias com diversas atividades para vocês conhecerem mais sobre seus
              futuros colegas bixes e veteranes, e também o IME e a USP como um
              todo.
            </p>
            <p>
              Para que possamos entrar em contato com você e compartilhar
              diretamente links, arquivos e informações importantes, além de
              poder participar da nossa incrível gincana, pedimos que realize um
              cadastro preenchendo o seguinte forms:
            </p>
            <p>
              BIXE, CADASTRE-SE AQUI:
              <a href="https://forms.gle/UuvHzWwkHauGw2z27"
                >https://forms.gle/UuvHzWwkHauGw2z27</a
              >
            </p>
            <p>
              As atividades da Semana de Recepção acontecerão sempre no Google
              Meet, todos os dias, das 10:00 até as 22:30. A Comissão já estará
              esperando vocês na sala virtual desde as 8:00 até 23:00, para quem
              tiver qualquer dúvida ou só quiser passar mais tempo com a gente O
              link do Google Meet e as instruções de acesso foram enviadas por
              e-mail a todos os ingressantes (quaisquer dúvidas ou dificuldades,
              não hesite em entrar em contato conosco pelas nossas redes
              sociais!).
            </p>
            <p>
              Procurem aparecer na atividade da segunda-feira às 10:00 (ou na
              atividade das 19:20, em que falaremos as mesmíssimas coisas), pois
              lá vamos nos apresentar melhor para vocês e passar informações
              muito importantes sobre a Semana de Recepção.
            </p>
            <p>
              Participem de quantas atividades quiserem, bixes do noturno são
              incentivados (e muito bem-vindes) a entrar no Meet na parte da
              manhã e vice-versa! Se vocês puderem e quiserem, também se
              preparem para abrir a câmera em vários momentos!
            </p>
            <br />
            <br />
            <div class="d-flex container row justify-start links">
              <a class="link" href="#">
                <v-btn depressed tile color="#FECA09" @click="EmBreve">
                  Link dos links
                </v-btn>
              </a>
              <NuxtLink class="link" to="guia">
                <v-btn depressed tile color="#FECA09">
                  Acessse o Guia do Bixe
                </v-btn>
              </NuxtLink>
            </div>
          </v-col>
          <v-col cols="12" lg="6" xl="8">
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
    EmBreve() {
      alert('Em breve!')
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
