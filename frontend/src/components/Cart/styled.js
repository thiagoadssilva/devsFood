import styled from 'styled-components';

export const CartArea = styled.div`
    background-color: #136713;
    border-top-left-radius: 10px; // Coloca uma bordar curvada nas ponto superior da esquerda
    border-top-right-radius: 10px; // Coloca uma bordar curvada nas ponto superior da esquerda
    position: fixed; // Deixa a posição dele fixa em uma area
    bottom: 0px; // Tira todo espaço que estiver abaixo do componente.
    right: 30px; // Deixa um espaço de 30px do lado direito
`;

export const CartHeader = styled.div`
    width: 290px; // Colocando uma largura
    height: 50px; // Colocando uma altura
    display: flex; // Permite que os itens fiquem um ao lado do outro.
    align-items: center; // deixa um alinhamento no centro da altura
    cursor: pointer; // coloca um cursor diferente para apresentar um clique
`;

export const CartIcon = styled.img`
    width: 23px;
    height: auto;
    margin-left: 10px;
    margin-right: 10px;
`;

export const CartText = styled.text`
    flex: 1;
    color: #FFF;
    font-size: 17px;
`;

export const CartBody = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    color: #FFF;
`;

export const CartDown = styled.img`
    width: 23px;
    height: auto;
    margin-right: 10px;
`;

export const ProductArea = styled.div`

`;
export const ProductItem = styled.div`
    display: flex;
    margin: 10px;
`;
export const ProductPhoto = styled.img`
    width: 64px;
    height: auto;
    border-radius: 10px;
`;
export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px;
`;
export const ProductName = styled.div`
    font-size: 15px;
    font-weight: bold;
`;
export const ProductPrice = styled.div`
    font-size: 13px;
`;
export const ProductQuantityArea = styled.div`
    display: flex;
    align-items: center
`;

export const ProductQtIcon = styled.img`
    width: 13px;
    height: auto;
    cursor: pointer;  
`;
export const ProductQtText = styled.div`
    font-size: 13px;
    font-weight: bold;
    margin: 0 5px
`;