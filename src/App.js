import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import PaymentsPage from "./pages/PaymentsPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  { path: "/", element: <PaymentsPage /> },
  { path: "/payments", element: <PaymentsPage /> },
  { path: "/home", element: <HomePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
