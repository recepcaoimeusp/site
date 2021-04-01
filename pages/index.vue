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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
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
    eventos: [
      {
        dataInicial: { dia: '05/04' },
        nome: 'Divulgação da 3ª Chamada',
      },
      {
        dataInicial: { dia: '05/04', horario: '8h' },
        dataFinal: { dia: '06/04', horario: '16h' },
        nome: 'Período da Matrícula Virtual - 3ª Chamada',
      },
      {
        dataInicial: { dia: '05/04', horario: '8h' },
        dataFinal: { dia: '07/04', horario: '16h' },
        nome: 'Período de Lista de Espera - Manistação de interesse',
      },
      {
        dataInicial: { dia: '12/04' },
        dataFinal: { dia: '16/04' },
        nome: 'Semana de Recepção dos Bixes',
      },
      {
        dataInicial: { dia: '12/04' },
        dataFinal: { dia: '14/04' },
        nome: 'Etapa Virtual de Confirmação de Matrícula - 1ª a 3ª Chamadas',
      },
      {
        dataInicial: { dia: '19/04' },
        nome: 'Início das aulas',
      },
    ],
    background: ['330px'],
    ids: [
      '10B5cfEwqkjmzZu-6sT98KKy3bZRmjSyU',
      '1oHMaRf-BGp0tdE-QQIsErCAnEv6EzMRC',
      '1DXoZ-GtHro3ysMHzwpWGhcOfwQYSCkt0',
      '1k9dbxqQXV6P8-76hO2bOrXhQuWis06_V',
    ],
  }),
  computed: {
    fotosAtletica() {
      return this.ids.map(
        (id) => `https://drive.google.com/uc?export=view&id=${id}`
      )
    },
  },
}
</script>

<style scoped lang="scss">
.conteudo {
  position: relative;
  z-index: 1;
}
</style>
