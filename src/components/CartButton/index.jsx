import { ContainerButton, CartButtonStyled } from './styles';

export function CartButton({ ...props }) {
  return (
    <ContainerButton>
      <CartButtonStyled {...props}>
        <span className="cart-icon">🛒</span>
        <span className="cart-text">Cart</span>
      </CartButtonStyled>
    </ContainerButton>
  );
}