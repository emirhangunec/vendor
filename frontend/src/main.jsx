import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// components
import Home from "./pages/Home";
import Vendors from "./pages/Vendors";
import App from "./App";
import VendorDetails from "./pages/VendorDetails";

// router
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/vendors",
                element: <Vendors />,
            },
            {
                path: "/vendors/:id",
                element: <VendorDetails />,
            },
        ],
    },
]);
ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById("root")
);
