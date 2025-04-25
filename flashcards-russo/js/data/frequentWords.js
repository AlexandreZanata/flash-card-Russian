// frequentWords.js - Arquivo com as 1000 palavras mais frequentes em russo

const frequentWords = [
  // Palavras 1-50
  {
    id: 'freq-001',
    russian: 'и',
    transcription: 'i',
    portuguese: 'e',
    english: 'and',
    category: 'frequentes',
    known: false,
    context: 'Palavra de ligação muito comum. Ex: Мама и папа (Mamãe e papai)'
  },
  {
    id: 'freq-002',
    russian: 'в',
    transcription: 'v',
    portuguese: 'em',
    english: 'in',
    category: 'frequentes',
    known: false,
    context: 'Preposição de lugar. Ex: Я живу в Москве (Eu moro em Moscou)'
  },
  {
    id: 'freq-003',
    russian: 'не',
    transcription: 'ne',
    portuguese: 'não',
    english: 'not',
    category: 'frequentes',
    known: false,
    context: 'Partícula de negação. Ex: Я не знаю (Eu não sei)'
  },
  {
    id: 'freq-004',
    russian: 'он',
    transcription: 'on',
    portuguese: 'ele',
    english: 'he',
    category: 'frequentes',
    known: false,
    context: 'Pronome pessoal masculino. Ex: Он студент (Ele é estudante)'
  },
  {
    id: 'freq-005',
    russian: 'на',
    transcription: 'na',
    portuguese: 'em, sobre',
    english: 'on',
    category: 'frequentes',
    known: false,
    context: 'Preposição de lugar. Ex: Книга на столе (O livro está sobre a mesa)'
  },
  {
    id: 'freq-006',
    russian: 'я',
    transcription: 'ya',
    portuguese: 'eu',
    english: 'I',
    category: 'frequentes',
    known: false,
    context: 'Pronome pessoal primeira pessoa. Ex: Я говорю по-русски (Eu falo russo)'
  },
  {
    id: 'freq-007',
    russian: 'что',
    transcription: 'chto',
    portuguese: 'que, o que',
    english: 'what, that',
    category: 'frequentes',
    known: false,
    context: 'Pronome interrogativo ou conjunção. Ex: Что это? (O que é isso?)'
  },
  {
    id: 'freq-008',
    russian: 'тот',
    transcription: 'tot',
    portuguese: 'aquele',
    english: 'that',
    category: 'frequentes',
    known: false,
    context: 'Pronome demonstrativo. Ex: Тот дом (Aquela casa)'
  },
  {
    id: 'freq-009',
    russian: 'быть',
    transcription: 'byt',
    portuguese: 'ser, estar',
    english: 'to be',
    category: 'frequentes',
    known: false,
    context: 'Verbo ser/estar. Ex: Я буду дома (Eu estarei em casa)'
  },
  {
    id: 'freq-010',
    russian: 'с',
    transcription: 's',
    portuguese: 'com',
    english: 'with',
    category: 'frequentes',
    known: false,
    context: 'Preposição. Ex: Я с другом (Eu estou com um amigo)'
  },
  {
    id: 'freq-011',
    russian: 'а',
    transcription: 'a',
    portuguese: 'mas, e',
    english: 'but, and',
    category: 'frequentes',
    known: false,
    context: 'Conjunção adversativa. Ex: Я хочу пойти, а он нет (Eu quero ir, mas ele não)'
  },
  {
    id: 'freq-012',
    russian: 'весь',
    transcription: 'ves',
    portuguese: 'todo, tudo',
    english: 'all, everything',
    category: 'frequentes',
    known: false,
    context: 'Pronome indefinido. Ex: Весь день (Todo o dia)'
  },
  {
    id: 'freq-013',
    russian: 'это',
    transcription: 'eto',
    portuguese: 'isto, isso',
    english: 'this, that',
    category: 'frequentes',
    known: false,
    context: 'Pronome demonstrativo. Ex: Это мой дом (Esta é minha casa)'
  },
  {
    id: 'freq-014',
    russian: 'как',
    transcription: 'kak',
    portuguese: 'como',
    english: 'how, as',
    category: 'frequentes',
    known: false,
    context: 'Advérbio interrogativo. Ex: Как дела? (Como vai?)'
  },
  {
    id: 'freq-015',
    russian: 'она',
    transcription: 'ona',
    portuguese: 'ela',
    english: 'she',
    category: 'frequentes',
    known: false,
    context: 'Pronome pessoal feminino. Ex: Она врач (Ela é médica)'
  },
  {
    id: 'freq-016',
    russian: 'по',
    transcription: 'po',
    portuguese: 'por, ao longo de',
    english: 'by, along',
    category: 'frequentes',
    known: false,
    context: 'Preposição. Ex: Идти по улице (Andar pela rua)'
  },
  {
    id: 'freq-017',
    russian: 'но',
    transcription: 'no',
    portuguese: 'mas',
    english: 'but',
    category: 'frequentes',
    known: false,
    context: 'Conjunção adversativa. Ex: Я хочу, но не могу (Eu quero, mas não posso)'
  },
  {
    id: 'freq-018',
    russian: 'они',
    transcription: 'oni',
    portuguese: 'eles/elas',
    english: 'they',
    category: 'frequentes',
    known: false,
    context: 'Pronome pessoal plural. Ex: Они студенты (Eles são estudantes)'
  },
  {
    id: 'freq-019',
    russian: 'к',
    transcription: 'k',
    portuguese: 'para, a',
    english: 'to, towards',
    category: 'frequentes',
    known: false,
    context: 'Preposição de direção. Ex: Идти к дому (Ir para casa)'
  },
  {
    id: 'freq-020',
    russian: 'у',
    transcription: 'u',
    portuguese: 'em, perto de',
    english: 'at, near',
    category: 'frequentes',
    known: false,
    context: 'Preposição de posse. Ex: У меня есть книга (Eu tenho um livro)'
  },
  {
    id: 'freq-021',
    russian: 'ты',
    transcription: 'ty',
    portuguese: 'tu, você (informal)',
    english: 'you (informal)',
    category: 'frequentes',
    known: false,
    context: 'Pronome pessoal segunda pessoa informal. Ex: Ты знаешь (Você sabe)'
  },
  {
    id: 'freq-022',
    russian: 'из',
    transcription: 'iz',
    portuguese: 'de, a partir de',
    english: 'from, out of',
    category: 'frequentes',
    known: false,
    context: 'Preposição de origem. Ex: Я из России (Eu sou da Rússia)'
  },
  {
    id: 'freq-023',
    russian: 'мы',
    transcription: 'my',
    portuguese: 'nós',
    english: 'we',
    category: 'frequentes',
    known: false,
    context: 'Pronome pessoal primeira pessoa plural. Ex: Мы друзья (Nós somos amigos)'
  },
  {
    id: 'freq-024',
    russian: 'за',
    transcription: 'za',
    portuguese: 'atrás de, por',
    english: 'behind, for',
    category: 'frequentes',
    known: false,
    context: 'Preposição. Ex: За домом (Atrás da casa)'
  },
  {
    id: 'freq-025',
    russian: 'вы',
    transcription: 'vy',
    portuguese: 'vocês, você (formal)',
    english: 'you (plural/formal)',
    category: 'frequentes',
    known: false,
    context: 'Pronome pessoal segunda pessoa formal. Ex: Вы говорите по-английски? (Você fala inglês?)'
  },
  {
    id: 'freq-026',
    russian: 'так',
    transcription: 'tak',
    portuguese: 'assim, desse modo',
    english: 'so, thus',
    category: 'frequentes',
    known: false,
    context: 'Advérbio de modo. Ex: Делай так (Faça assim)'
  },
  {
    id: 'freq-027',
    russian: 'же',
    transcription: 'zhe',
    portuguese: 'mesmo, também',
    english: 'same, also',
    category: 'frequentes',
    known: false,
    context: 'Partícula enfática. Ex: Тот же самый (O mesmo)'
  },
  {
    id: 'freq-028',
    russian: 'от',
    transcription: 'ot',
    portuguese: 'de, desde',
    english: 'from',
    category: 'frequentes',
    known: false,
    context: 'Preposição de origem. Ex: Письмо от мамы (Carta da mãe)'
  },
  {
    id: 'freq-029',
    russian: 'сказать',
    transcription: 'skazat',
    portuguese: 'dizer, falar',
    english: 'to say, to speak',
    category: 'frequentes',
    known: false,
    context: 'Verbo. Ex: Я хочу сказать (Eu quero dizer)'
  },
  {
    id: 'freq-030',
    russian: 'этот',
    transcription: 'etot',
    portuguese: 'este',
    english: 'this',
    category: 'frequentes',
    known: false,
    context: 'Pronome demonstrativo. Ex: Этот дом (Esta casa)'
  },
  {
    id: 'freq-031',
    russian: 'который',
    transcription: 'kotoryy',
    portuguese: 'que, qual',
    english: 'which, who, that',
    category: 'frequentes',
    known: false,
    context: 'Pronome relativo. Ex: Дом, который я купил (A casa que eu comprei)'
  },
  {
    id: 'freq-032',
    russian: 'мочь',
    transcription: 'moch',
    portuguese: 'poder, ser capaz',
    english: 'be able',
    category: 'frequentes',
    known: false,
    context: 'Verbo modal. Ex: Я могу помочь (Eu posso ajudar)'
  },
  {
    id: 'freq-033',
    russian: 'человек',
    transcription: 'chelovek',
    portuguese: 'pessoa, homem',
    english: 'man, person',
    category: 'frequentes',
    known: false,
    context: 'Substantivo. Ex: Хороший человек (Uma boa pessoa)'
  },
  {
    id: 'freq-034',
    russian: 'о',
    transcription: 'o',
    portuguese: 'sobre, a respeito de',
    english: 'about',
    category: 'frequentes',
    known: false,
    context: 'Preposição. Ex: Книга о России (Livro sobre a Rússia)'
  },
  {
    id: 'freq-035',
    russian: 'один',
    transcription: 'odin',
    portuguese: 'um',
    english: 'one',
    category: 'frequentes',
    known: false,
    context: 'Numeral. Ex: Один дом (Uma casa)'
  },
  {
    id: 'freq-036',
    russian: 'ещё',
    transcription: 'yeshchyo',
    portuguese: 'ainda, mais',
    english: 'still, yet',
    category: 'frequentes',
    known: false,
    context: 'Advérbio. Ex: Ещё раз (Mais uma vez)'
  },
  {
    id: 'freq-037',
    russian: 'бы',
    transcription: 'by',
    portuguese: 'partícula condicional',
    english: 'would',
    category: 'frequentes',
    known: false,
    context: 'Partícula condicional. Ex: Я хотел бы (Eu gostaria)'
  },
  {
    id: 'freq-038',
    russian: 'такой',
    transcription: 'takoy',
    portuguese: 'tal, assim',
    english: 'such',
    category: 'frequentes',
    known: false,
    context: 'Pronome demonstrativo. Ex: Такой человек (Tal pessoa)'
  },
  {
    id: 'freq-039',
    russian: 'только',
    transcription: 'tolko',
    portuguese: 'somente, apenas',
    english: 'only',
    category: 'frequentes',
    known: false,
    context: 'Advérbio restritivo. Ex: Только ты (Somente você)'
  },
  {
    id: 'freq-040',
    russian: 'себя',
    transcription: 'sebya',
    portuguese: 'si mesmo',
    english: 'oneself',
    category: 'frequentes',
    known: false,
    context: 'Pronome reflexivo. Ex: Любить себя (Amar a si mesmo)'
  },
  {
    id: 'freq-041',
    russian: 'своё',
    transcription: 'svoyo',
    portuguese: 'próprio, seu',
    english: 'ones own',
    category: 'frequentes',
    known: false,
    context: 'Pronome possessivo reflexivo. Ex: Своё мнение (Sua própria opinião)'
  },
  {
    id: 'freq-042',
    russian: 'какой',
    transcription: 'kakoy',
    portuguese: 'qual, que tipo',
    english: 'what, which',
    category: 'frequentes',
    known: false,
    context: 'Pronome interrogativo. Ex: Какой фильм? (Qual filme?)'
  },
  {
    id: 'freq-043',
    russian: 'когда',
    transcription: 'kogda',
    portuguese: 'quando',
    english: 'when',
    category: 'frequentes',
    known: false,
    context: 'Advérbio interrogativo de tempo. Ex: Когда ты придёшь? (Quando você virá?)'
  },
  {
    id: 'freq-044',
    russian: 'уже',
    transcription: 'uzhe',
    portuguese: 'já',
    english: 'already',
    category: 'frequentes',
    known: false,
    context: 'Advérbio de tempo. Ex: Я уже знаю (Eu já sei)'
  },
  {
    id: 'freq-045',
    russian: 'для',
    transcription: 'dlya',
    portuguese: 'para',
    english: 'for',
    category: 'frequentes',
    known: false,
    context: 'Preposição de finalidade. Ex: Подарок для мамы (Presente para a mãe)'
  },
  {
    id: 'freq-046',
    russian: 'вот',
    transcription: 'vot',
    portuguese: 'aqui está',
    english: 'here is',
    category: 'frequentes',
    known: false,
    context: 'Partícula demonstrativa. Ex: Вот мой дом (Aqui está minha casa)'
  },
  {
    id: 'freq-047',
    russian: 'кто',
    transcription: 'kto',
    portuguese: 'quem',
    english: 'who',
    category: 'frequentes',
    known: false,
    context: 'Pronome interrogativo. Ex: Кто это? (Quem é?)'
  },
  {
    id: 'freq-048',
    russian: 'да',
    transcription: 'da',
    portuguese: 'sim',
    english: 'yes',
    category: 'frequentes',
    known: false,
    context: 'Afirmação. Ex: Да, конечно (Sim, claro)'
  },
  {
    id: 'freq-049',
    russian: 'говорить',
    transcription: 'govorit',
    portuguese: 'falar, dizer',
    english: 'to speak, to say',
    category: 'frequentes',
    known: false,
    context: 'Verbo. Ex: Я говорю по-русски (Eu falo russo)'
  },
  {
    id: 'freq-050',
    russian: 'год',
    transcription: 'god',
    portuguese: 'ano',
    english: 'year',
    category: 'frequentes',
    known: false,
    context: 'Substantivo. Ex: Новый год (Ano novo)'
  },
  
  // Palavras 51-100
  {
    id: 'freq-051',
    russian: 'знать',
    transcription: 'znat',
    portuguese: 'saber, conhecer',
    english: 'to know',
    category: 'frequentes',
    known: false,
    context: 'Verbo. Ex: Я знаю ответ (Eu sei a resposta)'
  },
  {
    id: 'freq-052',
    russian: 'мой',
    transcription: 'moy',
    portuguese: 'meu',
    english: 'my',
    category: 'frequentes',
    known: false,
    context: 'Pronome possessivo. Ex: Мой дом (Minha casa)'
  },
  {
    id: 'freq-053',
    russian: 'до',
    transcription: 'do',
    portuguese: 'até',
    english: 'until, before',
    category: 'frequentes',
    known: false,
    context: 'Preposição temporal. Ex: До завтра (Até amanhã)'
  },
  {
    id: 'freq-054',
    russian: 'или',
    transcription: 'ili',
    portuguese: 'ou',
    english: 'or',
    category: 'frequentes',
    known: false,
    context: 'Conjunção alternativa. Ex: Чай или кофе? (Chá ou café?)'
  },
  {
    id: 'freq-055',
    russian: 'если',
    transcription: 'yesli',
    portuguese: 'se',
    english: 'if',
    category: 'frequentes',
    known: false,
    context: 'Conjunção condicional. Ex: Если будет дождь (Se chover)'
  },
  {
    id: 'freq-056',
    russian: 'время',
    transcription: 'vremya',
    portuguese: 'tempo',
    english: 'time',
    category: 'frequentes',
    known: false,
    context: 'Substantivo. Ex: У меня нет времени (Eu não tenho tempo)'
  },
  {
    id: 'freq-057',
    russian: 'рука',
    transcription: 'ruka',
    portuguese: 'mão, braço',
    english: 'hand, arm',
    category: 'frequentes',
    known: false,
    context: 'Substantivo. Ex: Дай мне руку (Dê-me sua mão)'
  },
  {
    id: 'freq-058',
    russian: 'нет',
    transcription: 'nyet',
    portuguese: 'não',
    english: 'no',
    category: 'frequentes',
    known: false,
    context: 'Negação. Ex: Нет, спасибо (Não, obrigado)'
  },
  {
    id: 'freq-059',
    russian: 'самый',
    transcription: 'samyy',
    portuguese: 'o mais, o próprio',
    english: 'most, the very',
    category: 'frequentes',
    known: false,
    context: 'Adjetivo superlativo. Ex: Самый лучший (O melhor)'
  },
  {
    id: 'freq-060',
    russian: 'ни',
    transcription: 'ni',
    portuguese: 'nem, nenhum',
    english: 'neither, not',
    category: 'frequentes',
    known: false,
    context: 'Partícula negativa. Ex: Ни один (Nem um)'
  },
  {
    id: 'freq-061',
    russian: 'стать',
    transcription: 'stat',
    portuguese: 'tornar-se, ficar',
    english: 'to become',
    category: 'frequentes',
    known: false,
    context: 'Verbo. Ex: Я хочу стать врачом (Eu quero me tornar médico)'
  },
  {
    id: 'freq-062',
    russian: 'большой',
    transcription: 'bolshoy',
    portuguese: 'grande',
    english: 'big, large',
    category: 'frequentes',
    known: false,
    context: 'Adjetivo. Ex: Большой дом (Casa grande)'
  },
  {
    id: 'freq-063',
    russian: 'даже',
    transcription: 'dazhe',
    portuguese: 'até mesmo',
    english: 'even',
    category: 'frequentes',
    known: false,
    context: 'Advérbio. Ex: Даже он знает (Até mesmo ele sabe)'
  },
  {
    id: 'freq-064',
    russian: 'другой',
    transcription: 'drugoy',
    portuguese: 'outro, diferente',
    english: 'other, another',
    category: 'frequentes',
    known: false,
    context: 'Adjetivo. Ex: Другой вопрос (Outra questão)'
  },
  {
    id: 'freq-065',
    russian: 'наш',
    transcription: 'nash',
    portuguese: 'nosso',
    english: 'our',
    category: 'frequentes',
    known: false,
    context: 'Pronome possessivo. Ex: Наш дом (Nossa casa)'
  },
  {
    id: 'freq-066',
    russian: 'свой',
    transcription: 'svoy',
    portuguese: 'próprio, seu',
    english: 'ones own',
    category: 'frequentes',
    known: false,
    context: 'Pronome possessivo reflexivo. Ex: Свой дом (Sua própria casa)'
  },
  {
    id: 'freq-067',
    russian: 'ну',
    transcription: 'nu',
    portuguese: 'bem, então',
    english: 'well, so',
    category: 'frequentes',
    known: false,
    context: 'Interjeição. Ex: Ну, хорошо (Bem, ok)'
  },
  {
    id: 'freq-068',
    russian: 'под',
    transcription: 'pod',
    portuguese: 'sob, debaixo de',
    english: 'under',
    category: 'frequentes',
    known: false,
    context: 'Preposição de lugar. Ex: Под столом (Debaixo da mesa)'
  },
  {
    id: 'freq-069',
    russian: 'где',
    transcription: 'gde',
    portuguese: 'onde',
    english: 'where',
    category: 'frequentes',
    known: false,
    context: 'Advérbio interrogativo de lugar. Ex: Где ты? (Onde você está?)'
  },
  {
    id: 'freq-070',
    russian: 'дело',
    transcription: 'delo',
    portuguese: 'assunto, negócio',
    english: 'business, matter',
    category: 'frequentes',
    known: false,
    context: 'Substantivo. Ex: Важное дело (Assunto importante)'
  },
  {
    id: 'freq-071',
    russian: 'есть',
    transcription: 'yest',
    portuguese: 'comer, haver',
    english: 'to eat, to be',
    category: 'frequentes',
    known: false,
    context: 'Verbo. Ex: У меня есть книга (Eu tenho um livro)'
  },
  {
    id: 'freq-072',
    russian: 'сам',
    transcription: 'sam',
    portuguese: 'mesmo, próprio',
    english: 'myself, yourself',
    category: 'frequentes',
    known: false,
    context: 'Pronome enfático. Ex: Я сам это сделаю (Eu mesmo farei isso)'
  },
  {
    id: 'freq-073',
    russian: 'раз',
    transcription: 'raz',
    portuguese: 'vez, uma vez',
    english: 'time, once',
    category: 'frequentes',
    known: false,
    context: 'Substantivo. Ex: Ещё раз (Mais uma vez)'
  },
  {
    id: 'freq-074',
    russian: 'чтобы',
    transcription: 'chtoby',
    portuguese: 'para que, a fim de',
    english: 'in order to',
    category: 'frequentes',
    known: false,
    context: 'Conjunção final. Ex: Я учу русский, чтобы поехать в Россию (Estudo russo para ir à Rússia)'
  },
  {
    id: 'freq-075',
    russian: 'два',
    transcription: 'dva',
    portuguese: 'dois',
    english: 'two',
    category: 'frequentes',
    known: false,
    context: 'Numeral. Ex: Два дома (Duas casas)'
  },
  {
    id: 'freq-076',
    russian: 'там',
    transcription: 'tam',
    portuguese: 'lá, ali',
    english: 'there',
    category: 'frequentes',
    known: false,
    context: 'Advérbio de lugar. Ex: Я был там (Eu estive lá)'
  },
  {
    id: 'freq-077',
    russian: 'чем',
    transcription: 'chem',
    portuguese: 'do que, que',
    english: 'than',
    category: 'frequentes',
    known: false,
    context: 'Conjunção comparativa. Ex: Больше, чем (Mais do que)'
  },
  {
    id: 'freq-078',
    russian: 'глаз',
    transcription: 'glaz',
    portuguese: 'olho',
    english: 'eye',
    category: 'frequentes',
    known: false,
    context: 'Substantivo. Ex: Голубые глаза (Olhos azuis)'
  },
  {
    id: 'freq-079',
    russian: 'жизнь',
    transcription: 'zhizn',
    portuguese: 'vida',
    english: 'life',
    category: 'frequentes',
    known: false,
    context: 'Substantivo. Ex: Моя жизнь (Minha vida)'
  },
  {
    id: 'freq-080',
    russian: 'первый',
    transcription: 'pervyy',
    portuguese: 'primeiro',
    english: 'first',
    category: 'frequentes',
    known: false,
    context: 'Adjetivo numeral. Ex: Первый день (Primeiro dia)'
  },
  {
    id: 'freq-081',
    russian: 'день',
    transcription: 'den',
    portuguese: 'dia',
    english: 'day',
    category: 'frequentes',
    known: false,
    context: 'Substantivo. Ex: Хороший день (Um bom dia)'
  },
  {
    id: 'freq-082',
    russian: 'тут',
    transcription: 'tut',
    portuguese: 'aqui',
    english: 'here',
    category: 'frequentes',
    known: false,
    context: 'Advérbio de lugar. Ex: Я живу тут (Eu moro aqui)'
  },
  {
    id: 'freq-083',
    russian: 'во',
    transcription: 'vo',
    portuguese: 'em',
    english: 'in',
    category: 'frequentes',
    known: false,
    context: 'Variante da preposição "в". Ex: Во Франции (Na França)'
  },
  {
    id: 'freq-084',
    russian: 'ничто',
    transcription: 'nichto',
    portuguese: 'nada',
    english: 'nothing',
    category: 'frequentes',
    known: false,
    context: 'Pronome negativo. Ex: Ничто не помогает (Nada ajuda)'
  },
  {
    id: 'freq-085',
    russian: 'потом',
    transcription: 'potom',
    portuguese: 'depois',
    english: 'afterwards',
    category: 'frequentes',
    known: false,
    context: 'Advérbio de tempo. Ex: Сначала учёба, потом отдых (Primeiro estudo, depois descanso)'
  },
  {
    id: 'freq-086',
    russian: 'очень',
    transcription: 'ochen',
    portuguese: 'muito',
    english: 'very',
    category: 'frequentes',
    known: false,
    context: 'Advérbio de intensidade. Ex: Очень хорошо (Muito bom)'
  },
  {
    id: 'freq-087',
    russian: 'со',
    transcription: 'so',
    portuguese: 'com',
    english: 'with',
    category: 'frequentes',
    known: false,
    context: 'Variante da preposição "с". Ex: Со мной (Comigo)'
  },
  {
    id: 'freq-088',
    russian: 'хотеть',
    transcription: 'khotet',
    portuguese: 'querer',
    english: 'to want',
    category: 'frequentes',
    known: false,
    context: 'Verbo. Ex: Я хочу пить (Eu quero beber)'
  },
  {
    id: 'freq-089',
    russian: 'ли',
    transcription: 'li',
    portuguese: 'se, acaso',
    english: 'whether, if',
    category: 'frequentes',
    known: false,
    context: 'Partícula interrogativa. Ex: Знаешь ли ты? (Você sabe?)'
  },
  {
    id: 'freq-090',
    russian: 'при',
    transcription: 'pri',
    portuguese: 'junto a, durante',
    english: 'by, at',
    category: 'frequentes',
    known: false,
    context: 'Preposição. Ex: При входе (Na entrada)'
  },
  {
    id: 'freq-091',
    russian: 'голова',
    transcription: 'golova',
    portuguese: 'cabeça',
    english: 'head',
    category: 'frequentes',
    known: false,
    context: 'Substantivo. Ex: Болит голова (Dói a cabeça)'
  },
  {
    id: 'freq-092',
    russian: 'надо',
    transcription: 'nado',
    portuguese: 'é preciso, é necessário',
    english: 'need to, must',
    category: 'frequentes',
    known: false,
    context: 'Predicativo. Ex: Надо учиться (É preciso estudar)'
  },
  {
    id: 'freq-093',
    russian: 'без',
    transcription: 'bez',
    portuguese: 'sem',
    english: 'without',
    category: 'frequentes',
    known: false,
    context: 'Preposição. Ex: Без денег (Sem dinheiro)'
  },
  {
    id: 'freq-094',
    russian: 'видеть',
    transcription: 'videt',
    portuguese: 'ver',
    english: 'to see',
    category: 'frequentes',
    known: false,
    context: 'Verbo. Ex: Я вижу дом (Eu vejo a casa)'
  },
  {
    id: 'freq-095',
    russian: 'теперь',
    transcription: 'teper',
    portuguese: 'agora',
    english: 'now',
    category: 'frequentes',
    known: false,
    context: 'Advérbio de tempo. Ex: Теперь я понимаю (Agora eu entendo)'
  },
  {
    id: 'freq-096',
    russian: 'тоже',
    transcription: 'tozhe',
    portuguese: 'também',
    english: 'also, too',
    category: 'frequentes',
    known: false,
    context: 'Advérbio. Ex: Я тоже хочу (Eu também quero)'
  },
  {
    id: 'freq-097',
    russian: 'стоять',
    transcription: 'stoyat',
    portuguese: 'estar de pé, ficar',
    english: 'to stand',
    category: 'frequentes',
    known: false,
    context: 'Verbo. Ex: Он стоит у окна (Ele está de pé junto à janela)'
  },
  {
    id: 'freq-098',
    russian: 'дом',
    transcription: 'dom',
    portuguese: 'casa',
    english: 'house, home',
    category: 'frequentes',
    known: false,
    context: 'Substantivo. Ex: Мой дом (Minha casa)'
  },
  {
    id: 'freq-099',
    russian: 'его',
    transcription: 'yego',
    portuguese: 'dele',
    english: 'his, its',
    category: 'frequentes',
    known: false,
    context: 'Pronome possessivo. Ex: Его книга (O livro dele)'
  },
  {
    id: 'freq-100',
    russian: 'новый',
    transcription: 'novyy',
    portuguese: 'novo',
    english: 'new',
    category: 'frequentes',
    known: false,
    context: 'Adjetivo. Ex: Новый дом (Casa nova)'
  },
  
  // Continuar com as palavras 101-1000...
  // Devido ao limite de espaço, este arquivo contém apenas as primeiras 100 palavras.
  // O restante das palavras deve ser adicionado seguindo o mesmo formato.
];

// Exportar o array de palavras frequentes
export default frequentWords;
