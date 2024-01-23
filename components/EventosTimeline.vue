<template>
  <v-timeline reverse>
    <v-timeline-item
      v-for="evento in eventos"
      :key="evento.nome"
      class="timelineStyle txtBrown"
      :color="hasPast(evento) ? cores[0] : cores[1]"
      :icon="hasPast(evento) ? 'fa-solid fa-check' : ''"
      :fill-dot="hasPast(evento) ? true : false"
      small
    >
      <span class="text-left nome-evento">{{ evento.nome }}</span>
      <template #opposite>
        <div class="texto-calendario d-flex align-center justify-end flex-wrap">
          <div class="d-flex flex-column align-center px-3">
            <span class="data-dia">
              {{ evento.dataInicial.dia.substring(0, 2) }}
            </span>
            <span class="data-mes">
              {{ numberToMonth(evento.dataInicial.dia.substring(3)) }}
            </span>
          </div>
          {{ textoHorarioInicial(evento) }}
          <template v-if="evento.dataFinal.dia">
            a
            <div class="d-flex flex-column align-center px-3">
              <span class="data-dia">
                {{ evento.dataFinal.dia.substring(0, 2) }}
              </span>
              <span class="data-mes">
                {{ numberToMonth(evento.dataFinal.dia.substring(3)) }}
              </span>
            </div>
          </template>
          {{ textoHorarioFinal(evento) }}
        </div>
      </template>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props: {
    eventos: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    cores: ['#794a30', '#a06646'],
  }),
  methods: {
    textoHorarioInicial(evento) {
      let texto = ''
      if (evento.dataInicial.horario) {
        texto += ' às ' + evento.dataInicial.horario
      }
      return texto
    },
    textoHorarioFinal(evento) {
      let texto = ''
      if (evento.dataFinal) {
        if (evento.dataFinal.horario) {
          texto += ' às ' + evento.dataFinal.horario
        }
      }
      return texto
    },
    numberToMonth(numb) {
      const numbInt = parseInt(numb)
      const months = [
        'jan',
        'fev',
        'mar',
        'abr',
        'mai',
        'jun',
        'jul',
        'ago',
        'set',
        'out',
        'nov',
        'dez',
      ]
      return months[numbInt - 1]
    },
    hasPast(evento) {
      const dataAtual = new Date()
      const ano = dataAtual.getFullYear().toString()

      const horaInicial = evento.dataInicial.horario
        ? this.formatHour(evento.dataInicial.horario)
        : '00:00'
      const horaFinal = evento.dataFinal.horario
        ? this.formatHour(evento.dataFinal.horario)
        : '00:00'

      const dataInicial = new Date(
        ano +
          '/' +
          evento.dataInicial.dia.substring(3) +
          '/' +
          evento.dataInicial.dia.substring(0, 2) +
          ' ' +
          horaInicial
      )

      const dataFinal = evento.dataFinal.dia
        ? new Date(
            ano +
              '/' +
              evento.dataFinal.dia.substring(3) +
              '/' +
              evento.dataFinal.dia.substring(0, 2) +
              ' ' +
              horaFinal
          )
        : dataInicial
      return dataAtual > dataFinal
    },
    formatHour(hour) {
      hour = hour.substring(0, hour.length - 1)
      if (hour.length < 2) {
        hour = '0' + hour
      }
      return hour + ':00'
    },
  },
}
</script>

<style scoped lang="scss">
.nome-evento {
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 5px;
  margin: 20px 10px;
  display: block;
  float: left;
}

.nome-evento:before {
  position: absolute;
  content: '';
  left: 0px;
  width: 10px;
  height: 13px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 13px solid #fff;
}

.texto-calendario {
  display: block;
  float: right;
}

.v-timeline-item {
  padding-bottom: 0px;
  flex-direction: row-reverse !important;
}

.v-timeline:before {
  background-color: #a06646 !important;
  width: 10px;
  right: calc(50% - 5px) !important;
  border-radius: 10px;
}

.data-dia {
  color: #794a30;
  font-size: 24px;
  margin-bottom: -10px;
}

.data-mes {
  color: #a06646;
  font-size: 14px;
}

.timelineStyle {
  font-family: Fuji;
  font-weight: 500;
}
</style>
