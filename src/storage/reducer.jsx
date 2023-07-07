export function reducer(state, action) {
  switch (action.type) {
    case 'add item':
      let amountIncreased = state.carrinho[action.payload]
      amountIncreased.amount = amountIncreased.amount+1
      return {
        ...state,
        carrinho: [
          ...state.carrinho.slice(0, action.payload), amountIncreased , ...state.carrinho.slice(action.payload+1)
        ],
      }
    case 'remove item':
      let amountReduced = state.carrinho[action.payload]
      amountReduced.amount--
      return {
        ...state,
        carrinho: [
          ...state.carrinho.slice(0, action.payload), amountReduced , ...state.carrinho.slice(action.payload+1)
        ],
      }
    default: {}
  }
}