import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardItem } from "../components/ProductCatalog/CardItem";
import { useShoppingContext } from "../storage/ShoppingContext"

export function ProductCatalog() {
  const { state } = useShoppingContext();

  return (
    <>
      <h3>PRODUTOS DISPONÍVES</h3>
      <h4><Link to="carrinho">IR AO CARRINHO</Link></h4>
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