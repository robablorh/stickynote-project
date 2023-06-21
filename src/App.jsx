import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css'
import { StickynotePage, taskLoaders } from './components/StickynotePage'
import { ChakraProvider } from "@chakra-ui/react";


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <StickynotePage />,
      loader: taskLoaders
      
    }

  ]
)

function App() {


  return (
    <div>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </div>
  );
}

export default App
