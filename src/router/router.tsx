import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../mainLayOut/MainLayOut";
import Home from "../page/Home/Home";
import Login from "../page/authprovider/Login";
import Registation from "../page/authprovider/Registation";
import DashboardLayout from "../mainLayOut/Deshboar";
import About from "../page/about/About";
import Bloge from "../page/bloge/Bloge";
import Contact from "../page/contact/Contact";
import Book from "../page/book/Book";
import BookDetails from "../page/book/BookDetails";
import Cart from "../page/cart/Cart";
import PrivateRoute from "../components/provider/PrivetRoute";
import PaymentSuccess from "../paymentStatus/PaymentSuccess";
import PaymentFailed from "../paymentStatus/PaymentFailed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    //   errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Book />,
        children:[
          {
            path:"books-main",
            element:<Bloge/>
          },
          
        ]
      },
      {
        path:"books/ditales/:id",
        element: <PrivateRoute> <BookDetails/> </PrivateRoute>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/bloge",
        element: <Bloge />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment/success/:tranId",
        element: <PaymentSuccess/>,
      },
      {
        path: "/payment/fail/:tranId",
        element: <PaymentFailed/>,
      },
      // login routes
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registaion",
        element: <Registation />,
      },
    ],
  },
  {
    path: "/deshboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute> ,
  },
]);

export default router;
