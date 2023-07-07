export function reducer(state, action) {
  switch (action.type) {
    case 'add item':
      let amountIncreased = state.carrinho[action.payload]
      let stockDecreased = state.items_data[action.payload]
      amountIncreased.amount++
      stockDecreased.stock--
      return {
        ...state,
        carrinho: [
          ...state.carrinho.slice(0, action.payload), amountIncreased , ...state.carrinho.slice(action.payload+1)
        ],
        items_data: [
          ...state.items_data.slice(0, action.payload), stockDecreased , ...state.items_data.slice(action.payload+1)
        ]
      }
    case 'remove item':
      let amountReduced = state.carrinho[action.payload]
      let stockRestored = state.items_data[action.payload]
      amountReduced.amount--
      stockRestored.stock++
      return {
        ...state,
        carrinho: [
          ...state.carrinho.slice(0, action.payload), amountReduced , ...state.carrinho.slice(action.payload+1)
        ],
        items_data: [
          ...state.items_data.slice(0, action.payload), stockRestored , ...state.items_data.slice(action.payload+1)
        ]
      }
    default: {}
  }
}