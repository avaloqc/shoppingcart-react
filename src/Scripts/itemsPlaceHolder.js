
var cart = [
  {
    "item":
    {
      "uuid": "123hyujkiol",
      "picture_url": "https://picsum.photos/200/300?101",
      "price": 10,
      "name": 'Camisa',
      "descr": "Cotton-shirt",
      "stock": 2,
    },
    "amount": 3
  },
  {
    "item":
    {
      "uuid": "12445555jjjiol",
      "picture_url": "https://picsum.photos/200/300?102",
      "price": 20,
      "name": 'Camisa sem gola',
      "descr": "Camisa algodão",
      "stock": 3,
    },
    "amount": 2
  },
  {
    "item":
    {
      "uuid": "5678ujikliol",
      "picture_url": "https://picsum.photos/200/300?103",
      "price": 10,
      "name": 'Camisa A',
      "descr": "T-shirt",
      "stock": 4,
    },
    "amount": 1
  },
  {
    "item":
    {
      "uuid": "560popliol",
      "picture_url": "https://picsum.photos/100/100?107",
      "price": 15,
      "name": 'Camisa B',
      "descr": "T-shirt",
      "stock": 4,
    },
    "amount": 1
  },
  {
    "item":
    {
      "uuid": "56ghjkyyliol",
      "picture_url": "https://picsum.photos/100/100?106",
      "price": 12,
      "name": 'Camisa C',
      "descr": "T-shirt",
      "stock": 4,
    },
    "amount": 1
  },
  {
    "item":
    {
      "uuid": "345ghjiopjiol",
      "picture_url": "https://picsum.photos/100/100?100",
      "price": 12,
      "name": 'Camisa D',
      "descr": "T-shirt",
      "stock":3,
    },
    "amount": 2
  },

]

const init_cart_items = 
cart.map(element => {
  var obj = {
    "item_id": element.item.uuid,
    "amount": element.amount
  }
  return obj
})

var api_item_data = cart.map(element => element.item)

var cart2 = 
init_cart_items.map(element => {
  var obj = {}
  api_item_data.map(item => {
    if (item.uuid === element.item_id) {
      obj = {
        "item": item,
        "amount": element.amount
      }
    }
    return obj
  })
  return obj
})

export {
  api_item_data,
  init_cart_items
};