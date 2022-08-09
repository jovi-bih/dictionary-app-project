import React from "react";
import logo from "./Dic icon2.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo 
        img-fluid"
            alt="Dictionary logo"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="woman coding" />
        </main>
        <footer className="App-footer">
          <small> Coded by Bih Jovi</small>
        </footer>
      </div>
    </div>
  );
}
