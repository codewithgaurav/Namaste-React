import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import Grocery from "./components/Grocery/Grocery";
import Cart from "./components/Cart/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Grocery />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurants/:resId",
                element: <ResMenu />
            }
        ],
        errorElement: <Error />
    }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

const arr = [1, 2, 3];
let result = 0;
for (const value in arr) {
    result += value;
}

console.log(result);