<template>
  <v-row>
    <v-col>
      <PageBar background-colored single-col>
        <template #center>
          <v-card flat style="background: none">
            <v-card-title>
              <Logo class="mx-auto" />
            </v-card-title>
            <v-card-text>
              <h2 class="text--primary titulo">O que é a Comissão?</h2>
              <span class="text--primary text-center my-auto">
                <p>
                  A Comissão de Recepção é um grupo de veteranes do IME-USP
                  responsável por organizar a recepção e auxiliar os
                  ingressantes em seus primeiros momentos IMEanes. Apresenta
                  cada detalhezinho dessa maravilhosa universidade, desde como
                  chegar lá, até os truques de como sobreviver às disciplinas.
                  Sabemos que esses primeiros momentos no IME-USP podem ser um
                  pouco difíceis, mas estamos aqui para ajudar e fazer com que
                  esse primeiro ano na USP seja inesquecível!
                </p>
                <p>
                  Também organiza a super Semana de Recepção, repleta de
                  atividades pensadas e preparadas com muito carinho para
                  integrar os bixes a essa nova fase universitária. Incluímos
                  atividades desde palestras informativas (como a palestra do
                  Diretor) até atividades interativas para conhecer os colegas
                  de turma, afinal, é muito importante aproveitar essa jornada e
                  fazer novas amizades!
                </p>
                <p>
                  As atividades da Comissão de Recepção não se limitam apenas ao
                  planejamento da Semana de Recepção. Também organizamos o
                  Kit-Bixe (um kit completo para você mostrar por aí que passou
                  no IME-USP), o Guia do Bixe (repleto de informações que serão
                  muito úteis para a sua graduação inteira), além de outros
                  eventos de integração e plantões de dúvidas. Antes e depois da
                  Semana de Recepção, estamos sempre à disposição para tirar
                  dúvidas e auxiliar os ingressantes nesses primeiros momentos
                  IMEanes!
                </p>
              </span>
            </v-card-text>
          </v-card>
          <v-card-actions>
            <v-container>
              <v-icon
                class="mx-5"
                tag="a"
                href="https://www.facebook.com/recepcaoimeusp"
                target="_blank"
                color="black"
                size="55px"
                >mdi-facebook</v-icon
              >

              <v-icon
                class="mx-5"
                tag="a"
                href="https://www.instagram.com/recepcaoimeusp/"
                target="_blank"
                color="black"
                size="55px"
                >mdi-instagram</v-icon
              >
              <v-icon
                class="mx-5"
                tag="a"
                href="https://discord.com/invite/P6Zn86nUve"
                target="_blank"
                color="black"
                size="55px"
                >mdi-discord</v-icon
              >
            </v-container>
          </v-card-actions>
        </template>
      </PageBar>
      <v-row>
        <v-col align="center">
          <h2 class="titulo">Conheça a Comissão!</h2>
          <v-row justify="center">
            <v-col cols="12" lg="4" md="6" sm="12">
              <ImagesCarrossel
                :altura="tamanhoImagem()"
                :largura="tamanhoImagem()"
                image-path="comissao/azul"
                image-name="comissao"
                number-of-images="28"
                extension="jpg"
                :intervalo="12000"
              />
            </v-col>
            <v-col cols="12" lg="4" md="6" sm="12">
              <ImagesCarrossel
                :altura="tamanhoImagem()"
                :largura="tamanhoImagem()"
                image-path="comissao/vermelho"
                image-name="comissao"
                number-of-images="9"
                extension="jpg"
                :intervalo="12000"
              />
            </v-col>
            <v-col cols="12" lg="4" md="6" sm="12">
              <ImagesCarrossel
                :altura="tamanhoImagem()"
                :largura="tamanhoImagem()"
                image-path="comissao/amarelo"
                image-name="comissao"
                number-of-images="19"
                extension="jpg"
                :intervalo="12000"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/LogoComissao.vue'
import ImagesCarrossel from '~/components/ImagesCarrossel'

export default {
  components: {
    Logo,
    ImagesCarrossel,
  },

  methods: {
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
.comissao {
  max-width: 900px;
  text-align: center;
  margin: 0 auto;
}
.titulo {
  padding: 1em;
}
</style>
