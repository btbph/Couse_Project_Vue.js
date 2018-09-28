import cctx from 'ccxt'

const getTrades = async (getters, commit, pair) => {
  const stock = getters['getCurrentStock']
  const limit = 20
  commit('setCurrentTrades', await stock.fetchTrades(pair, undefined, limit))
}

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
  setCurrentPair({ commit, getters }, { pair }) {
    try {
      commit('setCurrentPair', pair)
      commit('setIsLoadingTradesPending')
      getTrades(getters, commit, pair)
      commit('setIsLoadingTradesResolve')
    } catch (error) {
      console.log(error.message)
      commit('setIsLoadingTradesReject')
    }
  },
  updateTrades({ commit, getters}) {
    try {
      const pair = getters['getSelectedPair']
      getTrades(getters, commit, pair)
    } catch (error) {
      console.log(error.message)
    }
  }
}