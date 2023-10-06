import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-400 py-3 text-black flex flex-col md:flex-row items-center justify-between px-4 md:px-6">

      {/* Search by category/interest group */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-2 md:mb-0">
        <div className="relative flex items-center w-full md:w-80">
          <input
            className="bg-white border border-gray-300 rounded-md py-2 pl-8 pr-4 focus:outline-none focus:border-blue-500 w-full"
            type="text"
            placeholder="Search by category/interest group"
          />
          <div className="absolute left-2 top-2 text-gray-500">
            <FaSearch />
          </div>
        </div>

        {/* Search by location */}
        <div className="relative flex items-center w-full md:w-64">
          <input
            className="bg-white border border-gray-300 rounded-md py-2 pl-8 pr-4 focus:outline-none focus:border-blue-500 w-full"
            type="text"
            placeholder="Search by location"
          />
          <div className="absolute left-2 top-2 text-gray-500">
            <FaMapMarkerAlt />
          </div>
        </div>
      </div>

      {/* Sign Out button */}
      <div className="relative flex items-center mt-2 md:mt-0">
        <div
          onClick={toggleDropdown}
          className="text-blue-300 md:px-3 flex items-center cursor-pointer"
        >
          <img src="https://lh3.googleusercontent.com/a/ACg8ocL5vm4B6bDOpM4qspaFI3GsN-5CLJp9BsNfNPOwRcQHR4W-=s576-c-no" className='h-10 rounded-full' alt="user profile" />
        </div>
        {isDropdownOpen && (
          <div className="absolute right-6 mt-28 w-36">
            <div className="bg-white border border-gray-300 rounded shadow-lg">
              <ul className='px-4 py-2'>
                <li className="">
                  <Link href="/">Sign Out</Link>
                </li>
                <li className="">
                  <Link href="/profile">View Profile</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
