import { ContainerButton, CartButtonStyled } from './styles';

export function CartButton({ ...props }) {
  return (
    <ContainerButton>
      <CartButtonStyled {...props}>
        <span className="cart-text">Adicionar ao </span>
        <span className="cart-icon">🛒</span>
      </CartButtonStyled>
    </ContainerButton>
  );
}