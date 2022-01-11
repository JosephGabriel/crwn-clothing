import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./CollectionOverview.scss";

import CollectionPreview from "../CollectionPreview/CollectionPreview";

import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";

export const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
