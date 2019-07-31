import React, { useState, useEffect } from "react";

function Button(props) {
  const [isPressed, setPressed] = useState(false);
  const __notPressed = props.buttonClass;
  const __isPressed = props.buttonClass + " pressed";
  useEffect(() => {
    // alert(props.text);
    if (props.text === "css" || props.text === "js" || props.text === "html") {
      const editor_box = document.querySelector(`.editor-box.${props.text}`);
      editor_box.classList.toggle("close");
      const editor_drawer = document.querySelector(`.editor-drawer.${props.text}`);
      editor_drawer.classList.toggle("close");
    }
  }, [isPressed, props.text]);
  return (
    <div
      onClick={() => {
        return setPressed(!isPressed);
      }}
      className={isPressed === false ? __notPressed : __isPressed}
    >
      <img src={props.imgsrc} alt={props.text}></img>
    </div>
  );
};

export default Button;
