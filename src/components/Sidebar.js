import React from "react";

import Button from "./Button";

const Sidebar = props => {
  return (
    <div className="side-bar">
      <Button buttonClass="btn" buttonTextClass="html txt" text="html" />
      <Button buttonClass="btn" buttonTextClass="css txt" text="css" />
      <Button buttonClass="btn" buttonTextClass="js txt" text="js" />
      <Button
        buttonClass="preview- btn"
        buttonTextClass="preview txt"
        text="preview"
      />
    </div>
  );
};

export default Sidebar;
