import styled from "styled-components";

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90%;
`;

export const CartButtonStyled = styled.button`
  background-color: rgb(82, 242, 19);
  background: rgba(82, 242, 19, 0.2);
  border: 2px solid transparent;
  border-radius: 40px;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.4s ease;
  box-shadow: 0 4px 6px rgba(82, 242, 19, 0.6);

  &:hover {
    background: rgba(82, 242, 19, 0.4);
    transform: translateY(-7px);
    box-shadow: 
      0 8px 20px rgba(82, 242, 19, 0.6),
      0 0 15px rgba(82, 242, 19, 0.4),
      inset 0 0 10px rgba(82, 242, 19, 0.2);
    border: 2px solid rgba(82, 242, 19, 0.5);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 20px rgba(82, 242, 19, 0.6); }
    50% { box-shadow: 0 0 40px rgba(84, 255, 16, 0.8); }
    100% { box-shadow: 0 0 20px rgba(82, 242, 19, 0.6); }
  }

  &:active {
    transform: translateY(-3px);
  }

  .cart-icon {
    font-size: 20px;
    text-shadow: 0 0 10px rgba(82, 242, 19, 0.5);
  }

  .cart-text {
    font-weight: bold;
    text-shadow: 0 0 10px rgba(82, 242, 19, 0.5);
  }
`;