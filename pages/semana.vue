<template>
  <div>
    <PageBar
      background-colored
      align-row="start"
      align-col="start"
      border-bottom
      :flowers-bottom="3"
    >
      <template #left>
        <div class="spacing">
          <h2 class="titulo">Semana de Recepção</h2>
          <span class="descricao txtGray">
            <p>Preparados para a MELHOR SEMANA DE RECEPÇÃO DO MUNDO?</p>
            <p>
              Entre os dias 13/03 e 17/03 ocorrerá a Semana de Recepção do
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
                class="link bgBrown white--text"
                target="_blank"
                elevation="0"
                href="https://drive.google.com/file/d/1wkKHMs66OFUXOTuBPZNn5e-Uk7B_SlJO/view"
              >
                Link dos links
              </v-btn>
              <v-btn class="link bgBrown white--text" to="/guia" elevation="0">
                Acesse o Guia do Bixe
              </v-btn>
            </div>
          </span>
        </div>
      </template>
      <template #right>
        <div class="spacing">
          <h2 class="titulo">Cronograma</h2>
          <EventosTabela mostrar-cronograma />
        </div>
      </template>
    </PageBar>
    <v-container>
      <div class="my-10">
        <h2 class="my-4 titulo txtBrown">Provas da Gincana</h2>
        <ul class="provas-grid">
          <v-card
            v-for="(prova, index) in provas"
            :key="index"
            tag="li"
            outlined
            rounded="lg"
            class="prova d-flex flex-column"
            min-height="180px"
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
              <v-icon color="black" size="20px">fa-solid fa-lock</v-icon>
            </div>
          </v-card>
        </ul>
      </div>
    </v-container>
  </div>
</template>

<script>
import EventosTabela from '~/components/EventosTabela.vue'
import PageBar from '~/components/PageBar.vue'

export default {
  components: { EventosTabela, PageBar },
  data: () => ({
    provas: [
      {
        nome: "What's new Scooby-Doo?",
        descricao: '',
        link: '',
      },
      {
        nome: "We're coming after you",
        descricao: '',
        link: '',
      },
      {
        nome: "We're gonna solve that mistery",
        descricao: '',
        link: '',
      },
      {
        nome: 'I see you Scooby-Doo',
        descricao: '',
        link: '',
      },
      {
        nome: 'The trail leads back to you',
        descricao: '',
        link: '',
      },
      {
        nome: "What's new Scooby-Doo?",
        descricao: '',
        link: '',
      },
      {
        nome: 'Na na na na na',
        descricao: '',
        link: '',
      },
      {
        nome: 'Na na na na na',
        descricao: '',
        link: '',
      },
      {
        nome: 'Na na na na na na na',
        descricao: '',
        link: '',
      },
      {
        nome: 'Na na na na na',
        descricao: '',
        link: '',
      },
      {
        nome: 'Na na na na na',
        descricao: '',
        link: '',
      },
      {
        nome: "What's new Scooby-Doo?",
        descricao: '',
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
ul {
  padding-left: 0;
}

.provas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-gap: 1rem;
  justify-content: space-between;

  .prova {
    * {
      word-break: break-word;
    }
    font-family: Chewy;
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

.spacing {
  padding: 20px 0px;
}

.titulo {
  font-family: Chewy;
  font-size: 26px;
  margin-bottom: 25px;
}

.descricao {
  font-family: Chewy;
}

.links {
  .link {
    &:not(:last-child) {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
