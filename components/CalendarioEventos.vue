<template>
  <v-timeline reverse>
    <v-timeline-item v-for="(info, i) in eventos" :key="info.nome">
      <span :class="`nome-evento ${alinhamentoEvento(i)}`">{{
        info.nome
      }}</span>
      <template #opposite>
        <span class="text--right"
          >{{ info.data }}
          <span v-if="info.dataFinal">a {{ info.dataFinal }}</span>
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
</style>
