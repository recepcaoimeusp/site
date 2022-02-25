<template>
  <v-timeline reverse>
    <v-timeline-item
      class="timelineStyle"
      v-for="(evento, i) in eventos"
      :key="evento.nome"
      :color="cores[i % cores.length]"
      fill-dot
      small
    >
      <span :class="`text-left nome-evento `">{{ evento.nome }}</span>
      <template #opposite>
        <span class="text-right texto-calendario">
          <span class="data-dia">{{ evento.dataInicial.dia }} </span>
          {{ textoHorarioInicial(evento) }}
          <template v-if="evento.dataFinal.dia">
            a
            <span class="data-dia">
              {{ evento.dataFinal.dia }}
            </span>
          </template>
          {{ textoHorarioFinal(evento) }}
        </span>
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
    cores: ['#7A9244'],
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
  background-color: #5c452d;
}

.data-dia {
  color: #7a9244;
  font-size: 24px;
}

.timelineStyle {
  font-family: Marmelad;
}
</style>
