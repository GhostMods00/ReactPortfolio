import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const App = () => {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header currentPage={currentPage} handlePageChange={setCurrentPage} />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="transition-all duration-300 ease-in-out">
          {renderPage()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;