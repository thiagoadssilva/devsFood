import React, {useState} from 'react';
import {Container, Logo, SearchInput} from './styled';


export default ({search, onSearch}) => {
    const [inputActive, setInputActive] = useState(search == '' ? false : true);

    const handleInputFocus = () => {
        setInputActive(true);
    }

    const handleInputBlur = () => {
        if(search === ''){
            setInputActive(false);
        }
    }

    const handleSearch = (e) =>{
        onSearch(e.target.value);
    }

    return(
        <Container>
            <Logo src="assets/logo.png" />
            <SearchInput 
                type="text" 
                value={search}
                onChange={handleSearch}
                placeholder="Informe um produto..."
                active={inputActive}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </Container>
    );
}