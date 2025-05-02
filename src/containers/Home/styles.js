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
    justify-content: flex-end;
    align-items: center;
    padding: 40px;

    h1 {
        font-size: 55px;
        font-weight: 700;
        color: #fff;
        margin: 0;
        text-align: right;
        
        span {
            font-size: 70px;
            color: #f27613;
            font-weight: 900;
            margin-left: 10px;
            transition: all 0.3s ease;
        }
    }

    @media (max-width: 1024px) {
        height: 340px;
        padding: 30px;
        
        h1 {
            font-size: 48px;
            
            span {
                font-size: 60px;
            }
        }
    }

    @media (max-width: 768px) {
        height: 300px;
        padding: 25px;
        
        h1 {
            font-size: 40px;
            
            span {
                font-size: 50px;
                margin-left: 8px;
            }
        }
    }

    @media (max-width: 480px) {
        height: 260px;
        padding: 20px;
        
        h1 {
            font-size: 32px;
            
            span {
                font-size: 40px;
                margin-left: 6px;
            }
        }
    }

    @media (max-width: 360px) {
        height: 220px;
        padding: 15px;
        
        h1 {
            font-size: 28px;
            
            span {
                font-size: 34px;
                margin-left: 5px;
            }
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
        transition: all 0.3s ease;
    }

    @media (max-width: 1024px) {
        padding: 15px;
        
        strong {
            font-size: 38px;
            margin: 30px 0 15px;
        }
    }

    @media (max-width: 768px) {
        padding: 12px;
        
        strong {
            font-size: 34px;
            margin: 25px 0 12px;
        }
    }

    @media (max-width: 480px) {
        padding: 10px;
        
        strong {
            font-size: 30px;
            margin: 20px 0 10px;
        }
    }

    @media (max-width: 360px) {
        padding: 8px;
        
        strong {
            font-size: 26px;
            margin: 15px 0 8px;
        }
    }
`;