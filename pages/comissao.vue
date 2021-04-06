<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-row justify="end" class="mb-0 py-8 background-azul">
        <v-col cols="12" class="d-flex justify-center align-center">
          <div class="comissao">
            <Logo class="mr-sm-5 mb-5 mb-sm-0" />
            <h2 class="titulo">O que é a Comissão?</h2>
            <span class="descricao-comissao justify-center">
              <p>
                A Comissão de Recepção é um grupo de veteranes do IME-USP
                responsável por organizar a recepção e auxiliar os ingressantes
                em seus primeiros momentos IMEanes. Apresenta cada detalhezinho
                dessa maravilhosa universidade, desde como chegar lá, até os
                truques de como sobreviver às disciplinas. Sabemos que esses
                primeiros momentos no IME-USP podem ser um pouco difíceis, mas
                estamos aqui para ajudar e fazer com que esse primeiro ano na
                USP seja inesquecível!
              </p>
              <p>
                Também organiza a super Semana de Recepção, repleta de
                atividades pensadas e preparadas com muito carinho para integrar
                os bixes a essa nova fase universitária. Incluímos atividades
                desde palestras informativas (como a palestra do Diretor) até
                atividades interativas para conhecer os colegas de turma,
                afinal, é muito importante aproveitar essa jornada e fazer novas
                amizades!
              </p>
              <p>
                As atividades da Comissão de Recepção não se limitam apenas ao
                planejamento da Semana de Recepção. Também organizamos o
                Kit-Bixe (um kit completo para você mostrar por aí que passou no
                IME-USP), o Guia do Bixe (repleto de informações que serão muito
                úteis para a sua graduação inteira), além de outros eventos de
                integração e plantões de dúvidas. Antes e depois da Semana de
                Recepção, estamos sempre à disposição para tirar dúvidas e
                auxiliar os ingressantes nesses primeiros momentos IMEanes!
              </p>
            </span>
            <ul class="d-flex justify-space-between socialMedia">
              <li class="nome text-center">
                <v-icon color="black" size="55px">mdi-facebook</v-icon>
                <a
                  href="https://www.facebook.com/recepcaoimeusp"
                  class="link"
                  target="_blank"
                  >recepcaoimeusp</a
                >
              </li>
              <li class="nome text-center">
                <v-icon color="black" size="55px">mdi-instagram</v-icon>
                <a
                  href="https://www.instagram.com/recepcaoimeusp/"
                  target="_blank"
                  class="link"
                  >@recepcaoimeusp</a
                >
              </li>
              <li class="nome text-center">
                <v-icon color="black" size="55px">mdi-discord</v-icon>
                <a
                  href="https://discord.com/invite/P6Zn86nUve"
                  class="link"
                  target="_blank"
                  >IME 2021</a
                >
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <div class="apresentacao">
          <h2 class="titulo">Conheça a Comissão!</h2>
        </div>
        <v-row class="d-flex justify-center membros-comissao">
          <AppCarrossel
            :altura="tamanhoImagem()"
            :largura="tamanhoImagem()"
            :links="fotos('Azul')"
            :intervalo="12000"
          />
          <AppCarrossel
            :altura="tamanhoImagem()"
            :largura="tamanhoImagem()"
            :links="fotos('Vermelho')"
            :intervalo="12000"
          />
          <AppCarrossel
            :altura="tamanhoImagem()"
            :largura="tamanhoImagem()"
            :links="fotos('Amarelo')"
            :intervalo="12000"
          />
        </v-row>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/comissao_logo.vue'
import AppCarrossel from '~/components/AppCarrossel'

