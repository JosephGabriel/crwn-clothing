import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { updateCollections } from "../../redux/shop/shopActions";
import { firestore, convertCollections } from "../../firebase/firebase";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection";
import WithSpinner from "../../components/WithSpinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionMaps = convertCollections(snapshot);
        updateCollections(collectionMaps);
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Route
          exact
          path={`${match.url}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.url}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner isLoading={this.state.loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMaps) =>
    dispatch(updateCollections(collectionMaps)),
});

export default connect(null, mapDispatchToProps)(Shop);
