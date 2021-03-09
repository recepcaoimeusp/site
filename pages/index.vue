<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <Logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Comissão de Recepção IME-USP
          <br />
          Em Construção
        </v-card-title>
        <v-card-text>
          <v-timeline>
            <v-timeline-item color="red" icon="mdi-battery-charging-60">
              Criação do Site
            </v-timeline-item>
            <v-timeline-item class="text-right" color="yellow" icon="mdi-run">
              Semana de Recepção
            </v-timeline-item>
            <v-timeline-item color="red" icon="mdi-bag-personal">
              Ano letivo!
            </v-timeline-item>
          </v-timeline>
          <hr class="my-3" />
          <br />
          <v-row justify="space-around">
            <a href="https://www.facebook.com/recepcaoimeusp" target="_blanket">
              <v-icon size="50px">mdi-facebook</v-icon>
            </a>
            <a
              href="https://www.instagram.com/recepcaoimeusp/"
              target="_blanket"
            >
              <v-icon size="50px">mdi-instagram</v-icon>
            </a>
          </v-row>
          <br />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/comissao_logo.vue'

export default {
  components: {
    Logo,
  },
}
</script>
