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
  margin-bottom: 10px;
  margin-top: -20px;
  color: rgb(82, 242, 19);
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
  border: 2px solid transparent;

  // This is the animation for the hover effect
  // It creates a glowing effect around the title
  // and makes it look like it's pulsing
  @keyframes pulse {
    0% { box-shadow: 0 0 20px rgba(82, 242, 19, 0.6); }
    50% { box-shadow: 0 0 40px rgba(84, 255, 16, 0.8); }
    100% { box-shadow: 0 0 20px rgba(82, 242, 19, 0.6); }
  }

  &:hover {
    transform: translateY(-10px);
    animation: pulse 2s infinite;
    border: 2px solid rgba(82, 242, 19, 0.5);
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

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 640px) {
    padding: 8px;
    gap: 8px;
  }

  @media (max-width: 480px) {
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
  transition: color 0.3s ease;

  @media (max-width: 640px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
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
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  margin-bottom: 5px;
  box-shadow: 0 4px 6px rgba(242, 118, 19, 0.1);
  border: 2px solid transparent;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.05) translateY(-5px);
    box-shadow: 
      0 8px 20px rgba(82, 242, 19, 0.6),
      0 0 15px rgba(82, 242, 19, 0.4),
      inset 0 0 10px rgba(82, 242, 19, 0.2);
    border: 2px solid rgb(82, 242, 19);

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
  transition: all 0.3s ease;

  @media (max-width: 640px) {
    font-size: 14px;
    max-width: 160px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    max-width: 130px;
    min-height: 35px;
  }

  @media (max-width: 360px) {
    font-size: 12px;
    max-width: 110px;
    min-height: 30px;
  }
`;