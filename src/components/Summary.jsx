import { useState } from 'react';
import { Stack, Container } from 'react-bootstrap';
import { ShippingForm } from './ShippingForm';
import { DiscountForm } from './DiscountForm';
import { Checkout } from './Checkout';
import { SummaryHeader } from './SummaryHeader';

export const Summary = ({ total_items, total_amount }) => {

  var [discount, setDiscount] = useState(1)
  var [shippingFee, setShippingFee] = useState(0)

  function UpdatePriceShipping(shippingFee) {
    setShippingFee(shippingFee)
  }
  function UpdatePriceDiscount(discount) {
    setDiscount(discount)
  }

  return ( 
    <>
      <Container>
        <Stack gap={4}>
          <SummaryHeader total_items={total_items} total_amount={total_amount}/>
          <ShippingForm UpdatePriceShipping={UpdatePriceShipping}/>
          <DiscountForm UpdatePriceDiscount={UpdatePriceDiscount} />
          <Checkout total_amount={total_amount} shippingFee={shippingFee} discount={discount}/>
        </Stack> 
      </Container>
    </>
  )
}