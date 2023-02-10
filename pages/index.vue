<template>
  <v-row xs-12>
    <v-col>
      <div class="d-flex px-8 py-10 justify-center">
        <Logo />
      </div>
      <PageBar
        single-col
        background-colored
        min-height-row="400px"
        align-row="start"
        border-top
      >
        <template #center>
          <v-row class="px-5">
            <v-col class="d-flex flex-column align-center" cols="12" md="12">
              <h1 class="my-5 welcomeTitle txtBrown">Bem-vinde ao IME!</h1>
              <p align="center" class="welcomeParagraph txtBrown">
                Ser aprovado na USP não é uma tarefa fácil. E é uma honra, para
                nós, recebê-lo(a) no nosso queridíssimo e incrível instituto.
                Agora é hora de comemorar, porque, daqui em diante, você é
                oficialmente um IMEane!
              </p>
            </v-col>
          </v-row>
          <v-row class="generalWelcomeInfo">
            <v-col
              v-for="item in welcomeInfos"
              :key="item"
              class="pa-10"
              cols="12"
              md="6"
            >
              <h2 class="py-5 txtGreen">{{ item.title }}</h2>
              <p>{{ item.desc }}</p>
              <p>
                <v-btn color="#7A9244" :to="item.buttonLink" outlined>{{
                  item.buttonTitle
                }}</v-btn>
              </p>
            </v-col>
          </v-row>
          <PageBar background-colored align-col="start">
            <template #left>
              <center>
                <img class="py-8 shrekFace" src="/shrek.png" />
              </center>
            </template>
            <template #right>
              <div class="stripThemeInfo pa-8">
                <h2 class="py-5 txtLightGreen">Faz o urro!</h2>
                <p class="white--text">
                  Esse ano, o tema da nossa tão esperada semana de recepção é o
                  Shrek! Nós preparamos, com todo carinho, muitas atividades e
                  itens que são a cara do nosso ogrinho favorito!
                </p>
                <p>
                  <v-btn
                    href="https://instagram.com/recepcaoimeusp"
                    color="#E1DFB6"
                    outlined
                    >visite nosso instagram</v-btn
                  >
                </p>
              </div>
            </template>
          </PageBar>
          <main class="mt-5">
            <h1 align="center" class="timelineTitle py-5 txtBrown">
              Passei! E agora?
            </h1>
            <EventosTimeline :eventos="eventos" />
          </main>
        </template>
      </PageBar>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/LogoComissao.vue'
import EventosTimeline from '~/components/EventosTimeline.vue'
import PageBar from '~/components/PageBar.vue'

export default {
  components: {
    Logo,
    EventosTimeline,
    PageBar,
  },
  data: () => ({
    eventos: [],
    welcomeInfos: [
      {
        title: 'A Comissão',
        desc:
          'A comissão de recepção do IME é formada por um grupo de veteranas e veteranos, cujo objetivo é trazer a melhor experiência para os ingressantes da universidade e mostrar o melhor que a USP tem a oferecer durante a semana de recepção.',
        buttonTitle: 'Quem somos',
        buttonLink: '/comissao',
      },
      {
        title: 'O Instituto',
        desc:
          'O Instituto de Matemática e Estatística, ou IME, é uma das principais unidades da USP focadas nas ciências exatas. Ele é composto por quatro departamentos principais, os quais realizam pesquisas e oferecem diversas matérias aos cursos de graduação e pós-graduação do instituto.',
        buttonTitle: 'Conheça o IME',
        buttonLink: '/ime',
      },
    ],
  }),
  async beforeMount() {
    const sheetID = '1KNeMUcH96RjCT9km99wVrz-6Yl4BX7rSAJjxrz8aGEc'
    const sheetName = 'Eventos'
    const sheetsAPIKey = process.env.sheetsAPIKey
    try {
      const resp = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/'${sheetName}'?key=${sheetsAPIKey}`
      )

      const { values } = await resp.json()
      this.eventos = values.slice(1).reduce((acc, event) => {
        const dataInicial = { dia: event[1] }
        const dataFinal = {}

        if (event[2]) dataInicial.horario = event[2]
        if (event[3]) dataFinal.dia = event[3]
        if (event[4]) dataFinal.horario = event[4]

        acc.push({
          nome: event[0],
          dataInicial,
          dataFinal,
        })
        return acc
      }, [])
    } catch (error) {
      console.log('error occuried while fetching...')
      console.log(error)
    }
  },
}
</script>

<style scoped lang="scss">
.conteudo {
  position: relative;
  z-index: 1;
}

.mainTitle {
  font-size: 2.5rem;
  font-family: Mystery Quest;
}

.welcomeTitle {
  font-family: Chewy;
}

.welcomeParagraph {
  max-width: 700px;
  padding: 10px;
  font-family: Chewy;
}

.timelineTitle {
  font-family: Chewy;
}

.generalWelcomeInfo {
  font-family: Chewy;
}

.stripThemeInfo {
  font-family: Chewy;
}

.cardLogo {
  border-radius: 10px;
}

.shrekFace {
  width: 220px;
}
</style>
