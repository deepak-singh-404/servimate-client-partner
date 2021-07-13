import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import LoginPage from './pages/Login'
import Job from './pages/Job'




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/jobs' component={Job} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
