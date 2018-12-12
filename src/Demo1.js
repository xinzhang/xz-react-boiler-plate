import React, { useState } from 'react';
import styled from 'styled-components';

function Demo1() {
  const [count, setCount] = useState(0);
  return (
    <StyledWrapper>
      Count: {count}
      <StyledButton onClick={() => setCount(0)}>Reset</StyledButton>
      <StyledButton onClick={() => setCount(count + 1)}>+</StyledButton>
      <StyledButton onClick={() => setCount(count - 1)}>-</StyledButton>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  margin: 2em;  
  font-szie: 1.5em;
`;

const StyledButton = styled.button`
  margin: 10px;
  padding: 10px;  
`;

export default Demo1;