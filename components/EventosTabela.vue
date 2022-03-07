<template>
  <v-card dark flat class="bgBrown">
    <v-toolbar flat>
      <v-tabs v-model="tab" class="bgBrown" align-with-title>
        <v-tabs-slider color="#c5ee7d"></v-tabs-slider>

        <v-tab
          v-for="item in items"
          :key="item.title"
          class="txtLightGreen pages"
        >
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items
      v-model="tab"
      class="bgBrown overflow-y-auto"
      :class="{ itemTab: smallScreen }"
    >
      <v-tab-item v-for="item in items" :key="item.title">
        <table>
          <template v-for="atividade in item.info">
            <tr :key="atividade.evento">
              <th>
                <span class="horario txtGreen">{{ atividade.inicio }}</span> às
                <span class="horario txtGreen">{{ atividade.fim }}</span>
              </th>
              <td>
                <v-card class="bgDarkGreen" dark
                  ><div class="px-4" :class="atividade.classe">
                    {{ atividade.evento }}
                  </div></v-card
                >
              </td>
            </tr>
          </template>
        </table>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        {
          title: 'SEG 14/03',
          info: [
            {
              inicio: '08h00',
              fim: '12h00',
              evento: 'Compra de Kit Bixe, Cadastro e Apresentação da Comissão',
              classe: 'py-10',
            },
            {
              inicio: '12h00',
              fim: '14h00',
              evento: 'Almoço no Bandejão',
              classe: 'py-5',
            },
            {
              inicio: '14h00',
              fim: '18h00',
              evento: 'Stands e Atividade Dinâmica',
              classe: 'py-10',
            },
            {
              inicio: '18h00',
              fim: '19h00',
              evento: 'Janta no Bandejão',
              classe: 'py-3',
            },
            {
              inicio: '19h00',
              fim: '22h20',
              evento: 'Compra de Kit Bixe e Cadastro',
              classe: 'py-7',
            },
            {
              inicio: '19h00',
              fim: '21h20',
              evento: 'Apresentação da Comissão',
              classe: 'py-6',
            },
          ],
        },
        {
          title: 'TER 15/03',
          info: [
            {
              inicio: '08h00',
              fim: '10h00',
              evento: 'Apresentando a comissão',
              classe: 'py-3',
            },
            {
              inicio: '10h00',
              fim: '12h00',
              evento: 'Teste',
              classe: 'py-6',
            },
          ],
        },
        {
          title: 'QUA 16/03',
          info: [
            {
              inicio: '08h00',
              fim: '10h00',
              evento: 'Apresentando a comissão',
              classe: 'py-3',
            },
            {
              inicio: '10h00',
              fim: '12h00',
              evento: 'Teste',
              classe: 'py-6',
            },
          ],
        },
        {
          title: 'QUI 17/03',
          info: [
            {
              inicio: '08h00',
              fim: '10h00',
              evento: 'Apresentando a comissão',
              classe: 'py-3',
            },
            {
              inicio: '10h00',
              fim: '12h00',
              evento: 'Teste',
              classe: 'py-6',
            },
          ],
        },
        {
          title: 'SEX 18/03',
          info: [
            {
              inicio: '08h00',
              fim: '10h00',
              evento: 'Apresentando a comissão',
              classe: 'py-3',
            },
            {
              inicio: '10h00',
              fim: '12h00',
              evento: 'Teste',
              classe: 'py-6',
            },
          ],
        },
      ],
    }
  },
  computed: {
    smallScreen() {
      return this.$vuetify.breakpoint.mdAndUp
    },
  },
}
</script>

<style lang="scss" scoped>
.pages {
  font-family: Marmelad;
}

.itemTab {
  max-height: 450px;
}

table {
  width: 100%;
  font-family: Marmelad;
  th {
    padding: 10px;
    vertical-align: baseline;
  }
  td {
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
}

.horario {
  font-size: 18px;
  font-weight: bold;
}
</style>
