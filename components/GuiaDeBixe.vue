<template>
  <div>
    <template v-if="active">
      <div class="d-flex flex-column align-center" :style="{ width: pdfWidth }">
        <embed src="/guia.pdf" :width="pdfWidth" :height="pdfHeight" />
        <div class="my-4">
          <a href="/guia.pdf" download="/guia.pdf">
            <Button>
              <v-icon class="mr-2">fa-solid fa-circle-down</v-icon>
              Baixe o Guia de Bixe!
            </Button>
          </a>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="d-flex flex-column align-center" :style="{ width: pdfWidth }">
        <v-icon :size="lockSize" class="text--disabled"
          >fa-solid fa-lock</v-icon
        >
        <h1 class="title mt-8 text-center text-h5 text-md-h4 text--disabled">
          O Guia de Bixe será disponibilizado em breve!
        </h1>
      </div>
    </template>
  </div>
</template>

<script>
import Button from '~/components/Button.vue'

export default {
  components: {
    Button,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    pdfWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '243px'
        case 'sm':
          return '362px'
        default:
          return '543px'
      }
    },
    pdfHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '316px'
        case 'sm':
          return '467.7px'
        default:
          return '701.6px'
      }
    },
    lockSize() {
      return this.$vuetify.breakpoint.mdAndDown ? 60 : 90
    },
  },
}
</script>

<style scoped>
.title {
  font-family: Gang of Three !important;
}
.downloadButton {
  font-size: 16px;
  letter-spacing: normal;
  font-family: Fuji;
  font-weight: 500;
  text-transform: none;
}
</style>
