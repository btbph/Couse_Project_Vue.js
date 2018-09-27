export const mutations = {
  setAllStocks(state, payload) {
    state.allStocks = payload
  },
  setCurrentStock(state, payload) {
    state.currentStock = payload
  },
  setCurrentPair(state, payload) {
    state.currentPair = payload
  } ,

  setIsLoadingPairsPending(state) {
    state.isPairsLoading = true
  },
  setIsLoadingPairsResolve(state) {
    state.isPairsLoading = false
  },
  setIsLoadingPairsReject(state) {
    state.isPairsLoading = false
  },

}
