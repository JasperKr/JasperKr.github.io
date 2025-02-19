// nav bar component

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-zinc-900 text-gray-300 rounded-lg">
        <Link to="/" className="text-2xl font-bold">Jasper Krocké</Link>
        <div className="flex space-x-5">
            <Link to="/" className="hover:text-gray-500">Home</Link>
            <Link to="/projects" className="hover:text-gray-500">Projects</Link>
            <Link to="/about" className="hover:text-gray-500">About</Link>
            <Link to="/contact" className="hover:text-gray-500">Contact</Link>
        </div>
    </nav>
  );
};

export default Navbar;