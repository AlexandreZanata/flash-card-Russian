// SearchBar.js - Componente de barra de pesquisa

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Pesquisar palavras em russo, português ou inglês..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-2 px-4 pr-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
};
