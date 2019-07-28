import React, { useState } from "react";
import "./App.scss";
import Topbar from "./components/Topbar";
import Logo from "./components/Logo";
import Sidebar from "./components/Sidebar";
import DrawerHandle from "./components/DrawerHandle";
import EditorDrawer from "./components/EditorDrawer";

function App() {
  return (
    <div className="App">
      <div className="banner-top">
        <Logo />
        <Topbar panelName="top-bar" />
      </div>
      <div className="middle">
        <Sidebar />
        <EditorDrawer />
      </div>
      <div className="banner-bottom" />
    </div>
  );
}

export default App;
/* 
  
  <body/>
    <nav-bar> [ [X] WORKING]  [ [] DONE]
    // TOMORROW <------||
    <editor>  [ [] WORKING]  [ [] DONE]
      --toggle buttons  [ [X] WORKING]  [ [] DONE]
      --code areas {HTML, CSS, JS}  [ [] WORKING]  [ [] DONE]
      --expand draggable  [ [] WORKING]  [ [] DONE]
      --tools    [ [X] WORKING]  [ [] DONE]
    <preview> 


*/
