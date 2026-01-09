import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ChatWindow from "./ChatWindow.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ChatWindow />,
      },
    ],
  },
]);
