// CustomFlashcards.js - Componente para criação e gerenciamento de flashcards personalizados

const CustomFlashcards = () => {
  // Estados para gerenciar os flashcards personalizados
  const [customFlashcards, setCustomFlashcards] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [editMode, setEditMode] = React.useState(false);
  const [currentFlashcard, setCurrentFlashcard] = React.useState(null);
  
  // Estados para o formulário
  const [formData, setFormData] = React.useState({
    id: null,
    russian: '',
    transcription: '',
    portuguese: '',
    english: '',
    category: 'outros'
  });
  
  // Efeito para carregar os flashcards personalizados
  React.useEffect(() => {
    const loadCustomFlashcards = async () => {
      setLoading(true);
      try {
        // Aqui seria a chamada para o banco de dados local
        const data = await getCustomFlashcards();
        setCustomFlashcards(data);
      } catch (error) {
        console.error('Erro ao carregar flashcards personalizados:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadCustomFlashcards();
  }, []);
  
  // Função para lidar com mudanças no formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Função para adicionar ou atualizar um flashcard
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editMode) {
        // Atualizar flashcard existente
        await updateCustomFlashcard(formData);
        
        // Atualizar estado local
        const updatedFlashcards = customFlashcards.map(card => 
          card.id === formData.id ? formData : card
        );
        setCustomFlashcards(updatedFlashcards);
      } else {
        // Adicionar novo flashcard
        const newId = Date.now().toString();
        const newFlashcard = { ...formData, id: newId };
        await addCustomFlashcard(newFlashcard);
        
        // Atualizar estado local
        setCustomFlashcards([...customFlashcards, newFlashcard]);
      }
      
      // Resetar formulário
      resetForm();
    } catch (error) {
      console.error('Erro ao salvar flashcard:', error);
    }
  };
  
  // Função para editar um flashcard
  const handleEdit = (flashcard) => {
    setFormData(flashcard);
    setEditMode(true);
    setCurrentFlashcard(flashcard);
    
    // Rolar para o formulário
    document.getElementById('custom-flashcard-form').scrollIntoView({ behavior: 'smooth' });
  };
  
  // Função para excluir um flashcard
  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este flashcard?')) {
      return;
    }
    
    try {
      await deleteCustomFlashcard(id);
      
      // Atualizar estado local
      const updatedFlashcards = customFlashcards.filter(card => card.id !== id);
      setCustomFlashcards(updatedFlashcards);
      
      // Se o flashcard excluído estiver sendo editado, resetar o formulário
      if (currentFlashcard && currentFlashcard.id === id) {
        resetForm();
      }
    } catch (error) {
      console.error('Erro ao excluir flashcard:', error);
    }
  };
  
  // Função para resetar o formulário
  const resetForm = () => {
    setFormData({
      id: null,
      russian: '',
      transcription: '',
      portuguese: '',
      english: '',
      category: 'outros'
    });
    setEditMode(false);
    setCurrentFlashcard(null);
  };
  
  // Função para reproduzir o áudio da palavra
  const playAudio = (russian) => {
    console.log(`Reproduzindo áudio para: ${russian}`);
    // Aqui seria implementada a lógica para reproduzir o áudio
  };
  
  // Renderização condicional para carregamento
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4">Carregando flashcards personalizados...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-neutral mb-6">Flashcards Personalizados</h1>
      
      {/* Formulário para adicionar/editar flashcards */}
      <div id="custom-flashcard-form" className="bg-white rounded-xl shadow-card p-6 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-4">
          {editMode ? 'Editar Flashcard' : 'Adicionar Novo Flashcard'}
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="russian">
                Palavra em Russo*
              </label>
              <input
                type="text"
                id="russian"
                name="russian"
                value={formData.russian}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="transcription">
                Transcrição Fonética*
              </label>
              <input
                type="text"
                id="transcription"
                name="transcription"
                value={formData.transcription}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Ex: privet"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="portuguese">
                Tradução em Português*
              </label>
              <input
                type="text"
                id="portuguese"
                name="portuguese"
                value={formData.portuguese}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="english">
                Tradução em Inglês
              </label>
              <input
                type="text"
                id="english"
                name="english"
                value={formData.english}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="category">
                Categoria
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="saudacoes">Saudações</option>
                <option value="comida">Comida</option>
                <option value="transporte">Transporte</option>
                <option value="emocoes">Emoções</option>
                <option value="familia">Família</option>
                <option value="numeros">Números</option>
                <option value="cores">Cores</option>
                <option value="tempo">Tempo e Clima</option>
                <option value="casa">Casa e Mobília</option>
                <option value="trabalho">Trabalho</option>
                <option value="lazer">Lazer e Hobbies</option>
                <option value="viagem">Viagem</option>
                <option value="outros">Outros</option>
              </select>
            </div>
            
            {/* Futuramente: upload de áudio */}
            <div className="md:col-span-2">
              <p className="text-sm text-gray-500 mb-2">
                * Campos obrigatórios
              </p>
            </div>
          </div>
          
          <div className="flex justify-end space-x-3">
            {editMode && (
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </button>
            )}
            
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
            >
              {editMode ? 'Atualizar' : 'Adicionar'}
            </button>
          </div>
        </form>
      </div>
      
      {/* Lista de flashcards personalizados */}
      <div>
        <h2 className="text-xl font-semibold text-neutral mb-4">Seus Flashcards</h2>
        
        {customFlashcards.length === 0 ? (
          <div className="bg-white rounded-xl shadow-soft p-6 text-center">
            <p className="text-gray-600 mb-4">Você ainda não criou nenhum flashcard personalizado.</p>
            <p className="text-primary">Use o formulário acima para adicionar seu primeiro flashcard!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {customFlashcards.map((card) => (
              <div key={card.id} className="bg-white rounded-xl shadow-soft p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary">{card.russian}</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(card)}
                      className="text-blue-500 hover:text-blue-700"
                      title="Editar"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(card.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Excluir"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-2">[{card.transcription}]</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Português:</p>
                    <p className="font-medium">{card.portuguese}</p>
                    
                    {card.english && (
                      <>
                        <p className="text-sm text-gray-500 mt-1">Inglês:</p>
                        <p className="font-medium">{card.english}</p>
                      </>
                    )}
                  </div>
                  
                  <button
                    onClick={() => playAudio(card.russian)}
                    className="bg-primary text-white p-2 rounded-full hover:bg-secondary transition-colors"
                    title="Ouvir pronúncia"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  </button>
                </div>
                
                <div className="mt-2 pt-2 border-t border-gray-100">
                  <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md">
                    {getCategoryName(card.category)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
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
