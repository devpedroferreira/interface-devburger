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
background: linear-gradient(rgba(27,0,0, 0.8), rgba(27,27,27, 0.4), rgba(27,27,27, 0.5)),

    
`;

export const BannerMenu = styled.div`
    background-image: url(${BgBannerMenu});
    max-width: 100%;
    height: 420px;
    display: flex;
    justify-content: flex-end;

    .banner-text {
        display: flex;
        flex-direction: column;
        justify-content: right;
        margin-right: 250px;
        margin-top: 130px;
    }

    h1 {
        font-size: 50px;
        color: #fff;
        -webkit-text-stroke: 1px #000;

        span {
    font-size: 75px;
    color: #f27613;
    font-weight:1200;
    margin-left: 10px;
    animation: ${pulseOrange} 3s infinite;
    text-shadow: 0 0 10px rgba(242, 118, 19, 0.6),
                0 0 20px rgba(242, 118, 19, 0.4);
    transition: all 0.3s ease;
    -webkit-text-stroke: 1px #000; /* Add text stroke effect */
    }
    }

    h2 {
        font-size: 30px;
        color: #fff;
        font-weight: 900;
        margin-top: 10px;
        margin-left: 10px;
        -webkit-text-stroke: 1px #000;
    }
`;

export const CategoryMenu = styled.div`
    
`;


export const ProductsContainer = styled.div`
    
`;
