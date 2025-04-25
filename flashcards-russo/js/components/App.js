// App.js - Componente principal que gerencia o estado global e a navegação

const App = () => {
  // Estados para gerenciar a navegação e dados globais
  const [currentPage, setCurrentPage] = React.useState('home');
  const [currentCategory, setCurrentCategory] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [dbInitialized, setDbInitialized] = React.useState(false);

  // Efeito para inicializar o banco de dados
  React.useEffect(() => {
    const initializeApp = async () => {
      try {
        await initializeDatabase();
        setDbInitialized(true);
      } catch (error) {
        console.error('Erro ao inicializar o banco de dados:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  // Função para navegar entre páginas
  const navigateTo = (page, category = null) => {
    setCurrentPage(page);
    if (category !== undefined) {
      setCurrentCategory(category);
    }
  };

  // Renderização condicional baseada na página atual
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-lg">Carregando RussoCards...</p>
          </div>
        </div>
      );
    }

    switch (currentPage) {
      case 'home':
        return <HomeSection navigateTo={navigateTo} />;
      case 'alphabet':
        return <AlphabetSection />;
      case 'flashcards':
        return <FlashcardSection category={currentCategory} />;
      case 'custom-flashcards':
        return <CustomFlashcards />;
      case 'games':
        return <Games />;
      case 'progress':
        return <ProgressStats />;
      default:
        return <HomeSection navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        navigateTo={navigateTo} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          currentPage={currentPage} 
          navigateTo={navigateTo} 
        />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

// Componente para a página inicial
const HomeSection = ({ navigateTo }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-neutral mb-6">Bem-vindo ao RussoCards</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          onClick={() => navigateTo('alphabet')}
          className="bg-white rounded-xl shadow-card p-6 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-primary mb-2">Alfabeto Russo</h2>
          <p className="text-neutral">Aprenda as 33 letras do alfabeto cirílico com pronúncia e exemplos.</p>
        </div>
        
        <div 
          onClick={() => navigateTo('flashcards')}
          className="bg-white rounded-xl shadow-card p-6 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-primary mb-2">Flashcards</h2>
          <p className="text-neutral">Estude as 10.000 palavras russas mais frequentes organizadas por temas.</p>
        </div>
        
        <div 
          onClick={() => navigateTo('custom-flashcards')}
          className="bg-white rounded-xl shadow-card p-6 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-primary mb-2">Flashcards Personalizados</h2>
          <p className="text-neutral">Crie e gerencie seus próprios flashcards personalizados.</p>
        </div>
        
        <div 
          onClick={() => navigateTo('games')}
          className="bg-white rounded-xl shadow-card p-6 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-primary mb-2">Minigames</h2>
          <p className="text-neutral">Divirta-se enquanto aprende com jogos interativos.</p>
        </div>
        
        <div 
          onClick={() => navigateTo('progress')}
          className="bg-white rounded-xl shadow-card p-6 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-primary mb-2">Progresso</h2>
          <p className="text-neutral">Acompanhe seu progresso e estatísticas de aprendizado.</p>
        </div>
      </div>
    </div>
  );
};
