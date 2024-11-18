import { useState } from 'react';
import Navigation from './Navigation';
import { Menu, X } from 'lucide-react';

const Header = ({ currentPage, handlePageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-primary-600 font-heading">
            Waleed Zaryab
          </h1>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
          }`}
        >
          <Navigation 
            currentPage={currentPage} 
            handlePageChange={(page) => {
              handlePageChange(page);
              setIsMenuOpen(false);
            }}
            mobile={true}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;