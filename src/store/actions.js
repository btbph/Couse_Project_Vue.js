import cctx from 'ccxt'

export const actions = {
  setAllStocks({ commit }) {
    commit('setAllStocks', cctx.exchanges)
  },
  setCurrentStock({ commit }, data) {
    const { value } = data
    commit('setCurrentStock', value)
  }
}