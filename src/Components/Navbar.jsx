import React from "react";
import {
  FiSearch,
  FiHelpCircle,
  FiUser,
  FiBell,
  FiChevronDown,
  FiBriefcase,
} from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsPersonVideo } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white border-b border-gray-200 py-2 px-4">
      <div className="flex items-center space-x-2">
        <div className="relative">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search Parameter & Params"
            className="w-72 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      <div className="text-gray-700 text-sm md:text-base">
        Thu, Dept 12/07/2025 | Business Date: Thu, Dept 12/07/2025
      </div>

      <div className="flex items-center space-x-4">
        {/* Notification (Bell) Icon with Red Dot */}
        <div className="relative">
          <button className="rounded-full bg-gray-50 p-2 hover:bg-gray-100 relative">
            <FiBell size={18} />
            {/* Red dot for unread notifications */}
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>

        {/* Branch Selection */}
        <button className="flex items-center space-x-2 rounded-full bg-gray-50 px-3 py-2 hover:bg-gray-100">
          <HiOutlineOfficeBuilding size={18} />
          <span>Ikoyi Branch</span>
          <FiChevronDown size={18} />
        </button>

        {/* User Profile */}
        <button className="flex items-center space-x-2 rounded-full bg-gray-50 px-3 py-2 hover:bg-gray-100">
          <BsPersonVideo size={18} />
          <span>Eric Alawoya</span>
          <FiChevronDown size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
