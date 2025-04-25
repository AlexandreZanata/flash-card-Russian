// soundManager.js - Gerenciador de sons para o site de flashcards russo usando Web Speech API

// Classe para gerenciar a reprodução de áudio
class SoundManager {
  constructor() {
    // Verificar se o navegador suporta a Web Speech API
    this.speechSynthesisSupported = 'speechSynthesis' in window;
    
    // Cache para armazenar áudios já carregados
    this.audioCache = {};
    
    // Elemento de áudio para reprodução de efeitos sonoros
    this.audioElement = document.createElement('audio');
    document.body.appendChild(this.audioElement);
    
    // Configurar eventos de áudio
    this.setupAudioEvents();
    
    // Inicializar sintetizador de voz
    if (this.speechSynthesisSupported) {
      this.initSpeechSynthesis();
    } else {
      console.warn('Web Speech API não é suportada neste navegador.');
    }
  }
  
  // Inicializar o sintetizador de voz
  initSpeechSynthesis() {
    // Pré-carregar vozes disponíveis
    this.voices = {};
    
    // Função para carregar vozes
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      
      // Encontrar vozes para russo e português
      let russianVoice = availableVoices.find(voice => 
        voice.lang.includes('ru') || voice.name.includes('Russian')
      );
      
      let portugueseVoice = availableVoices.find(voice => 
        voice.lang.includes('pt') || voice.name.includes('Portuguese')
      );
      
      // Fallbacks se não encontrar vozes específicas
      if (!russianVoice) {
        russianVoice = availableVoices[0]; // Usar primeira voz disponível
      }
      
      if (!portugueseVoice) {
        portugueseVoice = availableVoices[0]; // Usar primeira voz disponível
      }
      
      this.voices = {
        russian: russianVoice,
        portuguese: portugueseVoice
      };
      
      console.log('Vozes carregadas:', this.voices);
    };
    
    // Carregar vozes inicialmente
    loadVoices();
    
    // Recarregar vozes quando estiverem disponíveis (necessário em alguns navegadores)
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }
  
  // Configurar eventos para o elemento de áudio
  setupAudioEvents() {
    this.audioElement.addEventListener('error', (e) => {
      console.error('Erro ao reproduzir áudio:', e);
    });
    
    this.audioElement.addEventListener('ended', () => {
      // Evento disparado quando o áudio termina de tocar
      document.dispatchEvent(new CustomEvent('audioEnded'));
    });
  }
  
  // Reproduzir texto em russo
  playRussianText(text) {
    if (!text || !this.speechSynthesisSupported) return Promise.reject('Texto vazio ou API não suportada');
    
    return new Promise((resolve, reject) => {
      try {
        // Cancelar qualquer fala anterior
        window.speechSynthesis.cancel();
        
        // Criar nova instância de fala
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Configurar voz em russo
        if (this.voices.russian) {
          utterance.voice = this.voices.russian;
        }
        
        utterance.lang = 'ru-RU';
        utterance.rate = 0.9; // Velocidade um pouco mais lenta para melhor compreensão
        utterance.pitch = 1;
        
        // Eventos
        utterance.onend = () => resolve();
        utterance.onerror = (e) => reject(e);
        
        // Reproduzir
        window.speechSynthesis.speak(utterance);
        
        // Alguns navegadores têm um bug onde a fala para após 15 segundos
        // Esta é uma solução alternativa para esse problema
        const resumeInfinity = setInterval(() => {
          if (!window.speechSynthesis.speaking) {
            clearInterval(resumeInfinity);
          } else {
            window.speechSynthesis.pause();
            window.speechSynthesis.resume();
          }
        }, 10000);
      } catch (error) {
        console.error('Erro ao reproduzir texto russo:', error);
        reject(error);
      }
    });
  }
  
  // Reproduzir texto em português
  playPortugueseText(text) {
    if (!text || !this.speechSynthesisSupported) return Promise.reject('Texto vazio ou API não suportada');
    
    return new Promise((resolve, reject) => {
      try {
        // Cancelar qualquer fala anterior
        window.speechSynthesis.cancel();
        
        // Criar nova instância de fala
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Configurar voz em português
        if (this.voices.portuguese) {
          utterance.voice = this.voices.portuguese;
        }
        
        utterance.lang = 'pt-BR';
        utterance.rate = 0.9; // Velocidade um pouco mais lenta para melhor compreensão
        utterance.pitch = 1;
        
        // Eventos
        utterance.onend = () => resolve();
        utterance.onerror = (e) => reject(e);
        
        // Reproduzir
        window.speechSynthesis.speak(utterance);
        
        // Solução alternativa para o bug de 15 segundos
        const resumeInfinity = setInterval(() => {
          if (!window.speechSynthesis.speaking) {
            clearInterval(resumeInfinity);
          } else {
            window.speechSynthesis.pause();
            window.speechSynthesis.resume();
          }
        }, 10000);
      } catch (error) {
        console.error('Erro ao reproduzir texto português:', error);
        reject(error);
      }
    });
  }
  
  // Reproduzir letra do alfabeto russo
  playAlphabetLetter(letter) {
    return this.playRussianText(letter);
  }
  
  // Reproduzir palavra do flashcard
  playFlashcardWord(word) {
    return this.playRussianText(word);
  }
  
  // Reproduzir tradução do flashcard
  playFlashcardTranslation(translation) {
    return this.playPortugueseText(translation);
  }
  
  // Método alternativo para navegadores que não suportam Web Speech API
  playAudioFallback(text, language) {
    // Usar uma API de fallback ou reproduzir um som genérico
    console.warn('Usando método de fallback para reprodução de áudio');
    
    // Reproduzir um beep simples como fallback
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = 440; // valor em hertz
    oscillator.connect(context.destination);
    oscillator.start();
    
    // Parar após 300ms
    setTimeout(() => {
      oscillator.stop();
    }, 300);
    
    return Promise.resolve();
  }
  
  // Reproduzir som de efeito (para jogos e interações)
  playEffectSound(effectType) {
    // Usar sons gerados programaticamente para evitar problemas de carregamento de arquivos
    try {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(context.destination);
      
      // Configurar o tipo de som com base no efeito
      switch (effectType) {
        case 'correct':
          oscillator.type = 'sine';
          oscillator.frequency.value = 880;
          gainNode.gain.value = 0.3;
          oscillator.start();
          setTimeout(() => oscillator.stop(), 200);
          break;
          
        case 'wrong':
          oscillator.type = 'sawtooth';
          oscillator.frequency.value = 220;
          gainNode.gain.value = 0.3;
          oscillator.start();
          setTimeout(() => oscillator.stop(), 300);
          break;
          
        case 'victory':
          oscillator.type = 'sine';
          oscillator.frequency.value = 440;
          gainNode.gain.value = 0.3;
          oscillator.start();
          
          // Criar uma sequência de notas para vitória
          setTimeout(() => {
            oscillator.frequency.value = 554;
          }, 100);
          
          setTimeout(() => {
            oscillator.frequency.value = 659;
          }, 200);
          
          setTimeout(() => {
            oscillator.frequency.value = 880;
          }, 300);
          
          setTimeout(() => oscillator.stop(), 500);
          break;
          
        case 'lose':
          oscillator.type = 'sawtooth';
          oscillator.frequency.value = 440;
          gainNode.gain.value = 0.3;
          oscillator.start();
          
          // Criar uma sequência de notas para derrota
          setTimeout(() => {
            oscillator.frequency.value = 392;
          }, 150);
          
          setTimeout(() => {
            oscillator.frequency.value = 349;
          }, 300);
          
          setTimeout(() => {
            oscillator.frequency.value = 220;
          }, 450);
          
          setTimeout(() => oscillator.stop(), 600);
          break;
          
        case 'flip':
          oscillator.type = 'sine';
          oscillator.frequency.value = 523;
          gainNode.gain.value = 0.1;
          oscillator.start();
          
          // Efeito de flip
          setTimeout(() => {
            oscillator.frequency.value = 659;
          }, 100);
          
          setTimeout(() => oscillator.stop(), 200);
          break;
          
        case 'click':
          oscillator.type = 'sine';
          oscillator.frequency.value = 880;
          gainNode.gain.value = 0.1;
          oscillator.start();
          setTimeout(() => oscillator.stop(), 50);
          break;
          
        default:
          return Promise.reject('Tipo de efeito desconhecido');
      }
      
      return Promise.resolve();
    } catch (error) {
      console.error(`Erro ao reproduzir efeito sonoro ${effectType}:`, error);
      return Promise.reject(error);
    }
  }
}

