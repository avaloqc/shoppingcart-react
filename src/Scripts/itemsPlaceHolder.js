
var quantities = [1,2,2,2,1]
var cart2 = []
let item =
{
  "uuid": "123hyujkiol",
  "picture_url": "https://picsum.photos/100/100",
  "price": 10,
  "name": 'Camisa',
  "descr": "Cotton-shirt",
  "stock": 10,
}

var cart = [
  {
    "item": 
    {
      "uuid": "123hyujkiol",
      "picture_url": "https://picsum.photos/100/100",
      "price": 10,
      "name": 'Camisa',
      "descr": "Cotton-shirt",
      "stock": 10,
    },
    "amount": 3
  },
  {
    "item": 
    {
      "uuid": "12445555jjjiol",
      "picture_url": "https://picsum.photos/101/100",
      "price": 20,
      "name": 'Camisa sem gola',
      "descr": "",
      "stock": 10,
    },
    "amount": 2
  },
  {
    "item": 
    {
      "uuid": "5678ujikliol",
      "picture_url": "https://picsum.photos/102/100",
      "price": 10,
      "name": 'Camisa',
      "descr": "T-shirt",
      "stock": 9,
    },
    "amount": 1
  },
  {
    "item": 
    {
      "uuid": "560popliol",
      "picture_url": "https://picsum.photos/107/100",
      "price": 15,
      "name": 'Camisa',
      "descr": "T-shirt",
      "stock": 9,
    },
    "amount": 1
  },
  {
    "item": 
    {
      "uuid": "56ghjkyyliol",
      "picture_url": "https://picsum.photos/108/100",
      "price": 12,
      "name": 'Camisa',
      "descr": "T-shirt",
      "stock": 9,
    },
    "amount": 1
  },
  {
    "item": 
    {
      "uuid": "345ghjiopjiol",
      "picture_url": "https://picsum.photos/108/100",
      "price": 12,
      "name": 'Camisa',
      "descr": "T-shirt",
      "stock": 5,
    },
    "amount": 2
  },
  
]


function totalValueCart2 (items, quantities) {
  let total = 0;
  items.forEach((item, iIndex) => {
    total = total + item.price * quantities[iIndex]
  });
  return total;
}

function totalItems (cart) {
  let total = 0
  // return quantities.reduce((partialSum, a) => partialSum + a, 0);
  cart.forEach(element => {
    total=total + element.amount;
  });
  return total;
}

function totalValueCart (cart) {
  let sum = 0
  cart.forEach(element => {
    sum = sum + element.amount*element.item.price;
  });
  return sum;
}

export {
  totalValueCart,
  totalItems,
  cart
};