
var cart = [
  {
    "item":
    {
      "uuid": "123hyujkiol",
      "picture_url": "https://picsum.photos/100?101",
      "price": 10,
      "name": 'Camisa',
      "descr": "Cotton-shirt",
      "stock": 2,
    },
    "amount": 0
  },
  {
    "item":
    {
      "uuid": "12445555jjjiol",
      "picture_url": "https://picsum.photos/100?102",
      "price": 20,
      "name": 'Camisa sem gola',
      "descr": "Camisa algodão",
      "stock": 3,
    },
    "amount": 0
  },
  {
    "item":
    {
      "uuid": "5678ujikliol",
      "picture_url": "https://picsum.photos/100?103",
      "price": 10,
      "name": 'Camisa A',
      "descr": "T-shirt",
      "stock": 4,
    },
    "amount": 0
  },
  {
    "item":
    {
      "uuid": "560popliol",
      "picture_url": "https://picsum.photos/100?107",
      "price": 15,
      "name": 'Camisa B',
      "descr": "T-shirt",
      "stock": 4,
    },
    "amount": 0
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
    "amount": 0
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
    "amount": 0
  },

]

var api_item_data = cart.map(element => element.item)

var activeButtons = []
for (let i=0; i<api_item_data.length; i++) {
  activeButtons.push(false)
}

export {
  api_item_data,
  activeButtons
};