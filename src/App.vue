<template>
  <v-app>
    <v-container fluid>
      <v-layout justify-space-between wrap>
        <TheExchange/>
        <ThePair/>
        <TheTrades/>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import TheExchange from '@/components/TheExchange'
import ThePair from '@/components/ThePair'
import TheTrades from '@/components/TheTrades'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    TheExchange,
    ThePair,
    TheTrades
  },
  methods: {
    ...mapActions({ setStocks: 'setAllStocks' })
  },
  created() {
    this.setStocks()
  }
}
</script>
