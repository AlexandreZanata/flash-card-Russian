// db.js - Módulo para gerenciar o armazenamento local dos dados

// Constantes para nomes de armazenamento
const STORAGE_KEYS = {
  FLASHCARDS: 'russocards_flashcards',
  CUSTOM_FLASHCARDS: 'russocards_custom_flashcards',
  PROGRESS: 'russocards_progress',
  GAME_SCORES: 'russocards_game_scores',
  STUDY_TIME: 'russocards_study_time',
  LAST_VISIT: 'russocards_last_visit'
};

// Função para inicializar o banco de dados
const initializeDatabase = async () => {
  console.log('Inicializando banco de dados local...');
  
  // Verificar se já existem dados armazenados
  const existingFlashcards = localStorage.getItem(STORAGE_KEYS.FLASHCARDS);
  
  if (!existingFlashcards) {
    console.log('Criando dados iniciais...');
    
    // Inicializar com dados de exemplo (em produção, seriam os 10.000 palavras)
    const initialFlashcards = generateInitialFlashcards();
    localStorage.setItem(STORAGE_KEYS.FLASHCARDS, JSON.stringify(initialFlashcards));
    
    // Inicializar flashcards personalizados
    localStorage.setItem(STORAGE_KEYS.CUSTOM_FLASHCARDS, JSON.stringify([]));
    
    // Inicializar progresso
    const initialProgress = {};
    const categories = getCategories();
    
    categories.forEach(category => {
      initialProgress[category.id] = {
        totalWords: initialFlashcards.filter(card => card.category === category.id).length,
        knownWords: 0,
        lastStudied: null
      };
    });
    
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(initialProgress));
    
    // Inicializar pontuações de jogos
    const initialGameScores = {
      match: { highScore: 0, gamesPlayed: 0, lastPlayed: null },
      hangman: { highScore: 0, gamesPlayed: 0, lastPlayed: null },
      quiz: { highScore: 0, gamesPlayed: 0, lastPlayed: null }
    };
    
    localStorage.setItem(STORAGE_KEYS.GAME_SCORES, JSON.stringify(initialGameScores));
    
    // Inicializar tempo de estudo
    localStorage.setItem(STORAGE_KEYS.STUDY_TIME, '0');
  }
  
  // Registrar visita
  localStorage.setItem(STORAGE_KEYS.LAST_VISIT, new Date().toISOString());
  
  // Iniciar contador de tempo de estudo
  startStudyTimeTracking();
  
  return true;
};

// Função para obter todas as categorias
const getCategories = () => {
  return [
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
    { id: 'viagem', name: 'Viagem' },
    { id: 'outros', name: 'Outros' }
  ];
};

