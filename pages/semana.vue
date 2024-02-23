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
              <Button link="https://linktr.ee/Recepcaoimeusp" target="_blank">
                Linktree
              </Button>
              <Button link="/guia"> Acesse o Guia do Bixe </Button>
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
            align="left"
            class="prova d-flex flex-column"
            min-height="180px"
            flat
            tile
          >
            <v-card-title>
              {{ prova.nome }}
            </v-card-title>
            <template v-if="prova.descricao">
              <v-card-text class="d-flex justify-start txtGray">
                {{ prova.descricao }}
              </v-card-text>
              <div
                v-if="prova.itens.length > 0"
                class="d-flex justify-start ms-16 pb-3"
              >
                <ul class="activityList d-flex flex-column txtGray">
                  <li v-for="item in prova.itens" :key="item" class="my-1">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <v-card-text
                v-if="prova.destaque"
                class="destaque pt-0 txtGray d-flex justify-center"
              >
                {{ prova.destaque }}
              </v-card-text>
              <v-card-text
                v-if="prova.avaliacao"
                class="txtGray d-flex justify-start"
              >
                {{ prova.avaliacao }}
              </v-card-text>
              <v-card-actions
                v-if="prova.modal.content"
                class="d-flex align-center justify-center"
              >
                <v-dialog v-model="prova.modal.open" max-width="500">
                  <template #activator="{ on, attrs }">
                    <Button v-bind="attrs" v-on="on">
                      {{ prova.modal.button }}
                    </Button>
                  </template>
                  <v-card class="py-4">
                    <v-card-text>
                      <div
                        class="txtGray modal"
                        v-html="prova.modal.content"
                      ></div>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        class="modal"
                        @click="prova.modal.open = false"
                      >
                        Fechar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card-actions>
            </template>
            <div
              v-else
              class="cadeado-conteiner d-flex justify-center align-center"
            >
              <v-icon color="black" size="25px">fa-solid fa-lock</v-icon>
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
import Button from '~/components/Button.vue'

