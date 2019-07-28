import React,{useState} from "react";



const Button = props => {
  const [isPressed, setPressed] = useState(false);
  const __notPressed = props.buttonClass;
  const __isPressed = props.buttonClass + " pressed";
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

