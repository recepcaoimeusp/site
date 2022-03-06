<template>
  <v-row justify="space-between" align="start">
    <PageBar background-colored align-row="start" align-col="start">
      <template #left>
        <div class="spacing">
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
            diretamente links, arquivos e informações importantes, além de poder
            participar da nossa incrível gincana, pedimos que realize um
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
            lá vamos nos apresentar melhor para vocês e passar informações muito
            importantes sobre a Semana de Recepção.
          </p>
          <p>
            Participem de quantas atividades quiserem, bixes do noturno são
            incentivados (e muito bem-vindes) a entrar no Meet na parte da manhã
            e vice-versa! Se vocês puderem e quiserem, também se preparem para
            abrir a câmera em vários momentos!
          </p>
          <br />
          <br />
          <div class="d-flex container row justify-start links">
            <v-btn
              class="link"
              depressed
              target="_blank"
              tile
              color="#FECA09"
              href="https://drive.google.com/file/d/1wkKHMs66OFUXOTuBPZNn5e-Uk7B_SlJO/view"
            >
              Link dos links
            </v-btn>
            <v-btn
              class="link"
              href="https://drive.google.com/file/d/1Hdj8wfGvu9MOmyYdKxLDL71d3EDPZ0MW/view"
              target="_blank"
              depressed
              tile
              color="#FECA09"
            >
              Acesse o Guia do Bixe
            </v-btn>
          </div>
        </div>
      </template>
      <template #right>
        <div class="spacing">
          <h2 class="mb-5">Cronograma</h2>
          <EventosTabela />
        </div>
      </template>
    </PageBar>
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
      {
        nome: 'Nº 1 da Pokédex',
        descricao:
          'Achem o menor número USP que conseguirem e o maior número USP primo',
        link: '',
      },
      {
        nome: 'Conhecendo Pokéstops',
        descricao: 'Entrem no Google Street e procurem essas imagens:',
        link:
          'https://drive.google.com/drive/folders/1AlVUe1CQrG0UghY412kqdlYZy-AgJae1?usp=sharing',
      },
      {
        nome: 'Desfile Pokémon',
        descricao:
          'A partir da quarta-feira venham fantasiados nas Horas Livres e/ou dinâmicas da semana de recepção (nas palestras não contaremos pontos de fantasia)',
        link: '',
      },
      {
        nome: 'Palestras do Professor Carvalho',
        descricao: 'Assistam às Palestras durante a semana',
        link: '',
      },
      {
        nome: 'Caça às Insígnias',
        descricao:
          'Você se considera um detetive pikachu? Tente resolver alguns enigmas nesse desafio:',
        link: 'https://gincana.imesec.ime.usp.br/',
      },
      {
        nome: 'Rotomdex',
        descricao:
          'Lembrem de olhar o e-mail!! E respondam as perguntas do Rotomdex',
        link: '',
      },
      {
        nome: 'Líderes de Ginásio',
        descricao: 'Encontrem os DMs e consigam as insígnias deles',
        link: '',
      },
      {
        nome: 'Elite 4',
        descricao: 'Encontrem os RDs e consigam as insígnias deles',
        link: '',
      },
      {
        nome: 'Batalha de Ginásio',
        descricao: 'Desafiem os veteranes do IME USP nos mais diversos jogos',
        link: '',
      },
      {
        nome: 'Nova geração Pokémon',
        descricao:
          'Fique estiloso usando o filtro de bixe IME-USP nas suas redes sociais!',
        link: '',
      },
      {
        nome: 'KaHoothoot',
        descricao:
          'Acerta quizzes como ninguém? Quarta-feira venha jogar Kahoot com a gente e teste seus conhecimentos',
        link: '',
      },
      {
        nome: 'Quem é esse Pokémon?',
        descricao:
          'Qual será o nome do seu time? Escolha o mais maneiro e ganhe pontos por isso',
        link: '',
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
.spacing {
  padding: 20px 30px;
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
