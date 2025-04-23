import styled from "styled-components";

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartButtonStyled = styled.button`
  background-color: #f0c14b;
  border: 1px solid #a88734;
  border-radius: 5px;
  color: #111;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ddb347;
    transform: scale(1.05);
  } 

  &:active {
    transform: scale(0.95);
  }

  .cart-icon {
    font-size: 20px;
  }

  .cart-text {
    font-weight: bold;
  }
`;