import  Form  from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

export const ShippingForm = (props) => {
  var sp_fees = [0, 5, 15, 25]

  function handleOption (e) {
    var selection = e.target.value;
    switch (selection) {
      case "1": 
        props.UpdatePriceShipping(sp_fees[0])
        break;
      case "2":
        props.UpdatePriceShipping(sp_fees[2])
        break;
      case "3":
        props.UpdatePriceShipping(sp_fees[3])
        break;
      default: 
        props.UpdatePriceShipping(sp_fees[0])
    }
  }

  return (
    <>
      <div>VALOR DA ENTREGA</div>
      <Container>
        <Form.Select aria-label="shipping-options" onChange={handleOption}>
          <option>Select Delivery</option>
          <option value="1">Free Delivery- (1 mês)- &euro;{sp_fees[0]}</option>
          <option value="2">Standard-Delivery (2-semanas) - &euro;{sp_fees[2]}</option>
          <option value="3">Expedited-Delivery (2-3 dias) - &euro;{sp_fees[3]}</option>
        </Form.Select>
      </Container>
    </>
  )
}
