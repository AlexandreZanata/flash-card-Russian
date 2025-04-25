// ProgressStats.js - Componente para exibir o progresso e estatísticas do usuário

const ProgressStats = () => {
  // Estados para armazenar os dados de progresso
  const [categoryProgress, setCategoryProgress] = React.useState({});
  const [gameScores, setGameScores] = React.useState({});
  const [totalStats, setTotalStats] = React.useState({
    totalWords: 0,
    knownWords: 0,
    percentage: 0,
    studyTime: 0
  });
  const [loading, setLoading] = React.useState(true);
  const [frequentWordsProgress, setFrequentWordsProgress] = React.useState({
    totalWords: 1000,
    knownWords: 0,
    percentage: 0
  });
  
  // Efeito para carregar os dados de progresso
  React.useEffect(() => {
    const loadProgress = async () => {
      setLoading(true);
      try {
        // Carregar dados do banco de dados local
        const progress = await getFlashcardProgress();
        const scores = await getGameScores();
        const stats = await getTotalStats();
        const frequentProgress = await getFrequentWordsProgress();
        
        setCategoryProgress(progress);
        setGameScores(scores);
        setTotalStats(stats);
        setFrequentWordsProgress(frequentProgress);
      } catch (error) {
        console.error('Erro ao carregar dados de progresso:', error);
        
        // Dados padrão em caso de erro
        setCategoryProgress({
          'saudacoes': { totalWords: 80, knownWords: 0 },
          'comida': { totalWords: 80, knownWords: 0 },
          'transporte': { totalWords: 80, knownWords: 0 },
          'emocoes': { totalWords: 80, knownWords: 0 },
          'familia': { totalWords: 80, knownWords: 0 },
          'numeros': { totalWords: 80, knownWords: 0 },
          'cores': { totalWords: 80, knownWords: 0 },
          'tempo': { totalWords: 80, knownWords: 0 },
          'casa': { totalWords: 80, knownWords: 0 },
          'trabalho': { totalWords: 80, knownWords: 0 },
          'lazer': { totalWords: 80, knownWords: 0 },
          'viagem': { totalWords: 80, knownWords: 0 }
        });
        
        setTotalStats({
          totalWords: 1960, // 12 categorias * 80 palavras + 1000 palavras frequentes
          knownWords: 0,
          percentage: 0,
          studyTime: 0
        });
        
        setFrequentWordsProgress({
          totalWords: 1000,
          knownWords: 0,
          percentage: 0
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadProgress();
  }, []);
  
  // Função para formatar o tempo de estudo
  const formatStudyTime = (minutes) => {
    if (minutes < 60) {
      return `${minutes} minutos`;
    }
    
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    if (remainingMinutes === 0) {
      return `${hours} hora${hours > 1 ? 's' : ''}`;
    }
    
    return `${hours} hora${hours > 1 ? 's' : ''} e ${remainingMinutes} minuto${remainingMinutes > 1 ? 's' : ''}`;
  };
  
  // Renderização condicional para carregamento
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4">Carregando estatísticas...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-neutral mb-6">Seu Progresso</h1>
      
      {/* Resumo geral */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-card p-6">
          <h2 className="text-lg font-semibold text-neutral mb-2">Palavras Aprendidas</h2>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-primary">{totalStats.knownWords}</span>
            <span className="text-gray-600 ml-2">/ {totalStats.totalWords}</span>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-primary h-2.5 rounded-full progress-bar-fill" 
              style={{ width: `${totalStats.percentage}%`, '--progress-width': `${totalStats.percentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">{totalStats.percentage}% concluído</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-card p-6">
          <h2 className="text-lg font-semibold text-neutral mb-2">Tempo de Estudo</h2>
          <div className="text-3xl font-bold text-secondary">
            {formatStudyTime(totalStats.studyTime)}
          </div>
          <p className="text-sm text-gray-600 mt-2">Tempo total dedicado ao aprendizado</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-card p-6">
          <h2 className="text-lg font-semibold text-neutral mb-2">Melhor Pontuação</h2>
          <div className="text-3xl font-bold text-accent">
            {Math.max(
              gameScores.match?.highScore || 0,
              gameScores.hangman?.highScore || 0,
              gameScores.quiz?.highScore || 0
            )}
          </div>
          <p className="text-sm text-gray-600 mt-2">Sua maior pontuação nos minigames</p>
        </div>
      </div>
      
      {/* Progresso das 1000 palavras mais frequentes */}
      <div className="bg-white rounded-xl shadow-card p-6 mb-8">
        <h2 className="text-xl font-semibold text-neutral mb-4">Palavras Frequentes</h2>
        
        <div className="flex justify-between items-center mb-1">
          <span className="font-medium">1000 Palavras Mais Frequentes</span>
          <span className="text-sm text-gray-600">
            {frequentWordsProgress.knownWords} / {frequentWordsProgress.totalWords} palavras
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div 
            className="bg-secondary h-2.5 rounded-full progress-bar-fill" 
            style={{ 
              width: `${frequentWordsProgress.percentage}%`,
              '--progress-width': `${frequentWordsProgress.percentage}%`
            }}
          ></div>
        </div>
        <p className="text-sm text-gray-600">
          Aprender as palavras mais frequentes é a maneira mais eficiente de aumentar sua compreensão do russo.
          Com apenas 1000 palavras, você pode entender cerca de 80% das conversas cotidianas!
        </p>
      </div>
      
      {/* Progresso por categoria */}
      <div className="bg-white rounded-xl shadow-card p-6 mb-8">
        <h2 className="text-xl font-semibold text-neutral mb-4">Progresso por Categoria</h2>
        <p className="text-sm text-gray-600 mb-4">
          Cada categoria contém 80 palavras cuidadosamente selecionadas para cobrir os tópicos mais importantes.
        </p>
        
        <div className="space-y-4">
          {Object.entries(categoryProgress).map(([categoryId, data]) => (
            <div key={categoryId}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">{getCategoryName(categoryId)}</span>
                <span className="text-sm text-gray-600">
                  {data.knownWords} / {data.totalWords} palavras
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full progress-bar-fill" 
                  style={{ 
                    width: `${(data.knownWords / data.totalWords) * 100}%`,
                    '--progress-width': `${(data.knownWords / data.totalWords) * 100}%`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Estatísticas de jogos */}
      <div className="bg-white rounded-xl shadow-card p-6">
        <h2 className="text-xl font-semibold text-neutral mb-4">Estatísticas de Jogos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GameStatsCard 
            title="Jogo de Correspondência"
            scores={gameScores.match || { highScore: 0, gamesPlayed: 0, lastPlayed: null }}
          />
          
          <GameStatsCard 
            title="Forca em Cirílico"
            scores={gameScores.hangman || { highScore: 0, gamesPlayed: 0, lastPlayed: null }}
          />
          
          <GameStatsCard 
            title="Quiz Rápido"
            scores={gameScores.quiz || { highScore: 0, gamesPlayed: 0, lastPlayed: null }}
          />
        </div>
      </div>
      
      {/* Dicas de estudo */}
      <div className="bg-white rounded-xl shadow-card p-6 mt-8">
        <h2 className="text-xl font-semibold text-neutral mb-4">Dicas para Aprender Mais Rápido</h2>
        
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Estude um pouco todos os dias, mesmo que por apenas 5-10 minutos</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Use os minigames para reforçar o vocabulário que você está aprendendo</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Concentre-se primeiro nas palavras frequentes para obter resultados mais rápidos</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Pratique a pronúncia usando os botões de som nos flashcards</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Crie seus próprios flashcards para palavras específicas que deseja aprender</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Componente para exibir estatísticas de um jogo
const GameStatsCard = ({ title, scores }) => {
  // Função para formatar a data
  const formatDate = (dateString) => {
    if (!dateString) return 'Nunca jogado';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-semibold text-primary mb-3">{title}</h3>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Melhor pontuação:</span>
          <span className="font-medium">{scores.highScore}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Partidas jogadas:</span>
          <span className="font-medium">{scores.gamesPlayed}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Última partida:</span>
          <span className="font-medium text-sm">{formatDate(scores.lastPlayed)}</span>
        </div>
      </div>
    </div>
  );
};

// Função auxiliar para obter o nome da categoria a partir do ID
const getCategoryName = (categoryId) => {
  const categories = {
    'saudacoes': 'Saudações',
    'comida': 'Comida',
    'transporte': 'Transporte',
    'emocoes': 'Emoções',
    'familia': 'Família',
    'numeros': 'Números',
    'cores': 'Cores',
    'tempo': 'Tempo e Clima',
    'casa': 'Casa e Mobília',
    'trabalho': 'Trabalho',
    'lazer': 'Lazer e Hobbies',
    'viagem': 'Viagem',
    'outros': 'Outros'
  };
  
  return categories[categoryId] || 'Categoria Desconhecida';
};

// Função para obter o progresso das palavras frequentes
const getFrequentWordsProgress = async () => {
  try {
    // Aqui seria a chamada para o banco de dados local
    // Por enquanto, retornamos dados de exemplo
    return {
      totalWords: 1000,
      knownWords: localStorage.getItem('frequentWordsKnown') ? 
        parseInt(localStorage.getItem('frequentWordsKnown')) : 0,
      percentage: localStorage.getItem('frequentWordsKnown') ? 
        (parseInt(localStorage.getItem('frequentWordsKnown')) / 1000) * 100 : 0
    };
  } catch (error) {
    console.error('Erro ao obter progresso das palavras frequentes:', error);
    return {
      totalWords: 1000,
      knownWords: 0,
      percentage: 0
    };
  }
};
