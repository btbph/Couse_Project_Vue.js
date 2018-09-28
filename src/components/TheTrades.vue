<template>
  <div>
    <h1>Trades</h1>
    <v-data-table
      :headers="headers"
      :items="trades"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.size }}</td>
        <td class="text-xs-right">{{ props.item.price }}</td>
        <td class="text-xs-right">{{ props.item.time }}</td>
        <td class="text-xs-right">{{ props.item.side }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  const PRICE_HEADER = 1

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
          },
          {
            text: 'Buy/Sell',
            value: 'side',
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

        const currencySymbol = this.pair.split('/')[1]
        this.headers[PRICE_HEADER].text = currencySymbol ? `Price(${currencySymbol})` : 'Price'
      },
      stockId() {
        clearInterval(this.idInterval)
      }
    }
  }
</script>

<style scoped>

</style>