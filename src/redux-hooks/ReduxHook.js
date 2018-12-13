import React, { useContext } from "react";
import { connect, Store, Provider } from "./store";

const mapStateToProps = (state, props) => ({
  message: `${state.data} ${props.extra}`
});

const mapDispatchToProps = dispatch => ({
  sendMsg: () => dispatch({ type: "RESET_DATA", payload: "null" })
});

const Data = props => {
  return (
    <div>
      {props.message}
      <button onClick={() => props.sendMsg()}>
        Reset From MapDispatchToProps Function
      </button>
    </div>
  );
};

// An example of functional component using the connect HoC (works also with classes)
const ConnectedData = connect(
  mapStateToProps,
  mapDispatchToProps
)(Data);

// An example of functional component using the useContext
const Controls = () => {
  const { dispatch } = useContext(Store);

  return (
    <div>
      <button
        onClick={() =>
          dispatch({ type: "FETCH_DATA", payload: "Hello world!" })
        }
      >
        Fetch Data
      </button>
      <button onClick={() => dispatch({ type: "RESET_DATA", payload: null })}>
        Reset
      </button>
    </div>
  );
};

const ReduxHook = () => {
  return (
    <div className="App">
      <Provider>
        {/* This is an equivalent to the react-redux Provider component */}        
          <h1>React {React.version}</h1>
          <Controls />
          <ConnectedData extra="TEST" />
      </Provider>
    </div>
  );
};

export default ReduxHook;