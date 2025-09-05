import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./components/root/RootLayout"
import Home from "./pages/Home"
import Pages from "./pages/Pages"
import Products from "./pages/Products"
import Blog from "./pages/Blog"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"

let routing = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/pages" element={<Pages/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Route>
))

function App() {

  return (
    <>
     <RouterProvider router={routing}></RouterProvider>
    </>
  )
}

export default App
