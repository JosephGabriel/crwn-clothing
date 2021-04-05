import React, { Component } from "react";

import "./DirectoryMenu.scss";

import { SHOP_DATA } from "../../data/data";

import MenuItem from "../MenuItem/MenuItem";

class DirectoryMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
