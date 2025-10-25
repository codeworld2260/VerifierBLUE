import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { AppLayout } from './components/Layout/AppLayout';




const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    
      
    ],
  },
]);



const App = () => {

    

  return (
    
    <RouterProvider router={router}/>

  )
};

export default App;
