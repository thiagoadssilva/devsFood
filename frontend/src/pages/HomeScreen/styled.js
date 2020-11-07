import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 15px;
`;


export const CategoryArea = styled.div`
    color: #FFF;
    margin-top: 20px;
`;

export const CategoryList = styled.div`
    display: flex;
    margin-top: 10px;
`;

export const ProductArea = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
`;