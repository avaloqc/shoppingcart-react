import { useState } from "react";
import { Row, Col, ListGroup } from "react-bootstrap"
import { Summary } from "./Summary"
import ItemDetails from './ItemDetails';
import { totalItems, totalValueCart} from "../Scripts/itemsPlaceHolder"

export const ShoppingCartBody = ({ cart }) => {

  const [collection, setCollection] = useState(cart);
  const [total_items, setTotal_items] = useState(totalItems(cart));
  const [total_amount, setTotal_amount] = useState(totalValueCart(cart));
 
  function updateCart(collection) {
    setCollection(collection)
    setTotal_items(totalItems(collection))
    setTotal_amount(totalValueCart(collection))
  }

  return (
    <Row>
      <Col md={8}> 
        <ListGroup>
          {collection.map((items, itemIndex) => (
            <ListGroup.Item key={itemIndex}>
              <ItemDetails 
                group={items}
                chave={itemIndex}
                collection={collection}
                updateCart={updateCart}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col md={4} className='summary-side'>
        <Summary total_items={total_items} total_amount={total_amount}/>
      </Col>
    </Row>
  )
}