// Função para gerar dados iniciais de flashcards
const generateInitialFlashcards = () => {
  // Em produção, aqui seriam carregadas as 10.000 palavras mais frequentes
  return [
    // Categoria: Saudações
    {
      id: '1',
      russian: 'Привет',
      transcription: 'privet',
      portuguese: 'Olá (informal)',
      english: 'Hello (informal)',
      category: 'saudacoes',
      known: false
    },
    {
      id: '2',
      russian: 'Здравствуйте',
      transcription: 'zdravstvuyte',
      portuguese: 'Olá (formal)',
      english: 'Hello (formal)',
      category: 'saudacoes',
      known: false
    },
    {
      id: '3',
      russian: 'До свидания',
      transcription: 'do svidaniya',
      portuguese: 'Adeus',
      english: 'Goodbye',
      category: 'saudacoes',
      known: false
    },
    {
      id: '4',
      russian: 'Спасибо',
      transcription: 'spasibo',
      portuguese: 'Obrigado',
      english: 'Thank you',
      category: 'saudacoes',
      known: false
    },
    {
      id: '5',
      russian: 'Пожалуйста',
      transcription: 'pozhaluysta',
      portuguese: 'Por favor',
      english: 'Please',
      category: 'saudacoes',
      known: false
    },
    
    // Categoria: Comida
    {
      id: '6',
      russian: 'Хлеб',
      transcription: 'khleb',
      portuguese: 'Pão',
      english: 'Bread',
      category: 'comida',
      known: false
    },
    {
      id: '7',
      russian: 'Вода',
      transcription: 'voda',
      portuguese: 'Água',
      english: 'Water',
      category: 'comida',
      known: false
    },
    {
      id: '8',
      russian: 'Мясо',
      transcription: 'myaso',
      portuguese: 'Carne',
      english: 'Meat',
      category: 'comida',
      known: false
    },
    {
      id: '9',
      russian: 'Суп',
      transcription: 'sup',
      portuguese: 'Sopa',
      english: 'Soup',
      category: 'comida',
      known: false
    },
    {
      id: '10',
      russian: 'Рыба',
      transcription: 'ryba',
      portuguese: 'Peixe',
      english: 'Fish',
      category: 'comida',
      known: false
    },
    
    // Categoria: Transporte
    {
      id: '11',
      russian: 'Автобус',
      transcription: 'avtobus',
      portuguese: 'Ônibus',
      english: 'Bus',
      category: 'transporte',
      known: false
    },
    {
      id: '12',
      russian: 'Машина',
      transcription: 'mashina',
      portuguese: 'Carro',
      english: 'Car',
      category: 'transporte',
      known: false
    },
    {
      id: '13',
      russian: 'Поезд',
      transcription: 'poyezd',
      portuguese: 'Trem',
      english: 'Train',
      category: 'transporte',
      known: false
    },
    {
      id: '14',
      russian: 'Самолёт',
      transcription: 'samolyot',
      portuguese: 'Avião',
      english: 'Airplane',
      category: 'transporte',
      known: false
    },
    {
      id: '15',
      russian: 'Метро',
      transcription: 'metro',
      portuguese: 'Metrô',
      english: 'Subway',
      category: 'transporte',
      known: false
    },
    
    // Categoria: Emoções
    {
      id: '16',
      russian: 'Счастье',
      transcription: 'schastye',
      portuguese: 'Felicidade',
      english: 'Happiness',
      category: 'emocoes',
      known: false
    },
    {
      id: '17',
      russian: 'Грусть',
      transcription: 'grust',
      portuguese: 'Tristeza',
      english: 'Sadness',
      category: 'emocoes',
      known: false
    },
    {
      id: '18',
      russian: 'Любовь',
      transcription: 'lyubov',
      portuguese: 'Amor',
      english: 'Love',
      category: 'emocoes',
      known: false
    },
    {
      id: '19',
      russian: 'Страх',
      transcription: 'strakh',
      portuguese: 'Medo',
      english: 'Fear',
      category: 'emocoes',
      known: false
    },
    {
      id: '20',
      russian: 'Злость',
      transcription: 'zlost',
      portuguese: 'Raiva',
      english: 'Anger',
      category: 'emocoes',
      known: false
    },
    
    // Categoria: Família
    {
      id: '21',
      russian: 'Мама',
      transcription: 'mama',
      portuguese: 'Mãe',
      english: 'Mother',
      category: 'familia',
      known: false
    },
    {
      id: '22',
      russian: 'Папа',
      transcription: 'papa',
      portuguese: 'Pai',
      english: 'Father',
      category: 'familia',
      known: false
    },
    {
      id: '23',
      russian: 'Сестра',
      transcription: 'sestra',
      portuguese: 'Irmã',
      english: 'Sister',
      category: 'familia',
      known: false
    },
    {
      id: '24',
      russian: 'Брат',
      transcription: 'brat',
      portuguese: 'Irmão',
      english: 'Brother',
      category: 'familia',
      known: false
    },
    {
      id: '25',
      russian: 'Бабушка',
      transcription: 'babushka',
      portuguese: 'Avó',
      english: 'Grandmother',
      category: 'familia',
      known: false
    }
  ];
};

// Função para obter flashcards por categoria
const getFlashcardsByCategory = async (category = null) => {
  try {
    const flashcardsJson = localStorage.getItem(STORAGE_KEYS.FLASHCARDS);
    const flashcards = JSON.parse(flashcardsJson);
    
    if (category) {
      return flashcards.filter(card => card.category === category);
    }
    
    return flashcards;
  } catch (error) {
    console.error('Erro ao obter flashcards:', error);
    return [];
  }
};

// Função para obter flashcards aleatórios
const getRandomFlashcards = async (count = 10) => {
  try {
    const flashcardsJson = localStorage.getItem(STORAGE_KEYS.FLASHCARDS);
    const flashcards = JSON.parse(flashcardsJson);
    
    // Embaralhar e retornar o número solicitado
    return flashcards
      .sort(() => 0.5 - Math.random())
      .slice(0, count);
  } catch (error) {
    console.error('Erro ao obter flashcards aleatórios:', error);
    return [];
  }
};

