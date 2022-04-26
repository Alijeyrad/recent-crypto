const CoinReducer = (state, action) => {
  switch (action.type) {
    case 'COIN-UPDATE':
      let incomingCoin = action.newCoin
      state.coins[action.name]['price'] = incomingCoin.market_data.current_price.usd;
      state.coins[action.name]['high'] = incomingCoin.market_data.high_24h.usd;
      state.coins[action.name]['low'] = incomingCoin.market_data.low_24h.usd;
      state.coins[action.name]['change'] = incomingCoin.market_data.price_change_percentage_24h;
      let updated;
      if (action.name === 'solana'){
        updated = true
      } else {
        updated = false;
      }
      return {
        ...state,
        date: action.date,
        updated: updated
      }

    default:
      break;
  }
};

export default CoinReducer;