import React, { Component } from "react";

class Logo extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <header>
          <h1>Welcome to the {this.props.appName}</h1>

          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
            alt="pokemon "
            onClick={this.props.handleClick}
          />
        </header>
        <button onClick={this.props.handleClick}>Click me</button>
      </div>
    );
  }
}

export default Logo;
