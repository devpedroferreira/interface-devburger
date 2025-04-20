import styled from 'styled-components';

import BannerHome from '../../assets/bgHome.svg';
import LoginBg from '../../assets/loginBg.svg';
// This file contains styled components for the Home page

export const Banner = styled.div`
    background: url(${BannerHome}) no-repeat center;
    background-size: cover;
    background-position: center;
    height: 380px;
    display: flex;
    justify-content: flex-end; // This aligns content to the right
    padding: 40px; // Add some padding to prevent text touching the edge

    h1 {
        font-size: 55px;
        font-weight: 700;
        color: #fff;
        margin: 0; // Remove default margins
        text-align: right; // Align text to the right
        
        span {
            font-size: 70px;
            color: #f27613;
            font-weight: 900;
            margin-left: 10px; // Add space between text and span
        }
    }

    // Responsive design for smaller screens
    @media (max-width: 768px) {
        height: 300px;
        h1 {
            font-size: 40px;
        }
    }
`;

export const Container = styled.section`
    background: linear-gradient(rgba(27,0,0, 0.8), rgba(27,27,27, 0.4), rgba(27,27,27, 0.5)),
    url(${LoginBg});
    background-size: cover;

    
    height: auto;
`;
// carrossel
export const Content = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 20px;
  height: auto;

  strong {
    font-size: 42px;
    color: #f27613;
    display: block;
    text-align: center;
    margin: 40px 0 20px;
  }
  
`;