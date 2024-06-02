import React from "react";
import { FaHome, FaRedRiver, FaShoppingCart, FaStreetView } from "react-icons/fa";
import { FaBookBookmark, FaUsersViewfinder } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu pb-4">
          <li>
            <NavLink to="/dashbord/userhome"><FaHome></FaHome>User Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashbord/reservation"><FaRedRiver/>Reservation</NavLink>
          </li>
          <li>
            <NavLink to="/dashbord/view"><FaUsersViewfinder/>View</NavLink>
          </li>
          <li>
            <NavLink to="/dashbord/mybooking"><FaBookBookmark/>My Booking</NavLink>
          </li>
          
          <li>
            <NavLink to="/dashbord/cart"><FaShoppingCart></FaShoppingCart>My Cart</NavLink>
          </li>

          <div className="divider"></div> 
        </ul>
        
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
