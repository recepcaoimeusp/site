<template>
  <div>
    <PageBar align-row="center" align-col="start">
      <template #left>
        <div
          class="d-flex flex-column align-center justify-center mr-md-10 mr-lg-0"
        >
          <v-img
            class="kitImg"
            src="/kit.png"
            alt="Kit Bixe"
            :max-width="kitSize"
          >
            <div
              class="pa-5 rounded-circle d-flex flex-column align-center justify-center priceKit txtWhite bgRed"
            >
              <span class="bigValue"
                >R$ <span class="number">{{ prices.kit.regular }}</span></span
              >
              <span class="text-center"
                >ou R$
                <span class="number">{{ prices.kit.creditCard }} </span> via
                cartão de crédito à vista</span
              >
            </div>
          </v-img>
        </div>
      </template>
      <template #right>
        <div class="d-flex flex-column align-center align-md-start py-4">
          <h1 class="mb-4 mx-10 mx-md-0 txtBlack">Kit Bixe</h1>
          <div class="mx-10 mx-md-0 txtBlack desc">
            <p>
              Estar no primeiro semestre da faculdade é um momento repleto de
              novas experiências e desafios. E para te ajudar a aproveitar ao
              máximo essa fase, apresentamos o nosso incrível
              <strong>Kit Bixe</strong>: Um conjunto elaborado com tudo o que um
              estudante precisa para iniciar essa etapa. Nossos kits oferecem
              itens-chave de materiais de estudo e outros produtos gerais que
              são úteis para o dia a dia, tais como:
            </p>
            <ul class="mb-2">
              <li>Caderno</li>
              <li>Estojo</li>
              <li>Camiseta</li>
              <li>Caneca</li>
              <li>Sacochila</li>
              <li>Chaveiro</li>
              <li>Cordão para cartão de ônibus</li>
            </ul>
            <p>
              O Kit bixe pode ser encomendado previamente, utilizando o botão
              abaixo, ou no estande presencial da Comissão durante a semana de
              recepção, enquanto durarem os estoques! Caso você não tenha
              interesse em adquirir todos os itens em conjunto, também é
              possível adquiri-los separadamente ao longo da semana de recepção.
            </p>
            <p>
              Além disso, temos a iniciativa do Kit bixe acessível — uma forma
              gratuita de adquirir o produto, destinado exclusivamente aos
              ingressantes de baixa renda, que pode ser solicitado de acordo com
              um comprovante de condição socioeconômica. Esses kits são
              limitados e distribuídos de acordo com a ordem de solicitação.
            </p>
          </div>
          <div
            class="d-flex flex-column flex-sm-row align-center mx-10 buttons mx-md-0 mt-6"
          >
            <Button :link="links.formsKit" target="_blank"
              >Encomende seu kit</Button
            >
            <Button :link="links.formsAffordableKit" target="_blank"
              >Solicite seu kit acessível</Button
            >
          </div>
        </div>
      </template>
    </PageBar>
    <PageBar align-row="center" align-col="start">
      <template #left>
        <div class="d-flex justify-center">
          <v-img
            class="kitImg"
            src="/bottons.png"
            alt="Bottons"
            :max-width="bottonsSize"
          >
            <div
              class="pa-5 rounded-circle d-flex flex-column align-center justify-center priceBottons txtWhite bgRed"
            >
              <span class="bigValue"
                >R$ <span class="number">{{ prices.bottons }}</span></span
              >
              <span class="text-center">por unidade</span>
            </div>
          </v-img>
        </div>
      </template>
      <template #right>
        <div class="d-flex flex-column align-center align-md-start py-4">
          <h1 class="mb-4 mx-10 mx-md-0 txtBlack">Bottons</h1>
          <div class="mx-10 mx-md-0 txtBlack desc">
            <p>
              Agora que você é IMEane, é hora de mostrar para o mundo! Com
              nossos bottons, você pode personalizar mochilas, jaquetas e
              camisetas, além de colecioná-los para usar de acordo com o seu
              humor do dia. São 8 modelos diferentes, cada um com uma estampa
              exclusiva, que você pode adquirir separadamente ou em conjunto,
              apenas durante a semana de recepção, no estande da Comissão. As
              unidades são limitadas, então garanta o seu o quanto antes!
            </p>
          </div>
        </div>
      </template>
    </PageBar>
  </div>
</template>

<script>
import PageBar from '~/components/PageBar.vue'
import Button from '~/components/Button.vue'

export default {
  components: {
    PageBar,
    Button,
  },
  data: () => ({
    links: {
      formsKit: 'https://forms.gle/cgSf7xELMdwsCWHW8',
      formsAffordableKit: 'https://forms.gle/eJXSfox73TvWxH1o6',
    },
    prices: {
      kit: {
        regular: 105,
        creditCard: 111,
      },
      bottons: 2,
    },
  }),
  computed: {
    kitSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 350
        case 'sm':
          return 450
        default:
          return 500
      }
    },
    bottonsSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 200
        case 'sm':
          return 250
        default:
          return 300
      }
    },
  },
}
</script>

<style scoped lang="scss">
h1 {
  font-family: Gang of Three;
}

.desc {
  font-family: Fuji;
  font-weight: 500;
}

.buttons {
  gap: 10px;
}

.buy-button {
  font-family: Fuji;
}

.kitImg {
  position: relative;
}

.number {
  font-family: Gang of Three !important;
}

.priceKit {
  width: 150px;
  height: 150px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-family: Fuji;
  font-size: 12px;

  .bigValue {
    font-size: 28px;
  }
}

.priceBottons {
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-family: Fuji;
  font-size: 12px;

  .bigValue {
    font-size: 24px;
  }
}
</style>
