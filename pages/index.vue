<template>
  <v-row xs-12 justify="center" align="center" class="conteiner-pagina">
    <v-col class="conteudo">
      <v-row justify="end" class="mb-0 py-8 background-azul">
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <v-card
            max-width="500"
            class="d-flex flex-column flex-sm-row justify-center align-center pa-5"
          >
            <Logo class="mr-sm-5 mb-5 mb-sm-0" />
            <p>
              A comissão de recepção do IME é formada por um grupo de veteranas
              e veteranos, cujo objetivo é trazer a melhor experiência para os
              ingressantes da universidade e mostrar o melhor que a USP tem a
              oferecer durante a semana de recepção.
            </p>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-start justify-center justify-md-start align-center"
        >
          <AppCarrossel :links="fotosAtletica" />
        </v-col>
      </v-row>
      <main class="mt-5">
        <CalendarioEventos :eventos="eventos" />
      </main>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/comissao_logo.vue'
import CalendarioEventos from '~/components/CalendarioEventos.vue'

export default {
  components: {
    Logo,
    CalendarioEventos,
  },
  data: () => ({
    eventos: [],
    background: ['330px'],
    ids: [
      'index/index1.png',
      'index/index2.png',
      'index/index3.png',
      'index/index4.png',
      'index/index5.png',
      'index/index6.png',
    ],
  }),
  computed: {
    fotosAtletica() {
      return this.ids.map((id) => require(`../assets/images/${id}`))
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
        if (event[4]) dataFinal.horario = event[2]

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
