import styled from 'styled-components';
import LoginBg from '../../assets/loginBg.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    
`;

export const LeftContainer = styled.div`
    background: url(${LoginBg});
    background-size: cover;
    background-position: center;
    
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
    max-width: 50%;
    
    /* slide */
    .slider-container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slider-container img {
        width: 180%;
        height: 90%;
        margin-left: 120px;
        object-fit: contain;
        position: absolute;
        transition: opacity 0.5s ease-in-out;
    }
    /* 1 Boss Double */
     .slider-container img[alt="Hamburger-1"] { /* BossAbacaxi */
        margin-left: 18%; /* Moved 50px to the left */
        width: 180%; /* Slightly larger */
        height: 170%;
    }
    /* 2 Boss abacaxi */
     .slider-container img[alt="Hamburger-2"] { /* BossAbacaxi */
        margin-left: 2%; /* Moved 50px to the left */
        width: 100%; /* Slightly larger */
        height: 90%;
    }
    /* 3 Boss calabresa */
     .slider-container img[alt="Hamburger-3"] { /* BossAbacaxi */
        margin-left: 20%; /* Moved 50px to the left */
        width: 180%; /* Slightly larger */
        height: 200%;
    }
    /* 4 Boss Caramelo */
     .slider-container img[alt="Hamburger-4"] { /* BossCaramelo */
        width: 160%; /* Bigger size */
        height: 200%;
        margin-left: 2.5%; /* Adjusted position */
        margin-bottom: 15%;
    }
    /* 5 Boss Cheddar */
     .slider-container img[alt="Hamburger-5"] { /* BossCaramelo */
        width: 160%; /* Bigger size */
        height: 260%;
        margin-left: 5%; /* Adjusted position */
    }
    /* 6 Boss Churras */
     .slider-container img[alt="Hamburger-6"] { /* BossCaramelo */
        width: 100%; /* Bigger size */
        height: 90%;
        margin-left: 10%; /* Adjusted position */
    }
    /* 7 Bos Mussarela */
     .slider-container img[alt="Hamburger-7"] { /* BossCaramelo */
        width: 100%; /* Bigger size */
        height: 300%;
        margin-left: 30px; /* Adjusted position */
    }
    /* 8 Boss Onion */
     .slider-container img[alt="Hamburger-8"] { /* BossCaramelo */
        width: 100%; /* Bigger size */
        height: 110%;
        margin-left: 30px; /* Adjusted position */
    }
    /* 9 Boss Quateirao */
     .slider-container img[alt="Hamburger-9"] { /* BossCaramelo */
        width: 110%; /* Bigger size */
        height: 100%;
        margin-left: 30px; /* Adjusted position */
    }
    .slider-container img.active {
        z-index: 1;
        opacity: 1;
    }

    .slider-container img:not(.active) {
        opacity: 0;
    }

    .slider-indicators {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 10px;
        z-index: 2;
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