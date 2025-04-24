# flash-card-Russian

# Flashcards Russo - Aprenda Russo com Flashcards Interativos

[English version below](#russian-flashcards---learn-russian-with-interactive-flashcards)

## Sobre o Projeto

Flashcards Russo é uma aplicação web interativa projetada para ajudar estudantes a aprender o idioma russo através de flashcards, jogos e recursos de áudio. O projeto utiliza React via Babel e Tailwind CSS para criar uma interface moderna e responsiva.

### Funcionalidades Principais

- **Alfabeto Russo**: Aprenda as 33 letras do alfabeto cirílico com pronúncia, exemplos e transcrições.
- **Sistema de Flashcards**: Estude mais de 10.000 palavras russas, incluindo as 1.000 palavras mais frequentes.
- **Categorias Temáticas**: Palavras organizadas em 12 categorias temáticas com 80 palavras cada.
- **Minigames Interativos**: Pratique seu vocabulário com jogos de correspondência, forca e quiz.
- **Pronúncia de Áudio**: Ouça a pronúncia correta de cada palavra e letra.
- **Flashcards Personalizados**: Crie seus próprios flashcards para estudo personalizado.
- **Sistema de Progresso**: Acompanhe seu progresso de aprendizado salvo localmente.

## Como Usar

### Uso Online

Acesse a versão online do projeto em: [https://ubjlkxrg.manus.space](https://ubjlkxrg.manus.space)

### Uso Local

1. Clone este repositório:
   ```
   git clone https://github.com/seu-usuario/flashcards-russo.git
   ```

2. Navegue até a pasta do projeto:
   ```
   cd flashcards-russo
   ```

3. Abra o arquivo `index.html` em qualquer navegador moderno.

### Instruções de Uso

1. **Alfabeto Russo**: Clique na seção "Alfabeto" para explorar as 33 letras do alfabeto cirílico. Clique em qualquer letra para ver detalhes e ouvir a pronúncia.

2. **Flashcards**: Acesse a seção "Flashcards" para estudar palavras por categoria. Clique no cartão para virá-lo e ver a tradução. Use os botões de áudio para ouvir a pronúncia.

3. **Palavras Frequentes**: Na seção de flashcards, clique no botão "Palavras Frequentes" para acessar as 1.000 palavras russas mais comuns.

4. **Flashcards Personalizados**: Acesse a seção "Meus Flashcards" para criar e gerenciar seus próprios cartões de estudo.

5. **Minigames**: Acesse a seção "Jogos" para praticar seu vocabulário com jogos interativos:
   - **Jogo de Correspondência**: Encontre pares de palavras em russo e português.
   - **Forca**: Adivinhe palavras russas letra por letra.
   - **Quiz**: Teste seu conhecimento com perguntas de múltipla escolha.

6. **Progresso**: Seu progresso é salvo automaticamente no navegador. Você pode ver suas estatísticas na seção "Progresso".

## Como Editar o Projeto

### Estrutura de Arquivos

```
flashcards-russo/
├── index.html              # Página principal
├── css/                    # Estilos CSS
│   ├── styles.css          # Estilos principais
│   ├── responsive.css      # Estilos responsivos
│   └── animations.css      # Animações
├── js/                     # Scripts JavaScript
│   ├── main.js             # Script principal
│   ├── db.js               # Gerenciamento de dados locais
│   ├── utils.js            # Funções utilitárias
│   ├── soundManager.js     # Gerenciamento de áudio
│   ├── components/         # Componentes React
│   │   ├── App.js          # Componente principal
│   │   ├── Header.js       # Cabeçalho
│   │   ├── Sidebar.js      # Barra lateral
│   │   ├── ...             # Outros componentes
│   │   └── games/          # Componentes de jogos
│   │       ├── MatchGame.js    # Jogo de correspondência
│   │       ├── HangmanGame.js  # Jogo da forca
│   │       └── QuizGame.js     # Jogo de quiz
│   └── data/               # Dados do aplicativo
│       ├── alphabet.js     # Dados do alfabeto
│       ├── categories.js   # Lista de categorias
│       ├── flashcardsData.js # Gerenciamento de flashcards
│       ├── frequentWords.js  # 1000 palavras frequentes
│       └── categories/     # Dados por categoria
│           ├── saudacoes.js  # Categoria "Saudações"
│           ├── comida.js     # Categoria "Comida"
│           └── ...           # Outras categorias
```

### Edição de Conteúdo

#### Adicionar Novas Palavras

Para adicionar novas palavras a uma categoria existente, edite o arquivo correspondente em `js/data/categories/`:

```javascript
// Exemplo: adicionar uma nova palavra à categoria "saudacoes"
// Arquivo: js/data/categories/saudacoes.js

const saudacoesFlashcards = [
  // ... palavras existentes ...
  {
    id: 'saud-081',  // Use um ID único
    russian: 'Новое слово',  // Palavra em russo
    transcription: 'novoye slovo',  // Transcrição fonética
    portuguese: 'Nova palavra',  // Tradução em português
    english: 'New word',  // Tradução em inglês (opcional)
    category: 'saudacoes',  // Categoria
    known: false,  // Status inicial (conhecido ou não)
    context: 'Como usar esta palavra em contexto'  // Contexto de uso
  },
  // ... adicione mais palavras aqui ...
];
```

#### Criar Nova Categoria

Para criar uma nova categoria:

1. Crie um novo arquivo em `js/data/categories/` (por exemplo, `profissoes.js`).
2. Adicione palavras seguindo o formato acima.
3. Registre a nova categoria em `js/data/categories.js`:

```javascript
// Arquivo: js/data/categories.js

const categories = [
  // ... categorias existentes ...
  {
    id: 'profissoes',
    name: 'Profissões',
    icon: 'briefcase',  // Ícone (opcional)
    description: 'Palavras relacionadas a profissões e carreiras'
  },
];
```

#### Modificar o Alfabeto

Para editar informações do alfabeto, modifique o arquivo `js/data/alphabet.js`:

```javascript
// Exemplo: modificar uma letra do alfabeto
// Arquivo: js/data/alphabet.js

const russianAlphabet = [
  // ... letras existentes ...
  {
    letter: 'А',
    name: 'a',
    transcription: 'a',
    sound: 'a',
    examples: [
      { word: 'Автобус', transcription: 'avtobus', translation: 'Ônibus' },
      { word: 'Арбуз', transcription: 'arbuz', translation: 'Melancia' },
      // Adicione mais exemplos...
    ],
    description: 'Pronunciado como o "a" em "casa"'
  },
  // ... outras letras ...
];
```

### Personalização Visual

#### Modificar Estilos

Para alterar a aparência do site, edite os arquivos CSS em `css/`:

- `styles.css`: Estilos gerais e cores
- `responsive.css`: Adaptações para diferentes tamanhos de tela
- `animations.css`: Animações e transições

#### Alterar Cores Principais

As cores principais são definidas como variáveis CSS no início de `styles.css`:

```css
:root {
  --primary-color: #4F46E5;  /* Cor principal */
  --secondary-color: #10B981;  /* Cor secundária */
  --neutral-color: #1F2937;  /* Cor neutra para textos */
  --background-color: #F3F4F6;  /* Cor de fundo */
  /* ... outras variáveis ... */
}
```

### Modificar Funcionalidades

#### Sistema de Som

O sistema de som utiliza a Web Speech API. Para modificar a funcionalidade de áudio, edite `js/soundManager.js`.

#### Jogos

Os jogos estão em `js/components/games/`. Cada jogo tem seu próprio arquivo:
- `MatchGame.js`: Jogo de correspondência
- `HangmanGame.js`: Jogo da forca
- `QuizGame.js`: Jogo de quiz

#### Armazenamento Local

O sistema de armazenamento local é gerenciado em `js/db.js`. Você pode modificar como os dados são salvos e recuperados.

## Requisitos Técnicos

- Navegador moderno com suporte a JavaScript ES6+
- Suporte a localStorage para salvar progresso
- Suporte à Web Speech API para funcionalidades de áudio

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

---

# Russian Flashcards - Learn Russian with Interactive Flashcards

## About the Project

Russian Flashcards is an interactive web application designed to help students learn the Russian language through flashcards, games, and audio resources. The project uses React via Babel and Tailwind CSS to create a modern and responsive interface.

### Main Features

- **Russian Alphabet**: Learn the 33 letters of the Cyrillic alphabet with pronunciation, examples, and transcriptions.
- **Flashcard System**: Study over 10,000 Russian words, including the 1,000 most frequent words.
- **Thematic Categories**: Words organized into 12 thematic categories with 80 words each.
- **Interactive Minigames**: Practice your vocabulary with matching, hangman, and quiz games.
- **Audio Pronunciation**: Listen to the correct pronunciation of each word and letter.
- **Custom Flashcards**: Create your own flashcards for personalized study.
- **Progress System**: Track your learning progress saved locally.

## How to Use

### Online Usage

Access the online version of the project at: [https://ubjlkxrg.manus.space](https://ubjlkxrg.manus.space)

### Local Usage

1. Clone this repository:
   ```
   git clone https://github.com/your-username/russian-flashcards.git
   ```

2. Navigate to the project folder:
   ```
   cd russian-flashcards
   ```

3. Open the `index.html` file in any modern browser.

### Usage Instructions

1. **Russian Alphabet**: Click on the "Alphabet" section to explore the 33 letters of the Cyrillic alphabet. Click on any letter to see details and hear the pronunciation.

2. **Flashcards**: Access the "Flashcards" section to study words by category. Click on the card to flip it and see the translation. Use the audio buttons to hear the pronunciation.

3. **Frequent Words**: In the flashcards section, click on the "Frequent Words" button to access the 1,000 most common Russian words.

4. **Custom Flashcards**: Access the "My Flashcards" section to create and manage your own study cards.

5. **Minigames**: Access the "Games" section to practice your vocabulary with interactive games:
   - **Matching Game**: Find pairs of words in Russian and Portuguese.
   - **Hangman**: Guess Russian words letter by letter.
   - **Quiz**: Test your knowledge with multiple-choice questions.

6. **Progress**: Your progress is automatically saved in the browser. You can see your statistics in the "Progress" section.

## How to Edit the Project

### File Structure

```
russian-flashcards/
├── index.html              # Main page
├── css/                    # CSS styles
│   ├── styles.css          # Main styles
│   ├── responsive.css      # Responsive styles
│   └── animations.css      # Animations
├── js/                     # JavaScript scripts
│   ├── main.js             # Main script
│   ├── db.js               # Local data management
│   ├── utils.js            # Utility functions
│   ├── soundManager.js     # Audio management
│   ├── components/         # React components
│   │   ├── App.js          # Main component
│   │   ├── Header.js       # Header
│   │   ├── Sidebar.js      # Sidebar
│   │   ├── ...             # Other components
│   │   └── games/          # Game components
│   │       ├── MatchGame.js    # Matching game
│   │       ├── HangmanGame.js  # Hangman game
│   │       └── QuizGame.js     # Quiz game
│   └── data/               # Application data
│       ├── alphabet.js     # Alphabet data
│       ├── categories.js   # Category list
│       ├── flashcardsData.js # Flashcard management
│       ├── frequentWords.js  # 1000 frequent words
│       └── categories/     # Data by category
│           ├── saudacoes.js  # "Greetings" category
│           ├── comida.js     # "Food" category
│           └── ...           # Other categories
```

### Content Editing

#### Adding New Words

To add new words to an existing category, edit the corresponding file in `js/data/categories/`:

```javascript
// Example: adding a new word to the "saudacoes" (greetings) category
// File: js/data/categories/saudacoes.js

const saudacoesFlashcards = [
  // ... existing words ...
  {
    id: 'saud-081',  // Use a unique ID
    russian: 'Новое слово',  // Word in Russian
    transcription: 'novoye slovo',  // Phonetic transcription
    portuguese: 'Nova palavra',  // Translation in Portuguese
    english: 'New word',  // Translation in English (optional)
    category: 'saudacoes',  // Category
    known: false,  // Initial status (known or not)
    context: 'How to use this word in context'  // Usage context
  },
  // ... add more words here ...
];
```

#### Creating a New Category

To create a new category:

1. Create a new file in `js/data/categories/` (e.g., `profissoes.js`).
2. Add words following the format above.
3. Register the new category in `js/data/categories.js`:

```javascript
// File: js/data/categories.js

const categories = [
  // ... existing categories ...
  {
    id: 'profissoes',
    name: 'Professions',
    icon: 'briefcase',  // Icon (optional)
    description: 'Words related to professions and careers'
  },
];
```

#### Modifying the Alphabet

To edit alphabet information, modify the `js/data/alphabet.js` file:

```javascript
// Example: modifying a letter of the alphabet
// File: js/data/alphabet.js

const russianAlphabet = [
  // ... existing letters ...
  {
    letter: 'А',
    name: 'a',
    transcription: 'a',
    sound: 'a',
    examples: [
      { word: 'Автобус', transcription: 'avtobus', translation: 'Bus' },
      { word: 'Арбуз', transcription: 'arbuz', translation: 'Watermelon' },
      // Add more examples...
    ],
    description: 'Pronounced like the "a" in "father"'
  },
  // ... other letters ...
];
```

### Visual Customization

#### Modifying Styles

To change the appearance of the site, edit the CSS files in `css/`:

- `styles.css`: General styles and colors
- `responsive.css`: Adaptations for different screen sizes
- `animations.css`: Animations and transitions

#### Changing Main Colors

The main colors are defined as CSS variables at the beginning of `styles.css`:

```css
:root {
  --primary-color: #4F46E5;  /* Primary color */
  --secondary-color: #10B981;  /* Secondary color */
  --neutral-color: #1F2937;  /* Neutral color for texts */
  --background-color: #F3F4F6;  /* Background color */
  /* ... other variables ... */
}
```

### Modifying Functionalities

#### Sound System

The sound system uses the Web Speech API. To modify the audio functionality, edit `js/soundManager.js`.

#### Games

The games are in `js/components/games/`. Each game has its own file:
- `MatchGame.js`: Matching game
- `HangmanGame.js`: Hangman game
- `QuizGame.js`: Quiz game

#### Local Storage

The local storage system is managed in `js/db.js`. You can modify how data is saved and retrieved.

## Technical Requirements

- Modern browser with support for JavaScript ES6+
- Support for localStorage to save progress
- Support for Web Speech API for audio functionalities

## License

This project is licensed under the MIT License - see the LICENSE file for details.
