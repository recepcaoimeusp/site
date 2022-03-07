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

    <v-tabs-items v-model="tab" class="bgBrown">
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
}
</script>

<style lang="scss" scoped>
.pages {
  font-family: Marmelad;
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

.eventos-tabela {
  width: 100%;
  overflow: hidden;

  .horarios {
    margin-right: 5px;
    .horario {
      background: #254b8a;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      width: 70px;
      text-align: center;
    }
  }
  .principal {
    width: 100%;
    overflow: hidden;
    position: relative;
    .horas-livres {
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .hora-livre {
        width: 100%;
        height: 26px;
        // background: rgb(189, 187, 187);
        background: #fff;
        font-style: italic;
        font-size: 16px;
        font-weight: bolder;
        text-align: center;

        &#hora-um {
          margin-top: 33px;
        }
        &#hora-dois {
          margin-top: 66px;
        }
        &#hora-tres {
          margin-top: 136px;
        }
        &#hora-quatro {
          margin-top: 138px;
        }
      }
    }
    .eventos {
      width: 100%;
      height: 100%;
      overflow-x: scroll;
      scrollbar-width: thin;

      .dias .dia,
      .atividades .atividade {
        min-width: 130px;
        width: 130px;
        margin-right: 15px;
      }

      .dias {
        .dia {
          background: #254b8a;
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          color: #fff;
          height: 30px;
        }
      }
      .atividades {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        &:not(:last-child) {
          margin-bottom: 32px;
        }
        .atividade {
          font-size: 12px;
          font-weight: 700;
          min-height: 60px;
          height: 60px;
          text-align: center;
          display: flex;

          justify-content: center;
          align-items: center;

          &.dobro {
            min-height: 130px;
            height: 130px;
          }
          &.duplo {
            background: none;
            > .atividade {
              margin-right: 0;
              height: 62px;
            }
            flex-flow: column;
            justify-content: space-between;
          }

          &.rosa-forte {
            background: #fc9ca4;
          }
          &.amarelo {
            background: #ffed66;
          }
          &.verde {
            background: #4bd19e;
          }
          &.roxo {
            color: #fff;
            background: #7f62aa;
          }
          &.vermelho {
            background: #da3a55;
            color: #fff;
          }
          &.branco {
            background: #fff;
          }
        }
      }
    }
  }
}
</style>
