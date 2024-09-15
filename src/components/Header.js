import React from 'react';
import { BellIcon } from '@heroicons/react/outline';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center text-white">
      <h1 className="text-2xl font-semibold">Digital Twin Dashboard</h1>
      <div className="flex items-center space-x-4">
        <BellIcon className="w-6 h-6 text-gray-300" />
        <div className="bg-gray-700 p-2 rounded-full">User</div>
      </div>
    </header>
  );
};

export default Header;
