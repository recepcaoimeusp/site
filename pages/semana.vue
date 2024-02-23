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
              <div v-if="prova.itens" class="d-flex justify-start ms-16 pb-3">
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
                v-if="prova.link"
                class="d-flex align-center justify-center"
              >
                <Button link="prova.link" target="_blank">link</Button>
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
        link: '',
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
        link: '',
        destaque: '',
      },
      {
        nome: 'Descubra o pergaminho',
        descricao:
          'A equipe deverá descobrir a frase secreta que está escondida nos reels, tik tok e guia de bixe da comissão, desvendando os enigmas!',
        itens: ['1500 pela tarefa cumprida'],
        avaliacao:
          'Enviar mensagem no grupo da sua cor marcando um membro do conselho, falando que a tarefa foi cumprida.',
        link: '',
        destaque: '',
      },
      {
        nome: 'Ingredientes da Sopa do Po',
        descricao:
          'A equipe precisa encontrar os itens da lista de ingredientes da sopa do Po. A equipe ganha 150 pontos por item encontrado.',
        itens: [
          'Camiseta de Bixe de um ano ímpar',
          'Camiseta de comissão de um ano par (menos 2024)',
          'Cálculo Guidorizzi do vol. 1 ao 4',
          'Uma ficha de impressão do IME',
          'Medalha de ouro do IME no BIFE',
          'Prova de cálculo 1 completa',
          'Foto do bixe zerando o jogo Campo minado ou 2048 no CEC ou na Rede linux',
          "Boneco do McDonald's do Kung fu Panda (qualquer personagem)",
          'Chapéu chinês igual do Po',
          'DVD de algum dos filmes do Kung Fu Panda',
          'Livro de histórias em Chinês',
          'Faixa preta de Kung Fu',
          'Pedaço da Muralha da China',
          'Lámen promocional do Kung Fu Panda 3 (2016)',
          'Leque com caracteres chineses',
          'Ingresso para filme ou teatro do kung fu panda',
          'Foto com um panda',
          'Condutor de Riquexó Kung Fu Panda 2',
          'Jogo kung fu panda de xbox 360',
        ],
        avaliacao: 'Trazer os itens para um membro do conselho pontuar.',
        link: '',
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
        link: '',
        destaque: '',
      },
      {
        nome: 'Pessegueiro sagrado da sabedoria celestial',
        descricao:
          'As equipes ganham 100 pontos por bixe presente na palestra +500 pontos para a equipe com mais bixes presentes na palestra ',
        itens: '',
        avaliacao:
          'Pontuação computada pelo membro da comissão lá na porta da sala B5, antes da palestra. ',
        link: '',
        destaque: '',
      },
      {
        nome: 'Sangue do Dragão Guerreiro',
        descricao:
          '2000 pontos por bixe que realizou doação de sangue nos últimos 6 meses. Se você não puder doar por algum motivo, aceitamos uma doação feita por algum membro da família/amigo. IMPORTANTE: será válido apenas uma doação por bixe.',
        itens: '',
        avaliacao:
          'Enviar o comprovante para o conselho pelo WhatsApp ou fisicamente.',
        link: '',
        destaque: '',
      },
      {
        nome: '"Qual o ingrediente secreto?"',
        descricao:
          'Atividade de perguntas e respostas no Kahoot, que será explicada na quinta-feira de manhã.',
        itens: ['100 pontos por questão correta para cada grupo '],
        avaliacao: '',
        link: '',
        destaque: '',
      },
      {
        nome: 'Escadoche',
        descricao:
          'Os bixes deverão desafiar os veteranes em diversas modalidades!',
        itens: ['200 pontos se ganhar', '100 pontos se perder'],
        avaliacao:
          '(OBS: bixes, vocês podem desfiar os veteranes mais de uma vez, com exceção de algumas modalidades)',
        link: '',
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
        link: '',
        destaque: '',
      },
      {
        nome: 'Premiação',
        descricao: ' ',
        itens: '',
        avaliacao: '',
        link: '',
        destaque: 'Sexta-feira às 15:00 na B5',
      },
      {
        nome: 'FAQ',
        descricao: ' ',
        itens: [
          'Se algum conhecido doar sangue vale ponto? Vale sim! Caso você conheça alguém que doou sangue nos últimos 6 meses, basta enviar o comprovante para algum membro do conselho.',
          'Doei sangue há menos de 3 meses, o que posso fazer? Pode trazer o comprovante que irá valer pontos na gincana :)',
          'Quantas vezes posso desafiar um veterane? Você pode desafiar um veterane quantas vezes quiser durante a semana, porém alguns jogos só poderão ser jogados uma vez, pergunte ao veterane!',
        ],
        avaliacao: '',
        link: '',
        destaque: '',
      },
      {
        nome: 'FAQ',
        descricao: ' ',
        itens: [
          'Como tem que ser as fotos da prova das fotos? Eu preciso aparecer na foto? As fotos podem ser tiradas da maneira como preferirem, de modo que apareça o lugar (não precisa ser exatamente o mesmo enquadramento da nossa foto!) e pelo menos um integrante do grupo. Mas lembrem-se, quanto mais gente aparecer na foto, mais pontos vocês ganham!',
          'Onde encontro a pontuação do meu grupo? O placar será atualizado regularmente pela Comissão em nossas redes sociais. Além disso, terá um placar no site da comissão, atualizado sempre que possível. Fique sempre atento às páginas da Comissão!',
        ],
        avaliacao: '',
        link: '',
        destaque: '',
      },
      {
        nome: 'FAQ',
        descricao: ' ',
        itens: [
          'Quais são os horários para entregar as provas? Durante a semana, em qualquer horário. No último dia da gincana (sexta-feira), as provas serão recebidas até as 13h.Tenho uma dúvida que não está listada acima. O que devo fazer? Entre em contato com um membro do Conselho. Caso você não os conheça, fale com algum integrante da Comissão e peça para que te leve a um deles. Além disso, temos neste FAQ os nomes e telefones para contato dos membros do Conselho.',
          'Tenho uma dúvida que não está listada acima. O que devo fazer? Entre em contato com um membro do Conselho. Caso você não os conheça, fale com algum integrante da Comissão e peça para que te leve a um deles. Além disso, temos neste FAQ os nomes e telefones para contato dos membros do Conselho.',
        ],
        avaliacao: '',
        link: '',
        destaque: '',
      },
      {
        nome: 'FAQ',
        descricao: ' ',
        itens: [
          'Onde eu entrego as provas? As provas são entregues para um membro do conselho (em geral, para aquele que está presente no seu grupo do WhatsApp), mas podendo ser entregue para qualquer outro, até mesmo para um membro da comissão, na falta de alguém do conselho',
          'Como eu identifico o conselho? Os membros do conselho estarão com crachás diferentes da comissão durante a semana, representando o conselho da show de bolice!',
        ],
        avaliacao: '',
        link: '',
        destaque: '',
      },
      {
        nome: 'FAQ',
        descricao: 'Alguma dúvida? Entre em contato com o conselho!',
        itens: [
          'Mabriel - (11) 99898-8042',
          'Erba - (11) 95274-3890',
          'Anny - (11) 91406-8989',
          'Vitão - (61) 99184-5583',
          'Igor - (11) 98565-9717',
          'Rafa - (11) 95294-6564',
          'Juão - (15) 99607-1680',
          'Kim - (21) 93300-6426',
          'Hyan - (18) 99158-2166',
          'Joãozinho - (11) 989111920',
          'Theus - (11) 992910333',
          'Carol - (11) 98442-1304',
          'Cas - (11) 97111-7370',
        ],
        avaliacao: '',
        link: '',
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
</style>
