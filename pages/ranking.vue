<template>
  <div>
    <PageBar single-col align-row="center" align-col="center">
      <template #center>
        <div class="d-flex px-8 py-10 py-md-16 justify-center">
          {{ positions }}
        </div>
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
    }
  },
}
</script>

<style scoped lang="scss"></style>
