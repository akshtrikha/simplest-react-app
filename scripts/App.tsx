import React from "react";
import ReactDOM from "react-dom/client";

console.log("React", React);
console.log("ReactDOM: ", ReactDOM);

const App = () => {
    return <h1>You can start making changes to the source code now.</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)