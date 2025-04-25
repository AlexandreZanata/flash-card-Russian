// Dados completos do alfabeto russo
const russianAlphabetData = [
  {
    letter: 'А',
    name: 'a',
    sound: 'a',
    description: 'Pronuncia-se como o "a" em "casa".',
    examples: [
      { word: 'автобус', transcription: 'avtobus', translation: 'ônibus' },
      { word: 'арбуз', transcription: 'arbuz', translation: 'melancia' },
      { word: 'аптека', transcription: 'apteka', translation: 'farmácia' }
    ],
    audioFile: 'audio/alphabet/a.mp3'
  },
  {
    letter: 'Б',
    name: 'be',
    sound: 'b',
    description: 'Pronuncia-se como o "b" em "bola".',
    examples: [
      { word: 'банк', transcription: 'bank', translation: 'banco' },
      { word: 'бабушка', transcription: 'babushka', translation: 'avó' },
      { word: 'бумага', transcription: 'bumaga', translation: 'papel' }
    ],
    audioFile: 'audio/alphabet/b.mp3'
  },
  {
    letter: 'В',
    name: 've',
    sound: 'v',
    description: 'Pronuncia-se como o "v" em "vida".',
    examples: [
      { word: 'вода', transcription: 'voda', translation: 'água' },
      { word: 'ворота', transcription: 'vorota', translation: 'portão' },
      { word: 'вечер', transcription: 'vecher', translation: 'noite' }
    ],
    audioFile: 'audio/alphabet/v.mp3'
  },
  {
    letter: 'Г',
    name: 'gue',
    sound: 'g',
    description: 'Pronuncia-se como o "g" em "gato".',
    examples: [
      { word: 'город', transcription: 'gorod', translation: 'cidade' },
      { word: 'гора', transcription: 'gora', translation: 'montanha' },
      { word: 'газета', transcription: 'gazeta', translation: 'jornal' }
    ],
    audioFile: 'audio/alphabet/g.mp3'
  },
  {
    letter: 'Д',
    name: 'de',
    sound: 'd',
    description: 'Pronuncia-se como o "d" em "dado".',
    examples: [
      { word: 'дом', transcription: 'dom', translation: 'casa' },
      { word: 'дерево', transcription: 'derevo', translation: 'árvore' },
      { word: 'друг', transcription: 'drug', translation: 'amigo' }
    ],
    audioFile: 'audio/alphabet/d.mp3'
  },
  {
    letter: 'Е',
    name: 'ie',
    sound: 'ye',
    description: 'Pronuncia-se como "ie" em "iê-iê-iê". Após consoantes, suaviza a consoante anterior.',
    examples: [
      { word: 'ель', transcription: 'yel', translation: 'abeto' },
      { word: 'если', transcription: 'yesli', translation: 'se' },
      { word: 'ем', transcription: 'yem', translation: 'eu como' }
    ],
    audioFile: 'audio/alphabet/e.mp3'
  },
  {
    letter: 'Ё',
    name: 'io',
    sound: 'yo',
    description: 'Pronuncia-se como "io" em "iogurte". Após consoantes, suaviza a consoante anterior.',
    examples: [
      { word: 'ёлка', transcription: 'yolka', translation: 'árvore de natal' },
      { word: 'ёж', transcription: 'yozh', translation: 'ouriço' },
      { word: 'ёмкость', transcription: 'yomkost', translation: 'capacidade' }
    ],
    audioFile: 'audio/alphabet/yo.mp3'
  },
  {
    letter: 'Ж',
    name: 'je',
    sound: 'zh',
    description: 'Pronuncia-se como o "j" em "jornal" ou "s" em "mesa".',
    examples: [
      { word: 'жена', transcription: 'zhena', translation: 'esposa' },
      { word: 'журнал', transcription: 'zhurnal', translation: 'revista' },
      { word: 'жизнь', transcription: 'zhizn', translation: 'vida' }
    ],
    audioFile: 'audio/alphabet/zh.mp3'
  },
  {
    letter: 'З',
    name: 'ze',
    sound: 'z',
    description: 'Pronuncia-se como o "z" em "zero".',
    examples: [
      { word: 'зуб', transcription: 'zub', translation: 'dente' },
      { word: 'звезда', transcription: 'zvezda', translation: 'estrela' },
      { word: 'зима', transcription: 'zima', translation: 'inverno' }
    ],
    audioFile: 'audio/alphabet/z.mp3'
  },
  {
    letter: 'И',
    name: 'i',
    sound: 'i',
    description: 'Pronuncia-se como o "i" em "vida".',
    examples: [
      { word: 'игра', transcription: 'igra', translation: 'jogo' },
      { word: 'имя', transcription: 'imya', translation: 'nome' },
      { word: 'история', transcription: 'istoriya', translation: 'história' }
    ],
    audioFile: 'audio/alphabet/i.mp3'
  },
  {
    letter: 'Й',
    name: 'i curto',
    sound: 'y',
    description: 'Pronuncia-se como o "i" em "pai", mais curto e com um som de "y".',
    examples: [
      { word: 'йогурт', transcription: 'yogurt', translation: 'iogurte' },
      { word: 'май', transcription: 'may', translation: 'maio' },
      { word: 'чай', transcription: 'chay', translation: 'chá' }
    ],
    audioFile: 'audio/alphabet/j.mp3'
  },
  {
    letter: 'К',
    name: 'ka',
    sound: 'k',
    description: 'Pronuncia-se como o "c" em "casa" ou "k" em "kilo".',
    examples: [
      { word: 'кот', transcription: 'kot', translation: 'gato' },
      { word: 'книга', transcription: 'kniga', translation: 'livro' },
      { word: 'кофе', transcription: 'kofe', translation: 'café' }
    ],
    audioFile: 'audio/alphabet/k.mp3'
  },
  {
    letter: 'Л',
    name: 'el',
    sound: 'l',
    description: 'Pronuncia-se como o "l" em "lua", mas um pouco mais "duro".',
    examples: [
      { word: 'лампа', transcription: 'lampa', translation: 'lâmpada' },
      { word: 'лето', transcription: 'leto', translation: 'verão' },
      { word: 'лицо', transcription: 'litso', translation: 'rosto' }
    ],
    audioFile: 'audio/alphabet/l.mp3'
  },
  {
    letter: 'М',
    name: 'em',
    sound: 'm',
    description: 'Pronuncia-se como o "m" em "mãe".',
    examples: [
      { word: 'мама', transcription: 'mama', translation: 'mãe' },
      { word: 'море', transcription: 'more', translation: 'mar' },
      { word: 'музыка', transcription: 'muzyka', translation: 'música' }
    ],
    audioFile: 'audio/alphabet/m.mp3'
  },
  {
    letter: 'Н',
    name: 'en',
    sound: 'n',
    description: 'Pronuncia-se como o "n" em "nada".',
    examples: [
      { word: 'нос', transcription: 'nos', translation: 'nariz' },
      { word: 'ночь', transcription: 'noch', translation: 'noite' },
      { word: 'небо', transcription: 'nebo', translation: 'céu' }
    ],
    audioFile: 'audio/alphabet/n.mp3'
  },
  {
    letter: 'О',
    name: 'o',
    sound: 'o',
    description: 'Pronuncia-se como o "o" em "bola" quando tônico. Em sílabas átonas, soa mais como "a".',
    examples: [
      { word: 'окно', transcription: 'okno', translation: 'janela' },
      { word: 'озеро', transcription: 'ozero', translation: 'lago' },
      { word: 'отец', transcription: 'otets', translation: 'pai' }
    ],
    audioFile: 'audio/alphabet/o.mp3'
  },
  {
    letter: 'П',
    name: 'pe',
    sound: 'p',
    description: 'Pronuncia-se como o "p" em "pato".',
    examples: [
      { word: 'папа', transcription: 'papa', translation: 'pai' },
      { word: 'парк', transcription: 'park', translation: 'parque' },
      { word: 'письмо', transcription: 'pismo', translation: 'carta' }
    ],
    audioFile: 'audio/alphabet/p.mp3'
  },
  {
    letter: 'Р',
    name: 'er',
    sound: 'r',
    description: 'Pronuncia-se como o "r" em "caro", mas vibrando a língua (como o "r" italiano).',
    examples: [
      { word: 'рука', transcription: 'ruka', translation: 'mão' },
      { word: 'рыба', transcription: 'ryba', translation: 'peixe' },
      { word: 'работа', transcription: 'rabota', translation: 'trabalho' }
    ],
    audioFile: 'audio/alphabet/r.mp3'
  },
  {
    letter: 'С',
    name: 'es',
    sound: 's',
    description: 'Pronuncia-se como o "s" em "sapo".',
    examples: [
      { word: 'сок', transcription: 'sok', translation: 'suco' },
      { word: 'стол', transcription: 'stol', translation: 'mesa' },
      { word: 'сестра', transcription: 'sestra', translation: 'irmã' }
    ],
    audioFile: 'audio/alphabet/s.mp3'
  },
  {
    letter: 'Т',
    name: 'te',
    sound: 't',
    description: 'Pronuncia-se como o "t" em "tatu".',
    examples: [
      { word: 'телефон', transcription: 'telefon', translation: 'telefone' },
      { word: 'такси', transcription: 'taksi', translation: 'táxi' },
      { word: 'театр', transcription: 'teatr', translation: 'teatro' }
    ],
    audioFile: 'audio/alphabet/t.mp3'
  },
  {
    letter: 'У',
    name: 'u',
    sound: 'u',
    description: 'Pronuncia-se como o "u" em "uva".',
    examples: [
      { word: 'утка', transcription: 'utka', translation: 'pato' },
      { word: 'улица', transcription: 'ulitsa', translation: 'rua' },
      { word: 'ухо', transcription: 'ukho', translation: 'orelha' }
    ],
    audioFile: 'audio/alphabet/u.mp3'
  },
  {
    letter: 'Ф',
    name: 'ef',
    sound: 'f',
    description: 'Pronuncia-se como o "f" em "faca".',
    examples: [
      { word: 'фото', transcription: 'foto', translation: 'foto' },
      { word: 'фильм', transcription: 'film', translation: 'filme' },
      { word: 'форма', transcription: 'forma', translation: 'forma' }
    ],
    audioFile: 'audio/alphabet/f.mp3'
  },
  {
    letter: 'Х',
    name: 'kha',
    sound: 'kh',
    description: 'Pronuncia-se como o "r" em "rato" no português do Brasil, ou como o "j" espanhol.',
    examples: [
      { word: 'хлеб', transcription: 'khleb', translation: 'pão' },
      { word: 'хорошо', transcription: 'khorosho', translation: 'bom' },
      { word: 'химия', transcription: 'khimiya', translation: 'química' }
    ],
    audioFile: 'audio/alphabet/kh.mp3'
  },
  {
    letter: 'Ц',
    name: 'tse',
    sound: 'ts',
    description: 'Pronuncia-se como "ts" em "tsunami".',
    examples: [
      { word: 'центр', transcription: 'tsentr', translation: 'centro' },
      { word: 'цирк', transcription: 'tsirk', translation: 'circo' },
      { word: 'цвет', transcription: 'tsvet', translation: 'cor' }
    ],
    audioFile: 'audio/alphabet/ts.mp3'
  },
  {
    letter: 'Ч',
    name: 'che',
    sound: 'ch',
    description: 'Pronuncia-se como "tch" em "tchau".',
    examples: [
      { word: 'час', transcription: 'chas', translation: 'hora' },
      { word: 'человек', transcription: 'chelovek', translation: 'pessoa' },
      { word: 'чай', transcription: 'chay', translation: 'chá' }
    ],
    audioFile: 'audio/alphabet/ch.mp3'
  },
  {
    letter: 'Ш',
    name: 'sha',
    sound: 'sh',
    description: 'Pronuncia-se como "ch" em "chave".',
    examples: [
      { word: 'школа', transcription: 'shkola', translation: 'escola' },
      { word: 'шапка', transcription: 'shapka', translation: 'chapéu' },
      { word: 'шоколад', transcription: 'shokolad', translation: 'chocolate' }
    ],
    audioFile: 'audio/alphabet/sh.mp3'
  },
  {
    letter: 'Щ',
    name: 'shcha',
    sound: 'shch',
    description: 'Pronuncia-se como "sh" prolongado, como em "peixe" mas mais suave e longo.',
    examples: [
      { word: 'щека', transcription: 'shcheka', translation: 'bochecha' },
      { word: 'щенок', transcription: 'shchenok', translation: 'filhote' },
      { word: 'борщ', transcription: 'borshch', translation: 'borscht (sopa)' }
    ],
    audioFile: 'audio/alphabet/shch.mp3'
  },
  {
    letter: 'Ъ',
    name: 'sinal duro',
    sound: '-',
    description: 'Não tem som próprio. Separa uma consoante da vogal seguinte, evitando a palatização.',
    examples: [
      { word: 'объект', transcription: 'obyekt', translation: 'objeto' },
      { word: 'подъезд', transcription: 'podyezd', translation: 'entrada' },
      { word: 'съезд', transcription: 'syezd', translation: 'congresso' }
    ],
    audioFile: 'audio/alphabet/hard_sign.mp3'
  },
  {
    letter: 'Ы',
    name: 'y',
    sound: 'y',
    description: 'Som gutural sem equivalente em português. Pronuncia-se como um "i" mais profundo e posterior.',
    examples: [
      { word: 'сыр', transcription: 'syr', translation: 'queijo' },
      { word: 'мышь', transcription: 'mysh', translation: 'rato' },
      { word: 'ты', transcription: 'ty', translation: 'você' }
    ],
    audioFile: 'audio/alphabet/y.mp3'
  },
  {
    letter: 'Ь',
    name: 'sinal brando',
    sound: '-',
    description: 'Não tem som próprio. Suaviza a consoante anterior, tornando-a palatizada.',
    examples: [
      { word: 'день', transcription: 'den', translation: 'dia' },
      { word: 'соль', transcription: 'sol', translation: 'sal' },
      { word: 'мать', transcription: 'mat', translation: 'mãe' }
    ],
    audioFile: 'audio/alphabet/soft_sign.mp3'
  },
  {
    letter: 'Э',
    name: 'e',
    sound: 'e',
    description: 'Pronuncia-se como o "e" em "época".',
    examples: [
      { word: 'это', transcription: 'eto', translation: 'isto' },
      { word: 'эхо', transcription: 'ekho', translation: 'eco' },
      { word: 'поэт', transcription: 'poet', translation: 'poeta' }
    ],
    audioFile: 'audio/alphabet/e_reverse.mp3'
  },
  {
    letter: 'Ю',
    name: 'iu',
    sound: 'yu',
    description: 'Pronuncia-se como "iu" em "iupi". Após consoantes, suaviza a consoante anterior.',
    examples: [
      { word: 'юг', transcription: 'yug', translation: 'sul' },
      { word: 'юмор', transcription: 'yumor', translation: 'humor' },
      { word: 'меню', transcription: 'menyu', translation: 'menu' }
    ],
    audioFile: 'audio/alphabet/yu.mp3'
  },
  {
    letter: 'Я',
    name: 'ia',
    sound: 'ya',
    description: 'Pronuncia-se como "ia" em "iara". Após consoantes, suaviza a consoante anterior.',
    examples: [
      { word: 'яблоко', transcription: 'yabloko', translation: 'maçã' },
      { word: 'язык', transcription: 'yazyk', translation: 'língua' },
      { word: 'моя', transcription: 'moya', translation: 'minha' }
    ],
    audioFile: 'audio/alphabet/ya.mp3'
  }
];