// Criar e exportar uma instância global do gerenciador de sons
const soundManager = new SoundManager();

// Funções auxiliares para uso em componentes
function playRussianWord(word) {
  try {
    return soundManager.playRussianText(word);
  } catch (error) {
    console.error('Erro ao reproduzir palavra em russo:', error);
    return Promise.reject(error);
  }
}

function playPortugueseWord(word) {
  try {
    return soundManager.playPortugueseText(word);
  } catch (error) {
    console.error('Erro ao reproduzir palavra em português:', error);
    return Promise.reject(error);
  }
}

function playAlphabetSound(letter) {
  try {
    return soundManager.playAlphabetLetter(letter);
  } catch (error) {
    console.error('Erro ao reproduzir letra do alfabeto:', error);
    return Promise.reject(error);
  }
}

function playCorrectSound() {
  try {
    return soundManager.playEffectSound('correct');
  } catch (error) {
    console.error('Erro ao reproduzir som de acerto:', error);
    return Promise.reject(error);
  }
}

function playWrongSound() {
  try {
    return soundManager.playEffectSound('wrong');
  } catch (error) {
    console.error('Erro ao reproduzir som de erro:', error);
    return Promise.reject(error);
  }
}

function playVictorySound() {
  try {
    return soundManager.playEffectSound('victory');
  } catch (error) {
    console.error('Erro ao reproduzir som de vitória:', error);
    return Promise.reject(error);
  }
}

function playLoseSound() {
  try {
    return soundManager.playEffectSound('lose');
  } catch (error) {
    console.error('Erro ao reproduzir som de derrota:', error);
    return Promise.reject(error);
  }
}

function playFlipSound() {
  try {
    return soundManager.playEffectSound('flip');
  } catch (error) {
    console.error('Erro ao reproduzir som de virar cartão:', error);
    return Promise.reject(error);
  }
}

function playClickSound() {
  try {
    return soundManager.playEffectSound('click');
  } catch (error) {
    console.error('Erro ao reproduzir som de clique:', error);
    return Promise.reject(error);
  }
}
