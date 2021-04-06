import React, { Component } from "react";

import { SHOP_DATA } from "../../data/shop";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
