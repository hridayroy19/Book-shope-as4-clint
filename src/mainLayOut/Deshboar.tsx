import { FaBagShopping, FaUsers } from "react-icons/fa6";
import { IoMdAddCircleOutline, IoMdContacts } from "react-icons/io";
import {
  MdDashboardCustomize,
  MdHome,
  MdOutlineBorderColor,
} from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { Link, NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const token = localStorage.getItem("jwtToken");
  let isAdmin = false;
  let isUsers = false;

  if (token) {
    try {
      // Decode token or fetch user role from your API
      const user = JSON.parse(atob(token.split(".")[1]));
      isAdmin = user?.role === "admin";
      isUsers = user?.role === "user";
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  return (
    <div>
      <div className="drawer dark:text-black bg-[#f8f8f8] md:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
          {/* Page content here */}

          <div className=" flex items-center justify-between mx-2 mt-3">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button md:hidden"
            >
              <MdDashboardCustomize />
            </label>
            <div className="flex justify-center md:hidden btn-primary rounded-full px-4 ">
              <div>
                <div className=" ">
                  <img
                    src="https://i.ibb.co.com/VmX711W/images-removebg-preview.png"
                    alt=""
                    className="w-28 h-[15px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" dark:text-black w-full mt-5 md:mt-2 ">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side  ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-52 bg-cyan-300  min-h-full  ">
            {/* Sidebar content here */}
            <li>
              <Link className="flex justify-start gap-10" to={"/"}>
                <img
                  src="https://i.ibb.co.com/VmX711W/images-removebg-preview.png"
                  className="h-[20px] w-full object-cover"
                  alt=""
                />
              </Link>
            </li>
            <hr className="mb-2 mt-1" />
            {isAdmin && (
              <li className="mt-4">
                <Link to="/deshboard">
                  <FaBagShopping /> Dashboard
                </Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link to={"all-user"}>
                  <FaUsers /> All Users
                </Link>
              </li>
            )}

            {isAdmin && (
              <li>
                <Link to={"add-book"}>
                  <IoMdAddCircleOutline /> Add Book
                </Link>
              </li>
            )}

            {isAdmin && (
              <li>
                <Link to={"manage-Books"}>
                  <TiEdit /> Manage Book
                </Link>
              </li>
            )}

            {isAdmin && (
              <li>
                <Link to="manage-order">
                  <FaBagShopping /> Manage Order
                </Link>
              </li>
            )}
            {isUsers && (
              <li>
                <Link to="order">
                  <FaBagShopping /> My Order
                </Link>
              </li>
            )}
            {isUsers && (
              <li>
                <Link to="manage-order">
                  <FaBagShopping />
                  WishList
                </Link>
              </li>
            )}

            <li className="mt-10">
              <hr />
              <Link to={"/"}>
                <MdHome /> Home
              </Link>
            </li>
            <li>
              <Link to={"profile"}>
                <FaUsers /> Profile
              </Link>
            </li>
            <li>
              <Link to={"/deshboard"}>
                <MdOutlineBorderColor /> Order Tracking
              </Link>
            </li>
            <li>
              <NavLink to="/deshboard">
                <IoMdContacts /> Customer Support
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
