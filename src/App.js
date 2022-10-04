import "./App.css";
import Home from "./components/HomePage/Home";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <Router>
        <div>
          <Route exact path="/" component={<NewBracketContainer />} />
          <Route exact path="/add-teams" component={<AddsTeamtContainer />} />
          <Route exact path="/match-view" component={<MatchViewContainer />} />
          <Route exact path="/game-won" component={<WinnerContainer />} />
        </div>
      </Router>
    </>
  );
}

export default App;
