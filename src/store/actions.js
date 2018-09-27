import cctx from 'ccxt'

export const actions = {
  setAllStocks({ commit }) {
    commit('setAllStocks', cctx.exchanges)
  },
  async setCurrentStock({ commit }, data) {
    const { value } = data
    try {
      commit('setIsLoadingPairsPending')

      const stock = new cctx[value]
      stock.proxy = stock.has['CORS'] ? undefined : 'https://cors-anywhere.herokuapp.com/'
      await stock.loadMarkets()
      commit('setCurrentStock', stock)

      commit('setIsLoadingPairsResolve')
    } catch (error) {
      console.log(error.message)
      commit('setIsLoadingPairsReject')
    }
  },
  setCurrentPair({ commit }, { pair }) {
    commit('setCurrentPair', pair)
  }
}