import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  .carousel-item {
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  @media (max-width: 370px) {
    padding: 10px;
  }
`;

export const Title = styled.h3`
  font-size: 42px;
  margin-bottom: 10px;
  margin-top: -20px;
  color: #f27613;
  font-weight: 900;
  text-align: center;

  @media (max-width: 370px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px;

  @media (max-width: 370px) {
    padding: 5px;
    gap: 5px;
  }
`;

export const CategoryName = styled.h4`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;

  @media (max-width: 360px) {
    font-size: 18px;
    margin-bottom: 3px;
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
  transition: transform 0.3s ease;
  cursor: pointer;
  margin-bottom: 5px;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 8px;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 860px) {
    width: 150px;
    height: 150px;
    margin-bottom: 3px;
  }

  @media (max-width: 420px) {
    width: 130px;
    height: 130px;
    margin-bottom: 3px;
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

    @media (max-width: 370px) {
      font-size: 20px;
      padding: 5px;
    }
  }
`;

export const Description = styled.p`
  font-size: 15px;
  font-style: italic;
  color: #f27613;
  text-align: center;
  padding: 0 10px;
  width: 100%;
  max-width: 190px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  line-height: 1.4;

  @media (max-width: 370px) {
    font-size: 14px;
    padding: 0 5px;
    max-width: 110px;
    min-height: 30px;
    line-height: 1.2;
  }
`;