<template>
  <v-timeline reverse>
    <v-timeline-item v-for="evento in eventos" :key="evento.nome">
      <span :class="`text-left texto-calendario nome-evento `">{{
        evento.nome
      }}</span>
      <template #opposite>
        <span class="text-right texto-calendario">
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
  padding: 30px 0px;
}
.texto-calendario {
  width: 100%;
  display: block;
}
.v-timeline-item {
  padding-bottom: 0px;
  flex-direction: row-reverse !important;
}

.data-dia {
  color: #1976d2;
}
</style>
