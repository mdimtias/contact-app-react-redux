import { createBrowserRouter } from "react-router-dom";
import AddPost from "../components/AddPost/AddPost";
import EditPost from "../components/AddPost/EditPost";
import Error from "../components/Error/Error";

export const router = createBrowserRouter([
    {
    path: '/',
    element: <AddPost></AddPost>,
    errorElement: <Error></Error>,
    },
    {
        path: '/add-post',
        element: <AddPost></AddPost>,
    },
    {
        path: '/edit-post/:id',
        element: <EditPost></EditPost>
    },
])