import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css';
import {Route, RouterProvider,createRoutesFromElements} from 'react-router'
import { createBrowserRouter } from 'react-router';

/*
createRoutesFromElements(...): Converts JSX <Route> elements to route configs.
createBrowserRouter(...): Creates a router instance that uses the browser's history API (for clean URLs).
*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} />
  )
)

/*
document.getElementById("root"): Grabs the root div in your index.html.
ReactDOM.createRoot(...): Initializes the app (React 18 style).
<RouterProvider />: Injects the routing logic into your entire app using the router you just created.
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
