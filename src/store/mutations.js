export const mutations = {
  setAllStocks(state, payload) {
    state.allStocks = payload
  },
  setCurrentStock: (state, payload) => {
    state.currentStock = payload
  }
}
