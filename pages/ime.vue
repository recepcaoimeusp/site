<template>
  <v-row xs-12>
    <v-col>
      <PageBar :background-azul="true">
        <template #left>
          <v-card
            max-width="600"
            class="d-flex flex-column flex-sm-row justify-center align-center pa-5 text-left"
          >
            <v-card-title>
              <img
                width="150px"
                class="mr-sm-5 mb-5 mb-sm-0"
                src="~/assets/images/logoaaamat.png"
              />
            </v-card-title>
            <v-card-text>
              <span class="text--primary">
                A Associação Atlética Acadêmica da Matemática é uma instituição
                gerenciada por um grupo de alunos do IME que cuidam da
                organização de todas as modalidades esportivas, campeonatos e
                inters. Além disso, realizam festas e eventos de integração e
                também vendem produtos personalizados do instituto. Se você tem
                interesse em participar de alguma modalidade ou tem alguma
                dúvida é só entrar em contato pelas redes sociais.
                <table class="socialMedia">
                  <tr>
                    <td class="nome text-center text-md-left">
                      <v-icon
                        tag="a"
                        href="https://www.facebook.com/aaamat.ime"
                        target="_blank"
                        color="black"
                        size="55px"
                        >mdi-facebook</v-icon
                      >
                      <a
                        href="https://www.facebook.com/aaamat.ime"
                        target="_blank"
                        class="link"
                        >aaamat.ime</a
                      >
                    </td>
                    <td class="nome text-center text-md-left">
                      <v-icon
                        tag="a"
                        href="https://www.instagram.com/aaamat_imeusp/"
                        target="_blank"
                        color="black"
                        size="55px"
                        >mdi-instagram</v-icon
                      >
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
            </v-card-text>
          </v-card>
        </template>
        <template #right>
          <ImagesCarrossel
            :largura="600"
            image-path="atletica"
            image-name="atletica"
            number-of-images="4"
            extension="jpg"
          />
        </template>
      </PageBar>
      <PageBar :background-azul="false">
        <template #left>
          <ImagesCarrossel
            :largura="500"
            :altura="400"
            image-path="ime"
            image-name="ime"
            number-of-images="8"
            extension="jpg"
          />
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
            <p class="font-weight-bold">
              Para executar o mapinha vocês devem seguir os seguintes passos:
            </p>
            <ol>
              <li>Extraia o arquivo zip chamado "mapinha.zip"</li>
              <li>Execute o arquivo "Game.exe" dentro da pasta extraida</li>
            </ol>
            <p class="text-md-right text-center">
              <v-btn
                color="#F22816"
                class="white--text mt-5"
                href="mapinha.zip"
                download
                >Conheça o mapinha!
              </v-btn>
            </p>
          </div>
        </template>
        <template #right>
          <ImagesCarrossel
            :largura="450"
            :altura="400"
            image-path="mapinha"
            image-name="mapinha"
            number-of-images="9"
            extension="png"
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
