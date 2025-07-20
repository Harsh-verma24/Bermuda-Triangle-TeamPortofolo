// === src/components/Navbar.jsx ===
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, closeMenu, setActiveSection } from '../features/ui/uiSlice';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.ui.isMenuOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg italic font-bold w-[240px] items-center justify-center text-white flex fles-row">
            <div className='flex w-[150px]'><img src="/images/Bermuda-triangle-transparent.png" alt="" /></div>
            Bermuda Triangle</div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`
                }
                onClick={() => dispatch(setActiveSection(item.name.toLowerCase()))}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <button className="md:hidden p-2" onClick={() => dispatch(toggleMenu())}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 ${
                    isActive ? 'bg-purple-600 text-white' : ''
                  }`
                }
                onClick={() => dispatch(closeMenu())}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
