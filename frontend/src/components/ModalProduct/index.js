import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {
    Container,
    ProductArea,
    ProdutcPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea,
    ProductButtons,
    ProductName,
    ProductIngredients,
    ProductButton,
    ProductQuantity,
    ProductQtImage,
    ProductQtText,
    ProductPrice
} from './styled';

export default ({data, setStatus}) => {
    const dispatch = useDispatch();

    // INICIO - Funções que vão incrementar e decrementar a quantidade
    const [quantity, setQuantity] = useState(1);

    const handleMinusQt = () => {
        setQuantity(quantity + 1);
    }
    const handlePlusQtd = () => {
        if(quantity == 1){
            handleCancelButton();
        }
        setQuantity(quantity - 1);
    }
    // FIM - Funções que vão incrementar e decrementar a quantidade

    const handleCancelButton = () => {
        setStatus(false);
    }

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_PRODUCT',
            payload: {data, quantity}
        });
        setStatus(false);
    }

    return(
        <Container>
            
            <ProductArea>
                
                <ProdutcPhoto src={data.image} />

                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>

                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtImage onClick={handlePlusQtd} src="/assets/minus.png" />
                                <ProductQtText>{quantity}</ProductQtText>
                            <ProductQtImage onClick={handleMinusQt} src="/assets/plus.png" />
                        </ProductQuantity>
                        <ProductPrice>
                            R$ {(data.price * quantity).toFixed(2)}
                        </ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>

            </ProductArea>

            <ProductButtons>
                <ProductButton 
                    small={true} 
                    onClick={handleCancelButton}
                >
                Cancelar</ProductButton>
                <ProductButton onClick={handleAddToCart}>Adicionar ao Carrinho</ProductButton>
            </ProductButtons>

        </Container>
    );
}