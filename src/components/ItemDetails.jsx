import { useState } from 'react';
import { Image, Col, Row, Stack } from 'react-bootstrap';
import { faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ItemDetails({ group, chave, collection, updateCart}) {

  var [quantity, setQuantity] = useState(group.amount);

  function handleClickAdd() {
    console.log('chave :>> ', chave);
    quantity++
    setQuantity(quantity)
    group.amount = quantity
    console.log('cantidad :>> ', group.amount);
    collection[chave] = group
    updateCart(collection)
  }

  function handleClickRem() {
    quantity--
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
        <span onClick={handleClickRem} className='btn'><FontAwesomeIcon icon={faSquareMinus} /></span>
        <span className='quantidade'> {group.amount} </span>
        <span onClick={handleClickAdd} className='btn'><FontAwesomeIcon icon={faSquarePlus} /></span>
      </Col>
      <Col className='cart-items'>R${group.item.price}</Col>
    </Row>
  )
}