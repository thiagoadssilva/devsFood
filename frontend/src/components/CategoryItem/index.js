import React from 'react';
import {Container, CategoryImage} from './styled';

export default ({data, activeCategory, setActiveCategory}) => {

    const handleCategotyClick = () =>{
        setActiveCategory(data.id);
    }

    return(
        <Container 
            active={activeCategory} 
            id={data.id}
            onClick={handleCategotyClick}
            data-tip={data.name}
            data-for="tip-top"
        >
            <CategoryImage src={data.image} />
        </Container>
    );
}