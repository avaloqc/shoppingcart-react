import { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

export const DiscountForm = (props) => {
  var defaultBtn = { variant: "secondary", active: false, disabled: true }
  var activeBtn = { variant: "primary", active: true, disabled: false }
  var [input, setInput] = useState('')
  const [couponMessg, setCouponMessg] = useState('')
  const [btnStatus, setBtnStatuts] = useState(defaultBtn)

  var discount_codes = [
    {
      code: '25TUDO',
      value: .75,
      exp_date: '25/06/2023'
    },
    {
      code: '10FRST',
      value: 10,
      exp_date: '25/06/2023'
    },
    {
      code: '15OFF!',
      value: .85,
      exp_date: '23/06/2023'
    },
  ]

  function checkCode(e) {
    let code = e.target.value
    setInput(code)
    if (code.length === 6) {
      setBtnStatuts(activeBtn)
    } else {
      setBtnStatuts(defaultBtn)
      setCouponMessg('')
    }
  }

  function applyDiscount(e) {
    e.preventDefault()
    var coupon = validCoupon(input.toLocaleUpperCase());

    if (coupon) {
      props.UpdatePriceDiscount(notExpiredCoupon(coupon).value)
      setCouponMessg(notExpiredCoupon(coupon).text)
    }
  }

  function validCoupon(input_code) {
    return discount_codes.find(discount => input_code === discount.code)
  }

  function notExpiredCoupon(discount) {
    var coupon = { "value": discount.value, "text": "discount_text" }
    var discounts_text = ['O código já expirou', 'código aplicado com sucesso']
    let discount_text = (currentDate() <= discount.exp_date) ? discounts_text[1] : discounts_text[0];
    coupon.text=discount_text
    if (discount_text === discounts_text[0]) {
      coupon.text = discount_text
      if (discount.value<1) coupon.value=1
      else coupon.value=0
    } else {
      coupon.text = discount_text
    }
    return coupon;
  }

  function currentDate() {
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    let currentYear = date.getFullYear();
    return `${currentDay}-${currentMonth}-${currentYear}`;
  }

  return (
    <>
      <div>CÓDIGO DE DESCONTO</div>
      <div>
        <Container>
          <Form.Control type="text" placeholder="Introduza seu código" onChange={checkCode} />
          <div className="status-discount-code">
            <Button
              variant={btnStatus.variant}
              active={btnStatus.active}
              disabled={btnStatus.disabled}
              onClick={applyDiscount}>
              <span>Discount</span></Button>
            <Form.Text id="status_code" muted disabled>
              <span>{couponMessg}</span>
            </Form.Text>
          </div>
        </Container>
      </div>
    </>
  )
}