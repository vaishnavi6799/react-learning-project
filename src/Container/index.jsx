import React, { memo } from 'react';
import { StyledContainer } from './styles';

const Container = ({ children }) => (
  <main>
    <StyledContainer maxWidth ={false}>
      {children}
    </StyledContainer>
  </main>
);

export default memo(Container);
