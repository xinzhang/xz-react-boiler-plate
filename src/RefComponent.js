import React, { Component } from 'react';

class RefComponent extends Component {
  constructor() {
    super();
    this.state = { saying: 'Hi'};
    this.wrapper = React.createRef();
  }

  //wrapper = React.createRef();

  update() {
    this.setState( {saying: this.wrapper.current.value});
  }

  render() {
    return (
      <div>        
        Bob says <input type="text" ref={this.wrapper} onChange={this.update.bind(this)}/>
        {this.state.saying}
      </div>      
    );
  }
}

export default RefComponent;
