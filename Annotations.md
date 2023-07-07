# VER 2.0

## Implementação de Api Context e Re modelado dos dados
Refactorização do shopping cart para usar um modelo de dados diferente, com duas estruturas, uma "externa" que possa ser fornecida por uma API e uma "local" que é o carrinho do comprador. 
Ambas serão modeladas e os dados delas farão parte do estado global da aplicação.


Carrinho: o carrinho deverá ter os ítens e as suas quantidades para isso, usaremos um array.
```
carrinho = [
    {
        "id_item": uudi,
        "amount": 1
    },
    {
        "id_item": uuid,
        "amount": 2
    },
    {
        "id_item": uuid,
        "amount": 1
    },
]
```
 Dados externos: Representado por um array de artigos, onde cada artigo é um objeto.

```
items_data = [

    {
      "uuid": "00000hhhhh",
      "picture_url": "https://picsum.photos/100/100",
      "price": 10,
      "name": 'Camisa',
      "descr": "Cotton-shirt",
      "stock": 10,
    },
    {},{},{}
]
```
 
## Contex Api e modelado do estado inicial

O estado inicial deveria ter os itens do carrinho (as quantidades) deles e o valor total a pagar.

initialState = {
    "carrinho": [{},{},{}],    ----------->   (stock)
    "items_data": [{},{},{}],  ----------->   (amount)
}