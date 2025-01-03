import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Header = ({ currentPage, setCurrentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = ['About Me', 'Portfolio', 'Contact', 'Resume'];


    return (
        <header className="bg-slate-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">John Doe</h1>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
    
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-slate-800 md:bg-transparent`}>
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      className={`${currentPage === item ? 'text-blue-400' : 'hover:text-blue-300'} transition-colors`}
                      onClick={() => {
                        setCurrentPage(item);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      );
    };
    
    export default Header;