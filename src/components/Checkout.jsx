import { Container, Button } from "react-bootstrap"

export const Checkout = ({ total_amount, shippingFee, discount }) => {
  return (
    <>
      <div className='summary-header'>
        <span>TOTAL</span>
        <span> 
          R${ (discount>1) ? (total_amount-discount + shippingFee) : (total_amount*discount + shippingFee )}
        </span>
      </div>
      <div>
        <Container>
          <Button className="d-grid gap-2" variant='dark'>Checkout</Button>
        </Container>
      </div>
    </>
  )
}