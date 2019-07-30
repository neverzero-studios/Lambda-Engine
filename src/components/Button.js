import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
const Button = props => {
  const [isPressed, setPressed] = useState(false);
  const __notPressed = props.buttonClass;
  const __isPressed = props.buttonClass + " pressed";
  useEffect(() => {
    // alert(props.text);
    if (props.text === "css" || props.text === "js" || props.text === "html") {
      const html_box = document.querySelector(`.editor-field.${props.text}`);
      html_box.classList.toggle("close");
    }
  }, [isPressed]);
  return (
    <div
      onClick={() => {
        return setPressed(!isPressed);
      }}
      className={isPressed === false ? __notPressed : __isPressed}
    >
      <p className={props.buttonTextClass}>{props.text}</p>
    </div>
  );
};

export default Button;
