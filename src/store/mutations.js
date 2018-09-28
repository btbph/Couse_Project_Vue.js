export const mutations = {
  setAllStocks(state, payload) {
    state.allStocks = payload
  },
  setCurrentStock(state, payload) {
    state.currentStock = payload
  },
  setCurrentPair(state, payload) {
    state.currentPair = payload
  },
  setCurrentTrades(state, payload) {
    state.currentTrades = payload
  },

  setIsLoadingPairsPending(state) {
    state.isPairsLoading = true
  },
  setIsLoadingPairsResolve(state) {
    state.isPairsLoading = false
  },
  setIsLoadingPairsReject(state) {
    state.isTradesLoading = false
  },

  setIsLoadingTradesPending(state) {
    state.isTradesLoading = true
  },
  setIsLoadingTradesResolve(state) {
    state.isTradesLoading = false
  },
  setIsLoadingTradesReject(state) {
    state.isTradesLoading = false
  },
}
