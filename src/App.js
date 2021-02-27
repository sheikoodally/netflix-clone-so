import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';

function App() {
  const user = null;
  return (
    <div className="app">
      <header className="App-header">
      </header>
      <Router>
        {!user? <LoginScreen/> : 
          (
            <Switch>

              <Route exact path="/">
                <HomeScreen />
              </Route>
              
            </Switch>
          )
        }
      </Router>
    </div>
  );
}

export default App;
