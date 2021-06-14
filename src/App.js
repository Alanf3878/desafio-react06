import React, { Component } from 'react';

class Name extends Component {

  
  
  state ={
 
    count: 0
  };

add = () => (
  this.setState({
    count: this.state.count + 1
  })
)

decrease = () => (
  this.setState({
    count: this.state.count - 1
  })
  
)



  render(){
    return(

      <div>
        
        <p>{this.state.count}</p>

      <button onClick={this.add}>+</button>
      <button onClick={this.decrease}>-</button>

      </div>

    );
  }
}
export default Name;

