const Navigation = ({ currentPage, handlePageChange, mobile = false }) => {
    const pages = ['About', 'Portfolio', 'Contact', 'Resume'];
  
    return (
      <ul className={`${mobile ? 'flex flex-col space-y-2' : 'flex space-x-6'}`}>
        {pages.map(page => (
          <li key={page}>
            <button
              onClick={() => handlePageChange(page)}
              className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                currentPage === page
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Navigation;