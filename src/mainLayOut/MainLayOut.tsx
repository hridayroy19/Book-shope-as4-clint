import { Outlet } from "react-router-dom";
import Navbar from "../components/sheard/navbar/Navbar";
import Footer from "../components/sheard/footer/Footer.js";

const MainLayOut = () => {
  return (
    <div className='w-full 2xl:w-[1440px] 2xl:mx-auto overflow-x-hidden'>
      <Navbar />
      <div className="pt-42">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayOut;
