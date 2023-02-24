<template>
  <v-timeline reverse>
    <v-timeline-item
      v-for="(evento, i) in eventos"
      :key="evento.nome"
      class="timelineStyle txtBrown"
      :color="cores[i % cores.length]"
      fill-dot
      small
    >
      <span class="text-left nome-evento">{{ evento.nome }}</span>
      <template #opposite>
        <div class="text-right texto-calendario d-flex align-center">
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
    cores: ['#794A30'],
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
  background-color: #a06646;
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
  font-family: Chewy;
}
</style>
