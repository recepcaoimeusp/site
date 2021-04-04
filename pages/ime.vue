<template>
  <v-row xs-12 justify="center" align="center" class="conteiner-pagina">
    <v-col class="conteudo">
      <v-row justify="end" class="mb-0 py-8 background-azul">
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <v-card
            max-width="600"
            class="d-flex flex-column flex-sm-row justify-center align-center pa-5"
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
                    <img
                      class="icon"
                      width="50px"
                      src="~/assets/images/facebook.svg"
                    />
                    <a href="https://www.facebook.com/aaamat.ime" class="link"
                      >aaamat.ime</a
                    >
                  </td>
                  <td class="nome text-center text-md-left">
                    <img
                      class="icon"
                      width="50px"
                      src="~/assets/images/instagram.svg"
                    />
                    <a
                      href="https://www.instagram.com/aaamat_imeusp/"
                      class="link"
                      >aaamat_imeusp</a
                    >
                  </td>
                </tr>
              </table>
            </span>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-start justify-center justify-md-center align-center"
        >
          <AppCarrossel :largura="600" :links="fotosAtletica" />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="d-flex text-center text-md-right justify-md-center justify-center align-center"
        >
          <AppCarrossel :largura="500" :altura="400" :links="fotosAtletica" />
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-center justify-md-center align-center"
        >
          <div class="imeDescContainer">
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
              >
                Visite o site do IME
              </v-btn>
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row class="background-azul">
        <v-col
          cols="12"
          md="6"
          class="d-flex text-center text-md-right justify-md-center justify-center align-center"
        >
          <div class="mapinhaDescContainer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod elit quis mollis blandit. Nam eleifend tortor vel est
              tincidunt, in accumsan orci porttitor. Aenean sodales nibh lectus,
              in fringilla purus suscipit eu. Nam quis augue gravida, lobortis
              eros sed, lacinia leo. Proin viverra tortor et odio commodo, sed
              sagittis velit mollis. Morbi ornare leo id eros maximus, eget
              aliquam mi dignissim. In eu ultricies est. Vivamus ut finibus
              neque. Suspendisse massa mauris, tempus congue lobortis nec,
              finibus eu sem.
            </p>
            <p class="text-md-right text-center">
              <v-btn
                color="#F22816"
                class="white--text mt-5"
                href="http://ime.usp.br"
                >Conheça o mapinha!
              </v-btn>
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-center justify-md-center align-center"
        >
          <AppCarrossel :largura="450" :altura="400" :links="fotosAtletica" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  data: () => ({
    ids: [
      '10B5cfEwqkjmzZu-6sT98KKy3bZRmjSyU',
      '1oHMaRf-BGp0tdE-QQIsErCAnEv6EzMRC',
      '1DXoZ-GtHro3ysMHzwpWGhcOfwQYSCkt0',
      '1k9dbxqQXV6P8-76hO2bOrXhQuWis06_V',
    ],
  }),
  computed: {
    fotosAtletica() {
      return this.ids.map(
        (id) => `https://drive.google.com/uc?export=view&id=${id}`
      )
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

.imeDescContainer {
  max-width: 600px;
}

.mapinhaDescContainer {
  max-width: 700px;
}
</style>
