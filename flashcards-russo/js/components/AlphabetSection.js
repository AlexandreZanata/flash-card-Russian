// AlphabetSection.js - Componente para exibir o alfabeto russo com som

const AlphabetSection = () => {
  const [selectedLetter, setSelectedLetter] = React.useState(null);
  
  // Dados do alfabeto russo
  const russianAlphabet = [
    { letter: 'А', name: 'а', sound: 'a', examples: ['автобус (avtobus) - ônibus', 'арбуз (arbuz) - melancia'] },
    { letter: 'Б', name: 'бэ', sound: 'b', examples: ['банк (bank) - banco', 'брат (brat) - irmão'] },
    { letter: 'В', name: 'вэ', sound: 'v', examples: ['вода (voda) - água', 'ветер (veter) - vento'] },
    { letter: 'Г', name: 'гэ', sound: 'g', examples: ['город (gorod) - cidade', 'гора (gora) - montanha'] },
    { letter: 'Д', name: 'дэ', sound: 'd', examples: ['дом (dom) - casa', 'дверь (dver) - porta'] },
    { letter: 'Е', name: 'е', sound: 'ye', examples: ['ель (yel) - abeto', 'если (yesli) - se'] },
    { letter: 'Ё', name: 'ё', sound: 'yo', examples: ['ёлка (yolka) - árvore de Natal', 'ёж (yozh) - ouriço'] },
    { letter: 'Ж', name: 'жэ', sound: 'zh', examples: ['жизнь (zhizn) - vida', 'журнал (zhurnal) - revista'] },
    { letter: 'З', name: 'зэ', sound: 'z', examples: ['зуб (zub) - dente', 'звезда (zvezda) - estrela'] },
    { letter: 'И', name: 'и', sound: 'i', examples: ['имя (imya) - nome', 'игра (igra) - jogo'] },
    { letter: 'Й', name: 'и краткое', sound: 'y', examples: ['йогурт (yogurt) - iogurte', 'май (may) - maio'] },
    { letter: 'К', name: 'ка', sound: 'k', examples: ['кот (kot) - gato', 'книга (kniga) - livro'] },
    { letter: 'Л', name: 'эль', sound: 'l', examples: ['лес (les) - floresta', 'лампа (lampa) - lâmpada'] },
    { letter: 'М', name: 'эм', sound: 'm', examples: ['мама (mama) - mãe', 'море (more) - mar'] },
    { letter: 'Н', name: 'эн', sound: 'n', examples: ['нос (nos) - nariz', 'ночь (noch) - noite'] },
    { letter: 'О', name: 'о', sound: 'o', examples: ['окно (okno) - janela', 'озеро (ozero) - lago'] },
    { letter: 'П', name: 'пэ', sound: 'p', examples: ['папа (papa) - pai', 'парк (park) - parque'] },
    { letter: 'Р', name: 'эр', sound: 'r', examples: ['рука (ruka) - mão', 'рыба (ryba) - peixe'] },
    { letter: 'С', name: 'эс', sound: 's', examples: ['сок (sok) - suco', 'стол (stol) - mesa'] },
    { letter: 'Т', name: 'тэ', sound: 't', examples: ['такси (taksi) - táxi', 'телефон (telefon) - telefone'] },
    { letter: 'У', name: 'у', sound: 'u', examples: ['утро (utro) - manhã', 'улица (ulitsa) - rua'] },
    { letter: 'Ф', name: 'эф', sound: 'f', examples: ['фото (foto) - foto', 'фильм (film) - filme'] },
    { letter: 'Х', name: 'ха', sound: 'kh', examples: ['хлеб (khleb) - pão', 'хорошо (khorosho) - bem'] },
    { letter: 'Ц', name: 'цэ', sound: 'ts', examples: ['центр (tsentr) - centro', 'цирк (tsirk) - circo'] },
    { letter: 'Ч', name: 'че', sound: 'ch', examples: ['час (chas) - hora', 'человек (chelovek) - pessoa'] },
    { letter: 'Ш', name: 'ша', sound: 'sh', examples: ['школа (shkola) - escola', 'шапка (shapka) - chapéu'] },
    { letter: 'Щ', name: 'ща', sound: 'shch', examples: ['щека (shcheka) - bochecha', 'щенок (shchenok) - filhote'] },
    { letter: 'Ъ', name: 'твёрдый знак', sound: 'sinal duro', examples: ['объект (obyekt) - objeto', 'подъезд (podyezd) - entrada'] },
    { letter: 'Ы', name: 'ы', sound: 'y', examples: ['сыр (syr) - queijo', 'мы (my) - nós'] },
    { letter: 'Ь', name: 'мягкий знак', sound: 'sinal suave', examples: ['день (den) - dia', 'соль (sol) - sal'] },
    { letter: 'Э', name: 'э', sound: 'e', examples: ['это (eto) - isto', 'эхо (ekho) - eco'] },
    { letter: 'Ю', name: 'ю', sound: 'yu', examples: ['юг (yug) - sul', 'юмор (yumor) - humor'] },
    { letter: 'Я', name: 'я', sound: 'ya', examples: ['яблоко (yabloko) - maçã', 'язык (yazyk) - língua'] }
  ];

  // Função para reproduzir o som da letra
  const playLetterSound = (letter) => {
    try {
      playAlphabetSound(letter);
    } catch (error) {
      console.error('Erro ao reproduzir som da letra:', error);
    }
  };

  // Renderizar detalhes da letra selecionada
  const renderLetterDetails = () => {
    if (!selectedLetter) return null;
    
    const letter = russianAlphabet.find(l => l.letter === selectedLetter);
    if (!letter) return null;
    
    return (
      <div className="bg-white rounded-xl shadow-card p-6 mt-6 animate-fadeIn">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-3xl font-bold text-primary">{letter.letter} {letter.name}</h3>
          <button 
            onClick={() => playLetterSound(letter.letter)}
            className="sound-button bg-primary text-white rounded-full p-2 hover:bg-primary-dark transition-colors"
            aria-label="Ouvir pronúncia"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          </button>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-neutral mb-2">Pronúncia</h4>
          <p className="text-neutral-600">{letter.sound}</p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-neutral mb-2">Exemplos</h4>
          <ul className="space-y-2">
            {letter.examples.map((example, index) => (
              <li key={index} className="flex items-center">
                <span className="text-neutral-600">{example}</span>
                <button 
                  onClick={() => playRussianWord(example.split(' ')[0])}
                  className="sound-button ml-2"
                  aria-label="Ouvir exemplo"
                >
                  <span className="sound-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-neutral mb-6">Alfabeto Russo</h1>
      
      <p className="text-neutral-600 mb-6">
        O alfabeto russo (cirílico) consiste em 33 letras. Clique em uma letra para ver detalhes e ouvir sua pronúncia.
      </p>
      
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-2 mb-6">
        {russianAlphabet.map((item) => (
          <button
            key={item.letter}
            onClick={() => setSelectedLetter(item.letter)}
            className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors ${
              selectedLetter === item.letter 
                ? 'bg-primary text-white' 
                : 'bg-white text-neutral hover:bg-primary hover:text-white'
            }`}
          >
            <span className="text-2xl font-bold">{item.letter}</span>
            <span className="text-xs mt-1">{item.name}</span>
          </button>
        ))}
      </div>
      
      {renderLetterDetails()}
    </div>
  );
};
