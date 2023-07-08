import { Card, Container } from 'react-bootstrap';
import { GridLayout } from '../components/GridLayout';

export const ShoppingCart = () => {
  return (
    <Container> 
      <Card className='card'>
        <GridLayout />
      </Card>
    </Container>
  )
}