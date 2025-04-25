// MatchGame.js - Componente para o jogo de correspondência com maior aleatoriedade

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
  
  // Estado para armazenar palavras já usadas
  const [usedWords, setUsedWords] = React.useState([]);
  
  // Efeito para carregar os pares de palavras
  React.useEffect(() => {
    const loadPairs = async () => {
      setLoading(true);
      try {
        // Obter flashcards aleatórios (mais do que o necessário para ter mais opções)
        const flashcards = await getRandomFlashcards(30);
        
        // Filtrar flashcards para excluir palavras já usadas
        const availableFlashcards = flashcards.filter(card => 
          !usedWords.includes(card.id)
        );
        
        // Selecionar 8 flashcards aleatórios dos disponíveis
        const selectedFlashcards = [];
        const availableCount = Math.min(8, availableFlashcards.length);
        
        // Se não houver flashcards disponíveis suficientes, usar os originais
        if (availableCount < 8) {
          // Embaralhar os flashcards originais
          const shuffledOriginal = shuffleArray([...flashcards]);
          selectedFlashcards.push(...shuffledOriginal.slice(0, 8));
        } else {
          // Embaralhar os flashcards disponíveis
          const shuffledAvailable = shuffleArray([...availableFlashcards]);
          selectedFlashcards.push(...shuffledAvailable.slice(0, 8));
        }
        
        // Adicionar os IDs das palavras selecionadas à lista de usadas
        const newUsedWords = selectedFlashcards.map(card => card.id);
        setUsedWords(prev => [...prev, ...newUsedWords]);
        
        // Limitar o tamanho da lista de palavras usadas
        if (usedWords.length > 50) {
          setUsedWords(prev => prev.slice(-50));
        }
        
        // Criar pares de palavras (russo e português)
        const gamePairs = [];
        selectedFlashcards.forEach(card => {
          gamePairs.push({ 
            id: `${card.id}-ru`, 
            type: 'russian', 
            text: card.russian, 
            pairId: card.id,
            category: card.category
          });
          gamePairs.push({ 
            id: `${card.id}-pt`, 
            type: 'portuguese', 
            text: card.portuguese, 
            pairId: card.id,
            category: card.category
          });
        });
        
        // Embaralhar os pares
        const shuffledPairs = shuffleArray(gamePairs);
        setPairs(shuffledPairs);
      } catch (error) {
        console.error('Erro ao carregar pares de palavras:', error);
        // Criar pares padrão em caso de erro
        const defaultPairs = [
          { id: 'default-1-ru', type: 'russian', text: 'Привет', pairId: 'default-1', category: 'saudacoes' },
          { id: 'default-1-pt', type: 'portuguese', text: 'Olá', pairId: 'default-1', category: 'saudacoes' },
          { id: 'default-2-ru', type: 'russian', text: 'Спасибо', pairId: 'default-2', category: 'saudacoes' },
          { id: 'default-2-pt', type: 'portuguese', text: 'Obrigado', pairId: 'default-2', category: 'saudacoes' },
          { id: 'default-3-ru', type: 'russian', text: 'Да', pairId: 'default-3', category: 'saudacoes' },
          { id: 'default-3-pt', type: 'portuguese', text: 'Sim', pairId: 'default-3', category: 'saudacoes' },
          { id: 'default-4-ru', type: 'russian', text: 'Нет', pairId: 'default-4', category: 'saudacoes' },
          { id: 'default-4-pt', type: 'portuguese', text: 'Não', pairId: 'default-4', category: 'saudacoes' },
          { id: 'default-5-ru', type: 'russian', text: 'Хорошо', pairId: 'default-5', category: 'saudacoes' },
          { id: 'default-5-pt', type: 'portuguese', text: 'Bem', pairId: 'default-5', category: 'saudacoes' },
          { id: 'default-6-ru', type: 'russian', text: 'Пока', pairId: 'default-6', category: 'saudacoes' },
          { id: 'default-6-pt', type: 'portuguese', text: 'Tchau', pairId: 'default-6', category: 'saudacoes' },
          { id: 'default-7-ru', type: 'russian', text: 'Извините', pairId: 'default-7', category: 'saudacoes' },
          { id: 'default-7-pt', type: 'portuguese', text: 'Desculpe', pairId: 'default-7', category: 'saudacoes' },
          { id: 'default-8-ru', type: 'russian', text: 'Как дела?', pairId: 'default-8', category: 'saudacoes' },
          { id: 'default-8-pt', type: 'portuguese', text: 'Como vai?', pairId: 'default-8', category: 'saudacoes' }
        ];
        setPairs(shuffleArray(defaultPairs));
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
    
    // Reproduzir som de clique
    try {
      if (typeof playClickSound === 'function') {
        playClickSound();
      }
    } catch (error) {
      console.error('Erro ao reproduzir som de clique:', error);
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
        
        // Reproduzir som de acerto
        try {
          if (typeof playCorrectSound === 'function') {
            playCorrectSound();
          }
        } catch (error) {
          console.error('Erro ao reproduzir som de acerto:', error);
        }
        
        // Reproduzir a palavra em russo
        try {
          if (typeof playRussianWord === 'function') {
            const russianItem = newSelectedItems.find(item => item.type === 'russian');
            if (russianItem) {
              playRussianWord(russianItem.text);
            }
          }
        } catch (error) {
          console.error('Erro ao reproduzir palavra em russo:', error);
        }
      } else {
        // Limpar seleção após um breve delay
        setTimeout(() => {
          setSelectedItems([]);
        }, 1000);
        
        // Reproduzir som de erro
        try {
          if (typeof playWrongSound === 'function') {
            playWrongSound();
          }
        } catch (error) {
          console.error('Erro ao reproduzir som de erro:', error);
        }
      }
    }
  };
  
  // Efeito para verificar se o jogo foi concluído
  React.useEffect(() => {
    if (pairs.length > 0 && matchedPairs.length === pairs.length / 2) {
      setGameCompleted(true);
      
      // Salvar pontuação
      try {
        if (typeof saveGameScore === 'function') {
          saveGameScore('match', score);
        }
      } catch (error) {
        console.error('Erro ao salvar pontuação:', error);
      }
      
      // Reproduzir som de vitória
      try {
        if (typeof playVictorySound === 'function') {
          playVictorySound();
        }
      } catch (error) {
        console.error('Erro ao reproduzir som de vitória:', error);
      }
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
        // Obter flashcards aleatórios (mais do que o necessário para ter mais opções)
        const flashcards = await getRandomFlashcards(30);
        
        // Filtrar flashcards para excluir palavras já usadas
        const availableFlashcards = flashcards.filter(card => 
          !usedWords.includes(card.id)
        );
        
        // Selecionar 8 flashcards aleatórios dos disponíveis
        const selectedFlashcards = [];
        const availableCount = Math.min(8, availableFlashcards.length);
        
        // Se não houver flashcards disponíveis suficientes, usar os originais
        if (availableCount < 8) {
          // Embaralhar os flashcards originais
          const shuffledOriginal = shuffleArray([...flashcards]);
          selectedFlashcards.push(...shuffledOriginal.slice(0, 8));
        } else {
          // Embaralhar os flashcards disponíveis
          const shuffledAvailable = shuffleArray([...availableFlashcards]);
          selectedFlashcards.push(...shuffledAvailable.slice(0, 8));
        }
        
        // Adicionar os IDs das palavras selecionadas à lista de usadas
        const newUsedWords = selectedFlashcards.map(card => card.id);
        setUsedWords(prev => [...prev, ...newUsedWords]);
        
        // Limitar o tamanho da lista de palavras usadas
        if (usedWords.length > 50) {
          setUsedWords(prev => prev.slice(-50));
        }
        
        // Criar pares de palavras (russo e português)
        const gamePairs = [];
        selectedFlashcards.forEach(card => {
          gamePairs.push({ 
            id: `${card.id}-ru`, 
            type: 'russian', 
            text: card.russian, 
            pairId: card.id,
            category: card.category
          });
          gamePairs.push({ 
            id: `${card.id}-pt`, 
            type: 'portuguese', 
            text: card.portuguese, 
            pairId: card.id,
            category: card.category
          });
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
          A cada novo jogo, palavras diferentes serão apresentadas.
        </p>
      </div>
    </div>
  );
};
