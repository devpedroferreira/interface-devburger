import styled from 'styled-components';
import LoginBg from '../../assets/loginBg.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    
`;

export const LeftContainer = styled.div`
    background : url(${LoginBg}); // get image from assets
    background-size: cover;
    background-position: center;
    
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width:  100%;
    max-width: 50%;

    img {
        width: 180%;
        height: 90%;
        margin-left: 120px;
    }
`;

export const RightContainer = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100%;
    max-width: 50%;

    //background: url('${Background}');
    background-color: #1b1b1b;
    background-size: cover;
    
    img{
        width: 45%;
        height: 40%;
        margin-bottom: 20px;
    }
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
    span{
        color: #f27613
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-bottom: 20px;

    .RecuperarSenha{
    font-size:80%;
    margin-bottom: 25px;
    text-align: center;
    color: #f27613;
    text-decoration: none;
    cursor:pointer;
    }
    
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 60px;
    margin-bottom: 15px;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: bolder;
    
    label{
        color: #f27613
        
    }
    
    input{
        height: 35px;
        width: 100%;
        padding: 0 20px;
        border: none;
        border-radius: 25px;
        background-color: #fff;
        color: #000;
    }
    // span erro no input
    span{
        color: #b1b1b1;
        font-size: 82%;
        margin-top: 1%;
        height: 10px; // para nao pular quando aparecer
    }

    // eye button
    .password-container {
        position: relative;
        display: flex;
        align-items: center;
    }

    .eye-button {
        position: absolute;
        right: 10px;
        background: none;
        border: none;
        cursor: pointer;
        height: 35px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        
        &:hover {
            opacity: 0.8;
        }
    }
`;

export const Link = styled.a`
    color: #f27613;
    text-decoration: none;
    margin-bottom: 30px;
    cursor: pointer;
`;
