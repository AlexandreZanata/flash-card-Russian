// comida.js - Flashcards da categoria "Comida" (expandido para 80 palavras)

const comidaFlashcards = [
  {
    id: 'com-001',
    russian: 'Хлеб',
    transcription: 'khleb',
    portuguese: 'Pão',
    english: 'Bread',
    category: 'comida',
    known: false,
    context: 'Alimento básico na dieta russa. Ex: Я купил свежий хлеб. (Eu comprei pão fresco.)'
  },
  {
    id: 'com-002',
    russian: 'Вода',
    transcription: 'voda',
    portuguese: 'Água',
    english: 'Water',
    category: 'comida',
    known: false,
    context: 'Bebida essencial. Ex: Можно стакан воды? (Posso ter um copo de água?)'
  },
  {
    id: 'com-003',
    russian: 'Мясо',
    transcription: 'myaso',
    portuguese: 'Carne',
    english: 'Meat',
    category: 'comida',
    known: false,
    context: 'Termo geral para carnes. Ex: На ужин у нас мясо с овощами. (Para o jantar temos carne com legumes.)'
  },
  {
    id: 'com-004',
    russian: 'Рыба',
    transcription: 'ryba',
    portuguese: 'Peixe',
    english: 'Fish',
    category: 'comida',
    known: false,
    context: 'Alimento comum na culinária russa. Ex: Я люблю жареную рыбу. (Eu gosto de peixe frito.)'
  },
  {
    id: 'com-005',
    russian: 'Суп',
    transcription: 'sup',
    portuguese: 'Sopa',
    english: 'Soup',
    category: 'comida',
    known: false,
    context: 'Prato muito popular na Rússia. Ex: Борщ - это русский суп. (Borscht é uma sopa russa.)'
  },
  {
    id: 'com-006',
    russian: 'Молоко',
    transcription: 'moloko',
    portuguese: 'Leite',
    english: 'Milk',
    category: 'comida',
    known: false,
    context: 'Bebida láctea comum. Ex: Я пью молоко каждое утро. (Eu bebo leite todas as manhãs.)'
  },
  {
    id: 'com-007',
    russian: 'Сыр',
    transcription: 'syr',
    portuguese: 'Queijo',
    english: 'Cheese',
    category: 'comida',
    known: false,
    context: 'Produto lácteo popular. Ex: Российский сыр очень вкусный. (O queijo russo é muito saboroso.)'
  },
  {
    id: 'com-008',
    russian: 'Яйцо',
    transcription: 'yaytso',
    portuguese: 'Ovo',
    english: 'Egg',
    category: 'comida',
    known: false,
    context: 'Alimento básico. Ex: На завтрак я съел два яйца. (No café da manhã eu comi dois ovos.)'
  },
  {
    id: 'com-009',
    russian: 'Фрукт',
    transcription: 'frukt',
    portuguese: 'Fruta',
    english: 'Fruit',
    category: 'comida',
    known: false,
    context: 'Termo geral para frutas. Ex: Я ем фрукты каждый день. (Eu como frutas todos os dias.)'
  },
  {
    id: 'com-010',
    russian: 'Овощ',
    transcription: 'ovoshch',
    portuguese: 'Legume',
    english: 'Vegetable',
    category: 'comida',
    known: false,
    context: 'Termo geral para vegetais. Ex: Овощи полезны для здоровья. (Vegetais são bons para a saúde.)'
  },
  {
    id: 'com-011',
    russian: 'Яблоко',
    transcription: 'yabloko',
    portuguese: 'Maçã',
    english: 'Apple',
    category: 'comida',
    known: false,
    context: 'Fruta comum. Ex: Я ем яблоко каждый день. (Eu como uma maçã todos os dias.)'
  },
  {
    id: 'com-012',
    russian: 'Банан',
    transcription: 'banan',
    portuguese: 'Banana',
    english: 'Banana',
    category: 'comida',
    known: false,
    context: 'Fruta tropical. Ex: Бананы богаты калием. (Bananas são ricas em potássio.)'
  },
  {
    id: 'com-013',
    russian: 'Апельсин',
    transcription: 'apelsin',
    portuguese: 'Laranja',
    english: 'Orange',
    category: 'comida',
    known: false,
    context: 'Fruta cítrica. Ex: Я выжал сок из апельсина. (Eu espremi o suco de uma laranja.)'
  },
  {
    id: 'com-014',
    russian: 'Картофель',
    transcription: 'kartofel',
    portuguese: 'Batata',
    english: 'Potato',
    category: 'comida',
    known: false,
    context: 'Vegetal básico na culinária russa. Ex: Жареный картофель очень вкусный. (Batata frita é muito saborosa.)'
  },
  {
    id: 'com-015',
    russian: 'Морковь',
    transcription: 'morkov',
    portuguese: 'Cenoura',
    english: 'Carrot',
    category: 'comida',
    known: false,
    context: 'Vegetal comum. Ex: Морковь полезна для зрения. (Cenoura é boa para a visão.)'
  },
  {
    id: 'com-016',
    russian: 'Помидор',
    transcription: 'pomidor',
    portuguese: 'Tomate',
    english: 'Tomato',
    category: 'comida',
    known: false,
    context: 'Vegetal versátil. Ex: Я добавил помидор в салат. (Eu adicionei tomate à salada.)'
  },
  {
    id: 'com-017',
    russian: 'Огурец',
    transcription: 'ogurets',
    portuguese: 'Pepino',
    english: 'Cucumber',
    category: 'comida',
    known: false,
    context: 'Vegetal comum em saladas. Ex: Свежий огурец очень хрустящий. (Pepino fresco é muito crocante.)'
  },
  {
    id: 'com-018',
    russian: 'Рис',
    transcription: 'ris',
    portuguese: 'Arroz',
    english: 'Rice',
    category: 'comida',
    known: false,
    context: 'Grão básico. Ex: Рис хорошо сочетается с мясом. (Arroz combina bem com carne.)'
  },
  {
    id: 'com-019',
    russian: 'Макароны',
    transcription: 'makarony',
    portuguese: 'Macarrão',
    english: 'Pasta',
    category: 'comida',
    known: false,
    context: 'Massa popular. Ex: Я приготовил макароны с сыром. (Eu preparei macarrão com queijo.)'
  },
  {
    id: 'com-020',
    russian: 'Кофе',
    transcription: 'kofe',
    portuguese: 'Café',
    english: 'Coffee',
    category: 'comida',
    known: false,
    context: 'Bebida popular. Ex: Я пью кофе каждое утро. (Eu bebo café todas as manhãs.)'
  },
  {
    id: 'com-021',
    russian: 'Чай',
    transcription: 'chay',
    portuguese: 'Chá',
    english: 'Tea',
    category: 'comida',
    known: false,
    context: 'Bebida tradicional russa. Ex: Русские любят пить чай с сахаром. (Os russos gostam de beber chá com açúcar.)'
  },
  {
    id: 'com-022',
    russian: 'Сок',
    transcription: 'sok',
    portuguese: 'Suco',
    english: 'Juice',
    category: 'comida',
    known: false,
    context: 'Bebida de fruta. Ex: Я предпочитаю апельсиновый сок. (Eu prefiro suco de laranja.)'
  },
  {
    id: 'com-023',
    russian: 'Пиво',
    transcription: 'pivo',
    portuguese: 'Cerveja',
    english: 'Beer',
    category: 'comida',
    known: false,
    context: 'Bebida alcoólica popular. Ex: Русское пиво известно во всём мире. (A cerveja russa é conhecida em todo o mundo.)'
  },
  {
    id: 'com-024',
    russian: 'Вино',
    transcription: 'vino',
    portuguese: 'Vinho',
    english: 'Wine',
    category: 'comida',
    known: false,
    context: 'Bebida alcoólica. Ex: Я предпочитаю красное вино. (Eu prefiro vinho tinto.)'
  },
  {
    id: 'com-025',
    russian: 'Завтрак',
    transcription: 'zavtrak',
    portuguese: 'Café da manhã',
    english: 'Breakfast',
    category: 'comida',
    known: false,
    context: 'Primeira refeição do dia. Ex: На завтрак я ем кашу. (No café da manhã eu como mingau.)'
  },
  {
    id: 'com-026',
    russian: 'Обед',
    transcription: 'obed',
    portuguese: 'Almoço',
    english: 'Lunch',
    category: 'comida',
    known: false,
    context: 'Refeição do meio-dia. Ex: Обед обычно в час дня. (O almoço é geralmente à uma da tarde.)'
  },
  {
    id: 'com-027',
    russian: 'Ужин',
    transcription: 'uzhin',
    portuguese: 'Jantar',
    english: 'Dinner',
    category: 'comida',
    known: false,
    context: 'Refeição da noite. Ex: На ужин у нас суп и салат. (Para o jantar temos sopa e salada.)'
  },
  {
    id: 'com-028',
    russian: 'Соль',
    transcription: 'sol',
    portuguese: 'Sal',
    english: 'Salt',
    category: 'comida',
    known: false,
    context: 'Tempero básico. Ex: Передайте, пожалуйста, соль. (Passe o sal, por favor.)'
  },
  {
    id: 'com-029',
    russian: 'Сахар',
    transcription: 'sakhar',
    portuguese: 'Açúcar',
    english: 'Sugar',
    category: 'comida',
    known: false,
    context: 'Adoçante comum. Ex: Я пью чай с сахаром. (Eu bebo chá com açúcar.)'
  },
  {
    id: 'com-030',
    russian: 'Перец',
    transcription: 'perets',
    portuguese: 'Pimenta',
    english: 'Pepper',
    category: 'comida',
    known: false,
    context: 'Tempero picante. Ex: Добавьте немного перца в суп. (Adicione um pouco de pimenta na sopa.)'
  },
  {
    id: 'com-031',
    russian: 'Масло',
    transcription: 'maslo',
    portuguese: 'Óleo/Manteiga',
    english: 'Oil/Butter',
    category: 'comida',
    known: false,
    context: 'Pode significar óleo ou manteiga dependendo do contexto. Ex: Сливочное масло - manteiga; Растительное масло - óleo vegetal.'
  },
  {
    id: 'com-032',
    russian: 'Мёд',
    transcription: 'myod',
    portuguese: 'Mel',
    english: 'Honey',
    category: 'comida',
    known: false,
    context: 'Adoçante natural. Ex: Я люблю чай с мёдом. (Eu gosto de chá com mel.)'
  },
  {
    id: 'com-033',
    russian: 'Шоколад',
    transcription: 'shokolad',
    portuguese: 'Chocolate',
    english: 'Chocolate',
    category: 'comida',
    known: false,
    context: 'Doce popular. Ex: Я купил плитку шоколада. (Eu comprei uma barra de chocolate.)'
  },
  {
    id: 'com-034',
    russian: 'Торт',
    transcription: 'tort',
    portuguese: 'Bolo',
    english: 'Cake',
    category: 'comida',
    known: false,
    context: 'Sobremesa para ocasiões especiais. Ex: На день рождения у нас был торт. (No aniversário tivemos bolo.)'
  },
  {
    id: 'com-035',
    russian: 'Мороженое',
    transcription: 'morozhenoye',
    portuguese: 'Sorvete',
    english: 'Ice cream',
    category: 'comida',
    known: false,
    context: 'Sobremesa gelada. Ex: Летом я люблю есть мороженое. (No verão eu gosto de comer sorvete.)'
  },
  {
    id: 'com-036',
    russian: 'Печенье',
    transcription: 'pechenye',
    portuguese: 'Biscoito',
    english: 'Cookie',
    category: 'comida',
    known: false,
    context: 'Lanche doce. Ex: Я купил печенье к чаю. (Eu comprei biscoitos para o chá.)'
  },
  {
    id: 'com-037',
    russian: 'Колбаса',
    transcription: 'kolbasa',
    portuguese: 'Linguiça',
    english: 'Sausage',
    category: 'comida',
    known: false,
    context: 'Embutido popular na Rússia. Ex: На завтрак я ем бутерброд с колбасой. (No café da manhã eu como sanduíche com linguiça.)'
  },
  {
    id: 'com-038',
    russian: 'Ветчина',
    transcription: 'vetchina',
    portuguese: 'Presunto',
    english: 'Ham',
    category: 'comida',
    known: false,
    context: 'Carne processada. Ex: Я люблю бутерброды с ветчиной и сыром. (Eu gosto de sanduíches com presunto e queijo.)'
  },
  {
    id: 'com-039',
    russian: 'Курица',
    transcription: 'kuritsa',
    portuguese: 'Frango',
    english: 'Chicken',
    category: 'comida',
    known: false,
    context: 'Ave comum. Ex: На ужин у нас жареная курица. (Para o jantar temos frango frito.)'
  },
  {
    id: 'com-040',
    russian: 'Говядина',
    transcription: 'govyadina',
    portuguese: 'Carne bovina',
    english: 'Beef',
    category: 'comida',
    known: false,
    context: 'Carne de vaca. Ex: Я приготовил суп из говядины. (Eu preparei sopa de carne bovina.)'
  },
  {
    id: 'com-041',
    russian: 'Свинина',
    transcription: 'svinina',
    portuguese: 'Carne suína',
    english: 'Pork',
    category: 'comida',
    known: false,
    context: 'Carne de porco. Ex: Котлеты из свинины очень вкусные. (Almôndegas de carne suína são muito saborosas.)'
  },
  {
    id: 'com-042',
    russian: 'Баранина',
    transcription: 'baranina',
    portuguese: 'Carne de carneiro',
    english: 'Lamb',
    category: 'comida',
    known: false,
    context: 'Carne de ovelha. Ex: Шашлык из баранины - традиционное блюдо. (Espetinho de carne de carneiro é um prato tradicional.)'
  },
  {
    id: 'com-043',
    russian: 'Лук',
    transcription: 'luk',
    portuguese: 'Cebola',
    english: 'Onion',
    category: 'comida',
    known: false,
    context: 'Vegetal aromático. Ex: Я добавил лук в суп. (Eu adicionei cebola na sopa.)'
  },
  {
    id: 'com-044',
    russian: 'Чеснок',
    transcription: 'chesnok',
    portuguese: 'Alho',
    english: 'Garlic',
    category: 'comida',
    known: false,
    context: 'Tempero aromático. Ex: Чеснок придаёт блюду аромат. (O alho dá aroma ao prato.)'
  },
  {
    id: 'com-045',
    russian: 'Капуста',
    transcription: 'kapusta',
    portuguese: 'Repolho',
    english: 'Cabbage',
    category: 'comida',
    known: false,
    context: 'Vegetal muito usado na culinária russa. Ex: Щи - это суп из капусты. (Shchi é uma sopa de repolho.)'
  },
  {
    id: 'com-046',
    russian: 'Гриб',
    transcription: 'grib',
    portuguese: 'Cogumelo',
    english: 'Mushroom',
    category: 'comida',
    known: false,
    context: 'Fungo comestível. Ex: Русские любят собирать грибы в лесу. (Os russos gostam de colher cogumelos na floresta.)'
  },
  {
    id: 'com-047',
    russian: 'Салат',
    transcription: 'salat',
    portuguese: 'Salada',
    english: 'Salad',
    category: 'comida',
    known: false,
    context: 'Prato de vegetais. Ex: На обед у нас салат из свежих овощей. (No almoço temos salada de vegetais frescos.)'
  },
  {
    id: 'com-048',
    russian: 'Борщ',
    transcription: 'borshch',
    portuguese: 'Borscht',
    english: 'Borscht',
    category: 'comida',
    known: false,
    context: 'Sopa tradicional russa de beterraba. Ex: Борщ - традиционный русский суп. (Borscht é uma sopa russa tradicional.)'
  },
  {
    id: 'com-049',
    russian: 'Щи',
    transcription: 'shchi',
    portuguese: 'Shchi',
    english: 'Shchi',
    category: 'comida',
    known: false,
    context: 'Sopa tradicional russa de repolho. Ex: Щи - это суп из капусты. (Shchi é uma sopa de repolho.)'
  },
  {
    id: 'com-050',
    russian: 'Пельмени',
    transcription: 'pelmeni',
    portuguese: 'Pelmeni',
    english: 'Pelmeni',
    category: 'comida',
    known: false,
    context: 'Massa recheada com carne, similar a ravióli. Ex: Пельмени - традиционное русское блюдо. (Pelmeni é um prato russo tradicional.)'
  },
  {
    id: 'com-051',
    russian: 'Блины',
    transcription: 'bliny',
    portuguese: 'Blini',
    english: 'Blini',
    category: 'comida',
    known: false,
    context: 'Panquecas russas. Ex: На Масленицу мы едим блины. (Durante o Maslenitsa, comemos blini.)'
  },
  {
    id: 'com-052',
    russian: 'Икра',
    transcription: 'ikra',
    portuguese: 'Caviar',
    english: 'Caviar',
    category: 'comida',
    known: false,
    context: 'Iguaria de ovas de peixe. Ex: Чёрная икра - дорогой деликатес. (Caviar preto é uma iguaria cara.)'
  },
  {
    id: 'com-053',
    russian: 'Сметана',
    transcription: 'smetana',
    portuguese: 'Creme azedo',
    english: 'Sour cream',
    category: 'comida',
    known: false,
    context: 'Laticínio usado em muitos pratos russos. Ex: Борщ подают со сметаной. (Borscht é servido com creme azedo.)'
  },
  {
    id: 'com-054',
    russian: 'Творог',
    transcription: 'tvorog',
    portuguese: 'Queijo cottage',
    english: 'Cottage cheese',
    category: 'comida',
    known: false,
    context: 'Queijo fresco. Ex: На завтрак я ем творог с мёдом. (No café da manhã eu como queijo cottage com mel.)'
  },
  {
    id: 'com-055',
    russian: 'Каша',
    transcription: 'kasha',
    portuguese: 'Mingau',
    english: 'Porridge',
    category: 'comida',
    known: false,
    context: 'Prato de cereais cozidos. Ex: На завтрак я ем овсяную кашу. (No café da manhã eu como mingau de aveia.)'
  },
  {
    id: 'com-056',
    russian: 'Гречка',
    transcription: 'grechka',
    portuguese: 'Trigo sarraceno',
    english: 'Buckwheat',
    category: 'comida',
    known: false,
    context: 'Cereal muito popular na Rússia. Ex: Гречка с молоком - полезный завтрак. (Trigo sarraceno com leite é um café da manhã saudável.)'
  },
  {
    id: 'com-057',
    russian: 'Овсянка',
    transcription: 'ovsyanka',
    portuguese: 'Aveia',
    english: 'Oatmeal',
    category: 'comida',
    known: false,
    context: 'Cereal para mingau. Ex: Овсянка - полезный завтрак. (Aveia é um café da manhã saudável.)'
  },
  {
    id: 'com-058',
    russian: 'Пирог',
    transcription: 'pirog',
    portuguese: 'Torta',
    english: 'Pie',
    category: 'comida',
    known: false,
    context: 'Massa recheada, doce ou salgada. Ex: Я испекла яблочный пирог. (Eu assei uma torta de maçã.)'
  },
  {
    id: 'com-059',
    russian: 'Пирожок',
    transcription: 'pirozhok',
    portuguese: 'Pastelzinho',
    english: 'Small pie',
    category: 'comida',
    known: false,
    context: 'Versão pequena do пирог. Ex: Пирожки с капустой очень вкусные. (Pastelzinhos de repolho são muito saborosos.)'
  },
  {
    id: 'com-060',
    russian: 'Квас',
    transcription: 'kvas',
    portuguese: 'Kvass',
    english: 'Kvass',
    category: 'comida',
    known: false,
    context: 'Bebida fermentada tradicional. Ex: Летом хорошо пить холодный квас. (No verão é bom beber kvass gelado.)'
  },
  {
    id: 'com-061',
    russian: 'Водка',
    transcription: 'vodka',
    portuguese: 'Vodka',
    english: 'Vodka',
    category: 'comida',
    known: false,
    context: 'Bebida alcoólica tradicional russa. Ex: Водка - традиционный русский алкогольный напиток. (Vodka é uma bebida alcoólica russa tradicional.)'
  },
  {
    id: 'com-062',
    russian: 'Компот',
    transcription: 'kompot',
    portuguese: 'Compota',
    english: 'Compote',
    category: 'comida',
    known: false,
    context: 'Bebida de frutas cozidas. Ex: Мама сварила компот из яблок. (Mamãe fez compota de maçãs.)'
  },
  {
    id: 'com-063',
    russian: 'Варенье',
    transcription: 'varenye',
    portuguese: 'Geleia',
    english: 'Jam',
    category: 'comida',
    known: false,
    context: 'Conserva doce de frutas. Ex: Я люблю чай с вареньем. (Eu gosto de chá com geleia.)'
  },
  {
    id: 'com-064',
    russian: 'Бутерброд',
    transcription: 'buterbrod',
    portuguese: 'Sanduíche',
    english: 'Sandwich',
    category: 'comida',
    known: false,
    context: 'Pão com recheio. Ex: На завтрак я съел бутерброд с сыром. (No café da manhã eu comi um sanduíche de queijo.)'
  },
  {
    id: 'com-065',
    russian: 'Сосиска',
    transcription: 'sosiska',
    portuguese: 'Salsicha',
    english: 'Sausage',
    category: 'comida',
    known: false,
    context: 'Embutido de carne. Ex: На завтрак я ем сосиски с кашей. (No café da manhã eu como salsichas com mingau.)'
  },
  {
    id: 'com-066',
    russian: 'Котлета',
    transcription: 'kotleta',
    portuguese: 'Almôndega',
    english: 'Meatball/Cutlet',
    category: 'comida',
    known: false,
    context: 'Carne moída moldada. Ex: Мама приготовила котлеты с пюре. (Mamãe preparou almôndegas com purê.)'
  },
  {
    id: 'com-067',
    russian: 'Пюре',
    transcription: 'pyure',
    portuguese: 'Purê',
    english: 'Puree',
    category: 'comida',
    known: false,
    context: 'Alimento amassado. Ex: Картофельное пюре - популярный гарнир. (Purê de batata é uma guarnição popular.)'
  },
  {
    id: 'com-068',
    russian: 'Гарнир',
    transcription: 'garnir',
    portuguese: 'Guarnição',
    english: 'Side dish',
    category: 'comida',
    known: false,
    context: 'Acompanhamento. Ex: Рис - хороший гарнир к мясу. (Arroz é uma boa guarnição para carne.)'
  },
  {
    id: 'com-069',
    russian: 'Десерт',
    transcription: 'desert',
    portuguese: 'Sobremesa',
    english: 'Dessert',
    category: 'comida',
    known: false,
    context: 'Prato doce servido após a refeição principal. Ex: На десерт у нас мороженое. (Para sobremesa temos sorvete.)'
  },
  {
    id: 'com-070',
    russian: 'Закуска',
    transcription: 'zakuska',
    portuguese: 'Aperitivo',
    english: 'Appetizer',
    category: 'comida',
    known: false,
    context: 'Pequeno prato servido antes da refeição principal. Ex: Салат - хорошая закуска. (Salada é um bom aperitivo.)'
  },
  {
    id: 'com-071',
    russian: 'Специя',
    transcription: 'spetsiya',
    portuguese: 'Especiaria',
    english: 'Spice',
    category: 'comida',
    known: false,
    context: 'Tempero aromático. Ex: Эта специя придаёт блюду особый вкус. (Esta especiaria dá um sabor especial ao prato.)'
  },
  {
    id: 'com-072',
    russian: 'Голубцы',
    transcription: 'golubtsy',
    portuguese: 'Charuto de repolho',
    english: 'Cabbage rolls',
    category: 'comida',
    known: false,
    context: 'Prato tradicional de folhas de repolho recheadas. Ex: Бабушка приготовила голубцы. (A avó preparou charutos de repolho.)'
  },
  {
    id: 'com-073',
    russian: 'Оливье',
    transcription: 'olivye',
    portuguese: 'Salada russa',
    english: 'Russian salad',
    category: 'comida',
    known: false,
    context: 'Salada tradicional russa com batatas, cenouras, ervilhas e outros ingredientes. Ex: На Новый год мы всегда готовим оливье. (No Ano Novo sempre preparamos salada russa.)'
  },
  {
    id: 'com-074',
    russian: 'Винегрет',
    transcription: 'vinegret',
    portuguese: 'Vinagrete',
    english: 'Vinaigrette salad',
    category: 'comida',
    known: false,
    context: 'Salada tradicional russa com beterraba. Ex: Винегрет - традиционный русский салат. (Vinagrete é uma salada russa tradicional.)'
  },
  {
    id: 'com-075',
    russian: 'Окрошка',
    transcription: 'okroshka',
    portuguese: 'Okroshka',
    english: 'Okroshka',
    category: 'comida',
    known: false,
    context: 'Sopa fria de verão. Ex: Летом хорошо есть окрошку. (No verão é bom comer okroshka.)'
  },
  {
    id: 'com-076',
    russian: 'Холодец',
    transcription: 'kholodets',
    portuguese: 'Geleia de carne',
    english: 'Meat jelly',
    category: 'comida',
    known: false,
    context: 'Prato tradicional de carne em geleia. Ex: На праздники мы готовим холодец. (Nos feriados preparamos geleia de carne.)'
  },
  {
    id: 'com-077',
    russian: 'Селёдка',
    transcription: 'selyodka',
    portuguese: 'Arenque',
    english: 'Herring',
    category: 'comida',
    known: false,
    context: 'Peixe popular na culinária russa. Ex: Селёдка под шубой - популярный салат. (Arenque sob casaco de pele é uma salada popular.)'
  },
  {
    id: 'com-078',
    russian: 'Шашлык',
    transcription: 'shashlyk',
    portuguese: 'Espetinho',
    english: 'Shish kebab',
    category: 'comida',
    known: false,
    context: 'Carne grelhada em espetos. Ex: Летом мы часто готовим шашлык на даче. (No verão frequentemente preparamos espetinhos na casa de campo.)'
  },
  {
    id: 'com-079',
    russian: 'Кефир',
    transcription: 'kefir',
    portuguese: 'Kefir',
    english: 'Kefir',
    category: 'comida',
    known: false,
    context: 'Bebida láctea fermentada. Ex: Кефир полезен для пищеварения. (Kefir é bom para a digestão.)'
  },
  {
    id: 'com-080',
    russian: 'Ряженка',
    transcription: 'ryazhenka',
    portuguese: 'Ryazhenka',
    english: 'Ryazhenka',
    category: 'comida',
    known: false,
    context: 'Bebida láctea fermentada tradicional. Ex: Ряженка имеет карамельный вкус. (Ryazhenka tem um sabor de caramelo.)'
  }
];
