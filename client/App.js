import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './assets/styles.scss';



import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Settings from './components/Settings/Settings';
import Wishlist from './components/Wishlist/Wishlist';



function App() {

  return (
    <React.Fragment>
      <Router>
        <div>
          <nav class="navbar container" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://bulma.io"></a>

              <a
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item">
                  <Link to="/">Home</Link>
                </a>

                <a class="navbar-item">
                  <Link to="/login">Login/Sign Up</Link>
                </a>

                <a class="navbar-item">
                  <Link to="/profile/wishlist">Wishlist</Link>
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">Settings</a>

                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      <Link to="/profile/settings">My Account</Link>
                    </a>
                    <a class="navbar-item">
                        Log Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          

          <Switch>
            <Route exact path="/profile/wishlist">
              <Wishlist />
            </Route>
            <Route exact path="/profile/settings">
              <Settings />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}


export default App;