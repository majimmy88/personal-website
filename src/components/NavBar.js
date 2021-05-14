import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import List from '../assets/list.svg';
import { HiOutlineViewList } from 'react-icons/hi';
const NavBar = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <div>
      {collapse && (
        <div className="w-screen text-gray-400">
          <div className="flex flex-row border-b border-gray-400 pb-1">
            <div className="font-sm text-xl my-4 text-center w-10/12 pl-8">
              Jimmy Ma - Software Engineer
            </div>
            <button className="p-2 w-2/12" onClick={() => setCollapse(false)}>
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
        <div className="w-screen h-screen text-gray-400">
          <div className="flex flex-row border-b border-gray-400 pb-1">
            <div className="font-sm text-xl my-4 text-center w-10/12 pl-8">
              Jimmy Ma - Software Engineer
            </div>
            <button
              className="text-xl w-2/12"
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
              <li className="text-center mx-2 text-2xl py-5">Travels</li>
              <li className="text-center mx-2 text-2xl py-5">Contact</li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavBar;
