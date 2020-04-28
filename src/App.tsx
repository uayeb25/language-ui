import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Language from "./views/language";

import './css/vendor/bootstrap/css/bootstrap.min.css';
import './css/main.css';

const App: React.FC = () => (
  <BrowserRouter>
      <Switch>
          <Route path="/languages" exact component={Language}/>
      </Switch>
  </BrowserRouter>
  
);

export default App;
