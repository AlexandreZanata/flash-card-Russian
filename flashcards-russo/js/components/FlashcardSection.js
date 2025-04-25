// FlashcardSection.js - Componente para exibir flashcards com som e contexto de uso

const FlashcardSection = ({ category }) => {
  const [flashcards, setFlashcards] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [showFrequent, setShowFrequent] = React.useState(false);
  const [error, setError] = React.useState(null);
  
  // Efeito para carregar os flashcards
  React.useEffect(() => {
    const loadFlashcards = async () => {
      setLoading(true);
      setError(null);
      
      try {
        let cards;
        
        if (showFrequent) {
          // Carregar palavras frequentes
          if (typeof frequentWords !== 'undefined' && frequentWords.length > 0) {
            cards = frequentWords.slice(0, 100);
            console.log("Carregando palavras frequentes:", cards.length);
          } else {
            throw new Error("Palavras frequentes não disponíveis");
          }
        } else if (category) {
          // Carregar flashcards da categoria específica
          cards = getFlashcardsByCategory(category);
          console.log(`Carregando categoria ${category}:`, cards.length);
        } else {
          // Carregar flashcards aleatórios
          cards = getRandomFlashcards(10);
          console.log("Carregando flashcards aleatórios:", cards.length);
        }
        
        if (!cards || cards.length === 0) {
          throw new Error("Nenhum flashcard encontrado");
        }
        
        setFlashcards(cards);
        setCurrentIndex(0);
        setFlipped(false);
      } catch (error) {
        console.error('Erro ao carregar flashcards:', error);
        setError("Não foi possível carregar os flashcards. Por favor, tente novamente.");
        // Usar flashcards padrão em caso de erro
        setFlashcards([
          {
            id: 'default-001',
            russian: 'Привет',
            transcription: 'privet',
            portuguese: 'Olá (informal)',
            english: 'Hello (informal)',
            category: 'saudacoes',
            known: false,
            context: 'Usado para cumprimentar amigos e pessoas próximas. Ex: Привет, как дела? (Olá, como vai?)'
          },
          {
            id: 'default-002',
            russian: 'Спасибо',
            transcription: 'spasibo',
            portuguese: 'Obrigado',
            english: 'Thank you',
            category: 'saudacoes',
            known: false,
            context: 'Usado para agradecer alguém. Ex: Спасибо за помощь. (Obrigado pela ajuda.)'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    
    loadFlashcards();
  }, [category, showFrequent]);
  
  // Função para virar o flashcard
  const flipCard = () => {
    setFlipped(!flipped);
    
    // Reproduzir som de virar cartão
    try {
      if (typeof playFlipSound === 'function') {
        playFlipSound();
      }
    } catch (error) {
      console.error('Erro ao reproduzir som de flip:', error);
    }
  };
  
  // Função para ir para o próximo flashcard
  const nextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    }
  };
  
  // Função para ir para o flashcard anterior
  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
    }
  };
  
  // Função para marcar flashcard como conhecido
  const markAsKnown = async () => {
    try {
      const updatedFlashcards = [...flashcards];
      updatedFlashcards[currentIndex] = {
        ...updatedFlashcards[currentIndex],
        known: true
      };
      
      setFlashcards(updatedFlashcards);
      
      // Salvar no banco de dados local
      if (typeof updateFlashcardStatus === 'function') {
        await updateFlashcardStatus(updatedFlashcards[currentIndex].id, true);
      }
      
      // Reproduzir som de acerto
      if (typeof playCorrectSound === 'function') {
        playCorrectSound();
      }
      
      // Avançar para o próximo cartão
      setTimeout(() => {
        nextCard();
      }, 500);
    } catch (error) {
      console.error('Erro ao marcar flashcard como conhecido:', error);
    }
  };
  
  // Função para reproduzir o som da palavra em russo
  const playRussianWordSound = (e) => {
    if (e) {
      e.stopPropagation();
    }
    
    if (flashcards.length === 0 || !flashcards[currentIndex]) return;
    
    try {
      if (typeof playRussianWord === 'function') {
        playRussianWord(flashcards[currentIndex].russian);
      }
    } catch (error) {
      console.error('Erro ao reproduzir palavra em russo:', error);
    }
  };
  
  // Função para reproduzir o som da tradução em português
  const playPortugueseWordSound = (e) => {
    if (e) {
      e.stopPropagation();
    }
    
    if (flashcards.length === 0 || !flashcards[currentIndex]) return;
    
    try {
      if (typeof playPortugueseWord === 'function') {
        playPortugueseWord(flashcards[currentIndex].portuguese);
      }
    } catch (error) {
      console.error('Erro ao reproduzir palavra em português:', error);
    }
  };
  
  // Renderizar o conteúdo do flashcard
  const renderFlashcardContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-neutral-600">Carregando flashcards...</p>
          </div>
        </div>
      );
    }
    
    if (error) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">⚠️</div>
            <p className="text-red-500">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      );
    }
    
    if (flashcards.length === 0) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <p className="text-neutral-600">Nenhum flashcard disponível para esta categoria.</p>
          </div>
        </div>
      );
    }
    
    const currentCard = flashcards[currentIndex];
    
    return (
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-neutral">
            {showFrequent ? 'Palavras Frequentes' : category ? `Categoria: ${getCategoryName ? getCategoryName(category) : category}` : 'Flashcards Aleatórios'}
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setShowFrequent(!showFrequent)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                showFrequent ? 'bg-primary text-white' : 'bg-white text-neutral'
              }`}
            >
              {showFrequent ? 'Mostrar Categorias' : 'Palavras Frequentes'}
            </button>
          </div>
        </div>
        
        <div className="flashcard-flip w-full max-w-md mx-auto mb-6" style={{height: "300px"}}>
          <div 
            className={`flashcard-inner relative w-full h-full ${flipped ? 'flashcard-flipped' : ''}`}
            onClick={flipCard}
          >
            {/* Frente do cartão (palavra em russo) */}
            <div className="flashcard-front">
              <span className="text-4xl font-bold text-primary mb-4">{currentCard.russian}</span>
              <span className="text-lg text-neutral-600">[{currentCard.transcription}]</span>
              <button 
                onClick={playRussianWordSound}
                className="sound-button mt-4 bg-primary text-white rounded-full p-2 hover:bg-primary-dark transition-colors"
                aria-label="Ouvir pronúncia em russo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </button>
              <div className="click-indicator">
                Clique para virar
              </div>
            </div>
            
            {/* Verso do cartão (tradução e contexto) */}
            <div className="flashcard-back">
              <span className="text-2xl font-bold text-secondary mb-2">{currentCard.portuguese}</span>
              {currentCard.english && (
                <span className="text-lg text-neutral-600 mb-2">{currentCard.english}</span>
              )}
              <button 
                onClick={playPortugueseWordSound}
                className="sound-button mt-2 mb-4 bg-secondary text-white rounded-full p-2 hover:bg-secondary-dark transition-colors"
                aria-label="Ouvir pronúncia em português"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </button>
              
              {/* Contexto de uso da palavra */}
              {currentCard.context && (
                <div className="text-sm text-neutral-600 text-center mt-1 max-w-xs">
                  <strong>Como usar:</strong> {currentCard.context}
                </div>
              )}
              
              <div className="click-indicator">
                Clique para virar
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={prevCard}
            disabled={currentIndex === 0}
            className={`px-4 py-2 rounded-lg ${
              currentIndex === 0
                ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                : 'bg-white text-neutral hover:bg-neutral-100'
            }`}
          >
            Anterior
          </button>
          
          <div className="text-center">
            <span className="text-neutral-600">{currentIndex + 1} de {flashcards.length}</span>
            <button
              onClick={markAsKnown}
              disabled={currentCard.known}
              className={`ml-4 px-4 py-2 rounded-lg ${
                currentCard.known
                  ? 'bg-green-100 text-green-700 cursor-not-allowed'
                  : 'bg-white text-neutral hover:bg-green-50 hover:text-green-700'
              }`}
            >
              {currentCard.known ? 'Aprendido' : 'Sei esta!'}
            </button>
          </div>
          
          <button
            onClick={nextCard}
            disabled={currentIndex === flashcards.length - 1}
            className={`px-4 py-2 rounded-lg ${
              currentIndex === flashcards.length - 1
                ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                : 'bg-white text-neutral hover:bg-neutral-100'
            }`}
          >
            Próximo
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      {renderFlashcardContent()}
    </div>
  );
};
