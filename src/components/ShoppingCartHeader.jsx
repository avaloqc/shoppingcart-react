import { Row, Col } from "react-bootstrap"
import { useShoppingContext } from "../storage/ShoppingContext"

export const ShoppingCartHeader = () => {
  const { state } = useShoppingContext();
    return (
      <Row>
        <Col md={8} className='shopping-header shopping-header-items'>
          <div>carrinho de compras</div>
          <div>{state.carrinho.length} itens diferentes</div>
        </Col>
        <Col className='shopping-header'>resumo</Col>
      </Row>
    )
}