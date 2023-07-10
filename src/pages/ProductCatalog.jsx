import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardItem } from "../components/ProductCatalog/CardItem";
import { useShoppingContext } from "../storage/ShoppingContext"

export function ProductCatalog() {
  const { state } = useShoppingContext();

  const h3Style = {
    color: 'blue',
    textAlign: 'center',
    marginTop: 3
  }

  const h4Style = {
    textAlign: 'end'
  }

  return (
    <>
      <h3 style={h3Style}>PRODUTOS DISPONÍVES</h3>
      <h4 style={h4Style}><Link to="carrinho">IR AO CARRINHO</Link></h4>
      <Container>
        <Row className="m-5 justify-content-center">
          {state.items_data.map((item, key) => (
            <Col md={3}>
                <Container fluid>
                  <CardItem produto={item} index={key}/>
                </Container>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}