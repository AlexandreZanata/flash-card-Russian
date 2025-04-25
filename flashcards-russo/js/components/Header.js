// Header.js - Componente de cabeçalho com logo e barra de pesquisa

const Header = ({ navigateTo, searchQuery, setSearchQuery }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    // Implementar lógica de pesquisa
    console.log('Pesquisando por:', searchQuery);
  };

  return (
    <header className="bg-white shadow-soft sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-3 md:mb-0">
          <div 
            onClick={() => navigateTo('home')}
            className="flex items-center cursor-pointer"
          >
            <span className="text-primary text-2xl font-bold mr-2">Русско</span>
            <span className="text-secondary text-2xl font-bold">Cards</span>
          </div>
        </div>
        
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          handleSearch={handleSearch} 
        />
      </div>
    </header>
  );
};
