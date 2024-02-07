<template>
  <div>
    <PageBar single-col align-row="center" align-col="center">
      <template #center>
        <div class="d-flex px-8 py-10 py-md-16 justify-center">
          <Logo />
        </div>
      </template>
    </PageBar>
    <PageBar
      single-col
      background-colored
      min-height-row="400px"
      align-row="start"
      align-col="start"
      border-top
    >
      <template #center>
        <v-row class="px-5 py-5 py-md-10">
          <v-col align="center">
            <img :width="widthPo" src="~@/assets/images/po.svg" />
          </v-col>
          <v-col
            class="d-flex flex-column text-center text-md-left"
            cols="12"
            md="6"
          >
            <h1 class="my-5 welcomeTitle txtWhite">Bem-vinde ao IME!</h1>
            <p class="welcomeParagraph txtWhite">
              Ser aprovado(a) na USP não é uma tarefa fácil. E é uma honra, para
              nós, recebê-lo(a) no nosso queridíssimo e incrível instituto.
              Agora é hora de comemorar, porque, daqui em diante, você é
              oficialmente um IMEane!
            </p>
          </v-col>
        </v-row>
        <main class="mt-5">
          <h1 align="center" class="timelineTitle py-5 txtWhite">
            Passei! E agora?
          </h1>
          <EventosTimeline :eventos="eventos" />
        </main>
      </template>
    </PageBar>
  </div>
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
  }),
  computed: {
    widthPo() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 250
        case 'sm':
          return 275
        default:
          return 300
      }
    },
  },
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

.welcomeTitle {
  font-family: Gang of Three;
  font-size: 2em;
}

.welcomeParagraph {
  max-width: 700px;
  font-family: Fuji;
  font-weight: 500;
}

.timelineTitle {
  font-family: Gang of Three;
  font-size: 2.25em;
}

.generalWelcomeInfo {
  font-family: Fuji;
  font-weight: 500;
}

.stripThemeInfo {
  font-family: Fuji;
  font-weight: 500;
}

.cardLogo {
  border-radius: 10px;
}
</style>
