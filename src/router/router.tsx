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
import AllUsers from "../components/admin-route/AllUsers";
import AddBooks from "../components/admin-route/AddBooks";
import Profile from "../components/sheard/Profile";
import ManageBook from "../components/admin-route/ManageBook";
import ManageOrder from "../components/admin-route/ManageOrder";
import Myorder from "../components/admin-route/user-route/Myorder";
import Error from "../components/sheard/navbar/Error";
import BlogDetails from "../page/bloge/BlogDetails";
import Author from "../page/author/Author";
import Dashboard from "../components/admin-route/Dashboard";
import UserDashboard from "../components/admin-route/user-route/UserDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Book />,
        children: [
          {
            path: "books-main",
            element: <Bloge />,
          },
        ],
      },
      {
        path: "author",
        element: <Author />,
      },
      {
        path: "books/ditales/:id",
        element: <BookDetails />,
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
        path: "bloge/blogdetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/success/:tranId",
        element: <PaymentSuccess />,
      },
      {
        path: "/payment/fail/:tranId",
        element: <PaymentFailed />,
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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "",
        element: <UserDashboard />,
      },
      {
        path: "all-user",
        element: <AllUsers />,
      },
      {
        path: "add-book",
        element: <AddBooks />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "manage-Books",
        element: <ManageBook />,
      },
      {
        path: "manage-order",
        element: <ManageOrder />,
      },
      // users
      {
        path: "order",
        element: <Myorder />,
      },
    ],
  },
]);

export default router;
