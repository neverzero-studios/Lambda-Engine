import React from "react";
import "./App.scss";
import Topbar from "./components/Topbar";
import Logo from "./components/Logo";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";


function App() {
  function CompileCode(_html, _css, _js, _window) {
		_window.open();

		_window.writeln(
			_html.value +
			"<style>" +
			_css.value +
			"</style>" +
			"<script>" +
			_js.value +
			"</script>"
		);
		_window.close();

	
	};
  return (
    <div className="App">
      <div className="banner-top">
        <Logo />
        <Topbar panelName="top-bar" />
      </div>
      <div className="middle">
        <Sidebar />
        <div className='start-container'>
        <Editor
         id="editor-drawer"
         drawerName="editor-drawer html"
          containerName="editor-box html"
          titleBar="title-bar"
          className="editor-field html"
          tag="html"
          />
        <Editor
          id="editor-drawer"
          drawerName="editor-drawer css"
          containerName="editor-box css"
          titleBar="title-bar"
          tag="css"
          className="editor-field css"
          />
        <Editor
          id="editor-drawer"
          drawerName="editor-drawer js"
          containerName="editor-box js"
          titleBar="title-bar"
          tag="js"
          className="editor-field js"
          />
          </div>
        <iframe class='preview'></iframe>
      </div>
    </div>
  );
}

export default App;
