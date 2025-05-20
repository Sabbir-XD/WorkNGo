import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import AddTask from "../Pages/AddTask";
import BrowseTasks from "../Pages/BrowseTasks";
import MyTask from "../Pages/MyTask";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivetRoute from "./PrivetRoute";
import TaskDetails from "../Pages/TaskDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/add-task",
        element: (
          <PrivetRoute>
            <AddTask />
          </PrivetRoute>
        ),
      },
      {
        path: "/browse-tasks",
        element: <BrowseTasks />,
      },
      {
        path: "/task/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/task/${params.id}`),
        element: (
          <PrivetRoute>
            <TaskDetails />
          </PrivetRoute>
        ),
      },
      {
        path: "/my-tasks",
        element: (
          <PrivetRoute>
            <MyTask />
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
]);
