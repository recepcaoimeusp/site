<template>
  <v-row xs-12 justify="center" align="center">
    <v-col>
      <PageBar :background-azul="true">
        <template #left>
          <v-card
            max-width="600"
            class="d-flex flex-column flex-sm-row justify-center align-center pa-5 text-left"
          >
            <img
              width="150px"
              class="mr-sm-5 mb-5 mb-sm-0"
              src="~/assets/images/logoaaamat.png"
            />
            <span>
              A Associação Atlética Acadêmica da Matemática é uma instituição
              gerenciada por um grupo de alunos do IME que cuidam da organização
              de todas as modalidades esportivas, campeonatos e inters. Além
              disso, realizam festas e eventos de integração e também vendem
              produtos personalizados do instituto. Se você tem interesse em
              participar de alguma modalidade ou tem alguma dúvida é só entrar
              em contato pelas redes sociais.
              <table class="socialMedia">
                <tr>
                  <td class="nome text-center text-md-left">
                    <v-icon color="black" size="55px">mdi-facebook</v-icon>
                    <a
                      href="https://www.facebook.com/aaamat.ime"
                      class="link"
                      target="_blank"
                      >aaamat.ime</a
                    >
                  </td>
                  <td class="nome text-center text-md-left">
                    <v-icon color="black" size="55px">mdi-instagram</v-icon>
                    <a
                      href="https://www.instagram.com/aaamat_imeusp/"
                      target="_blank"
                      class="link"
                      >aaamat_imeusp</a
                    >
                  </td>
                </tr>
              </table>
            </span>
          </v-card>
        </template>
        <template #right>
          <AppCarrossel :largura="600" :links="fotos('Atletica')" />
        </template>
      </PageBar>
      <PageBar :background-azul="false">
        <template #left>
          <AppCarrossel :largura="500" :altura="400" :links="fotos('Ime')" />
        </template>
        <template #right>
          <div class="containerContPadrao">
            <p>
              O Instituto de Matemática e Estatística é uma unidade de ensino,
              pesquisa e extensão da Universidade de São Paulo. Possui cursos de
              graduação e pós-graduação nas áreas de matemática, matemática
              aplicada, estatística e ciência da computação. Além disso, com
              corpo docente e discente qualificado, realiza pesquisas
              científicas em suas áreas-chave e áreas relacionadas, como
              bioinformática, neuromatemática e educação em matemática. Tem como
              atividades de extensão, abertas à comunidade externa: cursos de
              aperfeiçoamento e oficinas para professores da rede pública,
              cursos de matemática e de computação durante o período de recesso
              do calendário letivo de graduação, assessoria de estatística e de
              software livre para pesquisadores, empresas e órgãos públicos.
              Também promove exposições de objetos matemáticos com o objetivo de
              propagar conceitos matemáticos diversos à comunidade em geral,
              além de motivar e ilustrar conteúdos ministrados em sala de aula.
            </p>
            <p class="text-md-left text-center">
              <v-btn
                color="#142C68"
                class="white--text mt-5"
                href="http://ime.usp.br"
                target="_blank"
              >
                Visite o site do IME
              </v-btn>
            </p>
          </div>
        </template>
      </PageBar>
      <PageBar :background-azul="true">
        <template #left>
          <div class="containerContMapinha">
            <p>
              Bem-vindes ao Mapinha do IME! Como vocês não vão conhecer o IME
              tão cedo, fizemos um Mapinha no estilo do Pokémon para conhecerem
              melhor o instituto que vão aprender a amar! Além de poderem andar
              livremente por (quase) todo o IME, poderão conversar com várias
              pessoas da comunidade IMEana no caminho que vão te apresentar como
              é a vida de um IMEano. Esperamos que aproveitem, explorem bastante
              e conheçam todos os cantos do Mapinha, porque nós deixamos vários
              segredinhos espalhados!
            </p>
            <p class="text-md-right text-center">
              <v-btn color="#F22816" class="white--text mt-5" @click="emBreve"
                >Conheça o mapinha!
              </v-btn>
            </p>
          </div>
        </template>
        <template #right>
          <AppCarrossel
            :largura="450"
            :altura="400"
            :links="fotos('Mapinha')"
          />
        </template>
      </PageBar>
    </v-col>
  </v-row>
</template>

<script>
import PageBar from '~/components/PageBar.vue'

export default {
  components: {
    PageBar,
  },
  data: () => ({
    ids: {
      Atletica: [
        '10B5cfEwqkjmzZu-6sT98KKy3bZRmjSyU',
        '1oHMaRf-BGp0tdE-QQIsErCAnEv6EzMRC',
        '1DXoZ-GtHro3ysMHzwpWGhcOfwQYSCkt0',
        '1k9dbxqQXV6P8-76hO2bOrXhQuWis06_V',
      ],
      Ime: [
        '12-kTx9jz26gjdBEcKME2Q-JG1kg3NAml',
        '15ds684boKlyXmqf8C5tsZUt1xgeI7rQn',
        '1LSOIzB6cQ1pRfoF6TMpYAz6-6aWy9zIn',
        '174Yua6QGrYY5DaFEhj6VJqB-PBv8VLb9',
      ],
      Mapinha: [
        '1GF9gJij6su0LupEh5aBVneccZEgcMhP8',
        '1FdFFkJ6P0d-JgPW_3wQPhjM7xCWerIWo',
        '1QPC2FikSGfveaa5oGb0uhtPGBo6wO8hn',
        '1HN4s6l_UR0FWYz3PVpuyTsuiWc1FFeyD',
        '1cN7Dxn8GwSmlbiOEJ2RufrqUI1Ypw1pY',
        '1u2hIeRvJ7Z3VG4Ugp16cxe_DAWvGxtAE',
        '1vwUHPN4uxN0Rm1GYSagSTlqUwc9r2x',
        '14KjtgoTRhkqPHDYI9aIJ5G5wedF9n24p',
      ],
    },
  }),
  methods: {
    fotos(nome) {
      return this.ids[nome].map(
        (id) => `https://drive.google.com/uc?export=view&id=${id}`
      )
    },
    emBreve() {
      alert('Em breve!')
    },
  },
}
</script>

<style scoped lang="scss">
.socialMedia {
  width: 100%;
  .nome {
    vertical-align: center;
  }
  .icon {
    vertical-align: middle;
    margin-right: 5px;
  }
  .link {
    color: #000;
  }
}
.containerContPadrao {
  max-width: 600px;
}
.containerContMapinha {
  max-width: 700px;
}
</style>