// Função para atualizar o progresso de um flashcard
const updateFlashcardProgress = async (flashcardId, known) => {
  try {
    // Atualizar o flashcard
    const flashcardsJson = localStorage.getItem(STORAGE_KEYS.FLASHCARDS);
    const flashcards = JSON.parse(flashcardsJson);
    
    const updatedFlashcards = flashcards.map(card => {
      if (card.id === flashcardId) {
        return { ...card, known };
      }
      return card;
    });
    
    localStorage.setItem(STORAGE_KEYS.FLASHCARDS, JSON.stringify(updatedFlashcards));
    
    // Atualizar o progresso da categoria
    const flashcard = flashcards.find(card => card.id === flashcardId);
    if (flashcard) {
      const progressJson = localStorage.getItem(STORAGE_KEYS.PROGRESS);
      const progress = JSON.parse(progressJson);
      
      const categoryProgress = progress[flashcard.category];
      
      // Se o estado mudou, atualizar o contador
      if (known !== flashcard.known) {
        if (known) {
          categoryProgress.knownWords += 1;
        } else {
          categoryProgress.knownWords = Math.max(0, categoryProgress.knownWords - 1);
        }
      }
      
      categoryProgress.lastStudied = new Date().toISOString();
      
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
    }
    
    return true;
  } catch (error) {
    console.error('Erro ao atualizar progresso:', error);
    return false;
  }
};

// Função para obter flashcards personalizados
const getCustomFlashcards = async () => {
  try {
    const customFlashcardsJson = localStorage.getItem(STORAGE_KEYS.CUSTOM_FLASHCARDS);
    return JSON.parse(customFlashcardsJson) || [];
  } catch (error) {
    console.error('Erro ao obter flashcards personalizados:', error);
    return [];
  }
};

// Função para adicionar um flashcard personalizado
const addCustomFlashcard = async (flashcard) => {
  try {
    const customFlashcardsJson = localStorage.getItem(STORAGE_KEYS.CUSTOM_FLASHCARDS);
    const customFlashcards = JSON.parse(customFlashcardsJson) || [];
    
    customFlashcards.push(flashcard);
    
    localStorage.setItem(STORAGE_KEYS.CUSTOM_FLASHCARDS, JSON.stringify(customFlashcards));
    
    return true;
  } catch (error) {
    console.error('Erro ao adicionar flashcard personalizado:', error);
    return false;
  }
};

// Função para atualizar um flashcard personalizado
const updateCustomFlashcard = async (flashcard) => {
  try {
    const customFlashcardsJson = localStorage.getItem(STORAGE_KEYS.CUSTOM_FLASHCARDS);
    const customFlashcards = JSON.parse(customFlashcardsJson) || [];
    
    const updatedFlashcards = customFlashcards.map(card => {
      if (card.id === flashcard.id) {
        return flashcard;
      }
      return card;
    });
    
    localStorage.setItem(STORAGE_KEYS.CUSTOM_FLASHCARDS, JSON.stringify(updatedFlashcards));
    
    return true;
  } catch (error) {
    console.error('Erro ao atualizar flashcard personalizado:', error);
    return false;
  }
};

// Função para excluir um flashcard personalizado
const deleteCustomFlashcard = async (flashcardId) => {
  try {
    const customFlashcardsJson = localStorage.getItem(STORAGE_KEYS.CUSTOM_FLASHCARDS);
    const customFlashcards = JSON.parse(customFlashcardsJson) || [];
    
    const updatedFlashcards = customFlashcards.filter(card => card.id !== flashcardId);
    
    localStorage.setItem(STORAGE_KEYS.CUSTOM_FLASHCARDS, JSON.stringify(updatedFlashcards));
    
    return true;
  } catch (error) {
    console.error('Erro ao excluir flashcard personalizado:', error);
    return false;
  }
};

// Função para obter o progresso dos flashcards
const getFlashcardProgress = async () => {
  try {
    const progressJson = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return JSON.parse(progressJson) || {};
  } catch (error) {
    console.error('Erro ao obter progresso:', error);
    return {};
  }
};

