// nav bar component

import { Link, useLocation } from "react-router-dom";

// <nav className="flex justify-between items-center p-5 bg-zinc-900 text-gray-300 rounded-lg">
//     <Link to="/" className="text-2xl font-bold">Jasper Krocké</Link>
//     <div className="flex space-x-5">
//         <Link to="/" className="hover:text-gray-500">Home</Link>
//         <Link to="/projects" className="hover:text-gray-500">Projects</Link>
//         <Link to="/about" className="hover:text-gray-500">About</Link>
//         <Link to="/contact" className="hover:text-gray-500">Contact</Link>
//     </div>
// </nav>

function Navbar() {
  const location = useLocation();

  const isCurrentPage = (path: string) => {
    return location.pathname == path;
  }
  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              
              <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              
              <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/" className={"rounded-md px-3 py-2 text-sm font-medium" + (isCurrentPage("/") ? " text-white bg-gray-900" : " text-gray-300 hover:bg-gray-700 hover:text-white")} >Home</Link>
                <Link to="/projects" className={"rounded-md px-3 py-2 text-sm font-medium" + (isCurrentPage("/projects") ? " text-white bg-gray-900" : " text-gray-300 hover:bg-gray-700 hover:text-white")}>Projects</Link>
                <Link to="/about" className={"rounded-md px-3 py-2 text-sm font-medium" + (isCurrentPage("/about") ? " text-white bg-gray-900" : " text-gray-300 hover:bg-gray-700 hover:text-white")}>About</Link>
                <Link to="/contact" className={"rounded-md px-3 py-2 text-sm font-medium" + (isCurrentPage("/contact") ? " text-white bg-gray-900" : " text-gray-300 hover:bg-gray-700 hover:text-white")}>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
        <Link to="/" className={"rounded-md px-3 py-2 text-sm font-medium" + (isCurrentPage("/") ? " text-white bg-gray-900" : " text-gray-300 hover:bg-gray-700 hover:text-white")} >Home</Link>
                <Link to="/projects" className={"rounded-md px-3 py-2 text-sm font-medium" + (isCurrentPage("/projects") ? " text-white bg-gray-900" : " text-gray-300 hover:bg-gray-700 hover:text-white")}>Projects</Link>
                <Link to="/about" className={"rounded-md px-3 py-2 text-sm font-medium" + (isCurrentPage("/about") ? " text-white bg-gray-900" : " text-gray-300 hover:bg-gray-700 hover:text-white")}>About</Link>
                <Link to="/contact" className={"rounded-md px-3 py-2 text-sm font-medium" + (isCurrentPage("/contact") ? " text-white bg-gray-900" : " text-gray-300 hover:bg-gray-700 hover:text-white")}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;