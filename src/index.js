import React from "react";
import ReactDOM from "react-dom";
import Example from "./example";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";


import "./styles.css";
import ContextProvider from "./ContextProvider";

function App() {
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <ContextProvider/>
      </DndProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
