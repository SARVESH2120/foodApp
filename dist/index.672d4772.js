const heading = React.createElement("h1", {
    id: "title",
    xyz: "abc"
}, "Hello from React JS");
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {
        id: "superChild"
    }, "I am an h1 tag"),
    React.createElement("h2", {
        id: "SupeSibling"
    }, "I am an h2 tag")
]));
console.log(heading); //object
root.render(parent);

//# sourceMappingURL=index.672d4772.js.map
