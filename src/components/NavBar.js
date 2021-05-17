import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import List from '../assets/list.svg';
import { HiOutlineViewList } from 'react-icons/hi';
const NavBar = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <div>
      {collapse && (
        <div className="fixed top-0 z-50 bg-white w-screen text-gray-400">
          <div className="flex flex-row border-b border-gray-400 pb-1">
            <div className="font-sm text-lg my-4 text-center w-10/12 sm:pl-8 md:w-11/12">
              <Link to="/">Jimmy Ma – Software Engineer </Link>
            </div>
            <button
              className="p-2 w-2/12 md:w-1/12"
              onClick={() => setCollapse(false)}
            >
              <HiOutlineViewList
                src={List}
                alt="List"
                className="text-gray-400 h-8 w-8"
              />
            </button>
          </div>
        </div>
      )}
      {!collapse && (
        <div className="fixed top-0 z-50 bg-white w-screen h-screen text-gray-400">
          <div className="flex flex-row border-b border-gray-400 pb-1">
            <div className="font-sm text-lg my-4 text-center w-10/12 sm:pl-8 md:w-11/12">
              <Link to="/">Jimmy Ma - Software Engineer </Link>
            </div>
            <button
              className="text-xl w-2/12 md:w-1/12"
              onClick={() => setCollapse(true)}
            >
              x
            </button>
          </div>
          <nav className="flex justify-center ml-2">
            <ul className="flex flex-col">
              <li className="text-center mx-2 text-2xl py-5">
                <Link to="/">Home</Link>
              </li>
              <li className="text-center mx-2 text-2xl py-5">Work</li>
              <li className="text-center mx-2 text-2xl py-5">
                Travels – Under Construction
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavBar;
