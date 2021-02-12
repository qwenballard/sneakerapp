import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './assets/styles.scss';



import Home from './Pages/Home/Home.js';
import Login from './Pages/Login/Login.js';
import Signup from './Pages/Signup/Signup.js';
import Settings from './Pages/Settings/Settings.js';
import Wishlist from './Pages/Wishlist/Wishlist.js';
import SneakerPage from './Pages/SneakerPage/SneakerPage.js';



function App() {
  const [authorized, setAuthorization] = useState(false);
  const [user, setUser] = useState({});

  const isLoggedIn = () => {
     fetch("/login")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if(Object.keys(data).length !== 0){
          setUser(data);
          setAuthorization(true);
        }
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  const isAuthorized = !authorized ? (
    //Navbar that hides the wishlist and profile Pages and links
    <nav
      className="navbar container"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io"></a>

        <a
          role="button"
          className="navbar-burger burger"
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
        <div className="navbar-end">
          <a className="navbar-item">
            <Link to="/">Home</Link>
          </a>

          <a className="navbar-item">
            <Link to="/login">Login</Link>
          </a>

          <a className="navbar-item">
            <Link to="/signup">Sign Up</Link>
          </a>
        </div>
      </div>
    </nav>
  ) : (
    //Navbar that shows the wishlist and profile Pages and links
    <nav
      className="navbar container"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io"></a>

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
        <div className="navbar-end">
          <a className="navbar-item">
            <Link to="/">Home</Link>
          </a>

          <a className="navbar-item">
            <Link to="/profile/wishlist">Wishlist</Link>
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Settings</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                <Link to="/profile/settings">My Account</Link>
              </a>
              {/* Include this functionality later */}
              {/* <a class="navbar-item">Log Out</a>*/}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <React.Fragment>
      <Router>
        <div>
          {isAuthorized}

          <Switch>
            <Route exact path="/profile/wishlist">
              <Wishlist {...user} authorized={authorized} />
            </Route>
            <Route exact path="/profile/settings">
              <Settings {...user} authorized={authorized} />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/sneakers/:id">
              <SneakerPage />
            </Route>
            <Route exact path="/">
              <Home {...user} authorized={authorized} />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}


export default App;