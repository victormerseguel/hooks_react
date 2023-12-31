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
import HookUseContextAux from "./components/HookUseContextAux.jsx";
import HookUseRef from "./components/HookUseRef.jsx";
import HookUseCallback from "./components/HookUseCallback.jsx";
import HookUseMemo from "./components/HookUseMemo.jsx";
import HookUseLayoutEffect from "./components/HookUseLayoutEffect.jsx";
import HookUseImperativeHandle from "./components/HookUseImperativeHandle.jsx";

import Teste from "./components/teste.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { SomeContextProvider } from "./context/SomeContext.jsx";

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
        element: <HookUseContext />,
        path: "/usecontext",
      },
      {
        path: "/usecontextaux",
        element: <HookUseContextAux />,
      },
      {
        path: "/useref",
        element: <HookUseRef />,
      },
      {
        path: "/usecallback",
        element: <HookUseCallback />,
      },
      {
        path: "/usememo",
        element: <HookUseMemo />,
      },
      {
        path: "/uselayouteffect",
        element: <HookUseLayoutEffect />,
      },
      {
        path: "/useimperativehandle",
        element: <HookUseImperativeHandle />,
      },
      {
        path: "/teste",
        element: <Teste />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SomeContextProvider>
      <RouterProvider router={router} />
    </SomeContextProvider>
  </React.StrictMode>
);
