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
import UpdateTask from "../Pages/UpdateTask";
import Loading from "../components/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loading />,
        loader: () =>
          fetch(
            "https://assaignment-10-server-livid.vercel.app/featured-tasks"
          ),
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
        hydrateFallbackElement: <Loading />,

        loader: ({ params }) =>
          fetch(
            `https://assaignment-10-server-livid.vercel.app/tasks/${params.id}`
          ),
        element: (
          <PrivetRoute>
            <TaskDetails />
          </PrivetRoute>
        ),
      },
      {
        path: "/my-tasks",
        hydrateFallbackElement: <Loading />,
        loader: () =>
          fetch("https://assaignment-10-server-livid.vercel.app/tasks"),
        element: (
          <PrivetRoute>
            <MyTask />
          </PrivetRoute>
        ),
      },
      {
        path: "/update-task/:id",
        hydrateFallbackElement: <Loading />,

        loader: ({ params }) =>
          fetch(
            `https://assaignment-10-server-livid.vercel.app/tasks/${params.id}`
          ),
        element: (
          <PrivetRoute>
            <UpdateTask />
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
