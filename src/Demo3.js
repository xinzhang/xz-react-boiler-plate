import React, { useContext } from 'react';
import styled from 'styled-components';

const TestContext = React.createContext();

function Display( {className}) {
  const value = useContext(TestContext);
  return <div className={className}>{value}, useContext react hooks</div>
}

const StyledDisplay = styled(Display)`
  margin-top: 2em;
`

export default function Demo3() {
  return(
    <TestContext.Provider value={"Kalem"}>
      <StyledDisplay />
    </TestContext.Provider>
  )
}