import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const router = createBrowserRouter([{
      path: "/",
      element: <App/>,
    //   loader: rootLoader,
    //   children: [
    //     {
    //       path: "team",
    //       element: <Team />,
    //       loader: teamLoader,
    //     },
    //   ],
    },
  ]);