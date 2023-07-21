import { Col, Button, Row } from 'react-bootstrap';
import { emptyCartAction } from '../storage/actions';
import { useShoppingContext } from '../storage/ShoppingContext';

export function ShoppingCartFooter() {

  const { state, dispatch } = useShoppingContext();

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    textTransform: "uppercase",
  };

  function handleCLick() {
    dispatch(emptyCartAction());
  }

  return (
    <Row>
      <Col md={8}>
        { state.carrinho.length > 0 && (
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 25 }}>
            <Button style={buttonStyle} onClick={handleCLick}>
              esvaziar
            </Button>
          </div>
        )}
      </Col>
    </Row>

  )
}
