<template>
  <v-row xs-12 justify="center" align="center">
    <v-col>
      <PrincipalBar :links="fotos('Atletica')" :largura_slide="600">
        <img
          width="150px"
          class="mr-sm-5 mb-5 mb-sm-0"
          src="~/assets/images/logoaaamat.png"
        />
        <span>
          A Associação Atlética Acadêmica da Matemática é uma instituição
          gerenciada por um grupo de alunos do IME que cuidam da organização de
          todas as modalidades esportivas, campeonatos e inters. Além disso,
          realizam festas e eventos de integração e também vendem produtos
          personalizados do instituto. Se você tem interesse em participar de
          alguma modalidade ou tem alguma dúvida é só entrar em contato pelas
          redes sociais.
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
      </PrincipalBar>
      <SecondaryBar
        :background-azul="false"
        :links="fotos('Ime')"
        :alinha-texto-esquerda="false"
        :largura-slide="500"
        :altura-slide="400"
      >
        <p>
          O Instituto de Matemática e Estatística é uma unidade de ensino,
          pesquisa e extensão da Universidade de São Paulo. Possui cursos de
          graduação e pós-graduação nas áreas de matemática, matemática
          aplicada, estatística e ciência da computação. Além disso, com corpo
          docente e discente qualificado, realiza pesquisas científicas em suas
          áreas-chave e áreas relacionadas, como bioinformática, neuromatemática
          e educação em matemática. Tem como atividades de extensão, abertas à
          comunidade externa: cursos de aperfeiçoamento e oficinas para
          professores da rede pública, cursos de matemática e de computação
          durante o período de recesso do calendário letivo de graduação,
          assessoria de estatística e de software livre para pesquisadores,
          empresas e órgãos públicos. Também promove exposições de objetos
          matemáticos com o objetivo de propagar conceitos matemáticos diversos
          à comunidade em geral, além de motivar e ilustrar conteúdos
          ministrados em sala de aula.
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
      </SecondaryBar>
      <SecondaryBar
        :background-azul="true"
        :links="fotos('Mapinha')"
        :alinha-texto-esquerda="true"
        :largura-slide="450"
        :altura-slide="400"
        :largura-container="700"
      >
        <p>
          Bem-vindes ao Mapinha do IME! Como vocês não vão conhecer o IME tão
          cedo, fizemos um Mapinha no estilo do Pokémon para conhecerem melhor o
          instituto que vão aprender a amar! Além de poderem andar livremente
          por (quase) todo o IME, poderão conversar com várias pessoas da
          comunidade IMEana no caminho que vão te apresentar como é a vida de um
          IMEano. Esperamos que aproveitem, explorem bastante e conheçam todos
          os cantos do Mapinha, porque nós deixamos vários segredinhos
          espalhados!
        </p>
        <p class="text-md-right text-center">
          <v-btn
            color="#F22816"
            class="white--text mt-5"
            href="#"
            target="_blank"
            >Conheça o mapinha!
          </v-btn>
        </p>
      </SecondaryBar>
    </v-col>
  </v-row>
</template>

<script>
import PrincipalBar from '~/components/PrincipalBar.vue'
import SecondaryBar from '~/components/SecondaryBar.vue'

export default {
  components: {
    PrincipalBar,
    SecondaryBar,
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
        '10B5cfEwqkjmzZu-6sT98KKy3bZRmjSyU',
        '1oHMaRf-BGp0tdE-QQIsErCAnEv6EzMRC',
        '1DXoZ-GtHro3ysMHzwpWGhcOfwQYSCkt0',
        '1k9dbxqQXV6P8-76hO2bOrXhQuWis06_V',
      ],
      Mapinha: [
        '10B5cfEwqkjmzZu-6sT98KKy3bZRmjSyU',
        '1oHMaRf-BGp0tdE-QQIsErCAnEv6EzMRC',
        '1DXoZ-GtHro3ysMHzwpWGhcOfwQYSCkt0',
        '1k9dbxqQXV6P8-76hO2bOrXhQuWis06_V',
      ],
    },
  }),
  methods: {
    fotos(nome) {
      return this.ids[nome].map(
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
</style>
