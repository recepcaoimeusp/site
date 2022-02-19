<template>
  <v-row xs-12>
    <v-col>
      <PageBar :background-azul="true">
        <template #left>
          <v-card
            max-width="500"
            class="d-flex flex-column flex-sm-row justify-center align-center pa-5"
          >
            <v-card-title>
              <Logo :has-animation="true" class="mr-sm-5 mb-5 mb-sm-0" />
            </v-card-title>
            <v-card-text>
              <p class="text--primary font-weight-medium text-center my-auto">
                A comissão de recepção do IME é formada por um grupo de
                veteranas e veteranos, cujo objetivo é trazer a melhor
                experiência para os ingressantes da universidade e mostrar o
                melhor que a USP tem a oferecer durante a semana de recepção.
              </p>
            </v-card-text>
          </v-card>
        </template>

        <template #right>
          <ImagesCarrossel
            image-path="index"
            image-name="index"
            number-of-images="6"
            extension="png"
          />
        </template>
      </PageBar>
      <main class="mt-5">
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
</style>
