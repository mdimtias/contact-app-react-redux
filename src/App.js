import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
     <>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