// Função para obter as pontuações dos jogos
const getGameScores = async () => {
  try {
    const scoresJson = localStorage.getItem(STORAGE_KEYS.GAME_SCORES);
    return JSON.parse(scoresJson) || {
      match: { highScore: 0, gamesPlayed: 0, lastPlayed: null },
      hangman: { highScore: 0, gamesPlayed: 0, lastPlayed: null },
      quiz: { highScore: 0, gamesPlayed: 0, lastPlayed: null }
    };
  } catch (error) {
    console.error('Erro ao obter pontuações dos jogos:', error);
    return {
      match: { highScore: 0, gamesPlayed: 0, lastPlayed: null },
      hangman: { highScore: 0, gamesPlayed: 0, lastPlayed: null },
      quiz: { highScore: 0, gamesPlayed: 0, lastPlayed: null }
    };
  }
};

// Função para salvar a pontuação de um jogo
const saveGameScore = async (gameType, score) => {
  try {
    const scoresJson = localStorage.getItem(STORAGE_KEYS.GAME_SCORES);
    const scores = JSON.parse(scoresJson) || {
      match: { highScore: 0, gamesPlayed: 0, lastPlayed: null },
      hangman: { highScore: 0, gamesPlayed: 0, lastPlayed: null },
      quiz: { highScore: 0, gamesPlayed: 0, lastPlayed: null }
    };
    
    const gameScore = scores[gameType] || { highScore: 0, gamesPlayed: 0, lastPlayed: null };
    
    // Atualizar pontuação máxima se necessário
    if (score > gameScore.highScore) {
      gameScore.highScore = score;
    }
    
    // Incrementar número de partidas jogadas
    gameScore.gamesPlayed += 1;
    
    // Atualizar data da última partida
    gameScore.lastPlayed = new Date().toISOString();
    
    scores[gameType] = gameScore;
    
    localStorage.setItem(STORAGE_KEYS.GAME_SCORES, JSON.stringify(scores));
    
    return true;
  } catch (error) {
    console.error('Erro ao salvar pontuação do jogo:', error);
    return false;
  }
};

// Função para obter estatísticas totais
const getTotalStats = async () => {
  try {
    // Obter todos os flashcards
    const flashcardsJson = localStorage.getItem(STORAGE_KEYS.FLASHCARDS);
    const flashcards = JSON.parse(flashcardsJson) || [];
    
    // Obter flashcards personalizados
    const customFlashcardsJson = localStorage.getItem(STORAGE_KEYS.CUSTOM_FLASHCARDS);
    const customFlashcards = JSON.parse(customFlashcardsJson) || [];
    
    // Calcular total de palavras e palavras conhecidas
    const totalWords = flashcards.length + customFlashcards.length;
    const knownWords = flashcards.filter(card => card.known).length;
    
    // Calcular porcentagem
    const percentage = totalWords > 0 ? Math.round((knownWords / totalWords) * 100) : 0;
    
    // Obter tempo de estudo
    const studyTimeJson = localStorage.getItem(STORAGE_KEYS.STUDY_TIME);
    const studyTime = parseInt(studyTimeJson || '0', 10);
    
    return {
      totalWords,
      knownWords,
      percentage,
      studyTime
    };
  } catch (error) {
    console.error('Erro ao obter estatísticas totais:', error);
    return {
      totalWords: 0,
      knownWords: 0,
      percentage: 0,
      studyTime: 0
    };
  }
};

// Variável para armazenar o intervalo de tempo de estudo
let studyTimeInterval = null;

// Função para iniciar o rastreamento do tempo de estudo
const startStudyTimeTracking = () => {
  // Limpar intervalo existente, se houver
  if (studyTimeInterval) {
    clearInterval(studyTimeInterval);
  }
  
  // Atualizar o tempo de estudo a cada minuto
  studyTimeInterval = setInterval(() => {
    try {
      const studyTimeJson = localStorage.getItem(STORAGE_KEYS.STUDY_TIME);
      const studyTime = parseInt(studyTimeJson || '0', 10);
      
      // Incrementar em 1 minuto
      localStorage.setItem(STORAGE_KEYS.STUDY_TIME, (studyTime + 1).toString());
    } catch (error) {
      console.error('Erro ao atualizar tempo de estudo:', error);
    }
  }, 60000); // 60000 ms = 1 minuto
  
  // Parar o rastreamento quando a página for fechada
  window.addEventListener('beforeunload', () => {
    if (studyTimeInterval) {
      clearInterval(studyTimeInterval);
    }
  });
};

// Exportar funções para uso nos componentes
// (No React via Babel em navegador, estas funções estarão disponíveis globalmente)
