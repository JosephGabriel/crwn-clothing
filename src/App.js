import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Sign from "./pages/Sign/Sign";

import { auth, createUserProfile } from "./firebase/firebase";

import { setCurrentUser } from "./redux/user/userActions";
class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/sign" component={Sign} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
