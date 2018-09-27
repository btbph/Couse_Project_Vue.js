<template>
  <v-flex xs4>
    <h1>Exchange</h1>
    <v-autocomplete
      v-model="currentStock"
      :items="stocks"
      :loading="isLoading"
    />
  </v-flex>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      currentStock: 0
    }
  },
  methods: {
    ...mapActions({ setStock: 'setCurrentStock' })
  },
  computed: {
    ...mapGetters({
      stocks: 'getAllStocks',
      isLoading: 'getIsLoadingPairs'
    }),
  },
  watch: {
    currentStock(value) {
      this.setStock({ value })
    }
  }
}
</script>
