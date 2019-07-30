import React from "react";
import side_bar_buttons from "../Data";
import EditorField from './EditorField'
function EditorDrawer(props) {

  function Editor_Field(b){
   
  }
  return (
    <div className="editor-drawer">
     <EditorField className='editor-field html'/>
     <EditorField className='editor-field css'/>
     <EditorField className='editor-field js'/>
    </div>
  );
}

export default EditorDrawer;
