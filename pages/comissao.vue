<template>
  <v-row>
    <v-col>
      <v-row class="mb-0 py-8 background-azul">
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
          <ImagesCarrossel
            :altura="tamanhoImagem()"
            :largura="tamanhoImagem()"
            :links="fotos('Azul')"
            :intervalo="12000"
          />
          <ImagesCarrossel
            :altura="tamanhoImagem()"
            :largura="tamanhoImagem()"
            :links="fotos('Vermelho')"
            :intervalo="12000"
          />
          <ImagesCarrossel
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
import ImagesCarrossel from '~/components/ImagesCarrossel'

export default {
  components: {
    Logo,
    ImagesCarrossel,
  },

  data: () => ({
    ids: {
      Azul: [
        'comissao/comissao1.jpg',
        'comissao/comissao2.jpg',
        'comissao/comissao3.jpg',
        'comissao/comissao4.jpg',
        'comissao/comissao5.jpg',
        'comissao/comissao6.jpg',
        'comissao/comissao7.jpg',
        'comissao/comissao8.jpg',
        'comissao/comissao9.jpg',
        'comissao/comissao28.jpg',
        'comissao/comissao29.jpg',
        'comissao/comissao30.jpg',
        'comissao/comissao31.jpg',
        'comissao/comissao32.jpg',
        'comissao/comissao33.jpg',
        'comissao/comissao34.jpg',
        'comissao/comissao35.jpg',
        'comissao/comissao36.jpg',
        'comissao/comissao47.jpg',
        'comissao/comissao48.jpg',
        'comissao/comissao49.jpg',
        'comissao/comissao50.jpg',
        'comissao/comissao51.jpg',
        'comissao/comissao52.jpg',
        'comissao/comissao53.jpg',
        'comissao/comissao54.jpg',
        'comissao/comissao55.jpg',
        'comissao/comissao56.jpg',
      ],
      Vermelho: [
        'comissao/comissao10.jpg',
        'comissao/comissao11.jpg',
        'comissao/comissao12.jpg',
        'comissao/comissao13.jpg',
        'comissao/comissao14.jpg',
        'comissao/comissao15.jpg',
        'comissao/comissao16.jpg',
        'comissao/comissao17.jpg',
        'comissao/comissao18.jpg',
      ],
      Amarelo: [
        'comissao/comissao19.jpg',
        'comissao/comissao20.jpg',
        'comissao/comissao21.jpg',
        'comissao/comissao22.jpg',
        'comissao/comissao23.jpg',
        'comissao/comissao24.jpg',
        'comissao/comissao25.jpg',
        'comissao/comissao26.jpg',
        'comissao/comissao27.jpg',
        'comissao/comissao37.jpg',
        'comissao/comissao38.jpg',
        'comissao/comissao39.jpg',
        'comissao/comissao40.jpg',
        'comissao/comissao41.jpg',
        'comissao/comissao42.jpg',
        'comissao/comissao43.jpg',
        'comissao/comissao44.jpg',
        'comissao/comissao45.jpg',
        'comissao/comissao46.jpg',
      ],
    },
  }),
  methods: {
    fotos(nome) {
      return this.ids[nome].map((id) => require(`../assets/images/${id}`))
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
