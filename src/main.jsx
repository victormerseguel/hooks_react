import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import HookUseState from "./components/HookUseState.jsx";
import HookUseReducer from "./components/HookUseReducer.jsx";
import HookUseEffect from "./components/HookUseEffect.jsx";
import HookUseContext from "./components/HookUseContext.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/usestate",
        element: <HookUseState />,
      },
      {
        path: "/usereducer",
        element: <HookUseReducer />,
      },
      {
        path: "/useeffect",
        element: <HookUseEffect />,
      },
      {
        path: "/usecontext",
        element: <HookUseContext />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
