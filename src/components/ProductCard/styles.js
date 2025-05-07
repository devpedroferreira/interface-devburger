import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(242, 118, 19, 0.3);
    }
`;

export const ProductImage = styled.div`
    width: 100%;
    height: 200px;
    background-image: ${({ $imageUrl }) => `url(${$imageUrl})`};
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    position: relative;

    .price {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background: #f27613;
        color: #fff;
        padding: 5px 10px;
        border-radius: 20px;
        font-weight: bold;
    }
`;

export const ProductInfo = styled.div`
    h3 {
        color: #fff;
        font-size: 18px;
        margin-bottom: 5px;
    }

    p {
        color: #f27613;
        font-size: 14px;
        margin-bottom: 10px;
    }
`;