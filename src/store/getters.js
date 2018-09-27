export const getters = {
  getAllStocks: state => {
    return state.allStocks
  },
  getCurrentPairs: state => {
    return state.currentStock.symbols || []
  },
  getIsLoadingPairs: state => {
    return state.isPairsLoading
  }
}
