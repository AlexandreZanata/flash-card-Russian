// HangmanGame.js - Componente para o jogo da forca em cirílico com dicas

const HangmanGame = () => {
  // Estado para armazenar a palavra atual
  const [word, setWord] = React.useState(null);
  
  // Estado para armazenar as letras adivinhadas
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  
  // Estado para controlar o número de erros
  const [wrongGuesses, setWrongGuesses] = React.useState(0);
  
  // Estado para controlar o carregamento
  const [loading, setLoading] = React.useState(true);
  
  // Estado para controlar o fim do jogo
  const [gameStatus, setGameStatus] = React.useState('playing'); // 'playing', 'won', 'lost'
  
  // Estado para controlar a pontuação
  const [score, setScore] = React.useState(0);
  
  // Estado para controlar as dicas
  const [showHint, setShowHint] = React.useState(false);
  
  // Estado para armazenar palavras já usadas
  const [usedWords, setUsedWords] = React.useState([]);
  
  // Número máximo de erros permitidos
  const maxWrongGuesses = 6;
  
  // Alfabeto cirílico para o teclado virtual
  const cyrillicAlphabet = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й',
    'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф',
    'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'
  ];
  
  // Efeito para carregar uma palavra aleatória
  React.useEffect(() => {
    const loadRandomWord = async () => {
      setLoading(true);
      try {
        // Obter vários flashcards aleatórios para ter mais opções
        const flashcards = await getRandomFlashcards(20);
        
        // Filtrar flashcards para excluir palavras já usadas
        const availableFlashcards = flashcards.filter(card => 
          !usedWords.includes(card.russian.toUpperCase())
        );
        
        // Se não houver flashcards disponíveis, usar qualquer um
        const selectedFlashcard = availableFlashcards.length > 0 
          ? availableFlashcards[Math.floor(Math.random() * availableFlashcards.length)]
          : flashcards[Math.floor(Math.random() * flashcards.length)];
        
        // Adicionar a palavra à lista de palavras usadas
        setUsedWords(prev => [...prev, selectedFlashcard.russian.toUpperCase()]);
        
        // Limitar o tamanho da lista de palavras usadas para não crescer indefinidamente
        if (usedWords.length > 50) {
          setUsedWords(prev => prev.slice(-50));
        }
        
        setWord({
          russian: selectedFlashcard.russian.toUpperCase(),
          portuguese: selectedFlashcard.portuguese,
          transcription: selectedFlashcard.transcription,
          english: selectedFlashcard.english,
          category: selectedFlashcard.category,
          context: selectedFlashcard.context || `Palavra da categoria: ${selectedFlashcard.category}`
        });
      } catch (error) {
        console.error('Erro ao carregar palavra aleatória:', error);
        // Palavra padrão em caso de erro
        setWord({
          russian: 'ПРИВЕТ',
          portuguese: 'Olá',
          transcription: 'privet',
          english: 'Hello',
          category: 'saudacoes',
          context: 'Usado para cumprimentar amigos e pessoas próximas.'
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadRandomWord();
  }, []);
  
  // Função para lidar com a adivinhação de uma letra
  const handleGuess = (letter) => {
    // Ignorar cliques quando o jogo não está em andamento
    if (gameStatus !== 'playing') {
      return;
    }
    
    // Ignorar letras já adivinhadas
    if (guessedLetters.includes(letter)) {
      return;
    }
    
    // Adicionar letra às letras adivinhadas
    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);
    
    // Verificar se a letra está na palavra
    if (!word.russian.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
      
      // Reproduzir som de erro
      if (typeof playWrongSound === 'function') {
        playWrongSound();
      }
      
      // Mostrar dica após 3 erros
      if (newWrongGuesses === 3 && !showHint) {
        setShowHint(true);
      }
      
      // Verificar se o jogador perdeu
      if (newWrongGuesses >= maxWrongGuesses) {
        setGameStatus('lost');
        
        // Salvar pontuação
        if (typeof saveGameScore === 'function') {
          saveGameScore('hangman', score);
        }
        
        // Reproduzir som de derrota
        if (typeof playLoseSound === 'function') {
          playLoseSound();
        }
      }
    } else {
      // Incrementar a pontuação
      setScore(score + 5);
      
      // Reproduzir som de acerto
      if (typeof playCorrectSound === 'function') {
        playCorrectSound();
      }
    }
  };
  
  // Efeito para verificar se o jogador ganhou
  React.useEffect(() => {
    if (word && gameStatus === 'playing') {
      // Verificar se todas as letras da palavra foram adivinhadas
      const allLettersGuessed = [...word.russian].every(letter => 
        guessedLetters.includes(letter) || letter === ' ' || letter === '-'
      );
      
      if (allLettersGuessed) {
        setGameStatus('won');
        setScore(score + 20); // Bônus por completar a palavra
        
        // Salvar pontuação
        if (typeof saveGameScore === 'function') {
          saveGameScore('hangman', score + 20);
        }
        
        // Reproduzir som de vitória
        if (typeof playVictorySound === 'function') {
          playVictorySound();
        }
      }
    }
  }, [guessedLetters, word, gameStatus, score]);
  
  // Função para revelar uma letra aleatória como dica
  const revealHint = () => {
    if (gameStatus !== 'playing' || !word) return;
    
    // Encontrar letras que ainda não foram adivinhadas
    const unguessedLetters = [...word.russian].filter(letter => 
      !guessedLetters.includes(letter) && letter !== ' ' && letter !== '-'
    );
    
    if (unguessedLetters.length > 0) {
      // Escolher uma letra aleatória para revelar
      const randomLetter = unguessedLetters[Math.floor(Math.random() * unguessedLetters.length)];
      
      // Adicionar a letra às letras adivinhadas
      handleGuess(randomLetter);
      
      // Reduzir a pontuação como penalidade por usar dica
      setScore(Math.max(0, score - 2));
    }
  };
  
  // Função para reiniciar o jogo
  const restartGame = () => {
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameStatus('playing');
    setScore(0);
    setShowHint(false);
    
    // Carregar nova palavra
    const loadRandomWord = async () => {
      setLoading(true);
      try {
        // Obter vários flashcards aleatórios para ter mais opções
        const flashcards = await getRandomFlashcards(20);
        
        // Filtrar flashcards para excluir palavras já usadas
        const availableFlashcards = flashcards.filter(card => 
          !usedWords.includes(card.russian.toUpperCase())
        );
        
        // Se não houver flashcards disponíveis, usar qualquer um
        const selectedFlashcard = availableFlashcards.length > 0 
          ? availableFlashcards[Math.floor(Math.random() * availableFlashcards.length)]
          : flashcards[Math.floor(Math.random() * flashcards.length)];
        
        // Adicionar a palavra à lista de palavras usadas
        setUsedWords(prev => [...prev, selectedFlashcard.russian.toUpperCase()]);
        
        // Limitar o tamanho da lista de palavras usadas
        if (usedWords.length > 50) {
          setUsedWords(prev => prev.slice(-50));
        }
        
        setWord({
          russian: selectedFlashcard.russian.toUpperCase(),
          portuguese: selectedFlashcard.portuguese,
          transcription: selectedFlashcard.transcription,
          english: selectedFlashcard.english,
          category: selectedFlashcard.category,
          context: selectedFlashcard.context || `Palavra da categoria: ${selectedFlashcard.category}`
        });
      } catch (error) {
        console.error('Erro ao carregar palavra aleatória:', error);
        // Palavra padrão em caso de erro
        setWord({
          russian: 'ПРИВЕТ',
          portuguese: 'Olá',
          transcription: 'privet',
          english: 'Hello',
          category: 'saudacoes',
          context: 'Usado para cumprimentar amigos e pessoas próximas.'
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadRandomWord();
  };
  
  // Função para reproduzir o áudio da palavra
  const playWordAudio = () => {
    if (!word) return;
    
    try {
      if (typeof playRussianWord === 'function') {
        playRussianWord(word.russian);
      }
    } catch (error) {
      console.error('Erro ao reproduzir áudio da palavra:', error);
    }
  };
  
  // Função para renderizar a palavra com espaços para letras não adivinhadas
  const renderWord = () => {
    if (!word) return null;
    
    return (
      <div className="flex justify-center space-x-2 mb-6">
        {[...word.russian].map((letter, index) => {
          // Espaços e hífens são mostrados automaticamente
          if (letter === ' ') {
            return <div key={index} className="w-6"></div>;
          }
          
          if (letter === '-') {
            return (
              <div key={index} className="w-6 flex items-end justify-center">
                <div className="w-4 h-1 bg-gray-800"></div>
              </div>
            );
          }
          
          return (
            <div 
              key={index} 
              className="w-10 h-12 border-b-2 border-gray-800 flex items-center justify-center"
            >
              {guessedLetters.includes(letter) || gameStatus === 'lost' ? (
                <span className="text-2xl font-bold">{letter}</span>
              ) : (
                <span className="text-2xl font-bold">&nbsp;</span>
              )}
            </div>
          );
        })}
      </div>
    );
  };
  
  // Função para renderizar o boneco da forca
  const renderHangman = () => {
    return (
      <div className="w-40 h-40 mx-auto mb-6 relative">
        {/* Base */}
        <div className="absolute bottom-0 left-0 w-40 h-1 bg-gray-800"></div>
        
        {/* Poste vertical */}
        <div className="absolute bottom-0 left-10 w-1 h-40 bg-gray-800"></div>
        
        {/* Poste horizontal */}
        <div className="absolute top-0 left-10 w-20 h-1 bg-gray-800"></div>
        
        {/* Corda */}
        <div className="absolute top-0 right-10 w-1 h-8 bg-gray-800"></div>
        
        {/* Cabeça */}
        {wrongGuesses >= 1 && (
          <div className="absolute top-8 right-6 w-8 h-8 rounded-full border-2 border-gray-800"></div>
        )}
        
        {/* Corpo */}
        {wrongGuesses >= 2 && (
          <div className="absolute top-16 right-10 w-1 h-12 bg-gray-800"></div>
        )}
        
        {/* Braço esquerdo */}
        {wrongGuesses >= 3 && (
          <div className="absolute top-18 right-10 w-8 h-1 bg-gray-800 transform rotate-45 origin-left"></div>
        )}
        
        {/* Braço direito */}
        {wrongGuesses >= 4 && (
          <div className="absolute top-18 right-10 w-8 h-1 bg-gray-800 transform -rotate-45 origin-right"></div>
        )}
        
        {/* Perna esquerda */}
        {wrongGuesses >= 5 && (
          <div className="absolute top-28 right-10 w-8 h-1 bg-gray-800 transform rotate-45 origin-left"></div>
        )}
        
        {/* Perna direita */}
        {wrongGuesses >= 6 && (
          <div className="absolute top-28 right-10 w-8 h-1 bg-gray-800 transform -rotate-45 origin-right"></div>
        )}
      </div>
    );
  };
  
  // Renderização condicional para carregamento
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4">Carregando jogo...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-xl shadow-card p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-gray-600">Pontuação: </span>
          <span className="font-bold text-primary">{score}</span>
        </div>
        
        <div>
          <span className="text-gray-600">Erros: </span>
          <span className="font-bold text-red-500">{wrongGuesses}/{maxWrongGuesses}</span>
        </div>
      </div>
      
      {renderHangman()}
      
      {renderWord()}
      
      {/* Dicas durante o jogo */}
      {gameStatus === 'playing' && (
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <button
              onClick={playWordAudio}
              className="bg-secondary text-white p-2 rounded-full hover:bg-opacity-80 transition-colors"
              title="Ouvir pronúncia"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </button>
            
            <button
              onClick={revealHint}
              className="text-sm px-3 py-1 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors"
            >
              Revelar uma letra (-2 pontos)
            </button>
          </div>
          
          {/* Dica de categoria sempre visível */}
          <div className="mt-3 bg-blue-50 p-3 rounded-lg">
            <p className="text-blue-800 text-sm">
              <strong>Categoria:</strong> {getCategoryName ? getCategoryName(word.category) : word.category}
            </p>
          </div>
          
          {/* Dica de contexto após 3 erros ou quando solicitado */}
          {(showHint || wrongGuesses >= 3) && (
            <div className="mt-2 bg-yellow-50 p-3 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>Dica:</strong> {word.context || `Palavra com ${word.russian.length} letras da categoria ${word.category}`}
              </p>
            </div>
          )}
        </div>
      )}
      
      {/* Mensagem de fim de jogo */}
      {gameStatus !== 'playing' && (
        <div className={`text-center p-4 rounded-lg mb-6 ${
          gameStatus === 'won' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          <h3 className="text-xl font-bold mb-2">
            {gameStatus === 'won' ? 'Parabéns!' : 'Que pena!'}
          </h3>
          <p>
            {gameStatus === 'won' 
              ? 'Você adivinhou a palavra corretamente!' 
              : `A palavra era "${word.russian}"`}
          </p>
          <p className="mt-1">
            <strong>Tradução:</strong> {word.portuguese}
          </p>
          <p className="mt-1">
            <strong>Transcrição:</strong> [{word.transcription}]
          </p>
          <p className="mt-1">
            <strong>Como usar:</strong> {word.context || `Palavra da categoria ${word.category}`}
          </p>
          
          <div className="mt-4 flex justify-center">
            <button
              onClick={playWordAudio}
              className="mr-4 bg-secondary text-white p-3 rounded-full hover:bg-opacity-80 transition-colors"
              title="Ouvir pronúncia"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </button>
            
            <button
              onClick={restartGame}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-80 transition-colors"
            >
              Jogar Novamente
            </button>
          </div>
        </div>
      )}
      
      {/* Teclado virtual */}
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-11 gap-2">
        {cyrillicAlphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => handleGuess(letter)}
            disabled={guessedLetters.includes(letter) || gameStatus !== 'playing'}
            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-colors ${
              guessedLetters.includes(letter)
                ? word && word.russian.includes(letter)
                  ? 'bg-green-100 text-green-800 border border-green-500'
                  : 'bg-red-100 text-red-800 border border-red-500'
                : 'bg-white text-primary border border-gray-300 hover:bg-gray-100'
            } ${gameStatus !== 'playing' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {letter}
          </button>
        ))}
      </div>
      
      {gameStatus === 'playing' && (
        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
          <h3 className="text-lg font-medium text-blue-700 mb-2">Como jogar</h3>
          <p className="text-blue-600">
            Adivinhe a palavra em russo clicando nas letras do alfabeto cirílico.
            Cada letra correta vale 5 pontos, e completar a palavra dá um bônus de 20 pontos.
            Após 3 erros, uma dica será exibida. Você também pode clicar no botão de áudio para ouvir a pronúncia.
          </p>
        </div>
      )}
    </div>
  );
};
