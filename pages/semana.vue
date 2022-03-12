<template>
  <v-row justify="space-between" align="start">
    <PageBar background-colored align-row="start" align-col="start">
      <template #left>
        <div class="spacing">
          <h2 class="titulo txtLightGreen">Semana de Recepção</h2>
          <span class="descricao white--text">
            <p>Preparados para a MELHOR SEMANA DE RECEPÇÃO DO MUNDO?</p>
            <p>
              Entre os dias 14/03 e 18/03 ocorrerá a Semana de Recepção do
              IME-USP, cuja programação vocês podem conferir aqui. Serão cinco
              dias com diversas atividades para vocês conhecerem mais sobre seus
              futuros colegas bixes e veteranes, e também o IME e a USP como um
              todo.
            </p>
            <p>
              Para que possamos entrar em contato com você e compartilhar
              diretamente links, arquivos e informações importantes, além de
              poder participar da nossa incrível gincana, pedimos que realize um
              cadastro presencialmente no IME na segunda-feira de manhã!
            </p>
            <p>
              Procurem aparecer na atividade da segunda-feira às 08:00 (ou na
              atividade das 19:00, em que falaremos as mesmíssimas coisas), pois
              lá vamos nos apresentar melhor para vocês e passar informações
              muito importantes sobre a Semana de Recepção.
            </p>
            <p>
              Participem de quantas atividades quiserem! Bixes do noturno são
              incentivados (e muito bem-vindes) a participarem dos eventos na
              parte da manhã e vice-versa!
            </p>
            <br />
            <br />
            <div class="d-flex container row justify-start links">
              <v-btn
                class="link"
                outlined
                target="_blank"
                tile
                color="#c5ee7d"
                href="https://drive.google.com/file/d/1wkKHMs66OFUXOTuBPZNn5e-Uk7B_SlJO/view"
              >
                Link dos links
              </v-btn>
              <v-btn
                class="link"
                href=""
                target="_blank"
                disabled
                tile
                color="#c5ee7d"
              >
                Acesse o Guia do Bixe
              </v-btn>
            </div>
          </span>
        </div>
      </template>
      <template #right>
        <div class="spacing">
          <h2 class="titulo txtLightGreen">Cronograma</h2>
          <EventosTabela mostrar-cronograma />
        </div>
      </template>
    </PageBar>
    <v-col cols="12">
      <h2 class="ma-3 titulo txtBrown">Provas da Gincana</h2>
      <ul
        class="provas-grid d-flex justify-center justify-md-start align-start flex-wrap pa-3"
      >
        <v-card
          v-for="(prova, index) in provas"
          :key="index"
          tag="li"
          outlined
          class="prova d-flex flex-column mr-0 mr-sm-5 mb-5"
          height="200"
        >
          <v-card-title>
            {{ prova.nome }}
          </v-card-title>
          <template v-if="prova.descricao">
            <v-card-text>{{ prova.descricao }} </v-card-text>
            <v-card-actions
              v-if="prova.link"
              class="d-flex align-center justify-center"
            >
              <v-btn :href="prova.link" target="_blank"
                >link</v-btn
              ></v-card-actions
            >
          </template>
          <div
            v-else
            class="cadeado-conteiner d-flex justify-center align-center"
          >
            <v-icon color="black" size="55px">mdi-lock-outline</v-icon>
          </div>
        </v-card>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
import EventosTabela from '~/components/EventosTabela.vue'

export default {
  components: { EventosTabela },
  data: () => ({
    provas: [
      {
        nome: 'Somebody once told me',
        descricao: 'O Shrek ainda está preparando essa prova!',
        link: '',
      },
      {
        nome: 'The world is gonna roll me',
        descricao: 'O Shrek ainda está preparando essa prova!',
        link: '',
      },
      {
        nome: "I ain't the sharpest tool",
        descricao: 'O Shrek ainda está preparando essa prova!',
        link: '',
      },
      {
        nome: 'In the shed',
        descricao: 'O Shrek ainda está preparando essa prova!',
        link: '',
      },
      {
        nome: 'She was looking kind of dumb',
        descricao: 'O Shrek ainda está preparando essa prova!',
        link: '',
      },
      {
        nome: 'With her finger and her thumb',
        descricao: 'O Shrek ainda está preparando essa prova!',
        link: '',
      },
      {
        nome: 'In the shape of an L',
        descricao: 'O Shrek ainda está preparando essa prova!',
        link: '',
      },
      {
        nome: 'On her forehead',
        descricao: 'O Shrek ainda está preparando essa prova!',
        link: '',
      },
      {
        nome: "Hey now, you're an all-star",
        descricao: 'O Shrek ainda está preparando essa prova!',
        link: '',
      },
      {
        nome: 'Get your game on, go play',
        descricao: 'O Shrek ainda está preparando essa prova!',
        link: '',
      },
      {
        nome: "Hey now, you're a rock star",
        descricao: 'O Shrek ainda está preparando essa prova!',
        link: '',
      },
      {
        nome: 'Get the show on, get paid',
        descricao: 'O Shrek ainda está preparando essa prova!',
        link: '',
      },
    ],
  }),
  methods: {
    EmBreve() {
      alert('Em breve!')
    },
  },
}
</script>

<style lang="scss" scoped>
.spacing {
  padding: 0px 30px;
}

.titulo {
  font-family: Marmelad;
  margin-bottom: 25px;
}

.descricao {
  font-family: Marmelad;
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
    font-family: Marmelad;
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
  gap: 5px;
}
</style>
