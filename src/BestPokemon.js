import React, { Component } from "react";

class BestPokemon extends Component {
  render() {
    return (
      <ul>
        {this.props.pokemonNames.map(names => {
          return <li key={names}>{names}</li>;
        })}
      </ul>
    );
  }
}

export default BestPokemon;
