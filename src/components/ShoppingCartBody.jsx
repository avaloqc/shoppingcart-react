import { Row, Col, ListGroup } from "react-bootstrap"
import { Summary } from "./Summary"
import ItemDetails from './ItemDetails';
import { useShoppingContext } from "../storage/ShoppingContext";


export const ShoppingCartBody = () => {
  const { state } = useShoppingContext();

  const cart =
    state.carrinho.map(element => {
      var obj = {}
      state.items_data.map(item => {
        if (item.uuid === element.item_id) {
          obj = { "item": item, "amount": element.amount }
          return obj
        }
      })
      return obj
    })


  return (
    <Row>
      <Col md={8}>
        <ListGroup variant="flush">
          {cart.map((group, index) => (
            <ListGroup.Item>
              <ItemDetails group={group} index={index} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col md={4} className='summary-side'>
        <Summary total_items={25} total_amount={25} />
      </Col>
    </Row>
  )
}