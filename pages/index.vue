<template>
  <v-row xs-12 justify="center" align="center" class="conteiner-pagina">
    <v-col class="conteudo">
      <v-row>
        <v-col justify="center">
          <Logo  class="logo"/>
        </v-col>
        <v-col xs-6>
          <div class="carrossel-conteiner">
          <v-carousel height="200px" cycle interval="3000" hide-delimiters> 
            <v-carousel-item
              v-for="(link, i) in fotosAtletica"
              :key="i"
              :src="link"
              class="foto-atletica"
              
            ></v-carousel-item>
          </v-carousel>
          </div>
        </v-col>
      </v-row>
      <main>
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
    background: [''],
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
.foto-atletica{
  // width: 150px;
}
.carrossel-conteiner{
  width: 600px;
}
.logo{
  
}
</style>
