import React from 'react';
import {Container, ModalBody} from './styled';

export default ({ children, status, setStatus }) => {

    const handleModalClick  =  (e) =>{
        if(e.target.classList.contains('modalBg')){
            setStatus(false);
        }
        console.log(e.target.className);
    }

    return(
        <>
            {status == true &&
                <Container onClick={handleModalClick} className="modalBg">
                
                    <ModalBody>
                            {children}
                    </ModalBody>
                
                </Container>
            }
        </>
        
    );
}