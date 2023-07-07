export const addOneToCartAction = (index) => ({
  type: 'add item',
  payload: index
});

export const removeOneFromCartAction = (index) => ({
  type: 'remove item',
  payload: index
});

