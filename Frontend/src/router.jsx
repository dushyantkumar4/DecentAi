import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ChatWindow from "./ChatWindow.jsx";
import Login from "./components/Login.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ChatWindow />,
      }
    ],
  },
]);
