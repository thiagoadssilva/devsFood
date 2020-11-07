import styled from 'styled-components';


export const Container = styled.div`
    width: 80px;
    height: 80px;
    background-color: ${props => props.active == props.id ? '#FFF' : '#AAE09A'};
    border-radius: 20px; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
    transition: all ease .3s;
`;

export const CategoryImage = styled.img`
    width: 50px;
    height: 50px;

`;