<template>
  <v-flex xs4>
    <h1>Hello Exchange</h1>
    <v-autocomplete
      v-model="currentStock"
      :items="stocks"
    />

  </v-flex>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      currentStock: ''
    }
  },
  methods: {
    ...mapActions({ setStock: 'setCurrentStock' })
  },
  computed: {
    ...mapGetters({ stocks: 'getAllStocks'})
  },
  watch: {
    currentStock(value) {
      this.setStock({ value })
    }
  }
}
</script>

<style scoped>

</style>