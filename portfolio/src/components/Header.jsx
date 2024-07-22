import React, { useState } from 'react';
import image from '../assets/profile.jpg';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

function Header() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'About', path: '/about' },
    { id: 3, text: 'Portfolio', path: '/portfolio' },
    { id: 4, text: 'Experience', path: '/experience' },
    { id: 5, text: 'Contact', path: '/contact' },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2">
          <img src={image} className="h-12 w-12 rounded-full" alt="profile" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Shama<span className="text-green-500 text-2xl">l</span>
            <p className="text-sm">Full Stack Developer</p>
          </h1>
        </div>

        {/* Desktop Navbar */}
        <div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text, path }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer"
                key={id}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? 'text-green-500' : ''
                  }
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div className="bg-white">
          <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
            {navItems.map(({ id, text, path }) => (
              <li
                className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                key={id}
              >
                <NavLink
                  onClick={() => setMenu(!menu)}
                  to={path}
                  className={({ isActive }) =>
                    isActive ? 'text-green-500' : ''
                  }
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
