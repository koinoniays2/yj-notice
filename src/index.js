import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import List from "./List";
import Write from "./Write";
import Detail from "./Detail";
import Update from "./Update";

// 라우터
const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },{
    path: "write",
    element: <Write />
  },{
    path: "/:id",
    element: <Detail />
  },{
    path: "/:id/update",
    element: <Update />
  }
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
