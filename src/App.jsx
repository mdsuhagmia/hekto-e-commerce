import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./components/root/RootLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import ProductsDetails from "./components/ProductsDetails"
import NotFound from "./pages/NotFound"
import MyAccount from "./pages/MyAccount"
import SignUp from "./pages/SignUp"
import ForgotPassword from "./pages/ForgotPassword"
import Cart from "./pages/Cart"
import OrderCompleted from "./pages/OrderCompleted"
import { ToastContainer } from "react-toastify"
import Wishlist from "./pages/Wishlist"
import AboutUs from "./pages/AboutUs"
import SingleBlog from "./pages/SingleBlog"
import HektoDemo from "./pages/HektoDemo"
import Faq from "./pages/Faq"

let routing = createBrowserRouter(createRoutesFromElements(
<>
  <Route element={<RootLayout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/aboutus" element={<AboutUs/>}></Route>
    <Route path="/products/allproducts/:id" element={<ProductsDetails/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/wishlist" element={<Wishlist/>}></Route>
    <Route path="/ordercompleted" element={<OrderCompleted/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/hektodemo" element={<HektoDemo/>}></Route>
    <Route path="/faq" element={<Faq/>}></Route>
    <Route path="/singleblog" element={<SingleBlog/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/myaccount" element={<MyAccount/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
  </Route>
  <Route path="*" element={<NotFound/>}></Route>
</>
))

function App() {

  return (
    <>
     <RouterProvider router={routing}></RouterProvider>
     <ToastContainer
        autoClose={2000}
      />
    </>
  )
}

export default App
