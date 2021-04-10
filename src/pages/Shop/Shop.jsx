import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopItems } from "../../redux/shop/shopSelectors";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

const Shop = ({ collections }) => {
  return (
    <div>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems,
});

export default connect(mapStateToProps)(Shop);
