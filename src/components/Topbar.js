import React from "react";
import Button from "./Button";

const Topbar = (props) => {
  return (
    <div className={props.panelName}>
        <Button buttonClass="btn exit" buttonTextClass="txt" text="exit" />
        <Button buttonClass="btn run" buttonTextClass="txt" text="run" />
        <Button buttonClass="btn run" buttonTextClass="txt" text="save" />
    </div>
  )
};

export default Topbar;
