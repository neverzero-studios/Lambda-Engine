import React from "react";
import EditorField from "./EditorField";

function Editor(props) {
  var dragItem;
  var active = false;

  var curX,
    curY,
    initX,
    initY,
    xoffset = 0,
    yoffset = 0;

  function dragStart(e) {
    dragItem = e.target;
    initX = e.clientX - xoffset;
    initY = e.clientY - yoffset;
    if (e.target.id === "editor-drawer") {
      e.target.classList.add("drag");
      active = true;
    }
  }

  function dragEnd(e) {
    dragItem = e.target;
    initX = curX;
    initY = curY;

    active = false;

    e.target.classList.remove("drag");
  }
  function drag(e) {
    if (active) {
      // dragItem = e.target;
      e.preventDefault();

      curX = e.clientX - initX;
      curY = e.clientY - initY;

      xoffset = curX;
      yoffset = curY;

      setTranslate(curX, curY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    console.log("xPos: " + xPos);
    console.log("yPos: " + yPos);

    el.style.transform = `translate(${xPos}px, ${yPos}px)`;
  }
 
  return (
    <div
      id="editor-drawer"
      className={props.drawerName}
      onMouseDown={event => dragStart(event)}
      onMouseOut={event => dragEnd(event)}
      onMouseUp={event => dragEnd(event)}
      onMouseMove={event => drag(event)}
    >
      <EditorField
        containerName={props.containerName}
        titleBar={props.titleBar}
        className={props.className}
        tag={props.tag}
      />
    </div>
  );
}

export default Editor;
