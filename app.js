const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "Child" }, React.createElement("h1", { id: "heading2" }, "I am an H1 Tag!"))
);

const heading = React.createElement("h1", { id: "heading", abc: "xyz" }, "Hello World 🙏");

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);

root.render(parent);
root.render(heading);
