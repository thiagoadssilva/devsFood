import React from 'react';
import { LinkArea, LinkIcon } from './styled';
import { useHistory, useLocation } from 'react-router-dom';

export default ({ icon, link, title }) =>{
    // Variaveis INICIO
    const history = useHistory();
    const location = useLocation();

    let isActive = location.pathname == link; // Aqui estamos pegando o item que foi clicado através do location
    // Variaveis FIM

    // Funções INICIO
    const handleLinkClick = (e) =>{
        e.preventDefault(); // Não deixa a pagina fazer o reload visualmente.
        history.push( link ); // Chamando o click do proprio link na linha 19
        
    }
    // Funções FIM

    return(
        <LinkArea 
            active={isActive} 
            href={link} 
            onClick={handleLinkClick}
            data-tip={title}
            data-for="tip-right"
        >
            <LinkIcon src={icon}/>
        </LinkArea>
    );
}