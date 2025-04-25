// Função auxiliar para embaralhar arrays
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Função para salvar pontuação de jogos
function saveGameScore(gameType, score) {
  try {
    const scores = JSON.parse(localStorage.getItem('russoCards_gameScores')) || {};
    
    if (!scores[gameType]) {
      scores[gameType] = [];
    }
    
    scores[gameType].push({
      score,
      date: new Date().toISOString()
    });
    
    // Manter apenas as 10 pontuações mais recentes
    if (scores[gameType].length > 10) {
      scores[gameType] = scores[gameType].slice(-10);
    }
    
    localStorage.setItem('russoCards_gameScores', JSON.stringify(scores));
    return true;
  } catch (error) {
    console.error('Erro ao salvar pontuação:', error);
    return false;
  }
}

// Função para reproduzir sons
function playSound(soundType) {
  // Implementação básica para reproduzir sons
  console.log(`Reproduzindo som: ${soundType}`);
  
  // Em uma implementação real, usaríamos o Web Audio API
  // ou elementos de áudio HTML5
}

// Funções específicas para sons
function playCorrectSound() {
  playSound('correct');
}

function playWrongSound() {
  playSound('wrong');
}

function playVictorySound() {
  playSound('victory');
}

function playLoseSound() {
  playSound('lose');
}

function playCompletionSound() {
  playSound('completion');
}