export default {
  components: { EventosTabela, PageBar, Button },
  data: () => ({
    provas: [
      {
        nome: 'Código do Mestre Oogway',
        descricao: 'A equipe que encontrar:',
        itens: [
          'Menor número USP (3000 pontos)',
          'Maior número USP com a maior quantidade de algarismos cinco (3000 pontos)',
        ],
        avaliacao:
          'Vocês deverão enviar para o conselho a foto ou print da carteirinha da pessoa (obs: não necessariamente precisa pertencer a alguém do grupo).',
        modal: {
          content: '',
          button: '',
          open: false,
        },
        destaque: '',
      },
      {
        nome: 'Conhecendo o Vale da Paz',
        descricao:
          'A equipe deverá tirar fotos de alguns lugares da USP com, pelo menos, um bixe da equipe na foto.',
        itens: [
          '240 pontos por foto com pelo menos um bixe',
          '+10 pontos por bixe na foto',
        ],
        avaliacao: 'Enviar as fotos para os membros do conselho pelo WhatsApp.',
        modal: {
          content: '',
          button: '',
          open: false,
        },
        destaque: '',
      },
      {
        nome: 'Descubra o pergaminho',
        descricao:
          'A equipe deverá descobrir a frase secreta que está escondida nos reels, tik tok e guia de bixe da comissão, desvendando os enigmas!',
        itens: ['1500 pela tarefa cumprida'],
        avaliacao:
          'Enviar mensagem no grupo da sua cor marcando um membro do conselho, falando que a tarefa foi cumprida.',
        modal: {
          content: '',
          button: '',
          open: false,
        },
        destaque: '',
      },
      {
        nome: 'Ingredientes da Sopa do Po',
        descricao:
          'A equipe precisa encontrar os itens da lista de ingredientes da sopa do Po. A equipe ganha 150 pontos por item encontrado.',
        itens: [],
        avaliacao: 'Trazer os itens para um membro do conselho pontuar.',
        modal: {
          content:
            "<h2 class='mb-4'>Lista de Ingredientes da Sopa do Po</h2><ul><li>Camiseta de Bixe de um ano ímpar</li><li>Camiseta de comissão de um ano par (menos 2024)</li><li>Cálculo Guidorizzi do vol. 1 ao 4</li><li>Uma ficha de impressão do IME</li><li>Medalha de ouro do IME no BIFE</li><li>Prova de cálculo 1 completa</li><li>Foto do bixe zerando o jogo Campo minado ou 2048 no CEC ou na Rede linux</li><li>Boneco do McDonald's do Kung fu Panda (qualquer personagem)</li><li>Chapéu chinês igual do Po</li><li>DVD de algum dos filmes do Kung Fu Panda</li><li>Livro de histórias em Chinês</li><li>Faixa preta de Kung Fu</li><li>Pedaço da Muralha da China</li><li>Lámen promocional do Kung Fu Panda 3 (2016)</li><li>Leque com caracteres chineses</li><li>Ingresso para filme ou teatro do kung fu panda</li><li>Foto com um panda</li><li>Condutor de Riquexó Kung Fu Panda 2</li><li>Jogo kung fu panda de xbox 360</li></ul>",
          button: 'Ver itens',
          open: false,
        },
        destaque: '',
      },
      {
        nome: 'Festival das Armaduras Marciais Universitárias',
        descricao:
          'Quinta-feira será o dia das fantasias, Bixes venham fantasiados para pontuarem, comissão vai acompanhá-los!',
        itens: [
          '100 - 1000 pontos (a ser decidido pelo conselho)',
          '100 - 1500 pontos se dentro do tema (a ser decidido pelo conselho)',
          '+ 100 por bixe se for uma fantasia coletiva (3 ou mais bixes)',
        ],
        avaliacao:
          'Procurar um membro da comissão ou do conselho para tirar uma fotinho da sua armadura.',
        modal: {
          content: '',
          button: '',
          open: false,
        },
        destaque: '',
      },
      {
        nome: 'Pessegueiro sagrado da sabedoria celestial',
        descricao:
          'As equipes ganham 100 pontos por bixe presente na palestra +500 pontos para a equipe com mais bixes presentes na palestra ',
        itens: '',
        avaliacao:
          'Pontuação computada pelo membro da comissão lá na porta da sala B5, antes da palestra. ',
        modal: {
          content: '',
          button: '',
          open: false,
        },
        destaque: '',
      },
      {
        nome: 'Sangue do Dragão Guerreiro',
        descricao:
          '2000 pontos por bixe que realizou doação de sangue nos últimos 6 meses. Se você não puder doar por algum motivo, aceitamos uma doação feita por algum membro da família/amigo. IMPORTANTE: será válido apenas uma doação por bixe.',
        itens: '',
        avaliacao:
          'Enviar o comprovante para o conselho pelo WhatsApp ou fisicamente.',
        modal: {
          content: '',
          button: '',
          open: false,
        },
        destaque: '',
      },
      {
        nome: '"Qual o ingrediente secreto?"',
        descricao:
          'Atividade de perguntas e respostas no Kahoot, que será explicada na quinta-feira de manhã.',
        itens: ['100 pontos por questão correta para cada grupo '],
        avaliacao: '',
        modal: {
          content: '',
          button: '',
          open: false,
        },
        destaque: '',
      },
      {
        nome: 'Escadoche',
        descricao:
          'Os bixes deverão desafiar os veteranes em diversas modalidades!',
        itens: ['200 pontos se ganhar', '100 pontos se perder'],
        avaliacao:
          '(OBS: bixes, vocês podem desfiar os veteranes mais de uma vez, com exceção de algumas modalidades)',
        modal: {
          content: '',
          button: '',
          open: false,
        },
        destaque: '',
      },
      {
        nome: 'Em Busca dos Cacos da Lendária Urna dos Guerreiros Sussurrantes',
        descricao:
          'Os bixes deverão procurar as peças espalhadas por lugares do IME e destacarem apenas a etiqueta de seu grupo.',
        itens: [
          '100 pontos por cada pedaço',
          'Bônus de pontos pela diferença do primeiro para o segundo lugar',
        ],
        avaliacao:
          'Vocês não precisam enviar fotos dos cacos encontrados para o conselho.',
        modal: {
          content: '',
          button: '',
          open: false,
        },
        destaque: '',
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
  gap: 0px 20px;
}

.activityList {
  list-style-type: disc;
  font-size: small;
  font-weight: 400;
}

.destaque {
  font-size: large;
  font-weight: 500;
}

.modal {
  font-family: Fuji;
  padding: 10px;
}
</style>
