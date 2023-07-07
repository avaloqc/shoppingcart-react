import { Image, Col, Row, Stack } from 'react-bootstrap';
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useShoppingContext } from "../storage/ShoppingContext";
import { addOneToCartAction, removeOneFromCartAction } from '../storage/actions';

export default function ItemDetails({ group, index }) {
 
  const { dispatch } = useShoppingContext();

  function handleClickAdd() {
    if (group.item.stock > 0) {
      dispatch(addOneToCartAction(index))
    }
  }

  function handleClickRem() {
    if (group.amount > 0) {
      dispatch(removeOneFromCartAction(index))
    }
  }

  return (
    <Row>
      <Col className='cart-items'><Image src={group.item.picture_url} fluid /></Col>
      <Col className='cart-items'>
        <Stack className='cart-items'>
          <div>{group.item.name}</div>
          <div>{group.item.descr}</div>
        </Stack>
      </Col>
      <Col className='cart-items'>
        {group.amount > 0
          ? <span onClick={handleClickRem} className='btn btn-add-rem'><FontAwesomeIcon icon={faSquareMinus} /></span>
          : <span className='btn btn-add-rem disabled'><FontAwesomeIcon icon={faSquareMinus} opacity={0.2} /></span>
        }
        <span className='quantidade'> {group.amount} </span>
        {(group.item.stock > 0)
          ? <span onClick={handleClickAdd} className='btn btn-add-rem'><FontAwesomeIcon icon={faSquarePlus} /></span>
          : <span className='btn btn-add-rem disabled'><FontAwesomeIcon icon={faSquarePlus} opacity={0.2} /></span>
        }
      </Col>
      <Col className='cart-items'>R${group.item.price}</Col>
    </Row>
  )
}