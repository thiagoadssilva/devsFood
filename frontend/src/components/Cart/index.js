import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    CartArea, 
    CartHeader, 
    CartBody, 
    CartIcon, 
    CartText, 
    CartDown,
    ProductArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductQuantityArea,
    ProductQtIcon,
    ProductQtText
} from './styled';

export default () =>{
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    const [show, setShow] = useState(true);

    const handleCartClick = () => {
        if(products.length > 0){
            setShow(!show);
        }
        
    }

    const handleProductChange = (key, type) =>{
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: {key, type}
        });
    }

    useEffect(() =>{
        if(products.length == 0){
            setShow(false);
        }
    },[products.length])

    return(
        <CartArea>

            <CartHeader onClick={handleCartClick} >
                <CartIcon src="/assets/cart.png"/>
                <CartText>
                    Meu Carrinho ({products.length})
                </CartText>
                {show &&
                    <CartDown src="/assets/down.png" />
                }
            </CartHeader>

            <CartBody show={show}>
                <ProductArea>
                    {products.map((item, index) =>(
                        <ProductItem key={index}>
                            <ProductPhoto src={item.image} />
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {(item.price).toFixed(2)}</ProductPrice>
                            </ProductInfoArea>
                            <ProductQuantityArea>
                                <ProductQtIcon 
                                    src="/assets/minus.png"
                                    onClick={()=>handleProductChange(index, '-')}
                                />
                                    <ProductQtText>{item.quantity}</ProductQtText>
                                <ProductQtIcon 
                                    src="/assets/plus.png"
                                    onClick={()=>handleProductChange(index, '+')}
                                />
                            </ProductQuantityArea>
                        </ProductItem>
                    ))}
                 
                </ProductArea>
            </CartBody>

        </CartArea>  
    );
}

