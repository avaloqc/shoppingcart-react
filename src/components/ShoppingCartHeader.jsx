import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";
import { useShoppingContext } from "../storage/ShoppingContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

export const ShoppingCartHeader = () => {
  const { state } = useShoppingContext();

    return (
      <Row>
        <Col md={8} className='shopping-header shopping-header-items'>
          <div>carrinho de compras</div>
          <div ><Link to='/' style={{textDecoration: 'none'}}> <FontAwesomeIcon icon={faBookOpen} />  voltar ao catálogo</Link></div>
          <div>{state.carrinho.length} itens diferentes</div>
        </Col>
        <Col className='shopping-header'>resumo</Col>
      </Row>
    )
}