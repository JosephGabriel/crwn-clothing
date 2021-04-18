import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { fetchCollectionsStart } from "../../redux/shop/shopActions";

import CollectionContainer from "../Collection/CollectionContainer";
import CollectionOverviewContainer from "../../components/CollectionOverview/CollectionOverviewContainer";

class Shop extends Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Route
          exact
          path={`${match.url}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.url}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
