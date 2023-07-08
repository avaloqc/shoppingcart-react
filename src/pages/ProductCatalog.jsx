import { Container, Row, Col } from "react-bootstrap";
import { CardItem } from "../components/ProductCatalog/CardItem";
import { useShoppingContext } from "../storage/ShoppingContext"

export function ProductCatalog() {
  const { state, dispatch } = useShoppingContext();

  return (
    <>
      <h3>PRODUTOS DISPONÍVES</h3>
      <Container>
        <Row>
          {state.items_data.map((item, key) => (
          <Col ms={3}>
            <CardItem produto={item} index={key}/>
          </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}