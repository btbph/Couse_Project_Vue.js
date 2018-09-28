<template>
  <div>
    <h1>Trades</h1>
    <v-data-table
      :headers="headers"
    >
    </v-data-table>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        idInterval: 0,
        headers: [
          {
            text: 'Size',
            value: 'size',
            sortable: false,
            align: 'left'
          },
          {
            text: 'Price',
            value: 'price',
            sortable: false,
            align: 'left'
          },
          {
            text: 'Time',
            value: 'time',
            sortable: false,
            align: 'left'
          }
        ]
      }
    },
    computed: {
      ...mapGetters({
        pair: 'getSelectedPair',
        stockId: 'getCurrentStockId',
        trades: 'getCurrentTrades'
      })
    },
    methods: {
      ...mapActions([ 'updateTrades' ])
    },
    watch: {
      pair() {
        this.idInterval ? clearInterval(this.idInterval) : null
        this.idInterval = setInterval(this.updateTrades, 2000)
      },
      stockId() {
        clearInterval(this.idInterval)
      }
    }
  }
</script>

<style scoped>

</style>