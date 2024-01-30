<template>
  <v-row xs-12>
    <v-col>
      <PageBar align-row="center" align-col="start">
        <template #left>
          <div class="d-flex justify-center">
            <img src="/kit.png" alt="Kit Bixe" :width="kitSize" />
          </div>
        </template>
        <template #right>
          <div class="d-flex flex-column align-center align-md-start">
            <h1 class="mb-4 mx-10 mx-md-0">Kit Bixe</h1>
            <div class="mx-10 mx-md-0">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, quae voluptates
                voluptatibus quod voluptatem quos doloribus quas doloremque.
                Quisquam voluptatum, quibusdam, quia, quae voluptates
                voluptatibus quod voluptatem quos doloribus quas doloremque.
                Quisquam voluptatum, quibusdam, quia, quae voluptates
                voluptatibus quod voluptatem quos doloribus quas doloremque.
                Quisquam voluptatum, quibusdam, quia, quae voluptates
              </p>
            </div>
            <div
              class="d-flex flex-column flex-sm-row align-center mx-10 buttons mx-md-0 mt-6"
            >
              <v-btn
                color="black"
                class="buy-button"
                dark
                rounded="xl"
                depressed
                >Encomende seu kit</v-btn
              >
              <v-btn
                color="black"
                class="buy-button"
                dark
                rounded="xl"
                depressed
                >Solicite seu kit acessível</v-btn
              >
            </div>
          </div>
        </template>
      </PageBar>
      <PageBar align-row="center" align-col="start">
        <template #left>
          <div class="d-flex justify-center">
            <img src="/bottons.png" alt="Kit Bixe" :width="bottonsSize" />
          </div>
        </template>
        <template #right>
          <div class="d-flex flex-column align-center align-md-start">
            <h1 class="mb-4 mx-10 mx-md-0">Bottons</h1>
            <div class="mx-10 mx-md-0">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, quae voluptates
                voluptatibus quod voluptatem quos doloribus quas doloremque.
                Quisquam voluptatum, quibusdam, quia, quae voluptates
                voluptatibus quod voluptatem quos doloribus quas doloremque.
                Quisquam voluptatum, quibusdam, quia, quae voluptates
                voluptatibus quod voluptatem quos doloribus quas doloremque.
                Quisquam voluptatum, quibusdam, quia, quae voluptates
              </p>
            </div>
            <div class="mx-10 mx-md-0 mt-6">
              <v-btn
                color="black"
                class="buy-button"
                dark
                rounded="xl"
                depressed
                >Encomende seus bottons</v-btn
              >
            </div>
          </div>
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
  computed: {
    kitSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 300
        case 'sm':
          return 400
        default:
          return 450
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

p {
  font-family: Fuji;
  font-weight: 500;
}

.buttons {
  gap: 10px;
}

.buy-button {
  font-family: Fuji;
}
</style>
