<template>
  <v-container>
    <v-timeline reverse>
      <v-timeline-item
        v-for="evento in eventos"
        :key="evento.nome"
        :color="cores[0]"
        class="timelineStyle txtBlack"
        small
        fill-dot
      >
        <template #icon>
          <v-avatar size="27" :class="hasPast(evento) ? 'lightOn' : 'lightOff'">
            <img src="/kungFuPanda/lampada-timeline.svg" />
          </v-avatar>
        </template>

        <span class="text-left nome-evento">{{ evento.nome }}</span>
        <template #opposite>
          <div
            class="texto-calendario d-flex align-center justify-end flex-wrap"
          >
            <div class="d-flex flex-column align-center px-2">
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
              <div class="d-flex flex-column align-center px-2">
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
    <v-row style="justify-content: center">
      <v-avatar style="margin-top: 9px" size="64">
        <img src="/kungFuPanda/lanterna-timeline.svg" />
      </v-avatar>
    </v-row>
  </v-container>
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
    cores: ['#930402', '#EFB654'],
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
  color: #fff;
  margin-right: -10px;
}

.v-timeline-item {
  flex-direction: row-reverse !important;
}

.v-timeline-item:last-child {
  padding-bottom: 75px;
}

.v-timeline:before {
  background-color: #efb654 !important;
  width: 9px;
  right: calc(50% - 4.5px) !important;
  border-radius: 10px;
}

.data-dia {
  font-family: Gang of Three;
  font-size: 30px;
  margin-bottom: -12px;
}

.data-mes {
  font-size: 14px;
}

.lightOn {
  filter: drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.8));
}

.lightOff {
  opacity: 0.5;
}

.timelineStyle {
  font-family: Fuji;
  font-weight: 500;
}
</style>
