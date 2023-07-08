import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardItem = ({ produto, key }) => {
  return (
    <Card className='card w-80 h-80'>
      <Card.Img variant="top" src={produto.picture_url} />
      <Card.Body>
        <Card.Title>{produto.name}</Card.Title>
        <Card.Text>
          {produto.descr}
          <h5>R$ {produto.price}</h5>
        </Card.Text>
        <Button variant="success">Adicionar ao carrinho</Button>
      </Card.Body>
    </Card>
  );
}
