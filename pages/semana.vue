<template>
  <div>
    <PageBar
      background-colored
      align-row="start"
      align-col="start"
      border-bottom
    >
      <template #left>
        <div class="py-md-10 pt-5 text-center text-md-left">
          <h2 class="titulo white--text">Semana de Recepção</h2>
          <span class="descricao txtWhite">
            <p>
              A Semana de Recepção do IME-USP ocorrerá entre os dias 26/02 e
              01/03 e contará com uma programação variada que pode ser conferida
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
                class="link bgGray white--text"
                rounded="xl"
                target="_blank"
                elevation="0"
                href="https://linktr.ee/Recepcaoimeusp"
              >
                Linktree
              </v-btn>
              <v-btn class="link bgGray white--text" rounded="xl" to="/guia" elevation="0">
                Acesse o Guia do Bixe
              </v-btn>
            </div>
          </span>
        </div>
      </template>
      <template #right>
        <div class="py-md-10 pt-5 text-center text-md-left">
          <h2 class="titulo white--text">Cronograma</h2>
          <EventosTabela mostrar-cronograma />
        </div>  
      </template>
    </PageBar>
    <v-container>
      <div class="my-10 text-center text-md-left">
        <h2 class="my-4 titulo txtBlack">Provas da Gincana</h2>
        <ul :class="isMobile ? 'provas-flex' : 'provas-grid'">
          <v-card
            v-for="(prova, index) in provas"
            :key="index"
            tag="li"
            outlined
            align="left"
            class="prova d-flex flex-column"
            min-height="180px"
          >
            <v-card-title>
              {{ prova.nome }}
            </v-card-title>
            <template v-if="prova.descricao">
              <v-card-text class="txtGray">{{ prova.descricao }} </v-card-text>
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
              <v-icon color="black" size="27px">fa-solid fa-lock</v-icon>
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
        nome: "Criado numa cantina",
        descricao: '',
        link: '',
      },
      {
        nome: "Nunca teve tal ambição",
        descricao: '',
        link: '',
      },
      {
        nome: "E ao chegar lá em cima",
        descricao: '',
        link: '',
      },
      {
        nome: 'Recebeu o poder do dragão',
        descricao: '',
        link: '',
      },
      {
        nome: 'Kung Fu Panda',
        descricao: '',
        link: '',
      },
      {
        nome: "Mestre Shifu viu nascer um herdeiro",
        descricao: '',
        link: '',
      },
      {
        nome: 'Ensinou-lhe os truques de um incrível guerreiro',
        descricao: '',
        link: '',
      },
      {
        nome: 'Kung Fu Panda',
        descricao: '',
        link: '',
      },
      {
        nome: 'Vive e treina e luta contra os cinco furiosos',
        descricao: '',
        link: '',
      },
      {
        nome: 'Guarda o Vale da Paz',
        descricao: '',
        link: '',
      },
      {
        nome: 'De monstros tão perigosos',
        descricao: '',
        link: '',
      },
      {
        nome: "Kung Fu Panda",
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
    font-family: Fuji;
    font-weight: 500;
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
    font-family: Fuji;
    font-weight: 500;
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
  font-family: Gang of Three;
  font-size: 26px;
  font-weight: 350;
  margin-bottom: 25px;
}

.descricao {
  font-family: Fuji;
  font-weight: 500;
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
