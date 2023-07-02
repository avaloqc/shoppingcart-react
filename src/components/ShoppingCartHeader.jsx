import { Row, Col } from "react-bootstrap"
import { totalItems } from "../Scripts/itemsPlaceHolder"

export const ShoppingCartHeader = ({ cart }) => {
    return (
      <Row>
        <Col md={8} className='shopping-header shopping-header-items'>
          <div>carrinho de compras</div>
          <div></div>
        </Col>
        <Col className='shopping-header'>resumo</Col>
      </Row>
    )
}