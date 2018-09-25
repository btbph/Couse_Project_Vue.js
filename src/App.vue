<template>
  <v-app>
    <v-container>
      <v-layout row wrap>
        <TheExchange/>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import TheExchange from '@/components/TheExchange'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    TheExchange
  },
  methods: {
    ...mapActions({ setStocks: 'setAllStocks' })
  },
  created() {
    this.setStocks()
  }
}
</script>
