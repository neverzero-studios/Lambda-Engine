import React from "react";
import Button from "./Button";
import side_bar_buttons from '../Data/SB_DATA';

function Sidebar(props) {
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
    <div className="side-bar">
      {side_bar_buttons.map(button => {
        return createButton(button);
      })}
    </div>
  );
};

export default Sidebar;
