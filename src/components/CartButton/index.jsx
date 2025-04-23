import { Container } from "../CategoriesCarousel/styles";

export function CartButton({ ...props }) {

  return (
    <ContainerButton {...props}>
    <button className="cart-button" {...props}>
      <span className="cart-icon">🛒</span>
      <span className="cart-text">Cart</span>
    </button>
    </ContainerButton>
  );
}