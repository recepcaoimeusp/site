<template>
  <v-row xs-12 justify="center" align="center" class="conteiner-pagina">
    <v-col class="conteudo">
      <v-row justify="center">
        <v-col sm="12" md="6" class="d-flex justify-end align-center">
          <Logo class="logo" />
        </v-col>
        <v-col sm="12" md="6" class="d-flex justify-start align-center">
          <div class="carrossel-conteiner">
            <v-carousel hide-delimiters height="300">
              <v-carousel-item v-for="(link, i) in fotosAtletica" :key="i">
                <div class="conteiner-item d-flex justify-center align-center">
                  <img :src="link" alt="" srcset="" />
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-col>
      </v-row>
      <main class="mt-20">
        <CalendarioEventos :eventos="eventos" />
      </main>
    </v-col>
    <BackgroundAlternado :quadros="background" />
  </v-row>
</template>

<script>
import Logo from '~/components/comissao_logo.vue'
import CalendarioEventos from '~/components/CalendarioEventos.vue'
import BackgroundAlternado from '~/components/BackgroundAlternado.vue'

export default {
  components: {
    Logo,
    CalendarioEventos,
    BackgroundAlternado,
  },
  data: () => ({
    eventos: [
      {
        data: '05/04',
        nome: 'Divulgação da 3ª Chamada',
      },
      {
        data: '05/04 às 8h',
        dataFinal: '06/04 às 16h',
        nome: 'Período da Matrícula Virtual - 3ª Chamada',
      },
      {
        data: '05/04 às 8h',
        dataFinal: '07/04 às 16h',
        nome: 'Período de Lista de Espera - Manistação de interesse',
      },
      {
        data: '12/04',
        dataFinal: '16/04',
        nome: 'Semana de Recepção dos Bixes',
      },
      {
        data: '12/04 a 14/04',
        nome: 'Etapa Virtual de Confirmação de Matrícula - 1ª a 3ª Chamadas',
      },
      {
        data: '19/04',
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
.carrossel-conteiner {
  width: 100%;
  .conteiner-item {
    height: 100%;
  }
  img {
    height: 100%;
  }
}
</style>
