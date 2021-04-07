import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Sign from "./pages/Sign/Sign";

import { auth, createUserProfile } from "./firebase/firebase";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/sign" component={Sign} />
        </Switch>
      </div>
    );
  }
}

export default App;
