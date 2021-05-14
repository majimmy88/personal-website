import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="w-screen h-screen text-gray-400">
      <div className="flex flex-row border-b border-gray-400 pb-1">
        <div className="font-sm text-xl my-4 text-center w-10/12 pl-8">
          Jimmy Ma - Software Engineer
        </div>
        <button className="text-xl w-2/12">x</button>
      </div>
      <nav className="flex items-start ml-2">
        <ul className="flex flex-col">
          <li className="mx-2 text-2xl py-5">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 text-2xl">Work</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
