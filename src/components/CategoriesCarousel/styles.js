import styled, { keyframes } from "styled-components";

const pulseOrange = keyframes`
  0% { box-shadow: 0 0 20px rgba(242, 118, 19, 0.6); }
  50% { box-shadow: 0 0 40px rgba(242, 118, 19, 0.8); }
  100% { box-shadow: 0 0 20px rgba(242, 118, 19, 0.6); }
`;

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 7px auto;

  .carousel-item {
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  .carousel-container {
    position: relative;
    overflow: hidden;
  }

  @media (max-width: 640px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Title = styled.h3`
  font-size: 42px;
  margin-bottom: 25px;
  margin-top: -20px;
  color: #f27613;
  background-color: rgba(0, 0, 0, 0.5);
  width: 300px;
  padding: 10px;
  font-weight: 900;
  text-align: center;
  border-radius: 40px;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.4s ease;
  outline: none;
  border: 1px  transparent;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(242, 119, 19, 0.5);

  &:hover {
    transform: translateY(-7px);
    box-shadow:
      0 8px 20px rgba(242, 118, 19, 0.4),
      0 0 15px rgba(242, 118, 19, 0.4),
      inset 0 0 10px rgba(242, 118, 19, 0.2);
    border: 1px transparent rgba(242, 118, 19, 0.5);
  }

  @media (max-width: 640px) {
    font-size: 32px;
    width: 250px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 15px;
    width: 220px;
    padding: 6px;
  }

  @media (max-width: 360px) {
    font-size: 24px;
    width: 200px;
    padding: 5px;
  }
`;

export const CategoryCard = styled.div`
  width: 220px;
  height: 200px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${({ $imageUrl }) => `url('${$imageUrl}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  margin-bottom: 5px;
  margin-top: 15px;
  box-shadow: 0 4px 6px rgba(242, 118, 19, 0.2);
  border: 2px solid transparent;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.05) translateY(-5px);
    box-shadow:
      0 8px 20px rgba(242, 118, 19, 0.4),
      0 0 15px rgba(242, 118, 19, 0.4),
      inset 0 0 10px rgba(242, 118, 19, 0.2);
    border: 2px solid rgba(242, 118, 19, 0.5);

    &:before {
      background: rgba(0, 0, 0, 0.4);
    }
  }

  @media (max-width: 640px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 360px) {
    width: 130px;
    height: 130px;
  }

  p {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    z-index: 1;
    margin: 0;
    padding: 10px;
    position: relative;
    transition: all 0.3s ease;

    @media (max-width: 640px) {
      font-size: 24px;
      padding: 8px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
      padding: 5px;
    }
  }
`;

export const CategoryName = styled.h4`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  text-shadow: 0 0 10px rgba(242, 118, 19, 0.5);
  padding: 5px 15px;
  width: fit-content;
  margin-top: 5px;
  

  @media (max-width: 640px) {
    font-size: 22px;
    top: -35px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    top: -30px;
  }
`;

export const Description = styled.p`
  font-size: 15px;
  font-style: italic;
  color: #f27613;
  text-align: center;
  padding: 8px 15px;
  width: 100%;
  max-width: 190px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  line-height: 1.4;
  transition: all 0.4s ease;
  cursor: pointer;
  background: transparent;
  border: 2px solid transparent;
  text-shadow: 0 0 10px rgba(242, 118, 19, 0.3);

  @media (max-width: 640px) {
    font-size: 14px;
    max-width: 160px;
    padding: 6px 12px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    max-width: 130px;
    min-height: 35px;
    padding: 5px 10px;
  }

  @media (max-width: 360px) {
    font-size: 12px;
    max-width: 110px;
    min-height: 30px;
    padding: 4px 8px;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px;
  transition: transform 0.3s ease-in-out;
  position: relative;
  margin-top: 45px;
  margin-bottom: 5px;

  &:hover {
    ${CategoryCard} {
      transform: scale(1.05) translateY(-5px);
      box-shadow:
        0 8px 20px rgba(242, 118, 19, 0.4),
        0 0 15px rgba(242, 118, 19, 0.4),
        inset 0 0 10px rgba(242, 118, 19, 0.2);
      border: 2px solid rgba(242, 118, 19, 0.5);
      

      &:before {
        background: rgba(0, 0, 0, 0.4);
      }
    }

    ${CategoryName} {
      transform: translate(-50%, -7px);
      //background: rgba(0, 0, 0, 0.5);
      box-shadow:
        0 8px 20px rgba(242, 118, 19, 0.6),
        0 0 15px rgba(242, 118, 19, 0.4),
        inset 0 0 10px rgba(242, 118, 19, 0.2);
      border: 1px transparent rgba(242, 118, 19, 0.5);
      border-radius: 40px;
      //animation: ${pulseOrange} 2s infinite;
    }

    ${Description} {
      transform: translateY(-7px);
      background: rgba(0, 0, 0, 0.5);
      box-shadow:
        0 8px 20px rgba(242, 118, 19, 0.6),
        0 0 15px rgba(242, 118, 19, 0.4),
        inset 0 0 10px rgba(242, 118, 19, 0.2);
      border: 2px solid rgba(242, 118, 19, 0.5);
      border-radius: 40px;
      //animation: ${pulseOrange} 2s infinite;
    }
  }

  @media (max-width: 640px) {
    padding: 8px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    gap: 5px;
  }
`;