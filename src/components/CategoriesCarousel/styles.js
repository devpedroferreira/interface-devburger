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
`;

export const Title = styled.h3`
  font-size: 42px;
  margin-bottom: 30px;
  color: #f27613;
  font-weight: 900;
  text-align: center;
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 15px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }

  h3 {  
    font-size: 20px;
    color: #fff;
    text-align: center;
    font-weight: 400;
    margin-top: 10px;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 8px;
    object-fit: cover;
  }
`;