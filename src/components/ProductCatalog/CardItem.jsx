import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useShoppingContext } from '../../storage/ShoppingContext';
import { addOneToCartAction, setButtonOffAction } from '../../storage/actions';

export const CardItem = ({ produto, index }) => {

  const { state, dispatch } = useShoppingContext();

  function handleClick () {
    dispatch(addOneToCartAction(index))
    dispatch(setButtonOffAction(index))
  }

  return (
    <Card className='card w-80 h-80'>
      <Card.Img variant="top" src={produto.picture_url} />
      <Card.Body>
        <Card.Title>{produto.name}</Card.Title>
        <Card.Text>
          {produto.descr}
          <h5>R$ {produto.price}</h5>
        </Card.Text>
        { !state.buttons[index] 
        ? <Button onClick={handleClick} variant="success">Adicionar ao carrinho</Button>
        : <Button onClick={handleClick} variant="secondary" active={false} disabled>No carrinho</Button>
        }
      </Card.Body>
    </Card>
  );
}
