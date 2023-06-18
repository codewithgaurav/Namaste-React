import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/header";
import Body from "./components/Body";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

function x() {
    let a = 10;
    function y() {
        console.log(a);
    }
    a = 100;
    y();
}

console.log(x());