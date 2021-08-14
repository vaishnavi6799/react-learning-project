import React from 'react';
import { HeaderContainer } from './styles';

const Header = ()=>{

const headerText = "Project V";
    return (
        <header>
        <HeaderContainer className="align-container">
            <p>{headerText}</p>
        </HeaderContainer>
        
      </header>
    );
};
export default Header; 