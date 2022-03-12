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

    <template v-if="mostrarCronograma">
      <v-tabs-items
        v-model="tab"
        class="bgBrown overflow-y-auto"
        :class="{ itemTab: mediumUpScreens }"
      >
        <v-tab-item v-for="item in items" :key="item.title">
          <table>
            <template v-for="atividade in item.info">
              <tr :key="atividade.evento">
                <th>
                  <span class="horario txtGreen">{{ atividade.inicio }}</span>
                  às
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
    </template>
    <template v-else>
      <div class="blocked">
        <v-icon class="txtLightGreen" size="100">mdi-lock</v-icon>
        <h1 class="txtLightGreen">O cronograma será liberado em breve!</h1>
      </div>
    </template>
  </v-card>
</template>

<script>
export default {
  props: {
    mostrarCronograma: {
      type: Boolean,
      default: false,
    },
  },
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
              evento: 'Compra de Kit Bixe, Visita ao IME, Cadastro e Apresentação da Comissão',
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
              fim: '12h00',
              evento: 'Palestra com Ex-alunos e Caça ao Tesouro',
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
              fim: '15h00',
              evento: 'Conversa com o Diretor',
              classe: 'py-3',
            },
            {
              inicio: '15h00',
              fim: '18h00',
              evento: 'Cinema e Doação de Cabelos',
              classe: 'py-7',
            },
            {
              inicio: '18h00',
              fim: '19h00',
              evento: 'Janta no Bandejão',
              classe: 'py-3',
            },
            {
              inicio: '19h00',
              fim: '20h50',
              evento: 'Palestra de Saúde Mental',
              classe: 'py-5',
            },
            {
              inicio: '20h50',
              fim: '22h20',
              evento: 'Palestra da Atlética',
              classe: 'py-4',
            },
          ],
        },
        {
          title: 'QUA 16/03',
          info: [
            {
              inicio: '08h00',
              fim: '10h00',
              evento: 'Manual de Sobrevivência',
              classe: 'py-5',
            },
            {
              inicio: '10h00',
              fim: '11h00',
              evento: 'Conversa sobre os Cursos',
              classe: 'py-3',
            },
            {
              inicio: '11h00',
              fim: '12h00',
              evento: 'Kahoot',
              classe: 'py-3',
            },
            {
              inicio: '12h00',
              fim: '14h00',
              evento: 'Almoço no Bandejão',
              classe: 'py-5',
            },
            {
              inicio: '14h00',
              fim: '15h00',
              evento: 'Palestra de Saúde Mental',
              classe: 'py-3',
            },
            {
              inicio: '15h00',
              fim: '17h00',
              evento: 'Canibal',
              classe: 'py-5',
            },
            {
              inicio: '18h00',
              fim: '19h00',
              evento: 'Janta no Bandejão',
              classe: 'py-3',
            },
            {
              inicio: '19h00',
              fim: '20h50',
              evento: 'Conversa com os Pais',
              classe: 'py-5',
            },
            {
              inicio: '20h50',
              fim: '22h20',
              evento: 'Conversa sobre os Cursos',
              classe: 'py-4',
            },
          ],
        },
        {
          title: 'QUI 17/03',
          info: [
            {
              inicio: '08h00',
              fim: '10h00',
              evento: 'Palestra com a Kira',
              classe: 'py-5',
            },
            {
              inicio: '10h00',
              fim: '12h00',
              evento: 'Palestra da Atlética',
              classe: 'py-5',
            },
            {
              inicio: '12h00',
              fim: '17h00',
              evento: 'Atividade da Atlética',
              classe: 'py-13',
            },
            {
              inicio: '18h00',
              fim: '20h50',
              evento: 'Confraternização da AAAMat',
              classe: 'py-8',
            },
            {
              inicio: '20h50',
              fim: '22h20',
              evento: 'Atividade Dinâmica',
              classe: 'py-4',
            },
          ],
        },
        {
          title: 'SEX 18/03',
          info: [
            {
              inicio: '08h00',
              fim: '09h00',
              evento: 'IME Wolves',
              classe: 'py-3',
            },
            {
              inicio: '09h00',
              fim: '12h00',
              evento: 'CEPE',
              classe: 'py-8',
            },
            {
              inicio: '12h00',
              fim: '14h00',
              evento: 'Almoço no Bandejão',
              classe: 'py-5',
            },
            {
              inicio: '14h00',
              fim: '14h30',
              evento: 'Lobo',
              classe: 'py-1',
            },
            {
              inicio: '14h30',
              fim: '15h30',
              evento: 'Premiação da Gincana',
              classe: 'py-3',
            },
            {
              inicio: '15h30',
              fim: '18h00',
              evento: 'Jogos com o IME Wolves',
              classe: 'py-6',
            },
            {
              inicio: '18h00',
              fim: '19h00',
              evento: 'Janta no Bandejão',
              classe: 'py-3',
            },
            {
              inicio: '19h00',
              fim: '20h20',
              evento: 'Palestra com a Yumi',
              classe: 'py-3',
            },
            {
              inicio: '20h50',
              fim: '22h20',
              evento: 'Jogos com o IME Wolves',
              classe: 'py-4',
            },
          ],
        },
      ],
    }
  },
  computed: {
    mediumUpScreens() {
      return this.$vuetify.breakpoint.mdAndUp
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 30px 110px;
  text-align: center;
  font-family: Marmelad;
}

.pages {
  font-family: Marmelad;
}

.itemTab {
  max-height: 450px;
}

.blocked {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 450px;
  opacity: 0.5;
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
