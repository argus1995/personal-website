import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <NavLink 
            to="/" 
            className="text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors border-2 pl-1 pr-1 rounded"
          >
            AA
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `hover:text-emerald-400 transition-colors font-medium ${
                    isActive ? 'text-emerald-400 border-b-2 border-emerald-400 pb-1' : 'text-white'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => 
                  `hover:text-emerald-400 transition-colors font-medium ${
                    isActive ? 'text-emerald-400 border-b-2 border-emerald-400 pb-1' : 'text-white'
                  }`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `hover:text-emerald-400 transition-colors font-medium ${
                    isActive ? 'text-emerald-400 border-b-2 border-emerald-400 pb-1' : 'text-white'
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 mt-4 rounded-lg shadow-lg">
            <ul className="flex flex-col space-y-3 p-4">
              <li>
                <NavLink 
                  to="/" 
                  onClick={toggleMenu}
                  className={({ isActive }) => 
                    `block py-2 px-4 rounded-lg hover:bg-emerald-500 hover:text-white transition-colors ${
                      isActive ? 'bg-emerald-600 text-white' : 'text-white'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/portfolio" 
                  onClick={toggleMenu}
                  className={({ isActive }) => 
                    `block py-2 px-4 rounded-lg hover:bg-emerald-500 hover:text-white transition-colors ${
                      isActive ? 'bg-emerald-600 text-white' : 'text-white'
                    }`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  onClick={toggleMenu}
                  className={({ isActive }) => 
                    `block py-2 px-4 rounded-lg hover:bg-emerald-500 hover:text-white transition-colors ${
                      isActive ? 'bg-emerald-600 text-white' : 'text-white'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}