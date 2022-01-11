import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./DirectoryMenu.scss";

import { selectDirectorySections } from "../../redux/directory/directorySelectors";

import MenuItem from "../MenuItem/MenuItem";

export const DirectoryMenu = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(DirectoryMenu);
