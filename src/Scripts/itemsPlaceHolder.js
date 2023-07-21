
var cart = [
  {

    "item":
    {
      "uuid": "0001",
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
      "uuid": "0002",
      "picture_url": "https://picsum.photos/id/100/100",
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
      "uuid": "0003",
      "picture_url": "https://picsum.photos/id/101/100",
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
      "uuid": "0004",
      "picture_url": "https://picsum.photos/id/107/100",
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
      "uuid": "0005",
      "picture_url": "https://picsum.photos/id/109/100",
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
      "uuid": "0006",
      "picture_url": "https://picsum.photos/id/200/100",
      "price": 12,
      "name": 'Camisa D',
      "descr": "T-shirt",
      "stock": 3,
    },
    "amount": 0
  }
]

var api_item_data = cart.map(element => element.item)

var activeButtons = []
const createCardItem = (itemId) => (
  {
    "item_id": itemId,
    "active": true
  }
)
for (let i = 0; i < api_item_data.length; i++) {
  let newItem = createCardItem(api_item_data[i].uuid)
  activeButtons.push(newItem)
}

export {
  api_item_data,
  activeButtons
};