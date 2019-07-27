import React from "react";
import "./App.scss";
import Topbar from "./components/Topbar";
import Logo from "./components/Logo";
import Sidebar from "./components/Sidebar";
import PreviewWindow from "./components/PreviewWindow";
function App() {
  return (
    <div className="App">
      <div className="banner-top">
        <Logo />
        <Topbar panelName="top-bar" />
      </div>
      <div className="middle">
        <Sidebar />
        <PreviewWindow />
      </div>
      <div className="banner-bottom" />
    </div>
  );
}

export default App;
/* 
  
  <body/>
    <nav-bar> [ [X] WORKING]  [ [] DONE]
    <editor>  [ [] WORKING]  [ [] DONE]
      --toggle buttons  [ [] WORKING]  [ [] DONE]
      --code areas {HTML, CSS, JS}  [ [] WORKING]  [ [] DONE]
      --expand draggable  [ [] WORKING]  [ [] DONE]
      --tools    [ [] WORKING]  [ [] DONE]
    <preview> // TOMORROW <------||


*/
