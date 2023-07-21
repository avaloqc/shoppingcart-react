import  Button  from "react-bootstrap/Button";

export const ButtonPurchase = ({handleClick, label, variant, active, disabled}) => (
  <Button 
  onClick={handleClick}
  variant={variant} 
  active={active} 
  disabled={disabled}>
    {label}
  </Button>  
)
