import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Routes
import Home from './components/Home';

const App = () => {
  // https://medium.com/@svinkle/how-to-deploy-a-react-app-to-a-subdirectory-f694d46427c1
  const root = '/';
  return (
    <BrowserRouter basename={root}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