export default {
  components: {
    Logo,
    AppCarrossel,
  },

  data: () => ({
    ids: {
      Azul: [
        '1WjNZ4xhouFzbk5MkRwTaby4RDV_AOX2S',
        '1VTj6p797r7-EJIHiTM55Da1LQLysYMtv',
        '1MJPxlL_36GWaCbF-BiJM5Cw0OniIXFiE',
        '13-qx23CjjMhuHhMOgBUvSbmPGG70Wycb',
        '1W5jQoufgjQumJwhpgOalSre-cabwllU4',
        '1gCcLcEIThOXo6J3k-FxW9ioGgMU8R73V',
        '1K4S8oiFL5GMkgRAPzEZ3E28RIotNBz9k',
        '1npyrcqj3_1L-gDlpNTFgF-2cuSU9XIUV',
        '1b-SH1jcY8QqvtTXAqT4iUba6frPArLo5',
        '167IpSUE_rUr0te_nR_9H67J-GGbm_V0q',
        '1SSyKtB6smrMlYZiYrV0OAj1Rj4DgrJgr',
        '1FgBfvmMkBJEyyczYubwO6Wi8yhjJEc0I',
        '1VhMYMQyHk08M5nO-6c3xVAGKafou6Knc',
        '1rLruFynuFQAULJvLfcAosjWRIoRty2tg',
        '1flSOttf9x3Q7vy3se1WFomW6sEjLs16h',
        '1Wrfry2wVzE1A2spXW3ZfFaeZQknWArAv',
        '1iYQeBguHGFSS3l_LGpY-sn5hPbpHlywA',
      ],
      Vermelho: [
        '1bNj_-E-ccZPnBZWqjErAKFyer2Rfa60w',
        '1gC2Sf7FjePCifPlU_mVj709TXQmStAH4',
        '1zz5dhH7PChky3xIe2sFhQog9ND8f_oF3',
        '15Mn0TEmUvD3S-MgB8CJfsZAL7mpYy3MG',
        '1389NdatKaHhr-7vb08cqruyqBcI90LNk',
        '1zEWS2TvJH0hWQwppe9I8vT20hUILZ4t9',
        '1Kdb6zZlsI3XTtf2NqQk96TUhad1PaZ4v',
        '1A7M2w_eXERkwDDFQpqQcku0nhxG-25kg',
        '1ZSjpJHczC15SwNUXy-n9McTdgcajv9TU',
      ],
      Amarelo: [
        '1gKY_zuDDljeHxLvY1JONHYXhnslue6i5',
        '1_CEQweHRjIUNg1G1adU646SGCwqSMdrp',
        '1rgwNc9QDCQD5ElXaZclwMWDTydlKP206',
        '1YixlUGrAl9E7cGkRB9iA4hNsFusXILr7',
        '1D849RStXgB8mX_EjKdJ7_hI6vLQEZLtu',
        '1azOXv-99gzQ-63hCNv_m0g-gx9W7EFE0',
        '1gJ4FNXm6ezlKWC1y47p8yBYvHusH7P-i',
        '1xhhOgdbvyc4cnZYRl9-h2Q95qe_Gi-iQ',
        '1c489EkkoHcg0dDCn-Lp6B6Kc7VyTv4xl',
        '1X-MmUbYZ1TYA8wIZ4kVFp_6zEpV6YZH7',
        '1D2yHy83bPgIHGF_ZV9EwTfCLh8xbm4rc',
        '1Es8HRvbQFf_RYI6EaBa_us7Jp2pRjg4X',
        '1RvsI-sK7zhfXehcw2l2gK--scqWQzfyd',
        '1JhQQUULJE5oGMwKupGeO4eie3hYOkG19',
        '1gNvR1v7iD1GVyfRhsVm8q7-SvH0-xXZ4',
        '1LSNaxp34x_l6IhSmRPjwYqTzwXvouagL',
        '1nIVA113sZ9UkK3YMs1SmMLi5nq1iGUHL',
        '1d5UVmKRpdxkS1EQvRV3TLh7_BUYqd0lY',
        '1OEkv-AWpQwpIFjvWa97DVqwFPPHjGhZs',
      ],
    },
  }),
  methods: {
    fotos(nome) {
      return this.ids[nome].map(
        (id) => `https://drive.google.com/uc?export=view&id=${id}`
      )
    },
    tamanhoImagem() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 300
        case 'sm':
          return 300
        case 'md':
          return 500
        case 'lg':
          return 500
      }
      return 500
    },
  },
}
</script>

<style scoped lang="scss">
.socialMedia {
  list-style-type: none;
  width: 100%;
  padding-top: 3em;
  flex-wrap: wrap;
  .nome {
    margin-top: 10px;
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
.comissao {
  max-width: 900px;
  justify-content: center;
  text-align: center;
}
.apresentacao {
  width: 100%;
  text-align: center;
  flex-direction: column;
  align-items: center;
}
.titulo {
  padding: 1em;
}
.membros-comissao > * {
  margin: 2em;
}
.descricao-comissao {
  max-width: 800px;
}
</style>
