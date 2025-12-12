import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import "./App.css";
import PublicPage from "./pages/PublicPage";
import AdminPage from "./pages/AdminPage";
import Layout from "./pages/Layout";
import { IngatlanokProvider } from "./contexts/IngatlanokContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <Navigate to="/kezdolap" replace />,
      },
      {
        path: "kezdolap",
        element: <PublicPage />,
      },
      {
        path: "ujingatlan",
        children: [
          {
            index: true,
            element: <AdminPage />,
          },
        ],
      },
    ],
  },

  // 404 - Not Found
  {
    path: "*",
    element: (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>404 - Az oldal nem található</h1>
        <a href="/login">Vissza a főoldalra</a>
      </div>
    ),
  },
]);

 export default function App() {
  return (
    <IngatlanokProvider>
      <RouterProvider router={router} />
    </IngatlanokProvider>
  );
}
