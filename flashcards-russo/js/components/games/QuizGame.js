// QuizGame.js - Componente para o quiz rápido

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
        // Obter flashcards aleatórios
        const flashcards = await getRandomFlashcards(10);
        
        // Criar perguntas de quiz
        const quizQuestions = flashcards.map(card => {
          // Obter outros flashcards para opções incorretas
          const incorrectOptions = flashcards
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
      // Reproduzir som de acerto
      playCorrectSound();
    } else {
      // Reproduzir som de erro
      playWrongSound();
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
        
        // Reproduzir som de conclusão
        playCompletionSound();
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
        const flashcards = await getRandomFlashcards(10);
        
        const quizQuestions = flashcards.map(card => {
          const incorrectOptions = flashcards
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
  
  // Função para reproduzir som de acerto
  const playCorrectSound = () => {
    // Implementação do som de acerto
    console.log('Som de acerto');
  };
  
  // Função para reproduzir som de erro
  const playWrongSound = () => {
    // Implementação do som de erro
    console.log('Som de erro');
  };
  
  // Função para reproduzir som de conclusão
  const playCompletionSound = () => {
    // Implementação do som de conclusão
    console.log('Som de conclusão');
  };
  
  // Função para reproduzir o áudio da palavra
  const playWordAudio = (russian) => {
    console.log(`Reproduzindo áudio para: ${russian}`);
    // Aqui seria implementada a lógica para reproduzir o áudio
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
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium mb-1">{index + 1}. {question.question}</p>
                    <p className="text-sm text-gray-600 mb-2">Transcrição: [{question.transcription}]</p>
                  </div>
                  <button
                    onClick={() => playWordAudio(question.russian)}
                    className="bg-primary text-white p-2 rounded-full hover:bg-opacity-80 transition-colors"
                    title="Ouvir pronúncia"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  </button>
                </div>
                
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
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-80 transition-colors"
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
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold mb-2">{currentQuestion.question}</h2>
          <button
            onClick={() => playWordAudio(currentQuestion.russian)}
            className="bg-primary text-white p-2 rounded-full hover:bg-opacity-80 transition-colors"
            title="Ouvir pronúncia"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          </button>
        </div>
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
