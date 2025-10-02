import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./components/root/RootLayout"
import Home from "./pages/Home"
import Pages from "./pages/Pages"
import Products from "./pages/Products"
import Blog from "./pages/Blog"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import ProductsDetails from "./components/ProductsDetails"
import NotFound from "./pages/NotFound"
import MyAccount from "./pages/MyAccount"
import SignUp from "./pages/SignUp"
import ForgotPassword from "./pages/ForgotPassword"
import Cart from "./pages/Cart"
import OrderCompleted from "./pages/OrderCompleted"

let routing = createBrowserRouter(createRoutesFromElements(
<>
  <Route element={<RootLayout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/pages" element={<Pages/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/products/allproducts/:id" element={<ProductsDetails/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/ordercompleted" element={<OrderCompleted/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
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
    </>
  )
}

export default App
