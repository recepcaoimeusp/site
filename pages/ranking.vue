<template>
  <div>
    <PageBar single-col align-row="center" align-col="center">
      <template #center>
        <v-container>
          <h1 class="txtBlack main-title mb-6">Ranking</h1>
          <div class="d-flex flex-column align-stretch align-sm-center">
            <div class="d-flex flex-column flex-sm-row align-sm-end">
              <div
                class="d-flex flex-column-reverse flex-sm-column justify-space-between p2 pa-6 my-2 my-sm-0 mx-sm-2"
              >
                <template v-if="loading">
                  <v-progress-circular
                    indeterminate
                    color="white"
                  ></v-progress-circular>
                </template>
                <template v-else>
                  <h2 class="team-title white--text">
                    {{ positions[1].team }}
                  </h2>
                  <h1 class="position-title white--text">
                    {{ positions[1].rank }}
                  </h1>
                </template>
              </div>
              <div
                class="d-flex flex-column-reverse order-first order-sm-0 flex-sm-column justify-space-between p1 pa-6 my-2 my-sm-0 mx-sm-2"
              >
                <template v-if="loading">
                  <v-progress-circular
                    indeterminate
                    color="white"
                  ></v-progress-circular>
                </template>
                <template v-else>
                  <h2 class="team-title white--text">
                    {{ positions[0].team }}
                  </h2>
                  <h1 class="position-title white--text">
                    {{ positions[0].rank }}
                  </h1>
                </template>
              </div>
              <div
                class="d-flex flex-column-reverse flex-sm-column justify-space-between p3 pa-6 my-2 my-sm-0 mx-sm-2"
              >
                <template v-if="loading">
                  <v-progress-circular
                    indeterminate
                    color="white"
                  ></v-progress-circular>
                </template>
                <template v-else>
                  <h2 class="team-title white--text">
                    {{ positions[2].team }}
                  </h2>
                  <h1 class="position-title white--text">
                    {{ positions[2].rank }}
                  </h1>
                </template>
              </div>
            </div>

            <div class="d-flex flex-column mt-4">
              <div class="d-flex align-center">
                <template v-if="loading">
                  <v-progress-circular
                    indeterminate
                    color="white"
                  ></v-progress-circular>
                </template>
                <template v-else>
                  <div
                    class="ranking-pos d-flex justify-center align-center mr-6 my-2"
                  >
                    <h1 class="white--text">{{ positions[3].rank }}</h1>
                  </div>
                  <h2 class="team-title txtBlack">
                    {{ positions[3].team }}
                  </h2>
                </template>
              </div>
              <div class="d-flex align-center">
                <template v-if="loading">
                  <v-progress-circular
                    indeterminate
                    color="white"
                  ></v-progress-circular>
                </template>
                <template v-else>
                  <div
                    class="ranking-pos d-flex justify-center align-center mr-6 my-2"
                  >
                    <h1 class="white--text">{{ positions[4].rank }}</h1>
                  </div>
                  <h2 class="team-title txtBlack">
                    {{ positions[4].team }}
                  </h2>
                </template>
              </div>
            </div>
          </div>
        </v-container>
      </template>
    </PageBar>
  </div>
</template>

<script>
import PageBar from '~/components/PageBar.vue'

export default {
  components: {
    PageBar,
  },
  data: () => ({
    positions: [],
    loading: true,
  }),
  async beforeMount() {
    const sheetID = '1y5c0ChKvo-h_wN7-l1ifoBhdTrT5JLa2iybHmecMaec'
    const sheetName = 'Ranking'
    const sheetsAPIKey = process.env.sheetsAPIKey
    try {
      const resp = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/'${sheetName}'?key=${sheetsAPIKey}`
      )

      const { values } = await resp.json()
      this.positions = values.slice(1).reduce((acc, event) => {
        const rank = parseInt(event[0].replace(/\D/g, ''), 10)
        const team = event[1]

        acc.push({
          rank,
          team,
        })
        return acc
      }, [])
    } catch (error) {
      console.log('error occurred while fetching...')
      console.log(error)
    } finally {
      this.loading = false
    }
  },
}
</script>

<style scoped lang="scss">
.p3 {
  height: 150px;
  min-width: 180px;
  font-size: 1rem;
  background-color: rgba(147, 4, 2, 0.8);
}

.p1 {
  height: 250px;
  min-width: 180px;
  font-size: 1.5rem;
  background-color: rgba(147, 4, 2, 1);
}

.p2 {
  height: 200px;
  min-width: 180px;
  font-size: 1.25rem;
  background-color: rgba(147, 4, 2, 0.9);
}

.team-title {
  font-family: 'Gang of Three';
}

.position-title {
  font-family: 'Gang of Three';
}

.ranking-pos {
  height: 50px;
  width: 50px;
  font-size: 1rem;
  background-color: rgba(147, 4, 2, 0.75);
  font-family: 'Gang of Three';
}

.main-title {
  font-family: 'Gang of Three';
}
</style>
