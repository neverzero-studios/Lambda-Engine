import React from "react";

function EditorField(props) {
  return (
    <div className={props.containerName}>
      <div className={props.titleBar}>
        <p>{props.tag}</p>
      </div>
      <textarea
        onKeyDown={e => {
          if (e.keyCode === 9) {
            e.preventDefault();
          }
        }}
        className={props.className}
        id={props.id}
      />
    </div>
  );
}
export default EditorField;
