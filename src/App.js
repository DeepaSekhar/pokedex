import React, { Component } from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

//class App extends Component
class App extends Component {
  logWhenClicked = () => {
    console.log("it doesnt matter what is the message ");
  };
  handleMeow = () => {};

  render() {
    return (
      <div>
        <Logo appName="pokedex" handleClick={this.logWhenClicked} />
        <BestPokemon pokemonNames={["Squirtle", "Bulbasaur", "Charmander"]} />
        <CaughtPokemon date={new Date().toLocaleDateString()} />
        {/* <CaughtPokemon date={new Date().toLocaleDateString()} /> */}
      </div>
    );
  }
}

export default App;
