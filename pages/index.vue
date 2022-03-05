<template>
  <v-row xs-12>
    <v-col>
      <PageBar
        single-col
        background-colored
        background-image="/woodTexture.png"
        min-height-row="400px"
        align-row="start"
      >
        <template #center>
          <h1 class="mainTitle my-10 white--text">Semana de Recepção 2022</h1>
        </template>
      </PageBar>
      <v-row class="px-5">
        <v-col class="d-flex flex-column align-center" cols="12" md="12">
          <v-card flat class="py-5 px-12 cardLogo" color="#E1DFB6">
            <Logo />
          </v-card>
          <h1 class="my-5 welcomeTitle txtBrown">Bem-vinde ao IME!</h1>
          <p align="center" class="welcomeParagraph txtBrown">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
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
            <v-btn color="#7A9244" outlined>{{ item.buttonTitle }}</v-btn>
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
          <span class="stripThemeInfo">
            <h2 class="py-5 txtLightGreen">Sed ut perspiciatis</h2>
            <p class="white--text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est.
            </p>
            <p>
              <v-btn color="#E1DFB6" outlined>Saiba mais</v-btn>
            </p>
          </span>
        </template>
      </PageBar>
      <main class="mt-5">
        <h1 align="center" class="timelineTitle py-5 txtBrown">
          Passei! E agora?
        </h1>
        <EventosTimeline :eventos="eventos" />
      </main>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/LogoComissao.vue'
import EventosTimeline from '~/components/EventosTimeline.vue'

export default {
  components: {
    Logo,
    EventosTimeline,
  },
  data: () => ({
    eventos: [],
    welcomeInfos: [
      {
        title: 'Sed ut perspiciatis',
        desc:
          'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
        buttonTitle: 'Saiba mais',
        buttonLink: '',
      },
      {
        title: 'Lorem ipsum dolor',
        desc:
          'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        buttonTitle: 'Saiba mais',
        buttonLink: '',
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
  font-size: 36px;
  font-family: Mystery Quest;
}

.welcomeTitle {
  font-family: Marmelad;
}

.welcomeParagraph {
  width: 700px;
  font-family: Marmelad;
}

.timelineTitle {
  font-family: Marmelad;
}

.generalWelcomeInfo {
  font-family: Marmelad;
}

.stripThemeInfo {
  font-family: Marmelad;
}

.cardLogo {
  border-radius: 10px;
  margin-top: -220px;
}

.shrekFace {
  width: 220px;
}
</style>
