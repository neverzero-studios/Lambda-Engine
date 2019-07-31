import React from "react";
import Button from "./Button";
import TopBar_data from '../Data/TB_DATA'

function Topbar(props) {
  var createButton = b => {
    return (
      <Button
        key={b.text.toUpperCase()}
        buttonClass={b.buttonClass}
        buttonTextClass={b.buttonTextClass}
        text={b.text}
        imgsrc={b.imgsrc}
      />
    );
  };
  return (
    <div className={props.panelName}>
      {TopBar_data.map(button => {
        return createButton(button);
      })}
    </div>
  )
};

export default Topbar;
