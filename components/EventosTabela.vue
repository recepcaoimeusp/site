<template>
  <v-card color="transparent" flat>
    <v-toolbar class="rounded-lg" height="90px" color="rgba(0, 0, 0, 0.2)" flat>
      <v-tabs v-model="tab" height="90px" show-arrows="mobile" centered>
        <v-tabs-slider color="black"></v-tabs-slider>

        <v-tab v-for="item in items" :key="item.title" class="txtBlack pages">
          <div class="d-flex flex-column">
            <span class="data-dia">{{ item.dia }}</span>
            <span class="data-semana">{{ item.semana }}</span>
          </div>
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <template v-if="mostrarCronograma">
      <div class="my-5">
        <v-tabs-items
          v-model="tab"
          class="overflow-y-auto transparent-bg"
          :class="{ itemTab: mediumUpScreens }"
        >
          <v-tab-item v-for="item in items" :key="item.title">
            <table>
              <template v-for="atividade in item.info">
                <tr :key="atividade.evento">
                  <th align="center">
                    <span class="horario txtBrown">{{ atividade.inicio }}</span>
                    às
                    <span class="horario txtBrown">{{ atividade.fim }}</span>
                  </th>
                  <td>
                    <v-card class="bgBrown" dark flat
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
      </div>
    </template>
    <template v-else>
      <div class="blocked">
        <v-icon size="100">fa-solid fa-lock</v-icon>
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
          dia: '13/03',
          semana: 'segunda',
          info: [
            {
              inicio: '08h00',
              fim: '12h00',
              evento:
                'Compra de Kit Bixe, Visita ao IME, Cadastro e Apresentação da Comissão',
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
              fim: '16h00',
              evento: 'Palestra da Atlética',
              classe: 'py-5',
            },
            {
              inicio: '16h00',
              fim: '17h00',
              evento: 'Conversa com os professores Carlinhos e Brolezzi',
              classe: 'py-3',
            },
            {
              inicio: '17h00',
              fim: '18h00',
              evento: 'Dinâmicas',
              classe: 'py-3',
            },
            {
              inicio: '18h00',
              fim: '19h00',
              evento: 'Janta no Bandejão',
              classe: 'py-3',
            },
            {
              inicio: '19h00',
              fim: '21h00',
              evento:
                'Compra de Kit Bixe, Visita ao IME e Apresentação da Comissão',
              classe: 'py-5',
            },
            {
              inicio: '21h00',
              fim: '22h00',
              evento: 'Palestra da Atlética',
              classe: 'py-4',
            },
          ],
        },
        {
          dia: '14/03',
          semana: 'terça',
          info: [
            {
              inicio: '08h00',
              fim: '12h00',
              evento: 'Visita aos Stands das Entidades e Doação de Cabelo',
              classe: 'py-10',
            },
            {
              inicio: '12h00',
              fim: '21h00',
              evento: 'Atividade e Confraternização com a Atlética',
              classe: 'py-16',
            },
            {
              inicio: '21h00',
              fim: '22h00',
              evento: 'Atividade Dinâmica',
              classe: 'py-4',
            },
          ],
        },
        {
          dia: '15/03',
          semana: 'quarta',
          info: [
            {
              inicio: '08h00',
              fim: '10h00',
              evento: 'Palestra de Ex-alunes',
              classe: 'py-5',
            },
            {
              inicio: '10h00',
              fim: '12h00',
              evento: 'Guia pela USP',
              classe: 'py-5',
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
              fim: '18h00',
              evento: 'Canibal',
              classe: 'py-8',
            },
            {
              inicio: '18h00',
              fim: '19h00',
              evento: 'Janta no Bandejão',
              classe: 'py-3',
            },
            {
              inicio: '19h00',
              fim: '20h00',
              evento: 'Palestra de Saúde Mental',
              classe: 'py-3',
            },
            {
              inicio: '20h00',
              fim: '21h00',
              evento: 'Palestra da Yumi',
              classe: 'py-3',
            },
            {
              inicio: '21h00',
              fim: '22h00',
              evento: 'Conversa sobre os Cursos',
              classe: 'py-3',
            },
          ],
        },
        {
          dia: '16/03',
          semana: 'quinta',
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
              evento: 'Kahoot',
              classe: 'py-3',
            },
            {
              inicio: '11h00',
              fim: '12h00',
              evento: 'Conversa sobre os Cursos',
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
              fim: '18h00',
              evento: 'Caça ao Tesouro',
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
              fim: '20h00',
              evento: 'Palestra do CAMat',
              classe: 'py-3',
            },
            {
              inicio: '20h00',
              fim: '21h00',
              evento: 'Palestra do IME Wolves - E-sports',
              classe: 'py-3',
            },
            {
              inicio: '21h00',
              fim: '22h00',
              evento: 'Manual de Sobrevivência',
              classe: 'py-3',
            },
          ],
        },
        {
          dia: '17/03',
          semana: 'sexta',
          info: [
            {
              inicio: '08h00',
              fim: '09h00',
              evento: 'Palestra do IME Wolves - E-sports',
              classe: 'py-3',
            },
            {
              inicio: '09h00',
              fim: '12h00',
              evento: 'Visita ao CEPE - USP',
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
              fim: '15h00',
              evento: 'Palestra com o Diretor',
              classe: 'py-3',
            },
            {
              inicio: '15h00',
              fim: '16h00',
              evento: 'Palestra do CAMat',
              classe: 'py-3',
            },
            {
              inicio: '16h00',
              fim: '18h00',
              evento: 'Premiação da Gincana',
              classe: 'py-5',
            },
            {
              inicio: '18h00',
              fim: '19h00',
              evento: 'Janta no Bandejão',
              classe: 'py-3',
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
  font-family: Chewy;
}

.transparent-bg {
  background-color: transparent !important;
}

.pages {
  font-family: Chewy;
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
  font-family: Chewy;
  th {
    padding: 10px;
    vertical-align: baseline;
  }
  td {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
}

.horario {
  font-size: 18px;
  font-weight: bold;
}

.data-dia {
  font-size: 26px;
}

.data-semana {
  font-size: 14px;
}

.v-tab {
  text-transform: none;
}
</style>
