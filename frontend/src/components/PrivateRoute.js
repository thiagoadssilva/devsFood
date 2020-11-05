import React from 'react';
import {Route, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';


export default ({children, ...rest}) =>{
    const history = useHistory();
    const token = useSelector(state => state.user.token);

    // Fazendo a validação do usuário para saber se o mesmo está logado, se não estiver volta para login
    if(!token || token == ''){
        history.push('/login');// Faz o redirecionamento para tela do login
        return null;// Para a execução
    }

    return(
        <Route {...rest}>
            {children}
        </Route>
    );
}