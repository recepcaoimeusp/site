<template>
  <v-row xs-12 justify="center" align="center" class="conteiner-pagina">
    <v-col class="conteudo">
      <v-row justify="end" class="mb-0 py-8 background-azul">
        <v-col cols="12" class="d-flex justify-center align-center">
          <div class="apresentacao">
            <Logo class="mr-sm-5 mb-5 mb-sm-0" />
            <h2 class="titulo">O que é a</h2>
            <p>
              Além de planejar como será a semana de recepção (a programação de 
              atividades na semana, a interação com seus colegas de turma, A FAMOSA 
              MATRÍCULA PRESENCIAL e o maravilhoso Kit Bixe), vamos apresentar cada 
              detalhezinho dessa maravilhosa universidade, desde como chegar até lá, 
              até os truques de como sobreviver às disciplinas e ao PERFEITO Portal 
              do Aluno, o Júpiter/Olimpo (contém ironia na palavra “perfeito” rs), 
              pois sabemos que a vida acadêmica é um mundo totalmente diferente e 
              vamos ajudar vocês, fazendo com que o primeiro ano na USP seja inesquecível! 
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-start justify-center justify-md-start align-center"
        >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center">
        </v-col>
        <div class="apresentacao">
            <h2 class="titulo">Conheça a Comissão!</h2>
          </div>
        <v-row class="d-flex justify-center membros-comissao">
            <AppCarrossel :altura="tamanhoImagem()" :largura="tamanhoImagem()" :links="fotos('Azul')" />
            <AppCarrossel :altura="tamanhoImagem()" :largura="tamanhoImagem()" :links="fotos('Vermelho')" />
            <AppCarrossel :altura="tamanhoImagem()" :largura="tamanhoImagem()" :links="fotos('Amarelo')"/>
        </v-row>
      </v-row>
      <v-row class="background-azul">
          <span class="text-center justify-center">Quer conhecer mais?</span>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import PageBar from '~/components/PageBar.vue' 
import Logo from '~/components/comissao_logo.vue'
import AppCarrossel from '~/components/AppCarrossel'

export default {
  components: {
   PageBar, 
   Logo,
   AppCarrossel
  },

  data: () => ({
    ids: {
      Azul: [
        '1zRkbETa8gD-Rq4ScTzp6-nlONzmarBVX',
        '1_cq-QiaPKKvqMNYzE6S-qNy5aQyq7W_0',
        '1GdHc0Cz-ajkAkFFMy5XouU8mIlN6-4E7',
        '1R1C1VTGI4H8PSdmzj7k5tU7mR36hjgAG',
        '1Qx0tXrfzzekto17Hby35BiLNvK_K3UPv',
        '1UW9LxTf0bY0WHw1iteKPOnh9QIQkO0bw',
        '1ByMSa9gXP3RgZX7F_fwYLTY9U1VKY8JU',
        '1pS22mma2JYe08TxE4TGKOO8RMg35eOL1',
        '1mtsHz9EzP5YlYaCIPkeD1Cmq9s7dTb4M'
        
      ],
      Vermelho: [
        '1Ig8tXY44_SqFA_9Sv6mE-ZgawOTd44Ts',
        '1IP8bQhVnKJ-hTta-vdRzcAo3L5-qog6z',
        '113PQPrM69645ZDOXDTL3tLg0I1oWRXlx',
        '1K0V6h7v-XYS808QzgE1a7zqPtWYRlA1g',
        '1dNZ8A26yygsJA9UDFSXFCfxybGoNBJoB',
        '1mdcR7IBi3a7lUmqbRh1x9CpQBdySDnti',
        '1iXiLHTQewVPILxdwaXfPMfDf99ln_0hN',
        '1-S7d7H6q6Ih-y4fNrn029FP16ANqnSnz'
        
      ],
      Amarelo: [
        '1liWZDDaYSLz1BPLcsEKIs8QEAbGdSqHl',
        '1FRDj0IwidBPuLhmc73n-lL2aln4_wSQw',
        '17BOiooD2RtE8dpGj1FGWDwaFTX0KRZ6s',
        '1-QxvHhc_HjNkeCQzbo-iIQc5NM5po02e',
        '1HcLW7DOyAyyAoad1GuYNMHjLmJgj7jAQ',
        '1Svt8k83yviD2btKmoh6E0mSRNE-qWNLa',
        '15-2Kxj92cIagdUHIZx2PhwCJQ-1xdaia',
        '17BfAw8p4dViQVjat1zu0Sz0sVQVp0ARo'
      ],
    },
  }),
  methods: {
    fotos(nome) {
      return this.ids[nome].map(
        (id) => `https://drive.google.com/uc?export=view&id=${id}`
      )
    },
    tamanhoImagem(){
      switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 300
          case 'sm': return 300
          case 'md': return 500
          case 'lg': return 500
        }
        return 500;
    }
  },
}
</script>

<style scoped lang="scss">
  .apresentacao{
    width: 100%;
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
  .titulo{
    padding:1em;
  }
  .membros-comissao > * {
    margin:2em;
  }
</style>
