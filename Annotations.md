# VER 3.0 FINAL

## Implementação de localStorage e 
Refactorização do shopping cart para implemetar o localStorage do navegador para persistencia de dados do carrinho.


# VER 2.0

## Implementação de ContextAPI, react-router, página de catálogo de produtos e re modelado dos dados 
Refactorização do shopping-cart project para usar um modelo de dados diferente, com duas estruturas, uma "externa" que possa ser fornecida por uma API e uma "local" que é o carrinho do comprador. Criação da página que lista os produtos disponíveis, listando os dados externos onde o usuário pode escolher e colocar os itens no seu carrinho.

Ambas estruturas serão modeladas e os dados delas farão parte do estado global da aplicação.


Carrinho: o carrinho deverá ter os ítens e as suas quantidades para isso, usaremos um array.
```
carrinho = [
    {
        "item_id": uudi,
        "amount": 1
    },
    {
        "item_id": uuid,
        "amount": 2
    },
    {
        "item_id": uuid,
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
    "buttons": activeButtons
}

# VER 1.0

## Criação do carrinho de compras usando componentes React e compartilhamento de dados e estados entre componentes com useState 