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
                href="https://drive.google.com/file/d/1_3Uvndzd0Gudy4ozYRilFNVDnv3hFqQb/view?usp=sharing"
                target="_blank"
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
import PageBar from '~/components/PageBar.vue'

export default {
  components: { EventosTabela, PageBar },
  data: () => ({
    provas: [
      {
        nome: 'Carta da Fada Madrinha',
        descricao: 'Responder corretamente às perguntas enviadas por e-mail.',
        link: '',
      },
      {
        nome: 'Às vezes as coisas são mais do que parecem',
        descricao:
          'Trazer uma carteirinha com o menor número USP ou com a maior quantidade de algarismos "2".',
        link: '',
      },
      {
        nome: 'Lave bem o seu... pé',
        descricao:
          'Fazer exame dermatológico no CEPE e apresentar o comprovante.',
        link: '',
      },
      {
        nome: 'Faz o urro!',
        descricao:
          'Coletar carimbos das atléticas, centro acadêmicos e empresas juniors pelo campus.',
        link: '',
      },
      {
        nome: 'Fugindo do Dragão',
        descricao:
          'Essa prova está suja de lama! Os detalhes adicionais da atividade serão dados na quarta-feira.',
        link: '',
      },
      {
        nome: 'Explorando o pântano',
        descricao:
          'Procurar, pelo IME, cada um dos 16 pedaços de papel da cor da equipe.',
        link: '',
      },
      {
        nome: 'Onde estão os Feijões Mágicos?',
        descricao:
          'Fotografar lugares específicos pela USP, com pelo menos um bixe da equipe na foto.',
        link: '',
      },
      {
        nome: 'Festa na casa do Shrek',
        descricao:
          'Ir fantasiado para o IME e assim permanecer pelo restante do dia.',
        link: '',
      },
      {
        nome: 'Conhecendo Tão Tão Distante',
        descricao: 'Participar da caça ao tesouro em equipes, na terça-feira.',
        link: '',
      },
      {
        nome: 'A uma gota de distância',
        descricao:
          'Doar sangue durante a semana de recepção (ou ter doado nos últimos três meses), com apresentação de comprovante.',
        link: '',
      },
      {
        nome: 'Espelho, espelho meu',
        descricao:
          'Participar da atividade de perguntas e respostas no Kahoot, na quarta-feira.',
        link: '',
      },
      {
        nome: 'Encontrando a Fiona I',
        descricao: 'Coletar assinaturas dos diretores de modalidade da AAAMat.',
        link: '',
      },
      {
        nome: 'Encontrando a Fiona II',
        descricao: 'Coletar assinaturas de representantes discentes.',
        link: '',
      },
      {
        nome: 'Discurso do Rei',
        descricao:
          'Participar das palestras que ocorrem durante a semana de recepção.',
        link: '',
      },
      {
        nome: 'Duelo do Gato de Botas',
        descricao: 'Desafiar veteranos em categorias específicas de jogos.',
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
