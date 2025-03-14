import { useLayoutEffect } from 'react';
import styled from 'styled-components';



export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color:#b1b1b1;
`;

export const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100vh;
    background-color: #000;
`;

export const RightContainer = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100vh;
    background-color: #B1B1B1;
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    color: #000;
    text-align: center;
    margin-bottom: 20px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-bottom: 20px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 25px;
`;

export const Link = styled.a`
    color: #000;
    text-decoration: none;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    width: 100%;
    height: 40px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        background-color: #fff;
        color: #000;
    }
`;
