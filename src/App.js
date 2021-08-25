import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import MusicSingle from "./pages/MusicSingle";


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/music/:id" component={MusicSingle} />
          <Route path="/page/:pageToken" component={Home} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

 
