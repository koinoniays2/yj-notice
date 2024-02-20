import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

// 라우터
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const queryClient = new QueryClient(); //리액트 쿼리

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 리액트 쿼리 */}
    <QueryClientProvider client={queryClient}>
      {/* 라우터 */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
