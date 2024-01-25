<template>
  <v-card color="transparent" flat>
    <v-toolbar class="rounded-lg" height="90px" color="rgba(0, 0, 0, 0.1)" flat>
      <v-tabs v-model="tab" height="90px" show-arrows="mobile" centered>
        <v-tabs-slider color="white"></v-tabs-slider>
        <v-tab
          v-for="item in items"
          :key="item.title"
          class="white--text pages"
          active-class="default-class selected-bg"
        >
          <div class="d-flex flex-column">
            <span class="data-dia mt-3">{{ item.dia }}</span>
            <span class="data-mes">{{ item.mes }}</span>
            <span class="data-semana mt-1 mb-4">{{ item.semana }}</span>
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
            <table class="white--text">
              <template v-for="atividade in item.info">
                <tr :key="atividade.evento">
                  <th align="center">
                    <span class="horario">{{ atividade.inicio }}</span>
                    às
                    <span class="horario">{{ atividade.fim }}</span>
                  </th>
                  <td>
                    <v-card class="txtBlack bgYellow" dark flat min-height="5em"
                      ><div class="px-4" :class="atividade.classe" align="left">
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
          dia: '26',
          mes: 'fevereiro',
          semana: 'seg',
          info: [
            {
              inicio: '08h',
              fim: '12h',
              evento:
                'Compra de Kit Bixe, Visita ao IME, Cadastro e Apresentação da Comissão',
              classe: 'py-10',
            },
            {
              inicio: '12h',
              fim: '14h',
              evento: 'Almoço no Bandejão',
              classe: 'py-5',
            },
            {
              inicio: '14h',
              fim: '16h',
              evento: 'Palestra da Atlética',
              classe: 'py-5',
            },
            {
              inicio: '16h',
              fim: '17h',
              evento: 'Conversa com os professores Carlinhos e Brolezzi',
              classe: 'py-3',
            },
            {
              inicio: '17h',
              fim: '18h',
              evento: 'Dinâmicas',
              classe: 'py-3',
            },
            {
              inicio: '18h',
              fim: '19h',
              evento: 'Janta no Bandejão',
              classe: 'py-3',
            },
            {
              inicio: '19h',
              fim: '21h',
              evento:
                'Compra de Kit Bixe, Visita ao IME e Apresentação da Comissão',
              classe: 'py-5',
            },
            {
              inicio: '21h',
              fim: '22h',
              evento: 'Palestra da Atlética',
              classe: 'py-4',
            },
          ],
        },
        {
          dia: '27',
          mes: 'fevereiro',
          semana: 'ter',
          info: [
            {
              inicio: '08h',
              fim: '12h',
              evento: 'Visita aos Stands das Entidades e Doação de Cabelo',
              classe: 'py-10',
            },
            {
              inicio: '12h',
              fim: '21h',
              evento: 'Atividade e Confraternização com a Atlética',
              classe: 'py-16',
            },
            {
              inicio: '21h',
              fim: '22h',
              evento: 'Atividade Dinâmica',
              classe: 'py-4',
            },
          ],
        },
        {
          dia: '28',
          mes: 'fevereiro',
          semana: 'qua',
          info: [
            {
              inicio: '08h',
              fim: '10h',
              evento: 'Palestra de Ex-alunes',
              classe: 'py-5',
            },
            {
              inicio: '10h',
              fim: '12h',
              evento: 'Guia pela USP',
              classe: 'py-5',
            },
            {
              inicio: '12h',
              fim: '14h',
              evento: 'Almoço no Bandejão',
              classe: 'py-5',
            },
            {
              inicio: '14h',
              fim: '15h',
              evento: 'Palestra de Saúde Mental',
              classe: 'py-3',
            },
            {
              inicio: '15h',
              fim: '18h',
              evento: 'Canibal',
              classe: 'py-8',
            },
            {
              inicio: '18h',
              fim: '19h',
              evento: 'Janta no Bandejão',
              classe: 'py-3',
            },
            {
              inicio: '19h',
              fim: '20h',
              evento: 'Palestra de Saúde Mental',
              classe: 'py-3',
            },
            {
              inicio: '20h',
              fim: '21h',
              evento: 'Palestra da Yumi',
              classe: 'py-3',
            },
            {
              inicio: '21h',
              fim: '22h',
              evento: 'Conversa sobre os Cursos',
              classe: 'py-3',
            },
          ],
        },
        {
          dia: '29',
          mes: 'fevereiro',
          semana: 'qui',
          info: [
            {
              inicio: '08h',
              fim: '10h',
              evento: 'Manual de Sobrevivência',
              classe: 'py-5',
            },
            {
              inicio: '10h',
              fim: '11h',
              evento: 'Kahoot',
              classe: 'py-3',
            },
            {
              inicio: '11h',
              fim: '12h',
              evento: 'Conversa sobre os Cursos',
              classe: 'py-3',
            },
            {
              inicio: '12h',
              fim: '14h',
              evento: 'Almoço no Bandejão',
              classe: 'py-5',
            },
            {
              inicio: '14h',
              fim: '18h',
              evento: 'Caça ao Tesouro',
              classe: 'py-10',
            },
            {
              inicio: '18h',
              fim: '19h',
              evento: 'Janta no Bandejão',
              classe: 'py-3',
            },
            {
              inicio: '19h',
              fim: '20h',
              evento: 'Palestra do CAMat',
              classe: 'py-3',
            },
            {
              inicio: '20h',
              fim: '21h',
              evento: 'Palestra do IME Wolves - E-sports',
              classe: 'py-3',
            },
            {
              inicio: '21h',
              fim: '22h',
              evento: 'Manual de Sobrevivência',
              classe: 'py-3',
            },
          ],
        },
        {
          dia: '01',
          mes: 'março',
          semana: 'sex',
          info: [
            {
              inicio: '08h',
              fim: '09h',
              evento: 'Palestra do IME Wolves - E-sports',
              classe: 'py-3',
            },
            {
              inicio: '09h',
              fim: '12h',
              evento: 'Visita ao CEPE - USP',
              classe: 'py-8',
            },
            {
              inicio: '12h',
              fim: '14h',
              evento: 'Almoço no Bandejão',
              classe: 'py-5',
            },
            {
              inicio: '14h',
              fim: '15h',
              evento: 'Palestra com o Diretor',
              classe: 'py-3',
            },
            {
              inicio: '15h',
              fim: '16h',
              evento: 'Palestra do CAMat',
              classe: 'py-3',
            },
            {
              inicio: '16h',
              fim: '18h',
              evento: 'Premiação da Gincana',
              classe: 'py-5',
            },
            {
              inicio: '18h',
              fim: '19h',
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
  font-family: Gang of Three;
}

.transparent-bg {
  background-color: transparent !important;
}

.selected-bg {
  background-color: rgba(255, 255, 255, 0.15);
}

.pages {
  font-family: Gang of Three;
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
  font-family: Fuji;
  font-weight: 500;
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
  font-family: Gang of Three;
  font-size: 22px;
  font-weight: 350;
}

.data-dia {
  font-family: Gang of Three;
  font-size: 30px;
}

.data-mes {
  font-family: Fuji;
  font-weight: regular;
  letter-spacing: 0.5px;
  font-size: 16px;
}

.data-semana {
  font-size: 16px;
  font-family: Fuji;
  font-weight: bolder;
}

.v-tab {
  text-transform: none;
}
</style>
