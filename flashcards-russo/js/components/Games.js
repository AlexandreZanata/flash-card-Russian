// Games.js - Componente para os minigames interativos

const Games = () => {
  // Estado para controlar o jogo selecionado
  const [selectedGame, setSelectedGame] = React.useState(null);
  
  // Função para selecionar um jogo
  const selectGame = (game) => {
    setSelectedGame(game);
  };
  
  // Renderização condicional baseada no jogo selecionado
  const renderGame = () => {
    switch (selectedGame) {
      case 'match':
        return <MatchGame />;
      case 'hangman':
        return <HangmanGame />;
      case 'quiz':
        return <QuizGame />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-neutral mb-6">Selecione um jogo para começar</h2>
            <p className="text-gray-600 mb-8">
              Escolha um dos jogos abaixo para praticar seu vocabulário russo de forma divertida.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <GameCard 
                title="Jogo de Correspondência" 
                description="Ligue as palavras russas às suas traduções corretas."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                }
                onClick={() => selectGame('match')}
              />
              
              <GameCard 
                title="Forca em Cirílico" 
                description="Adivinhe a palavra russa letra por letra antes que o boneco seja enforcado."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                }
                onClick={() => selectGame('hangman')}
              />
              
              <GameCard 
                title="Quiz Rápido" 
                description="Teste seu conhecimento com perguntas de múltipla escolha sobre vocabulário russo."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                onClick={() => selectGame('quiz')}
              />
            </div>
          </div>
        );
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-neutral">Minigames</h1>
        
        {selectedGame && (
          <button
            onClick={() => setSelectedGame(null)}
            className="flex items-center px-4 py-2 bg-white rounded-lg shadow-soft hover:shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar aos jogos
          </button>
        )}
      </div>
      
      {renderGame()}
    </div>
  );
};

// Componente para o card de jogo
const GameCard = ({ title, description, icon, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-card p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-neutral">{description}</p>
    </div>
  );
};

