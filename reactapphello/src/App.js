import './App.css';
import BackendService from './services/BackendService';
import React, { useState } from "react";

function App() {
  const [textcontent,setTextContent] = useState("Init");

  function callBackEnd() {
    BackendService.getHello().then((res) => {
      setTextContent(res.data);
      console.log(res.data);
    });
  }

  return (
    <div className="App">
      <h2>Hello Pod</h2>
        <label>Value From Pod: </label>
        <label>{textcontent}</label><br/>
        <input type="button" value="ClickMe" onClick={callBackEnd}/>
    </div>
  );
}

export default App;
