import { useState } from 'react';
import { Image, Col, Row, Stack } from 'react-bootstrap';
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ItemDetails({ group, chave, collection, updateCart }) {

  var [quantity, setQuantity] = useState(group.amount);

  function handleClickAdd() {
    if (group.item.stock > 0) {
      quantity++
      group.item.stock--
    }
    setQuantity(quantity)
    group.amount = quantity
    collection[chave] = group
    updateCart(collection)
  }

  function handleClickRem() {
    if (quantity > 0) {
      quantity--
      group.item.stock++
    }
    group.amount = quantity
    setQuantity(quantity)
    collection[chave] = group
    updateCart(collection)
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
        {quantity > 0
          ? <span onClick={handleClickRem} className='btn'>
            <FontAwesomeIcon icon={faSquareMinus} />
          </span>
          : <span className='btn disabled'><FontAwesomeIcon icon={faSquareMinus} opacity={0.2} /></span>
        }
        <span className='quantidade'> {group.amount} </span>
        {( group.item.stock > 0 )
          ? <span onClick={handleClickAdd} className='btn'><FontAwesomeIcon icon={faSquarePlus} /></span>
          : <span className='btn disabled'><FontAwesomeIcon icon={faSquarePlus} opacity={0.2} /></span>
        }

      </Col>
      <Col className='cart-items'>R${group.item.price}</Col>
    </Row>
  )
}