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

export const CategoryCard = styled.div.attrs(props => ({
  style: {
    backgroundImage: `url(${props.$imageUrl})`,
  },
}))`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #b1b1b1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  transition: transform 0.3s ease;
  cursor: pointer;

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

  p {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    z-index: 1;
    margin: 0;
    padding: 10px;
    position: relative;
  }
`;