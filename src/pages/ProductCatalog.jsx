import { Container, Row, Col } from "react-bootstrap";
import { CardItem } from "../components/ProductCatalog/CardItem";
import { useShoppingContext } from "../storage/ShoppingContext"

export function ProductCatalog() {
  const { state, dispatch } = useShoppingContext();
  var test = [0,0,0,0,0,0]

  return (
    <>
      <h1>ITENS DISPONÍVES</h1>
      <Container>
        <Row>
          {test.map((item, key) => (
          <Col ms={3}>
            <CardItem/>
          </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}