// Componente para o jogo de correspondência
const MatchGame = () => {
  // Estado para armazenar os pares de palavras
  const [pairs, setPairs] = React.useState([]);
  
  // Estado para controlar as seleções do usuário
  const [selectedItems, setSelectedItems] = React.useState([]);
  
  // Estado para controlar os pares encontrados
  const [matchedPairs, setMatchedPairs] = React.useState([]);
  
  // Estado para controlar o carregamento
  const [loading, setLoading] = React.useState(true);
  
  // Estado para controlar o fim do jogo
  const [gameCompleted, setGameCompleted] = React.useState(false);
  
  // Estado para controlar a pontuação
  const [score, setScore] = React.useState(0);
  
  // Estado para controlar o número de tentativas
  const [attempts, setAttempts] = React.useState(0);
  
  // Efeito para carregar os pares de palavras
  React.useEffect(() => {
    const loadPairs = async () => {
      setLoading(true);
      try {
        // Aqui seria a chamada para o banco de dados local
        // Por enquanto, usamos dados de exemplo
        const data = await getRandomFlashcards(8);
        
        // Criar pares de palavras (russo e português)
        const gamePairs = [];
        data.forEach(card => {
          gamePairs.push({ id: `${card.id}-ru`, type: 'russian', text: card.russian, pairId: card.id });
          gamePairs.push({ id: `${card.id}-pt`, type: 'portuguese', text: card.portuguese, pairId: card.id });
        });
        
        // Embaralhar os pares
        const shuffledPairs = shuffleArray(gamePairs);
        setPairs(shuffledPairs);
      } catch (error) {
        console.error('Erro ao carregar pares de palavras:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadPairs();
  }, []);
  
  // Função para lidar com a seleção de um item
  const handleItemClick = (item) => {
    // Ignorar cliques em itens já encontrados
    if (matchedPairs.includes(item.pairId)) {
      return;
    }
    
    // Ignorar cliques no mesmo item
    if (selectedItems.length === 1 && selectedItems[0].id === item.id) {
      return;
    }
    
    // Ignorar cliques quando já há dois itens selecionados
    if (selectedItems.length === 2) {
      return;
    }
    
    // Adicionar item à seleção
    const newSelectedItems = [...selectedItems, item];
    setSelectedItems(newSelectedItems);
    
    // Verificar se há um par
    if (newSelectedItems.length === 2) {
      // Incrementar o número de tentativas
      setAttempts(attempts + 1);
      
      // Verificar se os itens formam um par
      if (newSelectedItems[0].pairId === newSelectedItems[1].pairId) {
        // Adicionar par aos pares encontrados
        setMatchedPairs([...matchedPairs, newSelectedItems[0].pairId]);
        
        // Incrementar a pontuação
        setScore(score + 10);
        
        // Limpar seleção
        setSelectedItems([]);
      } else {
        // Limpar seleção após um breve delay
        setTimeout(() => {
          setSelectedItems([]);
        }, 1000);
      }
    }
  };
  
  // Efeito para verificar se o jogo foi concluído
  React.useEffect(() => {
    if (pairs.length > 0 && matchedPairs.length === pairs.length / 2) {
      setGameCompleted(true);
      
      // Salvar pontuação
      saveGameScore('match', score);
    }
  }, [matchedPairs, pairs, score]);
  
  // Função para reiniciar o jogo
  const restartGame = () => {
    setSelectedItems([]);
    setMatchedPairs([]);
    setGameCompleted(false);
    setScore(0);
    setAttempts(0);
    
    // Recarregar pares
    const loadPairs = async () => {
      setLoading(true);
      try {
        const data = await getRandomFlashcards(8);
        
        const gamePairs = [];
        data.forEach(card => {
          gamePairs.push({ id: `${card.id}-ru`, type: 'russian', text: card.russian, pairId: card.id });
          gamePairs.push({ id: `${card.id}-pt`, type: 'portuguese', text: card.portuguese, pairId: card.id });
        });
        
        const shuffledPairs = shuffleArray(gamePairs);
        setPairs(shuffledPairs);
      } catch (error) {
        console.error('Erro ao carregar pares de palavras:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadPairs();
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
  
  // Renderização para jogo concluído
  if (gameCompleted) {
    return (
      <div className="bg-white rounded-xl shadow-card p-8 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Parabéns!</h2>
        <p className="text-lg mb-6">Você completou o jogo de correspondência!</p>
        
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <p className="text-gray-600">Pontuação</p>
            <p className="text-3xl font-bold text-primary">{score}</p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">Tentativas</p>
            <p className="text-3xl font-bold text-secondary">{attempts}</p>
          </div>
        </div>
        
        <button
          onClick={restartGame}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
        >
          Jogar Novamente
        </button>
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-gray-600">Pontuação: </span>
          <span className="font-bold text-primary">{score}</span>
        </div>
        
        <div>
          <span className="text-gray-600">Tentativas: </span>
          <span className="font-bold">{attempts}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
        {pairs.map((item) => (
          <div
            key={item.id}
            onClick={() => handleItemClick(item)}
            className={`flex items-center justify-center p-4 rounded-xl cursor-pointer transition-all h-24 ${
              selectedItems.some(selected => selected.id === item.id)
                ? 'bg-primary text-white shadow-lg'
                : matchedPairs.includes(item.pairId)
                  ? 'bg-green-100 text-green-800 border-2 border-green-500'
                  : 'bg-white text-neutral shadow-soft hover:shadow-md'
            }`}
          >
            <span className="text-center font-medium">
              {selectedItems.some(selected => selected.id === item.id) || matchedPairs.includes(item.pairId)
                ? item.text
                : '?'}
            </span>
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
        <h3 className="text-lg font-medium text-blue-700 mb-2">Como jogar</h3>
        <p className="text-blue-600">
          Clique nos cartões para revelar as palavras e encontre os pares correspondentes de russo e português.
          Cada par correto vale 10 pontos. Tente completar o jogo com o menor número de tentativas!
        </p>
      </div>
    </div>
  );
};

// Componente para o jogo da forca
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
        // Aqui seria a chamada para o banco de dados local
        // Por enquanto, usamos dados de exemplo
        const data = await getRandomFlashcards(1);
        setWord({
          russian: data[0].russian.toUpperCase(),
          portuguese: data[0].portuguese,
          transcription: data[0].transcription
        });
      } catch (error) {
        console.error('Erro ao carregar palavra aleatória:', error);
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
      
      // Verificar se o jogador perdeu
      if (newWrongGuesses >= maxWrongGuesses) {
        setGameStatus('lost');
      }
    } else {
      // Incrementar a pontuação
      setScore(score + 5);
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
        saveGameScore('hangman', score + 20);
      }
    }
  }, [guessedLetters, word, gameStatus, score]);
  
  // Função para reiniciar o jogo
  const restartGame = () => {
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameStatus('playing');
    setScore(0);
    
    // Carregar nova palavra
    const loadRandomWord = async () => {
      setLoading(true);
      try {
        const data = await getRandomFlashcards(1);
        setWord({
          russian: data[0].russian.toUpperCase(),
          portuguese: data[0].portuguese,
          transcription: data[0].transcription
        });
      } catch (error) {
        console.error('Erro ao carregar palavra aleatória:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadRandomWord();
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
          
          <button
            onClick={restartGame}
            className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
          >
            Jogar Novamente
          </button>
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
            Cuidado! Após 6 erros, você perde o jogo.
          </p>
        </div>
      )}
    </div>
  );
};

// Componente para o quiz rápido
const QuizGame = () => {
  // Estado para armazenar as perguntas do quiz
  const [questions, setQuestions] = React.useState([]);
  
  // Estado para controlar a pergunta atual
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  
  // Estado para armazenar as respostas do usuário
  const [userAnswers, setUserAnswers] = React.useState([]);
  
  // Estado para controlar o carregamento
  const [loading, setLoading] = React.useState(true);
  
  // Estado para controlar o fim do quiz
  const [quizCompleted, setQuizCompleted] = React.useState(false);
  
  // Estado para controlar a pontuação
  const [score, setScore] = React.useState(0);
  
  // Efeito para carregar as perguntas do quiz
  React.useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      try {
        // Aqui seria a chamada para o banco de dados local
        // Por enquanto, usamos dados de exemplo
        const data = await getRandomFlashcards(10);
        
        // Criar perguntas de quiz
        const quizQuestions = data.map(card => {
          // Gerar opções incorretas
          const incorrectOptions = data
            .filter(c => c.id !== card.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(c => c.portuguese);
          
          // Adicionar opção correta e embaralhar
          const options = [...incorrectOptions, card.portuguese].sort(() => 0.5 - Math.random());
          
          return {
            id: card.id,
            question: `O que significa "${card.russian}"?`,
            options,
            correctAnswer: card.portuguese,
            russian: card.russian,
            transcription: card.transcription
          };
        });
        
        setQuestions(quizQuestions);
      } catch (error) {
        console.error('Erro ao carregar perguntas do quiz:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadQuestions();
  }, []);
  
  // Função para lidar com a seleção de uma resposta
  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    
    // Adicionar resposta do usuário
    const newUserAnswers = [...userAnswers, { 
      questionId: currentQuestion.id,
      userAnswer: answer,
      isCorrect
    }];
    setUserAnswers(newUserAnswers);
    
    // Atualizar pontuação
    if (isCorrect) {
      setScore(score + 10);
    }
    
    // Avançar para a próxima pergunta ou finalizar o quiz
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setQuizCompleted(true);
        
        // Salvar pontuação
        saveGameScore('quiz', score + (isCorrect ? 10 : 0));
      }, 1000);
    }
  };
  
  // Função para reiniciar o quiz
  const restartQuiz = () => {
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
    setScore(0);
    
    // Recarregar perguntas
    const loadQuestions = async () => {
      setLoading(true);
      try {
        const data = await getRandomFlashcards(10);
        
        const quizQuestions = data.map(card => {
          const incorrectOptions = data
            .filter(c => c.id !== card.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(c => c.portuguese);
          
          const options = [...incorrectOptions, card.portuguese].sort(() => 0.5 - Math.random());
          
          return {
            id: card.id,
            question: `O que significa "${card.russian}"?`,
            options,
            correctAnswer: card.portuguese,
            russian: card.russian,
            transcription: card.transcription
          };
        });
        
        setQuestions(quizQuestions);
      } catch (error) {
        console.error('Erro ao carregar perguntas do quiz:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadQuestions();
  };
  
  // Renderização condicional para carregamento
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4">Carregando quiz...</p>
        </div>
      </div>
    );
  }
  
  // Renderização para quiz concluído
  if (quizCompleted) {
    const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    
    return (
      <div className="bg-white rounded-xl shadow-card p-8">
        <h2 className="text-2xl font-bold text-primary mb-4 text-center">Resultado do Quiz</h2>
        
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <p className="text-gray-600">Pontuação</p>
            <p className="text-3xl font-bold text-primary">{score}</p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">Acertos</p>
            <p className="text-3xl font-bold text-green-500">{correctAnswers}/{questions.length}</p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">Porcentagem</p>
            <p className="text-3xl font-bold text-secondary">{percentage}%</p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-4">Revisão das Respostas:</h3>
        
        <div className="space-y-4 mb-8">
          {questions.map((question, index) => {
            const userAnswer = userAnswers[index];
            
            return (
              <div 
                key={question.id} 
                className={`p-4 rounded-lg ${
                  userAnswer.isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                }`}
              >
                <p className="font-medium mb-1">{index + 1}. {question.question}</p>
                <p className="text-sm text-gray-600 mb-2">Transcrição: [{question.transcription}]</p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-white px-2 py-1 rounded border">
                    <strong>Sua resposta:</strong> {userAnswer.userAnswer}
                  </span>
                  
                  {!userAnswer.isCorrect && (
                    <span className="text-sm bg-white px-2 py-1 rounded border border-green-500">
                      <strong>Resposta correta:</strong> {question.correctAnswer}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <button
            onClick={restartQuiz}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
          >
            Jogar Novamente
          </button>
        </div>
      </div>
    );
  }
  
  // Pergunta atual
  const currentQuestion = questions[currentQuestionIndex];
  
  // Verificar se o usuário já respondeu à pergunta atual
  const currentUserAnswer = userAnswers[currentQuestionIndex];
  
  return (
    <div className="bg-white rounded-xl shadow-card p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-gray-600">Pontuação: </span>
          <span className="font-bold text-primary">{score}</span>
        </div>
        
        <div>
          <span className="text-gray-600">Pergunta: </span>
          <span className="font-bold">{currentQuestionIndex + 1}/{questions.length}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{currentQuestion.question}</h2>
        <p className="text-gray-600">Transcrição: [{currentQuestion.transcription}]</p>
      </div>
      
      <div className="space-y-3 mb-6">
        {currentQuestion.options.map((option, index) => {
          // Determinar a classe do botão com base na resposta do usuário
          let buttonClass = 'w-full text-left px-4 py-3 rounded-lg border transition-colors ';
          
          if (currentUserAnswer) {
            if (option === currentQuestion.correctAnswer) {
              buttonClass += 'bg-green-100 text-green-800 border-green-500';
            } else if (option === currentUserAnswer.userAnswer && !currentUserAnswer.isCorrect) {
              buttonClass += 'bg-red-100 text-red-800 border-red-500';
            } else {
              buttonClass += 'bg-white text-gray-500 border-gray-300';
            }
          } else {
            buttonClass += 'bg-white text-neutral border-gray-300 hover:bg-gray-50';
          }
          
          return (
            <button
              key={index}
              onClick={() => !currentUserAnswer && handleAnswer(option)}
              disabled={currentUserAnswer !== undefined}
              className={buttonClass}
            >
              <div className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center mr-3">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </div>
            </button>
          );
        })}
      </div>
      
      {!currentUserAnswer && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
          <h3 className="text-lg font-medium text-blue-700 mb-2">Como jogar</h3>
          <p className="text-blue-600">
            Selecione a tradução correta para a palavra russa apresentada.
            Cada resposta correta vale 10 pontos. Tente acertar o máximo de perguntas!
          </p>
        </div>
      )}
    </div>
  );
};

// Função auxiliar para embaralhar um array
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
