<template>
  <div class="d-flex flex-row justify-start eventos-tabela">
    <div class="horarios d-flex flex-column justify-start mt-5">
      <span class="horario mb-1">8:00</span>
      <span class="horario mb-10">10:00</span>
      <span class="horario mb-1">12:00</span>
      <span class="horario mb-10">14:00</span>
      <span class="horario mb-10">16:00</span>
      <span class="horario mb-1">18:00</span>
      <span class="horario mb-12">19:20</span>
      <span class="horario mb-11">21:00</span>
      <span class="horario mb-1">22:30</span>
      <span class="horario">23:00</span>
    </div>
    <div class="principal">
      <div class="horas-livres d-flex flex-column">
        <div id="hora-um" class="hora-livre">Hora livre*</div>
        <div id="hora-dois" class="hora-livre">Hora livre* para o almoço</div>
        <div id="hora-tres" class="hora-livre">Hora livre* para o jantar</div>
        <div id="hora-quatro" class="hora-livre">Hora livre*</div>
      </div>
      <div class="eventos">
        <div class="dias d-flex flex-row justify-space-between mb-8">
          <div class="dia">Seg. 12/04</div>
          <div class="dia">Ter. 13/04</div>
          <div class="dia">Qua. 14/04</div>
          <div class="dia">Qui. 15/04</div>
          <div class="dia">Sex. 16/04</div>
        </div>
        <div class="atividades">
          <div class="atividade amarelo">
            <span> Apresentação da comissão </span>
          </div>
          <div class="atividade roxo">
            <span> Conversa sobre saúde mental </span>
          </div>
          <div class="atividade vermelho">
            <span> Manual de sobrevivência no IME USP </span>
          </div>
          <div class="atividade verde">
            <span> Conversa sobre os cursos [cursos diurnos] </span>
          </div>
          <div class="atividade verde">
            <span> Conversa com professores dos cursos diurnos </span>
          </div>
        </div>
        <div class="atividades">
          <div class="atividade dobro rosa-forte">
            <span> Dinâmicas de interação </span>
          </div>
          <div class="atividade duplo dobro">
            <div class="atividade branco">
              <span> Hora livre * para a confirmação de matrícula </span>
            </div>
            <div class="atividade roxo">
              <span> Conhecendo entidades e grupos do IME </span>
            </div>
          </div>
          <div class="atividade dobro rosa-forte">
            <span> Dinâmicas de Integração </span>
          </div>
          <div class="atividade duplo dobro">
            <div class="atividade roxo">
              <span> Ex-alunes Jean e Juju </span>
            </div>
            <div class="atividade rosa-forte">
              <span> Dinâmicas de Integração </span>
            </div>
          </div>
          <div class="atividade duplo dobro">
            <div class="atividade rosa-forte">
              <span> Sessão de Filmes </span>
            </div>
            <div class="atividade amarelo">
              <span> Premiação da Gincana </span>
            </div>
          </div>
        </div>
        <div class="atividades">
          <div class="atividade duplo dobro">
            <div class="atividade amarelo">
              <span>Apresentação da Comissão</span>
            </div>
            <div class="atividade vermelho">
              <span>Manual de Sobrevivência no IME USP</span>
            </div>
          </div>
          <div class="atividade duplo dobro">
            <div class="atividade verde">
              <span> Conversa com professores dos cursos noturnos </span>
            </div>
            <div class="atividade rosa-forte">
              <span> Dinâmicas de Interação </span>
            </div>
          </div>
          <div class="atividade duplo dobro">
            <div class="atividade branco">
              <span>
                (Começa às 19h00) Palestra do Diretor e Conversa com Pais
              </span>
            </div>
            <div class="atividade roxo">
              <span> Palestra da Atlética </span>
            </div>
          </div>
          <div class="atividade duplo dobro">
            <div class="atividade verde">
              <span> Conversa sobre os cursos [cursos noturnos] </span>
            </div>
            <div class="atividade roxo">
              <span> Ex-aluna Yumi </span>
            </div>
          </div>
          <div class="atividade dobro rosa-forte">
            <span> Games com a Atlética </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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

        @media (min-width: 1900px) {
          min-width: 200px;
          width: 200px;
        }
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
