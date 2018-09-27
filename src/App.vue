<template>
  <v-app>
    <v-container>
      <v-layout justify-space-between wrap>
        <TheExchange/>
        <ThePair/>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import TheExchange from '@/components/TheExchange'
import ThePair from '@/components/ThePair'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    TheExchange,
    ThePair
  },
  methods: {
    ...mapActions({ setStocks: 'setAllStocks' })
  },
  created() {
    this.setStocks()
  }
}
</script>
