export function reducer(state, action) {
  switch (action.type) {
    case 'add first item':
      return {
        ...state,
        carrinho: [
          ...state.carrinho,
          action.payload
        ],
      }
    case 'add item':
      let amountIncreased = state.carrinho[action.payload]
      let uuid = state.carrinho[action.payload].item_id
      let stockDecreased = state.items_data[state.items_data.findIndex((element) => (element.uuid === uuid))]
      amountIncreased.amount++
      stockDecreased.stock--
      return {
        ...state,
        carrinho: [
          ...state.carrinho.slice(0, action.payload), amountIncreased, ...state.carrinho.slice(action.payload + 1)
        ],
        items_data: [
          ...state.items_data.slice(0, action.payload), stockDecreased, ...state.items_data.slice(action.payload + 1)
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
          ...state.carrinho.slice(0, action.payload), amountReduced, ...state.carrinho.slice(action.payload + 1)
        ],
        items_data: [
          ...state.items_data.slice(0, action.payload), stockRestored, ...state.items_data.slice(action.payload + 1)
        ]
      }
    case 'button off':
      return {
        ...state,
        purchaseButtons: [
          ...state.purchaseButtons.slice(0, action.payload), false, ...state.purchaseButtons.slice(action.payload + 1)
        ]
      }
    case 'empty cart':
      return {
        ...state,
        carrinho: [],
      }
    default: { }
  }
}