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
  margin-bottom: 10px;
  margin-top: -25px;
  color: #f27613;
  font-weight: 900;
  text-align: center;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px;
`;

export const CategoryName = styled.h4`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`;

export const CategoryCard = styled.div`
  width: 180px;
  height: 180px;
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

  p {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    z-index: 1;
    margin: 0;
    padding: 10px;
    position: relative;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  font-style: italic;
  color: #f27613; // Changed to match the title color for consistency
  text-align: center;
  padding: 0 10px;
  width: 100%;
  max-width: 200px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600; // Added for better visibility
  line-height: 1.4;
`;