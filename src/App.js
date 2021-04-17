import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/userSelectors";
import { checkUserSession } from "./redux/user/userActions";

import "./App.css";

import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Sign from "./pages/Sign/Sign";
import Checkout from "./pages/Checkout/Checkout";
class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {checkUserSession} = this.props
    checkUserSession()
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    console.log(this.props.currentUser)
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/sign"
            render={() =>
              
              this.props.currentUser ? <Redirect to="/" /> : <Sign />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
