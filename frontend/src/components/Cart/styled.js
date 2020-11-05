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
    color: #FFF;
    font-size: 17px;
`;

export const CartBody = styled.div`

`;