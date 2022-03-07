<template>
  <v-row xs-12>
    <v-col>
      <PageBar background-colored>
        <template #left>
          <div class="carousel">
            <ImagesCarrossel
              :largura="570"
              :altura="360"
              image-path="atletica"
              image-name="atletica"
              number-of-images="4"
              extension="jpg"
              border
              border-color="#5c452d"
              border-radius="10"
            />
          </div>
        </template>
        <template #right>
          <h1 class="titulo txtLightGreen">
            Associação Atlética Acadêmica da Matemática
          </h1>
          <p class="white--text descricao">
            A Associação Atlética Acadêmica da Matemática é uma instituição
            gerenciada por um grupo de alunos do IME que cuidam da organização
            de todas as modalidades esportivas, campeonatos e inters. Além
            disso, realizam festas e eventos de integração e também vendem
            produtos personalizados do instituto. Se você tem interesse em
            participar de alguma modalidade ou tem alguma dúvida é só entrar em
            contato pelas redes sociais.
          </p>
          <p class="descricao">
            <v-btn
              color="#C5EE7D"
              outlined
              href="https://www.facebook.com/aaamat.ime"
              ><v-icon color="#c5ee7d" size="30px">mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              color="#C5EE7D"
              outlined
              href="https://www.instagram.com/aaamat_imeusp"
              ><v-icon color="#c5ee7d" size="30px">mdi-instagram</v-icon></v-btn
            >
          </p>
        </template>
      </PageBar>
      <PageBar>
        <template #left>
          <h1 class="titulo txtBrown">
            O Instituto de Matemática e Estatística da USP
          </h1>
          <p class="black--text descricao">
            O Instituto de Matemática e Estatística é uma unidade de ensino,
            pesquisa e extensão da Universidade de São Paulo. Possui cursos de
            graduação e pós-graduação nas áreas de matemática, matemática
            aplicada, estatística e ciência da computação. Além disso, com corpo
            docente e discente qualificado, realiza pesquisas científicas em
            suas áreas-chave e áreas relacionadas, como bioinformática,
            neuromatemática e educação em matemática.
          </p>
          <p class="text-md-left text-center">
            <v-btn
              color="#5C452D"
              href="http://ime.usp.br"
              target="_blank"
              outlined
            >
              Visite o site do IME
            </v-btn>
          </p>
        </template>
        <template #right>
          <div class="carousel">
            <ImagesCarrossel
              :largura="570"
              :altura="360"
              image-path="ime"
              image-name="ime"
              number-of-images="8"
              extension="jpg"
              border
              border-color="#E1DFB6"
              border-radius="10"
            />
          </div>
        </template>
      </PageBar>
      <PageBar background-colored>
        <template #left>
          <ImagesCarrossel
            :largura="570"
            :altura="370"
            image-path="mapinha"
            image-name="mapinha"
            number-of-images="9"
            extension="png"
            border
            border-color="#5c452d"
            border-radius="10"
          />
        </template>
        <template #right>
          <h1 class="titulo txtLightGreen">O Mapinha do IME</h1>
          <p class="descricao white--text">
            Bem-vindes ao Mapinha do IME! Como vocês ainda não conhecem o IME
            muito bem, fizemos um Mapinha no estilo do Pokémon para conhecerem
            melhor o instituto que vão aprender a amar! Além de poderem andar
            livremente por (quase) todo o IME, poderão conversar com várias
            pessoas da comunidade IMEana no caminho que vão te apresentar como é
            a vida de um IMEano. Esperamos que aproveitem, explorem bastante e
            conheçam todos os cantos do Mapinha, porque nós deixamos vários
            segredinhos espalhados!
          </p>
          <p class="font-weight-bold descricao white--text">
            Para executar o mapinha vocês devem seguir os seguintes passos:
          </p>
          <ol class="descricao white--text">
            <li>Extraia o arquivo zip chamado "mapinha.zip"</li>
            <li>Execute o arquivo "Game.exe" dentro da pasta extraida</li>
          </ol>
          <p class="descricao">
            <v-btn
              color="#C5EE7D"
              class="mt-5"
              href="/mapinha.zip"
              download
              outlined
              >Conheça o mapinha!
            </v-btn>
          </p>
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
.titulo {
  font-family: Marmelad;
  text-align: left;
  font-size: 22px;
  margin: 50px 0px;
}
.descricao {
  font-family: Marmelad;
  text-align: left;
}
.carousel {
  margin-bottom: -150px;
}
</style>
