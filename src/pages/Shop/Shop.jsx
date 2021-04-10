import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection";

const Shop = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.url}`} component={CollectionOverview} />
      <Route path={`${match.url}/:collectionId`} component={Collection} />
    </div>
  );
};

export default connect()(Shop);
