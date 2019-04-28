import React, { Component } from "react";
/*
class Component {
  setState(something) {
    updatedState = something(this.state)
    this.state = updatedState
  }
}
*/

class CaughtPokemon extends Component {
  constructor(props) {
    console.log("component");
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState(previousstate => {
      return {
        count: previousstate.count + 1
      };
    });
  };
  componentDidMount = () => {
    console.log("componentDidMount");
  };
  componentWillUnmount = () => {
    console.log("componentWillUnmount");
  };
  render() {
    return (
      <div>
        <p>
          Caught {this.state.count} pokemon on {this.props.date}
        </p>
        <button onClick={this.increment}>catch pokemon</button>
      </div>
    );
  }
}

export default CaughtPokemon;
