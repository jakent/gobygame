import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Landing from "./containers/Landing";
import Demo from "./containers/Demo";
import Game from "./containers/Game";
import Result from "./containers/Result";
import {UserProvider} from "./context/userContext";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/demo" component={Demo}/>
        <Route exact path="/game" component={Game}/>
        <Route exact path="/result" component={Result}/>
      </BrowserRouter>
    </UserProvider>
  )
};

export default App;
