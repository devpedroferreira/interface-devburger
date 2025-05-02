import styled from 'styled-components';
import BgBannerMenu from '../../assets/BgBannerMenu.svg';
import { keyframes } from 'styled-components';

const pulseOrange = keyframes`
  0% { text-shadow: 0 0 10px rgba(242, 118, 19, 0.6),
                    0 0 20px rgba(242, 118, 19, 0.4); }
  50% { text-shadow: 0 0 20px rgba(242, 118, 19, 0.8),
                     0 0 40px rgba(242, 118, 19, 0.6),
                     0 0 60px rgba(242, 118, 19, 0.4); }
  100% { text-shadow: 0 0 10px rgba(242, 118, 19, 0.6),
                      0 0 20px rgba(242, 118, 19, 0.4); }
`;

export const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: linear-gradient(rgba(27,0,0, 0.8), rgba(27,27,27, 0.4), rgba(27,27,27, 0.5)),

    
`;

export const BannerMenu = styled.div`
    background-image: url(${BgBannerMenu}); 
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 380px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 40px;

    .banner-text {
        display: flex;
        flex-direction: column;
        justify-content: right;
        margin-right: 75px;
        margin-top: 20px;
    }

    h1 {
        font-size: 50px;
        color: #fff;
        text-align: right;
        -webkit-text-stroke: 1px #000;

        span {
            font-size: 70px;
            color: #f27613;
            font-weight: 900;
            margin-left: 10px;
            animation: ${pulseOrange} 3s infinite;
            text-shadow: 0 0 10px rgba(242, 118, 19, 0.6),
                        0 0 20px rgba(242, 118, 19, 0.4);
            transition: all 0.3s ease;
            -webkit-text-stroke: 1px #000;
        }
    }

    h2 {
        font-size: 30px;
        color: #fff;
        font-weight: 900;
        margin-top: 10px;
        text-align: right;
        -webkit-text-stroke: 1px #000;
    }

    @media (max-width: 768px) {
        height: 300px;
        padding: 20px;
        
        .banner-text {
            margin-right: 30px;
        }

        h1 {
            font-size: 40px;
            
            span {
                font-size: 55px;
            }
        }

        h2 {
            font-size: 24px;
        }
    }

    @media (max-width: 480px) {
        height: 250px;
        padding: 15px;
        
        .banner-text {
            margin-right: 20px;
        }

        h1 {
            font-size: 32px;
            
            span {
                font-size: 45px;
            }
        }

        h2 {
            font-size: 20px;
        }
    }
`;

export const CategoryMenu = styled.div`
    
`;


export const ProductsContainer = styled.div`
    
`;
