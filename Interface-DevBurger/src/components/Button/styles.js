import styled from 'styled-components';

export const ContainerButton = styled.button`
    width: 100%;
    height: 50px;
    background-color: #000;
    color: #fff;
    font-size: 1.7rem;
    font-weight: bolder;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        background-color: #fff;
        color: #000;
    }
`;