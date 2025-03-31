import styled from 'styled-components';
import BannerHome from '../../assets/bgHome.svg';

export const Banner = styled.div`
    background: url(${BannerHome}) no-repeat center;
    background-size: cover;
    background-position: center;
    height: 480px;
    display: flex;

    h1 {
        font-size: 80px;
        font-weight: 700;
        color: #fff;
        margin: auto;
    }
    @media (max-width: 768px) {
        height: 300px;
        h1 {
            font-size: 40px;
        }
    }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;

export const Content = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
    
    div {
        flex: 1;
        padding: 20px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
`;