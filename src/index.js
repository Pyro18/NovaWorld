import React from "react";
import ReactDOM from "react";

import "./index.css";

function App() {
  return (
    <div className = "App">
      <div className="container">
        <h1>
          cose da modificare
          <br />
          WELLLAAAA
        </h1>

      </div>

    </div>

  );
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
