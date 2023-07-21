import Card from 'react-bootstrap/Card';
// import { ButtonPurchase } from './ButtonPurchase';
import { Button } from 'react-bootstrap';
import { useShoppingContext } from '../../storage/ShoppingContext';
import { setButtonOffAction, addItemToCartAction } from '../../storage/actions';
import { useState } from 'react';
import { saveButtonState } from '../../services/cartServices';

export const CardItem = ({ produto, index }) => {

  const { state, dispatch } = useShoppingContext();
  const [buttonsOff, setButtonsOff] = useState(state.purchaseButtons)

  function handleClick () {
    dispatch(addItemToCartAction(produto.uuid))
    index = buttonsOff.map(button => button.item_id).indexOf(produto.uuid)
    buttonsOff[index].active = false
    setButtonsOff(buttonsOff)
    saveButtonState(index)
  }

  function IsitemIncart () {
    if (state.carrinho.length>0) {
      var items_cart = state.carrinho.map(element => element.item_id)
      console.log(items_cart);
      var buttonOff = items_cart.indexOf(produto.uuid)
      console.log(buttonOff);
      return buttonOff>=0 ? false : true
    }
    return true
  }
  return (
    <Card className='card w-80 h-80 d-flex flex-wrap'>
      <Card.Img variant="top" src={produto.picture_url} />
      <Card.Body>
        <Card.Title>{produto.name}</Card.Title>
        <Card.Text>
          {produto.descr}
          <br></br>
          R$ {produto.price}
        </Card.Text>

        { IsitemIncart()
        ? <Button onClick={handleClick} variant="success">Adicionar ao carrinho</Button>
        : <Button onClick={handleClick} variant="secondary" active={false} disabled>No carrinho</Button>
        }
      </Card.Body>
    </Card>
  );
}
