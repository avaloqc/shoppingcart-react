import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardItem } from "../components/ProductCatalog/CardItem";
import { useShoppingContext } from "../storage/ShoppingContext";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ProductCatalog() {
  const { state } = useShoppingContext();

  const h3Style = {
    color: 'blue',
    textAlign: 'center',
    marginTop: 35
  }

  const h4Style = {
    textAlign: 'end',
    marginRight: '55px'
  }


  return (
    <>
      <h2 style={h3Style}>PRODUTOS DISPONÍVES</h2>
      <h5 style={h4Style}><Link to="carrinho">IR AO CARRINHO  <FontAwesomeIcon icon={faCartShopping} beat /></Link></h5>
      <Container>
        <Row className="m-5 justify-content-center">
          {state.items_data.map((item, index) => (
            <Col md={3} key={item.uuid}>
                <Container fluid>
                  <CardItem produto={item} index={index} />
                </Container>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}