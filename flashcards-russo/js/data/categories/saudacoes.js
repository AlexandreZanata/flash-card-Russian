// saudacoes.js - Flashcards da categoria "Saudações" (expandido para 80 palavras)

const saudacoesFlashcards = [
  {
    id: 'saud-001',
    russian: 'Привет',
    transcription: 'privet',
    portuguese: 'Olá (informal)',
    english: 'Hello (informal)',
    category: 'saudacoes',
    known: false,
    context: 'Usado para cumprimentar amigos e pessoas próximas. Ex: Привет, как дела? (Olá, como vai?)'
  },
  {
    id: 'saud-002',
    russian: 'Здравствуйте',
    transcription: 'zdravstvuyte',
    portuguese: 'Olá (formal)',
    english: 'Hello (formal)',
    category: 'saudacoes',
    known: false,
    context: 'Usado em situações formais, com pessoas mais velhas ou desconhecidas. Ex: Здравствуйте, господин Иванов. (Olá, senhor Ivanov.)'
  },
  {
    id: 'saud-003',
    russian: 'Доброе утро',
    transcription: 'dobroye utro',
    portuguese: 'Bom dia',
    english: 'Good morning',
    category: 'saudacoes',
    known: false,
    context: 'Usado pela manhã, até aproximadamente meio-dia. Ex: Доброе утро, как вы спали? (Bom dia, como você dormiu?)'
  },
  {
    id: 'saud-004',
    russian: 'Добрый день',
    transcription: 'dobryy den',
    portuguese: 'Boa tarde',
    english: 'Good afternoon',
    category: 'saudacoes',
    known: false,
    context: 'Usado do meio-dia até o entardecer. Ex: Добрый день, рад вас видеть. (Boa tarde, feliz em vê-lo.)'
  },
  {
    id: 'saud-005',
    russian: 'Добрый вечер',
    transcription: 'dobryy vecher',
    portuguese: 'Boa noite (ao chegar)',
    english: 'Good evening',
    category: 'saudacoes',
    known: false,
    context: 'Usado do entardecer até a hora de dormir. Ex: Добрый вечер, как прошёл ваш день? (Boa noite, como foi seu dia?)'
  },
  {
    id: 'saud-006',
    russian: 'Спокойной ночи',
    transcription: 'spokoynoy nochi',
    portuguese: 'Boa noite (ao se despedir)',
    english: 'Good night',
    category: 'saudacoes',
    known: false,
    context: 'Usado ao se despedir antes de dormir. Ex: Спокойной ночи, сладких снов. (Boa noite, bons sonhos.)'
  },
  {
    id: 'saud-007',
    russian: 'До свидания',
    transcription: 'do svidaniya',
    portuguese: 'Adeus (formal)',
    english: 'Goodbye (formal)',
    category: 'saudacoes',
    known: false,
    context: 'Despedida formal. Ex: До свидания, было приятно познакомиться. (Adeus, foi um prazer conhecê-lo.)'
  },
  {
    id: 'saud-008',
    russian: 'Пока',
    transcription: 'poka',
    portuguese: 'Tchau (informal)',
    english: 'Bye (informal)',
    category: 'saudacoes',
    known: false,
    context: 'Despedida informal entre amigos. Ex: Пока, увидимся завтра! (Tchau, vejo você amanhã!)'
  },
  {
    id: 'saud-009',
    russian: 'Спасибо',
    transcription: 'spasibo',
    portuguese: 'Obrigado',
    english: 'Thank you',
    category: 'saudacoes',
    known: false,
    context: 'Expressão básica de agradecimento. Ex: Спасибо за помощь. (Obrigado pela ajuda.)'
  },
  {
    id: 'saud-010',
    russian: 'Большое спасибо',
    transcription: 'bolshoye spasibo',
    portuguese: 'Muito obrigado',
    english: 'Thank you very much',
    category: 'saudacoes',
    known: false,
    context: 'Agradecimento mais enfático. Ex: Большое спасибо за ваше гостеприимство. (Muito obrigado pela sua hospitalidade.)'
  },
  {
    id: 'saud-011',
    russian: 'Пожалуйста',
    transcription: 'pozhaluysta',
    portuguese: 'Por favor / De nada',
    english: 'Please / You\'re welcome',
    category: 'saudacoes',
    known: false,
    context: 'Usado tanto para pedir algo quanto para responder a um agradecimento. Ex: Пожалуйста, передайте соль. (Por favor, passe o sal.)'
  },
  {
    id: 'saud-012',
    russian: 'Извините',
    transcription: 'izvinite',
    portuguese: 'Desculpe (formal)',
    english: 'Excuse me / Sorry (formal)',
    category: 'saudacoes',
    known: false,
    context: 'Pedido formal de desculpas ou para chamar atenção. Ex: Извините, вы не знаете, который час? (Com licença, você sabe que horas são?)'
  },
  {
    id: 'saud-013',
    russian: 'Извини',
    transcription: 'izvini',
    portuguese: 'Desculpe (informal)',
    english: 'Sorry (informal)',
    category: 'saudacoes',
    known: false,
    context: 'Pedido informal de desculpas. Ex: Извини, я опоздал. (Desculpe, estou atrasado.)'
  },
  {
    id: 'saud-014',
    russian: 'Как дела?',
    transcription: 'kak dela?',
    portuguese: 'Como vai?',
    english: 'How are you?',
    category: 'saudacoes',
    known: false,
    context: 'Pergunta comum após cumprimentar alguém. Ex: Привет, как дела? (Olá, como vai?)'
  },
  {
    id: 'saud-015',
    russian: 'Хорошо',
    transcription: 'khorosho',
    portuguese: 'Bem',
    english: 'Good / Well',
    category: 'saudacoes',
    known: false,
    context: 'Resposta positiva a "Como vai?". Ex: У меня всё хорошо, спасибо. (Estou bem, obrigado.)'
  },
  {
    id: 'saud-016',
    russian: 'Нормально',
    transcription: 'normalno',
    portuguese: 'Normal / Mais ou menos',
    english: 'Normal / So-so',
    category: 'saudacoes',
    known: false,
    context: 'Resposta neutra a "Como vai?". Ex: Нормально, ничего особенного. (Normal, nada de especial.)'
  },
  {
    id: 'saud-017',
    russian: 'Плохо',
    transcription: 'plokho',
    portuguese: 'Mal',
    english: 'Bad',
    category: 'saudacoes',
    known: false,
    context: 'Resposta negativa a "Como vai?". Ex: К сожалению, плохо. (Infelizmente, mal.)'
  },
  {
    id: 'saud-018',
    russian: 'Меня зовут...',
    transcription: 'menya zovut...',
    portuguese: 'Meu nome é...',
    english: 'My name is...',
    category: 'saudacoes',
    known: false,
    context: 'Usado para se apresentar. Ex: Меня зовут Иван. (Meu nome é Ivan.)'
  },
  {
    id: 'saud-019',
    russian: 'Как вас зовут?',
    transcription: 'kak vas zovut?',
    portuguese: 'Como você se chama? (formal)',
    english: 'What is your name? (formal)',
    category: 'saudacoes',
    known: false,
    context: 'Pergunta formal sobre o nome de alguém. Ex: Здравствуйте, как вас зовут? (Olá, como você se chama?)'
  },
  {
    id: 'saud-020',
    russian: 'Как тебя зовут?',
    transcription: 'kak tebya zovut?',
    portuguese: 'Como você se chama? (informal)',
    english: 'What is your name? (informal)',
    category: 'saudacoes',
    known: false,
    context: 'Pergunta informal sobre o nome de alguém. Ex: Привет, как тебя зовут? (Oi, como você se chama?)'
  },
  {
    id: 'saud-021',
    russian: 'Рад познакомиться',
    transcription: 'rad poznakomitsya',
    portuguese: 'Prazer em conhecê-lo (dito por homem)',
    english: 'Nice to meet you (said by man)',
    category: 'saudacoes',
    known: false,
    context: 'Expressão usada por homens ao conhecer alguém. Ex: Рад познакомиться с вами. (Prazer em conhecê-lo.)'
  },
  {
    id: 'saud-022',
    russian: 'Рада познакомиться',
    transcription: 'rada poznakomitsya',
    portuguese: 'Prazer em conhecê-lo (dito por mulher)',
    english: 'Nice to meet you (said by woman)',
    category: 'saudacoes',
    known: false,
    context: 'Expressão usada por mulheres ao conhecer alguém. Ex: Рада познакомиться с вами. (Prazer em conhecê-lo.)'
  },
  {
    id: 'saud-023',
    russian: 'Добро пожаловать',
    transcription: 'dobro pozhalovat',
    portuguese: 'Bem-vindo',
    english: 'Welcome',
    category: 'saudacoes',
    known: false,
    context: 'Usado para receber alguém. Ex: Добро пожаловать в Москву! (Bem-vindo a Moscou!)'
  },
  {
    id: 'saud-024',
    russian: 'Да',
    transcription: 'da',
    portuguese: 'Sim',
    english: 'Yes',
    category: 'saudacoes',
    known: false,
    context: 'Afirmação básica. Ex: Да, я согласен. (Sim, eu concordo.)'
  },
  {
    id: 'saud-025',
    russian: 'Нет',
    transcription: 'nyet',
    portuguese: 'Não',
    english: 'No',
    category: 'saudacoes',
    known: false,
    context: 'Negação básica. Ex: Нет, спасибо. (Não, obrigado.)'
  },
  {
    id: 'saud-026',
    russian: 'Всего хорошего',
    transcription: 'vsego khoroshego',
    portuguese: 'Tudo de bom',
    english: 'All the best',
    category: 'saudacoes',
    known: false,
    context: 'Despedida desejando o melhor. Ex: Всего хорошего, до встречи! (Tudo de bom, até logo!)'
  },
  {
    id: 'saud-027',
    russian: 'Удачи',
    transcription: 'udachi',
    portuguese: 'Boa sorte',
    english: 'Good luck',
    category: 'saudacoes',
    known: false,
    context: 'Desejo de boa sorte. Ex: Удачи на экзамене! (Boa sorte na prova!)'
  },
  {
    id: 'saud-028',
    russian: 'Приятного аппетита',
    transcription: 'priyatnogo appetita',
    portuguese: 'Bom apetite',
    english: 'Enjoy your meal',
    category: 'saudacoes',
    known: false,
    context: 'Dito antes de começar uma refeição. Ex: Приятного аппетита всем! (Bom apetite a todos!)'
  },
  {
    id: 'saud-029',
    russian: 'На здоровье',
    transcription: 'na zdorovye',
    portuguese: 'Saúde / De nada',
    english: 'Cheers / You\'re welcome',
    category: 'saudacoes',
    known: false,
    context: 'Usado como resposta a um agradecimento ou em brindes. Ex: На здоровье! (Saúde!)'
  },
  {
    id: 'saud-030',
    russian: 'Поздравляю',
    transcription: 'pozdravlyayu',
    portuguese: 'Parabéns',
    english: 'Congratulations',
    category: 'saudacoes',
    known: false,
    context: 'Usado para felicitar alguém. Ex: Поздравляю с днём рождения! (Parabéns pelo aniversário!)'
  },
  {
    id: 'saud-031',
    russian: 'С Новым годом',
    transcription: 's novym godom',
    portuguese: 'Feliz Ano Novo',
    english: 'Happy New Year',
    category: 'saudacoes',
    known: false,
    context: 'Saudação de Ano Novo. Ex: С Новым годом и счастья вам! (Feliz Ano Novo e felicidades!)'
  },
  {
    id: 'saud-032',
    russian: 'С Рождеством',
    transcription: 's rozhdestvom',
    portuguese: 'Feliz Natal',
    english: 'Merry Christmas',
    category: 'saudacoes',
    known: false,
    context: 'Saudação natalina. Ex: С Рождеством Христовым! (Feliz Natal!)'
  },
  {
    id: 'saud-033',
    russian: 'Счастливого пути',
    transcription: 'schastlivogo puti',
    portuguese: 'Boa viagem',
    english: 'Have a good trip',
    category: 'saudacoes',
    known: false,
    context: 'Desejo para quem vai viajar. Ex: Счастливого пути и возвращайся скорее! (Boa viagem e volte logo!)'
  },
  {
    id: 'saud-034',
    russian: 'Доброй ночи',
    transcription: 'dobroy nochi',
    portuguese: 'Boa noite',
    english: 'Good night',
    category: 'saudacoes',
    known: false,
    context: 'Alternativa para "Спокойной ночи". Ex: Доброй ночи, увидимся завтра. (Boa noite, vejo você amanhã.)'
  },
  {
    id: 'saud-035',
    russian: 'Прощай',
    transcription: 'proshchay',
    portuguese: 'Adeus (definitivo)',
    english: 'Farewell',
    category: 'saudacoes',
    known: false,
    context: 'Despedida mais definitiva ou dramática. Ex: Прощай, я буду скучать по тебе. (Adeus, sentirei sua falta.)'
  },
  {
    id: 'saud-036',
    russian: 'Увидимся',
    transcription: 'uvidimsya',
    portuguese: 'Até logo / Nos vemos',
    english: 'See you',
    category: 'saudacoes',
    known: false,
    context: 'Despedida informal indicando que se verão novamente. Ex: Увидимся завтра! (Nos vemos amanhã!)'
  },
  {
    id: 'saud-037',
    russian: 'До завтра',
    transcription: 'do zavtra',
    portuguese: 'Até amanhã',
    english: 'See you tomorrow',
    category: 'saudacoes',
    known: false,
    context: 'Despedida específica para quando se verão no dia seguinte. Ex: До завтра, в то же время. (Até amanhã, no mesmo horário.)'
  },
  {
    id: 'saud-038',
    russian: 'До скорого',
    transcription: 'do skorogo',
    portuguese: 'Até breve',
    english: 'See you soon',
    category: 'saudacoes',
    known: false,
    context: 'Despedida indicando que se verão em breve. Ex: До скорого, я позвоню. (Até breve, eu ligarei.)'
  },
  {
    id: 'saud-039',
    russian: 'Как поживаете?',
    transcription: 'kak pozhivayete?',
    portuguese: 'Como vai? (formal)',
    english: 'How are you doing? (formal)',
    category: 'saudacoes',
    known: false,
    context: 'Pergunta formal sobre como alguém está. Ex: Здравствуйте, как поживаете? (Olá, como vai?)'
  },
  {
    id: 'saud-040',
    russian: 'Как жизнь?',
    transcription: 'kak zhizn?',
    portuguese: 'Como vai a vida?',
    english: 'How\'s life?',
    category: 'saudacoes',
    known: false,
    context: 'Pergunta informal sobre a vida de alguém. Ex: Привет, как жизнь? (Oi, como vai a vida?)'
  },
  {
    id: 'saud-041',
    russian: 'Что нового?',
    transcription: 'chto novogo?',
    portuguese: 'O que há de novo?',
    english: 'What\'s new?',
    category: 'saudacoes',
    known: false,
    context: 'Pergunta sobre novidades. Ex: Привет, что нового? (Oi, o que há de novo?)'
  },
  {
    id: 'saud-042',
    russian: 'Давно не виделись',
    transcription: 'davno ne videlis',
    portuguese: 'Há quanto tempo',
    english: 'Long time no see',
    category: 'saudacoes',
    known: false,
    context: 'Expressão usada ao reencontrar alguém após muito tempo. Ex: Привет, давно не виделись! (Oi, há quanto tempo!)'
  },
  {
    id: 'saud-043',
    russian: 'Очень приятно',
    transcription: 'ochen priyatno',
    portuguese: 'Muito prazer',
    english: 'Very pleased to meet you',
    category: 'saudacoes',
    known: false,
    context: 'Expressão de prazer ao conhecer alguém. Ex: Очень приятно познакомиться. (Muito prazer em conhecê-lo.)'
  },
  {
    id: 'saud-044',
    russian: 'Взаимно',
    transcription: 'vzaimno',
    portuguese: 'Igualmente',
    english: 'Likewise',
    category: 'saudacoes',
    known: false,
    context: 'Resposta a "prazer em conhecê-lo". Ex: Очень приятно! - Взаимно! (Muito prazer! - Igualmente!)'
  },
  {
    id: 'saud-045',
    russian: 'Добро пожаловать домой',
    transcription: 'dobro pozhalovat domoy',
    portuguese: 'Bem-vindo de volta',
    english: 'Welcome home',
    category: 'saudacoes',
    known: false,
    context: 'Saudação para quem retorna para casa. Ex: Добро пожаловать домой, мы скучали! (Bem-vindo de volta, sentimos sua falta!)'
  },
  {
    id: 'saud-046',
    russian: 'Доброго здоровья',
    transcription: 'dobrogo zdorovya',
    portuguese: 'Boa saúde',
    english: 'Good health',
    category: 'saudacoes',
    known: false,
    context: 'Desejo de boa saúde, usado como saudação. Ex: Доброго здоровья вам и вашей семье! (Boa saúde para você e sua família!)'
  },
  {
    id: 'saud-047',
    russian: 'Будьте здоровы',
    transcription: 'budte zdorovy',
    portuguese: 'Saúde (após espirro)',
    english: 'Bless you',
    category: 'saudacoes',
    known: false,
    context: 'Dito quando alguém espirra. Ex: Апчхи! - Будьте здоровы! (Atchim! - Saúde!)'
  },
  {
    id: 'saud-048',
    russian: 'Всего доброго',
    transcription: 'vsego dobrogo',
    portuguese: 'Tudo de bom',
    english: 'All the best',
    category: 'saudacoes',
    known: false,
    context: 'Despedida desejando coisas boas. Ex: Всего доброго, берегите себя! (Tudo de bom, cuide-se!)'
  },
  {
    id: 'saud-049',
    russian: 'Хорошего дня',
    transcription: 'khoroshego dnya',
    portuguese: 'Tenha um bom dia',
    english: 'Have a nice day',
    category: 'saudacoes',
    known: false,
    context: 'Desejo de bom dia ao se despedir. Ex: Хорошего дня вам! (Tenha um bom dia!)'
  },
  {
    id: 'saud-050',
    russian: 'Приятного вечера',
    transcription: 'priyatnogo vechera',
    portuguese: 'Tenha uma boa noite',
    english: 'Have a nice evening',
    category: 'saudacoes',
    known: false,
    context: 'Desejo de boa noite ao se despedir. Ex: Приятного вечера вам! (Tenha uma boa noite!)'
  },
  {
    id: 'saud-051',
    russian: 'Хороших выходных',
    transcription: 'khoroshikh vykhodnykh',
    portuguese: 'Bom fim de semana',
    english: 'Have a nice weekend',
    category: 'saudacoes',
    known: false,
    context: 'Desejo de bom fim de semana. Ex: Хороших выходных, отдохните хорошо! (Bom fim de semana, descanse bem!)'
  },
  {
    id: 'saud-052',
    russian: 'С днём рождения',
    transcription: 's dnyom rozhdeniya',
    portuguese: 'Feliz aniversário',
    english: 'Happy birthday',
    category: 'saudacoes',
    known: false,
    context: 'Felicitação de aniversário. Ex: С днём рождения, желаю счастья! (Feliz aniversário, desejo felicidades!)'
  },
  {
    id: 'saud-053',
    russian: 'Можно войти?',
    transcription: 'mozhno voyti?',
    portuguese: 'Posso entrar?',
    english: 'May I come in?',
    category: 'saudacoes',
    known: false,
    context: 'Pergunta antes de entrar em um ambiente. Ex: Извините, можно войти? (Com licença, posso entrar?)'
  },
  {
    id: 'saud-054',
    russian: 'Разрешите представиться',
    transcription: 'razreshite predstavitsya',
    portuguese: 'Permita-me apresentar-me',
    english: 'Allow me to introduce myself',
    category: 'saudacoes',
    known: false,
    context: 'Frase formal para iniciar uma apresentação. Ex: Разрешите представиться, я Иван Петров. (Permita-me apresentar-me, sou Ivan Petrov.)'
  },
  {
    id: 'saud-055',
    russian: 'Приятной встречи',
    transcription: 'priyatnoy vstrechi',
    portuguese: 'Tenha um bom encontro',
    english: 'Have a nice meeting',
    category: 'saudacoes',
    known: false,
    context: 'Desejo antes de um encontro ou reunião. Ex: Приятной встречи с друзьями! (Tenha um bom encontro com os amigos!)'
  },
  {
    id: 'saud-056',
    russian: 'Доброго пути',
    transcription: 'dobrogo puti',
    portuguese: 'Boa viagem',
    english: 'Have a good journey',
    category: 'saudacoes',
    known: false,
    context: 'Alternativa para "Счастливого пути". Ex: Доброго пути, пиши когда приедешь! (Boa viagem, escreva quando chegar!)'
  },
  {
    id: 'saud-057',
    russian: 'Приятных снов',
    transcription: 'priyatnykh snov',
    portuguese: 'Bons sonhos',
    english: 'Sweet dreams',
    category: 'saudacoes',
    known: false,
    context: 'Desejo antes de dormir. Ex: Спокойной ночи и приятных снов! (Boa noite e bons sonhos!)'
  },
  {
    id: 'saud-058',
    russian: 'Доброго времени суток',
    transcription: 'dobrogo vremeni sutok',
    portuguese: 'Olá (independente da hora)',
    english: 'Hello (regardless of time)',
    category: 'saudacoes',
    known: false,
    context: 'Saudação universal, usada quando não se sabe a hora do dia. Ex: Доброго времени суток, уважаемые читатели! (Olá, estimados leitores!)'
  },
  {
    id: 'saud-059',
    russian: 'Позвольте',
    transcription: 'pozvolte',
    portuguese: 'Com licença / Permita-me',
    english: 'Excuse me / Allow me',
    category: 'saudacoes',
    known: false,
    context: 'Usado para pedir permissão. Ex: Позвольте пройти, пожалуйста. (Com licença para passar, por favor.)'
  },
  {
    id: 'saud-060',
    russian: 'Прошу прощения',
    transcription: 'proshu proshcheniya',
    portuguese: 'Peço perdão',
    english: 'I beg your pardon',
    category: 'saudacoes',
    known: false,
    context: 'Pedido formal de desculpas. Ex: Прошу прощения за опоздание. (Peço perdão pelo atraso.)'
  },
  {
    id: 'saud-061',
    russian: 'Не за что',
    transcription: 'ne za chto',
    portuguese: 'De nada',
    english: 'You\'re welcome',
    category: 'saudacoes',
    known: false,
    context: 'Resposta a um agradecimento. Ex: Спасибо! - Не за что! (Obrigado! - De nada!)'
  },
  {
    id: 'saud-062',
    russian: 'Не стоит благодарности',
    transcription: 'ne stoit blagodarnosti',
    portuguese: 'Não há de quê',
    english: 'Don\'t mention it',
    category: 'saudacoes',
    known: false,
    context: 'Resposta mais formal a um agradecimento. Ex: Большое спасибо! - Не стоит благодарности. (Muito obrigado! - Não há de quê.)'
  },
  {
    id: 'saud-063',
    russian: 'Всегда пожалуйста',
    transcription: 'vsegda pozhaluysta',
    portuguese: 'Sempre às ordens',
    english: 'Always welcome',
    category: 'saudacoes',
    known: false,
    context: 'Resposta calorosa a um agradecimento. Ex: Спасибо за помощь! - Всегда пожалуйста! (Obrigado pela ajuda! - Sempre às ordens!)'
  },
  {
    id: 'saud-064',
    russian: 'Рад вас видеть',
    transcription: 'rad vas videt',
    portuguese: 'Feliz em vê-lo (dito por homem)',
    english: 'Glad to see you (said by man)',
    category: 'saudacoes',
    known: false,
    context: 'Expressão de prazer ao ver alguém, usada por homens. Ex: Рад вас видеть снова! (Feliz em vê-lo novamente!)'
  },
  {
    id: 'saud-065',
    russian: 'Рада вас видеть',
    transcription: 'rada vas videt',
    portuguese: 'Feliz em vê-lo (dito por mulher)',
    english: 'Glad to see you (said by woman)',
    category: 'saudacoes',
    known: false,
    context: 'Expressão de prazer ao ver alguém, usada por mulheres. Ex: Рада вас видеть снова! (Feliz em vê-lo novamente!)'
  },
  {
    id: 'saud-066',
    russian: 'Как ваши дела?',
    transcription: 'kak vashi dela?',
    portuguese: 'Como vão as coisas? (formal)',
    english: 'How are things going? (formal)',
    category: 'saudacoes',
    known: false,
    context: 'Pergunta formal sobre a situação de alguém. Ex: Здравствуйте, как ваши дела? (Olá, como vão as coisas?)'
  },
  {
    id: 'saud-067',
    russian: 'Как твои дела?',
    transcription: 'kak tvoi dela?',
    portuguese: 'Como vão as coisas? (informal)',
    english: 'How are things going? (informal)',
    category: 'saudacoes',
    known: false,
    context: 'Pergunta informal sobre a situação de alguém. Ex: Привет, как твои дела? (Oi, como vão as coisas?)'
  },
  {
    id: 'saud-068',
    russian: 'Что случилось?',
    transcription: 'chto sluchilos?',
    portuguese: 'O que aconteceu?',
    english: 'What happened?',
    category: 'saudacoes',
    known: false,
    context: 'Pergunta quando algo parece errado. Ex: Ты выглядишь грустным. Что случилось? (Você parece triste. O que aconteceu?)'
  },
  {
    id: 'saud-069',
    russian: 'Как настроение?',
    transcription: 'kak nastroyeniye?',
    portuguese: 'Como está o humor?',
    english: 'How\'s your mood?',
    category: 'saudacoes',
    known: false,
    context: 'Pergunta sobre o estado de espírito. Ex: Привет, как настроение сегодня? (Oi, como está o humor hoje?)'
  },
  {
    id: 'saud-070',
    russian: 'Доброго здравия',
    transcription: 'dobrogo zdraviya',
    portuguese: 'Saudações (militar)',
    english: 'Greetings (military)',
    category: 'saudacoes',
    known: false,
    context: 'Saudação militar formal. Ex: Доброго здравия, товарищ полковник! (Saudações, camarada coronel!)'
  },
  {
    id: 'saud-071',
    russian: 'Честь имею',
    transcription: 'chest imeyu',
    portuguese: 'Tenho a honra',
    english: 'I have the honor',
    category: 'saudacoes',
    known: false,
    context: 'Expressão formal de respeito. Ex: Честь имею представиться, капитан Иванов. (Tenho a honra de me apresentar, capitão Ivanov.)'
  },
  {
    id: 'saud-072',
    russian: 'Разрешите обратиться',
    transcription: 'razreshite obratitsya',
    portuguese: 'Permissão para falar',
    english: 'Permission to speak',
    category: 'saudacoes',
    known: false,
    context: 'Frase formal militar. Ex: Разрешите обратиться, товарищ генерал! (Permissão para falar, camarada general!)'
  },
  {
    id: 'saud-073',
    russian: 'Будем знакомы',
    transcription: 'budem znakomy',
    portuguese: 'Vamos nos conhecer',
    english: 'Let\'s get acquainted',
    category: 'saudacoes',
    known: false,
    context: 'Expressão ao iniciar um relacionamento. Ex: Будем знакомы, меня зовут Анна. (Vamos nos conhecer, meu nome é Anna.)'
  },
  {
    id: 'saud-074',
    russian: 'Приветствую вас',
    transcription: 'privetstvuyu vas',
    portuguese: 'Eu o saúdo',
    english: 'I greet you',
    category: 'saudacoes',
    known: false,
    context: 'Saudação formal. Ex: Приветствую вас в нашем городе! (Eu o saúdo em nossa cidade!)'
  },
  {
    id: 'saud-075',
    russian: 'Доброго пути',
    transcription: 'dobrogo puti',
    portuguese: 'Boa jornada',
    english: 'Have a good journey',
    category: 'saudacoes',
    known: false,
    context: 'Desejo para quem está partindo. Ex: Доброго пути вам! (Boa jornada para você!)'
  },
  {
    id: 'saud-076',
    russian: 'Всех благ',
    transcription: 'vsekh blag',
    portuguese: 'Todas as felicidades',
    english: 'All the best',
    category: 'saudacoes',
    known: false,
    context: 'Desejo de todas as coisas boas. Ex: Всех благ вам и вашей семье! (Todas as felicidades para você e sua família!)'
  },
  {
    id: 'saud-077',
    russian: 'Доброй дороги',
    transcription: 'dobroy dorogi',
    portuguese: 'Boa estrada',
    english: 'Have a good road',
    category: 'saudacoes',
    known: false,
    context: 'Desejo para quem vai viajar de carro. Ex: Доброй дороги, езжайте осторожно! (Boa estrada, dirija com cuidado!)'
  },
  {
    id: 'saud-078',
    russian: 'Мягкой посадки',
    transcription: 'myagkoy posadki',
    portuguese: 'Pouso suave',
    english: 'Soft landing',
    category: 'saudacoes',
    known: false,
    context: 'Desejo para quem vai viajar de avião. Ex: Мягкой посадки и хорошего полёта! (Pouso suave e bom voo!)'
  },
  {
    id: 'saud-079',
    russian: 'Семь футов под килем',
    transcription: 'sem futov pod kilem',
    portuguese: 'Sete pés abaixo da quilha',
    english: 'Seven feet under the keel',
    category: 'saudacoes',
    known: false,
    context: 'Desejo de boa sorte para marinheiros. Ex: Семь футов под килем, капитан! (Sete pés abaixo da quilha, capitão!)'
  },
  {
    id: 'saud-080',
    russian: 'Доброго здоровьица',
    transcription: 'dobrogo zdorovitsa',
    portuguese: 'Boa saúde (coloquial)',
    english: 'Good health (colloquial)',
    category: 'saudacoes',
    known: false,
    context: 'Forma coloquial e afetuosa de desejar saúde. Ex: Доброго здоровьица, бабушка! (Boa saúde, vovó!)'
  }
];
