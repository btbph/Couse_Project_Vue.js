<template>
  <div>
    <h1>Pair</h1>
    <v-autocomplete
      v-model="currentPair"
      :disabled="disableInput"
      :items="pairs"
      :loading="isLoadingTrades"
    />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        currentPair: ''
      }
    },
    computed: {
      ...mapGetters({
        pairs: 'getCurrentPairs',
        isLoadingTrades: 'getIsLoadingTrades',
        isLoadingPairs: 'getIsLoadingPairs'
      }),
      disableInput() {
        return this.isLoadingPairs || this.pairs.length < 1
      }
    },
    methods: {
      ...mapActions({ setPair: 'setCurrentPair' })
    },
    watch: {
      currentPair(pair) {
        this.setPair({ pair})
      },
    }
  }
</script>
