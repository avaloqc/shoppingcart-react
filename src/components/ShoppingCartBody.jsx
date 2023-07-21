import { Row, Col, ListGroup } from "react-bootstrap";
import { Summary } from "./Summary";
import ItemDetails from "./ItemDetails";
import { useShoppingContext } from "../storage/ShoppingContext";

export const ShoppingCartBody = () => {
  const { state } = useShoppingContext();

  const cartNormalized = state.carrinho.map((element) => {
    var obj = {};
    state.items_data.map((item) => {
      if (item.uuid === element.item_id) {
        obj = { item: item, amount: element.amount };
        return obj;
      }
    });
    return obj;
  });

  const total_items = state.carrinho.reduce(
    (sum, current) => sum + current.amount, 0
  );

  const total_amount = cartNormalized
    .map((element) => element.item.price * element.amount)
    .reduce((sum, current) => sum + current, 0);

  return (
    <Row>
      <Col md={8}>
        <ListGroup variant="flush">
          {cartNormalized.map((group, index) => (
            <ListGroup.Item key={index}>
              <ItemDetails group={group} index={index} />
            </ListGroup.Item>
          ))}
        </ListGroup>
        <p></p>
      </Col>
      <Col md={4} className="summary-side">
        <Summary total_items={total_items} total_amount={total_amount} />
      </Col>
    </Row>
  );
};
