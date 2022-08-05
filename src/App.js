import './App.css';
import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {

  const [{ user }, dispatch] = useStateValue();
  console.log("USER STATE -> ", user)

  useEffect(() => {
    // Will only run once when the app component loads...
    auth.onAuthStateChanged((user) => {
      console.log('THE USER >>> ', user);

      if (user) {
        // user is logged in so dispatch to state 
        dispatch({
          type: "SET_USER",
          user: user,
        })

      } else {
        // if user is not logged in, dispatch null
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [])
  console.log("USER STATE -> ", user)
  console.log(auth.currentUser)
  return (
    // BEM
    <Router>
      <div className="App">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        <button onClick={() => {
          auth.signOut()
        }}>SIGNOUT</button>
      </div>
    </Router>
  );
}

export default App;