export const getters = {
  getAllStocks: state => {
    return state.allStocks
  },
  getCurrentPairs: state => {
    return state.currentStock.symbols || []
  },
  getSelectedPair: state => {
    return state.currentPair
  },
  getIsLoadingPairs: state => {
    return state.isPairsLoading
  },
  getIsLoadingTrades: state => {
    return state.isTradesLoading
  },
  getCurrentStockId: state => {
    return state.currentStock.id
  },
  getCurrentStock: state => {
    return state.currentStock
  },
  getCurrentTrades: state => {
    return state.currentTrades.map(trade => {
      let tradeDate = new Date(trade.timestamp)
      tradeDate = `${tradeDate.getHours()}:${tradeDate.getMinutes()}:${tradeDate.getSeconds()}`
      return {
        time: tradeDate,
        side: trade.side,
        size: trade.amount,
        price: trade.price
      }
    })
  }
}
