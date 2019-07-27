import React from "react";
import { useState } from "react";

const Button = props => {
  const __notPressed = props.buttonClass;
  const __isPressed = props.buttonClass + " flipped";
  const [isPressed, setPressed] = useState(false);

  return (
    <div
      onClick={() => setPressed(!isPressed)}
      className={isPressed === false ? __notPressed : __isPressed}>
      <p className={props.buttonTextClass}>{props.text}</p>
    </div>
  );
};

export default Button;
