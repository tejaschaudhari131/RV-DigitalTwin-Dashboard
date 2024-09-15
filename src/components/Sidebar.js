import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, CogIcon, ViewGridIcon } from '@heroicons/react/outline';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-gray-300 h-full p-4 space-y-6">
      <nav className="flex flex-col space-y-4">
        <NavLink exact to="/" className="flex items-center space-x-2" activeClassName="text-white">
          <HomeIcon className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/engine" className="flex items-center space-x-2" activeClassName="text-white">
          <CogIcon className="w-5 h-5" />
          <span>Engine</span>
        </NavLink>
        <NavLink to="/hvac" className="flex items-center space-x-2" activeClassName="text-white">
          <ViewGridIcon className="w-5 h-5" />
          <span>HVAC</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
