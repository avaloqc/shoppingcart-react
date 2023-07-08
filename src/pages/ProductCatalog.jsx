import { Container, Row, Col } from "react-bootstrap";
import { CardItem } from "../components/ProductCatalog/CardItem";
import { useShoppingContext } from "../storage/ShoppingContext"

export function ProductCatalog() {
  const { state, dispatch } = useShoppingContext();

  return (
    <>
      <h3>PRODUTOS DISPONÍVES</h3>
      <Container>
        <Row className="m-5 justify-content-center">
          {state.items_data.map((item, key) => (
            <Col md={3}>
                <CardItem produto={item} index={key}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}