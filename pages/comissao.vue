<template>
  <div>
    <PageBar border-bottom background-colored single-col>
      <template #center>
        <v-card flat style="background: none">
          <v-card-title class="py-10">
            <Logo
              alternative
              has-custom-height
              :custom-height="logoHeight"
              class="mx-auto"
            />
          </v-card-title>
          <v-card-text>
            <v-tooltip bottom lazy>
              <template #activator="{ on }">
                <h2 class="titulo" v-on="on">O que é a Comissão?</h2>
              </template>
              <span class="easter-egg">
                Para o cego, é a luz. <br />
                Para o faminto, é o pão. <br />
                Para o sedento, é a fonte de água. <br />
                Para o morto, é a vida. <br />
                Para o enfermo, é a cura. <br />
                Para o prisioneiro, é a liberdade. <br />
                Para o solitário, é o companheiro. <br />
                Para o viajante, é o caminho. <br />
                Para mim, é tudo.
              </span>
            </v-tooltip>
            <div class="descricao text-center my-auto txtGray">
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
            </div>
          </v-card-text>
        </v-card>
        <SocialMedia />
      </template>
    </PageBar>
    <v-row>
      <v-col align="center">
        <v-container>
          <h2 class="titulo txtBrown">Conheça a Comissão!</h2>
          <v-row justify="center">
            <v-col cols="12">
              <PolaroidCarousel :ano="2023" :numero="61" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SocialMedia from '~/components/SocialMedia.vue'
import Logo from '~/components/LogoComissao.vue'
import PageBar from '~/components/PageBar.vue'
import PolaroidCarousel from '~/components/PolaroidCarousel.vue'

export default {
  components: {
    Logo,
    PageBar,
    PolaroidCarousel,
    SocialMedia,
  },
  computed: {
    logoHeight() {
      return this.$vuetify.breakpoint.mdAndDown ? '200px' : '300px'
    },
  },
}
</script>

<style scoped lang="scss">
.comissao {
  max-width: 1000px;
  text-align: center;
  margin: 0 auto;
}
.titulo {
  padding: 1em;
  font-family: Gang of Three;
  font-size: 34px;
  line-height: normal !important;
}
.descricao {
  max-width: 600px;
  font-size: 16px;
  font-family: Fuji;
  font-weight: 500;
}
.easter-egg {
  font-family: Fuji;
}
</style>
