import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "This is WEB DEVELOPMENT!"),
        React.createElement("h1", {}, "Namaste React! Harsha"),
        React.createElement("h1", {}, "Namaste React! Rishika")
    ])
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)