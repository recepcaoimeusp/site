<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <Logo />
      </div>
      <main>
          <CalendarioEventos 
          :eventos="eventos" />
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
  }),
}
</script>

