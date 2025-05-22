/* 
let root = document.querySelector("#root")

let h1 = document.createElement("h1")
h1.innerHTML = "Namaste React from JS"
root.appendChild(h1);
*/

/*

const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Namaste React from React!");

console.log(heading);
// heading is a React element/object.
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);
// render method is responsible for converting heading object into h1 tag and put in in webpage.

*/

/*
    <div id="parent">
        <div id="child">
            <h1>Namaste H1 React!</h1>
        </div>
    </div> 
*/


const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "Namaste Harsha React!"),
        React.createElement("h1", {}, "Namaste Rishika React!")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Namaste Harsha React!"),
        React.createElement("h1", {}, "Namaste Rishika React!")
    ])
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)