import React from 'react';
import { FaBuilding, FaHome, FaSignOutAlt } from 'react-icons/fa';
import { MdComputer, MdOutlineFastfood } from 'react-icons/md';
import { AiFillBank } from 'react-icons/ai';
import { BsCreditCard2BackFill } from 'react-icons/bs';
import Logo from '../../src/assets/Layer 1.png'

const menuItems = [
  { label: 'Nintendo', icon: <FaHome />, active: true },
  { label: 'IBM', icon: <MdComputer /> },
  { label: 'The Walt Disney Company', icon: <FaBuilding /> },
  { label: 'Louis Vuitton', icon: <FaBuilding /> },
  { label: 'MasterCard', icon: <BsCreditCard2BackFill /> },
  { label: 'Pizza Hut', icon: <MdOutlineFastfood /> },
  { label: 'Bank of America', icon: <AiFillBank /> },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-black text-white min-h-screen flex flex-col justify-between py-4 px-3">
      <div>
        <img src= {Logo} alt='logo' className='mb-8 w-32 py-2'/>
        <hr className=" mb-6 border-t border-gray-700 "  />
        {/* <h1 className="text-2xl font-bold mb-6 px-2">peerless</h1> */}
        <nav className="space-y-2">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer ${
                item.active ? 'bg-red-500' : 'hover:bg-gray-800'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      <div className="space-y-2 px-2">
        <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 rounded-lg cursor-pointer">
          <span className="text-lg"><MdComputer /></span>
          <span className="text-sm">IBM</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 rounded-lg cursor-pointer">
          <span className="text-lg"><FaSignOutAlt /></span>
          <span className="text-sm">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
