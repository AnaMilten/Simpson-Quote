import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GenerateSimpson from './GenerateSimpson';
import DisplaySimpson from './DisplaySimpson';


const sampleQuote = {
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  quote : "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
};




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      item: sampleQuote,
    };
  }
  
  getQuote() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=5")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          item: data[0],
        });
    });
}


  render() {



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Get Simpson's Quotes</h1>
        </header>

        <GenerateSimpson  selectSimpson={() =>  this.getQuote()}  />
        <DisplaySimpson  item={this.state.item}  />


      </div>
    );
  }
}


export default App;