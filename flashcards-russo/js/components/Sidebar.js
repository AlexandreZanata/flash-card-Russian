// Sidebar.js - Componente de barra lateral com navegação

const Sidebar = ({ currentPage, navigateTo }) => {
  // Lista de categorias de vocabulário
  const categories = [
    { id: 'saudacoes', name: 'Saudações' },
    { id: 'comida', name: 'Comida' },
    { id: 'transporte', name: 'Transporte' },
    { id: 'emocoes', name: 'Emoções' },
    { id: 'familia', name: 'Família' },
    { id: 'numeros', name: 'Números' },
    { id: 'cores', name: 'Cores' },
    { id: 'tempo', name: 'Tempo e Clima' },
    { id: 'casa', name: 'Casa e Mobília' },
    { id: 'trabalho', name: 'Trabalho' },
    { id: 'lazer', name: 'Lazer e Hobbies' },
    { id: 'viagem', name: 'Viagem' }
  ];

  // Estado para controlar a exibição do menu de categorias
  const [showCategories, setShowCategories] = React.useState(false);
  
  // Estado para controlar a visibilidade da barra lateral em dispositivos móveis
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Função para alternar a visibilidade do menu de categorias
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  // Função para alternar a visibilidade da barra lateral em dispositivos móveis
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Classes para o item de menu ativo/inativo
  const getMenuItemClasses = (page) => {
    return `flex items-center px-4 py-2 rounded-lg transition-colors ${
      currentPage === page 
        ? 'bg-primary text-white' 
        : 'text-neutral hover:bg-gray-100'
    }`;
  };

  return (
    <>
      {/* Botão de menu para dispositivos móveis */}
      <button 
        onClick={toggleMobileMenu}
        className="fixed bottom-4 right-4 z-20 md:hidden bg-primary text-white p-3 rounded-full shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Sidebar */}
      <aside className={`w-64 bg-white shadow-soft overflow-y-auto transition-all duration-300 ${
        isMobileMenuOpen ? 'fixed inset-y-0 left-0 z-30' : 'hidden md:block'
      }`}>
        {/* Botão de fechar para dispositivos móveis */}
        <button 
          onClick={toggleMobileMenu}
          className="absolute top-2 right-2 md:hidden text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-4">
          <nav className="space-y-2">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
              className={getMenuItemClasses('home')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Início
            </a>
            
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigateTo('alphabet'); }}
              className={getMenuItemClasses('alphabet')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              Alfabeto Russo
            </a>
            
            <div>
              <a 
                href="#" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  toggleCategories(); 
                  if (!showCategories) navigateTo('flashcards');
                }}
                className={`flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'flashcards' 
                    ? 'bg-primary text-white' 
                    : 'text-neutral hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Flashcards
                </div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-4 w-4 transition-transform ${showCategories ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Lista de categorias */}
              <div className={`ml-6 mt-1 space-y-1 ${showCategories ? 'block' : 'hidden'}`}>
                {categories.map(category => (
                  <a 
                    key={category.id}
                    href="#" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      navigateTo('flashcards', category.id); 
                    }}
                    className="block px-4 py-1.5 text-sm text-neutral hover:text-primary rounded-md hover:bg-gray-50"
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            </div>
            
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigateTo('custom-flashcards'); }}
              className={getMenuItemClasses('custom-flashcards')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Flashcards Personalizados
            </a>
            
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigateTo('games'); }}
              className={getMenuItemClasses('games')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Minigames
            </a>
            
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigateTo('progress'); }}
              className={getMenuItemClasses('progress')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Progresso
            </a>
          </nav>
        </div>
      </aside>
    </>
  );
};
