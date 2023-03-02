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
        <div class="py-md-10 pt-5 text-center text-md-left">
          <h2 class="titulo">Semana de Recepção</h2>
          <span class="descricao txtGray">
            <p>
              A Semana de Recepção do IME-USP ocorrerá entre os dias 13/03 e
              17/03 e contará com uma programação variada que pode ser conferida
              aqui. Durante cinco dias, haverá diversas atividades para que os
              participantes possam conhecer seus futuros colegas bixes e
              veteranes, além de conhecerem melhor o IME e a USP como um todo.
            </p>

            <p>
              Para que possamos manter contato direto com vocês e compartilhar
              links, arquivos e informações importantes, bem como permitir a
              participação na nossa gincana, solicitamos que realizem o cadastro
              presencialmente no IME na segunda-feira de manhã.
            </p>

            <p>
              Recomendamos a participação na atividade de apresentação da
              comissão, onde nos apresentaremos melhor e forneceremos
              informações relevantes sobre a Semana de Recepção.
            </p>

            <p>
              Os participantes são encorajados a participarem de quantas
              atividades desejarem! Os bixes do noturno são bem-vindos e
              incentivados a participar das atividades da parte da manhã, e
              vice-versa.
            </p>

            <p>
              Por fim, lembrem-se de se divertir! A semana de recepção foi
              criada para que possam relaxar e conhecer melhor o IME e a nova
              universidade. Não percam a oportunidade de participar, contamos
              com vocês!
            </p>
            <div class="d-flex justify-center justify-md-start links pt-6">
              <v-btn
                class="link bgBrown white--text"
                target="_blank"
                elevation="0"
                href="https://linktr.ee/Recepcaoimeusp"
              >
                Linktree
              </v-btn>
              <v-btn class="link bgBrown white--text" to="/guia" elevation="0">
                Acesse o Guia do Bixe
              </v-btn>
            </div>
          </span>
        </div>
      </template>
      <template #right>
        <div class="py-md-10 pt-5 text-center text-md-left">
          <h2 class="titulo">Cronograma</h2>
          <EventosTabela />
        </div>
      </template>
    </PageBar>
    <v-container>
      <div class="my-10 text-center text-md-left">
        <h2 class="my-4 titulo txtBrown">Provas da Gincana</h2>
        <ul :class="isMobile ? 'provas-flex' : 'provas-grid'">
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
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mdAndDown
    },
  },
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

.provas-flex {
  display: flex;
  flex-direction: column;
  align-items: center;

  .prova {
    * {
      word-break: break-word;
    }
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    font-family: Chewy;
    width: 100%;

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
