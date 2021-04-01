<template>
  <v-timeline reverse>
    <v-timeline-item v-for="(evento, i) in eventos" :key="evento.nome">
      <span :class="`nome-evento ${alinhamentoEvento(i)}`">{{
        evento.nome
      }}</span>
      <template #opposite>
        <span class="text--right">
          <span class="data-dia text-h5">{{ evento.dataInicial.dia }} </span>
          {{ textoHorarioInicial(evento) }}
          <template v-if="evento.dataFinal"
            >a
            <span class="data-dia text-h5">
              {{ evento.dataFinal.dia }}
            </span></template
          >
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
  methods: {
    alinhamentoEvento(i) {
      return i % 2 === 0 ? 'text-right' : 'text-left'
    },
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
  //text-align: right;
  width: 100%;
  display: block;
  padding: 30px 0px;
}
.v-timeline-item {
  padding-bottom: 0px;
}

.data-dia {
  // font-weight: 500;
  // font-size: 22px;
  color: #1976d2;
}
</style>
