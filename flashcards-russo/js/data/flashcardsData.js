// flashcardsData.js - Arquivo para importar e exportar todos os dados de flashcards

// Dados de exemplo para flashcards (para garantir que sempre haja dados disponíveis)
const defaultFlashcards = [
  {
    id: 'default-001',
    russian: 'Привет',
    transcription: 'privet',
    portuguese: 'Olá (informal)',
    english: 'Hello (informal)',
    category: 'saudacoes',
    known: false
  },
  {
    id: 'default-002',
    russian: 'Спасибо',
    transcription: 'spasibo',
    portuguese: 'Obrigado',
    english: 'Thank you',
    category: 'saudacoes',
    known: false
  },
  {
    id: 'default-003',
    russian: 'Да',
    transcription: 'da',
    portuguese: 'Sim',
    english: 'Yes',
    category: 'saudacoes',
    known: false
  },
  {
    id: 'default-004',
    russian: 'Нет',
    transcription: 'nyet',
    portuguese: 'Não',
    english: 'No',
    category: 'saudacoes',
    known: false
  },
  {
    id: 'default-005',
    russian: 'Пожалуйста',
    transcription: 'pozhaluysta',
    portuguese: 'Por favor',
    english: 'Please',
    category: 'saudacoes',
    known: false
  }
];

// Função para obter o nome da categoria
const getCategoryName = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.name : 'Desconhecida';
};

// Função para obter flashcards por categoria
const getFlashcardsByCategory = (categoryId) => {
  // Verificar se a categoria existe
  if (!categoryId) {
    return getRandomFlashcards(10);
  }
  
  // Tentar obter os flashcards da categoria específica
  try {
    switch (categoryId) {
      case 'saudacoes':
        return saudacoesFlashcards && saudacoesFlashcards.length > 0 ? 
               saudacoesFlashcards : defaultFlashcards;
      case 'comida':
        return comidaFlashcards && comidaFlashcards.length > 0 ? 
               comidaFlashcards : defaultFlashcards;
      case 'transporte':
        return transporteFlashcards && transporteFlashcards.length > 0 ? 
               transporteFlashcards : defaultFlashcards;
      case 'emocoes':
        return emocoesFlashcards && emocoesFlashcards.length > 0 ? 
               emocoesFlashcards : defaultFlashcards;
      case 'familia':
        return familiaFlashcards && familiaFlashcards.length > 0 ? 
               familiaFlashcards : defaultFlashcards;
      case 'numeros':
        return numerosFlashcards && numerosFlashcards.length > 0 ? 
               numerosFlashcards : defaultFlashcards;
      case 'cores':
        return coresFlashcards && coresFlashcards.length > 0 ? 
               coresFlashcards : defaultFlashcards;
      case 'tempo':
        return tempoFlashcards && tempoFlashcards.length > 0 ? 
               tempoFlashcards : defaultFlashcards;
      case 'casa':
        return casaFlashcards && casaFlashcards.length > 0 ? 
               casaFlashcards : defaultFlashcards;
      case 'trabalho':
        return trabalhoFlashcards && trabalhoFlashcards.length > 0 ? 
               trabalhoFlashcards : defaultFlashcards;
      case 'lazer':
        return lazerFlashcards && lazerFlashcards.length > 0 ? 
               lazerFlashcards : defaultFlashcards;
      case 'viagem':
        return viagemFlashcards && viagemFlashcards.length > 0 ? 
               viagemFlashcards : defaultFlashcards;
      case 'frequentes':
        return frequentWords && frequentWords.length > 0 ? 
               frequentWords.slice(0, 100) : defaultFlashcards;
      default:
        return defaultFlashcards;
    }
  } catch (error) {
    console.error(`Erro ao carregar flashcards da categoria ${categoryId}:`, error);
    return defaultFlashcards;
  }
};

// Função para obter flashcards aleatórios
const getRandomFlashcards = (count = 10) => {
  try {
    // Tentar usar as palavras frequentes se disponíveis
    if (typeof frequentWords !== 'undefined' && frequentWords.length > 0) {
      const shuffled = [...frequentWords].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }
    
    // Caso contrário, usar os flashcards padrão
    return defaultFlashcards;
  } catch (error) {
    console.error('Erro ao obter flashcards aleatórios:', error);
    return defaultFlashcards;
  }
};

// Função para pesquisar flashcards
const searchFlashcards = (query) => {
  if (!query) return [];
  
  const normalizedQuery = query.toLowerCase();
  
  try {
    // Tentar usar as palavras frequentes se disponíveis
    let searchPool = defaultFlashcards;
    
    if (typeof frequentWords !== 'undefined' && frequentWords.length > 0) {
      searchPool = frequentWords;
    }
    
    return searchPool.filter(card => 
      card.russian.toLowerCase().includes(normalizedQuery) ||
      card.transcription.toLowerCase().includes(normalizedQuery) ||
      card.portuguese.toLowerCase().includes(normalizedQuery) ||
      (card.english && card.english.toLowerCase().includes(normalizedQuery))
    );
  } catch (error) {
    console.error('Erro ao pesquisar flashcards:', error);
    return [];
  }
};
